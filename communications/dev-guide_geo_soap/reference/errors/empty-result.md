---
layout: page
title:  Empty Result
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
No error is returned, but the result is empty.

<h3>Example</h3>
{% highlight xml %}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <s:Header>
        <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <u:Timestamp u:Id="_0">
                <u:Created>2019-02-26T22:23:51.876Z</u:Created>
                <u:Expires>2019-02-26T22:28:51.876Z</u:Expires>
            </u:Timestamp>
        </o:Security>
    </s:Header>
    <s:Body>
        <GeocodeAddressResponse xmlns="http://tempuri.org/">
            <GeocodeAddressResult i:nil="true" xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance"/>
        </GeocodeAddressResponse>
    </s:Body>
</s:Envelope>
{% endhighlight %}

<h3>How to Resolve</h3>
AFC Geo SaaS Pro Soap isn't able to geocode the location provided.  Provide as much detail as possible in the input and make sure that all fields are populated correctly.  For example, verify that <code>StreetAddress</code> begins with a street number followed by the street name.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>