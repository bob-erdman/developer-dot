---
layout: page
title:  Invalid BillTo location - Insufficient information provided to determine taxing jurisdiction
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
The BillTo (<code>bill</code>) <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">location</a> does not contain enough information to determine a taxing jurisdiction.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "Invalid BillTo location: Insufficient information provided to determine taxing jurisdiction."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Validate that the BillTo (<code>bill</code>) <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">location</a> contains as much detail as possible.  For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/jurisdiction-determination/">Jurisdiction Determination</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>