---
layout: default
title: Workshop
permalink: /workshop/2019/
---

<div class="workshop content-container">
  <h1 class = "content-title">
    Workshop
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
      2. Schedule
    </h2>
    <div class="content-item">
      <table> 
        <tr>
          <td>08:30 AM</td>
          <td>Opening Remarks</td>
        </tr>
        <tr>
          <td>08:40 AM</td>
          <td>Invited Speaker</td>
        </tr>
        <tr>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>06:00 PM</td>
          <td>Closing Remarks</td>
        </tr>
      </table>
    </div>
  </div>

  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      3. Invited Speakers
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

  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      4. Organizers
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

  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      5. Sponsors
    </h2>
    <div class="content-item">
    </div>
  </div>
</div>
