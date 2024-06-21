---
title: Venue
layout: content
---
{%- from "components/component/component.njk" import c -%}

# Venue

Set in the beautiful surroundings of the Artelium Wine Estate in East Sussex adipiscing commodo elementum bibendum eget. Volutpat sit quam suspendisse elementum sit venenatis ornare. Mauris lacus scelerisque et maecenas amet adipiscing.

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
