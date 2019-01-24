---
layout: page
title: Chapter 4.4.3 - all_adr Jurisdiction Determination
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/geocode-jurisdiction-determination/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Avalara Communications provides the all_adr.txt file to help you identify the proper PCode for the taxing jurisdiction.
<ul class="dev-guide-list">
  <li>Updated monthly with the latest jurisdictions, PCodes, and Postal Code ranges</li>
  <li>Download available from the <a class="dev-guide-link" href="https://communications.avalara.net/ClientAdmin/ClientDownload">Customer Portal Downloads page</a></li>
  <li>Load all_adr.txt into a local database to easily search for the taxing jurisdiction and related PCode</li>
</ul>

<h3>all_adr.txt Format</h3>
The all_adr.txt file is a comma-delimited ASCII file with the following columns:
<ul class="dev-guide-list">
  <li>PCode</li>
  <li>Primary flag</li>
  <ul class="dev-guide-list">
    <li><code>0</code>: Alternate jurisdiction</li>
    <li><code>1</code>: Primary jurisdiction</li>
  </ul>
  <li>Country</li>
  <li>State</li>
  <li>County</li>
  <li>City or local jurisdiction (such as a Special Tax Jurisdiction)</li>
  <li>Postal Code range start</li>
  <li>Postal Code range end</li>
</ul>

<h4>all_adr.txt Sample<h4>
<pre>
3346800,0,USA,PA,LANCASTER,BART,17503,17503
3346900,0,USA,PA,LANCASTER,BAUSMAN,17504,17504
3347000,0,USA,PA,LANCASTER,BIRD IN HAND,17505,17505
3347100,0,USA,PA,LANCASTER,BOWMANSVILLE,17507,17507
3347200,0,USA,PA,LANCASTER,CHRISTIANA,17509,17509
3347300,0,USA,PA,LANCASTER,CHURCHTOWN,17555,17555
3347400,0,USA,PA,LANCASTER,CONESTOGA,17516,17516
3347500,0,USA,PA,LANCASTER,DRUMORE,17518,17518
3347600,0,USA,PA,LANCASTER,EAST EARL,17519,17519
3347700,0,USA,PA,LANCASTER,ELM,17521,17521
3347800,0,USA,PA,LANCASTER,GAP,17527,17527
</pre>

<h3>Using all_adr.txt</h3>
Search the all_adr.txt file for the taxing jurisdiction with as much detail as possible.  For example, search all_adr for some of these strings to find a PCode:
<ul class="dev-guide-list">
  <li>USA,NC,DURHAM,DURHAM</li>
  <li>,10003</li>
  <li>,Los Angeles,</li>
</ul>

Use the PCode associated with the taxing jurisdiction once it is located.

If searching the comma-delimited file instead of a database table, it helps to include the commas to avoid finding a PCode instead of a Postal Code, for example.  When searching just for a Postal Code, consider that the Postal Code may be contained within a range and may not be listed separately.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/geocode-jurisdiction-determination/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>