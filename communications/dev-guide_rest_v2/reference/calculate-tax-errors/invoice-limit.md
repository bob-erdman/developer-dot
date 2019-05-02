---
layout: page
title:  Total Invoices 1001 cannot exceed 1000
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
Too many <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoices</a> (<code>inv</code>) have been added to the request.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
      {
        "code": -2000,
        "msg": "Total Invoices 1001 cannot exceed 1000"
      }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that each request contains at most 1,000 <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoices</a> (<code>inv</code>).

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>