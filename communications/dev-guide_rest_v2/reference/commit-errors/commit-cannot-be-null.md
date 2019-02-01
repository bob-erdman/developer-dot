---
layout: page
title:  Commit cannot be null
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
The Commit field (<code>cmmt</code>) is missing or blank in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-request/">Commit request</a>.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "Commit cannot be null."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Add and populate the Commit field (<code>cmmt</code>) in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-request/">Commit request</a>.

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">Commit Request</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/commit-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>