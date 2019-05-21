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
      <div class="checklist scene-0">
        <span id="header">
          <label class="checkbox-container">Scene 1
            <input type="checkbox" checked="checked" onclick="selectScene(0)">
            <span class="checkmark"></span>
          </label>
        </span>
        <ul> 
          <li>
          <label class="checkbox-container">Shot 1
            <input type="checkbox" onclick="selectShot(0, 1)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 2
            <input type="checkbox" onclick="selectShot(0, 2)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 3
            <input type="checkbox" onclick="selectShot(0, 3)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 4
            <input type="checkbox" onclick="selectShot(0, 4)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 5
            <input type="checkbox" onclick="selectShot(0, 5)">
            <span class="checkmark"></span>
          </label>
          </li>
        </ul>
      </div>
      <div class="checklist scene-1">
        <span id="header">
          <label class="checkbox-container">Scene 2
            <input type="checkbox" onclick="selectScene(1)">
            <span class="checkmark"></span>
          </label>
        </span>
        <ul> 
          <li>
          <label class="checkbox-container">Shot 1
            <input type="checkbox" onclick="selectShot(1, 1)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 2
            <input type="checkbox" onclick="selectShot(1, 2)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 3
            <input type="checkbox" onclick="selectShot(1, 3)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 4
            <input type="checkbox" onclick="selectShot(1, 4)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 5
            <input type="checkbox" onclick="selectShot(1, 5)">
            <span class="checkmark"></span>
          </label>
          </li>
        </ul>
      </div>
      <div class="checklist scene-2">
        <span id="header">
          <label class="checkbox-container">Scene 3
            <input type="checkbox" onclick="selectScene(2)">
            <span class="checkmark"></span>
          </label>
        </span>
        <ul> 
          <li>
          <label class="checkbox-container">Shot 1
            <input type="checkbox" onclick="selectShot(2, 1)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 2
            <input type="checkbox" onclick="selectShot(2, 2)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 3
            <input type="checkbox" onclick="selectShot(2, 3)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 4
            <input type="checkbox" onclick="selectShot(2, 4)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 5
            <input type="checkbox" onclick="selectShot(2, 5)">
            <span class="checkmark"></span>
          </label>
          </li>
        </ul>
      </div>
      <div class="checklist scene-3">
        <span id="header">
          <label class="checkbox-container">Scene 4
            <input type="checkbox" onclick="selectScene(3)">
            <span class="checkmark"></span>
          </label>
        </span>
        <ul> 
          <li>
          <label class="checkbox-container">Shot 1
            <input type="checkbox" onclick="selectShot(3, 1)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 2
            <input type="checkbox" onclick="selectShot(3, 2)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 3
            <input type="checkbox" onclick="selectShot(3, 3)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 4
            <input type="checkbox" onclick="selectShot(3, 4)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 5
            <input type="checkbox" onclick="selectShot(3, 5)">
            <span class="checkmark"></span>
          </label>
          </li>
        </ul>
      </div>
      <div class="checklist scene-4">
        <span id="header">
          <label class="checkbox-container">Scene 5
            <input type="checkbox" onclick="selectScene(4)">
            <span class="checkmark"></span>
          </label>
        </span>
        <ul> 
          <li>
          <label class="checkbox-container">Shot 1
            <input type="checkbox" onclick="selectShot(4, 1)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 2
            <input type="checkbox" onclick="selectShot(4, 2)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 3
            <input type="checkbox" onclick="selectShot(4, 3)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 4
            <input type="checkbox" onclick="selectShot(4, 4)">
            <span class="checkmark"></span>
          </label>
          </li>
          <li>
          <label class="checkbox-container">Shot 5
            <input type="checkbox" onclick="selectShot(4, 5)">
            <span class="checkmark"></span>
          </label>
          </li>
        </ul>
      </div>
    </div>

    {% for example in site.data.questions %}
    <div class = "examples example-{{example.number}}">
      <div class="video-field">
        <video class="viewer viewer-{{example.number}}" width="100%" height="auto" onclick="playLocal()" controls>
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
      </div>
      
      {% for e in example.questions %}
      {% assign exampleNum = example.number + 1 %}
      {% assign questionNum = forloop.index0 %}
      {% assign answerNum = e.answer %}
        <div class="question-field question-{{ forloop.index0 }}">
            <div class="scene-header">
              {% if questionNum == 0%}
              Scene {{ exampleNum }} 
              {% else %}
              Scene {{ exampleNum }} shot {{ questionNum }}
              {% endif %}
            </div>
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

      <p class="video-description">
        {{ example.description }}
      </p>

      {% for rtd in example.realTimeDescription %}
        <p class="video-realtime-description rtd-{{forloop.index0}}">
          {{ rtd.content }}
        </p>
      {% endfor %}

    </div>
    {% endfor %}
</div>
