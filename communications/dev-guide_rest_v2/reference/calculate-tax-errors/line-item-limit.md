---
layout: page
title:  Total LineItems 10001 cannot exceed 10000
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
Too many <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line items</a> (<code>itms</code>) have been added to the request.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
      {
        "code": -2000,
        "msg": "Total LineItems 10001 cannot exceed 10000"
      }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that each request contains at most 10,000 <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line Items</a> (<code>itms</code>).

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>