---
title: Want to learn more?
subtitle: Talk to us about Continuous Delivery and DevOps
caption: 1 Hour Free Consultation
permalink: /consultation/
redirect_from:
  - /1hour/
layout: default
---

<div class="layout-consultation">
	<main role="main">
		<header>
			<h1>{{ page.title }}</h1>
		</header>
		<article>
			<h2 class="subtitle" id="talk-to-us-about-continuous-delivery-and-devops">{{ page.subtitle }}</h2>

			<h3 id="book-your-free-consultation-today">Book your free consultation today!</h3>

			<p>Book a free and no-obligation consulting hour to learn how to use continuous delivery and devops to boost development productivity and reliability.</p>

			<p>Together we can look at how well your current development practices support your goals. In consulting hours we can discuss, among other things:</p>

			<ul class="checkmark">
				<li>Your <strong>goals and future plans</strong> for development</li>
				<li>How well your <strong>current practices</strong> support your vision</li>
				<li>What <strong>impact</strong> your business can get from Continuous Delivery and DevOps</li>
			</ul>

			<p>We promise that you will go away with specific recommendations for how to improve after a consultation with us.</p>

			<p class="highlight">Fill out the form on the right and we will contact you to make an appointment.</p>

		</article>
	</main>
	<aside>
		<div>
      <section>
        <h3>Yes, I'd like some free consultation</h3>
        <form action="http://formspree.io/{{ site.email }}" method="POST">
          <input type="text" name="forename" placeholder="Name"/>
          <input type="text" name="_replyto" placeholder="Phone or email" required/>
          <textarea name="message" rows="10" cols="30" placeholder="What would you like to discuss?"></textarea>
          <button type="submit">Contact me</button>
          <input type="hidden" name="_subject" value="New submission from praqma.com" />
          <input type="hidden" name="_next" value="{{ site.url }}/thanks" />
        </form>
      </section>
		</div>
	</aside>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/h5Validate/0.8.4/jquery.h5validate.js"></script>
<script>
  $(document).ready(function () {
    $('form').h5Validate();
  });
</script>
