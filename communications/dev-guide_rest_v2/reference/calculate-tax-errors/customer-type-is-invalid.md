---
layout: page
title:  CustomerType is invalid
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
The CustomerType field (<code>cust</code>) is set to an invalid enumerator in an <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a> (<code>inv</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "CustomerType is invalid."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that CustomerType (<code>cust</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a> (<code>inv</code>) is set to a valid selection:
<ul class="dev-guide-list">
  <li><code>0</code>: Residential</li>
  <li><code>1</code>: Business</li>
  <li><code>2</code>: Senior Citizen</li>
  <li><code>3</code>: Industrial</li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>