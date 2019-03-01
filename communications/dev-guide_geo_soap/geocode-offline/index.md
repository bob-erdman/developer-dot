---
layout: page
title:  Chapter 5 - Geocode Offline
product: communications
doctype: comms_geo_soap_dev_guide
chapter: geocode-offline
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode-offline/detect-dropped-connection/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Designing robust software means planning for every eventuality. To create a world-class product using AFC Geo SaaS Pro Soap, you need to be prepared for when things go wrong - and one of the problems you may face is an outage. Fortunately, there are ways to write your software to gracefully handle an outage.
<br/><br/>
Types of connection issues:
<ul class="dev-guide-list">
  <li>Temporary Outage: Your connection has gone offline and you need to be able to process geocode requests for a short period of time until the connection is restored</li>
  <li>Intermittent Connection: Your connection works most of the time, but its behavior is unpredictable and occasionally drops unexpectedly</li>
  <li>Unable to Reach AFC Geo: Your connection is up, but you are unable to reach AFC Soap because of a routing problem, a denial-of-service attack on an Internet service provider, or a temporary outage of AFC Geo</li>
</ul>

These types of outages have similar characteristics, so it’s straightforward to design a single process to handle all of them. Here is how we handle a broken connection:
<ul class="dev-guide-list">
  <li>Detect the dropped connection and prevent a crash</li>
  <li>Retry the request or fall back to saved geocoding results</li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode-offline/detect-dropped-connection/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>