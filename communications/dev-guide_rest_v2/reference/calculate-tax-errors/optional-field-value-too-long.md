---
layout: page
title:  OptionalField values cannot exceed 150 characters
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
The value field (<code>val</code>) in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/">Optional Field</a> cannot exceed 150 characters.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
      {
        "code": -2000,
        "msg": "OptionalField values cannot exceed 150 characters."
      }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that the value field (<code>val</code>) in the Optional Fields (<code>opt</code>) is 150 characters or less.

For more information, see the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/optional-fields/">Optional Fields use case</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>