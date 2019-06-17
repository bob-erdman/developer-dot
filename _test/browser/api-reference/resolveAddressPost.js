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
            .getText(".code-snippet-plaintext", function(result) { 
                browser.assert.ok(deepEqual(result.value, 'https://sandbox-rest.avatax.com/api/v2/addresses/resolve?line1=PO Box 1'), 'API Endpoint populates properly');
            })
            .getText("#ResolveAddress-console-body .console-req-container .code-snippet", function(result) { 
                browser.assert.ok(deepEqual(result.value, "curl -X GET -H 'Accept: application/json' -H 'Authorization: Basic aHR0cHdhdGNoOmY=' https://sandbox-rest.avatax.com/api/v2/addresses/resolve?line1=PO Box 1"), 'cURL populates properly');
            });
        // testing behavior on reset
        browser
            .click('#ResolveAddress-console-body span[type=reset]')
            .getText(".code-snippet-plaintext", function(result) { 
                browser.assert.ok(deepEqual(result.value, 'https://sandbox-rest.avatax.com/api/v2/addresses/resolve'), 'API Endpoint resets properly');
            })
            .getText("#ResolveAddress-console-body .console-req-container .code-snippet", function(result) { 
                browser.assert.ok(deepEqual(result.value, "curl -X GET -H 'Accept: application/json' -H 'Authorization: Basic aHR0cHdhdGNoOmY=' https://sandbox-rest.avatax.com/api/v2/addresses/resolve"), 'cURL resets properly');
            })
            .setValue('input', 'PO Box 1')
        
        // testing behavior on backspace
        for (let index = 0; index < 'PO Box 1'.length; index++) {
            browser.keys(browser.Keys.BACK_SPACE);
        }
        
        browser
            .getText(".code-snippet-plaintext", function(result) { 
                browser.assert.ok(deepEqual(result.value, 'https://sandbox-rest.avatax.com/api/v2/addresses/resolve'), 'API Endpoint clears when input is cleared');
            })
            .getText("#ResolveAddress-console-body .console-req-container .code-snippet", function(result) { 
                browser.assert.ok(deepEqual(result.value, "curl -X GET -H 'Accept: application/json' -H 'Authorization: Basic aHR0cHdhdGNoOmY=' https://sandbox-rest.avatax.com/api/v2/addresses/resolve"), 'cURL clears when input is cleared');
            })
    }
};
