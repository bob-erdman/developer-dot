---
layout: page
title:  Invalid TaxOverride - Scope is invalid
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
The Scope field (<code>scp</code>) is set to an invalid value in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">Tax Override</a> (<code>ovr</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "Invalid TaxOverride: {\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"},\"scp\":10,\"tid\":162,\"lvl\":0,\"lvlExm\":true,\"brkt\":[{\"rate\":0.0,\"max\":2147483647.0}]} - Scope is invalid."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that Scope (<code>scp</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">Tax Override</a> (<code>ovr</code>) is set to a valid value:
<ul class="dev-guide-list">
  <li><code>0</code>: Country</li>
  <li><code>1</code>: State</li>
  <li><code>2</code>: County</li>
  <li><code>3</code>: City</li>
</ul>

For more information, see <a class="dev-guide-list" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-override/">Tax Override</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>