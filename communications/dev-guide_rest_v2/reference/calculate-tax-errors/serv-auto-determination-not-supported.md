---
layout: page
title:  ServiceType does not support auto-determination of TransctionType
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
The Service Type (<code>serv</code>) cannot be used to determine an Interstate or Intrastate Transaction Type (<code>tran</code>) using the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/">Interstate/Intrastate Determination</a> functionality.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -28,
      "msg": "ServiceType does not support auto-determination of TransctionType."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/">Interstate/Intrastate Determination</a> functionality can be used to determine the proper Interstate or Intrastate Transaction Type (<code>tran</code>) based on the provided the Service Type (<code>serv</code>) and jurisdictions, but only specific Service Types can be used.  Ensure that the Service Type (<code>serv</code>) provided supports <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/">Interstate/Intrastate Determination</a>.

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/">Interstate/Intrastate Determination</a>.

If you are <b>not</b> intending to use <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/">Interstate/Intrastate Determination</a>, verify that a valid Transaction Type (<code>tran</code>) and Service Type (<code>serv</code>) are added and populated on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line Item</a> (<code>itms</code>).  Use the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints#lookups"><code>/api/v2/afc/tspairs</code> endpoint</a> to get a list of valid Transaction/Service pairs.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>