---
layout: page
title:  Invalid SafeHarborOverride - NewFederalTam is invalid
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
The New Federal TAM field (<code>new</code>) is set to an invalid value in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/">Safe Harbor Override</a> (<code>sovr</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "Invalid SafeHarborOverride: {\"sh\":2,\"old\":0.649,\"new\":61.0} - NewFederalTam is invalid."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Set the New Federal TAM (<code>new</code>) to a decimal between 0 and 1 to represent the new Federal TAM for the selected Safe Harbor Type in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/">SafeHarborOverride</a> (<code>sovr</code>).

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/safe-harbor-override/">Safe Harbor Override</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>