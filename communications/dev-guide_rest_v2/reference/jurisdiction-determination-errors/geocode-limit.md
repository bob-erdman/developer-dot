---
layout: page
title:  Number of geocode requests cannot exceed 1000 in a single call
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>

<h3>Error Description</h3>
Too many <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-requests/">Geocode requests</a> have been added to the <code>/api/v2/geo/Geocode</code> request.

<h3>Example</h3>
<pre>
Number of geocode requests cannot exceed 1000 in a single call.
</pre>

<h3>How to Resolve</h3>
Ensure that the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-requests/">Geocode requests</a> contains at most 1,000 geocoding requests.

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/geocode-jurisdiction-determination/">Geocode Jurisdiction Determination</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>