---
layout: page
title:  Chapter 5.1 - Detecting a Dropped Connection
product: communications
doctype: comms_geo_soap_dev_guide
chapter: geocode-offline
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode-offline/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode-offline/retry-or-fallback/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Errors related to offline geocoding can be complex when the connection has dropped.  Errors are generated from different locations:
<ul class="dev-guide-list">
    <li>AFC Geo SaaS Pro Soap</li>
    <li>The operating system</li>
    <li>Your software development suite</li>
</ul>

A dropped connection produces a different kind of error - for example, AspNetCore produces a <code>WinHttpException</code> when a connection is dropped using HttpClient.  Your task is to identify how the operating system or programming language exposes a connection error. Once you have identified this error, your code must trap the exception, ensure that you can respond correctly, and prevent the exception from being exposed to the end user or calling system.
<br/><br/>
Set an appropriate timeout value for your needs within your application. We cannot tell you exactly what timeout value is best for you; but in our experience, interactive web applications tend to have a shorter timeout and desktop accounting programs tend to have a longer timeout. 
<br/><br/>
Now that you’ve prepared for a timeout in your application, the next step is to decide whether to retry your request or fall back to saved geocoding results. 

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode-offline/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode-offline/retry-or-fallback/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
