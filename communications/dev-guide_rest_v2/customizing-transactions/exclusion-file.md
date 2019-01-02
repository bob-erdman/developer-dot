---
layout: page
title: Chapter 4.2.2 - Exclusion File
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/bundle-file/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/override-file/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>What is an Exclusion file?</h3>
The Exclusion file is a comma-delimited file used by Communications REST v2 to determine what states or countries should be excluded from consideration for taxation. 
<ul class="dev-guide-list">
    <li>If a state is excluded, Federal taxes may still apply</li>
    <li>If a country is excluded, no taxes are applied</li>
</ul>

The Exclusion file is made up of a list of countries or country and state pairs.

<h3>Creating the Exclusion file</h3>
The Exclusion file can be created manually.  The file contains a list of comma-delimited abbreviated country and state pairs and Country ISOs.  The country is always listed first, followed by the state (if applicable)
<br/>
Exclusion files use a *.exc file extension.

<h4>Sample</h4>
For this example, the Exclusion file contains these exclusions:
<ul class="dev-guide-list">
    <li>State of Kansas within the United States</li>
    <li>Canada</li>
</ul>

<pre>
USA,KS
CAN
</pre>

<h3>Using the Exclusion file</h3>
The Exclusion file is applied to a <a class="dev-guide-link" href="#request">client profile</a>.  You must pass the associated <code>client_profile_id</code> as part of the header to use the Exclusion file.
<br/>
Nothing special needs to be included in the transaction for the Exclusion file to be applied.  Simply run a transaction with the applicable <code>client_profile_id</code>.  Remove any instances of the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exclusion">Exclusion</a> object (<code>excl</code>) that may be included in the transaction.
<br/>
For example, the Kansas taxes are excluded in this transaction, assuming a client profile is in use that has been updated with an Exclusion file excluding USA,KS.

{% highlight json %}
{
  "cmpn": {
    "bscl": 1,
    "svcl": 1,
    "fclt": true,
    "frch": true,
    "reg": true
  },
  "inv": [
    {
      "bill": {
        "ctry": "USA",
        "st": "KS",
        "cty": "Overland Park",
        "zip": 66212
      },
      "cust": 1,
      "date": "2018-09-24T11:00:00",
      "itms": [
        {
          "chg": 100,
          "line": 10,
          "sale": 1,
          "tran": 19,
          "serv": 6
        }
      ]
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
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/bundle-file/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/override-file/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>