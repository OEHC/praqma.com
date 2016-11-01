---
title: Trust in Docker Images
subtitle: Can you really trust your Docker images?
tags:
  - Docker
  - Featured
author: Bue Petersen
comments: false
avatar: /images/stories/container.jpg
nav-weight: 5
---

Just pulling a Docker image from the Docker Hub is like pulling an arbitrary binary blob from somewhere, and without really knowing what's in it, execute it, and hope for the best! At least, for some images. How can we decide if we trust Docker images?
{: .kicker }

<!--break-->

## It all comes down to traceability as I will point out in the following.

Background: At our customers, we use containers heavily, why once a while we are using a Docker image from the Docker Hub as an offset for infrastructure or build automation. Thus, I then have to consider - *do I trust the Docker image enough to give it access to all the secrets and intellectual property of my customer?* I might not be the one to take the decision, but I'm definitely the one supplying the information to make the decision.

## Scoping the trust

I'm not trying to explain how to do an elaborate and exhausting security review of a Docker image, as the scope for such review varies a lot. What matters is that you as the user have the information you need to also gain the level of trust that you need. That might not be to the extend of each individual binary file of the image, but at least on a high-level that you find reasonable for your business.

## Traceability is the answer

No matter how deep you need to go into details of analyzing a Docker image, the simple answer to gain the level of trust you need, is to make sure that you have full traceability of how the Docker image was created. Without this you can't trust anything. However, given that you have full traceability, you can gain the insight you need to the level that fits you.

## It's all about traceability

To trust the content of a Docker image I have three requirements:

* Full traceability of how it was created
* Ensurance that it isn't changed after its creation
* Confirmation that the pulled image is not changed on the way

I will look into the first, as my level of trust goes fine with the two last requirements, given that I trust the Docker tools in these matters - but I still want to know what's inside the image for sure.

## Looking into the Docker file

Before I run a Docker container, I always look at the Docker file behind it - assume for now I know which.

Here are my thoughts on what I look for, using the example from [Praqma/Yocto-build]( https://github.com/Praqma/yocto-build-container/blob/7e71250a34654af3bd5066cc3d9630e1d68a42c0/Dockerfile)

```
# Base image for building Yocto images
FROM ubuntu:14.04

# Add support for proxies.
# Values should be passed as build args
# http://docs.docker.com/engine/reference/builder/#arg
ENV http_proxy ${http_proxy:-}
ENV https_proxy ${https_proxy:-}
ENV no_proxy ${no_proxy:-}

ENV DEBIAN_FRONTEND noninteractive

# Yocto's depends
# Taken from here http://www.yoctoproject.org/docs/2.1/mega-manual/mega-manual.html#packages
RUN apt-get -qq --yes update && \
    apt-get -qq --yes install gawk wget git-core diffstat unzip \
    texinfo gcc-multilib build-essential chrpath socat libsdl1.2-dev \
    xterm && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# We need this because of this https://blog.phusion.nl/2015/01/20/docker-and-the-pid-1-zombie-reaping-problem/
# Here is solution https://engineeringblog.yelp.com/2016/01/dumb-init-an-init-for-docker.html
RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.1.3/dumb-init_1.1.3_amd64
RUN chmod +x /usr/local/bin/dumb-init
# Runs "/usr/bin/dumb-init -- /my/script --with --args"
ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]

# create a group/user
RUN groupadd --gid 1000 buildgroup

# create a non-root user
RUN useradd --home-dir /var/build -s /bin/bash \
        --non-unique --uid 1000 --gid 1000 --groups sudo \
        builduser

WORKDIR /var/build

# give users in the sudo group sudo access in the container
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

USER builduser
```

* `FROM` because if the Dockerfile uses a base image, I would need to start my evaluation there.
* _Package manager commands_ that are used to install software, because if they are from sources I don't trust there might be issues.
* _Downloads_ like the wget command or if someone uses curl. I need to look at the content downloaded.
* `ENTRYPOINT` is interesting, as this is what the container does. Especially I'm concerned with scripts here.
* _Other security related changes_ which in the above example is the group and sudo changes for the user.

Depending on the level of trust I need to have in the image, I need to evaluate each and every part of the Docker file into the next level. In the above example read the scripts and evaluate those, and look at the downloaded content.

## Next level of concern

Let's now assume that I have evaluated all the content that goes into the Docker file to an extent where it fits my level of trust. How would I know if these things are actually what go into the final image?

The build environment becomes important now, and again this leads back to traceability. This time it's not the content, but the process.

Almost any Docker image uses the `FROM` statement, and many uses the base Linux distro images e.g. `FROM ubuntu:14.04`. Personally, lets say I trust Ubuntu base image on Docker hub, but there is no guarantee that it actually contains what it says. If I build the Docker file on my local machine, my `ubuntu:1404` could be tricked to be anything. So I need to trust the build environment to ensure my base image is what the name says it is.

A similar concern related to the wget command, which downloads my script that I now have reviewed and decided that I trust. When executing the build environment, the DNS could be fiddled with or even the script might be different and replaced. I would need to trust the DNS is correct in the build environment.

In the above example, I would basically also like to ensure the script I evaluated myself, has matching checksum with the downloaded one, so it matches what is reviewed.

## Docker automated builds gain trust

One thing you need to require from your Docker images is that they are build using the [Docker automated builds](https://docs.docker.com/docker-hub/github/#automated-builds-from-github) for example for Github. Then the trust of traceability is improved. With Docker automated builds you get traceability between the source of the Docker file, the version of the image, and the actual build output. You can easily follow that. Here is an example from the above Docker file.

## Autobuilds links README and repo to frontpage

When configuring automated builds you ensure that the `Full Description` is always correct, as it point to the latest readme file from the repo. Moreover, you can trust the repository URL under `Source Repository`.

The `Short Description` is up for edits from the authors.

![Automated builds links readme and repo to frontpage](/images/stories/trustindocker.png){: .pic .center .large}

Feels good for the trust to know these are correct, at least for "latest".

## Builds are traceable

Next step is to look at the build process, and as stated earlier the traceability is important.

With automated builds you get the `Build Details` tab, with list of automated builds. You typically see several `latest` tagged builds, but also hopefully specific version builds, like here `0.1.1`.

![Automated builds shows the build details](/images/stories/imagebuilds.png){: .pic .center .large}

## Build process is traceable if you click the build details

Now click one of the lines in the build details, and you get all the details about how the image was build as shown briefly in the image below:

![Click a build detail to show detail of the build process](/images/stories/imagebuildtrace.png){: .pic .center .large}

Each build´s details show me a lot of information that I can use for improved trust in the image, among others I find these important:

* The SHA from the git repository with my Docker file
* Every command from the Docker file that is executed is shown
* Finally it all ends with a digest of the image pushed

## Concluding on automated builds

Require automated builds from your Docker images, so you can get traceability to the level you need for trusting it.

If there is no automated builds, you should build the image yourself.

## Extras

You could do even more than what I've proposed, the level of depth just needs to match your security level. There are a few other easy steps related to container security that are worth mentioning. The searches will show many other good effort towards security.

## Content trust

Even though we might assume that we can trust the Docker tools, content can be changed after my traceability analysis, so I would need to look into [Content trust in Docker](https://docs.docker.com/engine/security/trust/content_trust/).

## Docker Bench for Security

If you want to evaluate security, not only the specific image, you should definitely look at the [Docker Bench for Security](https://github.com/docker/docker-bench-security#running-docker-bench-for-security) and the related Docker blog post about [understanding Docker security and some best practices](https://blog.docker.com/2015/05/understanding-docker-security-and-best-practices/).

## Security references

Container Solutions have a nice [Cheat Sheet for Docker Security](http://container-solutions.com/docker-security-cheat-sheet/), this is much related to the complete security review of using containers. Definitely worth thinking about.
Related to my thought above, note their recommendation in "VERIFY IMAGES" about pulling images by digest or building them yourself.
