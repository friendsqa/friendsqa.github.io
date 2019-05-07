---
layout : default
title: Dataset - Download
permalink: /dataset/download
---

<link rel="stylesheet" href="/assets/css/dataset.css">

<div class="download content-container">
  <h1 class = "content-title">
    Download FriendsQA Dataset
  </h1>
  <div class = "content-subcontainer">
    <h2 class="content-subtitle">
      1. Annotation Format
    </h2>
    <div class="content-item">
      <div class="dataset-field">
        {% highlight json  %}
    {
      'data' : {
        'questions:' [
          'does it have a dooknob',
          'do you see a fence around the bear',
          ...
        ],
        'answers': [
          'no, there is just green field in foreground',
          'countryside house',
          ...
        ],
        'dialog': [
          {
          'image_id': <image id>,
          'caption': <image caption>,
          'dialog': [
            { 
              'question': <index of question in 'data.questions' list>,
              'answer': <index of answer in 'data.answers' list>,
              'answer_options': <100 candidate answer indices from 'data.ansers'>,
              'gt_index': <index of 'answer' in 'answer_options'>
            },
            ... (10 rounds of dialog)
           ]
          },
          ...
        ]
      },
      'split': <VisDial split>,
      'version': '1.0'
    }
        {% endhighlight %}
      </div>
    </div>
  </div>
  <div class = "content-subcontainer">
    <h2 class="content-subtitle">
      2. Descriptions
    </h2>
    <p class="content-item">
      Download link: 
      <a id="download_link" href="#">wlkrjweiorjwe</a>
    </p>
  </div>
  <div class = "content-subcontainer">
    <h2 class="content-subtitle">
      3. Video Features
    </h2>
    <p class="content-item">
      Download link: 
      <a id="download_link" href="#">wlkrjweiorjwe</a>
    </p>
  </div>
  <div class = "content-subcontainer">
    <h2 class="content-subtitle">
      4. Video Frames
    </h2>
    <p class="content-item">
      Download link: 
      <a id="download_link" href="#">wlkrjweiorjwe</a>
    </p>
  </div>
</div>
