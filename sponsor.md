---
layout: default
title: Sponsor
permalink: /sponsor
---

<link rel="stylesheet" href="/assets/css/sponsor.css">

<div class="sponsor content-container">
  <h1 class = "content-title">
    Sponsor
  </h1>

  {% for sponsor in site.data.sponsors %}
  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      {{ sponsor.type }}
    </h2>
    <div class="content-item">
      {% for img in sponsor.images %}
        <img src="{{ img.src }}">
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div>
