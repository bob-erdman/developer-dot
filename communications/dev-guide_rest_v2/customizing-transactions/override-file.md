---
layout: page
title: Chapter 4.2.3 - Override File
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/exclusion-file/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/nexus-file/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>What is an Override file?</h3>
The Override file is used to modify tax rates for a specified jurisdiction, alter the tax logic (how or when the tax is applied) for a Transaction/Service pair, and add or remove taxes from a Transaction/Service pair.
<br/>
The Override file is made up of:
<ul class="dev-guide-list">
    <li>A version number of the Override file</li>
    <li>The override being applied, including tax type, PCode for the jurisdiction, and effective date</li>
    <li>A history of updates made in the AFC Tax Engine</li>
</ul>

<h3>Creating the Override file</h3>
The only way to create an Override file is through the AFC Rate and Logic Modifier (RLM) within the desktop AFC Manager application.  Contact your Customer Account Manager (CAM) for more details.
<br/><br/>
Override files use a *.ovr file extension.

<h4>Sample</h4>
For this example, the Override file is overriding the local (Tax Level 3) Sales Tax (Tax Type 1) in Overland Park, KS to a rate of 0.123.

<pre>
3.4
1248900,1,3,3,3,1
20180101,1
0.123,2147483647,0,0,0,0
19990401,1
0.01125,2147483647,0,0,0,0
19000101,1
0.01,2147483647,0,0,0,0
</pre>

<h3>Using the Override file</h3>
The Override file is applied to a <a class="dev-guide-link" href="#request">client profile</a>.  You must pass the associated <code>client_profile_id</code> as part of the header to use the Override file.
<br/>
Nothing special needs to be included in the transaction for the Override file to be applied.  Simply run a transaction with the applicable <code>client_profile_id</code>.  Remove any instances of the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override">Tax Override</a> object (<code>ovr</code>) that may be included in the transaction.
<br/>
For example, the local Sales Tax for Overland Park, KS is overridden to 0.123 in this transaction, assuming a client profile is in use that has been updated with an Override file overriding the local Sales Tax.

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
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/exclusion-file/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/nexus-file/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>