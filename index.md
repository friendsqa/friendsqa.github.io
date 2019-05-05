---
layout: default
title: FriensQA
---
{% include indexHeader.html %}

<div class="about content-container">
  <h1 class = "content-title">
    What is FriendsQA?
  </h1>
  <p class="content-item">
   FriendsQA is a large-scale video QA dataset based on 6 popular TV shows (<i>Friends, The Big Bang Theory, How I Met Your Mother, House M.D., Grey's Anatomy, Castle</i>). It consists of 152.5K QA pairs from 21.8K video clips, spanning over 460 hours of video. TGhe questions are designed to be compositional, requiring systems to jointly localize relevant moments within a clip, comprehend subtitles-based dialogue, and recognize relevant visual concepts.
  </p>
</div>

<div class="papers content-container">
  <h1 class = "content-title">
    Paper
  </h1>
  <p class="content-item">
  FriendsQA: is a large-scale video QA dataset based on 6 popular
  </p>
</div>

<div class="people content-container">
  <h1 class = "content-title">
    People
  </h1>
  <div class="content-item">
    {% for person in site.data.people %}
      <div class="member">
        <div class="member-profile">
          <img class="member-profile" src="{{person.src}}">
        </div>
        <div class="member-info member-name">
          {{ person.name }}
        </div>
        <div class="member-info member-position">
          {{ person.affiliation }}
        </div>
      </div>
    {% endfor %}
  </div>
</div>
