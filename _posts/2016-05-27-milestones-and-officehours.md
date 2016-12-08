---
title: Milestones and Office Hours
subtitle: The planning approach at Praqma
tags:
  - How We Work
  - Agile
author: lakruzz
comments: true
avatar: /images/stories/labels.png
nav-weight: 5
---

**Very often developers are engaged in multiple projects. So as an individual you'll often have more than one milestone to work on in parallel. Learn how we have organized ourselves with issues and milestones in a Kanban style approach with frequent Office Hour sessions.**

<!--break-->

<br/>

# The planning is the process
Any process that involves people, is dependent on all people following the process. It's like the choreography of a dance; It looks beautiful and easy when everyone has rehearsed it together for hundreds of hours.

This post describes the steps of everyday agile planning, when everyone is involved in more than one project, distributed across multiple sites, working different timezones, having different levels of experience and even sometimes take vacations.

So learn the steps, put those hours in, start rehearsing!

<br/>

# A short recap on the tool-stack and principles

|---
| Technique | Tool | Usage
|:-|:-|:-
| Tasks | GitHub Issues | Used for both briefings (≈epics) and tasks
| Kanban |Waffle.io | Used to provide a Kanban view to the issues and to combine more milestones onto the same board
| Meta discussions | Slack | Used for parallel discussions derived or reflected off an issue, but not strictly related to it
| Office  hours | Google Hangouts | Used for status meetings on milestone start and end
| Copy - in progress | Google Documents | Used for all copy that's in progress
| Documentation | MarkDown | _Always_ version controlled in Git

<br/>

# Tasks

Tasks are kept in GitHub repositories using GitHub issues. Each task is described in the repository it is to be implemented in.

Some of our repositories don't even store any version controlled files, we use them solely for agile task management. An example is our `marcom` repository used by our marketing and communication team.

The agile process is kept in check through the use of labels on issues and by organizing the issues in different milestones. That's it.

<br/>

# Labels

The labels we use are organized in groups. <br/>
For convenience, labels within the same group use the same color tone.

## Blue = Estimates

|----
|Label | Meaning
|:-|:-|:-
| Size 0 - briefing | Used to indicate that it's a discussion or briefing task. No work will be done in context of a task marked as a briefing
| Size 1 - small | A task than can be carried out quickly, like in an hour  or two but never more than that.
| Size 2 - medium | Can be finished in somewhere between 2 and 4 hours.
| Size 3 - large | It's more than half a day's work - it's approaching a full day's work.
| Size 4 - too large | If it's more than a full days work, then it's too big.

All estimates are set by the people who should work on the issue, the only exception is a briefing `size 0` which is typically set by a product owner to indicate that this is an issue where we discuss and brief each other, until we have a common understanding of what needs to be done.

When a briefing is closed, it will be spawned out into several issues for implementation - each will get its own estimates.

## Red = Prioritization

|----
|Label | Meaning
|:-|:-
| Prio 1 - must have | A condition that must be satisfied in the final solution for the solution to be considered a success.
| Prio 2 - should have | A condition that should be included in the solution if it is possible. A critical condition indeed but not discriminating for success if left out.
| Prio 3 - could have | A condition that could be included if time and resources permit. It is considered desirable but not strictly necessary for success.
| Prio 4 - won't have | A condition that is deemed not currently relevant and will not be implemented.

Priorities are set by the product owners or one of their trusted lieutenants. At the end of the day, the priorities on tasks determine where the company or team is burning their resources - it's gotta be right.

Normally a case will have to be worked on and delivered before it can be closed, but sometimes you have cases that are either duplicates of other issues or just plain simply a suggested change, that you don't want.

If a task is to be closed without work, it must have either the `Prio 4 - won't have` label or the `Status - duplicate` label described in the next section.

## Grey = Status

|----
| Label | Meaning
|:-|:-
| Status - duplicate | Used to indicate that a case is being closed, as the issue is covered further in a duplicate case.
| Status - in progress | Used to indicate that the person assigned to the task is currently working on it - and nothing else!
| Status - workable | Indicates that a task is groomed and prepared to a level where it can be worked on.
| Status - up next | Indicates some urgency on top of the prioritization.

These status labels are also the ones that decide what column the task belongs to in the waffle board, which we use for KanBan style visualization.

A word of precaution about the `Status - up next` label: Use it carefully - that is, as little as possible. As you will see when we start describing the use of milestones, we don't control the flow by means of urgency - but instead we plan small, manageable milestones.

## Green = Action

|----
| Label | Meaning
|:-|-
| Action - Awaiting feedback | Needs another set of eyes
| Action - Needs grooming | Needs to be prepared to enter into a milestone

An action label is a blocker - an action is required before the task can be worked on again.

An action label is always used in combination with assigning the task to a person: The one who's gonna do the action.

When the person has performed the action, he or she will unassign themselves from the task again - leaving it unassigned for others to pick up. Sometimes is should be assigned back to a specific person, but in that case, that would be remarked in the comments of the task.

Green action labels should be attended immediately.

Go to [github.com/issues/assigned](https://github.com/issues/assigned){: target="_blank" } and check if you have any issues with green on them - if you do, attend to it immediately - somebody is blocked by you!

<br/>

# Milestones

Milestones are the only objects we control that have dates attached to them.

A milestone defines a delivery, and the delivery is tied to a date. A milestone is essentially a timebox. You can put as much as you want into a milestone, but if anything goes out of skew and behave different than planned - then it's not the date that changes. The variable is the amount of work that gets done from the milestone. And that's the _only_ variable.

Milestones are like traditional deadlines in the publishing world; If you plan a magazine to be released, and there are articles or pictures that don't meet the deadline, then you will release the magazine without them - but the magazine will be issued on time - always.

There are typically two milestones that exist in each project, that are special:

* __Backlog__
* __Runway__

They are special for the same reason - they don't have any due dates attached to them. But apart from that, they are each other's opposites.

The backlog contains tasks that it's safe to ignore for the time being - they are not currently in scope. Until they pop up in a milestone that actually has a due date attached - just leave'em.

The runway is anything that's required for take-off. If there are any blockers, they go here. Obviously  - like in an air field - the runway should preferably be clear. If something ends up on the runway it takes precedence over anything else. If a task has you name on it, and it's on the runway, then it's your next task.

In a few projects we even have a third milestone with no date attached:

* __Content update__

It's only used in repositories that represent live web sites and where the content editors are different from the software developers [code-conf.com](http://github.com/praqma/code-conf.com){: target="_blank" } is an example. It has the exact same meaning as the runway; attend immediately.


## Issues with no milestone

When a new issue is created, it typically doesn't belong to a milestone, it doesn't have an estimate and it may not even have a priority. You can think of issues with no milestone as equivalents to the unread mails in your mailbox.

It's the _Product Owner_ who owns the issues with no milestones attached.

To keep up, as a _Product Owner_ you need to establish a routine where you have an eye on new issues with no milestones popping up in your issue system.

Hopefully the majority of them can go to the backlog, and you can revisit them together with you team when it's time to form new milestones. But sometimes issues needs to go straight to the _Runway_ milestone or even one of the existing milestones in progress - which would then probably ruin your plan for that milestone, so be careful with that.


## Office hours

The office hours are held as Google hangouts, everyone involved in the domain participates. The goal is to make sure that the work that lies ahead for the upcoming week looks right, that we didn't drop anything, that the amount of work - based on workers' own estimates - looks realistic.

During office hours we go through the backlog, pick the tasks that should have focus, define milestones they can fit into and set a realistic, short delivery date for them.

As each developer often take part in more than just one domain or milestone, we try to minimize the number of milestones running in parallel within each domain.


## Short, small milestones

A milestone represents a delivery. Our milestones are both relatively short and relatively small. We're trying to encourage that deliveries are small. Once every week on a fixed reoccurring time and date, each domain has its weekly _office hour_ meeting.

Each individual milestone also _ends_ with a short office hour meeting, where we run a retrospective: _"How was the milestone? Did the estimates and priorities seem right?"_. If there are any issues left in the milestone that haven't been finished, we will briefly touch on each one of them: _"What happened? Why wasn't it closed?"_" and then we'll clear them out of the milestone; Either to the backlog, but sometimes we just mark them _"Priority 4 - Won't have"_ and then close them.

When the milestone is emptied of open cases, we close it.


## Prepping for office hours

Meetings are expensive, because more people are burning time on the same event at the same time. So having efficient meetings _is_ efficient. So before the office hours, everyone should prepare themselves.

The preparation falls on two different roles, the _assignees_ and the _product owner_.

_Assignee_ is anyone who has one or more tasks in the milestone assigned to them - open or closed, it doesn't matter.

The _Product Owner_ is the person who sets the priorities. Sometimes it may not be the actual product owner, but then it's a person who can act on behalf of the Product Owner - make decisions about priorities - that's the key ability that's required.

__How everyone preps for an office hour meeting__

__Assignees__ - Quickly skim through the cases. Did you actually deliver some of them but forgot to close? Do it now! Do any of your tasks have green action labels on them? Aargh, you should have attended them already - do it now! If there are tasks in the milestone that are still open and need a meaningful comment, now is a good time.

__Product Owners__ - An hour before the office hour, poke the assignees and remind them that you expect them to be prepared for the meeting, as described above (- _"Come on! is that really necessary?"_ - "Yes!" ). If you haven't had time to keep an eye out on new issues without at milestone - do it now!

<br/>

# Break down briefing to concrete tasks

Being able to work efficiently is highly dependent on the quality of the individual tasks. In the weekly office hours we spend time on picking items for the upcoming milestones. But we also take time to discuss different implementation and design options and help each other with realistic estimates.

A lot of these professional discussions take place in tasks categorized as "briefings" - They are size 0, which means we discuss issues, but we don't work on them. At some point in time, we're ready to hammer out specific tasks that will actually implement the goal described in a briefing.

Developers do that on initiative from the Product Owner. They describe the task, maybe the design or implementation, and they give it a realistic estimate.

The don't put it into a milestone, they don't assign it to anybody and they don't prioritize it. All that is done by the _Prodcut Owner_ role.

<br/>

# Task are assigned to no one

If a task is assigned to a specific person, then no one else can work it. So it's not very efficient to preassign all cases to named persons. Therefore - in  general - we do not assign tasks to specific persons, instead people grab the tasks when they are ready for it.

An exception is when we use the green labels, they are combined with assigning the task to a specific person - the person who needs to perform an action.

<br/>

# Merge more milestones into a personal todo list

[Waffle.io](http://waffle.io){: target="_blank"} is visualizing a Kanban-style overlay on top of the GitHub issues - with all the filtering capabilities you could dream of. That's neat! But Waffle.io also provides another important feature; It allows us to combine issues from more repositories onto the same board. So people are capable of designing their personal view of what's cooking  - for them.

<br/>

# Daily routines

- Keep yourself updated with the waffle(s) you're using
- Check green labels - attend them immediately
- Check runways and content updates -  check them immediately
- Work your tasks

<br/>

# Automate it!

This flow is automated using Git, GitHub, GHI, Waffle.io, Jenkins and a handful of plugins - read more in the post about the [praqmatic flow](http://www.praqma.com/stories/a-pragmatic-workflow/)
