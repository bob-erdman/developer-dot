---
layout: page
title:  Unauthorized
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
You are not properly authenticated with Communications REST v2 or the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/authentication/">header fields</a> are not populated correctly.

<h3>Example</h3>
{% highlight json %}
"Unauthorized"
{% endhighlight %}

<h3>How to Resolve</h3>
<ul class="dev-guide-list">
    <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/authentication/">Authenticate</a> with REST v2 by passing the required fields in the header</li>
    <li>Confirm that the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/authentication#api_key"><code>api_key</code> is correct</a></li>
    <li>Verify the <code>client_id</code> passed in the header to ensure that it is the correct client ID</li>
    <li>If using a <code>client_profile_id</code>, confirm that the Profile ID being passed is a valid numeric value</li>
    <li>Confirm with your Customer Account Manager (CAM) that you have access to REST v2</li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/general-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>