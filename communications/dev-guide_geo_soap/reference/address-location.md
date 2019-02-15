---
layout: page
title:  Chapter 4.2.4 - Address Location
product: communications
doctype: comms_geo_soap_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/geocode-lat-long-response"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/cass-address/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Address Location</h3>

The <code>AddressLocation</code> object contains information about a geocoded <b>jurisdiction</b>:

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
        <td><code>Alternate</code></td>
        <td><code>[int]</code> Alternate
        <br/>
        Indicates if the matching jurisdiction is an alternate to a primary location
        <ul class="dev-guide-list">
          <li><code>0</code>: jurisdiction is not an alternate</li>
          <li><code>1</code>: jurisdiction is an alternate</li>
        </ul>
        </td>
      </tr>
      <tr>
        <td><code>CassAddress</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/cass-address/"><code>[CassAddress]</code></a> CASS Address
        <br/>
        Contains the <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/cass-address/">CASS address</a> data 
        <ul class="dev-guide-list">
          <li>Populated if the <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/"><code>CassCertify</code></a> property of <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/input-address/"><code>InputAddress</code></a> is set to <code>true</code> and <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS Validation</a> is successful</li>
          <li>NULL if <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/"><code>CassCertify</code></a> is <code>false</code> or the address fails <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS Validation</a></li>
        </ul>
        </td>
      </tr>
      <tr>
        <td><code>CensusBlockGroup</code></td>
        <td><code>[int]</code> Census Block ID
        <br/>
        Smallest area surrounded by streets, geocoded based on census data
        <br/>
        <code>CensusBlockGroup</code> returns the individual Census Block ID rather than the Census Block Group ID
        <br/><br/>
        Example: Block Group ID is 01 and Block ID is 014 - <code>CensusBlockGroup</code> contains <code>1014</code>
        </td>
      </tr>
      <tr>
        <td><code>CensusTract</code></td>
        <td><code>[int]</code> Census Tract ID
        <br/>
        Contiguous group of census block groups, geocoded based on census data
        </td>
      </tr>
      <tr>
        <td><code>CityName</code></td>
        <td><code>[string]</code> City
        <br/>
        City name of the matching address
        </td>
      </tr>
      <tr>
        <td><code>Country</code></td>
        <td><code>[string]</code> Country
        <br/>
        3-character Country ISO of the matching address
        </td>
      </tr>
      <tr>
        <td><code>County</code></td>
        <td><code>[string]</code> County
        <br/>
       County name the matching address is within
        </td>
      </tr>
      <tr>
        <td><code>ErrorMessage</code></td>
        <td><code>[string]</code> Error Message
        <br/>
        Error message text (if applicable)
        </td>
      </tr>
      <tr>
        <td><code>FeatureID</code></td>
        <td><code>[int]</code> Feature ID
        <br/>
        Unique and permanent geographic feature identifier assigned by the U.S. Board on Geographic Names (Geographic Names Information System (GNIS) Feature ID)
        </td>
      </tr>
      <tr>
        <td><code>FipsCode</code></td>
        <td><code>[long]</code> FIPS Code
        <br/>
        <ul class="dev-guide-list">
          <li>10-digit FIPS code (Federal Information Processing Standards) of the matching address</li>
          <li>Format of FIPS code: SSCCCPPPPP where SS = State Code, CCC = County Code, and PPPPP = Place Code</li>
          <li>Leading zeros in the state code are lost</li>
          <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">Special tax jurisdiction</a> are assigned by Avalara and start with a “99” in the State Code position</li>
        </ul>
        </td>
      </tr>
      <tr>
        <td><code>FipsPlaceName</code></td>
        <td><code>[string]</code> FIPS Place Name
        <br/>
        FIPS place name
        </td>
      </tr>
      <tr>
        <td><code>Incorporated</code></td>
        <td><code>[bool]</code> Incorporated
        <br/>
        Indicates if the matching jurisdiction is within the city limits of a town
        <ul class="dev-guide-list">
          <li><code>true</code>: jurisdiction is within the city limits</li>
          <li><code>false</code>: jurisdiction is outside the city limits</li>
        </ul>
        </td>
      </tr>
      <tr>
        <td><code>InputAddress</code></td>
        <td><code>[ArrayOfstring]</code> Input Address
        <br/>
        An array of two strings containing the input address:
        <ol class="dev-guide-list">
          <li>Street address and unit/apartment number</li>
          <li>City, state and zip</li>
        </ol>
        </td>
      </tr>
      <tr>
        <td><code>Latitude</code></td>
        <td><code>[double]</code> Latitude
        <br/>
        Latitude of the matching jurisdiction
        </td>
      </tr>
      <tr>
        <td><code>Longitude</code></td>
        <td><code>[double]</code> Longitude
        <br/>
        Longitude of the matching jurisdiction
        </td>
      </tr>
      <tr>
        <td><code>NetworkID</code></td>
        <td><code>[string]</code> Network ID
        <br/>
        Indicates from which street database the matching jurisdiction is returned
        <ul class="dev-guide-list">
          <li><code>nt</code>: NavTeq</li>
          <li><code>ta</code>: TeleAtlas</li>
        </ul>
        </td>
      </tr>
      <tr>
        <td><code>PCode</code></td>
        <td><code>[int]</code> PCode
        <br/>
        Avalara PCode of the matching jurisdiction, correlating to the set of taxes that are applicable to the location
        </td>
      </tr>
      <tr>
        <td><code>PostalCode</code></td>
        <td><code>[string]</code> Zip Code
        <br/>
        5-digit Zip code of the matching address
        </td>
      </tr>
      <tr>
        <td><code>PostalCodeExtension</code></td>
        <td><code>[string]</code> Zip Code Extension
        <br/>
        4-digit Zip code extension of the matching address
        </td>
      </tr>
      <tr>
        <td><code>PrimaryJurisdictionName</code></td>
        <td><code>[string]</code> Primary Jurisdiction Name
        <br/>
        Tax Jurisdiction name of the county or city of the location (underlying tax jurisdiction for <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">special tax jurisdictions</a>)
        <br/><br/>
        This field is for informational purposes only
        </td>
      </tr>
      <tr>
        <td><code>PrimaryJurisdictionPCode</code></td>
        <td><code>[int]</code> Primary Jurisdiction PCode
        <br/>
        PCode of the county or city of the location (underlying tax jurisdiction for <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">special tax jurisdictions</a>)
        <br/></br/>
        This field is for informational purposes only.  Use <code>PCode</code> field when calculating taxes in the AFC Engine
        </td>
      </tr>
      <tr>
        <td><code>Score</code></td>
        <td><code>[double]</code> <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/scoring/">Score</a>
        <br/>
        Indicates the confidence of the address match with a value between 0.0 and 1.0
        </td>
      </tr>
      <tr>
        <td><code>SecondaryUnit</code></td>
        <td><code>[string]</code> Secondary Unit
        <br/>
        Unit number of the matching address
        </td>
      </tr>
      <tr>
        <td><code>SpecialTaxDistrictName</code></td>
        <td><code>[string]</code> Special Tax Jurisdiction Name
        <br/>
        <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">Special tax jurisdiction</a> name if the address is within a special tax jurisdiction. Otherwise, blank (not a <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">special tax jurisdiction</a>)
        </td>
      </tr>
      <tr>
        <td><code>SpecialTaxDistrictPCode</code></td>
        <td><code>[int]</code> Special Tax Jurisdiction PCode
        <br/>
        Avalara PCode of the <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">special tax jurisdiction</a> if the address is within a special tax jurisdiction. Otherwise, returns -1 (not a <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">special tax jurisdiction</a>)
        </td>
      </tr>
      <tr>
        <td><code>StandardizedAddress</code></td>
        <td><code>[ArrayOfstring]</code> Standardized Address
        <br/>
        Address matched by AFC Geo SaaS Pro Soap in an array of two strings:
        <ol class="dev-guide-list">
          <li>Street address and unit/apartment number</li>
          <li>City, state and zip</li>
        </ol>
        </td>
      </tr>
      <tr>
        <td><code>StateName</code></td>
        <td><code>[string]</code> State
        <br/>
        2-character state abbreviation of the matching address
        </td>
      </tr>
      <tr>
        <td><code>StreetName</code></td>
        <td><code>[string]</code> Street Name
        <br/>
        Street name of the matching address
        </td>
      </tr>
      <tr>
        <td><code>StreetNumber</code></td>
        <td><code>[string]</code> Street Number
        <br/>
        Street number of the matching address
        </td>
      </tr>
      <tr>
        <td><code>TaxJurisdictionName</code></td>
        <td><code>[string]</code> Tax Jurisdiction Name
        <br/>
        Taxing jurisdiction name identified by the PCode (<code>PCode</code>)
        </td>
      </tr>
      <tr>
        <td><code>TimeZone</code></td>
        <td><code>[string]</code> Time Zone
        <br/>
        Field is blank
        </td>
      </tr>
      <tr>
        <td><code>UnderlyingFipsCode</code></td>
        <td><code>[long]</code> Underlying FIPS Code
        <br/>
        Federal FIPS code of the location (underlying tax jurisdiction FIPS code for <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">special tax jurisdictions</a>)
        <br/><br/>
        This field is for informational purposes only.  Use <code>FIPSCode</code> field when calculating taxes in the AFC Engine
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

<h3>Example</h3>

{% highlight xml %}
<Alternate>0</Alternate>
<CassAddress>
  // CASS Address
</CassAddress>
<CensusBlockGroup>1001</CensusBlockGroup>
<CensusTract>2300</CensusTract>
<CityName>DURHAM</CityName>
<Country>USA</Country>
<County>DURHAM</County>
<ErrorMessage/>
<FeatureID>2403521</FeatureID>
<FipsCode>3706319000</FipsCode>
<FipsPlaceName>DURHAM</FipsPlaceName>
<Incorporated>true</Incorporated>
<InputAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
  <string>512 S MANGUM STREET</string>
  <string>Durham,NC 27701</string>
</InputAddress>
<Latitude>35.991130741436415</Latitude>
<Longitude>-78.902673074501081</Longitude>
<NetworkID>nt</NetworkID>
<PCode>2757800</PCode>
<PostalCode>27701</PostalCode>
<PostalCodeExtension>3973</PostalCodeExtension>
<PrimaryJurisdictionName>DURHAM</PrimaryJurisdictionName>
<PrimaryJurisdictionPCode>2757800</PrimaryJurisdictionPCode>
<Score>1</Score>
<SecondaryUnit/>
<SpecialTaxDistrictName i:nil="true"/>
<SpecialTaxDistrictPCode>-1</SpecialTaxDistrictPCode>
<StandardizedAddress xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
  <string>512 S MANGUM ST</string>
  <string>DURHAM,NC 27701-3973</string>
</StandardizedAddress>
<StateName>NC</StateName>
<StreetName>S MANGUM ST</StreetName>
<StreetNumber>512</StreetNumber>
<TaxJurisdictionName>DURHAM</TaxJurisdictionName>
<TimeZone/>
<UnderlyingFipsCode>3706319000</UnderlyingFipsCode>
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/geocode-lat-long-response"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/cass-address/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>