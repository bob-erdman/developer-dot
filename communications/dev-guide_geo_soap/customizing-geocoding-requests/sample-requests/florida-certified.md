---
layout: page
title: Chapter 3.5 - Florida Certified
product: communications
doctype: comms_geo_soap_dev_guide
chapter: customizing-geocoding-requests
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/special-tax-jurisdiction"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

AFC Geo SaaS Pro Soap is <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/florida-certification/">certified in the state of Florida</a>.  Addresses that are certified by Florida have a couple characteristics to look for:
<ul class="dev-guide-list">
   <li>Network ID (<code>NetworkID</code>) is blank</li>
   <li>Score (<code>Score</code>) is 1</li>
</ul>

<h3>Florida  Example</h3>
Enter a Florida address in <code>inputAddress</code>.

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
            <a:City>ST PETERSBURG</a:City>
            <a:CityStateZip/>
            <a:MinimumScore>0.7</a:MinimumScore>
            <a:Offset>3</a:Offset>
            <a:Options>312</a:Options>
            <a:SecondaryUnit/>
            <a:State>FL</a:State>
            <a:StreetAddress>200 37TH AVE N</a:StreetAddress>
            <a:Zip>33704</a:Zip>
         </inputAddress>
      </GeocodeAddress>
   </s:Body>
</s:Envelope>
{% endhighlight %}

<h4>Response</h4>
A jurisdiction is returned in Florida with no <code>NetworkID</code> and a <code>Score</code> of 1.

<div class="panel-group">
  <a class="dev-guide-link" data-toggle="collapse" href="#collapse1">View the Response XML</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight xml %}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <u:Timestamp u:Id="_0">
            <u:Created>2019-02-07T20:50:56.959Z</u:Created>
            <u:Expires>2019-02-07T20:55:56.959Z</u:Expires>
         </u:Timestamp>
      </o:Security>
   </s:Header>
   <s:Body>
      <GeocodeAddressResponse xmlns="http://tempuri.org/">
         <GeocodeAddressResult xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:Alternate>0</a:Alternate>
            <a:CassAddress>
               <a:Address xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                  <b:string>200 37TH AVE N</b:string>
                  <b:string>ST PETERSBURG, FL  33704-1416</b:string>
               </a:Address>
               <a:AddressLine>200 37TH AVE N</a:AddressLine>
               <a:AddressQualityFlags>S4W</a:AddressQualityFlags>
               <a:CarrierRoute>C017</a:CarrierRoute>
               <a:City>ST PETERSBURG</a:City>
               <a:CityStateZip>ST PETERSBURG, FL  33704-1416</a:CityStateZip>
               <a:CountyCode>103</a:CountyCode>
               <a:DeliveryPointValidation>3</a:DeliveryPointValidation>
               <a:EnhancedLineOfTravel>0</a:EnhancedLineOfTravel>
               <a:Reliability>97</a:Reliability>
               <a:State>FL</a:State>
               <a:USPSBarCode>/337041416001/</a:USPSBarCode>
               <a:Zip>33704</a:Zip>
               <a:Zip4>1416</a:Zip4>
            </a:CassAddress>
            <a:CensusBlockGroup>1012</a:CensusBlockGroup>
            <a:CensusTract>23900</a:CensusTract>
            <a:CityName>ST PETERSBURG</a:CityName>
            <a:Country>USA</a:Country>
            <a:County>PINELLAS</a:County>
            <a:ErrorMessage/>
            <a:FeatureID>2405401</a:FeatureID>
            <a:FipsCode>1210363000</a:FipsCode>
            <a:FipsPlaceName>ST PETERSBURG</a:FipsPlaceName>
            <a:Incorporated>true</a:Incorporated>
            <a:InputAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
               <b:string>200 37TH AVE N</b:string>
               <b:string>ST PETERSBURG,FL 33704</b:string>
            </a:InputAddress>
            <a:Latitude>27.80579</a:Latitude>
            <a:Longitude>-82.635775</a:Longitude>
            <a:NetworkID/>
            <a:PCode>609600</a:PCode>
            <a:PostalCode>33704</a:PostalCode>
            <a:PostalCodeExtension>1416</a:PostalCodeExtension>
            <a:PrimaryJurisdictionName>ST PETERSBURG</a:PrimaryJurisdictionName>
            <a:PrimaryJurisdictionPCode>609600</a:PrimaryJurisdictionPCode>
            <a:Score>1</a:Score>
            <a:SecondaryUnit/>
            <a:SpecialTaxDistrictName i:nil="true"/>
            <a:SpecialTaxDistrictPCode>-1</a:SpecialTaxDistrictPCode>
            <a:StandardizedAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
               <b:string>200 37TH AVE N</b:string>
               <b:string>ST PETERSBURG,FL 33704-1416</b:string>
            </a:StandardizedAddress>
            <a:StateName>FL</a:StateName>
            <a:StreetName>37TH AVE N</a:StreetName>
            <a:StreetNumber>200</a:StreetNumber>
            <a:TaxJurisdictionName>ST PETERSBURG</a:TaxJurisdictionName>
            <a:TimeZone/>
            <a:UnderlyingFipsCode>1210363000</a:UnderlyingFipsCode>
         </GeocodeAddressResult>
      </GeocodeAddressResponse>
   </s:Body>
</s:Envelope>
{% endhighlight %}
    </div>
  </div>
</div>

<h3>See Also</h3>
<h4>Input</h4>
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-address/">Geocode Address</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-all-matches/">Geocode All Matches</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-lat-long/">Geocode Lat Long</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/input-address/">Input Address</a></li>
</ul>

<h4>Results</h4>
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-address-response/">Geocode Address Response</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-all-matches-response/">Geocode All Matches Response</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-lat-long-response/">Geocode Lat Long Response</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/address-location/">Address Location</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/special-tax-jurisdiction"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>