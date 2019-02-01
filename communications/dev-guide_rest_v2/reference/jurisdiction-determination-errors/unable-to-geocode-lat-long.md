---
layout: page
title:  Unable to geocode lat/long
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
The Latitude (<code>lat</code>) and Longitude (<code>long</code>) coordinates provided in a <code>/api/v2/geo/Geocode</code> <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-requests/">Geocode request</a> are not complete or the information provided is invalid.

<h3>Example</h3>
{% highlight json %}
[
  {
    "ref": "Sample Lat/Long Error",
    "err": "Unable to geocode lat/long."
  }
]
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that the Latitude (<code>lat</code>) and Longitude (<code>long</code>) coordinates are accurately populated in the a <code>/api/v2/geo/Geocode</code> <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-requests/">Geocode request</a>.  For example, confirm that the Latitude (<code>lat</code>) and Longitude (<code>long</code>) fields are not switched.

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/geocode-jurisdiction-determination/">Geocode Jurisdiction Determination</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>