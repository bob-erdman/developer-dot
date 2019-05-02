---
layout: page
title: Chapter 3.4 - Special Tax Jurisdictions
product: communications
doctype: comms_geo_soap_dev_guide
chapter: customizing-geocoding-requests
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/geocode-lat-long"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/florida-certified">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">Special Tax Jurisdiction</a> information is returned along with the primary jurisdiction results if the <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a> (<code>Options</code>) bitwise value includes 16.

<h3 id="example1">Special Tax Jurisdiction Example 1 - Address</h3>
This request includes the Return Special Tax Jurisdictions <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a> (<code>Options</code>) bitwise value of 16, indicating that we want to get Special Tax Jurisdictions back.  The input for this request is an address, and we are using the GeocodeAddress <code>GeocodeAddress</code> <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/getting-started/endpoints-methods#methods">method</a>.  The same information can be passed to the <code>GeocodeAllMatches</code> <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/getting-started/endpoints-methods#methods">method</a> with the same results.

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
            <a:City>New York</a:City>
            <a:CityStateZip/>
            <a:MinimumScore>0.7</a:MinimumScore>
            <a:Offset>3</a:Offset>
            <a:Options>312</a:Options>
            <a:SecondaryUnit/>
            <a:Source/>
            <a:State>NY</a:State>
            <a:StreetAddress>1260 6th Ave</a:StreetAddress>
            <a:Zip>10020</a:Zip>
         </inputAddress>
      </GeocodeAddress>
   </s:Body>
</s:Envelope>
{% endhighlight %}

<h4>Response</h4>
Special Tax Jurisdiction information is returned:
<ul class="dev-guide-list">
   <li><code>SpecialTaxDistrictName</code> is the Special Tax Jurisdiction Name</li>
   <li><code>SpecialTaxDistrictPCode</code> contains the PCode for the Special Tax Jurisdiction</li>
   <li><code>PCode</code> returns the PCode that should be used for taxation - in this case, the Special Tax Jurisdiction PCode</li>
</ul>

The underlying primary jurisdiction is also returned:
<ul class="dev-guide-list">
   <li><code>PrimaryJurisdictionName</code> is the name of the underlying primary jurisdiction that is returned if Special Tax Jurisdictions are not turned on</li>
   <li><code>PrimaryJurisdictionPCode</code> provides the PCode for the underlying primary jurisdiction</li>
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
            <u:Created>2019-02-07T17:39:59.044Z</u:Created>
            <u:Expires>2019-02-07T17:44:59.044Z</u:Expires>
         </u:Timestamp>
      </o:Security>
   </s:Header>
   <s:Body>
      <GeocodeAddressResponse xmlns="http://tempuri.org/">
         <GeocodeAddressResult xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:Alternate>0</a:Alternate>
            <a:CassAddress i:nil="true"/>
            <a:CensusBlockGroup>1005</a:CensusBlockGroup>
            <a:CensusTract>10400</a:CensusTract>
            <a:CityName>NEW YORK CITY</a:CityName>
            <a:Country>USA</a:Country>
            <a:County>NEW YORK</a:County>
            <a:ErrorMessage/>
            <a:FeatureID>2395220</a:FeatureID>
            <a:FipsCode>9902604301</a:FipsCode>
            <a:FipsPlaceName>NYC</a:FipsPlaceName>
            <a:Incorporated>true</a:Incorporated>
            <a:InputAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
               <b:string>1260 6TH AVE</b:string>
               <b:string>NEW YORK, NY 10020</b:string>
            </a:InputAddress>
            <a:Latitude>40.759881426441147</a:Latitude>
            <a:Longitude>-73.9803850946123</a:Longitude>
            <a:NetworkID>nt</a:NetworkID>
            <a:PCode>2604301</a:PCode>
            <a:PostalCode>10020</a:PostalCode>
            <a:PostalCodeExtension/>
            <a:PrimaryJurisdictionName>NEW YORK</a:PrimaryJurisdictionName>
            <a:PrimaryJurisdictionPCode>2604100</a:PrimaryJurisdictionPCode>
            <a:Score>0.98</a:Score>
            <a:SecondaryUnit/>
            <a:SpecialTaxDistrictName>NEW YORK SOUTH MANHATTAN</a:SpecialTaxDistrictName>
            <a:SpecialTaxDistrictPCode>2604301</a:SpecialTaxDistrictPCode>
            <a:StandardizedAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
               <b:string>1260 6TH AVE</b:string>
               <b:string>NEW YORK CITY,NY 10020</b:string>
            </a:StandardizedAddress>
            <a:StateName>NY</a:StateName>
            <a:StreetName>6TH AVE</a:StreetName>
            <a:StreetNumber>1260</a:StreetNumber>
            <a:TaxJurisdictionName>NEW YORK SOUTH MANHATTAN</a:TaxJurisdictionName>
            <a:TimeZone/>
            <a:UnderlyingFipsCode>3606151000</a:UnderlyingFipsCode>
         </GeocodeAddressResult>
      </GeocodeAddressResponse>
   </s:Body>
</s:Envelope>
{% endhighlight %}
    </div>
  </div>
</div>

<h3>Special Tax Jurisdictions Example 2 - Latitude/Longitude</h3>
This request is the same request as <a class="dev-guide-link" href="#example1">Example 1</a>, but using the latitude and longitude of the location instead of an address.  The <code>GeocodeLatLong</code> <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/getting-started/endpoints-methods#methods">method</a> does not use the  <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a> (<code>Options</code>) bitwise field, but <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">Special Tax Jurisdictions</a> are returned if one exists for the location provided.

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
         <tem:latitude>40.759881426441147</tem:latitude>
         <tem:longitude>-73.9803850946123</tem:longitude>
         <tem:Source/>
      </tem:GeocodeLatLong>
   </s:Body>
</s:Envelope>
{% endhighlight %}

<h4>Response</h4>
The geocoding result contains the same Special Tax Jurisdiction, PCode, and Primary Jurisdiction information as the address input. 
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
            <u:Created>2019-02-07T17:41:00.946Z</u:Created>
            <u:Expires>2019-02-07T17:46:00.946Z</u:Expires>
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
            <a:CityName>NEW YORK CITY</a:CityName>
            <a:Country>USA</a:Country>
            <a:County>NEW YORK</a:County>
            <a:ErrorMessage/>
            <a:FeatureID>2395220</a:FeatureID>
            <a:FipsCode>9902604301</a:FipsCode>
            <a:FipsPlaceName>NYC</a:FipsPlaceName>
            <a:Incorporated>true</a:Incorporated>
            <a:InputAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
               <b:string/>
               <b:string/>
            </a:InputAddress>
            <a:Latitude>40.759881426441147</a:Latitude>
            <a:Longitude>-73.9803850946123</a:Longitude>
            <a:NetworkID>nt</a:NetworkID>
            <a:PCode>2604301</a:PCode>
            <a:PostalCode/>
            <a:PostalCodeExtension/>
            <a:PrimaryJurisdictionName>NEW YORK</a:PrimaryJurisdictionName>
            <a:PrimaryJurisdictionPCode>2604100</a:PrimaryJurisdictionPCode>
            <a:Score>0.99999370111861319</a:Score>
            <a:SecondaryUnit/>
            <a:SpecialTaxDistrictName>NEW YORK SOUTH MANHATTAN</a:SpecialTaxDistrictName>
            <a:SpecialTaxDistrictPCode>2604301</a:SpecialTaxDistrictPCode>
            <a:StandardizedAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
               <b:string></b:string>
               <b:string>NEW YORK CITY,NY null</b:string>
            </a:StandardizedAddress>
            <a:StateName>NY</a:StateName>
            <a:StreetName/>
            <a:StreetNumber/>
            <a:TaxJurisdictionName>NEW YORK SOUTH MANHATTAN</a:TaxJurisdictionName>
            <a:TimeZone/>
            <a:UnderlyingFipsCode>3606151000</a:UnderlyingFipsCode>
         </GeocodeLatLongResult>
      </GeocodeLatLongResponse>
   </s:Body>
</s:Envelope>
{% endhighlight %}
    </div>
  </div>
</div>

<h3>Special Tax Jurisdiction Example 3 - Turn Off Return of Special Tax Jurisdiction</h3>
This is the same address as <a class="dev-guide-link" href="#example1">Example 1</a>, but this time the <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a> (<code>Options</code>) bitwise value does not include 16 (Return Special Tax Jurisdictions), turning off the return of the Special Tax Jurisdiction information.  This example uses the <code>GeocodeAllMatches</code> <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/getting-started/endpoints-methods#methods">method</a>.

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
            <a:CassCertify>false</a:CassCertify>
            <a:City>New York</a:City>
            <a:CityStateZip/>
            <a:MinimumScore>0.7</a:MinimumScore>
            <a:Offset>3</a:Offset>
            <a:Options>296</a:Options>
            <a:SecondaryUnit/>
            <a:Source/>
            <a:State>NY</a:State>
            <a:StreetAddress>1260 6th Ave</a:StreetAddress>
            <a:Zip>10020</a:Zip>
         </tem:inputAddress>
         <tem:matchCount>10</tem:matchCount>
      </tem:GeocodeAllMatches>
   </s:Body>
</s:Envelope>
{% endhighlight %}

<h4>Response</h4>
The Special Tax Jurisdiction fields (<code>SpecialTaxDistrictName</code> and <code>SpecialTaxDistrictPCode</code>) are included in <code>GeocodeAllMatchesResponse</code>, but are set as:
<ul class="dev-guide-list">
   <li><code>SpecialTaxDistrictName</code> set to <code>nil</code></li>
   <li><code>SpecialTaxDistrictPCode</code> is <code>-1</code>, indicating that no Special Tax Jurisdiction has been returned</li>
</ul>

The underlying primary jurisdiction is still returned, but is now the jurisdiction that should be used:
<ul class="dev-guide-list">
   <li><code>PCode</code> returns the PCode that should be used for taxation - this matches <code>PrimaryJurisdictionPCode</code></li>
   <li><code>PrimaryJurisdictionName</code> is the name of the underlying primary jurisdiction that is returned if Special Tax Jurisdictions are not turned on</li>
   <li><code>PrimaryJurisdictionPCode</code> provides the PCode for the underlying primary jurisdiction</li>
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
            <u:Created>2019-02-07T20:02:43.569Z</u:Created>
            <u:Expires>2019-02-07T20:07:43.569Z</u:Expires>
         </u:Timestamp>
      </o:Security>
   </s:Header>
   <s:Body>
      <GeocodeAllMatchesResponse xmlns="http://tempuri.org/">
         <GeocodeAllMatchesResult xmlns:a="http://schemas.datacontract.org/2004/07/EZGeoSaaS" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:AddressLocation>
               <a:Alternate>0</a:Alternate>
               <a:CassAddress i:nil="true"/>
               <a:CensusBlockGroup>1005</a:CensusBlockGroup>
               <a:CensusTract>10400</a:CensusTract>
               <a:CityName>NEW YORK CITY</a:CityName>
               <a:Country>USA</a:Country>
               <a:County>NEW YORK</a:County>
               <a:ErrorMessage/>
               <a:FeatureID>2395220</a:FeatureID>
               <a:FipsCode>3606151000</a:FipsCode>
               <a:FipsPlaceName>NYC</a:FipsPlaceName>
               <a:Incorporated>true</a:Incorporated>
               <a:InputAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                  <b:string>1260 6TH AVE</b:string>
                  <b:string>NEW YORK, NY 10020</b:string>
               </a:InputAddress>
               <a:Latitude>40.759881426441147</a:Latitude>
               <a:Longitude>-73.9803850946123</a:Longitude>
               <a:NetworkID>nt</a:NetworkID>
               <a:PCode>2604100</a:PCode>
               <a:PostalCode>10020</a:PostalCode>
               <a:PostalCodeExtension/>
               <a:PrimaryJurisdictionName>NEW YORK</a:PrimaryJurisdictionName>
               <a:PrimaryJurisdictionPCode>2604100</a:PrimaryJurisdictionPCode>
               <a:Score>0.98</a:Score>
               <a:SecondaryUnit/>
               <a:SpecialTaxDistrictName i:nil="true"/>
               <a:SpecialTaxDistrictPCode>-1</a:SpecialTaxDistrictPCode>
               <a:StandardizedAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                  <b:string>1260 6TH AVE</b:string>
                  <b:string>NEW YORK CITY,NY 10020</b:string>
               </a:StandardizedAddress>
               <a:StateName>NY</a:StateName>
               <a:StreetName>6TH AVE</a:StreetName>
               <a:StreetNumber>1260</a:StreetNumber>
               <a:TaxJurisdictionName>NEW YORK</a:TaxJurisdictionName>
               <a:TimeZone/>
               <a:UnderlyingFipsCode>3606151000</a:UnderlyingFipsCode>
            </a:AddressLocation>
            <a:AddressLocation>
               <a:Alternate>0</a:Alternate>
               <a:CassAddress i:nil="true"/>
               <a:CensusBlockGroup>1005</a:CensusBlockGroup>
               <a:CensusTract>10400</a:CensusTract>
               <a:CityName>NEW YORK</a:CityName>
               <a:Country>USA</a:Country>
               <a:County>New York</a:County>
               <a:ErrorMessage/>
               <a:FeatureID>2395220</a:FeatureID>
               <a:FipsCode>3606151000</a:FipsCode>
               <a:FipsPlaceName>New York</a:FipsPlaceName>
               <a:Incorporated>true</a:Incorporated>
               <a:InputAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                  <b:string>1260 6TH AVE</b:string>
                  <b:string>NEW YORK, NY 10020</b:string>
               </a:InputAddress>
               <a:Latitude>40.759905548859038</a:Latitude>
               <a:Longitude>-73.980394003783886</a:Longitude>
               <a:NetworkID>ta</a:NetworkID>
               <a:PCode>2604100</a:PCode>
               <a:PostalCode>10020</a:PostalCode>
               <a:PostalCodeExtension>1797</a:PostalCodeExtension>
               <a:PrimaryJurisdictionName>NEW YORK</a:PrimaryJurisdictionName>
               <a:PrimaryJurisdictionPCode>2604100</a:PrimaryJurisdictionPCode>
               <a:Score>0.96</a:Score>
               <a:SecondaryUnit/>
               <a:SpecialTaxDistrictName i:nil="true"/>
               <a:SpecialTaxDistrictPCode>-1</a:SpecialTaxDistrictPCode>
               <a:StandardizedAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                  <b:string>1260 6th Ave</b:string>
                  <b:string>NEW YORK,NY 10020-1797</b:string>
               </a:StandardizedAddress>
               <a:StateName>NY</a:StateName>
               <a:StreetName>6th Ave</a:StreetName>
               <a:StreetNumber>1260</a:StreetNumber>
               <a:TaxJurisdictionName>NEW YORK</a:TaxJurisdictionName>
               <a:TimeZone/>
               <a:UnderlyingFipsCode>3606151000</a:UnderlyingFipsCode>
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
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-address/">Geocode Address</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-all-matches/">Geocode All Matches</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-lat-long/">Geocode Lat Long</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/input-address/">Input Address</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">Special Tax Jurisdictions</a></li>
</ul>

<h4>Results</h4>
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-address-response/">Geocode Address Response</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-all-matches-response/">Geocode All Matches Response</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-lat-long-response/">Geocode Lat Long Response</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/address-location/">Address Location</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/geocode-lat-long"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/customizing-geocoding-requests/sample-requests/florida-certified">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>