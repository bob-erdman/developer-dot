---
layout: page
title:  Exemption Error - Bad data in exemption - Location is required
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
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">location</a> (<code>loc</code>) is missing in an <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemption</a> (<code>exms</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
      {
        "code": -2000,
        "msg": "Exemption Error - {\"frc\":true,\"tpe\":1,\"lvl\":1,\"cat\":0,\"dom\":0,\"scp\":0,\"exnb\":true} - Bad data in exemption: Location is required."
      }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Add and populate the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">location</a> (<code>loc</code>) in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemption</a> (<code>exms</code>) in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/">Exemption</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>