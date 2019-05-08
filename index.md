---
layout: default
title: FriensQA
---

<link rel="stylesheet" href="/assets/css/member.css">
<link rel="stylesheet" href="/assets/css/index.css">
<script type="text/javascript" src="/assets/js/index.js"></script>

<div class="bk-container">
  <img class="bk-img" src="/assets/images/main.png">
  <h1 class="bk-header">
    FriendsQA for Video Story Understanding
  </h1>
</div>

<div class="update content-container">
  <h1 class = "content-title">
    Updates
  </h1>
  {% for news in site.data.updates %}
  <p class="content-item news news-{{ forloop.index0 }}">
    <span id="date">{{ news.date }}</span>
    {{ news.content }}
  </p>
  {% endfor %}
  <p class="content-item showMore">
    <span id="more" onclick="showMore()">More</span>
<span id="noMoreContext" style="display:none;color: #cccccc;"><br>No more news available.</span>
  </p>
</div>

<div class="about content-container">
  <h1 class = "content-title">
    What is FriendsQA?
  </h1>
  <p class="content-item">
   FriendsQA is a large-scale video QA dataset based on 6 popular TV shows (<i>Friends, The Big Bang Theory, How I Met Your Mother, House M.D., Grey's Anatomy, Castle</i>). It consists of 152.5K QA pairs from 21.8K video clips, spanning over 460 hours of video. TGhe questions are designed to be compositional, requiring systems to jointly localize relevant moments within a clip, comprehend subtitles-based dialogue, and recognize relevant visual concepts.
  </p>
</div>

<div class="paper content-container">
  <h1 class = "content-title">
    Paper
  </h1>
  <p class="content-item">
  FriendsQA: is a large-scale video QA dataset based on 6 popular <br>
  <span id="authors">Seong-Ho Choi, Kyoung-Woon On, Byoung-Tak Zhang.</span>
  </p>
  <p class="content-item">
  FriendsQA: is a large-scale video QA dataset based on 6 popular <br>
  <span id="authors">Seong-Ho Choi, Kyoung-Woon On, Byoung-Tak Zhang.</span>
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
