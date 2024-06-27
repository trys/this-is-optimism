---
title: Venue
layout: content
---
{%- from "components/component/component.njk" import c -%}

# Venue

Nestled at the foot of the South Downs, The Artelium Wine Estate is the perfect backdrop for a day of inspiration and escape.

{% set collageContent %}
With exclusive access to the venue, there'll be plenty of opportunity to explore throughout the day, whether that's enjoying the art, getting lost in the vines or sampling the beautiful wine.

Most of the talks and activities will take place in the barn before we gather for an alfreso feast on the Terrace to close out the day.
{% endset %}

{{ c('collage', {
  content: collageContent,
  images: [
    {
      src: '/static/img/artelium.jpg',
      alt: 'View of the vineyard and South Downs',
      width: 780,
      height: 960
    },
    {
      src: '/static/img/artelium2.jpg',
      alt: 'People enjoying wine on the terrace',
      width: 1620,
      height: 1040
    },
    {
      src: '/static/img/artelium3.jpg',
      alt: 'Artelium tasting room',
      width: 1620,
      height: 1040
    }
  ]
}) }}
