---
layout: default
product: certCapture
nav: apis
doctype: overview
---
<h1>CertCapture Demo</h1>

<!-- TODO: instructions -->
<p>Hi! I will be filled with instructions soon, so you can understand what this page does.</p>
<hr id="cert-divider">

<div id="gencert_test">
    <div class="row" >
        <div class="col-md-5">
            <h3>Step 1: Setup</h3>
            <p>INSTRUCTIONS</p>
            <div>
                <label class="cert-label">
                    GenCert URL *
                    <input id="gencert-url" value="https://app.certcapture.com/Gencert2/js" placeholder="https://app.certcapture.com/Gencert2/js" type="text">
                </label>
                <!-- populated with exposureZoneReq() -->
                <label class="cert-label">Exposure Zone *
                    <select id="set-zone" onChange="updateCertScript();"></select>
                </label>
            </div> 
            <h3>Step 2: Get your token</h3>
            <p>INSTRUCTIONS</p>
            <table>
                <tr>
                    <label>API URL
                    <input id="api-url" placeholder="https://api.certcapture.com" value="https://api.certcapture.com" type="text"></label>
                </tr>
                <tr>
                    <td><input id="api-user" placeholder="API User Name" type="text"></td>
                    <td><input id="api-password" placeholder="API Password" type="password"></td> 
                </tr>
                <tr>
                    <td><input id="client-id" placeholder="Client ID" type="text"></td>
                    <td><input id="customer-number" placeholder="Customer Number" type="text"></td>
                </tr>
            </table>
            <button class="btn btn-primary cert-btn" onclick="getToken()">Get Token</button>
            <!-- options -->
            <!-- TODO: instructions -->
            <h3>Step 3: Select your options</h3>
            <p>INSTRUCTIONS</p>
            <div>
                <ul id="test-options" onChange="updateCertScript();">
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
            <h3>Step 4: Submit your script</h3>
            <div id="script-test">
                <div id="sample-script" class="code-snippet respScroll api-console-output">
                    <textarea id="cert-request" spellcheck="false">{ }</textarea>
                </div>
                <button class="btn btn-primary" id="cert-demo-submit" onclick="initScript();">Submit</button>
            </div>
        </div><!-- end request example script -->
    </div><!-- end row -->
</div><!-- end gencert_test -->

<!-- Form output -->
<div id="form-parent-container">
    <div id="form-container" class="form-output"></div>
</div>
<button class="btn btn-primary cert-btn form-output" id="cert-demo-back" onclick="backToDemo();">Back to demo</button>