---
layout: page
title:  Exemption Error - Bad data in exemption - Tax Type value and one of (Tax Level, Domain) or Category are required
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
These fields are missing in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemption</a> (<code>exms</code>):
<ul class="dev-guide-list">
  <li>Tax Type (<code>tpe</code>)</li>
  <li>One of:</li>
  <ul class="dev-guide-list">
    <li>Tax Level (<code>lvl</code>) and Domain (<code>dom</code>)</li>
    <li>Category (<code>cat</code>)</li>
  </ul>
</ul>

<h3>Example</h3>
{% highlight json %}
{
  "err": [
      {
        "code": -2000,
        "msg": "Exemption Error - {\"frc\":true,\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"}} - Bad data in exemption: Tax Type value and one of (Tax Level, Domain) or Category are required."
      }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Add and populate these fields in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemption</a> (<code>exms</code>) in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>:
<ul class="dev-guide-list">
  <li>Tax Type (<code>tpe</code>)</li>
  <li>One of:</li>
  <ul class="dev-guide-list">
    <li>Tax Level (<code>lvl</code>) and Domain (<code>dom</code>)</li>
    <li>Category (<code>cat</code>)</li>
  </ul>
</ul>

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/">Exemption</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>