---
layout: default
title: Home
---

Hi! Here are some of my latest posts.

<ul>
  {% for post in site.posts limit: 5 %}
    <li>
	  {% include post-link.html %}
    </li>
  {% endfor %}
</ul>

<a href="{{ '/posts' | relative_url }}">All posts →</a>
