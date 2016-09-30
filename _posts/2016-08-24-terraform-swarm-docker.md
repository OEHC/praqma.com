---
title: Create Docker Swarm cluster in AWS using Terraform
tags: [Terraform, AWS, Docker] 
avatar: /images/stories/logo_large-3e11db19.png
nav-weight: 40
---

Here is one idea how to automate AWS infrastructure to deploy it easily and safety, using a tool from HashiCorp. That tool is [Terraform](https://www.terraform.io/intro/index.html). Using Terraform helps to create the infrastructure you can change, and trace safely and efficiently. In this blog post, you will find a setup that deploy Docker swarm cluster to AWS.   

<!--break-->

## Terraform + AWS + Swarm.

Go to this [link](https://github.com/Praqma/terraform-aws-docker) in GitHub for details of the setup. 

### Terraform installation.

The istruction how to install the tool you may find on the official page. I use a docker image by amontaigu to run Terraform as a Docker container. To run Terraform commands, I created a shell script you can find it in the repo. 
```
./terraform.sh <command>
```
That is it.

### Configuration

Terraform is managing infrastructure by the *.tf files. In README, It is provided all necessary information you may need to use the setup. I just describe the files, help you to build a picture how it works.

* **app-instances.tf** It is the main configuration file. There is information about your AWS account and resources you want to create there. "provider" block contains information about providers, in your case it is AWS, access and secret keys and the region. There are two configurations for the instances I want to run up. There is one master instance - it is a swarm master and two swarm agents. You can see only one agent configuration. Terraform can run up so many instances from the only one resource block as you need, using "count" variable. In "provisioner" block it is described docker command required to create swarm cluster.
* **variables.tf** All confidential information you can keep there.
* **key-pair.tf** Ssh key pair you can store as a separate resource.
* **outputs.tf** Terraform provides you the ability keep some resources from the output. For example, if you need to know IP address of instances.
* **security-group.tf** Here I combined all instances into the same security group. In this file, you have a possibility to configure the security rules. You can create a few groups with different rules. For examples, you can allow the internet access for one group and open just a particular port for another. By default, I opened all ports, but it is something we could configure. Also, you can create networks, subnets, VPC and so on. 

### Swarm

A small swarm cluster will be created during startup. One swarm manager + two swarm workers. The swarm is initiated during provisioning. All other swarm agents (workers) will connect to the manager by a token, generated during the swarm initialisation. The trick is we should do it automatically, but we don't know the token before the initialisation. To send the token to the agents, I copy it to a file on the swarm-manager instance and do "scp" to the agent's machines.

### How to use it

After all configuration files are ready, you can do check if there are no mistakes
```
./terraform.sh plan
```
This command will show up either syntax errors or list of resources will be created. After you can run
```
./terraform.sh apply
```
This command will build and run all resources in the *.tf files. If you run this command many times, Terraform will be destroying previous instances before creating new ones. That is it. Now you have fully functioned docker swarm cluster in AWS.

Using Terraform, you may also configure secure groups, VPC, networks, iam's and so on. It is the power tool to automate infrastructures. The most important thing is tools like Terraform helps you keep configuration tracible, like this setup in GitHub. It gives you the ability to deploy your infrastructure repeatedly from any host.   

