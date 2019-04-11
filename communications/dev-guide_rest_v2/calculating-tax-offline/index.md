---
layout: page
title:  Chapter 6 - Calculating Tax Offline
product: communications
doctype: comms_rest_v2_dev_guide
chapter: calculating-tax-offline
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/detect-dropped-connection/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Designing robust software means planning for every eventuality. To create a world-class product using Communications REST v2, you need to be prepared for when things go wrong - and one of the problems you may face is an outage. Fortunately, there are ways to write your software to gracefully handle an outage.
<br/><br/>
Types of connection issues:
<ul class="dev-guide-list">
  <li>Temporary Outage: Your connection has gone offline and you need to be able to process transactions for a short period of time until the connection is restored</li>
  <li>Intermittent Connection: Your connection works most of the time, but its behavior is unpredictable and occasionally drops unexpectedly</li>
  <li>Unable to Reach REST v2: Your connection is up, but you are unable to reach REST v2 because of a routing problem, a denial-of-service attack on an Internet service provider, or a temporary outage of REST v2</li>
</ul>

These types of outages have similar characteristics, so it’s straightforward to design a single process to handle all of them. Here is how we handle a broken connection:
<ul class="dev-guide-list">
  <li>Detect the dropped connection and prevent a crash</li>
  <li>Retry the transaction</li>
  <li>Recover data using the Commit/Uncommit functionality</li>
  <li>Reconcile transactions after the outage</li>
</ul>

As a cloud-based Software-as-a-Service provider, Avalara understands the need to ensure that our services are available continuously and respond in a timely manner. Check out the <a class="dev-guide-link" href="https://status.avalara.com">Avalara Server Status</a> page:
<ul class="dev-guide-list">
  <li><b>Subscribe to Updates</b> for the services you use - see <b>Avalara Communications</b> for REST v2 status</li>
  <li>Shows the current availability of all Avalara services</li>
  <li>Displays graphs detailing current response times for a number of Avalara services</li>
  <li>Provides a historical view of availability</li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/detect-dropped-connection/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>