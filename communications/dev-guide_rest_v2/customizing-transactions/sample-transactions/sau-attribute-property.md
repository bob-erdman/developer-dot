---
layout: page
title: Chapter 4.3.8.1 - Sales and Use Attributes and Properties
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/sau/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/private-line/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

These attribute and property combinations are available for use with <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/sau/">Sales and Use (SAU)</a> Transaction/Service Pairs.

Populate Attribute Property (<code>prop</code>) with the ID to use the attribute and property combination.

<h3>Attribute Property List</h3>
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href ="#default">Default</a></li>
  <li><a class="dev-guide-link" href ="#deposits">Deposits</a></li>
  <li><a class="dev-guide-link" href ="#discounts">Discounts</a></li>
  <li><a class="dev-guide-link" href ="#finance-charge">Finance-Charge</a></li>
  <li><a class="dev-guide-link" href ="#installation">Installation</a></li>
  <li><a class="dev-guide-link" href ="#shipping-handling">Shipping and Handling</a></li>
  <li><a class="dev-guide-link" href ="#trade-ins">Trade-Ins</a></li>
  <li><a class="dev-guide-link" href ="#software-maintenance-agreement">Software Maintenance Agreement</a></li>
  <li><a class="dev-guide-link" href ="#service-contract">Service Contract</a></li>
  <li><a class="dev-guide-link" href ="#standard-maintenance-agreement">Standard Maintenance Agreement</a></li>
  <li><a class="dev-guide-link" href ="#factory-warranty">Factory Warranty</a></li>
  <li><a class="dev-guide-link" href ="#extended-warranty">Extended Warranty</a></li>
</ul>

<h4 id="default">Default</h4>
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Attribute</th>
        <th>Properties</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>0</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>Default attribute and property</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

<h4 id="deposits">Deposits</h4>
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Attribute</th>
        <th>Properties</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>        
      <tr>
        <td><code>4</code></td>
        <td>Deposits</td>
        <td>Charged</td>
        <td><i>Deposits Charged</i> are amounts charged to the customer that will be refunded upon the safe return of the product or property being rented or sold</td>
      </tr>
      <tr>
        <td><code>5</code></td>
        <td>Deposits</td>
        <td>Refunded</td>
        <td><i>Deposits Refunded</i> are amounts refunded upon the safe return of the product or property being rented or sold</td>
      </tr>
    </tbody>
  </table>
<div>
<br/>

<h4 id="discounts">Discounts</h4>
Discounts are reductions to the purchase price of an item.
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Attribute</th>
        <th>Properties</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody> 
      <tr>
        <td><code>7</code></td>
        <td>Discounts</td>
        <td>Coupons Third Party</td>
        <td><i>Discounts</i> – Reductions to the purchase price of an item
        <br/><br/>
        <i>Third Party Coupons</i> - Those issued by a party other than the vendor. As part of this issuance, the third party will reimburse the vendor for any discount granted to a user of the coupon</td>
      </tr>
      <tr>
        <td><code>8</code></td>
        <td>Discounts</td>
        <td>Coupons Vendor</td>
        <td><i>Discounts</i> – Reductions to the purchase price of an item
        <br/><br/>
        <i>Vendor Coupons</i> – Coupons issued by the vendor. As part of this issuance, the vendor does not get reimbursed for any discount granted to a user of the coupon</td>
      </tr>
      <tr>
        <td><code>9</code></td>
        <td>Discounts</td>
        <td>Discount Card</td>
        <td><i>Discounts</i> – Reductions to the purchase price of an item
        <br/><br/>
        <i>Discount Cards</i> - Cards given to the customer by an issuing retailer. Using this card entitles the user to get discounts only open to card holders. An example of this is a grocery store card where certain food items are discounted to card holders</td>
      </tr>
      <tr>
        <td><code>10</code></td>
        <td>Discounts</td>
        <td>Manufacturing Rebate</td>
        <td><i>Discounts</i> – Reductions to the purchase price of an item
        <br/><br/>
        <i>Manufacturing Rebate</i> - A rebate/reduction of price where a retailer or seller is reimbursed for the value of the amount being rebated</td>
      </tr>
      <tr>
        <td><code>12</code></td>
        <td>Discounts</td>
        <td>Retailer Rebate</td>
        <td><i>Discounts</i> – Reductions to the purchase price of an item
        <br/><br/>
        <i>Retailer Rebate</i> - A rebate/reduction of price where a there is no party being reimbursed for the value of the amount being rebated</td>
      </tr>
      <tr>
        <td><code>13</code></td>
        <td>Discounts</td>
        <td>Cash Discount</td>
        <td><i>Discounts</i> – Reductions to the purchase price of an item
        <br/><br/>
        <i>Cash Discount</i> - A non-reimbursable discount offered to reduce the price of the taxable item or service being sold</td>
      </tr>
      <tr>
        <td><code>14</code></td>
        <td>Discounts</td>
        <td>Early Payment Discount</td>
        <td><i>Discounts</i> – Reductions to the purchase price of an item
        <br/><br/>
        <i>Early Payment Discount</i> - A non-reimbursable discount granted to individuals who pay before a preset date</td>
      </tr>
      <tr>
        <td><code>15</code></td>
        <td>Discounts</td>
        <td>Quantity Discount</td>
        <td><i>Discounts</i> – Reductions to the purchase price of an item
        <br/><br/>
        <i>Quantity Discount</i> - A non-reimbursable discount granted to parties who purchase above a certain amount of items or services</td>
      </tr>
      <tr>
        <td><code>16</code></td>
        <td>Discounts</td>
        <td>Term Discount</td>
        <td><i>Discounts</i> – Reductions to the purchase price of an item
        <br/><br/>
        <i>Term Discount</i> - A non-reimbursable discount granted to parties who meet the terms and conditions of a sales contract between the vendor and the purchaser</td>
      </tr>
      <tr>
        <td><code>17</code></td>
        <td>Discounts</td>
        <td>Trade Discount</td>
        <td><i>Discounts</i> – Reductions to the purchase price of an item
        <br/><br/>
        <i>Trade Discount</i> - A non-reimbursable discount granted to those parties in certain industries or trades</td>
      </tr>
      <tr>
        <td><code>18</code></td>
        <td>Discounts</td>
        <td>Coupon Book Redemption</td>
        <td><i>Discounts</i> – Reductions to the purchase price of an item
        <br/><br/>
        <i>Coupon Book Redemption</i> – A non-reimbursable discount granted to those parties who use a coupon from a coupon book or redeem a gift certificate. The book or the certificate was purchased from either a retailer or third party</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

<h4 id="finance-charge">Finance-Charge</h4>
Finance-Charge are fees that are charged to the purchaser based on the extension of credit ona transaction.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Attribute</th>
        <th>Properties</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody> 
      <tr>
        <td><code>21</code></td>
        <td>Finance-Charge</td>
        <td>Original Interest</td>
        <td><i>Finance Charge</i> - Fees that are charged to the purchaser based on the extension of credit on a transaction
        <br/><br/>
        <i>Original Interest</i> - A one-time or recurring fee charged to the purchaser based on the extension of credit on a transaction</td>
      </tr>
      <tr>
        <td><code>22</code></td>
        <td>Finance-Charge</td>
        <td>Third Party Interest</td>
        <td><i>Finance Charge</i> - Fees that are charged to the purchaser based on the extension of credit on a transaction
        <br/><br/>
        <i>Third Party Interest</i> - Financing for a transaction is obtained from a party other than the seller or purchaser</td>
      </tr>
      <tr>
        <td><code>23</code></td>
        <td>Finance-Charge</td>
        <td>Re-billed Interest</td>
        <td><i>Finance Charge</i> - Fees that are charged to the purchaser based on the extension of credit on a transaction
        <br/><br/>
        <i>Re-billed Interest</i> - A one-time or recurring fee charged to the purchaser after the sales transaction has occurred, usually based on a late payment or failure to pay</td>
      </tr>
    </tbody>
  </table>
</div>  
<br/>    

<h4 id="installation">Installation</h4>
Installation is a service that attaches an item to other property.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Attribute</th>
        <th>Properties</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody> 
      <tr>
        <td><code>37</code></td>
        <td>Installation</td>
        <td>General SSTP Rule</td>
        <td><i>Installation</i> - A service that attaches an item to other property
        <br/><br/>
        <i>General SSTP Rule</i> - General installation not covered by any other listed rule. In an SSTP state, the SSTP Matrix definition for that state will be used</td>
      </tr>
      <tr>
        <td><code>38</code></td>
        <td>Installation</td>
        <td>Expenses from Installation</td>
        <td><i>Installation</i> - A service that attaches an item to other property
        <br/><br/>
        <i>Expenses from Installation</i> - Miscellaneous expenses incurred for an installation such as inbound freight charge or supplies consumed in the installation</td>
      </tr>
      <tr>
        <td><code>39</code></td>
        <td>Installation</td>
        <td>Public Utility Service</td>
        <td><i>Installation</i> - A service that attaches an item to other property
        <br/><br/>
        <i>Public Utility Service</i> - The installation of a service covered by the appropriate utility regulators in that state</td>
      </tr>
      <tr>
        <td><code>40</code></td>
        <td>Installation</td>
        <td>Re-install TPP</td>
        <td><i>Installation</i> - A service that attaches an item to other property
        <br/><br/>
        <i>Re-install TPP</i> - The process of uninstalling a Tangible Personal Property item and reinstalling it either in the same or at a different place</td>
      </tr>
      <tr>
        <td><code>41</code></td>
        <td>Installation</td>
        <td>Install in Real Property</td>
        <td><i>Installation</i> - A service that attaches an item to other property
        <br/><br/>
        <i>Install in Real Property</i> - The act of attaching personal property to real property. The real property qualifies as new construction</td>
      </tr>
      <tr>
        <td><code>42</code></td>
        <td>Installation</td>
        <td>Radio/Television</td>
        <td><i>Installation</i> - A service that attaches an item to other property
        <br/><br/>
        <i>Radio/Television</i> - The act of installing a television set or radio to either real or tangible personal property</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>      

<h4 id="shipping-handling">Shipping and Handling</h4>
Shipping and Handling is a charge for combined shipping and processing of an item by the seller.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Attribute</th>
        <th>Properties</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>50</code></td>
        <td>Shipping and Handling</td>
        <td>Optional</td>
        <td><i>Shipping and Handling</i> - Charge for combined shipping and processing of an item by the seller
        <br/><br/>
        <i>Optional</i> - Shipping that is combined with a charge for the processing of the item by the seller. The buyer has the option on whether to accept the charge</td>
      </tr>
      <tr>
        <td><code>51</code></td>
        <td>Shipping and Handling</td>
        <td>Mandatory</td>
        <td><i>Shipping and Handling</i> - Charge for combined shipping and processing of an item by the seller
        <br/><br/>
        <i>Mandatory</i> - Shipping that is combined with a charge for the processing of the item by the seller. The buyer does not have the option on whether to accept the charge</td>
      </tr>
     </tbody>
  </table>
</div>
<br/>      

<h4 id="trade-ins">Trade-Ins</h4>
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Attribute</th>
        <th>Properties</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>     
      <tr>
        <td><code>52</code></td>
        <td>Trade-Ins</td>
        <td>General Rule</td>
        <td><i>Trade In</i> - A sale where part of the transaction price is reduced by another product that is being transferred from the purchaser to the seller</td>
      </tr>
     </tbody>
  </table>
</div>
<br/>      

<h4 id="software-maintenance-agreement">Software Maintenance Agreement</h4>
A Software Maintenance Agreement is often sold to a software user to cover future updates and services that may be needed to enhance or repair the software.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Attribute</th>
        <th>Properties</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>       
      <tr>
        <td><code>54</code></td>
        <td>Software Maintenance Agreement</td>
        <td>Optional - Updates</td>
        <td><i>Software Maintenance Agreement</i> - Often sold to a software user to cover future updates and services that may be needed to enhance or repair the software
        <br/><br/>
        <i>Optional - Updates</i> - An agreement that strictly involves updates to the software sold. This would not include any agreement that covers service of any kind. The agreement is purchased with the software at the option of the buyer</td>
      </tr>
      <tr>
        <td><code>55</code></td>
        <td>Software Maintenance Agreement</td>
        <td>Optional – Service</td>
        <td><i>Software Maintenance Agreement</i> - Often sold to a software user to cover future updates and services that may be needed to enhance or repair the software
        <br/><br/>
        <i>Optional – Service</i> - An agreement that strictly involves service that would include all needed services including customer support needed to service the software. This would not include any service that only includes use of a customer support or customer help phone service. The agreement is purchased with the software at the option of the buyer</td>
      </tr>
      <tr>
        <td><code>56</code></td>
        <td>Software Maintenance Agreement</td>
        <td>Optional – Upd and Svc</td>
        <td><i>Software Maintenance Agreement</i> - Often sold to a software user to cover future updates and services that may be needed to enhance or repair the software
        <br/><br/>
        <i>Optional – Upd and Svc</i> - An agreement that covers both updates and services, including those that cover updates along with only a customer support or customer help phone service. The agreement is purchased with the software at the option of the buyer</td>
      </tr>
      <tr>
        <td><code>57</code></td>
        <td>Software Maintenance Agreement</td>
        <td>Optional - Tangible</td>
        <td><i>Software Maintenance Agreement</i> - Often sold to a software user to cover future updates and services that may be needed to enhance or repair the software
        <br/><br/>
        <i>Optional – Tangible</i> - Agreement that strictly involves updates to the software sold. The updates are delivered by using a physical medium (i.e. updates sent to a customer by CD or disk). The agreement is purchased with the software at the option of the buyer</td>
      </tr>
      <tr>
        <td><code>58</code></td>
        <td>Software Maintenance Agreement</td>
        <td>Optional - Electronic</td>
        <td><i>Software Maintenance Agreement</i> - Often sold to a software user to cover future updates and services that may be needed to enhance or repair the software
        <br/><br/>
        <i>Optional – Electronic</i> - Agreement that strictly involves updates to the software sold. The updates are delivered by using an electronic medium (i.e. updates sent over the internet). The agreement is purchased with the software at the option of the buyer</td>
      </tr>
      <tr>
        <td><code>59</code></td>
        <td>Software Maintenance Agreement</td>
        <td>Optional – Cust Support</td>
        <td><i>Software Maintenance Agreement</i> - Often sold to a software user to cover future updates and services that may be needed to enhance or repair the software
        <br/><br/>
        <i>Optional – Cust Support</i> - An agreement that only covers call to a customer support or customer help phone service. The agreement is purchased with the software at the option of the buyer</td>
      </tr>
      <tr>
        <td><code>62</code></td>
        <td>Software Maintenance Agreement</td>
        <td>Mandatory - Upd and Svc</td>
        <td><i>Software Maintenance Agreement</i> - Often sold to a software user to cover future updates and services that may be needed to enhance or repair the software
        <br/><br/>
        <i>Mandatory - Upd and Svc</i> - An agreement that covers both updates and services, including those that cover updates along with only a customer support or customer help phone service. The agreement is required to be purchased as part of the sale</td>
      </tr>
      <tr>
        <td><code>63</code></td>
        <td>Software Maintenance Agreement</td>
        <td>Mandatory - Tangible</td>
        <td><i>Software Maintenance Agreement</i> - Often sold to a software user to cover future updates and services that may be needed to enhance or repair the software
        <br/><br/>
        <i>Mandatory - Tangible</i> - Agreement that strictly involves updates to the software sold. The updates are delivered by using a physical medium (i.e. updates sent to a customer by CD or disk). The agreement is required to be purchased as part of the sale</td>
      </tr>
      <tr>
        <td><code>64</code></td>
        <td>Software Maintenance Agreement</td>
        <td>Mandatory - Electronic</td>
        <td><i>Software Maintenance Agreement</i> - Often sold to a software user to cover future updates and services that may be needed to enhance or repair the software
        <br/><br/>
        <i>Mandatory - Electronic</i> - Agreement that strictly involves updates to the software sold. The updates are delivered by using an electronic medium (i.e. updates sent over the internet). The agreement is required to be purchased as part of the sale</td>
      </tr>
      <tr>
        <td><code>65</code></td>
        <td>Software Maintenance Agreement</td>
        <td>Mandatory - CustSupport</td>
        <td><i>Software Maintenance Agreement</i> - Often sold to a software user to cover future updates and services that may be needed to enhance or repair the software
        <br/><br/>
        <i>Mandatory - CustSupport</i> - An agreement that only covers call to a customer support or customer help phone service. The agreement is required to be purchased as part of the sale</td>
      </tr>
     </tbody>
  </table>
</div>
<br/>      

<h4 id="service-contract">Service Contract</h4>
A Service Contract covers service that could be considered ongoing maintenance but in addition would cover service that would be considered a repair.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Attribute</th>
        <th>Properties</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>        
      <tr>
        <td><code>61</code></td>
        <td>Service Contract</td>
        <td>Mandatory - Service</td>
        <td><i>Service Contract</i> - Covers service that could be considered ongoing maintenance but in addition would cover service that would be considered a repair
        <br/><br/>
        <i>Mandatory - Service</i> - The service contract is required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>67</code></td>
        <td>Service Contract</td>
        <td>Optional - Parts During</td>
        <td><i>Service Contract</i> - Covers service that could be considered ongoing maintenance but in addition would cover service that would be considered a repair
        <br/><br/>
        <i>Optional - Parts During – (During Initial Sale)</i> The service contract is sold at the same time the property being covered is sold. The service contract is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>68</code></td>
        <td>Service Contract</td>
        <td>Optional - Labor During</td>
        <td><i>Service Contract</i> - Covers service that could be considered ongoing maintenance but in addition would cover service that would be considered a repair
        <br/><br/>
        <i>Optional - Labor During – (During Initial Sale)</i> The service contract is sold at the same time the property being covered is sold. The service contract is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>69</code></td>
        <td>Service Contract</td>
        <td>Optional - Parts and Labor During</td>
        <td><i>Service Contract</i> - Covers service that could be considered ongoing maintenance but in addition would cover service that would be considered a repair
        <br/><br/>
        <i>Optional – Parts and Labor During – (During Initial Sale)</i> The service contract is sold at the same time the property being covered is sold. The service contract is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>70</code></td>
        <td>Service Contract</td>
        <td>Optional - Parts After</td>
        <td><i>Service Contract</i> - Covers service that could be considered ongoing maintenance but in addition would cover service that would be considered a repair
        <br/><br/>
        <i>Optional - Parts After</i> - The service contract is sold after the property being covered is sold. The service contract is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>71</code></td>
        <td>Service Contract</td>
        <td>Optional - Labor After</td>
        <td><i>Service Contract</i> - Covers service that could be considered ongoing maintenance but in addition would cover service that would be considered a repair
        <br/><br/>
        <i>Optional - Labor After</i> - The service contract is sold after the property being covered is sold. The service contract is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>73</code></td>
        <td>Service Contract</td>
        <td>Mandatory - Parts</td>
        <td><i>Service Contract</i> - Covers service that could be considered ongoing maintenance but in addition would cover service that would be considered a repair
        <br/><br/>
        <i>Mandatory - Parts</i> - The service contract only covers parts needed to maintain or repair the property involved. It would not cover labor used to maintain or repair the property involved. The service contract is required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>74</code></td>
        <td>Service Contract</td>
        <td>Mandatory - Labor</td>
        <td><i>Service Contract</i> - Covers service that could be considered ongoing maintenance but in addition would cover service that would be considered a repair
        <br/><br/>
        <i>Mandatory - Labor</i> - The service contract only covers labor needed to maintain or repair the property involved. It would not cover parts used to maintain or repair the property involved. The service contract is required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>75</code></td>
        <td>Service Contract</td>
        <td>Mandatory - Parts and Labor</td>
        <td><i>Service Contract</i> - Covers service that could be considered ongoing maintenance but in addition would cover service that would be considered a repair
        <br/><br/>
        <i>Mandatory - Parts and Labor</i> - The service contract covers both parts and labor needed to maintain or repair the property involved. The service contract is required as part of the sale of property</td>
      </tr>
     </tbody>
  </table>
</div>
<br/>      

<h4 id="standard-maintenance-agreement">Standard Maintenance Agreement</h4>
A Standard Maintenance Agreement covers ongoing routine maintenance of property or a previously performed service. It would not cover services that are considered a repair.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Attribute</th>
        <th>Properties</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>   
      <tr>
        <td><code>79</code></td>
        <td>Standard Maintenance Agreement</td>
        <td>Optional - Parts During</td>
        <td><i>Maintenance Agreement</i> - Covers ongoing routine maintenance of property or a previously performed service. It would not cover services that are considered a repair
        <br/><br/>
        <i>Optional - Parts During – (During Initial Sale)</i> The maintenance agreement is sold at the same time the property being covered is sold. The maintenance agreement is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>80</code></td>
        <td>Standard Maintenance Agreement</td>
        <td>Optional - Labor During</td>
        <td><i>Maintenance Agreement</i> - Covers ongoing routine maintenance of property or a previously performed service. It would not cover services that are considered a repair
        <br/><br/>
        <i>Optional - Labor During – (During Initial Sale)</i> The maintenance agreement is sold at the same time the property being covered is sold. The maintenance agreement is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>81</code></td>
        <td>Standard Maintenance Agreement</td>
        <td>Optional - Parts and Labor During</td>
        <td><i>Maintenance Agreement</i> - Covers ongoing routine maintenance of property or a previously performed service. It would not cover services that are considered a repair
        <br/><br/>
        <i>Optional - Parts and Labor During – (During Initial Sale)</i> The maintenance agreement is sold at the same time the property being covered is sold. The maintenance agreement is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>82</code></td>
        <td>Standard Maintenance Agreement</td>
        <td>Optional - Service During</td>
        <td><i>Maintenance Agreement</i> - Covers ongoing routine maintenance of property or a previously performed service. It would not cover services that are considered a repair
        <br/><br/>
        <i>Optional - Service During – (Service Only)</i> The maintenance agreement covers only the service needed to maintain the property involved. The maintenance agreement is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>83</code></td>
        <td>Standard Maintenance Agreement</td>
        <td>Optional - Parts After</td>
        <td><i>Maintenance Agreement</i> - Covers ongoing routine maintenance of property or a previously performed service. It would not cover services that are considered a repair
        <br/><br/>
        <i>Optional - Parts After – (After Initial Sale)</i> The maintenance agreement is sold after the property being covered is sold. The maintenance agreement is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>84</code></td>
        <td>Standard Maintenance Agreement</td>
        <td>Optional - Labor After</td>
        <td><i>Maintenance Agreement</i> - Covers ongoing routine maintenance of property or a previously performed service. It would not cover services that are considered a repair
        <br/><br/>
        <i>Optional - Labor After – (After Initial Sale)</i> The maintenance agreement is sold after the property being covered is sold. The maintenance agreement is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>85</code></td>
        <td>Standard Maintenance Agreement</td>
        <td>Optional - Parts and Labor After</td>
        <td><i>Maintenance Agreement</i> - Covers ongoing routine maintenance of property or a previously performed service. It would not cover services that are considered a repair
        <br/><br/>
        <i>Optional - Parts and Labor After – (After Initial Sale)</i> The maintenance agreement is sold after the property being covered is sold. The maintenance agreement is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>86</code></td>
        <td>Standard Maintenance Agreement</td>
        <td>Optional - Service After</td>
        <td><i>Maintenance Agreement</i> - Covers ongoing routine maintenance of property or a previously performed service. It would not cover services that are considered a repair
        <br/><br/>
        <i>Optional - Service After – (Service Only)</i> The maintenance agreement covers only the service needed to maintain the property involved. The maintenance agreement is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>87</code></td>
        <td>Standard Maintenance Agreement</td>
        <td>Mandatory - Parts</td>
        <td><i>Maintenance Agreement</i> - Covers ongoing routine maintenance of property or a previously performed service. It would not cover services that are considered a repair
        <br/><br/>
        <i>Mandatory - Parts</i> - The maintenance agreement only covers parts needed to maintain the property involved. It would not cover labor used to maintain the property involved. The maintenance agreement is required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>88</code></td>
        <td>Standard Maintenance Agreement</td>
        <td>Mandatory - Labor</td>
        <td><i>Maintenance Agreement</i> - Covers ongoing routine maintenance of property or a previously performed service. It would not cover services that are considered a repair
        <br/><br/>
        <i>Mandatory - Labor</i> - The maintenance agreement only covers labor needed to maintain the property involved. It would not cover parts used to maintain the property involved. The maintenance agreement is required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>89</code></td>
        <td>Standard Maintenance Agreement</td>
        <td>Mandatory - Parts and Labor</td>
        <td><i>Maintenance Agreement</i> - Covers ongoing routine maintenance of property or a previously performed service. It would not cover services that are considered a repair
        <br/><br/>
        <i>Mandatory - Parts and Labor</i> - The maintenance agreement covers both parts and labor needed to maintain the property involved. The maintenance agreement is required as part of the sale of property</td>
      </tr>
     </tbody>
  </table>
</div>
<br/>      

<h4 id="factory-warranty">Factory Warranty</h4>
A Factory Warranty is a warranty that is sold by the original manufacturer and covers repairs in the event of a defect involving a certain part of the property. This warranty is sold along with the underlying property.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Attribute</th>
        <th>Properties</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody> 
      <tr>
        <td><code>93</code></td>
        <td>Factory Warranty</td>
        <td>Optional - Parts</td>
        <td><i>Factory Warranty</i> - A warranty that is sold by the original manufacturer and covers repairs in the event of a defect involving a certain part of the property. This warranty is sold along with the underlying property
        <br/><br/>
        <i>Optional - Parts</i> - The factory warranty only covers parts needed to repair the property involved. It would not cover labor used to repair the property involved. The factory warranty is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>94</code></td>
        <td>Factory Warranty</td>
        <td>Optional - Labor</td>
        <td><i>Factory Warranty</i> - A warranty that is sold by the original manufacturer and covers repairs in the event of a defect involving a certain part of the property. This warranty is sold along with the underlying property
        <br/><br/>
        <i>Optional - Labor</i> - The factory warranty only covers labor needed to repair the property involved. It would not cover parts used to maintain the property involved. The factory warranty is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>95</code></td>
        <td>Factory Warranty</td>
        <td>Optional - Parts and Labor</td>
        <td><i>Factory Warranty</i> - A warranty that is sold by the original manufacturer and covers repairs in the event of a defect involving a certain part of the property. This warranty is sold along with the underlying property
        <br/><br/>
        <i>Optional – Parts and Labor During</i> - The factory warranty covers both parts and labor needed to repair the property involved. The factory warranty is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>96</code></td>
        <td>Factory Warranty</td>
        <td>Mandatory - Parts</td>
        <td><i>Factory Warranty</i> - A warranty that is sold by the original manufacturer and covers repairs in the event of a defect involving a certain part of the property. This warranty is sold along with the underlying property
        <br/><br/>
        <i>Mandatory - Parts</i> - The factory warranty only covers parts needed to repair the property involved. It would not cover labor used to repair the property involved. The factory warranty is required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>97</code></td>
        <td>Factory Warranty</td>
        <td>Mandatory - Labor</td>
        <td><i>Factory Warranty</i> - A warranty that is sold by the original manufacturer and covers repairs in the event of a defect involving a certain part of the property. This warranty is sold along with the underlying property
        <br/><br/>
        <i>Mandatory - Labor</i> - The factory warranty only covers labor needed to repair the property involved. It would not cover parts used to maintain the property involved. The factory warranty is required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>98</code></td>
        <td>Factory Warranty</td>
        <td>Mandatory - Parts and Labor</td>
        <td><i>Factory Warranty</i> - A warranty that is sold by the original manufacturer and covers repairs in the event of a defect involving a certain part of the property. This warranty is sold along with the underlying property
        <br/><br/>
        <i>Mandatory – Parts and Labor</i> - The factory warranty covers both parts and labor needed to repair the property involved. The factory warranty is required as part of the sale of property</td>
      </tr>
     </tbody>
  </table>
</div>
<br/>      

<h4 id="extended-warranty">Extended Warranty</h4>
An Extended Warranty is a warranty that is sold by a party other than the manufacturer and covers repairs in the event of a defect involving a certain part of the property.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Attribute</th>
        <th>Properties</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody> 
      <tr>
        <td><code>100</code></td>
        <td>Extended Warranty</td>
        <td>Optional - Parts During</td>
        <td><i>Extended Warranty</i> - A warranty that is sold by a party other than the manufacturer and covers repairs in the event of a defect involving a certain part of the property
        <br/><br/>
        <i>Optional – Parts During</i> - The extended warranty only covers parts needed to repair the property involved. It would not cover labor used to repair the property involved. The extended warranty is sold at the same time the property being covered is sold; the extended warranty is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>101</code></td>
        <td>Extended Warranty</td>
        <td>Optional - Labor During</td>
        <td><i>Extended Warranty</i> - A warranty that is sold by a party other than the manufacturer and covers repairs in the event of a defect involving a certain part of the property
        <br/><br/>
        <i>Optional – Labor During</i> - The extended warranty only covers labor needed to repair the property involved. It would not cover parts used to maintain the property involved. The extended warranty is sold at the same time the property being covered is sold; the extended warranty is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>102</code></td>
        <td>Extended Warranty</td>
        <td>Optional - Parts and Labor During</td>
        <td><i>Extended Warranty</i> - A warranty that is sold by a party other than the manufacturer and covers repairs in the event of a defect involving a certain part of the property
        <br/><br/>
        <i>Optional – Parts and Labor During</i> - The extended warranty covers both parts and labor needed to repair the property involved. The extended warranty is sold at the same time the property being covered is sold; the extended warranty is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>103</code></td>
        <td>Extended Warranty</td>
        <td>Optional - Service During</td>
        <td><i>Extended Warranty</i> - A warranty that is sold by a party other than the manufacturer and covers repairs in the event of a defect involving a certain part of the property
        <br/><br/>
        <i>Optional – Parts and Labor During</i> - The extended warranty covers both parts and labor needed to repair the property involved. The extended warranty is sold at the same time the property being covered is sold; the extended warranty is not required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>104</code></td>
        <td>Extended Warranty</td>
        <td>Optional - Parts After</td>
        <td><i>Extended Warranty</i> - A warranty that is sold by a party other than the manufacturer and covers repairs in the event of a defect involving a certain part of the property
        <br/><br/>
        <i>Optional – Parts After</i> - The extended warranty only covers parts needed to repair the property involved. It would not cover labor used to repair the property involved. The extended warranty is not required as part of the sale of property and is sold after the property being covered is sold</td>
      </tr>
      <tr>
        <td><code>105</code></td>
        <td>Extended Warranty</td>
        <td>Optional - Labor After</td>
        <td><i>Extended Warranty</i> - A warranty that is sold by a party other than the manufacturer and covers repairs in the event of a defect involving a certain part of the property
        <br/><br/>
        <i>Optional – Labor After</i> - The extended warranty only covers labor needed to repair the property involved. It would not cover parts used to maintain the property involved. The extended warranty is not required as part of the sale of property and is sold after the property being covered is sold</td>
      </tr>
      <tr>
        <td><code>106</code></td>
        <td>Extended Warranty</td>
        <td>Optional - Parts and Labor After</td>
        <td><i>Extended Warranty</i> - A warranty that is sold by a party other than the manufacturer and covers repairs in the event of a defect involving a certain part of the property
        <br/><br/>
        <i>Optional – Parts and Labor After</i> - The extended warranty covers both parts and labor needed to repair the property involved. The extended warranty is not required as part of the sale of property and is sold after the property being covered is sold</td>
      </tr>
      <tr>
        <td><code>107</code></td>
        <td>Extended Warranty</td>
        <td>Optional - Service After</td>
        <td><i>Extended Warranty</i> - A warranty that is sold by a party other than the manufacturer and covers repairs in the event of a defect involving a certain part of the property
        <br/><br/>
        <i>Optional – Service After</i> - The extended warranty covers only the Service needed to repair the property involved. The extended warranty is not required as part of the sale of property and is sold after the property being covered is sold</td>
      </tr>
      <tr>
        <td><code>108</code></td>
        <td>Extended Warranty</td>
        <td>Mandatory - Parts</td>
        <td><i>Extended Warranty</i> - A warranty that is sold by a party other than the manufacturer and covers repairs in the event of a defect involving a certain part of the property
        <br/><br/>
        <i>Mandatory - Parts</i> - The extended warranty only covers parts needed to repair the property involved. It would not cover labor used to repair the property involved. The extended warranty is required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>109</code></td>
        <td>Extended Warranty</td>
        <td>Mandatory - Labor</td>
        <td><i>Extended Warranty</i> - A warranty that is sold by a party other than the manufacturer and covers repairs in the event of a defect involving a certain part of the property
        <br/><br/>
        <i>Mandatory - Labor</i> - The extended warranty only covers labor needed to repair the property involved. It would not cover parts used to maintain the property involved. The extended warranty is required as part of the sale of property</td>
      </tr>
      <tr>
        <td><code>110</code></td>
        <td>Extended Warranty</td>
        <td>Mandatory - Parts and Labor</td>
        <td><i>Extended Warranty</i> - A warranty that is sold by a party other than the manufacturer and covers repairs in the event of a defect involving a certain part of the property
        <br/><br/>
        <i>Mandatory – Parts and Labor</i> - The extended warranty covers both parts and labor needed to repair the property involved. The extended warranty is required as part of the sale of property</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/sau/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/private-line/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>