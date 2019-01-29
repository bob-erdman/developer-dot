---
layout: page
title:  Document code has been locked
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
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> transactions</a> with the Document Code field (<code>doc</code>) specified in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-request/">Commit request</a> have been pulled into Compliance.  The Document Code (<code>doc</code>) is now locked and cannot be modified.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "Document code has been locked."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
The Document Code (<code>doc</code>) cannot be uncommited (<code>cmmt</code> set to <code>false</code>) because the related transactions have already been pulled into Compliance.  If data needs to be modified, run <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/adjustment/">adjustment transactions</a> to offset the totals for the Document Code (<code>doc</code>).

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">Commit Request</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/commit-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>