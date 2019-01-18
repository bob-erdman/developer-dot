---
layout: page
title:  Number of OptionalField elements in LineItem cannot exceed 10
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
Too many <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/">Optional Fields</a> (<code>opt</code>) have been added to the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
      {
        "code": -2000,
        "msg": "Number of OptionalField elements in LineItem cannot exceed 10."
      }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a> can have up to 10 <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/">Optional Fields</a> (<code>opt</code>).  The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/">Optional Fields</a> (<code>opt</code>) can be used in both the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a> and the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line Item</a>.

Ensure that only 10 <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/">Optional Fields</a> (<code>opt</code>) key value pairs are being used across the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a> and the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line Items</a>.  The same Optional Field key can be used in multiple <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line Items</a>.

For more information, see the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/optional-fields/">Optional Fields use case</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>