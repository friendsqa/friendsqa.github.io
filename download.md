---
layout : default
title: Dataset - Download
permalink: /dataset/download
---

<link rel="stylesheet" href="/assets/css/dataset.css">

<div class="download content-container">
  <h1 class = "content-title">
    Download DramaQA Dataset
  </h1>
  <h2 class="content-subtitle">
    How to Download DramaQA Dataset
  </h2>
  <p class="content-item">
    Before downloading dramaQA Dataset, you need to fill out this <a id="download_link" href="https://docs.google.com/forms/d/e/1FAIpQLSdqQTHp6-AiNQijHhcPAPvFV_6TFer06e6aWG1l_jRhRo2E5w/viewform">form</a> first. After filling out this form, we will give you an ID to access and download dataset by email.
  </p>
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
      Story descriptions is composed with natural language, and it contains stories in video clips.
    </p>
  </div>
  <div class = "content-subcontainer">
    <h2 class="content-subtitle">
      3. Subtitles
    </h2>
    <p class="content-item">
      The subtitles are preprocessed into a single JSON file with video names as keys. Each element contains a list of subtitle sentences and a list of subtitle information(speaker, speech time, content of speech).
    </p>
  </div>
  <div class = "content-subcontainer">
    <h2 class="content-subtitle">
      4. Sequences of Image Frames in Video Clips
    </h2>
    <p class="content-item">
      Lengths of Video Scene clips are 1 to 5 minutes in average, and there are short clips which contains one scene clips.A length of each short clips is 1 to 50 seconds. we extracted image files at 3 frames per second(FPS).
    </p>
  </div>
  <div class = "content-subcontainer">
      <h2 class="content-subtitle">
        5. Question & Answer
      </h2>
      <p class="content-item">
        In this Q&A dataset, there is only one correct answer. Each data is composed of one question and five candidate answers.
      </p>
    </div>
    <div class = "content-subcontainer">
        <h2 class="content-subtitle">
          6. Question Level
        </h2>
        <p class="content-item">
          This dataset is about the level of questions.
        </p>
      </div>
</div>
