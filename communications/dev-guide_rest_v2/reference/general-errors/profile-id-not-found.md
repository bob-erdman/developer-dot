---
layout: page
title:  Profile ID not found
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/general-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>

<h3>Error Description</h3>
The Client Profile passed in the header is not a valid <code>client_profile_id</code> for your account.

<h3>Example</h3>
{% highlight json %}
Profile ID not found.
{% endhighlight %}

<h3>How to Resolve</h3>
<ul class="dev-guide-list">
  <li>Confirm that the <code>client_profile_id</code> <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles/">passed in the header</a> is valid</li>
  <li>If you are using a new <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles/">client profile</a>, try running the request with the <code>client_profile_id</code> in a few hours.  New client profiles can take up to 24 hours to become available once applied</li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/general-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>