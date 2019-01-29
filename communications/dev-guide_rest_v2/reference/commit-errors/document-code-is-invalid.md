---
layout: page
title:  DocumentCode is invalid
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
The Document Code field (<code>doc</code>) is missing or invalid in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-request/">Commit request</a>.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "DocumentCode is invalid."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
<ul class="dev-guide-list">
  <li>Ensure that Document Code (<code>doc</code>) is included in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-request/">Commit request</a></li>
  <li>Validate that the length of the Document Code (<code>doc</code>) is 150 characters or less</li>
</ul>

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">Commit Request</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/commit-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>