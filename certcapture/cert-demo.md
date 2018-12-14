---
layout: default
product: certCapture
nav: apis
doctype: overview
---
<!-- TODO: move inline CSS to cert-demo.scss -->
<!-- TODO: classes to dashes instead of camelCase -->
<h1>CertCapture Demo</h1>

<!-- TODO: instructions -->
<p>Hi! I will be filled with instructions soon, so you can understand what this page does.</p>
<hr style="margin: 20px 0px 20px 0px" id="divider">

<div id="gencert_test">
    <div class="row" >
        <div class="col-md-5">
            <h3>Step 1: Setup</h3>
            <p>INSTRUCTIONS</p>
            <div>
                <label style="display: block;">
                    GenCert URL *
                    <input id="gencertUrl" value="https://app.certcapture.com/Gencert2/js" placeholder="https://app.certcapture.com/Gencert2/js" type="text">
                </label>
                <!-- populated with exposureZoneReq() -->
                <label>Exposure Zone *
                    <select id="setZone" onChange="updateCertScript();"></select>
                </label>
            </div> 
            <h3>Step 2: Get your token</h3>
            <p>INSTRUCTIONS</p>
            <table>
                <tr>
                    <label>API URL
                    <input id="apiUrl" placeholder="https://api.certcapture.com" value="https://api.certcapture.com" type="text"></label>
                </tr>
                <tr>
                    <td><input id="apiUser" placeholder="API User Name" type="text"></td>
                    <td><input id="apiPassword" placeholder="API Password" type="password"></td> 
                </tr>
                <tr>
                    <td><input id="clientId" placeholder="Client ID" type="text"></td>
                    <td><input id="customerNumber" placeholder="Customer Number" type="text"></td>
                </tr>
            </table>
            <button class="btn btn-primary" style="margin-top: 10px;" onclick="getToken()">Get Token</button>
            <!-- options -->
            <!-- TODO: instructions -->
            <h3>Step 3: Select your options</h3>
            <p>INSTRUCTIONS</p>
            <div>
                <ul id="testOptions" onChange="updateCertScript();">
                    {% for option in site.data.demo_page.cert-options %}
                        <li>
                            <label>
                                <input type='checkbox' class="cert-demo-option" id="{{ option.id }}">{{ option.label }}
                            </label>
                        </li>
                    {% endfor %}
                </ul>
            </div>
        </div>
        <!-- request example script -->
        <div class="col-md-7">
            <h3 style="">Step 4: Submit your script</h3>
            <div id="scriptTest">
                <div id="sampleScript" class="code-snippet respScroll api-console-output" style="height: 400px;max-width: 800px;">
                    <div class="loading-pulse" style="display: none;"></div>
                    <textarea id="cert-request" spellcheck="false">{ }</textarea>
                </div>
                <button class="btn btn-primary" id="cert-demo-submit" onclick="initScript();">Submit</button>
            </div>
        </div>
    </div><!-- end row -->
</div><!-- end gencert_test -->

<!-- Form ouput -->
<!-- TODO: formatting/styling -->
<div id="form-parent-container">
    <div id="form-container" style="display:none"></div>
</div>
<button class="btn btn-primary" id="cert-demo-back" onclick="backToDemo();" style="display:none">Back to demo</button>