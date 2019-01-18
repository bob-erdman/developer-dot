---
layout: page
title:  NPANXX not found
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>

<h3>Error Description</h3>
The NPANXX (<code>npa</code>) provided in a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">location</a> (<code>loc</code>) is not valid.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -14,
      "msg": "NPANXX not found."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Validate that the NPANXX field (<code>npa</code>) on all <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">locations</a> (<code>bill</code>, <code>from</code>, <code>to</code>, or <code>loc</code>) is a valid NPANXX.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>