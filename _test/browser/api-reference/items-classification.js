const deepEqual = require('../helpers/deepEqual');

const NUMAPIS = 4;
const NUM_MODELS = 11;
let expectedNumberOfApiEndpoints;


module.exports = {
    'before': function(browser) {
        browser.maximizeWindow();
        navigationBar = browser.page.navigationBar();
    },

    'after': function(browser) {
        browser.end();
    },
    'API Reference: Item Classifcation: v2 (verify number of models)': function(browser) {
        // NOTE: THESE NOW ALL EXIST ON SUB 'TAG' PAGES

        const expectedNumberOfSubTags = 7;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/item-classification/v2/models/')
            .assert.elementNumTimes('.model-link', NUM_MODELS, 'model links')
            // .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    },
    'API Reference: Item Classifcation: v2 (model page contents)': function(browser) {
        expectedNumberOfApiEndpoints = 6;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/avatax/account/soap/methods/isAuthorized/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    }
};
