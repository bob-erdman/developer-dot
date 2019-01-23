---
layout: default
title: eCommerce Plugin Demo
product: certCapture
nav: apis
doctype: overview
---
<script src="/public/js/vendor/jquery-2.2.4.min.js"></script>
<script type='text/javascript' src='../cert-demo.js'></script>
<script type='text/javascript' src='https://beta.certcapture.com/Gencert2/js'></script>

<h1>eCommerce Plugin Demo</h1>
<p>The eCommerce plugin is used to embed CertCapture's exemption document submission form into your eCommerce site so it can communicate with CertCapture. For more information about the plugin, <a href="https://help.avalara.com/0021_Avalara_CertCapture/All_About_CertCapture/Install_Avalara_CertCapture_for_Ecommerce" target="_blank">check out the documentation.</a></p>
<hr id="cert-divider">

<div id="gencert_test">
    <div class="row" >
        <div class="col-md-3">
            <h3>Step 1: Setup</h3>
            <p>Pick the GenCert URL you'd like to hit and choose your exposure zone.</p>
            <form>
                <div class="form-group row">
                    <label for="api-url" class="col-sm-3 col-form-label">GenCert URL</label>
                    <div class="col-sm-9">
                        <input id="gencert-url" class="form-control" placeholder="https://beta.certcapture.com" value="https://beta.certcapture.com/" type="text">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="form-control" class="col-sm-3 col-form-label">Exposure Zone</label>
                    <div class="col-sm-9">
                        <select id="set-zone" class="form-control" onChange="updateCertScript();">
                            {% for state in site.data.demo_page.cert-states %}
                                <option value="{{state.value}}">{{ state.value }}</option>
                            {% endfor %}
                        </select>
                    </div>
                </div>
            </form>
            <h3>Step 2: Get your token</h3>
            <p>Use your eCommerce credentials to generate a valid token. If you already have a valid token, just paste it in the script box and you can move on to Step 3.</p>
            <form>
                <div class="form-group row">
                    <label for="api-url" class="col-sm-3 col-form-label">URL</label>
                    <div class="col-sm-9">
                        <input id="api-url" class="form-control" placeholder="https://beta-api.certcapture.com" value="https://beta-api.certcapture.com" type="text">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="api-user" class="col-sm-3 col-form-label">User Name</label>
                    <div class="col-sm-9">
                        <input id="api-user" class="form-control" placeholder="userName01" type="text">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="api-password" class="col-sm-3 col-form-label">Password</label>
                    <div class="col-sm-9">
                        <input id="api-password" class="form-control" placeholder="p@ssW0rd" type="password">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="client-id" class="col-sm-3 col-form-label">Client ID</label>
                    <div class="col-sm-9">
                        <input id="client-id" class="form-control" placeholder="111" type="text">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="customer-number" class="col-sm-3 col-form-label">Customer Number</label>
                    <div class="col-sm-9">
                        <input id="customer-number" class="form-control" placeholder="222" type="text">
                    </div>
                </div>
            </form>
            <button class="btn btn-primary cert-btn" onclick="getToken()">Get Token</button>
        </div>
        <div class="col-md-3">
            <!-- options -->
            <h3>Step 3: Select your parameters (optional)</h3>
            <p>If you would like to include any of the parameters below, click the appropriate box. If not, move on to Step 4.</p>
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
        <div class="col-md-6">
            <h3>Step 4: Submit your script</h3>
            <p>If you've completed steps 1 - 3, just click submit. If the script box is empty, click 'Fill Script' to see an up-to-date script based on your input for previous steps.</p>
            <button class="btn btn-link " id="cert-demo-refill-btn" onclick="updateCertScript();">Fill Script</button>
            <div id="script-test">
                <div id="sample-script" class="code-snippet respScroll api-console-output">
                    <textarea id="cert-request" spellcheck="false">
GenCert.init(document.getElementById( 'form-container' ), { 
  edit_purchaser: false, 
  ship_zone: 'Alabama', 
  token: ''
});
GenCert.show();
                    </textarea>
                </div>
                <button class="btn btn-primary" id="cert-demo-submit" onclick="submitEcom();">Submit</button>
            </div>
        </div><!-- end request example script -->
    </div><!-- end row -->
</div><!-- end gencert_test -->

<!-- Form output -->
<div id="form-parent-container">
    <div id="form-container" class="form-output"></div>
</div>
<button class="btn btn-primary cert-btn form-output" id="cert-demo-back-btn" onclick="backToDemo();">Back to demo</button>