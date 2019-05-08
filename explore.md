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
    <div class="stats-field">
      <div id="stats-questions">
        <span id="header">
          152.5K questions
        </span>
        <ul> 
          <li>84.8K What</li>
          <li>17.7K Who</li>
          <li>17.8K Where</li>
          <li>15.8K Why</li>
          <li>13.6K How</li>
        </ul>
      </div>
      <div id="stats-episodes">
        <span id="header">
          925 episodes from 6 TV shows
        </span>
        <ul> 
          <li>Sitcoms:
            <ul>
              <li>Friends</li>
              <li>The Big Bang Theory</li>
              <li>How I Met Your Mother</li>
            </ul>
          </li>
          <li>Medical:
            <ul>
              <li>Grey's Anatomy</li>
              <li>House M.D.</li>
            </ul>
          </li>
          <li>Crime:
            <ul>
              <li>Castle</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    {% for example in site.data.questions %}
    <div class = "examples example-{{example.number}}">
      <div class="video-field">
        <video class="viewer" width="100%" height="auto">
          <source src="{{ example.src }}" type="video/{{ example.type }}">
        </video>

        <div class="video-play-controls"> 
          <input type="range" class="video-slider" value="1"> 
        </div> 

        <p class="video-description">
          {{ example.description }}
        </p>

        {% for rtd in example.realTimeDescription %}
          <p class="video-realtime-description realTimeDescription-{{forloop.index0}}">
            {{ rtd.content }}
          </p>
        {% endfor %}
      </div>
      
      {% for e in example.questions %}
      {% assign parentNum = forloop.index0 %}
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
                {% for o in e.options %}
                  <div class="o-{{forloop.index0}}">
                    <span id="oo"> Answer {{forloop.index0}} </span>{{ o.option }}
                  </div>
                {% endfor %}
              </div>
            </div>
            <div class="question-btn">
              <button id="showAnswer" onclick="showAnswer('{{ example.number }}', '{{ parentNum }}', '{{ answerNum }}')">Show Answer</button>
              <button class="localized_button" title="Toggle Play">►  Play shot</button> 
            </div>
        </div>
      {% endfor %}

      <div class="button-field">
          <div id="qControl-field">
            <button id="prev" onclick="prevQuestion()">Prev example</button>
            <span id="qIndex"> {{ forloop.index }} / {{ forloop.length }}</span>
            <button id="next" onclick="nextQuestion()">Next example</button>
          </div>
      </div>
    </div>
    {% endfor %}
</div>
