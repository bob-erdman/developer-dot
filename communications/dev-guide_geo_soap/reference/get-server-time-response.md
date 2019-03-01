---
layout: page
title:  Chapter 4.2.6 - Get Server Time Response
product: communications
doctype: comms_geo_soap_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/cass-address"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/fault/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Get Server Time Response</h3>

<code>GetServerTimeResponse</code> contains a single (<code>GetServerTimeResult</code>) that returns the current server date and time:

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>GetServerTimeResult</code></td>
        <td><code>[string]</code> Get Server Time Result
        <br/>
       Contains the current date and time from the AFC Geo SaaS Pro Soap server in UTC</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

<h3>Example</h3>

{% highlight xml %}
<GetServerTimeResponse>
    <GetServerTimeResult>Feb 15, 2019 7:19:32 PM</GetServerTimeResult>
</GetServerTimeResponse>
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/cass-address"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/fault/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>