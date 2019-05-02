---
layout: page
title:  User account is inactive!
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
The user account provided is inactive.

<h3>Example</h3>
{% highlight xml %}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
    <s:Body>
        <s:Fault>
            <faultcode>s:Client</faultcode>
            <faultstring xml:lang="en-US">User account is inactive!</faultstring>
        </s:Fault>
    </s:Body>
</s:Envelope>
{% endhighlight %}

<h3>How to Resolve</h3>
Contact your Customer Account Manager with questions regarding your account status.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>