---
layout: page
title:  Cannot have multiple SafeHarborOverrides for the same safe harbor type
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
Cannot have multiple <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/">Safe Harbor Overrides</a> (<code>sovr</code>) with the same Safe Harbor Type (<code>sh</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "Cannot have multiple SafeHarborOverrides for the same safe harbor type."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Confirm that only one <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/">Safe Harbor Override</a> (<code>sovr</code>) for each Safe Harbor Type (<code>sh</code>) is included in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request.

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/safe-harbor-override/">Safe Harbor Override</a>.

<h4>Note</h4>
A <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/">Safe Harbor Override</a> (<code>sovr</code>) is not required for each of the Safe Harbor Types (<code>sh</code>), but only one override for each Safe Harbor Type (<code>sh</code>) can be included in your request.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>