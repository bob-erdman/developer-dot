---
layout: default
title: Ecommerce Plugin Demo
product: certCapture
nav: apis
doctype: overview
---
<script src="/public/js/vendor/jquery-2.2.4.min.js"></script>
<script type='text/javascript' src='../cert-demo.js'></script>
<script type='text/javascript' src='https://beta.certcapture.com/Gencert2/js'></script>
<script type='text/javascript'>
    // get all the US exposure zones
    $.ajax({
        url: "https://beta-api.certcapture.com/v2/states",
        type: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Basic " + window.btoa('api-test:api-test'),
            "x-client-id": 444,
        }
    }).then((res) => {
        let zones = ``;
        res.data.forEach((state) => {
            zones += `<option value=${state.name}>${state.name}</option>`;
        })
        // populate exposure zone drop down
        $('#set-zone').html(zones);
    });
</script>

<h1>Ecommerce Plugin Demo</h1>
<!-- TODO: instructions -->
<p>Jujubes donut cookie dragée I love cotton candy. Lollipop chocolate bar cake topping halvah.</p>
<hr id="cert-divider">

<div id="gencert_test">
    <div class="row" >
        <div class="col-md-6">
            <h3>Step 1: Setup</h3>
            <!-- TODO: instructions -->
            <p>Candy canes jujubes cake pudding. Liquorice I love gingerbread gingerbread chocolate cake cotton candy.</p>
            <form>
                <div class="form-group row">
                    <label for="api-url" class="col-sm-3 col-form-label">GenCert URL</label>
                    <div class="col-sm-9">
                        <input id="api-url" class="form-control" placeholder="https://beta-api.certcapture.com" value="https://beta-api.certcapture.com" type="text">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="form-control" class="col-sm-3 col-form-label">Exposure Zone</label>
                    <div class="col-sm-9">
                        <select id="set-zone" class="form-control" onChange="updateCertScript();"></select>
                    </div>
                </div>
            </form>
            <h3>Step 2: Get your token</h3>
            <!-- TODO: instructions -->
            <p>Bear claw pudding sesame snaps. Jelly beans dragée powder biscuit</p>
            <form>
                <div class="form-group row">
                    <label for="api-url" class="col-sm-3 col-form-label">API URL</label>
                    <div class="col-sm-9">
                        <input id="api-url" class="form-control" placeholder="https://beta-api.certcapture.com" value="https://beta-api.certcapture.com" type="text">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="api-user" class="col-sm-3 col-form-label">API User Name</label>
                    <div class="col-sm-9">
                        <input id="api-user" class="form-control" placeholder="userName01" type="text">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="api-password" class="col-sm-3 col-form-label">API Password</label>
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
            <!-- options -->
            <!-- TODO: instructions -->
            <h3>Step 3: Select your options</h3>
            <p>Topping I love candy oat cake bear claw I love sugar plum tart bear claw.</p>
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
            <!-- TODO: instructions -->
            <p>Bear claw pudding sesame snaps. Jelly beans dragée powder biscuit</p>
            <button class="btn btn-primary" id="cert-demo-refill-btn" onclick="updateCertScript();">Refill</button>
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