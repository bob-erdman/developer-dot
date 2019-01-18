---
layout: page
title:  Key in OptionalFields must be unique
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
All key fields (<code>key</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/">Optional Field</a> must contain unique values between 1 and 10.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
      {
        "code": -2000,
        "msg": "Key in OptionalFields must be unique."
      }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that all key fields (<code>key</code>) in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/">Optional Fields</a> (<code>opt</code>) are unique between the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a> and the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line Items</a>.  The same Optional Field key can be used in multiple <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line Items</a>.

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/optional-fields/">Optional Fields</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>