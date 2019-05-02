---
layout: page
title:  geocodeRequests cannot be null or empty
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
The request body of the <code>/api/v2/geo/Geocode</code> <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-requests/">Geocode requests</a> is empty or incomplete.

<h3>Example</h3>
<pre>
geocodeRequests cannot be null or empty.
</pre>

<h3>How to Resolve</h3>
<ul class="dev-guide-list">
    <li>Confirm that a request body is included in your API call</li>
    <li>Verify that the format of the JSON request to ensure all required objects are included in your request</li>
    <li>Validate that all fields are set with the proper data type - see the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-requests/">Reference section</a> for more information</li>
    <li>Verify the structure of the JSON is complete (for example, no missing braces or commas)</li>
</ul>

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/geocode-jurisdiction-determination/">Geocode Jurisdiction Determination</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>