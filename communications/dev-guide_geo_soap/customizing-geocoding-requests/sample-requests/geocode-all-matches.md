---
layout: page
title: Chapter 3.2 - Geocode All Matches
product: communications
doctype: comms_geo_soap_dev_guide
chapter: customizing-geocoding-requests
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/geocode-address"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/geocode-lat-long">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The <code>GeocodeAllMatches</code> <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/getting-started/endpoints-methods#methods">method</a> accepts an address input and returns all matches above the minimum score (<code>MinimumScore</code>) requested, up to the requested match count (<code>matchCount</code>).

<h3 id="example1">GeocodeAllMatches Example 1</h3>
This request contains the following:
<ul class="dev-guide-list">
   <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS validation</a> is on (<code>CassCertify</code> set to <code>true</code>)</li>
   <li><code>MinimumScore</code> is <code>0.7</code> - requesting addresses with a score of 0.7 or greater</li>
   <li>Offset (<code>Offset</code>) set to 3, meaning that we are requesting that the input location is 3 meters from the side of the link</li> 
   <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a> (<code>Options</code>) bitwise value set to 312, being comprised of:</li>
   <ul class="dev-guide-list">
      <li>Return Zip+4: <code>8</code></li>
      <li>Return Special Tax Jurisdictions: <code>16</code></li>
      <li>Return Census IDs: <code>32</code></li>
      <li>Return Building Zip Code: <code>256</code></li>
   </ul>
   <li>Match count (<code>matchCount</code>) is 10 - results are limited to 10 addresses returned</li>
</ul>

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
      <tem:GeocodeAllMatches>
         <tem:inputAddress xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:CassCertify>true</a:CassCertify>
            <a:City/>
            <a:CityStateZip>Denver,CO 80111</a:CityStateZip>
            <a:MinimumScore>0.7</a:MinimumScore>
            <a:Offset>3</a:Offset>
            <a:Options>312</a:Options>
            <a:SecondaryUnit/>
            <a:Source/>
            <a:State/>
            <a:StreetAddress>6465 Greenwood Plaza Blvd</a:StreetAddress>
            <a:Zip/>
         </tem:inputAddress>
         <tem:matchCount>10</tem:matchCount>
      </tem:GeocodeAllMatches>
   </s:Body>
</s:Envelope>
{% endhighlight %}

<h4>Response</h4>
The <code>GeocodeAllMatchesResponse</code> contains detailed address information for 2 matching addresses.  The records returned contain detailed information including:
<ul class="dev-guide-list">
   <li><code>CassAddress</code>: CASS information including Carrier Route, USPS Barcode, and standardized address</li>
   <li>Census block and tract information</li>
   <li><code>PCode</code>, <code>FeatureID</code>, and <code>FipsCode</code></li>
   <li>Results are from different sources</li> 
   <ul class="dev-guide-list">
      <li>First address is from TeleAtlas (<code>NetworkID</code> is <code>ta</code>)</li>
      <li>Second address is from NavTeq (<code>NetworkID</code> is <code>nt</code>)</li>
   </ul>
   <li>AFC Geo SaaS Pro Soap score is different on the records:</li>
      <li>First address has a score (<code>Score</code>) of .97 (97%)</li>
      <li>Second address has a score (<code>Score</code>) rounded to .76</li>
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
            <u:Created>2019-02-07T15:52:45.246Z</u:Created>
            <u:Expires>2019-02-07T15:57:45.246Z</u:Expires>
         </u:Timestamp>
      </o:Security>
   </s:Header>
   <s:Body>
      <GeocodeAllMatchesResponse xmlns="http://tempuri.org/">
         <GeocodeAllMatchesResult xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:AddressLocation>
               <a:Alternate>0</a:Alternate>
               <a:CassAddress>
                  <a:Address xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                     <b:string>6465 GREENWOOD PLAZA BLVD</b:string>
                     <b:string>GREENWOOD VILLAGE, CO  80111-4905</b:string>
                  </a:Address>
                  <a:AddressLine>6465 GREENWOOD PLAZA BLVD</a:AddressLine>
                  <a:AddressQualityFlags>H3-nostat-+D</a:AddressQualityFlags>
                  <a:CarrierRoute>C023</a:CarrierRoute>
                  <a:City>GREENWOOD VILLAGE</a:City>
                  <a:CityStateZip>GREENWOOD VILLAGE, CO  80111-4905</a:CityStateZip>
                  <a:CountyCode>5</a:CountyCode>
                  <a:DeliveryPointValidation>33</a:DeliveryPointValidation>
                  <a:EnhancedLineOfTravel>0</a:EnhancedLineOfTravel>
                  <a:Reliability>103</a:Reliability>
                  <a:State>CO</a:State>
                  <a:USPSBarCode>/801114905993/</a:USPSBarCode>
                  <a:Zip>80111</a:Zip>
                  <a:Zip4>4905</a:Zip4>
               </a:CassAddress>
               <a:CensusBlockGroup>2022</a:CensusBlockGroup>
               <a:CensusTract>6712</a:CensusTract>
               <a:CityName>GREENWOOD VILLAGE</a:CityName>
               <a:Country>USA</a:Country>
               <a:County>Arapahoe</a:County>
               <a:ErrorMessage/>
               <a:FeatureID>2410661</a:FeatureID>
               <a:FipsCode>9900432152</a:FipsCode>
               <a:FipsPlaceName>Greenwood Village</a:FipsPlaceName>
               <a:Incorporated>true</a:Incorporated>
               <a:InputAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                  <b:string>6465 GREENWOOD PLAZA BLVD</b:string>
                  <b:string>Denver,CO 80111</b:string>
               </a:InputAddress>
               <a:Latitude>39.599107918885792</a:Latitude>
               <a:Longitude>-104.894954777198</a:Longitude>
               <a:NetworkID>ta</a:NetworkID>
               <a:PCode>432152</a:PCode>
               <a:PostalCode>80111</a:PostalCode>
               <a:PostalCodeExtension>4905</a:PostalCodeExtension>
               <a:PrimaryJurisdictionName>GREENWOOD VILLAGE</a:PrimaryJurisdictionName>
               <a:PrimaryJurisdictionPCode>431200</a:PrimaryJurisdictionPCode>
               <a:Score>0.97</a:Score>
               <a:SecondaryUnit/>
               <a:SpecialTaxDistrictName>ARAPAHOE COUNTY RTD</a:SpecialTaxDistrictName>
               <a:SpecialTaxDistrictPCode>432152</a:SpecialTaxDistrictPCode>
               <a:StandardizedAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                  <b:string>6465 Greenwood Plaza Blvd</b:string>
                  <b:string>GREENWOOD VILLAGE,CO 80111-4905</b:string>
               </a:StandardizedAddress>
               <a:StateName>CO</a:StateName>
               <a:StreetName>Greenwood Plaza Blvd</a:StreetName>
               <a:StreetNumber>6465</a:StreetNumber>
               <a:TaxJurisdictionName>ARAPAHOE COUNTY RTD</a:TaxJurisdictionName>
               <a:TimeZone/>
               <a:UnderlyingFipsCode>800533035</a:UnderlyingFipsCode>
            </a:AddressLocation>
            <a:AddressLocation>
               <a:Alternate>0</a:Alternate>
               <a:CassAddress>
                  <a:Address xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                     <b:string>6465 GREENWOOD PLAZA BLVD</b:string>
                     <b:string>GREENWOOD VILLAGE, CO  80111-4905</b:string>
                  </a:Address>
                  <a:AddressLine>6465 GREENWOOD PLAZA BLVD</a:AddressLine>
                  <a:AddressQualityFlags>H3-nostat-+DR</a:AddressQualityFlags>
                  <a:CarrierRoute>C023</a:CarrierRoute>
                  <a:City>GREENWOOD VILLAGE</a:City>
                  <a:CityStateZip>GREENWOOD VILLAGE, CO  80111-4905</a:CityStateZip>
                  <a:CountyCode>5</a:CountyCode>
                  <a:DeliveryPointValidation>33</a:DeliveryPointValidation>
                  <a:EnhancedLineOfTravel>0</a:EnhancedLineOfTravel>
                  <a:Reliability>97</a:Reliability>
                  <a:State>CO</a:State>
                  <a:USPSBarCode>/801114905993/</a:USPSBarCode>
                  <a:Zip>80111</a:Zip>
                  <a:Zip4>4905</a:Zip4>
               </a:CassAddress>
               <a:CensusBlockGroup>2022</a:CensusBlockGroup>
               <a:CensusTract>6712</a:CensusTract>
               <a:CityName>CENTENNIAL</a:CityName>
               <a:Country>USA</a:Country>
               <a:County>ARAPAHOE</a:County>
               <a:ErrorMessage/>
               <a:FeatureID>2409422</a:FeatureID>
               <a:FipsCode>9900432152</a:FipsCode>
               <a:FipsPlaceName>CENTENNIAL</a:FipsPlaceName>
               <a:Incorporated>true</a:Incorporated>
               <a:InputAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                  <b:string>6465 GREENWOOD PLAZA BLVD</b:string>
                  <b:string>Denver,CO 80111</b:string>
               </a:InputAddress>
               <a:Latitude>39.599219108437929</a:Latitude>
               <a:Longitude>-104.89498041358691</a:Longitude>
               <a:NetworkID>nt</a:NetworkID>
               <a:PCode>432152</a:PCode>
               <a:PostalCode>80111</a:PostalCode>
               <a:PostalCodeExtension>4905</a:PostalCodeExtension>
               <a:PrimaryJurisdictionName>CENTENNIAL</a:PrimaryJurisdictionName>
               <a:PrimaryJurisdictionPCode>432150</a:PrimaryJurisdictionPCode>
               <a:Score>0.75829380750656128</a:Score>
               <a:SecondaryUnit/>
               <a:SpecialTaxDistrictName>ARAPAHOE COUNTY RTD</a:SpecialTaxDistrictName>
               <a:SpecialTaxDistrictPCode>432152</a:SpecialTaxDistrictPCode>
               <a:StandardizedAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                  <b:string>6465 GREENWOOD PLAZA BLVD</b:string>
                  <b:string>CENTENNIAL,CO 80111-4905</b:string>
               </a:StandardizedAddress>
               <a:StateName>CO</a:StateName>
               <a:StreetName>GREENWOOD PLAZA BLVD</a:StreetName>
               <a:StreetNumber>6465</a:StreetNumber>
               <a:TaxJurisdictionName>ARAPAHOE COUNTY RTD</a:TaxJurisdictionName>
               <a:TimeZone/>
               <a:UnderlyingFipsCode>800512815</a:UnderlyingFipsCode>
            </a:AddressLocation>
         </GeocodeAllMatchesResult>
      </GeocodeAllMatchesResponse>
   </s:Body>
</s:Envelope>
{% endhighlight %}
    </div>
  </div>
</div>

<h3>GeocodeAllMatches Example 2 - Minimum Score</h3>
Using the same input address as <a class="dev-guide-link" href="#example1">Example 1</a>, let's change the minimum score (<code>MinimumScore</code>) to <code>0.8</code> to remove the second address result.

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
      <tem:GeocodeAllMatches>
         <tem:inputAddress xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:CassCertify>true</a:CassCertify>
            <a:City/>
            <a:CityStateZip>Denver,CO 80111</a:CityStateZip>
            <a:MinimumScore>0.8</a:MinimumScore>
            <a:Offset>3</a:Offset>
            <a:Options>312</a:Options>
            <a:SecondaryUnit/>
            <a:Source/>
            <a:State/>
            <a:StreetAddress>6465 Greenwood Plaza Blvd</a:StreetAddress>
            <a:Zip/>
         </tem:inputAddress>
         <tem:matchCount>10</tem:matchCount>
      </tem:GeocodeAllMatches>
   </s:Body>
</s:Envelope>
{% endhighlight %}

<h4>Response</h4>
The <code>GeocodeAllMatchesResponse</code> contains the same first address results as <a class="dev-guide-link" href="#example1">Example 1</a>, but the second address has been removed because of the second address score (<code>Score</code>) of 0.76 is below the requested minimum score (<code>MinimumScore</code>) of 0.8.
<br/>
<div class="panel-group">
  <a class="dev-guide-link" data-toggle="collapse" href="#collapse2">View the Response XML</a>
  <div id="collapse2" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight xml %}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <u:Timestamp u:Id="_0">
            <u:Created>2019-02-07T16:07:22.348Z</u:Created>
            <u:Expires>2019-02-07T16:12:22.348Z</u:Expires>
         </u:Timestamp>
      </o:Security>
   </s:Header>
   <s:Body>
      <GeocodeAllMatchesResponse xmlns="http://tempuri.org/">
         <GeocodeAllMatchesResult xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:AddressLocation>
               <a:Alternate>0</a:Alternate>
               <a:CassAddress>
                  <a:Address xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                     <b:string>6465 GREENWOOD PLAZA BLVD</b:string>
                     <b:string>GREENWOOD VILLAGE, CO  80111-4905</b:string>
                  </a:Address>
                  <a:AddressLine>6465 GREENWOOD PLAZA BLVD</a:AddressLine>
                  <a:AddressQualityFlags>H3-nostat-+DCR</a:AddressQualityFlags>
                  <a:CarrierRoute>C023</a:CarrierRoute>
                  <a:City>GREENWOOD VILLAGE</a:City>
                  <a:CityStateZip>GREENWOOD VILLAGE, CO  80111-4905</a:CityStateZip>
                  <a:CountyCode>5</a:CountyCode>
                  <a:DeliveryPointValidation>33</a:DeliveryPointValidation>
                  <a:EnhancedLineOfTravel>0</a:EnhancedLineOfTravel>
                  <a:Reliability>92</a:Reliability>
                  <a:State>CO</a:State>
                  <a:USPSBarCode>/801114905993/</a:USPSBarCode>
                  <a:Zip>80111</a:Zip>
                  <a:Zip4>4905</a:Zip4>
               </a:CassAddress>
               <a:CensusBlockGroup>2022</a:CensusBlockGroup>
               <a:CensusTract>6712</a:CensusTract>
               <a:CityName>GREENWOOD VILLAGE</a:CityName>
               <a:Country>USA</a:Country>
               <a:County>Arapahoe</a:County>
               <a:ErrorMessage/>
               <a:FeatureID>2410661</a:FeatureID>
               <a:FipsCode>9900432152</a:FipsCode>
               <a:FipsPlaceName>Greenwood Village</a:FipsPlaceName>
               <a:Incorporated>true</a:Incorporated>
               <a:InputAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                  <b:string>6465 GREENWOOD PLAZA BLVD</b:string>
                  <b:string>Denver,CO 80111</b:string>
               </a:InputAddress>
               <a:Latitude>39.599107918885792</a:Latitude>
               <a:Longitude>-104.894954777198</a:Longitude>
               <a:NetworkID>ta</a:NetworkID>
               <a:PCode>432152</a:PCode>
               <a:PostalCode>80111</a:PostalCode>
               <a:PostalCodeExtension>4905</a:PostalCodeExtension>
               <a:PrimaryJurisdictionName>GREENWOOD VILLAGE</a:PrimaryJurisdictionName>
               <a:PrimaryJurisdictionPCode>431200</a:PrimaryJurisdictionPCode>
               <a:Score>0.97</a:Score>
               <a:SecondaryUnit/>
               <a:SpecialTaxDistrictName>ARAPAHOE COUNTY RTD</a:SpecialTaxDistrictName>
               <a:SpecialTaxDistrictPCode>432152</a:SpecialTaxDistrictPCode>
               <a:StandardizedAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                  <b:string>6465 Greenwood Plaza Blvd</b:string>
                  <b:string>GREENWOOD VILLAGE,CO 80111-4905</b:string>
               </a:StandardizedAddress>
               <a:StateName>CO</a:StateName>
               <a:StreetName>Greenwood Plaza Blvd</a:StreetName>
               <a:StreetNumber>6465</a:StreetNumber>
               <a:TaxJurisdictionName>ARAPAHOE COUNTY RTD</a:TaxJurisdictionName>
               <a:TimeZone/>
               <a:UnderlyingFipsCode>800533035</a:UnderlyingFipsCode>
            </a:AddressLocation>
         </GeocodeAllMatchesResult>
      </GeocodeAllMatchesResponse>
   </s:Body>
</s:Envelope>
{% endhighlight %}
    </div>
  </div>
</div>

<h3>See Also</h3>
<h4>Input</h4>
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-all-matches/">Geocode All Matches</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/input-address/">Input Address</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/address-geocoding/">Address Geocoding</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS Validation</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/florida-certification/">Florida Certification</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">Special Tax Jurisdictions</a></li>
</ul>

<h4>Results</h4>
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-all-matches-response/">Geocode All Matches Response</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/address-location/">Address Location</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/cass-address/">Cass Address</a></li>
   <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/scoring/">Scoring</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/geocode-address"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/geocode-lat-long">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>