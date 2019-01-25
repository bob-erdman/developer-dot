var isIntlTransaction = false;

var fixApiRefNav = function() {
    if ($('#the-nav li').length >= 22) {
        $('#the-nav').data('offset-bottom', '160');
    }
};

var fixDropDownMenuLargePosition = function() {
    setTimeout(function() {
        $('.dropdown-large').each(function() {
            var left = $(this).position().left;

            $(this).find('.dropdown-menu-large').css('left', left);
        });
    }, 100);
};

function getCompareDate() {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('');
}

/************************************************************************
**   SAMPLE DATA Functions: Build the sample data in the correct language
**   Langauges: JSON, C#, PHP, Python, Ruby, Java, JavaScript
************************************************************************/

// HELPER: build lines with correct template for given language
function lineBuilder(reqType) {
    let lines = reqType === 'JSON' || 'JS' ? [] : ``;
    let hsCode = '';
    let mass = '';
    let unit = '';
    let lineNum = 1;
    const allProducts = $('input[type=checkbox][name=product]:checked');   

    // build line for each selected products
    allProducts.each(function () {
        const taxCode = $(this).val();
        const amount = $('#' + $(this).attr('id') + '-amount').val();
        const description = $(this).attr('description');

        // If this is an international transaction, get the appropriate HS Code
        // for the destination country.
        if(isIntlTransaction) {
            let destCountry = $('input[type=radio][name=address]:checked')[0].attributes['country'].value;
            hsCode = $(this).attr('hsCodeTo'+ destCountry);
            mass = $(this).attr('mass');
            unit = $(this).attr('unit');
        }

        // pick the correct line template
        switch (reqType) {
            case 'JSON':
            case 'JS':
                let o ={
                    "number": lineNum,
                    "amount": amount,
                    "taxCode": taxCode,
                    "description": description                    
                };
                
                // Add HS Code if applicable.
                if (hsCode.length) {
                    Object.assign(o, {
                        "hsCode": hsCode
                    });
                }

                // Add Mass and UOM if applicable.
                if (mass.length && unit.length) {
                    o["parameters"] = {
                        "Mass": mass,
                        "Mass.UOM": unit
                    };
                }

                lines.push(o);
                break;           
            case 'Ruby':            
                lines += `{
            amount: "${amount}",
            description: "${description}",
            number: "${lineNum}",
            taxCode: "${taxCode}"`;
                lines += hsCode.length ? "," : "";
                lines += hsCode.length ? `
            hsCode: "${hsCode}"` : "" 
                lines += (mass.length && unit.length) ? "," : "";
                lines += (mass.length && unit.length) ?
                `   
            parameters: {
                Mass: "${mass}",
                Mass.UOM: "${unit}"
            }` : "";                    
                lines += `
        }`;
                if (lineNum !== allProducts.length) lines += ',\n        ';                
                break;
            case 'Python':
                lines += `{
            'amount': '${amount}',
            'description': '${description}',
            'number': '${lineNum}',
            'taxCode': '${taxCode}'`;
                    lines += hsCode.length ? "," : "";
                    lines += hsCode.length ? `
            'hsCode': '${hsCode}'` : "" 
            lines += (mass.length && unit.length) ? "," : "";
            lines += (mass.length && unit.length) ?
            `   
            'parameters': {
                'Mass': '${mass}',
                'Mass.UOM': '${unit}'
            }` : "";                    
        lines += `
        }`;
        
                if (lineNum !== allProducts.length) lines += ',\n        ';
                break;
            case 'C#':
                lines += `new LineItemModel() 
        {
            number = ${lineNum},
            quantity = 1,
            amount = ${amount},
            taxCode = "${taxCode}"`;
                    lines += hsCode.length ? "," : "";
                    lines += hsCode.length ? `
            hsCode: "${hsCode}"` : "" 
                    lines += (mass.length && unit.length) ? "," : "";
                    lines += (mass.length && unit.length) ?
                `   
            parameters: {
                Mass: "${mass}",
                Mass.UOM: "${unit}"
            }` : "";                                    
                if (lineNum !== allProducts.length) lines += ',\n        ';
                    
                lines += `
        }`;                
                if (lineNum !== allProducts.length) lines += ',\n        ';
                break;
            case 'PHP':
                lines += `->withLine(${amount}, ${lineNum}, null, ${taxCode})`; 

                if (lineNum !== allProducts.length) lines += '\n    ';
                break;
            case 'Java':
            //.withLine("1", new BigDecimal(900.0), new BigDecimal(1), "PF050099", null, null, null, null, null, "1806101500")
                lines += `.withLine("${lineNum}", new BigDecimal(${amount}), null, "${taxCode}", null, null, null, null, null,` 
                lines += hsCode.length ? `"${hsCode}")` : `"null")`; 
                lines += (mass.length && unit.length) ? 
                `\n    .withLineParameter("Mass", "${mass}")\n    .withLineParameter("Mass.UOM", "${unit}")` : ``;
                if (lineNum !== allProducts.length) lines += '\n    ';
                break;
            default:
                break;
        }
       
        lineNum++
    });

    return lines;
}

// HELPER: build address with correct template for given language
function addressBuilder(reqType, addressName, prefix) {
    const addressArray = $(`input[type=radio][name=${addressName}]:checked`).val().split(',');
    let address;

    switch (reqType) {
        case 'JSON':
            address = {
                "line1": addressArray[0],
                "city": addressArray[1],
                "region": addressArray[2],
                "country": addressArray[3],
                "postalCode": addressArray[4],
            };
            break;
        case 'JS':
        case 'Ruby':
            address = `{
            line1: "${addressArray[0]}",
            city: "${addressArray[1]}",
            region: "${addressArray[2]}",
            country: "${addressArray[3]}",
            postalCode: ${addressArray[4]}
        }`;
            break;
        case 'Python':
            address = `{
            'city': '${addressArray[1]}',
            'country': '${addressArray[3]}',
            'line1': '${addressArray[0]}',
            'postalCode': '${addressArray[4]}',
            'region': '${addressArray[2]}'
        }`;
            break;
        case 'C#':
            address = `{
            line1 = "${addressArray[0]}",
            city = "${addressArray[1]}",
            region = "${addressArray[2]}",
            country = "${addressArray[4]}",
            postalCode = "${addressArray[3]}"
        }`;
            break;
        case 'PHP':
            address = `->withAddress('${prefix}', '${addressArray[0]}', null, null, '${addressArray[1]}', '${addressArray[2]}', '${addressArray[4]}', '${addressArray[3]}')`;
            break;
        case 'Java':
            address = `.withAddress(${prefix}, "${addressArray[0]}", null, null, "${addressArray[1]}", "${addressArray[2]}", "${addressArray[4]}", "${addressArray[3]}")`;
            break;
        default:
            break;
    }

    return address;
}

// HELPER: check if shipFrom address is selected
function shipFromChecked() {
    const checked = $('input[type=radio][name=srcAddress]:checked').length > 0;
    isIntlTransaction = checked && 
        ($('input[type=radio][name=srcAddress]:checked').attr('country') != $('input[type=radio][name=address]:checked').attr('country'));
    return checked;
}

function jsonSampleData() {
    const shipFromSelected = shipFromChecked();
    const shipToAddress = addressBuilder('JSON', 'address');
    let address;
    let sampleData;
    let today = new Date();

    // check if there is a shipTo address selected
    if(shipFromSelected) {
        const shipFromAddress = addressBuilder('JSON', 'srcAddress');

        address = {
            "shipTo": shipToAddress,
            "shipFrom": shipFromAddress,
        };
    }
    else {
        address = {
            "singleLocation": shipToAddress,
        };
    }

    sampleData = {
        "lines": lineBuilder('JSON'),
        "type": "SalesOrder",
        "companyCode": "DEMOPAGE",
        "date": today.toISOString().split('T')[0], 
        "customerCode": "ABC",
        "addresses": address
    };

    //Add DDP if the transaction is cross-border.
    if(isIntlTransaction) {
        sampleData["isSellerImporterOfRecord"] = true;
    }

    //sampleData.lines = lineBuilder('JSON');

    return sampleData;
}

function curlSampleData() {
    const json = JSON.stringify(jsonSampleData(), null, 2)
    const sampleData = `-X POST
-H 'Accept: application/json'
-H 'Authorization: Basic aHR0cHdhdGNoOmY='
-H 'Content-Type: application/json'
--data '${json}'
https://sandbox-rest.avatax.com/api/v2/transactions/create`;
    
    return sampleData;
}

function cSharpSampleData() {
    const lines = lineBuilder('C#');
    const shipToAddress = addressBuilder('C#', 'address');;
    const shipFromSelected = shipFromChecked();

    // check if shipFrom/To addresses
    if(shipFromSelected) {
        const shipFromAddress = addressBuilder('C#', 'srcAddress');
        
        address = `shipFrom = new AddressLocationInfo()
        ${shipFromAddress},
        shipTo = new AddressLocationInfo()
        ${shipToAddress}`;
    } else {
        address = `singleLocation = new AddressLocationInfo()
        ${shipToAddress}`;
    }

    // build sample data for c#
    const sampleData = `// Create AvaTaxClient
var client = new AvaTaxClient("MyTestApp", "1.0", Environment.MachineName, AvaTaxEnvironment.Sandbox).WithSecurity("MyUsername", "MyPassword");
// Setup transaction model
var createModel = new CreateTransactionModel()
{
    type = DocumentType.SalesOrder,
    companyCode = "DEMOPAGE",${isIntlTransaction ? `\n    isSellerImporterOfRecord: true,`:``}
    date = DateTime.Today,
    customerCode = "ABC", 
    lines = new List<LineItemModel>() 
    {
        ${lines}
    },
    addresses = new AddressesModel() 
    {
        ${address}
    }
}
// Create transaction
var transaction = client.CreateTransaction(null, createModel);`;

    return sampleData;
}

function phpSampleData() {
    const lines = lineBuilder('PHP');
    let address;
    const shipFromSelected = shipFromChecked();

    // check if shipFrom/To addresses
    if(shipFromSelected) {
        const shipFromAddress = addressBuilder('PHP', 'srcAddress', 'ShipFrom');
        const shipToAddress = addressBuilder('PHP', 'address', 'ShipTo');

        address = shipFromAddress + '\n    ' + shipToAddress
    } else {
        address = addressBuilder('PHP', 'address', 'SingleLocation');
    }

    // build sample data for PHP
    const sampleData = `// Create a new client
$client = new Avalara\AvaTaxClient('phpTestApp', '1.0', 'localhost', 'sandbox');
$client->withSecurity('myUsername', 'myPassword’);
// Create a simple transaction using the fluent transaction builder
$tb = new Avalara\\TransactionBuilder($client, “DEMOPAGE", Avalara\\DocumentType::C_SALESORDER, 'ABC');
$t = $tb${address}
    ${lines}
    ->create();
    `;

    return sampleData
}

function pythonSampleData() {
    const lines = lineBuilder('Python');
    const shipFromSelected = shipFromChecked();
    const shipToAddress = addressBuilder('Python', 'address');

    let address;

    if (shipFromSelected){
        const shipFromAddress = addressBuilder('Python', 'srcAddress');

        address = `'ShipFrom': ${shipFromAddress},
        'ShipTo': ${shipToAddress}`;
    } else {
        address = `'SingleLocation': ${shipToAddress}`;
    }
    
    const sampleData = `#Create a new AvaTaxClient object
    client = AvataxClient('my test app',
    'ver 0.0',
    'my test machine',
    'sandbox')
#Add your credentials
client = client.add_credentials('USERNAME/ACCOUNT_ID', 'PASSWORD/LICENSE_KEY')
#Build your tax document
tax_document = {
    'addresses': {
        ${address}
    },     
    'companyCode': 'DEMO PAGE', ${isIntlTransaction ? `\n    'isSellerImporterOfRecord': 'true',`:``}
    'customerCode': 'ABC',
    'date': '2017-04-12',
    'lines': [
        ${lines}
    ],
    'type': 'SalesOrder'
}
#Create transaction
transaction_response = client.create_transaction(tax_document)
print(transaction_response.text())`;
    
    return sampleData;
}

function rubySampleData() {
    const lines = lineBuilder('Ruby');
    const shipFromSelected = shipFromChecked(); 
    const shipToAddress = addressBuilder('Ruby', 'address');
    let address;
  
    if (shipFromSelected) {
        const shipFromAddress = addressBuilder('Ruby', 'srcAddress');

        address = `ShipFrom: ${shipFromAddress},
        ShipTo: ${shipToAddress}`;
    } else {
        address = `SingleLocation: ${shipToAddress}`;
    }

    const sampleData = `credentials = YAML.load_file(File.expand_path('../credentials.yaml', __FILE__))
AvaTax.configure do |config|
    begin
    credentials = YAML.load_file(File.expand_path('../credentials.yaml', __FILE__))
    config.endpoint = credentials['endpoint']
    config.username = credentials['username']
    config.password = credentials['password']
    rescue
    config.endpoint = 'https://sandbox-rest.avatax.com'
    config.username = ENV['SANDBOX_USERNAME']
    config.password = ENV['SANDBOX_PASSWORD']
    end
end
@client = AvaTax::Client.new(:logger => true)
createTransactionModel = {
    type: "SalesOrder",
    companyCode: "12670",
    date: "2017-06-05",
    customerCode: "ABC", ${isIntlTransaction ? `\n    isSellerImporterOfRecord: "true",`:``}
    addresses: {
       ${address} 
    },
    lines: [
        ${lines}
    ]
}
transaction = @client.create_transaction(createTransactionModel)`;

    return sampleData;
}

function javaSampleData() {
    const lines = lineBuilder('Java');
    let address;
    const shipFromSelected = shipFromChecked();

    // check if shipFrom/To addresses
    if(shipFromSelected) {
        const shipFromAddress = addressBuilder('Java', 'srcAddress', 'TransactionAddressType.ShipFrom');
        const shipToAddress = addressBuilder('Java', 'address', 'TransactionAddressType.ShipTo');

        address = shipFromAddress + '\n    ' + shipToAddress;
    } else {
        address = addressBuilder('Java', 'address', 'TransactionAddressType.SingleLocation');
    }

    const sampleData = `//creates our AvaTaxClient
AvaTaxClient client = new AvaTaxClient("Test", "1.0", "localhost", AvaTaxEnvironment.Sandbox)
    .withSecurity("MyUsername", "MyPassword");
// build and create transaction
TransactionModel transaction = new TransactionBuilder(client, "DEFAULT", DocumentType.SalesOrder, "ABC")
    ${address}
    ${lines}
    .Create();`;

    return sampleData
}

function javascriptSampleData() {
    const lines = lineBuilder('JS');
    const shipFromSelected = shipFromChecked(); 
    const shipToAddress = addressBuilder('Ruby', 'address');
    let today = new Date();
    let address;
  
    if (shipFromSelected) {
        const shipFromAddress = addressBuilder('Ruby', 'srcAddress');

        address = `ShipFrom: ${shipFromAddress},
        ShipTo: ${shipToAddress}`;
    } else {
        address = `SingleLocation: ${shipToAddress}`;
    }

    let config = {
        appName: "your-app",
        appVersion: "1.0",
        environment: "sandbox",
        machineName: "your-machine-name"
    };

    const sampleData = `const config = ${JSON.stringify(config, null, 4)};
    
const creds = {
    username: "<your-username>",
    password: "<your-password>"
};
    
var client = new Avatax(config).withSecurity(creds);
const taxDocument = {
    type: "SalesOrder",
    companyCode: "abc123",
    date: ${today.toISOString().split('T')[0]},
    customerCode: "ABC", ${isIntlTransaction ? `\n    isSellerImporterOfRecord: "true",`:``}
    addresses: {
        ${address}
    },
    lines: 
        ${JSON.stringify(lines, null, 4)}
}
    
return client.createTransaction({ model: taxDocument })
    .then(result => {
        // response tax document
        console.log(result);
    });`;

    return sampleData
}

//
// MAIN Sample Data function: populates request console
//
function fillWithSampleData() { 
    const noAddress = $('input[type=radio][name=address]:checked').length === 0;

    if (noAddress) {
        return;
    }
    
    const reqType = $('#req-type').val();
    let sampleData;

    switch (reqType) {
        case 'cURL':
            sampleData = curlSampleData();
            break;
        case 'C#':
            sampleData = cSharpSampleData();
            break;
        case 'PHP':
            sampleData = phpSampleData(); 
            break;
        case 'Python':
            sampleData = pythonSampleData();
            break;
        case 'Ruby':
            sampleData = rubySampleData();
            break;
        case 'Java':
            sampleData = javaSampleData();
            break;
        case 'JS':
            sampleData = javascriptSampleData();
            break;
        case 'JSON':
            sampleData = JSON.stringify(jsonSampleData(), null, 2);
            break;
        default:
            sampleData = '{ }';
            break;
    }

    $('#demo-console-input').empty().text(sampleData);
};
/***************** END SAMPLE DATA Functions ****************************/


/************************************************************************
**   INFOBOX Functions: Build infobox on map
************************************************************************/

// ...no other way to keep track of state...
let showInfobox = true;

function hideInfobox() {
    $(".demo-infobox").css('display', 'none');
    $(".demo-infobox").addClass('hidden');
    showInfobox = false
}

function buildInfoboxHTML(body) {
    const summaryArray = body.summary;

    let infoboxHTML;

    let countryTax = 0.00;
    let stateTax = 0.00; 
    let countyTax = 0.00; 
    let cityTax = 0.00; 
    let specialTax = 0.00;
    let dutiesTax = 0.00;          
    
    if (summaryArray.length > 0) {
        for(let i = 0; i < summaryArray.length; i++) {
            const item = summaryArray[i];
            switch (item.jurisType) {
                case 'Country':
                    item.taxType == 'LandedCost' ? dutiesTax += item.taxCalculated : countryTax += item.taxCalculated;
                    break;
                case 'State':
                    stateTax += item.taxCalculated;
                    break;
                case 'County':
                    countyTax += item.taxCalculated;
                    break;
                case 'City':
                    cityTax += item.taxCalculated;
                    break;
                case 'Special':
                    specialTax += item.taxCalculated;
                    break;
                default:
                    break;
            }
        };
    }
    
    infoboxHTML = `
        AvaTax's engine can calculate tax down to the roof-top level. In this case, 
        AvaTax returned ${body.totalTax == 0 ? 'a tax-free calculation. This transaction has zero applicable taxes.' : ':'}`
    if(body.totalTax > 0) {
    infoboxHTML += `
        <ul>
        <li>• total tax <span class="demo-tax-totals" style="display:block; float:right;">$${body.totalTax.toFixed(2)}</span></li>
        ${countryTax != 0 ? '<li>• country tax <span class="demo-tax-totals" style="display:block; float:right;">$'+countryTax.toFixed(2)+'</span></li>' : ''}
        ${dutiesTax != 0 ? '<li>• duties and tariffs <span class="demo-tax-totals" style="display:block; float:right;">$'+dutiesTax.toFixed(2)+'</span></li>' : ''}
        ${stateTax != 0 ? '<li>• state tax <span class="demo-tax-totals" style="display:block; float:right;">$'+stateTax.toFixed(2)+'</span></li>' :''}
        ${countyTax != 0 ? '<li>• county tax <span class="demo-tax-totals" style="display:block; float:right;">$'+countyTax.toFixed(2)+'</span></li>' : ''}
        ${cityTax != 0 ? '<li>• city tax <span class="demo-tax-totals" style="display:block; float:right;">$'+cityTax.toFixed(2)+'</span></li>' : ''}
        ${specialTax != 0 ? '<li>• special taxing districts <span class="demo-tax-totals" style="display:block; float:right;">$'+specialTax.toFixed(2)+'</span></li>' : ''}  
        </ul>
        Feel free to continue tinkering with the options to the left to test 
        the flexibility of the AvaTax API. Or, if you've seen enough, 
        <a href='https://developer.avalara.com/avatax/' target='_blank'>sign up for a 60-day API trial</a> 
        and production account.
    `;
    }
    return infoboxHTML;
}
/***************** END INFOBOX Functions ********************************/


/************************************************************************
**  API REQUEST Functions: Send CreateTransaction request through proxy
************************************************************************/
const proxy = {
    "route": "https://xp0wfn7roi.execute-api.us-west-2.amazonaws.com/production/proxy",
    "key": {
        "name": "api-key",
        "location": "v2-devdot-keys/devdot-proxy-key"
    }
}

function ApiRequest() {
    // clear the console output/infobox and display loading-pulse
    $("#demo-console-output").empty();
    $(".loading-pulse").css('display', 'block');
    if (showInfobox) {
        $("#demo-infobox-text").empty();
        $("#demo-infobox-header").html('Calculating...');
    }
    
    const data = jsonSampleData();
    const [bucket, key] = proxy.key.location.split('/');

    const keyBucket = new AWS.S3({params: {Bucket: bucket, Key: key}});
    return keyBucket.makeUnauthenticatedRequest('getObject', {}).promise()
    .then((bucketRes) => {
        return fetch(proxy.route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                apiKey: bucketRes.Body.toString(),
                method: 'POST',
                route: 'https://sandbox-rest.avatax.com/api/v2/transactions/create?$include=summaryOnly',
                queryString: {},
                pathParams:{},
                postBody: data
            })
        })
        .then((rawApiResponse) => {
            return rawApiResponse.json().then((body) => {
                $(".loading-pulse").css('display', 'none');
                $('#demo-console-output').text(JSON.stringify(body, null, 2));
                
                if (showInfobox) {
                    $("#demo-infobox-header").html('Result');
                    const infoboxHTML = buildInfoboxHTML(body);
                    $("#demo-infobox-text").html(infoboxHTML);
                }
               
                //TODO handle errors
                // $('#console-output').text("HTTP Error: " + body.status + "\n\n" + JSON.stringify(result, null, 2));

                return {
                    status: rawApiResponse.status.toString(),
                    statusMessage: rawApiResponse.statusText,
                    body: body,
                };
            });
        });
    })
}
/***************** END API REQUEST Functions ****************************/

/************************************************************************
**   GENERAL Demo Page Functions
************************************************************************/
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function updateAddress() {
    const src = $('input[type=radio][name=srcAddress]:checked');
    const dest = $('input[type=radio][name=address]:checked');
    const destLat     = dest.attr('lat') ? dest.attr('lat') : null;
    const destLong    = dest.attr('long') ? dest.attr('long') : null;
    // check if both address are in the US
    const destType = dest.attr('addressType') === 'national';
    const srcType = src.attr('addressType') === 'national';
    const usAddresses = destType && srcType;
    
    let srcLat = src.attr('lat');
    let srcLong = src.attr('long');

    // check that src exists and src != dest
    if (!srcLat || (srcLat === destLat && srcLong === destLong)) {
        srcLat = null;
        srcLong = null;
    }

    GetMapWithLine(destLat, destLong, srcLat, srcLong, usAddresses, showInfobox);
    fillWithSampleData();
}
/***************** END GENERAL Functions *******************************/

$(document).ready(function() {
    fixApiRefNav();
    fixDropDownMenuLargePosition();

    $('[webinar-hide-before]').each(function() {
      if ($(this).attr('webinar-hide-before') <= getCompareDate()) {
        $(this).show();
      }
    });

    $('[webinar-hide-after]').each(function() {
      if ($(this).attr('webinar-hide-after') >= getCompareDate()) {
        $(this).show();
      }
    });

    // When we show the section nav on xs/sm, clear the main content below the nav
    $('.sm-section-nav').on('shown.bs.dropdown', function() {
        $('main').addClass('section-nav-open');
    });
    // When we hide the section nav on xs/sm, reset the main content next to the nav
    $('.sm-section-nav').on('hidden.bs.dropdown', function() {
        $('main').removeClass('section-nav-open');
    });
});
