---
layout: page
title:  A valid TransactionType and/or ServiceType are required
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
The Transaction Type field (<code>tran</code>), the Service Type field (<code>serv</code>), or both are missing in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">LineItem</a> (<code>itms</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "A valid TransactionType and/or ServiceType are required."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Add and populate the Transaction Type (<code>tran</code>) and Service Type (<code>serv</code>) fields in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">LineItem</a> (<code>cmpn</code>) in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

Use the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints#lookups"><code>/api/v2/afc/tspairs</code> endpoint</a> to get a list of valid Transaction/Service pairs.

If you are using the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/">Interstate/Intrastate Determination</a> functionality, ensure that supported a Transaction Type (<code>tran</code>) or Service Type (<code>serv</code>) is used and that the Transaction Type (<code>tran</code>) and Service Type (<code>serv</code>) are not both set to "-1".  
  
For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/">Interstate/Intrastate Determination</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>