---
layout: page
title:  Franchise is required
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
The Franchise field (<code>frch</code>) is missing in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/">CompanyData</a> (<code>cmpn</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "Franchise is required."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Add and populate Franchise (<code>frch</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/">CompanyData</a> (<code>cmpn</code>) in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>