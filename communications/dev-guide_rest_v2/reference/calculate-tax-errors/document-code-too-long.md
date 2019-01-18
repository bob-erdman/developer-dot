---
layout: page
title:  DocumentCode cannot exceed 150 characters
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
The Document Code field (<code>doc</code>) on the  <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a> (<code>inv</code>) contains more than the maximum 150 characters.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "DocumentCode cannot exceed 150 characters."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Limit the Document Code field (<code>doc</code>) to 150 characters or less in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a> (<code>inv</code>) in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/commit/">Commit</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>