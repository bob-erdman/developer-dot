---
layout: page
title:  Unable to geocode address
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
The address information provided (<code>addr</code>, <code>city</code>, <code>st</code>, and <code>zip</code>) in a <code>/api/v2/geo/Geocode</code> <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-requests/">Geocode request</a> is not complete or the information provided is invalid.

<h3>Example</h3>
{% highlight json %}
[
  {
    "ref": "Sample Address Error",
    "err": "Unable to geocode address."
  }
]
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure as many of the address fields are included and accurately populated in the a <code>/api/v2/geo/Geocode</code> <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-requests/">Geocode request</a>.
<ul class="dev-guide-list">
  <li>Street Address (<code>addr</code>)</li>
  <li>City (<code>city</code>)</li>
  <li>State (<code>st</code>)</li>
  <li>Postal Code (<code>zip</code>)</li>
</ul>

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/geocode-jurisdiction-determination/">Geocode Jurisdiction Determination</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>