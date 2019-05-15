---
layout: default
title : Dataset - Explore
permalink: /dataset/explore
---

<link rel="stylesheet" href="/assets/css/dataset.css">
<script src = "/assets/js/explore.js" type = "text/javascript"/></script>

<div class="explore content-container">
  <h1 class = "content-title">
    Explore
  </h1>
  <div class="content-item">
    <div class="checklist-field">
      <div class="checklist scene-1">
        <span id="header">
					Scene 1
        </span>
        <ul> 
          <li>Shot 1</li>
          <li>17.7K Who</li>
          <li>17.8K Where</li>
          <li>15.8K Why</li>
          <li>13.6K How</li>
        </ul>
      </div>
    </div>

    {% for example in site.data.questions %}
    <div class = "examples example-{{example.number}}">
      <div class="video-field">
        <video class="viewer viewer-{{example.number}}" width="100%" height="auto" ontimeupdate="videoSync()" controls>
          <source src="{{ example.src }}" type="video/{{ example.type }}">
        </video>

        <div class="video-play-controls"> 
          <input type="range" class="video-slider" value="0"> 
          <div class="video-marker marker-0">
            <div class="marker-handle-left handle-left-0">0:05</div>
            <div class="marker-handle-right handle-right-0">0:08</div>
          </div>
          <div class="video-marker marker-1">
            <div class="marker-handle-left handle-left-1">0:10</div>
            <div class="marker-handle-right handle-right-1">0:13</div>
          </div>
          <div class="video-marker marker-2">
            <div class="marker-handle-left handle-left-2">0:15</div>
            <div class="marker-handle-right handle-right-2">0:18</div>
          </div>
          <div class="video-marker marker-3">
            <div class="marker-handle-left handle-left-3">0:20</div>
            <div class="marker-handle-right handle-right-3">0:23</div>
          </div>
          <div class="video-marker marker-4">
            <div class="marker-handle-left handle-left-4">0:25</div>
            <div class="marker-handle-right handle-right-4">0:28</div>
          </div>
        </div> 

        <p class="video-description">
          {{ example.description }}
        </p>

        {% for rtd in example.realTimeDescription %}
          <p class="video-realtime-description rtd-{{forloop.index0}}">
            {{ rtd.content }}
          </p>
        {% endfor %}
      </div>
      
      {% for e in example.questions %}
      {% assign questionNum = forloop.index0 %}
      {% assign answerNum = e.answer %}
        <div class="question-field question-{{ forloop.index0 }}">
            <div class="question-header">
              Question Level {{ forloop.index }}
            </div>
            <div class="question-txt">
              <div class="q">
                <span id="qq">Question</span>
                {{ e.question }}
              </div>
              <div class="o">
								<span id="oo"> Answer  </span> {{ e.answer }}
              </div>
            </div>
        </div>
      {% endfor %}

    </div>
    {% endfor %}
</div>
