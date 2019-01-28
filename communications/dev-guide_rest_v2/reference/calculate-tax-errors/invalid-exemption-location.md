---
layout: page
title:  Invalid TaxExemption - Unable to determine jurisdiction for TaxExemption - County/State/Zip not found
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
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">location</a> (<code>loc</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemption</a> (<code>exms</code>) contains invalid jurisdiction information.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "Invalid TaxExemption: {\"loc\":{\"ctry\":\"USA\",\"st\":\"PA\",\"zip\":\"27701\"},\"tpe\":35,\"dom\":1,\"scp\":256} - Unable to determine jurisdiction for TaxExemption: County/State/Zip not found.."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Validate that the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemption</a> (<code>exms</code>) <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">location</a> (<code>loc</code>) contains valid combinations of data, including:
<ul class="dev-guide-list"> 
  <li>State (<code>code</code>) is within the provided country (<code>ctry</code>)</li>
  <li>A city (<code>cty</code>) has a corresponding country (<code>ctry</code>), state (<code>st</code>), and postal code (<code>zip</code>) when possible</li>
  <li>A county (<code>cnty</code>) has a corresponding country (<code>ctry</code>), state (<code>st</code>), and postal code (<code>zip</code>) when possible</li>
</ul>

Ensure all country (<code>ctry</code>) and state (<code>st</code>) abbreviations are correct.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>