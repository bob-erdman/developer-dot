---
layout: page
title: Chapter 3.1 - Geocode Address
product: communications
doctype: comms_geo_soap_dev_guide
chapter: customizing-geocoding-requests
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/geocode-all-matches">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The <code>GeocodeAddress</code> <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/getting-started/endpoints-methods#methods">method</a> accepts an address input and returns the single best match that is above the minimum score (<code>MinimumScore</code>) requested.

<h3 id="example1">GeocodeAddress Example 1 - City, State, Zip separated</h3>
This request contains the following:
<ul class="dev-guide-list">
   <li>City (<code>City</code>), state (<code>state</code>), and Zip code (<code>Zip</code>) in separate fields</li>
   <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS validation</a> is on (<code>CassCertify</code> set to <code>true</code>)</li>
   <li><code>MinimumScore</code> is <code>0.7</code> - requesting an address with a score of 0.7 or greater</li>
   <li>Offset (<code>Offset</code>) set to 3, meaning that we are requesting that the input location is 3 meters from the side of the link</li> 
   <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a> (<code>Options</code>) bitwise value set to 312, being comprised of:</li>
   <ul class="dev-guide-list">
      <li>Return Zip+4: <code>8</code></li>
      <li>Return Special Tax Jurisdictions: <code>16</code></li>
      <li>Return Census IDs: <code>32</code></li>
      <li>Return Building Zip Code: <code>256</code></li>
   </ul>
   <li>Address second line (<code>SecondaryUnit</code>) is included, but not used in the final geocoding process</li>
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

<h4>Response</h4>
The <code>GeocodeAddressResponse</code> contains detailed address information for a single matching address.  The record returned contains detailed information including:
<ul class="dev-guide-list">
  <li><code>CassAddress</code>: CASS information including Carrier Route, USPS Barcode, and standardized address</li>
  <li>Census block group and tract information</li>
  <li><code>PCode</code>, <code>FeatureID</code>, and <code>FipsCode</code></li>
  <li>Results are from NavTeq (<code>NetworkID</code> is <code>nt</code>)</li>
  <li>AFC Geo SaaS Pro Soap is 100% confident in this result (<code>Score</code> is 1)</li>
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
            <u:Created>2019-02-06T20:37:17.463Z</u:Created>
            <u:Expires>2019-02-06T20:42:17.463Z</u:Expires>
         </u:Timestamp>
      </o:Security>
   </s:Header>
   <s:Body>
      <GeocodeAddressResponse xmlns="http://tempuri.org/">
         <GeocodeAddressResult xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:Alternate>0</a:Alternate>
            <a:CassAddress>
               <a:Address xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                  <b:string>255 S KING ST STE 1800 Suite 1800</b:string>
                  <b:string>SEATTLE, WA  98104-2832</b:string>
               </a:Address>
               <a:AddressLine>255 S KING ST STE 1800 Suite 1800</a:AddressLine>
               <a:AddressQualityFlags>S3J</a:AddressQualityFlags>
               <a:CarrierRoute>C001</a:CarrierRoute>
               <a:City>SEATTLE</a:City>
               <a:CityStateZip>SEATTLE, WA  98104-2832</a:CityStateZip>
               <a:CountyCode>33</a:CountyCode>
               <a:DeliveryPointValidation>2</a:DeliveryPointValidation>
               <a:EnhancedLineOfTravel>0</a:EnhancedLineOfTravel>
               <a:Reliability>94</a:Reliability>
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
               <b:string>255 SOUTH KING ST SUITE 1800</b:string>
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
            <a:SecondaryUnit>STE 1800</a:SecondaryUnit>
            <a:SpecialTaxDistrictName i:nil="true"/>
            <a:SpecialTaxDistrictPCode>-1</a:SpecialTaxDistrictPCode>
            <a:StandardizedAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
               <b:string>255 S KING ST STE 1800</b:string>
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
    </div>
  </div>
</div>

<h3>GeocodeAddress Example 2 - City, State, Zip combined</h3>
This request contains the following:
<ul class="dev-guide-list">
   <li>City, state, and Zip code combined in <code>CityStateZip</code></li>
   <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS validation</a> is on (<code>CassCertify</code> set to <code>true</code>)</li>
   <li><code>MinimumScore</code> is <code>0.7</code> - requesting an address with a score of 0.7 or greater</li>
   <li>Offset (<code>Offset</code>) set to 3, meaning that we are requesting that the input location is 3 meters from the side of the link</li> 
   <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a> (<code>Options</code>) bitwise value set to 312, being comprised of:</li>
   <ul class="dev-guide-list">
      <li>Return Zip+4: <code>8</code></li>
      <li>Return Special Tax Jurisdictions: <code>16</code></li>
      <li>Return Census IDs: <code>32</code></li>
      <li>Return Building Zip Code: <code>256</code></li>
   </ul>
   <li>Address second line (<code>SecondaryUnit</code>) is included, but not used in the final geocoding process</li>
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
      <GeocodeAddress xmlns="http://tempuri.org/">
         <inputAddress xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:CassCertify>true</a:CassCertify>
            <a:City/>
            <a:CityStateZip>Seattle,WA 98104</a:CityStateZip>
            <a:MinimumScore>0.7</a:MinimumScore>
            <a:Offset>3</a:Offset>
            <a:Options>312</a:Options>
            <a:SecondaryUnit>Suite 1800</a:SecondaryUnit>
            <a:Source/>
            <a:State/>
            <a:StreetAddress>255 South King St</a:StreetAddress>
            <a:Zip/>
         </inputAddress>
      </GeocodeAddress>
   </s:Body>
</s:Envelope>
{% endhighlight %}

<h4>Response</h4>
The <code>GeocodeAddressResponse</code> contains the same results as <a class="dev-guide-link" href="#example1">Example 1</a>, even though the input address is formatting slightly differently. 
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
            <u:Created>2019-02-06T21:52:58.515Z</u:Created>
            <u:Expires>2019-02-06T21:57:58.515Z</u:Expires>
         </u:Timestamp>
      </o:Security>
   </s:Header>
   <s:Body>
      <GeocodeAddressResponse xmlns="http://tempuri.org/">
         <GeocodeAddressResult xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:Alternate>0</a:Alternate>
            <a:CassAddress>
               <a:Address xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                  <b:string>255 S KING ST STE 1800 Suite 1800</b:string>
                  <b:string>SEATTLE, WA  98104-2832</b:string>
               </a:Address>
               <a:AddressLine>255 S KING ST STE 1800 Suite 1800</a:AddressLine>
               <a:AddressQualityFlags>S3J</a:AddressQualityFlags>
               <a:CarrierRoute>C001</a:CarrierRoute>
               <a:City>SEATTLE</a:City>
               <a:CityStateZip>SEATTLE, WA  98104-2832</a:CityStateZip>
               <a:CountyCode>33</a:CountyCode>
               <a:DeliveryPointValidation>2</a:DeliveryPointValidation>
               <a:EnhancedLineOfTravel>0</a:EnhancedLineOfTravel>
               <a:Reliability>94</a:Reliability>
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
               <b:string>255 SOUTH KING ST SUITE 1800</b:string>
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
            <a:SecondaryUnit>STE 1800</a:SecondaryUnit>
            <a:SpecialTaxDistrictName i:nil="true"/>
            <a:SpecialTaxDistrictPCode>-1</a:SpecialTaxDistrictPCode>
            <a:StandardizedAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
               <b:string>255 S KING ST STE 1800</b:string>
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
    </div>
  </div>
</div>

<h3>GeocodeAddress Example 3 - No Options or CASS Validation</h3>
This request contains the following:
<ul class="dev-guide-list">
   <li>City, state, and Zip code combined in <code>CityStateZip</code></li>
   <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS validation</a> is off (<code>CassCertify</code> set to <code>false</code>)</li>
   <li><code>MinimumScore</code> is <code>0.7</code> - requesting an address with a score of 0.7 or greater</li>
   <li>Offset (<code>Offset</code>) set to 3, meaning that we are requesting that the input location is 3 meters from the side of the link</li> 
   <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a> (<code>Options</code>) bitwise value set to 0 - no additional special handling requested</li>
   <li>Address second line (<code>SecondaryUnit</code>) is not included</li>
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
      <GeocodeAddress xmlns="http://tempuri.org/">
         <inputAddress xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:CassCertify>false</a:CassCertify>
            <a:City/>
            <a:CityStateZip>Seattle,WA 98104</a:CityStateZip>
            <a:MinimumScore>0.7</a:MinimumScore>
            <a:Offset>3</a:Offset>
            <a:Options>0</a:Options>
            <a:SecondaryUnit/>
            <a:Source/>
            <a:State/>
            <a:StreetAddress>255 South King St</a:StreetAddress>
            <a:Zip/>
         </inputAddress>
      </GeocodeAddress>
   </s:Body>
</s:Envelope>
{% endhighlight %}

<h4>Response</h4>
The <code>GeocodeAddressResponse</code> contains detailed address information for a single matching address.  The record returned contains detailed information including:
<ul class="dev-guide-list">
  <li><code>CassAddress</code> is <code>nil</code> since <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS validation</a> is off</li>
  <li>Census block group (<code>CensusBlockGroup</code>) and tract (<code>CensusTract</code>) fields are included but set to 0</li>
  <li><code>PCode</code>, <code>FeatureID</code>, and <code>FipsCode</code></li>
  <li>Results are from NavTeq (<code>NetworkID</code> is <code>nt</code>)</li>
  <li>AFC Geo SaaS Pro Soap is 100% confident in this result (<code>Score</code> is 1)</li>
  <li>Zip+4 is still returned even though <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a> is set to 0 on the input</li>
</ul>

<div class="panel-group">
  <a class="dev-guide-link" data-toggle="collapse" href="#collapse3">View the Response XML</a>
  <div id="collapse3" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight xml %}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <u:Timestamp u:Id="_0">
            <u:Created>2019-02-06T22:10:50.939Z</u:Created>
            <u:Expires>2019-02-06T22:15:50.939Z</u:Expires>
         </u:Timestamp>
      </o:Security>
   </s:Header>
   <s:Body>
      <GeocodeAddressResponse xmlns="http://tempuri.org/">
         <GeocodeAddressResult xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:Alternate>0</a:Alternate>
            <a:CassAddress i:nil="true"/>
            <a:CensusBlockGroup>0</a:CensusBlockGroup>
            <a:CensusTract>0</a:CensusTract>
            <a:CityName>SEATTLE</a:CityName>
            <a:Country>USA</a:Country>
            <a:County>KING</a:County>
            <a:ErrorMessage/>
            <a:FeatureID>2411856</a:FeatureID>
            <a:FipsCode>5303363000</a:FipsCode>
            <a:FipsPlaceName>SEATTLE</a:FipsPlaceName>
            <a:Incorporated>true</a:Incorporated>
            <a:InputAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
               <b:string>255 S KING ST SUITE 1800</b:string>
               <b:string>SEATTLE, WA 98104</b:string>
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
            <a:SecondaryUnit>Suite 1800</a:SecondaryUnit>
            <a:SpecialTaxDistrictName i:nil="true"/>
            <a:SpecialTaxDistrictPCode>-1</a:SpecialTaxDistrictPCode>
            <a:StandardizedAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
               <b:string>255 S KING ST Suite 1800</b:string>
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
    </div>
  </div>
</div>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/geocode-all-matches">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>