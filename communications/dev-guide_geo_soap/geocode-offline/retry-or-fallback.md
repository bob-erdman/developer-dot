---
layout: page
title:  Chapter 5.2 - Retry or Fallback
product: communications
doctype: comms_geo_soap_dev_guide
chapter: geocode-offline
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode-offline/detect-dropped-connection/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>

After your application detects a timeout or an error, it must next make a decision whether to retry the request or fall back to saved geocoding results.

<h3>Retry a Request</h3>
Retry your request a few times if timeouts are still being returned:
<ol class="dev-guide-list">
  <li>Retry the request</li>
  <li>Wait 1 second and retry the request</li>
  <li>Wait several seconds and retry the request</li>
</ol>

It's important that you don't retry so often that your attempts are mistaken as a denial-of-service attack.  Limit your retries to 5 to 10 attempts to prevent a backlog of concurrent requests and allow system time to recover.

Some applications attempt to reuse HTTP connections. In the event that you experience a connection disruption, we suggest creating a completely new connection for the next attempt.

<h3>Fall back to saved geocoding results</h3>
Save geocoding results quarterly by running processing addresses or latitude/longitude coordinate pairs that cover your business needs (such as all new customer data received within the last 3 months).  In the event of a timeout or other type of error, fall back to these saved results.

Things to consider when falling back to saved geocoding results:
<ul class="dev-guide-list">
  <li>AFC Geo SaaS Pro Soap is updated on an off-quarter cycle.  Map data and <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">special tax jurisdictions</a> are generally only updated during this quarterly release</li> 
  <li>PCode and other characteristics of a location do not change often, if at all, once the data has been set</li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">Special tax jurisdictions</a> may be added or removed from a primary jurisdiction during a quarterly release based on the local jurisdiction legislation</li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode-offline/detect-dropped-connection/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>