---
layout: page
title:  ServiceClass is required
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
The ServiceClass field (<code>svcl</code>) is missing in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/">CompanyData</a> (<code>cmpn</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "ServiceClass is required."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Add and populate ServiceClass (<code>svcl</code>) to <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/">CompanyData</a> (<code>cmpn</code>) in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>