---
layout: page
title: Chapter 2.1.1 - Address Geocoding Sample
product: communications
doctype: comms_geo_soap_dev_guide
chapter: geocode
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode/address-geocoding"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode/required-fields/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Your First Address Geocoding Request</h3>

We're going to send a simple <code>GeocodeAddress</code> request using <a class="dev-guide-link" href="https://www.getpostman.com">Postman</a> and then inspect the results.

<h3>Headers</h3>

Add these headers to your request:
<ul class="dev-guide-list">
  <li><code>Content-Type</code>: text/xml</li>
  <li><code>SOAPAction</code>: http://tempuri.org/ILocatorService/GeocodeAddress</li>
</ul>

<h4>Postman example</h4>
<img src="/public/images/comms/dev-guide_geo_soap/comms_geo_soap_dev_guide_1.png" width="975" height="275">

<h3>Body</h3>
For the body of the <code>GeocodeAddress</code> request, copy and paste this example and update with your <code>Username</code> and <code>Password</code>:

{% highlight xml %}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
   <s:Header>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <o:UsernameToken>
            <o:Username>USERNAME</o:Username>
            <o:Password>PASSWORD</o:Password>
         </o:UsernameToken>
      </o:Security>
   </s:Header>
   <s:Body>
      <GeocodeAddress xmlns="http://tempuri.org/">
         <inputAddress xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:CassCertify>true</a:CassCertify>
            <a:City>Seattle</a:City>
            <a:CityStateZip/>
            <a:MinimumScore>0.7</a:MinimumScore>
            <a:Offset>3</a:Offset>
            <a:Options>312</a:Options>
            <a:SecondaryUnit>Suite 1800</a:SecondaryUnit>
            <a:Source/>
            <a:State>WA</a:State>
            <a:StreetAddress>255 South King St</a:StreetAddress>
            <a:Zip>98104</a:Zip>
         </inputAddress>
      </GeocodeAddress>
   </s:Body>
</s:Envelope>
{% endhighlight %}

<h4>What are we sending?</h4>

<ol class="dev-guide-list">
  <li>Username and password in the <code>UsernameToken</code> within the header</li>
  <li>Input Address details</li>
    <ul class="dev-guide-list">
        <li>Geocode request for an address in Seattle, WA</li>
        <li><code>CassCertify</code> is <code>true</code> - this runs CASS validation and returns scrubbed address information</li>
        <li><code>MinimumScore</code> is <code>0.7</code> - requesting an address with a score of 0.7 or greater</li>
        <li><code>Options</code> is <code>312</code> - Options 8, 16, 32, and 256 included</code></li>
    </ul>
</ol>


<h3>Response</h3>
The <code>GeocodeAddressResponse</code> contains detailed address information for a single matching address:

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!UPDATE RESULTS WITH SECONDARY UNIT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

{% highlight xml %}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <u:Timestamp u:Id="_0">
            <u:Created>2019-01-31T19:43:57.996Z</u:Created>
            <u:Expires>2019-01-31T19:48:57.996Z</u:Expires>
         </u:Timestamp>
      </o:Security>
   </s:Header>
   <s:Body>
      <GeocodeAddressResponse xmlns="http://tempuri.org/">
         <GeocodeAddressResult xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:Alternate>0</a:Alternate>
            <a:CassAddress>
               <a:Address xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                  <b:string>255 S KING ST</b:string>
                  <b:string>SEATTLE, WA  98104-2832</b:string>
               </a:Address>
               <a:AddressLine>255 S KING ST</a:AddressLine>
               <a:AddressQualityFlags>S4</a:AddressQualityFlags>
               <a:CarrierRoute>C001</a:CarrierRoute>
               <a:City>SEATTLE</a:City>
               <a:CityStateZip>SEATTLE, WA  98104-2832</a:CityStateZip>
               <a:CountyCode>33</a:CountyCode>
               <a:DeliveryPointValidation>3</a:DeliveryPointValidation>
               <a:EnhancedLineOfTravel>0</a:EnhancedLineOfTravel>
               <a:Reliability>100</a:Reliability>
               <a:State>WA</a:State>
               <a:USPSBarCode>/981042832553/</a:USPSBarCode>
               <a:Zip>98104</a:Zip>
               <a:Zip4>2832</a:Zip4>
            </a:CassAddress>
            <a:CensusBlockGroup>2016</a:CensusBlockGroup>
            <a:CensusTract>9300</a:CensusTract>
            <a:CityName>SEATTLE</a:CityName>
            <a:Country>USA</a:Country>
            <a:County>KING</a:County>
            <a:ErrorMessage/>
            <a:FeatureID>2411856</a:FeatureID>
            <a:FipsCode>5303363000</a:FipsCode>
            <a:FipsPlaceName>SEATTLE</a:FipsPlaceName>
            <a:Incorporated>true</a:Incorporated>
            <a:InputAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
               <b:string>255 SOUTH KING ST</b:string>
               <b:string>Seattle,WA 98104</b:string>
            </a:InputAddress>
            <a:Latitude>47.598268931440387</a:Latitude>
            <a:Longitude>-122.33089769285252</a:Longitude>
            <a:NetworkID>nt</a:NetworkID>
            <a:PCode>4133800</a:PCode>
            <a:PostalCode>98104</a:PostalCode>
            <a:PostalCodeExtension>2832</a:PostalCodeExtension>
            <a:PrimaryJurisdictionName>SEATTLE</a:PrimaryJurisdictionName>
            <a:PrimaryJurisdictionPCode>4133800</a:PrimaryJurisdictionPCode>
            <a:Score>1</a:Score>
            <a:SecondaryUnit/>
            <a:SpecialTaxDistrictName i:nil="true"/>
            <a:SpecialTaxDistrictPCode>-1</a:SpecialTaxDistrictPCode>
            <a:StandardizedAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
               <b:string>255 S KING ST</b:string>
               <b:string>SEATTLE,WA 98104-2832</b:string>
            </a:StandardizedAddress>
            <a:StateName>WA</a:StateName>
            <a:StreetName>S KING ST</a:StreetName>
            <a:StreetNumber>255</a:StreetNumber>
            <a:TaxJurisdictionName>SEATTLE</a:TaxJurisdictionName>
            <a:TimeZone/>
            <a:UnderlyingFipsCode>5303363000</a:UnderlyingFipsCode>
         </GeocodeAddressResult>
      </GeocodeAddressResponse>
   </s:Body>
</s:Envelope>
{% endhighlight %}

The record returned contains detailed information including:
<ul class="dev-guide-list">
  <li><code>CassAddress</code>: CASS information including Carrier Route, USPS Barcode, and standardized address</li>
  <li>Census block group and tract information</li>
  <li><code>PCode</code>, <code>FeatureID</code>, and <code>FipsCode</code></li>
  <li>Special tax jurisdiction details (if applicable)</li>
</ul>

<!--For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">Geocode Address Response</a>.-->

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode/required-fields/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>