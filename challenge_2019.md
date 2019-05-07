---
layout: default
title: Challenge - 2019
permalink: /challenge/2019/
---

<link rel="stylesheet" href="/assets/css/member.css">
<link rel="stylesheet" href="/assets/css/challenge.css">

<div class="challenge content-container">
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
          <th>Jun 20, 2019</th>
          <td>Challenge launched</td>
        </tr>
        <tr>
          <th>Nov 02, 2019</th>
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
      1. ...<br>
      2. ...<br>
      3. ...<br>
    </p>
  </div>

  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      6. Organizers
    </h2>
    <div class="content-item">
      {% for person in site.data.challengeOrganizers2019 %}
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
