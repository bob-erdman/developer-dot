---
layout: default
title: Avalara CloudConnect
product: CloudConnect
doctype: use_cases
nav: apis
---
<h2>Avalara CloudConnect</h2>
<h3>CloudConnect Setup Guide</h3>
<h4>Installation Recommendations</h4>
1.The preferred implementation is at least two (2) CloudConnect systems for redundancy. Each unit should require only 1U of rack space. Each unit requires two (2) power outlets, each in separate PDU’s, and one (1) Ethernet port. The four (4) Ethernet ports are bonded by default and either may be used. The fifth port is for IPMI.<br>
2. The preferred implementation is to place all CloudConnect systems in a Private DMZ. This DMZ should allow inbound only from the customer’s network and outbound to the Internet. The systems are fully firewalled and only expose the AvaTax API and only communicates out to Avalara to get content, customer data and security updates. Avalara’s preference is that the system uses a private IP address.


<h4>Initial Setup</h4>
Once powered on, the LCD will display a booting message and then begin scrolling after approximately one minute. At this point the system is ready to be configured.
The system defaults to DHCP. The address it acquires will be displayed on the LCD. To change to static IP address:
<br>1. Use the LCD up/down buttons to select “CHANGE IP” and confirm the selection by using the green checkmark button.
<br>2. Choose the adapter “bond0” by using the up/down buttons and confirm the selection by using the green checkmark button.
<br>3. The following information needs to be confirmed in order: STATIC/DHCP, IP ADDRESS, SUBNET, GATEWAY, DNS 1, DNS 2. Use the up/down buttons to change values and the left/right buttons to change the position. Use the green checkmark button to confirm selections and the red X button to cancel tasks.
<br>4. The system will set the IP address and should be available after a minute.
<b4>5. Confirm the setup by pinging the system.

<h4>Firewall Configuration</h4>
After confirming that all of the systems are online, please configure your firewall to allow the following communication with the system. This information is current as of 04//09/2019 and is subject to change.

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>Direction</th>
				<th>Port (Protocol)</th>
				<th>Source</th>
				<th>Destination Host/IP</th>
				<th>Purpose</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Inbound</td>
				<td>8080 (HTTP)</td>
				<td>Any</td>
				<td>System IP</td>
				<td>AvaTax API</td>
			</tr>
			<tr>
				<td>Inbound</td>
				<td>8084, 443 (HTTPS)</td>
				<td>Any</td>
				<td>System IP</td>
				<td>AvaTax API</td>
			</tr>
			<tr>
				<td>Outbound</td>
				<td>7(ICMP)</td>
				<td>System IP</td>
				<td>8.8.8.8</td>
				<td>Ping</td>
			</tr>
			<tr>
				<td>Outbound</td>
				<td>53 (DNS)</td>
				<td>System IP</td>
				<td>8.8.8.8, 8.8.4.4</td>
				<td>DNS lookup</td>
		</tr>
		<tr>
				<td>Outbound</td>
				<td>123 (NTP)</td>
				<td>System IP</td>
				<td>ntp.ubuntu.com</td>
				<td>Network time protocol</td>
		</tr>
			<tr>
				<td>Inbound</td>
				<td>30001 (SSH)</td>
				<td>Any</td>
				<td>System IP</td>
				<td>Customer SSH access</td>
		</tr>
			<tr>
				<td>Outbound</td>
				<td>30001 (SSH)</td>
				<td>Any</td>
				<td>tunnel.cloudconnect.avalara.net</td>
				<td>Remote Administration</td>
		</tr>
			<tr>
				<td>Inbound</td>
				<td>30009 (HTTP)</td>
				<td>Any</td>
				<td>System IP</td>
				<td>AvaTax engine health</td>
		</tr>
			<tr>
				<td>Outbound</td>
				<td>443 (HTTPS)</td>
				<td>System IP</td>
				<td>avatax.avalara.net</td>
				<td>Synchronization of content and customer data</td>
		</tr>
			<tr>
				<td>Outbound</td>
				<td>8084 (HTTPS)</td>
				<td>System IP</td>
				<td>avatax.cloudconnect.avalara.net</td>
				<td>Synchronization of content and customer data</td>
		</tr>
			<tr>
				<td>Outbound</td>
				<td>443 (HTTPS)</td>
				<td>System IP</td>
				<td>ingest.signalfx.com, hooks.slack.com, slack.com, api.opsgenie.com, collectors.sumologic.com, collectors.us2.sumologic.com, endpoint1.collection.us2.sumologic.com, endpoint2.collection.us2.sumologic.com, endpoint3.collection.us2.sumologic.com </td>
				<td>Metrics collection</td>
		</tr>
			<tr>
				<td>Outbound</td>
				<td>5671 (HTTPS)</td>
				<td>System IP</td>
				<td>c4.cloudconnect.avalara.net</td>
				<td>Messaging service bus</td>
		</tr>
				<tr>
				<td>Outbound</td>
				<td>443 (HTTPS)</td>
				<td>System IP</td>
				<td>package.cloudconnect.avalara.net</td>
				<td>Linux package updates</td>
		</tr>
				<tr>
				<td>Outbound</td>
				<td>443 (HTTPS)</td>
				<td>System IP</td>
				<td>avalara-cc-databaserecordupload.s3.amazonaws.com, avalara-cc-databaserecordupload.s3-us-west-2.amazonaws.com, avalara-cc-databaserecordupload.s3.us-west-2.amazonaws.com, avalara-cc-packages.s3.amazonaws.com, avalara-cc-packages.s3-us-west-2.amazonaws.com, avalara-cc-packages.s3.us-west-2.amazonaws.com, avalara-cc-vms.s3.amazonaws.com, avalara-cc-vms.s3-us-west-2.amazonaws.com, avalara-cc-vms.s3.us-west-2.amazonaws.com, s3-us-west-2-r-w.amazonaws.com</td>
				<td>Amazon S3</td>
		</tr>
				<tr>
				<td>Outbound</td>
				<td>443 (HTTPS)</td>
				<td>System IP</td>
				<td>edelivery.oracle.com 
					download.oracle.com
				</td>
				<td>JRE Updates</td>
		</tr>
				<tr>
				<td>Outbound</td>
				<td>30001 (SSH)</td>
				<td>System IP</td>
				<td>ccarchive.avalara.net</td>
				<td>Virtual machine (VM) updates</td>
		</tr>
			<tr>
				<td>Outbound</td>
				<td>30001 (SSH), 443 (HTTPS)</td>
				<td>System IP</td>
				<td>images.cloudconnect.avalara.net</td>
				<td>Code and content updates</td>
		</tr>
		</tbody>
	</table>  
</div>

<h4>Load Balance Configuration</h4>
The recommended implementation is to setup a VIP with a load balancer in a least-connected configuration and use the following health checks to verify availability. It is important to add the endpoint https://avatax.cloudconnect.avalara.net:8084 with a lower weight such that traffic will be directed to the Avalara Cloud API if all CloudConnect systems are unavailable. For the CloudConnect health check below, use either option #1 or #2.

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>Service</th>
				<th>URL</th>
				<th>Type</th>
				<th>Return</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>CloudConnect health #1</td>
				<td>http://<i>SystemUrl</i>:30009/calc</td>
				<td>GET</td>
				<td>{ "Status": "OK" }</td>
			</tr>
			<tr>
				<td>CloudConnect health #2</td>
				<td>http://<i>SystemUrl</i>:30009/orangez/health.aspx</td>
				<td>GET</td>
				<td>{ "Status": "OK" }</td>
			</tr>
			<tr>
				<td>Cloud API health</td>
				<td>https://avatax.cloudconnect.avalara.net:8084/orangez/health.aspx</td>
				<td>GET</td>
				<td>{ "Status": "OK" }</td>
			</tr>
		</tbody>
	</table>  
</div>

<h4>System Statistics</h4>

System information can be obtained through a system statistics API.

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>URL</th>
				<th>Type</th>
				<th>Return (Example Values)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>http://<i>SystemUrl</i>:30009/system</td>
				<td>GET</td>
				<td>{ "CPULoad" : "0.22474747474747475", "IOLoad" : "{Writes=5870410, ServiceTime=2.1537940727624463, ReadBytes=224253660160, WriteBytes=264978800640, Queue=0.30939469012845217, Reads=1892633}", "Swap" : "0.0051986077", "ConcurrentRequests" : "", SystemIsAvailable:"true", RedirectToCloud:"false" }</td>
			</tr>
		</tbody>
	</table>  
</div>

<h4>AvaTax Metrics</h4>
<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>URL</th>
				<th>Method</th>
				<th>Authorization</th>
				<th>Query String</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>http://<i>SystemUrl</i>:30009/metrics</td>
				<td>GET</td>
				<td>Basic Authorization</td>
				<td>seconds (range from 1 to 86400). If missing, default is 60.</td>
			</tr>
		</tbody>
	</table>  
	CURL example: curl http://10.20.30.40:30009/metrics?seconds=60 -H "Authorization: Basic MTIzNDU2Nzg5OkdvUmVkU294Cg=="
See https://en.wikipedia.org/wiki/Basic_access_authentication#Client_side for basic authorization.

</div>
