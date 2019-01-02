---
layout: page
title: Chapter 4.2.1 - Bundle File
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/account-customizations/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/exclusion-file/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>What is a Bundle file?</h3>
Product offerings by Telecommunication companies include grouping of services into a special price for competitive and/or other strategic reasons. The grouping of services is called "bundling."  
<br/>
Communications REST v2 handles these bundled products through the creation of a Bundle file.  Instead of creating a transaction with multiple line items, use a Bundle file with one line item to easily apply a set group (bundle) of products.  Taxes calculated for bundled transactions are calculated for each transaction/service defined within the bundle.  Brackets and other logic is applied to the transaction as whole rather than individual line items.
<br/>
The Bundle file is made up of:
<ul class="dev-guide-list">
    <li>Assigned Bundle Transaction and Service IDs to be used in a REST v2 transaction</li>
    <li>Transaction/Service pairs</li>
    <li>Percentage of the sale amount to apply to the particular Transaction/Service pair</li>
</ul>
There are no limits to the number of Transaction/Service pairs that can be included in a Bundle file.  Multiple bundles can also be created in the same Bundle file (each with their own unique Bundle ID).  The percentages must total to 100%. 

<h3>Creating the Bundle file</h3>
The easiest way to create a Bundle file is through the AFC Bundler within the desktop AFC Manager application.  Contact your Customer Account Manager (CAM) for more details.
<br/>
The Bundle file can also be created manually.  The file contains a header row containing the Bundler version number and a is a comma-delimited row for each bundle included.  Each comma-delimited row contains:
<ul class="dev-guide-list">
    <li>Bundle Transaction ID for the bundle to be used in the REST v2 transaction</li>
    <li>Bundle Service ID for the bundle to be used in the REST v2 transaction</li>
    <li>Name of the bundle</li>
    <li>Number of Transaction/Service pairs included in the bundle</li>
    <li>For each Transaction/Service pair included in the bundle:
    <ul class="dev-guide-list">
        <li>Transaction ID</li>
        <li>Service ID</li>
        <li>Percentage to be applied to this Transaction/Service pair</li>
        <li>Transaction Type description with the Transaction ID in parenthesis</li>
        <li>Service Type description with the Transaction ID in parenthesis</li>
    </ul>
    </li>
</ul>
Bundle files use a *.bdl file extension.

<h4>Sample</h4>
For this example, the Bundle file contains 1 bundle (20000/20001) with these Transaction/Service pairs included:
<ul class="dev-guide-list">
    <li>13/6 (Cellular/Access Charge) at 50%</li>
    <li>13/11 (Cellular/Activation) at 25%</li>
    <li>9/6 (Voice Mail/Access Charge) at 25%</li>
</ul>

<pre>
Version,3.0.0
20000,20001,SampleBundle,3,13,6,50,Cellular (13),Access Charge (6),13,11,25,Cellular (13),Activation (11),9,6,25,Voice Mail (9),Access Charge (6)
</pre>

<h3>Using the Bundle file</h3>
The Bundle file is applied to a <a class="dev-guide-link" href="#request">client profile</a>.  You must pass the associated <code>client_profile_id</code> as part of the header to use the Bundle file.
<br/>
Create a transaction using the Bundle Transaction ID and Bundle Service ID (<code>tran</code> is 20000 and <code>serv</code> is 20001 for this example) and specify the sale amount (<code>).

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
      "bill": {
        "cnty": "Johnson",
        "ctry": "USA",
        "int": true,
        "geo": false,
        "city": "Overland Park",
        "st": "KS",
        "zip": "66212"
      },
      "cust": 0,
      "lfln": false,
      "date": "2018-12-01T12:00:00Z",
      "itms": [
        {
          "ref": "Line Item 001 - Bundle File",
          "chg": 100,
          "sale": 1,
          "tran": 20000,
          "serv": 20001
        }
      ],
      "invm": true,
      "dtl": false,
      "summ": true
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
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/account-customizations/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/exclusion-file/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>