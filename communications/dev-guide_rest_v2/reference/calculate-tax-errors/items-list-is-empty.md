---
layout: page
title:  Items list is empty
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
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line Item</a> (<code>itms</code>) object is missing from your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a> (<code>inv</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "Items list is empty."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Add and populate at least one <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/">Line Item</a> (<code>itms</code>) to the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a> (<code>inv</code>) in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>