---
title: Food
layout: content
---
{%- from "components/component/component.njk" import c -%}

# Food

Food is well nice.

{% set collageContent %}
Class aptent <strong>taciti sociosqu</strong> ad litora torquent per conubia nostra, per inceptos himenaeos. Donec pulvinar massa vitae sem ultricies, a tempus ligula consequat. Pellentesque dapibus, augue in condimentum ultricies, quam orci mollis augue, quis feugiat ipsum velit ut ex.

Sed nec tincidunt ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare diam ut faucibus varius. Aenean luctus scelerisque neque.
{% endset %}

{{ c('collage', {
  content: collageContent,
  images: [
    {
      src: '/static/img/artelium.jpg',
      alt: 'Alt',
      width: 780,
      height: 960
    },
    {
      src: '/static/img/feast.jpg',
      alt: 'Alt',
      width: 1620,
      height: 1040
    },
    {
      src: '/static/img/feast.jpg',
      alt: 'Alt',
      width: 1620,
      height: 1040
    }
  ]
}) }}
