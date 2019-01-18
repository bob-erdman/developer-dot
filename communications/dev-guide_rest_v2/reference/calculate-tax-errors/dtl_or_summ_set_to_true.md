---
layout: page
title:  ReturnDetail and/or ReturnSummary must be set to true
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
Either the ReturnDetail (<code>dtl</code>) flag, the ReturnSummary (<code>summ</code>) flag, or both flags need to be set to <code>true</code> on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a>.

The ReturnDetail and ReturnSummary flags define the level of detail you want to see in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/"><code>CalcTaxes</code> response</a>.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "ReturnDetail and/or ReturnSummary must be set to true."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Set either the ReturnDetail (<code>dtl</code>) flag, the ReturnSummary (<code>summ</code>) flag, or both flags to be <code>true</code> on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a> in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.  

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/displaying-tax-results/">Displaying Tax Results</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>