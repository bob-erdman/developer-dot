---
layout: page
title:  Chapter 4.2.5 - Cass Address
product: communications
doctype: comms_geo_soap_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/address-location"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/get-server-time-response/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Cass Address</h3>

The <code>CassAddress</code> object contains the <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS validated</a> dat

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
        <td><code>Address</code></td>
        <td><code>[ArrayOfstring]</code> Address
        <br/>
        Contains the CASS certified address in a string array with as many lines of text as required by the standard way of printing the address on an envelope
        </td>
      </tr>
      <tr>
        <td><code>AddressLine</code></td>
        <td><code>[string]</code> AddressLine
        <br/>
        street address portion of the CASS address
        </td>
      </tr>
      <tr>
        <td><code>AddressQualityFlags</code></td>
        <td><code>[string]</code> Address Quality Flags
        <br/>
        Address Quality Flags identified by the CASS software.  Refer to <a class="dev-guide-link" href="https://aescass.com/Doc/MailSTAR.pdf">Appendix B - Address Quality Flags</a> in the <a class="dev-guide-link" href="https://aescass.com/Doc/MailSTAR.pdf">Mail*STAR Users Guide</a> for more information about Address Quality Flags
        </td>
      </tr>
      <tr>
        <td><code>CarrierRoute</code></td>
        <td><code>[string]</code> Carrier Route
        <br/>
        Postal carrier route for the CASS address
        </td>
      </tr>
      <tr>
        <td><code>City</code></td>
        <td><code>[string]</code> City
        <br/>
        USPS-preferred city name
        </td>
      </tr>
      <tr>
        <td><code>CityStateZip</code></td>
        <td><code>[string]</code> City, State, and Zip
        <br/>
        Comma-separated city, state, and Zip code (Zip code and Zip+4 (if present) are hyphen-separated)
        </td>
      </tr>
      <tr>
        <td><code>CountyCode</code></td>
        <td><code>[int]</code> County Code
        <br/>
        Standard USPS US County code for the CASS address
        </td>
      </tr>
      <tr>
        <td><code>DeliveryPointValidation</code></td>
        <td><code>[string]</code> Delivery Point Validation
        <br/>
        Delivery location - verifies that the CASS address has USPS delivery
        </td>
      </tr>
      <tr>
        <td><code>EnhancedLineOfTravel</code></td>
        <td><code>[string]</code> Enhanced Line Of Travel
        <br/>
        Position of the CASS address in the carrier route walk sequence
        </td>
      </tr>
      <tr>
        <td><code>Reliability</code></td>
        <td><code>[double]</code> Reliability
        <br/>
        A number, between 0 and 1, indicating the closeness of the match between a location address and USPS standards
        </td>
      </tr>
      <tr>
        <td><code>State</code></td>
        <td><code>[string]</code> State
        <br/>
        2-character state abbreviation
        </td>
      </tr>
      <tr>
        <td><code>USPSBarCode</code></td>
        <td><code>[string]</code> USPS Bar Code
        <br/>
        12-number bar code used for pre-sorting
        </td>
      </tr>
      <tr>
        <td><code>Zip</code></td>
        <td><code>[string]</code> Zip code
        <br/>
        5-digit Zip code
        </td>
      </tr>
      <tr>
        <td><code>Zip4</code></td>
        <td><code>[string]</code> Zip code extension
        <br/>
        4-digit Zip code extension.  If empty: the address is not <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS certified</a> and may not be deliverable by the Post Office
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

<h3>Example</h3>

{% highlight xml %}
<CassAddress>
    <Address xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
        <string>512 S MANGUM ST</string>
        <string>DURHAM, NC  27701-3973</string>
    </Address>
    <AddressLine>512 S MANGUM ST</AddressLine>
    <AddressQualityFlags>H3-nostat-D</AddressQualityFlags>
    <CarrierRoute>C020</CarrierRoute>
    <City>DURHAM</City>
    <CityStateZip>DURHAM, NC  27701-3973</CityStateZip>
    <CountyCode>63</CountyCode>
    <DeliveryPointValidation>33</DeliveryPointValidation>
    <EnhancedLineOfTravel>0</EnhancedLineOfTravel>
    <Reliability>100</Reliability>
    <State>NC</State>
    <USPSBarCode>/277013973993/</USPSBarCode>
    <Zip>27701</Zip>
    <Zip4>3973</Zip4>
</CassAddress>
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/address-location"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/get-server-time-response/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>