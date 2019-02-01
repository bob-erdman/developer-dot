---
layout: page
title:  Tax type {taxType} not a valid numeric tax type
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/lookup-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>

<h3>Error Description</h3>
The Tax Type passed as part of the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints#lookups"><code>/api/v2/afc/taxtype/{taxType}</code> Lookups endpoint</a> is not a valid numeric tax type.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -1000,
      "msg": "Tax type {taxType} not a valid numeric tax type."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that a valid and numeric tax type is being passed in the {taxType} parameter of the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints#lookups"><code>/api/v2/afc/taxtype/{taxType}</code> Lookups endpoint</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/lookup-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>