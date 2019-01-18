---
layout: page
title:  One or more LineItems failed
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
Something has gone wrong with one or more <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line items</a> (<code>itms</code>) in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a>.  This error typically is returned along with other errors in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
      {
        "code": -16,
        "msg": "One or more LineItems failed."
      }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Check if any additional errors are returned (for example, <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/private-line-not-supported/">Exception: The IsPrivateLine parameter is not supported for CalculateTaxInclusiveTaxes.</a>).  Resolve the other errors to clear this error.  

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>