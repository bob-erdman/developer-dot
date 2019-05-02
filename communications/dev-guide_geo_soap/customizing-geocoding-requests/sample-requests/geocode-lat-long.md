---
layout: page
title: Chapter 3.3 - Geocode Lat Long
product: communications
doctype: comms_geo_soap_dev_guide
chapter: customizing-geocoding-requests
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/geocode-all-matches"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/special-tax-jurisdiction">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The <code>GeocodeLatLong</code> <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/getting-started/endpoints-methods#methods">method</a> accepts a latitude and longitude coordinate pair and returns the single best match.

<h3>GeocodeLatLong Example</h3>
This request contains the latitude (<code>latitude</code>) and longitude (<code>longitude</code>) coordinates for the location.  Leave source (<code>Source</code>) blank.

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
      <tem:GeocodeLatLong>
         <tem:latitude>35.991130741436415</tem:latitude>
         <tem:longitude>-78.90267307450108</tem:longitude>
         <tem:Source/>
      </tem:GeocodeLatLong>
   </s:Body>
</s:Envelope>
{% endhighlight %}

<h4>Response</h4>
The <code>GeocodeLatLongResponse</code> contains basic address information for a single matching address based on the coordinate pair.  The record returned contains:
<ul class="dev-guide-list">
  <li><code>CassAddress</code> is <code>nil</code> since <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS validation</a> is not performed on a lat/long geocode request</li>
  <li>Census block ID (<code>CensusBlockGroup</code>) and tract ID (<code>CensusTract</code>) fields are included but set to 0</li>
  <li><code>PCode</code>, <code>FeatureID</code>, and <code>FipsCode</code></li>
  <li>Results are from NavTeq (<code>NetworkID</code> is <code>nt</code>)</li>
  <li>AFC Geo SaaS Pro Soap is 99.9% confident in this result (<code>Score</code> is 0.9999)</li>
</ul>

<div class="panel-group">
  <a class="dev-guide-link" data-toggle="collapse" href="#collapse1">View the Response XML</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight xml %}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <u:Timestamp u:Id="_0">
            <u:Created>2019-02-07T17:03:31.176Z</u:Created>
            <u:Expires>2019-02-07T17:08:31.176Z</u:Expires>
         </u:Timestamp>
      </o:Security>
   </s:Header>
   <s:Body>
      <GeocodeLatLongResponse xmlns="http://tempuri.org/">
         <GeocodeLatLongResult xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:Alternate>0</a:Alternate>
            <a:CassAddress i:nil="true"/>
            <a:CensusBlockGroup>0</a:CensusBlockGroup>
            <a:CensusTract>0</a:CensusTract>
            <a:CityName>DURHAM</a:CityName>
            <a:Country>USA</a:Country>
            <a:County>DURHAM</a:County>
            <a:ErrorMessage/>
            <a:FeatureID>2403521</a:FeatureID>
            <a:FipsCode>3706319000</a:FipsCode>
            <a:FipsPlaceName>DURHAM</a:FipsPlaceName>
            <a:Incorporated>true</a:Incorporated>
            <a:InputAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
               <b:string/>
               <b:string/>
            </a:InputAddress>
            <a:Latitude>35.991130741436415</a:Latitude>
            <a:Longitude>-78.902673074501081</a:Longitude>
            <a:NetworkID>nt</a:NetworkID>
            <a:PCode>2757800</a:PCode>
            <a:PostalCode/>
            <a:PostalCodeExtension/>
            <a:PrimaryJurisdictionName>DURHAM</a:PrimaryJurisdictionName>
            <a:PrimaryJurisdictionPCode>2757800</a:PrimaryJurisdictionPCode>
            <a:Score>0.99996893240562246</a:Score>
            <a:SecondaryUnit/>
            <a:SpecialTaxDistrictName i:nil="true"/>
            <a:SpecialTaxDistrictPCode>-1</a:SpecialTaxDistrictPCode>
            <a:StandardizedAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
               <b:string></b:string>
               <b:string>DURHAM,NC null</b:string>
            </a:StandardizedAddress>
            <a:StateName>NC</a:StateName>
            <a:StreetName/>
            <a:StreetNumber/>
            <a:TaxJurisdictionName>DURHAM</a:TaxJurisdictionName>
            <a:TimeZone/>
            <a:UnderlyingFipsCode>3706319000</a:UnderlyingFipsCode>
         </GeocodeLatLongResult>
      </GeocodeLatLongResponse>
   </s:Body>
</s:Envelope>
{% endhighlight %}
    </div>
  </div>
</div>

<h3>See Also</h3>
<h4>Input</h4>
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-lat-long/">Geocode Lat Long</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/input-address/">Input Address</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/lat-long-geocoding/">Latitude/Longitude Geocoding</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/florida-certification/">Florida Certification</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">Special Tax Jurisdictions</a></li>
</ul>

<h4>Results</h4>
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-lat-long-response/">Geocode Lat Long Response</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/address-location/">Address Location</a></li>
   <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/scoring/">Scoring</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/geocode-all-matches"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/special-tax-jurisdiction">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>