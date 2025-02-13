---
permalink: false
tags: home
component: content-collage
withLede: true
enabled: true
order: 3
images: [
  {
    src: '/static/img/artelium.jpg',
    alt: 'View of the vineyard and South Downs',
    width: 780,
    height: 960
  },
  {
    src: '/static/img/artelium-chevron.jpg',
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
---
{%- from "components/component/component.njk" import c -%}

Hosted at the beautiful [Artelium Vineyard](/venue) in the Sussex Countryside, attendees will [enjoy wonderful food](/food) from award winning chef Hannah Thomas, vineyard tours and tasting from Artelium’s founders plus a few other surprises we’re keeping up our sleeves until the day.

<p>{{ c('twi', { icon: 'arrow-right', align: 'right', text: 'More about our venue', link: '/venue' }) }}</p>

<p>{{ c('twi', { icon: 'arrow-right', align: 'right', text: 'More about food and experiences', link: '/food' }) }}</p>

