---
layout: page
title:  Invalid Exclusion
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
One or more fields within <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exclusion/">Exclusion</a> (<code>excl</code>) contains invalid data (returned when ExclusionOn (<code>excl</code>) is set to <code>false</code> as well).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
      {
        "code": -1000,
        "msg": "Invalid Exclusion: {\"ctry\":\"XXX\",\"st\":\"YYY\",\"excl\":true} - EZTax failed to add the exclusion information.."
      }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Validate the values passed in Country (<code>ctry</code>) and State (<code>st</code>):
<ul class="dev-guide-list">
  <li>Country is a valid 3-character country ISO</li>
  <li>State is a valid state abbreviation</li>
  <li>State is within the provided country</li>
</ul> 

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exclusion/">Exclusion</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>