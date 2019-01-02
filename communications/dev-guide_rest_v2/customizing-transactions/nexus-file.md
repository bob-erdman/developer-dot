---
layout: page
title: Chapter 4.2.4 - Nexus File
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/override-file/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/transaction-use-cases/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>What is a Nexus file?</h3>
The Nexus file is a file used by Communications REST v2 to determine which states you have nexus in for <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/sau/">Sales and Use transactions. 

The Nexus file a list of states where you have nexus.  Only US states can be used.

<h4>Note</h4>
The Nexus file <i>only</i> applies to <b>Sales and Use</b> transactions.  Telecom transactions are not affected by the Nexus file.

<h3>Creating the Nexus file</h3>
The Nexus file can be created manually.  The file contains a list of abbreviated states.  
<br/>
Nexus files use a *.nex file extension.

<h4>Sample</h4>
For this example, the Exclusion file contains these states where you have nexus:
<ul class="dev-guide-list">
    <li>Kansas</li>
    <li>Missouri</li>
    <li>California</li>
    <li>North Carolina</li>
    <li>Washington</li>
</ul>

<pre>
KS
MO
NC
WA
CA
</pre>

<h3>Using the Nexus file</h3>
The Nexus file is applied to a <a class="dev-guide-link" href="#request">client profile</a>.  You must pass the associated <code>client_profile_id</code> as part of the header to use the Nexus file.
<br/>
Nothing special needs to be included in the transaction for the Nexus file to be applied.  Simply run a transaction with the applicable <code>client_profile_id</code>.
<br/>
For example, California taxes are returned for this transaction, assuming a client profile is in use that has been updated with an Nexus file with CA included.

{% highlight json %}
{
  "cmpn": {
    "bscl": 0,
    "svcl": 0,
    "fclt": false,
    "frch": false,
    "reg": false
  },
  "inv": [
    {
      "doc": "TEST-SAU INVOICE 2018.05.01:12.02 AVA",
      "cmmt": false,
      "bill": {
        "cnty": "San Francisco",
        "ctry": "USA",
        "int": true,
        "geo": false,
        "city": "San Francisco",
        "st": "CA",
        "zip": "94102"
      },
      "cust": 0,
      "lfln": false,
      "date": "2018-05-01T12:00:00Z",
      "itms": [
        {
          "ref": "Line Item 001 - Retail Sale General Merchandise/General Rule Default Attribute-Property",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 34,
          "serv": 106,
          "prop": 0,
          "dbt": false,
          "adj": false
        },
        {
          "ref": "Line Item 002 - Consumer Use General Merchandise/General Rule Discount Attribute-Cash Discount Property",
          "chg": 100,
          "line": 0,
          "sale": 2,
          "incl": false,
          "tran": 34,
          "serv": 106,
          "prop": 13,
          "dbt": false,
          "adj": false
        },
        {
          "ref": "Line Item 003 - Vendor Use General Merchandise/General Rule Discount Attribute-Coupons Third Party Property",
          "chg": 100,
          "line": 0,
          "sale": 3,
          "incl": false,
          "tran": 34,
          "serv": 106,
          "prop": 7,
          "dbt": false,
          "adj": false
        }
      ],
      "invm": true,
      "dtl": true,
      "summ": true,
    }
  ]
}
{% endhighlight %}

<h4 id="request">Requesting a new client profile or changes to an existing client profile</h4>
Contact <a class="dev-guide-link" href="mailto:CommunicationSupport@avalara.com">CommunicationSupport@avalara.com</a>:
<ol class="dev-guide-list">
  <li>Request the customization files and configurations.  Attach existing <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/account-customizations/">customization files</a> to the email</li>
  <li>Include the environment(s)</li>
  <ul class="dev-guide-list">
    <li><a class="dev-guide-link" href="https://communicationsua.avalara.net">Sandbox</a></li>
    <li><a class="dev-guide-link" href="https://communications.avalara.net">Production</a></li>
    <li>Both environments</li>
  </ul>
  <li>Include the <code>client_profile_id</code> to be updated if changes are needed to an existing client profile</li>
  <li>The client profiles could take up to 24 hours to become available once applied</li>
</ol>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/override-file/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/transaction-use-cases/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>