---
title:      Tool specialists
caption:    Can we fix it? Yes we can!
avatar:     /images/services/tools.png
css-class:  tool-specialists
redirect_from:
  - /services/atlassianservices/
nav-weight: 60

tools:
  -
    name: Atlassian
    logo: /images/services/tools/atlassian-rgb-navy-large.png
    link: /services/atlassian
  -
    name: Docker
    logo: /images/services/tools/docker.png
    link:
  -
    name: Github
    logo: /images/services/tools/github.png
    link: 
  -
    name: Jenkins
    logo: /images/services/tools/jenkins.png
    link:
  -
    name: Maven
    logo: /images/services/tools/maven.png
    link:
  -
    name: Vagrant
    logo: /images/services/tools/vagrant.png
    link:
  -
    name: Gradle
    logo: /images/services/tools/gradle.png
    link:
  -
    name: Git
    logo: /images/services/tools/git.png
    link:
  -
    name: gcc
    logo: /images/services/tools/gcc.png
    link:
  -
    name: Kubernetes
    logo: /images/services/tools/kubernetes.png
    link:
  -
    name: JIRA
    logo: /images/services/tools/jira.png
    link:
  -
    name: Confluence
    logo: /images/services/tools/confluence.png
    link:
  -
    name: Bamboo
    logo: /images/services/tools/bamboo.png
    link:
  -
    name: urbancode
    logo: /images/services/tools/urbancode.gif
    link:
  -
    name: Visual Studio
    logo: /images/services/tools/visualstudio.png
    link:
---

## You name the tool, we have implemented solutions with it.

At Praqma, we are specialists in setting up tools to support software development teams.
We do assessments, tool implementations, workshops, training, sponsored open source development and teach best practices.
{: .caption}

<div class="image-grid">
  <div class="image-grid-wrapper">
    {% for t in page.tools %}
      <div class="image-grid-cell">
        <a {% if t.link %}href="{{ t.link }}" {% endif %}target="_blank" title="{{ t.name }}"><img src="{{ t.logo }}" alt="{{ t.name }}"></a>
      </div>
    {% endfor %}
  </div>
</div>
<br/>

{% include call_to_action.html %}
