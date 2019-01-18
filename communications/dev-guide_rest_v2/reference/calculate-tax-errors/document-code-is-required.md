---
layout: page
title:  DocumentCode is required in order to commit transactions
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
The Document Code field (<code>doc</code>) is missing from your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a> (<code>inv</code>) when Commit (<code>cmmt</code>) is <code>true</code>.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "DocumentCode is required in order to commit transactions."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
When using the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/">Commit functionality</a> (<code>cmmt</code> set to <code>true</code>), add and populate Document Code (<code>doc</code>) to the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a> (<code>inv</code>) in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

Otherwise, set Commit (<code>cmmt</code>) to <code>false</code>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>