---
layout: page
title:  Exemption Error - Bad data in exemption - Domain value is not a valid numeric tax level
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
The Domain field (<code>dom</code>) is set to an invalid enumerator in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemption</a> (<code>exms</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "Exemption Error - {\"frc\":true,\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"},\"tpe\":1,\"lvl\":1,\"cat\":0,\"dom\":10,\"scp\":0,\"exnb\":true} - Bad data in exemption: Domain value is not a valid numeric tax level."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that Domain (<code>dom</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemption</a> (<code>exms</code>) is set to a valid selection:
<ul class="dev-guide-list">
  <li><code>0</code>: Federal</li>
  <li><code>1</code>: State</li>
  <li><code>2</code>: County</li>
  <li><code>3</code>: City</li>
</ul>

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/">Exemption</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>