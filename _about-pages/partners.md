---
title:      Partners
caption:    We're proud of our partnerships - they're our friends
avatar:     /images/about/partners.svg
css-class:  partners
nav-weight: 40

partners:
  -
    name: Atlassian
    logo: /images/partners/atlassian.png
    link: http://atlassian.com/
    description: |
      **Atlassian** is an enterprise software company that develops a suite of products supporting the entire product development process.

      As an official Atlassian Expert Partner Praqma offers full-service assistance tailored to our clients' specific needs on the entire Atlassian tool suite.
      We provide consultancy, plugin development, training, support and migration to Git and Stash from Subversion, ClearCase, etc.
  -
    name: CloudBees
    logo: /images/partners/cloudbees.png
    link: http://cloudbees.com/
    description: |
      **CloudBees** are the innovative leaders when it comes to Java Platform as a Service (PaaS).
      They are constantly working on turbo-charging the way Java applications are being built and deployed to meet the rapid pace of business in an online and increasingly mobile world.
      Their platform features Jenkins in the cloud for core development services.

      CloudBees is, of course, also the home of Jenkins and of Koshuke Kawaguchi, founder and lead developer of Jenkins.
      As part of our cooperation with CloudBees we support Jenkins users in Europe and host the annual Jenkins CI User Event in Copenhagen.
      Furthermore this partnership gives us the opportunity to host CloudBees' official Jenkins courses as well as support the Enterprise version of Jenkins.
  -
    name: Docker
    logo: /images/partners/docker.png
    link: https://www.docker.com/
    description: |
      **Docker** Docker is the original author and primary sponsor of the Docker open source project.
      Together with the community of maintainers and contributors, Docker aims to deliver tools to help developers build applications with open APIs and help sysadmins better manage these applications.

      We are consulting and training partners with Docker, which allows us to provide certified Docker training and consulting services to our customers.
  -
    name: GitHub
    logo: /images/partners/octocat.png
    link: http://github.com/
    description: |
      **GitHub** GitHub is a web-based Git repository hosting service. It offers all of the distributed revision control and source code management (SCM) functionality of Git as well as adding its own features.
      Unlike Git, which is strictly a command-line tool, GitHub provides a Web-based graphical interface and desktop as well as mobile integration.
      It also provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.

      GitHub offers both plans for private repositories and free accounts which are usually used to host open-source software projects.
      Praqma are official partners with GitHub and together we offer training, host meet-ups and support modern software communities.
  -
    name: IBM
    logo: /images/partners/ibm.png
    link: http://www.ibm.com/
    description: |
      **IBM Rational** is a pioneer, practice leader and world-class platform provider in software and systems development.

      As an official IBM business partner Praqma provides consulting services across the entire IBM Rational portfolio.
      Over the years, we have built strong skills and vast experience in designing, configuring and implementing the IBM Rational software solutions.
      Through this we help our customers seize business opportunities and achieve their goals. 

---

Partnerships are an important part of the way Praqma works.
Working with handpicked partners from all over the world, we ensure that we can use their competences and combine our different skills and strengths.
With our strong partners and the way we cooperate we ensure that we give our customers the best possible service.

A list of our current partners can be found below.

<div class="partners">
  <div class="partners-wrapper">
    {% for p in page.partners %}
      <div class="partner">
        <a {% if p.link %}href="{{ p.link }}" {% endif %}target="_blank" title="{{ p.name }}"><img src="{{ p.logo }}" alt="{{ p.name }}"></a>
        {{ p.description | markdownify }}
      </div>
    {% endfor %}
  </div>
</div>
