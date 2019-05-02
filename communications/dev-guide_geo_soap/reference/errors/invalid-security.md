---
layout: page
title:  Invalid Security
product: communications
doctype: comms_geo_soap_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>

<h3>Error Description</h3>
The <code>Security</code> object is not formatted properly.

<h3>Example</h3>
{% highlight xml %}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
    <s:Body>
        <s:Fault>
            <faultcode xmlns:a="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">a:InvalidSecurity</faultcode>
            <faultstring xml:lang="en-US">An error occurred when verifying security for the message.</faultstring>
        </s:Fault>
    </s:Body>
</s:Envelope>
{% endhighlight %}

<h3>How to Resolve</h3>
Verify that the <code>Security</code> object is formatted properly.  Ensure that all expected tags are included:
<ul class="dev-guide-list">
  <li><code>UsernameToken</code></li>
  <li><code>Username</code></li>
  <li><code>Password</code></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>