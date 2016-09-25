---
title:      Using Packer-azure plugin to build and deploy Azure images
subtitle:   Provision Windows images with Packer tool
caption:    Building preconfigured Windows images for Azure with Packer
tags:       [Packer, Azure, Windows]
avatar:     /images/stories/azure.png
nav-weight: 40
---

## Introduction

In this article, I'll explain how to provision Windows images with Packer, deploy them to Azure and spin up virtual machines based on them.
I hope this article will be helpful for those who want to migrate to Azure and automate image deployment.

<!--break-->

First, let’s talk about requirements and tools.

[Packer](https://www.packer.io) is a tool by HashiCorp for creating machine and container images for multiple platforms from a single source configuration. I will be describing how to build Azure specific images, but Packer lets you build images for any type of VMs and Docker images as well. The challenge is that, by default, Packer doesn't support building Azure images, as Azure only accepts images in the .vhd format. To be able to create the Azure images, we will need to install the packer-azure plugin, which is created and maintained by Microsoft.
[Here](https://github.com/Azure/packer-azure) you'll find how to set up the plugin and find examples of configuration files as well.
Now you can provision generalized images through scripts and deploy them to the Azure Storage.

I recommend installing the Azure CLI.
It's a fast and convenient way of communicating with Azure, much more so than through the web portal.

If you don't want to install all of these tools on your local machine, know that Packer and Azure CLI can run inside Docker containers.
Check out the following [link](https://github.com/Praqma/packer-made-win-slave) if you want to read up on this setup.

## Building the images

Packer creates images from a single source, a JSON file, which it will take from a public or private storage via image labels.
Before you start, you'll need to figure out what your base image will be.
Not all images are suitable, as the packer-azure plugin can only customize generalized images.
If you want to capture your image as a base, you must remove 'unique' information from your Windows installation, which will enable you to reuse it on different systems.
Check [this article](https://technet.microsoft.com/en-us/library/hh824938.aspx) for more detailed information about generalizing your image.

In my setup, I used the image from the official public storage.
To get a list of all images stored in the public repository you can execute the following command in Azure CLI:
> azure vm image list

![List](/images/stories/azure-list.png){: .pic .large}

This list will be very long and I definitely recommend you 'grep' for keywords.
You could use this [list](https://azure.microsoft.com/en-us/documentation/articles/virtual-machines-linux-cli-ps-findimage/) of commonly used images to see the options.

As a base image, I would choose the Windows Server 2012 Datacenter.
For the packer-azure plugin, you need to capture a label of the image.
Now call the following using azure-cli again:
>azure vm image show <name-of-the-image.vhd>

![Show](/images/stories/azure-show.png){: .pic .large}

Now it's time for our configuration!

#### Example of The JSON file

	{
	  "variables": {
	    "sn": "Your subscription name",
	    "ps": "path/to/your/publish-settings", //download it from web portal
	    "sa": "name of the azure storage",  //if you have one, otherwise Packer will create new one
	    "scripts": "/path/to/provisioning/scripts",
	    "image_label": "The label of the image we discovered above"
	  },
	  "builders": [
	    {
	      "type": "azure", // type of builder
	      "publish_settings_path": "{{user `ps`}}",
	      "subscription_name": "{{user `sn`}}",
	      "storage_account": "{{user `sa`}}",
	      "storage_account_container": "images",
	      "os_type": "Windows",
	      "os_image_label": "{{user `image_label`}}",
	      "location": "North Europe",   // your subscription location
	      "instance_size": "Medium",
	      "user_image_label": “Name your new image as you wish"
	    }
	  ],
	  "provisioners": [
	    {
	      "type": "azure-custom-script-extension", //type of the provisioning
	       "distr_src_path": "{{user `example_dir`}}/srcFolder", // there you set the <process>.exe file
	       "inline": [
	        "Write-Host 'Inline script!'",
	        "Start-Process 'process.exe' -Wait -Argument 'argument'",
	        "Write-Host 'Inline script finished!'"
	      ],
	      "script_path": "{{user `scripts`}}/setup.ps1" // path to the script you want to execute during provisioning
	    }
	  ]
	}

To build provisioned image run the packer command:
>  packer build <name-of-the-json-file>.json

The build will take about 35-40 minutes.
If it finishes successfully, you will find a new image in the Azure storage.
You can now spin up VMs via the web portal or by using the azure-cli:
> ./azure-cli.sh vm create <VM-name> <image-name> -g <username> -p <pwd>  -r -e -z <size-of-instance>
> ./azure-cli.sh vm start <VM-name>

One of the benefits of using Packer is that you only require one source to build several images for the different VMs.
You could use several builders:

#### Example of the multiple builders

	"builders":[
	{
	  "type": "azure",
	 ...
	},
	{
	  "type": "virtualbox-iso",
	   ...
	}
	]

You can also declare different provisioners for the different builders types.
To build them selectively, set the -only=type-of-builder option when building.

#### Example of the multiple provisioners

	"provisioners": [
	    {
	      "type": "azure-custom-script-extension",
	      "only": ["azure"],
	      "script_path": "{{user `example_dir`}}/script1.ps1"
	    },
	    {
	      "type":"powershell",
	      "only": ["virtualbox-iso"],
	      "script": "{{user `example_dir`}}/script2.ps1"
	    }
	  ]
