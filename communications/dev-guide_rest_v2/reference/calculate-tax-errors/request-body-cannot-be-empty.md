---
layout: page
title:  Request body cannot be empty
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
The request body of the API call is empty or incomplete.

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "Request body cannot be empty."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
<ul class="dev-guide-list">
    <li>Confirm that a request body is included in your API call</li>
    <li>Verify that the format of the JSON request to ensure all required objects are included in your request</li>
    <li>Validate that all fields are set with the proper data type - see the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/">Reference section</a> for more information</li>
    <li>Verify the structure of the JSON is complete (for example, no missing braces)</li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>