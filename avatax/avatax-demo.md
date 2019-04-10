---
layout: demoPage
categories: [avatax, api]
product: Sales Tax API Demo
doctype: use_cases
image: /public/images/avatax-demo-img.png 
twitterImage: https://developer.avalara.com/public/images/avatax-demo-img.png 
---
<body onload="updateAddress()" style="position:fixed;">
    <link href="../../public/css/avatax.css" rel="stylesheet" type="text/css"/>
    <!-- demo container -->
    <div class="row">
        <!-- shortcuts container -->
        <div class="col-md-3">
            <!-- page header -->
            <div id="demo-shortcuts">
                <!-- steps to submit -->
                <div class="row">
                    <!-- step 1 / ship to -->
                    <p class="demo-step">Step 1: Where are you shipping to?</p>
                    <div class="demo-option">
                        <p>Choose a pre-selected address</p>
                        <form id="dest-addresses" onChange="updateAddress();" class="demo-form">
                            <!-- loop thru addresses -->
                            {% for address in site.data.demo_page.addresses %}
                                <label class="demo-label-container">
                                    <input id="{{ address.city }}" name="address" type="radio" value="{{ address.value }}" lat="{{ address.lat }}" long="{{ address.long }}" class="demo-radio" city="{{ address.city }}" addressType="{{ address.type }}" {% if address.selected %} checked {% endif %}/>
                                    <span class="demo-label"> {{ address.city }}</span>
                                    <br>
                                    <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 
                                    {{ address.street }}
                                    <br>
                                    {% if address.region %}
                                        <span class="demo-city-zip">{{ address.region }}</span>
                                        <br>
                                    {% endif %}
                                    <span class="demo-city-zip">{{ address.countryZip }}</span>
                                </label>
                                <br>
                            {% endfor %}
                        </form>
                    </div>
                    <hr>
                    <!-- step 2 / products -->
                    <p class="demo-step">Step 2: What's being taxed?</p>
                    <div class="demo-option">
                        <p>Choose a common product or service to calculate tax</p>
                        <form id="products" onChange="fillWithSampleData();" class="demo-form">
                            <!-- loop thru products -->
                            {% for product in site.data.demo_page.products %}
                                <label class="demo-label-container">
                                    <!-- radio input -->
                                    <input value="{{ product.taxCode }}" name="product" id="{{ product.inputId }}" type="checkbox" description="{{ product.name }}" class="demo-radio" {{ product.checked }}/>
                                    <!-- amount input -->
                                    <input value="{{ product.value }}" type="text" id="{{ product.inputId }}-amount" hsCode="{{ product.hsCode }}" style="width: 50px;">
                                    <!-- label and sublabel -->
                                    <span class="demo-label"> {{ product.name }} </span>
                                    {% if product.subLabel %}
                                        <span>{{ product.subLabel }}</span>
                                    {% endif %}
                                </label>
                                <br>
                            {% endfor %}
                        </form>
                    </div>
                    <hr>
                    <!-- step 3 / ship from -->
                    <p class="demo-step">Step 3: Where are you shipping from? (optional) </p>
                    <div class="demo-option">
                        <p>Choose a pre-selected address</p>
                        <form id="src-addresses" onChange="updateAddress();" class="demo-form">
                            <!-- loop thru addresses -->
                            {% for address in site.data.demo_page.addresses %}
                                <label class="demo-label-container">
                                    <input name="srcAddress" type="radio" value="{{ address.value }}" lat="{{ address.lat }}" long="{{ address.long }}" class="demo-radio" addressType="{{ address.type }}"/>
                                    <span class="demo-label"> {{ address.city }}</span>
                                    <br>
                                    <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 
                                    {{ address.street }}
                                    <br>
                                    {% if address.region %}
                                        <span class="demo-city-zip">{{ address.region }}</span>
                                        <br>
                                    {% endif %}
                                    <span class="demo-city-zip">{{ address.countryZip }}</span>
                                </label>
                                <br>
                            {% endfor %}
                        </form>
                    </div>
                </div>
            </div>
            <!-- end shortcuts -->
        </div>
        <!-- map and api details container -->
        <div class="col-md-9">
            <!-- map row -->
            <div class="row">
                <div id="map" style="position: relative;z-index:2;top:0px;left:0px;right:0px;bottom:0px;min-height: 400px;"></div>
            </div>
            <!-- api details row -->
            <div class="row" id="demo-api-details">
                <!-- request output -->
                <div class="console-req-container api-console-output col-md-6" id="demo-console-req" >
                    <div class="row" style="margin-top:15px;margin-left:10px;margin-right:10px;">
                        <h5 class="console-output-header" style="display:inline-block;margin-left:0px;">
                            Request
                        </h5>
                        <div class="form-group" style="display: inline;" onChange="fillWithSampleData();">
                            <select class="form-control" id="req-type" style="display: inline;width: 100px;">
                                <option value="JSON">JSON</option>
                                <option value="cURL">cURL</option>
                                <option value="C#">C# SDK</option>
                                <option value="PHP">PHP SDK</option>
                                <option value="Python">Python SDK</option>
                                <option value="Ruby">Ruby SDK</option>
                                <option value="Java">Java SDK</option>
                                <option value="JS">JS SDK</option>
                            </select>
                        </div>
                        <div style="display:inline-block;float:right;" class="btn-group">
                            <button class="btn btn-link demo-console-btn copy-btn" type="submit" onClick="copyToClipboard('#demo-console-input');">
                                <i class="glyphicon glyphicon-copy" title="Copy"></i>
                            </button>
                            <button class="btn btn-link demo-console-btn">
                                <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/" target="_blank">
                                    <i class="glyphicon glyphicon-list-alt" title="Docs"></i>
                                </a>
                            </button>
                            <button class="btn btn-primary" type="button" onClick="ApiRequest();" style="display:block;">
                                Submit
                            </button>
                        </div>
                    </div>
                    <div class="code-snippet reqScroll" id="demo-console-req" style="height:400px;">
                        <pre id="demo-console-input">{ }</pre>
                    </div>
                </div>
                <!-- response output -->
                <div class="col-md-6 console-res-container api-console-output" id="demo-console-res">
                    <div class="row" style="margin-top:15px;margin-left:10px;margin-right:10px;">
                        <h5 class="console-output-header" style="display:inline-block;margin-left:0px;">
                            Response
                        </h5>
                        <div style="display:inline-block;float:right;" class="btn-group">
                            <button class="btn btn-link demo-console-btn copy-btn" type="submit" onClick="copyToClipboard('#demo-console-output');">
                                <i class="glyphicon glyphicon-copy"></i>
                            </button>
                            <button class="btn btn-link demo-console-btn">
                                <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/TransactionModel/" target="_blank">
                                    <i class="glyphicon glyphicon-list-alt"></i>
                                </a>
                            </button>
                        </div>
                    </div>
                    <div class="code-snippet respScroll" style="height:400px;">
                        <div class="loading-pulse" style="display: none;"></div>
                        <pre id="demo-console-output">{ }</pre>
                    </div>
                </div>
                <!-- end response output -->
            </div>
            <!-- end api details row-->
        </div>
        <!-- end map & api details container-->
    </div>
    <!-- end demo container -->
    <script src="/public/js/vendor/jquery-2.2.4.min.js"></script>
    <script src="https://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.18/jquery-ui.min.js"></script>
    <script src="/public/js/avaMap.js"></script>
    <script src="/public/js/map-infobubble.js"></script> 
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=&callback=loadMap"></script>
</body>