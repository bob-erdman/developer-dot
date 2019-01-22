---
layout: page
title:  Latitude and Longitude must be provided for lat/long geocoding
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
The Latitude field (<code>lat</code>) or Longitude field (<code>long</code>) is missing in a <code>/api/v2/geo/Geocode</code> <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-requests/">Geocode request</a>.

<h3>Example</h3>
{% highlight json %}
[
  {
    "ref": "Sample Lat/Long Error",
    "err": "Latitude and Longitude must be provided for lat/long geocoding."
  }
]
{% endhighlight %}

<h3>How to Resolve</h3>
Add and populate Latitude (<code>lat</code>) and Longitude (<code>long</code>) in the a <code>/api/v2/geo/Geocode</code> <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-requests/">Geocode request</a>.

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/geocode-jurisdiction-determination/">Geocode Jurisdiction Determination</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>