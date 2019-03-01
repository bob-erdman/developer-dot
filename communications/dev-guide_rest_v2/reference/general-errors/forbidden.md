---
layout: page
title:  Forbidden
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/general-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>

<h3>Error Description</h3>
The Communications REST v2 request has been denied.  Too much data has been sent to REST v2.

<h3>Example</h3>
<pre>
403 Forbidden
</pre>

<h3>How to Resolve</h3>
Limit the amount of data being sent to the endpoint to a maximum of 20,000 transactions per 5 minutes.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/general-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>