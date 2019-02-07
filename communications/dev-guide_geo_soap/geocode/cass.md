---
layout: page
title: Chapter 2.1.2 - CASS Validation
product: communications
doctype: comms_geo_soap_dev_guide
chapter: geocode
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode/options"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode/florida-certification/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

AFC Geo SaaS Pro Soap can return a Coding Accuracy Support System (CASS) certified address. CASS certification is the process of normalizing addresses to USPS Publication 28 standards and validating the address against current USPS AMS-II data.  All address elements are verified as well as adding ZIP code, ZIP+4, carrier route, delivery point and barcode detail.  You may be eligible for discounted postal rates if using CASS certified addresses. 

<h4>Note</h4>
All <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/florida-certification/">Florida addresses</a> are automatically CASS validated no matter the value of <code>CassCertify</code>.

CASS Validation uses the AES MailStar CASS Certified address validation application.  Set <code>CassCertify</code> to turn the validation on or off:
<ul class="dev-guide-list">
   <li><code>true</code>: Runs the validation on the input address and populates the <code>CassAddress</code> property of the <code>GeocodeAddressResult</code> instances returned if the validation is successful</li>
   <li><code>false</code>: Validation is bypassed, unless the address is in Florida - CASS validation is always performed on <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/florida-certification/">Florida addresses</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode/options"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode/florida-certification/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>