---
layout: page
title:  Can't determine call type for international calls
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
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/">Interstate/Intrastate Determination</a> functionality is not supported when the transaction crosses international borders.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -48,
      "msg": "Can't determine call type for international calls."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
<ul class="dev-guide-list">
  <li>Confirm that all jurisdictions included in the transaction (BillTo (<code>bill</code>), From/Origination (<code>from</code>), and To/Termination (<code>to</code>)) are within the same country</li>
  <li>Update the Transaction Type (<code>tran</code>) and Service Type (<code>sev</code>) to be an explicit and valid a Transaction/Service pair, not using <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/">Interstate/Intrastate Determination</a></li>
</ul>

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/">Interstate/Intrastate Determination</a>.

If you are <b>not</b> intending to use <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/">Interstate/Intrastate Determination</a>, verify that a valid Transaction Type (<code>tran</code>) and Service Type (<code>serv</code>) are added and populated on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line Item</a> (<code>itms</code>).  Use the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints#lookups"><code>/api/v2/afc/tspairs</code> endpoint</a> to get a list of valid Transaction/Service pairs

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>