---
title:      Proxying Docker containers with ease
subtitle:   Traefik is a reverse proxy made for the new wold of service discovery and is especially usefull when running containers
tags:
  - Docker
  - Traefik
  - proxy
redirect_from:
  - /jobs/praqtitioner/
avatar:     /images/stories/traefik.logo.png
nav-weight: 5
published: false
---

[Traefik](http://traefik.io) is a reverse proxy made for the new wold of service discovery and is especially usefull when running containers.

In this blogpost, we will look at how we can proxy a Jenkins container running on a Docker host through Traefik. Then we will deploy an Artifactory container aswell, on the same port, but on another subdomain.
{: .kicker }

<!--break-->

Jenkins runs on port 8080 and 50000. We want to expose what is being served on port 8080 on the proxy's port 80. We want to service it under the domain praqma.io as a subdomain : htp://jenkins.praqma.io.

On our laptop we dont have jenkins.praqma.io pointing to our machine, so we add it to our hosts file

	echo "192.168.1.165 jenkins.praqma.io" >> /etc/hosts

Replace the ip with your laptops ip.

## Start the Jenkins container
Now we start the Jenkins docker container. We need to give it a label, as traefik pickes the first exposed port, and in this case that is port 50000. So we add the label traefik.port=8080 to tell traefik to service this port instead. We give the container a name (Jenkins). This will be the subdomain.

	docker run --name jenkins --label="traefik.port=8080" -d jenkins

## Create a traefik.toml file:

Now we create a configuration file for Traefik, telling it to listen to the docker socket for changes. Traefik will then reconfigure when changes happens. Eg. if a container starts or stops.

The [web] part adds a traefik web consol where we can see our frontends, backends and health. It will service this consol on port 8088.

In the [Docker] section we specify the path to docker.sock, the domain we want to use and if Traefik should keep listen for changes or not.

We want to expose all containers by default, given by exposedbydefault = true
This host is not running in Swarm mode, so we set swarmmode to false.

{% highlight shell %}
[hoeghh@webserver traefik_docker]$ cat traefik.toml
[web]
  address = ":8088"
  [web.statistics]

################################################################
# Docker configuration backend
################################################################
[docker]

endpoint = "unix:///var/run/docker.sock"
domain = "praqma.io"
watch = true

# Expose containers by default in traefik
exposedbydefault = true

# Use the IP address from the binded port instead of the inner network one. For specific use-case :)
usebindportip = true

# Use Swarm Mode services as data provider
swarmmode = false
{% endhighlight %}

## Start the proxy
Now we are ready to start the Traefik proxy server, giving it the configuration file as a option.

First we download the latest binary of Traefik from here:
[traefik download](https://github.com/containous/traefik/releases)

```
wget https://github.com/containous/traefik/releases/tag/v1.1.1
```
```
chmod u+x traefik_linux-amd64
sudo ./traefik_linux-amd64 -c traefik.toml
```
And there you go. Traefik will listen to the docker.sock for containers and changes on the host, and serve the containers to the outside work.

Add the main domain to your hosts file
```
echo "192.168.1.165 praqma.io" >> /etc/hosts
```

## Test the proxy
Now go to the consol of Traefik at [praqma.io:8088](http://praqma.io:8088) for Traefik consol

![Traefik consol](traefik_consul.png)

You will see that we have a frontend and a backend. The Rule for the frontend is : Host:jenkins.praqma.io.
The backend is using our Docker container to get the trafic.

Now try and visit Jenkins

> open http://jenkins.praqma.io

You should then get the Jenkins start page :

![Jenkins start page](jenkins_container_traefik.png)

## Start Artifactory
Now we start artifactory, and want it served on the dns artifactory.praqma.io.

```
docker run --name artifactory --label="traefik.port=8080" -d mattgruter/artifactory
```
Add Artifactory to your hosts file
```
echo "192.168.1.165 artifactory.praqma.io" >> /etc/hosts
```

Now Traefik should pick up our Artifactory container, and start serving it on
[Artifactory.praqma.io](http://artifactory.praqma.io) automaticly.

You will notis that Artifactory has been added to the consol for Traefik at [praqma.io:8088](http://praqma.io:8088)

![Traefik consol](jenkins_artifactory_traefik_consol.png)


## Stopping Jenkins
Now stop the Jenkins container, while viewing the Traefik consol.
```
docker stop jenkins
```
It will automaticly remove the Jenkins entry from Traefik. Clever.

## Next time
So now we can start docker containers on a single host, and get them proxied. But single host containers are not the future. Orchestrators are, like Swarm og Kubernetes.

In the next blogpost we will setup Traefik to connect to the the api-server (master) of a Kubernetes cluster and do the same trick there. Only in Kubernetes we have an object called Ingress that we will take advantage of.

Stay tuned...
