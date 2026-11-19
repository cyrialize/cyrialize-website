---
layout: default
title: Tags
permalink: /tags/
---

{% assign tags = site.tags | sort %}

{% for tag in tags %}
  <h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
  <ul>
    {% for post in tag[1] %}
      <li>
	    {% include post-link.html show_year=true show_tags=false %}
      </li>
    {% endfor %}
  </ul>
{% endfor %}
