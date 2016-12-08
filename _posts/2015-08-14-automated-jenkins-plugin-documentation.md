---
title: Automated Jenkins Plugin documentation
tags: [Jenkins, Maven, Automated, Git, Documentation, Release, Plugin, Markdown, Confluence]
author: buep
avatar: /images/stories/document-all-things.jpg
---

**Jenkins plugin developers - let's look at our documentation process around the plugins. _It needs improvements!_ Wouldn't it be great if we could automate more of the release process related to documentation?**

<!--break-->

Today it seems like the majority of us release the plugin, THEN go to the plugin wiki and update the documentation - and that some forget this last step. But what if your release process automatically updated the documentation?

**Would you like to make sure the user documentation is matching the current version of the plugin?**
Documentation is obviously only a benefit for the users, if the help we offer them on wiki is actually helpful - wrong or old documentation is just confusing.

**Shouldn't we auto generate the changelog?**
Many plugins have a good changelog on the wiki, for example the [Changelog in the Git Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin#GitPlugin-Changelog) and our own plugins, like the [Changes section on the Pretested Integration Plugin wiki](https://wiki.jenkins-ci.org/display/JENKINS/Pretested+Integration+Plugin#PretestedIntegrationPlugin-Changes).

In my experience, this type of information is important and is actually being read and checked upon upgrading or when a user has problems with a plugin.
So: Why do we not auto generate the majority of that information based on the git commits that go into the release?

_The thoughts above were part of my motivation for suggesting the "[Automate plugin documentation](https://trello.com/c/WscvjnPB/11-automate-plugin-documentation)" topic at the "Jenkins code camp" that took place during the "Jenkins User Event Scandinavia 2015".

We're posting this blog to hear your opinion on the matter. Is automated documentation a good idea? Would you use it?

## Features

1) The Maven jpi/hpi packs the documentation as part of the Maven release goal. It only converts and packs when running a release, to save development cycles.

2) The packed documentation is released as an individual artifact to the plugin repository, not as part of the plugin itself. This provides more flexibility for later updates to the documentation.

3) Documentation is automatically converted from GitHub Flavored Markdown to static HTML before it is packed. GitHub Flavored Markdown is well known, and the community uses GitHub.

4) Your Maven configuration must specify which Markdown files to use. E.g. defaults to docs/plugin.md becomes docs-plugin.html, and docs/changelog.md becomes docs-changelog.html. One or more Markdown files can be combined to one HTML file. This will make it flexible to separate or re-use documentation and to include auto generated documentation as well.

5) There will be a Maven goal to generate and verify the documentation, and to preview it during development. This will enable us to validate that it looks nice.

6) A new Confluence wiki plugin can show the static HTML pages as part of the wiki page itself. The documentation matching the latest plugin release is automatically chosen. Using the Confluence plugin is optional, so you don't have to use this new way of documenting.

7) Documentation can be (re)released without a new plugin release, to fix typos or for post-edits.
The new documentation artifact has a new release number. By some convention - matching the plugin version - a new version of the plugin documentation will then automatically be used by the wiki plugin.

8) If you chose to put all documentation with the plugin in Markdown, the plugin wiki page will simply be the usual jenkins-plugin-info at the top and the new Confluence wiki plugin showing the converted Markdown. You can also mix the approaches of course.

9) You can edit smaller pieces of the documentation as you implement bugfixes and features, since the documentation can now be edited together with the source code. This way you avoid the big boring hurdle before the release: updating large chunks of documentation. You can even require from the contributing developers that documentation is always updated alongside the code changes.

10) The changelog section on the wiki can now be generated, using a script or maybe Maven, by writing a changelog.md file. We could extend it further, to update JIRA issue statuses (e.g. resolved) based on what goes into the release.

11) When documentation follows the plugin release, we can provide version specific documentaion. This can be very useful for people that can't or won't upgrade a plugin for whatever reason. Today the wiki, if even up-to-date, just shows the newest documentation so it can be hard to find out how to use older versions of the plugin.

**Are these features wanted?**

**Would you use the new work flow?**


In my opinion a lot of plugins are either fully lacking documentation or the documentation is somewhere between confusing and outright wrong because it isn't kept up-to-date.

A long time ago, I asked for thoughts and tips on the Jenkins dev list - see the [mail here](http://jenkins-ci.361315.n4.nabble.com/Automatic-release-and-update-of-plugin-documentation-td4731160.html)

The mail thread more or less explains a useful solution that targets most of the features I would like, but it doesn't maintain the documentation on the Jenkins Plugin Wiki where we think it currently belongs.

## Challenges

* Technically there will be some challenges in the mixed approach with both using the Confluence wiki and the generated documentation. The reason to have both is to avoid enforcing the new way of working. **Is the complexity worth it?**
* There might be a rather large group of community contributors that improve documentation only where the wiki is the preferred approach. **How do we help this group to easily edit documentation and get it released?**

## Up Next

* Describe a solution that can be implemented, with more technical details in a new blog. We already have bits and pieces of a design.
* Look into future features, like enabling Jenkins to present the documentation as part of Jenkins. Give the user the documentation where they need it.
