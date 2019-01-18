---
layout: page
title:  Exemption Error - Bad data in exemption - Scope value does not represent a supported numeric tax category scope combination
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
The Scope field (<code>scp</code>) is set to an invalid value in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemption</a> (<code>exms</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "Exemption Error - {\"frc\":true,\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"},\"tpe\":1,\"lvl\":1,\"cat\":0,\"dom\":0,\"scp\":10,\"exnb\":true} - Bad data in exemption: Scope value does not represent a supported numeric tax category scope combination."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that Scope (<code>scp</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemption</a> (<code>exms</code>) is set to a valid value:
<ul class="dev-guide-list">
  <li><code>128</code>: Federal</li>
  <li><code>256</code>: State</li>
  <li><code>512</code>: County</li>
  <li><code>1024</code>: Local</li>
</ul>
For example: To exempt all, use <code>1920</code> (Federal + State + County + Local)

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/">Exemption</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>