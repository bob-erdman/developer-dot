---
layout: page
title:  County, State, and ExclusionOn are required in Exclusions
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
One or more fields are missing in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exclusion/">Exclusion</a> (<code>excl</code>) within in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/">CompanyData</a> (<code>cmpn</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "County, State, and ExclusionOn are required in Exclusions."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
If using <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exclusion/">Exclusion</a> (<code>excl</code>), verify that these fields are included and populated:
<ul class="dev-guide-list">
  <li>Country (<code>ctry</code>)</li>
  <li>State (<code>st</code>)</li>
  <li>Exclusion On (<code>excl</code>)</li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>