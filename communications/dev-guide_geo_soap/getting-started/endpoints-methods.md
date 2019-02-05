---
layout: page
title: Chapter 1.2 - Endpoints and Methods
product: communications
doctype: comms_geo_soap_dev_guide
chapter: getting-started
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/getting-started/account-creation/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/getting-started/sample-messages/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3 id="endpoints">Endpoints</h3>

AFC Geo SaaS Pro Soap has two sets of endpoints:
<ol class="dev-guide-list">
  <li>Binding set ending in <code>/2.0</code> returns exceptions when problems are encountered - we recommend using these endpoints so that you can properly handle any exceptions</li>
  <li>Binding set <i>not</i> ending in <code>/2.0</code> returns a NULL when problems are encountered</li>
</ol>

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <tr>
        <th>Binding</th>
        <th>URL</th>
      </tr>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2">Basic HTTP</td>
        <td><a class="dev-guide-link" href="https://ezgeoasp.billsoft.com/LocatorService.svc/2.0">https://ezgeoasp.billsoft.com/LocatorService.svc/2.0</a></td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="https://ezgeoasp.billsoft.com/LocatorService.svc">https://ezgeoasp.billsoft.com/LocatorService.svc</a></td>
      </tr>
      <tr>
        <td rowspan="2">Custom</td>
        <td><a class="dev-guide-link" href="https://ezgeoasp.billsoft.com/LocatorService.svc/SSL/2.0">https://ezgeoasp.billsoft.com/LocatorService.svc/SSL/2.0</a></td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="https://ezgeoasp.billsoft.com/LocatorService.svc/SSL">https://ezgeoasp.billsoft.com/LocatorService.svc/SSL</a></td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
<h3 id="methods">Web Service Methods</h3>
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Request</th>
        <th>Response</th>
      </tr>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>GeocodeAddress</code></td>
        <td>Accepts a single address as input and returns a single address in the street database that best matches the input data</td>
        <td>GeocodeAddress</td>
        <td>GeocodeAddressResponse</td>
      </tr>
      <tr>
        <td><code>GeocodeAllMatches</code></td>
        <td>Accepts a single address as input and returns all addresses in the street database that matches the input data</td>
        <td>GeocodeAllMatches</td>
        <td>GeocodeAllMatchesResponse</td>
      </tr>
      <tr>
        <td><code>GeocodeLatLong</code></td>
        <td>Accepts the latitude and longitude of a location as input and returns jurisdiction information only (not complete addresses)</td>
        <td>GeocodeLatLong</td>
        <td>GeocodeLatLongResponse</td>
      </tr>
      <tr>
        <td><code>GetServerTime</code></td>
        <td>Returns current time on the web server in UTC</td>
        <td>GetServerTime</td>
        <td>GetServerTimeResponse</td>
      </tr>
    </tbody>
  </table>
</div>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/getting-started/account-creation/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/getting-started/sample-messages/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>