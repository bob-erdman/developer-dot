---
layout: page
title:  USER VALIDATION ERROR - userName or password is null
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
            <faultstring xml:lang="en-US">USER VALIDATION ERROR - userName or password is null</faultstring>
        </s:Fault>
    </s:Body>
</s:Envelope>
{% endhighlight %}

<h3>How to Resolve</h3>
Verify that the <code>Password</code> field is included in the <code>Security</code> object within the header and that a valid password is provided.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>