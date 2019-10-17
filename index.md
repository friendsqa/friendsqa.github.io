---
layout: default
title: DramaQA
---

<link rel="stylesheet" href="/assets/css/member.css">
<link rel="stylesheet" href="/assets/css/index.css">
<script type="text/javascript" src="/assets/js/index.js"></script>

<div class="bk-container">
  <img class="bk-img" src="/assets/images/dramaqa.png">
  <h1 class="bk-header">
    DramaQA for Video Story Understanding
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
    DramaQA Dataset
  </h1>
  <p class="content-item">
  Video Question and Answering (VideoQA) is an emerging benchmark task to measure the levels of machine intelligence for video understanding. While several previous studies have suggested datasets for the VideoQA task, they did not consider story-level understanding, resulting in a lack of variance in the degree of question difficulty and coherent story-centric description.
  <br />
  DramaQA is a large-scale video QA dataset based on a Korean popular TV show, “Ohhaeyoung Again.” This dataset contains four levels of QA on difficulty and multi-level character-centered story descriptions.
  We are expecting this challenge could be a starting point to evaluate hierarchical story understanding.
  </p>
  
</div>

<div class="paper content-container">
  <h1 class = "content-title">
    Paper
  </h1>
  <p class="content-item">
  To be Announced
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