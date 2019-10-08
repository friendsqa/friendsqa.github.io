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
  <h2 class = "important-news-content">
    DramaQA is released : <a id="download_link" href="/dataset/download">Download</a> dataset!
    <p class="content-item">
        To download dramaQA dataset, you need to fill out this <a id="download_link" href="https://docs.google.com/forms/d/e/1FAIpQLSdqQTHp6-AiNQijHhcPAPvFV_6TFer06e6aWG1l_jRhRo2E5w/viewform">form</a> first. After that, we will give you an ID for access by email.
      </p>
  </h2>
  
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
    What is DramaQA?
  </h1>
  <p class="content-item">
   DramaQA is a large-scale video QA dataset based on a korean popular TV show, “Ohhaeyoung Again”. It consists of 152.5K QA pairs from 21.8K video clips, spanning over 460 hours of video. The questions are designed to be compositional, requiring systems to jointly localize relevant moments within a clip, comprehend subtitles-based dialogue, and recognize relevant visual concepts.
  </p>
</div>

<div class="paper content-container">
  <h1 class = "content-title">
    Paper
  </h1>
  <p class="content-item">
  DramaQA: is a large-scale video QA dataset based on 6 popular <br>
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
