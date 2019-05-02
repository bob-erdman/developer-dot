---
layout: page
title:  Chapter 4.1.1 - Geocode Address
product: communications
doctype: comms_geo_soap_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/geocode-all-matches/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Geocode Address</h3>

<code>GeocodeAddress</code> accepts a single input address (<code>inputAddress</code>) for geocoding and returns the best match:

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
        <td><code>inputAddress</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/input-address/"><code>[inputAddress]</code></a> Input Address
        <br/>
        Contains a single <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/input-address/">input address</a> that you want to geocode</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

<h3>Example</h3>

{% highlight xml %}
<GeocodeAddress>
  <inputAddress>
    // Input address
  </inputAddress>
</GeocodeAddress>
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/geocode-all-matches/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>