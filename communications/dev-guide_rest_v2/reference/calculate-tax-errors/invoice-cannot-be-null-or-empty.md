---
layout: page
title:  Invoice cannot be null or empty
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
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a> (<code>inv</code>) object is missing or incomplete in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "Invoice cannot be null or empty."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
<ul class="dev-guide-list">
    <li>Confirm that at least one instance of <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice (<code>inv</code>)</a> is included in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a></li>
    <li>Verify that the format of the JSON within Invoice to ensure all required fields are populated in your request</li>
    <li>Verify the structure of the JSON within Invoice is complete (for example, no missing braces)</li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>