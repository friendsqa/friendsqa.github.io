---
layout : default
title: Download
permalink: /dataset/download
---

<div class="download content-container">
  <h1 class = "content-title">
    Download FriendsQA Dataset
  </h1>
  <div class="content-item">
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
