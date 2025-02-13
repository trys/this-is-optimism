---
permalink: false
tags: home
component: content-collage
withLede: true,
order: 2
enabled: true
images: [
  {
    src: '/static/img/artelium-terrace.jpg',
    alt: 'People enjoying wine on the terrace',
    width: 1080,
    height: 1080
  }
]
---
{%- from "components/component/component.njk" import c -%}

## About the day

Hosted at the beautiful Artelium Vineyard in the Sussex Countryside, alongside our talks we’ll be enjoying some excellent locally-sourced food from award winning chef Hannah Thomas, exceptional coffee and breakfast from Brighton’s finest Coffee@33 and vineyard tours and tasting from Artelium’s founders.

<p>{{ c('twi', { icon: 'arrow-right', align: 'right', text: 'More about our venue', link: '/venue' }) }}</p>

<p>{{ c('twi', { icon: 'arrow-right', align: 'right', text: 'More about food and experiences', link: '/food' }) }}</p>
