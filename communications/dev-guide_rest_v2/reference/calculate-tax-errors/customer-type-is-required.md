---
layout: page
title:  CustomerType is required
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
The CustomerType field (<code>cust</code>) is missing on an <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a> (<code>inv</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
      {
        "code": -2000,
        "msg": "CustomerType is required."
      }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Add and populate CustomerType (<code>cust</code>) on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a> (<code>inv</code>) in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>