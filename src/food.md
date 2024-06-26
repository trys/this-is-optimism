---
title: Food
layout: content
---
{%- from "components/component/component.njk" import c -%}

# Food

Our food on the day comes courtesy of [Bakestone](https://www.bakestone.uk/), founded by Hannah Thomas.

{% set collageContent %}
Based in the South Downs, Bakestone celebrates the seasons, gathering local, sustainably-farmed provisions to create memorable culinary experiences. They cook naturally and thoughtfully to reflect the time and space, paying attention to detailed flavour and trends. They take high-quality ingredients, cook from scratch and bring them to you crafted with care.

Hannah is an intuitive, self-taught chef who has gained her experience through hosting her own events and working in various kitchens across the country. Notable experiences include working at a beachside fish & open fire restaurant and more recently a weekly baking, menu planning, and monthly wood fire supper club at the Kinsbrook vineyard.

Bakestone make special events come to life and we can’t wait to feast with them.

[Visit the Bakestone website](https://www.bakestone.uk/)
{% endset %}

{{ c('collage', {
  content: collageContent,
  images: [
    {
      src: '/static/img/bakestone1.jpg',
      alt: 'Alt',
      width: 780,
      height: 960
    },
    {
      src: '/static/img/bakestone2.jpg',
      alt: 'Alt',
      width: 1620,
      height: 1040
    },
    {
      src: '/static/img/bakestone3.jpg',
      alt: 'Alt',
      width: 1620,
      height: 1040
    }
  ]
}) }}
