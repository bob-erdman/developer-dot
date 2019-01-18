---
layout: page
title:  Exception - The IsPrivateLine parameter is not supported for CalculateTaxInclusiveTaxes
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
The Private Line Split field (<code>plsp</code>) can't be included on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line item</a> (<code>itms</code>) if Tax Inclusive (<code>incl</code>) is set to <code>true</code>.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -1000,
      "msg": "Exception: The IsPrivateLine parameter is not supported for CalculateTaxInclusiveTaxes."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Remove the Private Line Split field (<code>plsp</code>) from the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line item</a> (<code>itms</code>) when running a Tax Inclusive (<code>incl</code> = <code>true</code>) <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line item</a> (<code>itms</code>).

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/private-line/">Private Line</a> and <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-inclusive/">Tax Inclusive</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>