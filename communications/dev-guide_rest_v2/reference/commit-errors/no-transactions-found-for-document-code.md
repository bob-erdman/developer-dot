---
layout: page
title:  No transactions found for document code
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/commit-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>

<h3>Error Description</h3>
The Document Code field (<code>doc</code>) provided in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-request/">Commit request</a> is not associated with any <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> transactions</a>.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "No transactions found for document code."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that the Document Code (<code>doc</code>) is correct and has been used on a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">Commit Request</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/commit-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>