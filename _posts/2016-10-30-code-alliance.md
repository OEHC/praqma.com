---
title: The Continuous Delivery Alliance
subtitle: Now open to all, no more membership fees
tags:
  - Josra
  - CoDe Alliance
author: Lars Kruse
author-link: 'http://twitter.com/lakruzz'
comments: false
avatar: /images/stories/code-alliance-3x4.png
nav-weight: 5
published: false
---

For nearly two years now we've been running Josra: _Joint Open Source Roadmap Alliance_. In that short time our members have collaborated on some pretty awesome open source projects. Now we're making it easier for people to join by scrapping the membership fee. Oh, and we're also changing the name! 
{: .kicker }

<!--break-->

The alliance formed and met for the first time in Oslo in April 2015. Our primary focus was to identify companies that had an ambitious mindset about the new software development paradigm: continuous delivery, automation in general, anything as code, programmable infrastructure, DevOps ......all that jazz.

We saw our clients becoming more and more dependent on Open Source as they delved deeper into contemporary modern tools. We also wanted them to feel safe to explore the possibilities of Open Source. Specifically, we wanted them to be able to engage in Open Source without worrying about developing a dependency that would slowly turn their software developers into purely Open Source contributors.

Praqma already had a lot of Open Source community experience, and had earned a lot of good Karma along the way. We realised that we were in a great position to coordinate an Open Source alliance. First of all we would utilize the knowledge and insight gained from our work with _many_ different clients to identify _common_ issues and challenges. Then we would facilitate cooperation between likeminded companies with matching needs and desires to focus on the generic nature of their challenges. Once we'd established those relationships we would, on a basis of shared costs and ongoing collaboration, develop generic but configurable Open Source solutions.

To kickstart the project we invited some of our most ambitious customers to join. The alliance launched with Grundfos, Volvo, Yxlon International, MAN Diesel & Turbo, Novelda, Atmel, and after a short time Cryptera joined too.

## Finding our format

We decided to meet approximately every six months for a full-day event with each member organization sending between one and three participants. We wanted these meet-ups to proceed on an informal basis so that they would be more open and flexible than a typical conference style setup. We would demo some of the things the alliance had been working on since the last meeting, but the majority of the day would be spent in break-out sessions where members would gather in groups according to common interests and discuss roadmaps for individual tools, new ideas, and tricky challenges.

Atmel hosted the most recent session in Trondheim and they gave us the grand tour of their impressive and extensive implementation of the Atlassian tool stack and demonstrated the [automated build pipeline](https://github.com/Praqma/automated-branch-pipelines){: target="_blank" } approach that was developed in context of the alliance.

For the rest of the day we organized ourselves into three parallel groups and over two sessions we covered a total of six specific topics together. We also set out a roadmap for these initiatives to cover the six months until the next meeting.

In the evening we all hit downtown Trondheim for a meal and plenty of beers to encourage more scheming and planning. A napkin is sometimes more useful than a whiteboard!

Everyone agreed that this is the format we want to continue with:

* One of the members will host the venue
* The host will own about an hour of the morning agenda and offer insights into their way of working
* There will be practical demonstrations of the achievements made by the alliance since the last gathering.
* We will meet in parallel open-space style discussions and develop roadmaps for joint initiatives and efforts for the coming 6 months
* We will all stay over one night to make sure that the fun can continue during the evening over a relaxed meal and drinks


The funding is also crystal clear:

* It's free to attend and typically each member organization sends 1-3 participants
* One of the member organizations will be the host and provide the venue and serve the lunch
* Every participant will pay for their own flights and accommodation
* Praqma will host the evening dinner and drinks

## How the actual development is jointly funded
Now that we've found the right format we won't need to charge membership fees anymore. How will that work? It's so simple!

Here goes:

When one or more members identify the need for something we will hammer out a _statement of work_ (SoW). This very much resembles an _epic_ for those familiar with SAFe terminology. A Statement of work is a short description - one page, two at the most, touching on:

* What's the user scenario?
* What's the problem?
* What's the imagined solution?
* What's the intended design?
* What exactly is the _Minimum Viable Product_ (MVP)?
* What's the price (fixed, of course)?

We will make a SoW description for an issue provided at least one member is genuinely interested in it and can advocate for its usefulness. When the SoW is done we will present it to the rest of the alliance to see if the other members are interested in participating.

We're establishing _the funding fathers_ and as soon as we have a commitment on the budget we will execute and produce the MVP. As work is delivered it immediately becomes available to everyone. The invoice is simply split among the members who supported the SoW.

If there is an interest in taking it further than the MVP then we will produce a SoW for the expansion.

Even though some of our joint initiatives in the alliance are quite ambitious an individual SoW is never larger than 150-200 estimated hours of work. In fact, most SoWs are considerably less time consuming, with some requiring just 10-20 hours of estimated work.

## What are we doing

The success of the alliance has been quite overwhelming compared to what we had dared to hope for when we first started out. The following is just a subset of what we have already achieved.

And remember, these are all Open Source projects that _everyone_ - not just alliance members - has unhindered access to.

### 2git
A small domain specific language and a corresponding interpreter extended from groovy that allows migration from any version control system to git. 2git allows companies to specify their migrations as configurations and then run them to see if the result fits the needs. If it doesn't then they can simply adjust the configuration and run it again. It supports a try-out approach to VCS migration and it supports a scenario where large organizations can migrate developers in chunks of teams or components, rather than big-bang migrations.

Funded by Grundfos and Volvo
{: .highlight}

### The Pretested Integration Approach
An extension to Jenkins that allows you - simply by checking a checkbox - to automatically integrate any branch onto your integration branch provided that an automated toll-gate criteria is executed and passed. Conceptually, it's the same as a pull request, but with this there is no halt or stop or manual input required from a colleague. It supports the ideal _release train_ branching strategy.

Funded by Atmel, Novelda, Grundfos, Cryptera, Volvo. The plugin has more than 150 installations.
{: .highlight}

### Tracey
An idea bred through collabortion between Grundfos and Volvo. If a full trace is required in your software development lifecycle then there needs to be just _one_ tool that any contributing process can report traces to. Tracey is a microservice that allows you to throw _any_ format of data on a REST api and store it in a graph database. It will keep track of related events and it is capable of reacting to incoming events and triggering external actions. Like other microservices, Jenkins jobs or data sync with other tools.

In the alliance we all believe that Tracey has the potential to belong to the next-generation automation platform, where no centralized client/server structure as known from most current CI servers is even required.

In the future all automation will be distributed as countless microservices in orchestrated containers and Tracey will keep track of it all.

This was funded by Grundfos and Volvo and is part of the established Software Center Alliance run by Jan Bosh at Chalmers involving Ericsson's _Eiffel_ protocol.
{: .highlight}

### Praqmatic Automated Changelog - PAC

PAC is capable of analyzing the commits in a VCS and tracing them back to the task or change management system. It can capture objects like caption, description, commits, change set, or any other item you configure it to. Data is captured in MarkDown and styled using CSS and Liquid to generate reports supported by templates in both HTML and PDF.

PAC is a framework that can be extended to use any VCS and any issue tracking system provided they have an API. Git, Mercurial, Jira, GitHub Issues, Bugzilla and a handful of others are already supported.

Once PAC is configured in your pipeline you'll get all your future release notes for free.

Funded by Cryptera, Yxlon International
{: .highlight}

### MemoryMap

This is another Jenkins plugin that will visualize the consumption and utilization of memory in the compiled binary. It's used within embedded software to make correct utilization of your device's memory an integrated part of your pipeline. It simply reads command files, maps them against the map files, and then visualizes the relation and offers configurable thresholds. It was created as a framework that can support multiple compilers and it currently supports the Texas Instruments compiler and GCC.

Funded by Yxlon International and MAN Diesel & Turbo. This plugin has hundreds of installations.
{: .highlight}

### There's more
There are plenty of other Open Source projects that have originated from the alliance. You are welcome to browse the Open Source repositories in [our GitHub organization](https://github.com/Praqma/){: target="_blank"} - don't hesitate to contact us, if you see anything that catches your interest.

## How to become a member
Membership is by invitation only. We need to be selective to ensure members are sufficiently ambitious, engaged and enthusiastic.

If if you are a customer of Praqma you are automatically invited. Why? Because our customers are always ambitious, engaged and enthusiastic!

[Enroll to our next gathering December 5th, hosted by Grundfos in Bjerringbro](http://www.code-conf.com){: target="_blank" }
{: .highlight }

{% include call_to_action.html %}
