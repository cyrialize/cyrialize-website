---
layout: default
title: Posts
permalink: posts
---

<a href="{{ '/tags' | relative_url }}">All tags →</a>

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in posts_by_year %}
  <h2>{{ year.name }}</h2>
  <ul>
    {% for post in year.items %}
      <li>
		{% include post-link.html %}
      </li>
    {% endfor %}
  </ul>
{% endfor %}
