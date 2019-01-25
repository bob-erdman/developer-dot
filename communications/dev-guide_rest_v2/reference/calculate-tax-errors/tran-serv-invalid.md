---
layout: page
title:  Invalid transaction/service pair
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
Either the Transaction Type field (<code>tran</code>) or the Service Type field (<code>serv</code>) is not a valid value in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">LineItem</a> (<code>itms</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -28,
      "msg": "Invalid transaction/service pair."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that the Transaction Type (<code>tran</code>) and Service Type (<code>serv</code>) fields on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">LineItem</a> (<code>itms</code>) in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a> are set to valid values.

Use the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints#lookups"><code>/api/v2/afc/tspairs</code> endpoint</a> to get a list of valid Transaction/Service pairs.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>