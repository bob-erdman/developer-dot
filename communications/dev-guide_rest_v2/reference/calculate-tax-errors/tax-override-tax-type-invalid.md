---
layout: page
title:  Invalid TaxOverride - EZTax failed to insert the override
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
The Tax Type field (<code>tid</code>) is set to an invalid value in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">Tax Override</a> (<code>ovr</code>).  You can only override taxes that exist for the jurisdiction (<code>loc</code>) requested, at the tax level (<code>lvl</code>) specified.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -1011,
      "msg": "Invalid TaxOverride: {\"loc\":{\"ctry\":\"USA\",\"pcd\":2757800,\"st\":\"NC\",\"zip\":\"27701\"},\"scp\":3,\"tid\":999,\"lvl\":0,\"lvlExm\":true,\"brkt\":[{\"rate\":0.0,\"max\":2147483647.0}]} - EZTax failed to insert the override.."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that the Tax Type (<code>tid</code>) applies to the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> (<code>loc</code>) and tax level (<code>lvl</code>) specified in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">Tax Override</a> (<code>ovr</code>).

For more information, see <a class="dev-guide-list" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-override/">Tax Override</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>