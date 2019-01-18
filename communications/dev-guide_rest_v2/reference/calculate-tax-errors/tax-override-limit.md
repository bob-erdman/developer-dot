---
layout: page
title:  Number of TaxOverrides cannot exceed 100
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
Too many <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">Tax Overrides</a> (<code>ovr</code>) have been added to the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
      {
        "code": -2000,
        "msg": "Number of TaxOverrides cannot exceed 100."
      }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that a maximum of 100 <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">Tax Overrides</a> (<code>ovr</code>) are included in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>