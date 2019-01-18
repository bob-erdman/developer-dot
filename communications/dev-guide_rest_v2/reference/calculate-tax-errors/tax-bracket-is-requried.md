---
layout: page
title:  Invalid TaxOverride - BracketInfo is required
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
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-bracket/">Tax Bracket</a> object (<code>brkt</code>) is missing on a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">Tax Override</a> (<code>ovr</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
      {
        "code": -2000,
        "msg": "Invalid TaxOverride: {\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"},\"scp\":3,\"tid\":162,\"lvl\":0,\"lvlExm\":true} - BracketInfo is required."
      }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Add and populate the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-bracket/">Tax Bracket</a> object (<code>brkt</code>) on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">Tax Override</a> (<code>ovr</code>) in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

For more information, see <a class="dev-guide-list" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-override/">Tax Override</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>