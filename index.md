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
    DramaQA is released : <a id="download_link" href="/assets/dramaqa_download_agreement.docx">Download</a> dataset!
  </h2>
  <p class="content-item">
    To download dramaQA dataset, you need to fill out this <a id="download_link" href="https://docs.google.com/forms/d/e/1FAIpQLSdqQTHp6-AiNQijHhcPAPvFV_6TFer06e6aWG1l_jRhRo2E5w/viewform">form</a> first. 
    When you fill out the form, you need to submit <a id="download_link" href="/assets/dramaqa_download_agreement.docx">dataset download agreement file</a> in pdf format. After that, we will give you an ID for access by email.
  </p>
  
  <h5 class="update-history">
     
  </h5>
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
  <h2 class = "content-subtitle">
    1. Introduction
  </h2>
  <p class="content-item">
   Video Question and Answering (VideoQA) is an emerging benchmark task to measure the levels of machine intelligence for video understanding. While several previous studies have suggested datasets for the VideoQA task, they did not consider story-level understanding, resulting in a lack of
   variance in the degree of question difficulty and coherent story-centric description.
   <br />
   DramaQA is a large-scale video QA dataset based on a Korean popular TV show, “Ohhaeyoung Again.” This dataset contains four levels of QA on difficulty and multi-level character-centered story descriptions.
   <br />
   We are expecting this challenge could be a starting point to evaluate hierarchical story understanding.
  </p>
  <h2 class = "content-subtitle">
    2. Multi-level Description
  </h2>
  <p class="content-item">
   We briefly introduce two terms commonly used in video domain: Shot and Scene. A shot is formed by a series of continuous frames with consistent background setting, and a scene is a group of semantically related shots, which are coherent to certain subject or theme.
   <br />
   We collected the story descriptions for shot and scene level respectively and we limited that the descriptions should be focused on 19 main characters.
  </p>
  <h2 class = "content-subtitle">
    3. Multi-level Difficulty
  </h2>
  <p class="content-item">
   Based on <a id="arxiv_link" href="https://arxiv.org/abs/1904.00623">arxiv link</a>, we defined four levels of difficulty for the question in terms of two criteria: length of video clip (Memory Capacity, MC) and the number of logical reasoning step (Logical complexity, LC).
   <br />
   Lv 1: MC (shot), LC (single supporting fact).
   <br />
   Lv 2: MC (shot), LC (multiple supporting facts).
   <br />
   Lv 3: MC (scene), LC (multiple supporting facts w/ time).
   <br />
   Lv 4: MC (scene), LC (reason for causality).
  </p>
  <h2 class = "content-subtitle">
    4. Dataset Specification
  </h2>
  <p class="content-item">
    It consists of 8.5K QA pairs from 2.8K video clips, spanning over 36 hours of video.  We are expecting this challenge could be a starting point to evaluate hierarchical story understanding.
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