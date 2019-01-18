---
layout: page
title:  DiscountType is invalid
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
The DiscountType field (<code>disc</code>) is set to an invalid enumerator in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line item</a> (<code>itms</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "DiscountType is invalid."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that DiscountType (<code>disc</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">LineItem</a> (<code>itms</code>) is set to a valid selection:
<ul class="dev-guide-list">
  <li><code>0</code> <b>None</b></li>
  <li><code>1</code> <b>Retail Product</b>: An amount subtracted from the original price to arrive at a lower price</li>
  <li><code>2</code> <b>Manufacturer Product</b>: A discount of the total amount reimbursed to either the retailer or the customer by the manufacturer</li>
  <li><code>3</code> <b>Account Level</b>: A stand-alone discount that is not applied against any service but instead as a stand-alone product</li>
  <li><code>4</code> <b>Subsidized</b>: A discount caused exclusively in telephone service where the telephone provider provides a service to a lifeline eligible customer. The discount will be on the local exchange service</li>
  <li><code>5</code> <b>Goodwill</b>: The total discount of a service that is recorded for accounting purposes but never billed to a customer</li>
</ul>

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/adjustment/">Adjustments</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>