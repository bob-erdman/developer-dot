const deepEqual = require('../helpers/deepEqual');

module.exports = {
    // '@tags': ['SKIP'],

    'before': function(browser) {
        browser.maximizeWindow();
    },

    'after': function(browser) {
        browser.end();
    },

    'API Reference: AvaTax: REST v2 - API Console for ResolveAddressPost': function(browser) {
        const expectedResponse = {address: {textCase: 'Upper', line1: '2000 Main Street', city: 'Irvine', region: 'CA', country: 'US', postalCode: '92614'}};

        browser
            .initialize(browser.globals.baseURL + '/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddressPost/');

        browser.page.endpointSummary()
            .navigateTo('#ResolveAddressPost-console')
            .navigateTo('#ResolveAddressPost-console-body .fill-sample-data')
            .click('#ResolveAddressPost-console-body .submit')

            .getConsoleText('ResolveAddressPost', 'responseConsole', function(res) {
                browser.assert.ok(deepEqual(res.address, expectedResponse.address),
                    "response for 'try it now' matches expected response");
            });
    },
    'API Reference: AvaTax: REST v2 - API Console for ResolveAddress': function(browser) {
        // testing behavior on input
        browser
            .initialize(browser.globals.baseURL + '/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddress/')
            .navigateTo('#ResolveAddress-console')
            .navigateTo('#ResolveAddress-console-body')
            .setValue('input', 'PO Box 1')
            .getText('.code-snippet-plaintext', function(result) {
                browser.assert.ok(deepEqual(result.value, 'https://sandbox-rest.avatax.com/api/v2/addresses/resolve?line1=PO%20Box%201', 'API Endpoint populates properly'));
            })
            .getText('#ResolveAddress-console-body .console-req-container .code-snippet', function(result) {
                browser.assert.ok(deepEqual(result.value, "curl -X GET -H 'Accept: application/json' -H 'Authorization: Basic aHR0cHdhdGNoOmY=' 'https://sandbox-rest.avatax.com/api/v2/addresses/resolve?line1=PO%20Box%201'"), 'cURL populates properly');
            });
        // testing behavior on reset
        browser
            .click('#ResolveAddress-console-body span[type=reset]')
            .getText('.code-snippet-plaintext', function(result) {
                browser.assert.ok(deepEqual(result.value, 'https://sandbox-rest.avatax.com/api/v2/addresses/resolve'), 'API Endpoint resets properly');
            })
            .getText('#ResolveAddress-console-body .console-req-container .code-snippet', function(result) {
                browser.assert.ok(deepEqual(result.value, "curl -X GET -H 'Accept: application/json' -H 'Authorization: Basic aHR0cHdhdGNoOmY=' 'https://sandbox-rest.avatax.com/api/v2/addresses/resolve'"), 'cURL resets properly');
            })
            .setValue('input', 'PO Box 1')
            .getText('.code-snippet-plaintext', function(result) {
                browser.assert.ok(deepEqual(result.value, 'https://sandbox-rest.avatax.com/api/v2/addresses/resolve?line1=PO%20Box%201', 'API Endpoint populates properly'));
            })

        // testing behavior on backspace
        for (let index = 0; index < 'PO Box 1'.length; index++) {
            browser.keys(browser.Keys.BACK_SPACE);
        }

        browser
            .getText('.code-snippet-plaintext', function(result) {
                browser.assert.ok(deepEqual(result.value, 'https://sandbox-rest.avatax.com/api/v2/addresses/resolve'), 'API Endpoint clears when input is cleared');
            })
            .getText('#ResolveAddress-console-body .console-req-container .code-snippet', function(result) {
                browser.assert.ok(deepEqual(result.value, "curl -X GET -H 'Accept: application/json' -H 'Authorization: Basic aHR0cHdhdGNoOmY=' 'https://sandbox-rest.avatax.com/api/v2/addresses/resolve'"), 'cURL clears when input is cleared');
            });
    }
    // 'API Reference: AvaTax: REST v2 - API Console for ResolveAddress Submission': function(browser) {
    //     const expectedResponse = {
    //         "address": {
    //           "line1": "PO Box 1",
    //           "city": "Seattle",
    //           "region": "WA",
    //           "country": "United States",
    //           "postalCode": "98122"
    //         },
    //         "validatedAddresses": [
    //           {
    //             "addressType": "POBoxAddress",
    //             "line1": "PO BOX 1",
    //             "line2": "",
    //             "line3": "",
    //             "city": "SEATTLE",
    //             "region": "WA",
    //             "country": "US",
    //             "postalCode": "98111-0001",
    //             "latitude": 47.608781,
    //             "longitude": -122.336624
    //           }
    //         ],
    //         "coordinates": {
    //           "latitude": 47.608781,
    //           "longitude": -122.336624
    //         },
    //         "resolutionQuality": "NotCoded",
    //         "taxAuthorities": [
    //           {
    //             "avalaraId": "61",
    //             "jurisdictionName": "WASHINGTON",
    //             "jurisdictionType": "State",
    //             "signatureCode": "BVPJ"
    //           },
    //           {
    //             "avalaraId": "2986",
    //             "jurisdictionName": "KING",
    //             "jurisdictionType": "County",
    //             "signatureCode": "BVVZ"
    //           },
    //           {
    //             "avalaraId": "167796",
    //             "jurisdictionName": "SEATTLE",
    //             "jurisdictionType": "City",
    //             "signatureCode": "BVXK"
    //           }
    //         ]
    //     };
    //     browser
    //         .initialize(browser.globals.baseURL + '/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddress/')
    //         .navigateTo('#ResolveAddress-console')
    //         .navigateTo('#ResolveAddress-console-body')
    //         .setValue('input[name=line1]', 'PO Box 1')
    //         .setValue('input[name=city]', 'Seattle')
    //         .setValue('input[name=region]', 'Washington') // no abbreviation 
    //         .setValue('input[name=postalCode]', '98122')
    //         .navigateTo('input[name=country]')
    //         .setValue('input[name=country]', 'United States') // no abbreviation 
    //         .click('#ResolveAddress-console-body .submit')
    //         .getText('.console-res-container .code-snippet', function(result) {
    //             browser.assert.ok(deepEqual(result.value, expectedResponse), 'Submission without abbreviations is successful');
    //         });
    // },
    // 'API Reference: AvaTax: REST v2 - API Console for ResolveAddress Submission with Abbreviation': function(browser) {
    //     const expectedResponse = {
    //         "address": {
    //           "line1": "PO Box 1",
    //           "city": "Seattle",
    //           "region": "WA",
    //           "country": "United States",
    //           "postalCode": "98122"
    //         },
    //         "validatedAddresses": [
    //           {
    //             "addressType": "POBoxAddress",
    //             "line1": "PO BOX 1",
    //             "line2": "",
    //             "line3": "",
    //             "city": "SEATTLE",
    //             "region": "WA",
    //             "country": "US",
    //             "postalCode": "98111-0001",
    //             "latitude": 47.608781,
    //             "longitude": -122.336624
    //           }
    //         ],
    //         "coordinates": {
    //           "latitude": 47.608781,
    //           "longitude": -122.336624
    //         },
    //         "resolutionQuality": "NotCoded",
    //         "taxAuthorities": [
    //           {
    //             "avalaraId": "61",
    //             "jurisdictionName": "WASHINGTON",
    //             "jurisdictionType": "State",
    //             "signatureCode": "BVPJ"
    //           },
    //           {
    //             "avalaraId": "2986",
    //             "jurisdictionName": "KING",
    //             "jurisdictionType": "County",
    //             "signatureCode": "BVVZ"
    //           },
    //           {
    //             "avalaraId": "167796",
    //             "jurisdictionName": "SEATTLE",
    //             "jurisdictionType": "City",
    //             "signatureCode": "BVXK"
    //           }
    //         ]
    //     };
    //     // testing that console accepts abbreviations
    //     browser
    //         .initialize(browser.globals.baseURL + '/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddress/')
    //         .navigateTo('#ResolveAddress-console')
    //         .navigateTo('#ResolveAddress-console-body')
    //         .setValue('input[name=line1]', 'PO Box 1')
    //         .setValue('input[name=city]', 'Seattle')
    //         .setValue('input[name=region]', 'WA') // abbreviation
    //         .setValue('input[name=postalCode]', '98122')
    //         .navigateTo('input[name=country]')
    //         .setValue('input[name=country]', 'US') // abbreviation
    //         .click('#ResolveAddress-console-body .submit')
    //         .getText('.console-res-container .code-snippet', function(result) {
    //             browser.assert.ok(deepEqual(result.value, expectedResponse), 'Submission with abbreviations is successful');
    //         });   
    // }
};
