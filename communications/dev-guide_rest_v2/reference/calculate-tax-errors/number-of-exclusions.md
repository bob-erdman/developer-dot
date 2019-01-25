---
layout: page
title:  Number of Exclusions cannot exceed 100
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
No more than 100 <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exclusion/">Exclusion</a> (<code>excl</code>) objects can be added to a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
      {
        "code": -2000,
        "msg": "Number of Exclusions cannot exceed 100"
      }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that a maximum of 100 <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exclusion/">Exclusion</a> (<code>excl</code>) objects are added to <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/">CompanyData</a> (<code>cmpn</code>) in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exclusion/">Exclusion</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>