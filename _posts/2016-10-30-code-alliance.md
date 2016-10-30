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

For a couple of years now, we've been running Josra; _Joint Open Source Roadmap Alliance_. The members have produced some pretty awesome open source projects together. Now we're making it easier for everyone to join - by skipping the membership fee - and we're changing the name
{: .kicker }

<!--break-->

The alliance constituted and met for the first time in Oslo a day in April 2015. The focus was, right from the beginning, to single out companies, that had an ambitious mindset about the new software development paradigm; continuous delivery, automation in general, anything as code, programmable infrastructure, DevOps ...and all that Jazz.

The original idea was, that Praqma already had a lot of Open Source community experience, and a lot of good Karma too, and we saw that our clients became more and more dependent op Open Source as they walked further and further into the landscape of contemporary modern tools - as most of the were Open Source too.

We wanted to companies to feel safe when taking these steps and not be concerned about how the Open Source dependency might introduce an undesired scope creep and slowly turning their software developers with specific domain skills into Open Source contributors instead.

With the alliance, we offered the members to facilitate all this; We would utilize our knowledge and insight, gained from our work with _many_ different clients to identify _common_ issues and challenges, and then we would facilitate that likeminded companies with matching needs and desires would focus on the generic nature of their challenges and then we would jointly, with shared costs and ongoing collaboration, develop the generic but configurable solution, as Open source.

To kickstart the alliance we invited some of our most ambitious customers at the time to join: The alliance took off with Grundfos, Volvo, Yxlon International, MAN Diesel & Turbo, Novelda and Atmel short time after Cryptera joined too.

## Finding our format

We gathered roughly every half year in a full-day, each member organization sends one, two or maybe three participants. We run our gatherings in a rather informal unconference style; During the day, we will show demos of some of the achievements the alliance have made since last, but the majority of the day is spent in break-out sessions where the members gather in groups of interest and discuss the roadmap of the individual tools, new ideas or tricky challenges.

Last time we met, Atmel hosted the session in Trondheim and they gave us the grand tour on their impressive and extensive implementation of the Atlassian tool stack and demonstrated the [automated build pipeline](https://github.com/Praqma/automated-branch-pipelines){: target="_blank" } approach that was developed in context of the alliance.

The rest of the day we organized ourselves in three parallel groups during 2 sessions, covering a total of six specific topic together. Simply aligning the roadmap for these initiatives for the next six months, until we meet again.

In the evening we all hit Trondheim downtown together for a meal and plenty of beers - to support even more scheming and planning, swapping whiteboards for napkins.

Everyone agreed that this is the format we want to continue with:

* One of the members will host the venue
* The host will own about an hour of the morning agenda and give insight to their way of working
* There will be practical demonstrations of the achievements in the alliance since last gathering.
* We will meet in parallel open-space style discussions and hammer out roadmaps for or joint initiatives and efforts going 6 months forward
* We will all stay over one night, to make sure that all the fun can continue during the evening over a relaxed meal and drinks


The funding is also crystal clear:

* It's free to attend - typically each member organization sends 1-3 participants
* One of the member organizations will be the host, and provide the venue and serve the lunch
* Every participant will pay for their own flights and accommodation
* Praqma will host the evening dinner and drinks

## How the actual development is jointly funded
This part is so simple, that it's obvious and now when we've found the right format, also the reason why we don't need to charge membership fees anymore.

Here goes:

When one of more members have identified a need for something, we hammer out a _statement of work_ (SoW) this resembles very much an _epic_ for those familiar with SAFe terminology. A Statement of work is a short description - one page, two at the most - touching on:

* What's the user scenario?
* What's the problem?
* What's the imagined solution?
* What's the intended design?
* What exactly is the _Minimum Viable Product_ (MVP)?
* What's the price (fixed, of course)?

We only make SoW descriptions on issues that at least one members is genuinely interested in, and can advocate for. When the SoW is done, we present it to all members to explore if anyone has feedback or mutual interest in participating.

We're establishing _the funding fathers_ and as soon as we have a commitment on the budget we execute, and we produce the MVP. When work is delivered it immidiately becomes available to everyone. The invoice is simply split among the members who supported the SoW.

If there is an interest in taking it further than the MVP, then we simply produce a SoW on the expansion.

Even if some of our joint initiatives in the alliance are quite ambitions then the individual SoW is never larger than 150-200 estimated hours of work, and most of the SoWs are considerably lower - some as small as just 10-20 hours of estimated work.

## What are we doing

The success of the alliance is quite overwhelming, compared to what we had dared to hope for, when we first started out. The following is just a subset of what has manifested itself already.

And remember, these are all Open Source projects that _everyone_ - not just alliance members - have unhindered access to.

### 2git
A small domain specific language and a corresponding interpreter extended from groovy, that allows migration from any version control system to git. 2git allows companies to specify their migrations as configurations, then run them to see if the result fits the needs, but if it doesn't then simply adjust the configuration and run it again. It supports a try-out approach to VCS migration and it supports a scenario where large organizations can migrate developers in chunks of either teams or components rather than big-bang migrations.

Funded by Grundfos and Volvo
{: .highlight}

### The Pretested Integration Approach
An extension to Jenkins, that allows you - simply be checking a checkbox - to automatically integrate any branch onto your integration branch, provided that an automated toll-gate criteria is executed and passed. It's conceptually the same approach as a pull request, only that there is no halt or stop or manual work effort from a colleague involved. It supports the ideal _release train_ branching strategy.

Funded by Atmel, Novelda, Grundfos, Cryptera, Volvo. The plugin has more than 150 installations.
{: .highlight}

### Tracey
An idea bread by Grundfos and Volvo in collaboration, that if a full trace is required in you software development lifecycle, then there need to be just _one_ tool that any contributing process can report traces to. Tracey is a microservice you can throw _any_ format of data on a REST api and it will store it in a graph database. It will keep track of related events and it is capable of reacting on incoming events to trigger external actions. Like other microservices, Jenkins jobs or data sync with other tools.

In the alliance we all believe, that Tracey has the potential to belong to the next-generation automation platform, where no centralized client/server structure as known from most current CI servers is even required.

In the future all automation is distributed as countless microservices in orchestrated containers - And Tracey will keep track of it all.

Funded by Grundfos and Volvo and part of the established Software Center Alliance run by Jan Bosh at Chalmers, involving Ericsson's _Eiffel_ protocol.
{: .highlight}

### Praqmatic Automated Changelog - PAC

PAC is capable of analyzing the commits in a VCS and trace them back to the task or change management system involved and capture objects like, caption, description, commits, change set and any other item really, that you configure it to. Data is captured in MarkDown, styled using CSS and Liquid to generate reports supported by templates in both HTML and PDF.

PAC is a framework, that can be extended to use any VCS and any issue tracking system, provided they have an API. Git, Mercurial, Jira, GitHub Issues, Bugzilla and a handful more are already supported.

Once PAC is configured in your pipeline, you'll get all your future release notes for free.

Funded by Cryptera, Yxlon International
{: .highlight}

### MemoryMap

Is another Jenkins plugin that will visualize the consumption and utilization of memory in the compiled binary. It's used within embedded software to make correct utilization of your device's memory an integrated part of your pipeline. It simply reads command files and map them agains the map files and then visualize the relation and offers configurable thresholds. It created as a framework the can support multiple compilers, it currently supports Texas Instruments compiler and GCC.

Funded by Yxlon International and MAN Diesel & Turbo, the plugin has hundreds of installations.
{: .highlight}

### There's more
There are plenty of more Open Source projects that originates from the alliance. you are welcome to browse the Open Source repositories in [our GitHub organization](https://github.com/Praqma/){: target="_blank"} - don't hesitate to contact us, if you see anything the catches you interest.

## How to become a member
It's simple: Membership is by invitation only. The reason is that we need obviously need members to be ambitious, engaged and enthusiastic.

If if you are a customer of Praqma, you are automatically invited - obviously. Since Praqma's customers are ambitious, engaged and enthusiastic.

[Enroll to our next gathering December 5th, hosted by Grundfos in Bjerringbro](http://www.code-conf.com){: target="_blank" }
{: .highlight }

{% include call_to_action.html %}
