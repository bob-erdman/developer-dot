---
layout: page
title:  Split for private line transaction must be greater than or equal to 0 and less than or equal to 1 
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
The Private Line Split field (<code>plsp</code>) is set to an invalid value on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line item</a> (<code>itms</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -36,
      "msg": "Split for private line transaction must be greater than or equal to 0 and less than or equal to 1."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Confirm that the Private Line Split (<code>plsp</code>) is a number between 0 and 1.

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/private-line/">Private Line</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>