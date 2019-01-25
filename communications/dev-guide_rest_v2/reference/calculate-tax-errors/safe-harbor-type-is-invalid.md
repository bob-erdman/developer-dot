---
layout: page
title:  Invalid SafeHarborOverride - The Traffic Study Type is Invalid
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
The Safe Harbor Type field (<code>sh</code>) is set to an invalid enumerator in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/">Safe Harbor Override</a> (<code>sovr</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -42,
      "msg": "Invalid SafeHarborOverride: {\"sh\":5,\"old\":0.0,\"new\":0.0} - The Traffic Study Type is Invalid.."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that Safe Harbor Type (<code>sh</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/">SafeHarborOverride</a> (<code>sovr</code>) is set to a valid selection:
<ul class="dev-guide-list">
  <li><code>1</code>: Cellular</li>
  <li><code>2</code>: VoIP</li>
  <li><code>4</code>: Paging</li>
</ul>

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/safe-harbor-override/">Safe Harbor Override</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>