---
layout: page
title:  Password is invalid!
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
The supplied password is invalid.

<h3>Example</h3>
{% highlight xml %}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
    <s:Body>
        <s:Fault>
            <faultcode>s:Client</faultcode>
            <faultstring xml:lang="en-US">Password is invalid!</faultstring>
        </s:Fault>
    </s:Body>
</s:Envelope>
{% endhighlight %}

<h3>How to Resolve</h3>
Check the password in the header.  
<ul class="dev-guide-list">
  <li>Confirm that the <code>Password</code> field within the header is populated and is correct</li>
  <li>AFC Geo SaaS Pro Soap passwords are case sensitive - verify that you are entering the password exactly as it was provided to you</li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>