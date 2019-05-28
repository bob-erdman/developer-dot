const deepEqual = require('../helpers/deepEqual');

const NUMAPIS = 3;
let expectedNumberOfApiEndpoints;
let navigationBar;


module.exports = {
    'before': function(browser) {
        browser.maximizeWindow();
        navigationBar = browser.page.navigationBar();
    },

    'after': function(browser) {
        browser.end();
    },

    'API Reference: AvaTax: REST v1 (getTax fill sample data)': function(browser) {
        /* eslint-disable quotes */
        /* eslint-disable quote-props */
        const expectedRequest = {"Commit": "false", "Client": "AvaTaxSample", "CompanyCode": "CINC", "CustomerCode": "ABC4335", "DocCode": "INV001", "DocType": "SalesOrder", "DocDate": "2014-01-01", "Addresses": [{"AddressCode": "01", "Line1": "45 Fremont Street", "Line2": "Suite 100", "Line3": "ATTN Accounts Payable", "City": "Chicago", "Region": "IL", "Country": "US", "PostalCode": "60602"}], "Lines": [{"LineNo": "1", "DestinationCode": "01", "OriginCode": "02", "ItemCode": "N543", "TaxCode": "NT", "Description": "Red Size 7 Widget", "Qty": "1", "Amount": "10"}]};
        const expectedResponse = {"ResultCode": "Success", "DocDate": "2014-01-01", "Timestamp": undefined, "TotalAmount": "10", "TotalDiscount": "0", "TotalExemption": "10", "TotalTaxable": "0", "TotalTax": "0", "TotalTaxCalculated": "0", "TaxDate": "2014-01-01", "DocCode": "INV001", "TaxLines": [{"LineNo": "1", "TaxCode": "NT", "Taxability": "false", "BoundaryLevel": "Zip5", "Exemption": "10", "Discount": "0", "Taxable": "0", "Rate": "0", "Tax": "0", "TaxCalculated": "0", "TaxDetails": [{"Country": "US", "Region": "IL", "JurisType": "State", "JurisCode": "17", "Taxable": "0", "Rate": "0", "Tax": "0", "JurisName": "ILLINOIS", "TaxName": "IL STATE TAX"}]}], "TaxAddresses": [{"Address": "45 Fremont Street", "AddressCode": "01", "City": "Chicago", "Country": "US", "PostalCode": "60602", "Region": "IL", "TaxRegionId": "2062953", "JurisCode": "1703114000", "Latitude": "41.882921", "Longitude": "-87.629357"}], "date": undefined};
        /* eslint-enable quotes */
        /* eslint-enable quote-props */

        expectedNumberOfApiEndpoints = 8;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/avatax/rest/v1/methods/getTax/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);

        browser.page.endpointSummary()
            .navigateTo('#getTax-console')
            .navigateTo('#getTax-console-body .fill-sample-data')

            .getConsoleText('getTax', 'requestConsolePOST', function(req) {
                browser.assert.ok(deepEqual(req, expectedRequest),
                    "request for 'try it now' matches expected request");
            })

            .click('#getTax-console-body .submit')
            .getConsoleText('getTax', 'responseConsole', function(res) {
                browser.assert.ok(deepEqual(res, expectedResponse),
                    "response for 'try it now' matches expected response");
            });
    },
    'API Reference: AvaTax: REST v2 (verify number of endpoints)': function(browser) {
        // NOTE: THESE NOW ALL EXIST ON SUB 'TAG' PAGES

        expectedNumberOfApiEndpoints = 36;
        const expectedNumberOfSubTags = 7;

        const expectedRequest = {accountId: 123456789, confirmResetLicenseKey: true};

        browser
            .initialize(browser.globals.baseURL + '/api-reference/avatax/rest/v2/methods/Accounts/AccountResetLicenseKey/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints + expectedNumberOfSubTags);

        browser.page.endpointSummary()
            .navigateTo('#AccountResetLicenseKey-console')
            .navigateTo('#AccountResetLicenseKey-console-body .fill-sample-data')

            .getConsoleText('AccountResetLicenseKey', 'requestConsolePOST', function(req) {
                browser.assert.ok(deepEqual(req, expectedRequest),
                    "request for 'try it now' matches expected request");
            });

        // navbar for v2 has one extra assertion
        navigationBar
            .assert.elementNumTimes('@subtags', expectedNumberOfSubTags, 'navigationBar');
    },
    'API Reference: AvaTax: SOAP (verify number of endpoints)': function(browser) {
        expectedNumberOfApiEndpoints = 15;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/avatax/soap/methods/postTax/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    },
    'API Reference: AvaTax: BatchSvc SOAP (verify number of endpoints)': function(browser) {
        expectedNumberOfApiEndpoints = 13;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/avatax/batch/soap/methods/batchFetch/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    },
    'API Reference: AvaTax: AccountSvc SOAP (verify number of endpoints)': function(browser) {
        expectedNumberOfApiEndpoints = 6;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/avatax/account/soap/methods/isAuthorized/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    },
    'API Console: AvaTax: REST v2 Swagger Links': function(browser) {
        const endpointUrl = `${browser.globals.baseURL}/api-reference/avatax/rest/v2/methods/Companies/CompanyInitialize/`;

        browser
            .initialize(endpointUrl)
            .navigateTo('#CompanyInitialize-console')
            .assert.elementNumTimes('.v2Links > a', 2, 'Assert 2 Swagger UI Links');
            // .navigateToUrl('.v2Links > a', '#Companies_CompanyInitialize', /Companies\/CompanyInitialize/);
    }
};
