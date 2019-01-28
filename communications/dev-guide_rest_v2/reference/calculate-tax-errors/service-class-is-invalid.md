---
layout: page
title:  ServiceClass is invalid
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
The ServiceClass field (<code>svcl</code>) is set to an invalid enumerator in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/">CompanyData</a> (<code>cmpn</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "ServiceClass is invalid."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that ServiceClass (<code>svcl</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/">CompanyData</a> (<code>cmpn</code>) is set to a valid selection:
<ul class="dev-guide-list">
  <li><code>0</code>: Primary Local</li>
  <li><code>1</code>: Primary Long Distance</li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>