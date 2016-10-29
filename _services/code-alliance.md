---
title:      CoDe Alliance
caption:    Our Open Source Continuous Delivery Alliance
avatar:     /images/services/alliance.png
redirect_from:
  - /services/josra/
css-class:  josra
nav-weight: 50

members:
  -
    name: Praqma
    logo: /images/logo.png
    link: /
  -
    name: Atmel
    logo: /images/customers/atmel.png
    link: http://www.atmel.dk/
  -
    name: Cryptera
    logo: /images/customers/cryptera.png
    link: http://www.cryptera.com/
  -
    name: GrammaTech
    logo: /images/customers/grammatech.png
    link: http://grammatech.com/
  -
    name: Grundfos
    logo: /images/customers/grundfos.png
    link: http://dk.grundfos.com/
  -
    name: MAN
    logo: /images/customers/man.png
    link: http://www.corporate.man.eu/en/index.html
  -
    name: Novelda - Xethru
    logo: /images/customers/xethru.png
    link: https://www.xethru.com/
  -
    name: Volvo
    logo: /images/customers/volvo.png
    link: http://www.volvo.com/
  -
    name: YXLON
    logo: /images/customers/yxlon.png
    link: http://www.yxlon.com/Home

---

## Working together to create better software organizations
{: .subtitle}

Our most ambitious customers ask a lot from their development teams.
They want to adopt the best practices, latest tools, new integrations and new features - anything they can use to improve the way their organizations deliver software.
{: .caption}

CoDe Alliance is a community of leading companies who work together to learn and share experience on how to make high performing software organizations. By pooling interests, resources and genuine needs with our continuous delivery experts, CoDe Alliance facilitates best practices and joint development on the open source tools that are shared among the members.

## A community of members

<div class="image-grid">
  <div class="image-grid-wrapper">
    {% for m in page.members %}
      <div class="image-grid-cell">
        <a {% if m.link %}href="{{ m.link }}" {% endif %}target="_blank" title="{{ m.name }}"><img src="{{ m.logo }}" alt="{{ m.name }}"></a>
      </div>
    {% endfor %}
  </div>
</div>
<br/>

## Alliance Gatherings

Two times every year the CoDe Alliance members are invited to a whole-day meetup.  Our customers consider this meeting of minds one of the most valuable things that comes with being a member.

The chance to discuss with like-minded peers in different companies provides insights and cross-fertilization that is hard to find in any other environment.
{: .highlight}

## Crowd sourcing on open source

As part of the Alliance, members can co-organize development and support of open source tools in collaboration with Praqma.

 * Projects defined and funded through statements of work
 * Our open source experts implement the vision with quality
 * Progress is reported and working code is released

## How does it work?

 * Membership is by invitation, all Praqma's clients are invited.
 * Members receive invitations to gatherings, workshops and webinars

## _Get the development organization you strive for_{: .highlight}

{% include call_to_action.html %}
