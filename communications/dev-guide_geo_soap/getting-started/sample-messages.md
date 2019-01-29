---
layout: page
title: Chapter 1.3 - Sample Messages
product: communications
doctype: comms_geo_soap_dev_guide
chapter: getting-started
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/getting-started/endpoints-methods/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/getting-started/best-practices/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Geocoding requests through AFC Geo SaaS Pro Soap are made using SOAP messages, with each message written in XML.  Examples of both types of <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/getting-started/endpoints-methods/">bindings</a> are provided here to help you understand what should be sent to the service.

<h3>Basic HTTP Binding</h3>
<h4>Request</h4>
{% highlight xml %}
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:s="s">
   <soapenv:Header>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <o:UsernameToken>
            <o:Username>USERNAME</o:Username>
            <o:Password>PASSWORD</o:Password>
         </o:UsernameToken>
      </o:Security>
   </soapenv:Header>
   <soapenv:Body>
      <tem:GetServerTime/>
   </soapenv:Body>
</soapenv:Envelope>
{% endhighlight %}

<h4>Response</h4>
{% highlight xml %}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <u:Timestamp u:Id="_0">
            <u:Created>2019-01-29T19:54:40.527Z</u:Created>
            <u:Expires>2019-01-29T19:59:40.527Z</u:Expires>
         </u:Timestamp>
      </o:Security>
   </s:Header>
   <s:Body>
      <GetServerTimeResponse xmlns="http://tempuri.org/">
         <GetServerTimeResult>Jan 29, 2019 7:54:40 PM</GetServerTimeResult>
      </GetServerTimeResponse>
   </s:Body>
</s:Envelope>
{% endhighlight %}

<h3>Custom Binding</h3>
<h4>Request</h4>
{% highlight xml %}
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/" xmlns:s="s">
   <soap:Header>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <o:UsernameToken>
            <o:Username>USERNAME</o:Username>
            <o:Password>PASSWORD</o:Password>
         </o:UsernameToken>
      </o:Security>
   </soap:Header>
   <soap:Body>
      <tem:GetServerTime/>
   </soap:Body>
</soap:Envelope>
{% endhighlight %}

<h4>Response</h4>
{% highlight xml %}
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope">
   <s:Body>
      <GetServerTimeResponse xmlns="http://tempuri.org/">
         <GetServerTimeResult>Jan 29, 2019 7:54:40 PM</GetServerTimeResult>
      </GetServerTimeResponse>
   </s:Body>
</s:Envelope>
{% endhighlight%}

For more sample requests, see <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/customizing-transactions/sample-transactions/">Customizing Transactions</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/getting-started/endpoints-methods/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/getting-started/best-practices/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>