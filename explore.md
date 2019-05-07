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
      <div id="stats-usage">
        <span id="header"> Usage </span>
        <p>
        Click the <span id="underline">Play Localized</span> button to play the video clip specified by the timestamp annotation. The video come with subtitle, turn it on if you did not see it.\n
best viewed in Chrome.
        </p>
      </div>
    </div>

    <div class="video-field">
      <video class="viewer" width="100%" height="auto" controls>
        <source src="/assets/images/explore.mp4" type="video/mp4">
      </video>

      <div class="play_controls"> 
        <input type="range" class="localized_slider" value="1"> 
        <button class="localized_button" title="Toggle Play">►  Play Localized</button> 
      </div> 

    </div>

    {% for data in site.data.questions %}
    {% assign parentNum = forloop.index0 %}
    {% assign answerNum = data.answer %}
    <div class="questions question-{{ forloop.index0 }}">
      <div class="question-field">
        <table>
            <tr id="question">
              <th>
                Question 
              </th>
              <td>
                {{ data.question }}
              </td>
            </tr>
            {% for answerList in data.answers %}
            <tr id="answer-{{ forloop.index0 }}">
              <th>
                  Answer {{ forloop.index0 }}
              </th>
              <td>
                {{ answerList.answer }}
              </td>
            </tr>
            {% endfor %}
        </table>
      </div>
      <div class="button-field">
          <button id="showAnswer" onclick="showAnswer('{{ parentNum }}', '{{ answerNum }}')">Show Answer</button>
          <div id="qControl-field">
            <button id="prev" onclick="prevQuestion()">Prev example</button>
            <span id="qIndex"> {{ forloop.index }} / {{ forloop.length }}</span>
            <button id="next" onclick="nextQuestion()">Next example</button>
          </div>
      </div>
    </div>
    {% endfor %}
</div>
