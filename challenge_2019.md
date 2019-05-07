---
layout: default
title: Challenge
permalink: /challenge/2019/
---

<div class="challege content-container">
  <h1 class = "content-title">
    Challenge
  </h1>
  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      1. Overview
    </h2>
    <p class="content-item">
      It consists of 152.5K QA pairs from 21.8K video clips, spanning over 460 hours of video. The questions are designed to be compositional, requiring systems to jointly localized relevant moments within a clip, comprehend subtitles-based dialogue.
    </p>
  </div>

  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      2. Important Dates
    </h2>
    <div class="content-item">
      <table> 
        <tr>
          <td>Jun 20, 2019</td>
          <td>Challenge launched</td>
        </tr>
        <tr>
          <td>Nov 02, 2019</td>
          <td>Winner's announcement at the Workshop, ICCV 2019</td>
        </tr>
      </table>
    </div>
  </div>

  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      3. Evaluation
    </h2>
    <p class="content-item">
      Evaluation server link :
    </p>
  </div>

  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      4. Prize
    </h2>
    <p class="content-item">
      Winning team will receive $1K !
    </p>
  </div>

  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      5. Challenge Guidelines
    </h2>
    <p class="content-item">
      1. ...
      2. ...
      3. ...
    </p>
  </div>

  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      6. Organizers
    </h2>
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
</div>
