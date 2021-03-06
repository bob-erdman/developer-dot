/* eslint no-console:0 */

import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

function writeHtml(dir, fileName, html) {
    mkdirp(dir, (err) => {
        if (err) {
            throw err;
        }

        try {
            fs.writeFileSync(path.join(dir, `${fileName}.html`), html);
        } catch (e) {
            console.log(`\x1b[31mFailed to write enum ${fileName}: ${e} \x1b[0m`);
        }
    });
}

function tableBody(attr) {
    const values = {};
    const enums = attr['x-enum-metadata'] ? attr['x-enum-metadata'].values : attr.enum;

    for (let i = 0; i < attr.enum.length; i++) {
        const e = enums[i];
        const name = e.name || e;

        values[name] = e.summary || 'n/a ';
    }

    return Object.keys(values).reduce((html, k) => {
        let temp = values[k].split('`');

        temp.map((w) => {
            if (!(/\s/g).test(w)) {
                temp[temp.indexOf(w)] = '<code class="markdown">' + w + '</code>';
            }
        });

        temp = temp.join(' ');

        return `${html}
        <tr>
            <td>${k}</td>
            <td>${temp}</td>
        </tr>`;
    }, '');
}

function titleLinks(parent, name) {
    const sections = parent.split(' > ');
    const first = sections.shift();
    let html = `<a href="../../${first}">${first}</a> > `;

    sections.reduce(function(str, section) {
        const l = `${str}${section}`;

        html += `<a href="../../${l}">${section}</a> > `;
        return l;
    }, `${first} > `);

    return `<h1>${html}${name}</h1>`;
}

function appendEnum(info, attr) {
    const enumName = attr['x-enum-type'] || info.name;
    const fileName = attr['x-enum-type'] || `${info.def} > ${info.name}`;

    const html = `---
layout: default
title: "${enumName} | ${info.apiName}"
${(attr.description) ? `ogdescription: "${(attr.description || '').replace(/"/g, "'")}"` : ''}
api_console: 1
api_name: ${info.apiName}
nav: apis
product: ${info.product}
doctype: api_references
endpoint_links: []
---

${attr['x-enum-type'] ?
`<h1>${attr['x-enum-type']}</h1>` :
titleLinks(info.def, enumName)}

<div class="enum-summary">
    <h5>${info.enumType}</h5>

    ${(attr.description) ? `
    <h2 id="description">Description</h2>
    {{"${attr.description.replace(/"/g, "'")}" | markdownify}}` : ''
    }

    <table class="styled-table">
        <thead>
            <tr>
                <th>Value</th>
                <th>Description</th>
            </tr>
        </thead>
        <body>
            ${tableBody(attr)}
        </body>
    </table>
    <br>
</div>

{% include disqus.html %}`;

    writeHtml(path.join(info.dir, 'enums'), fileName, html);
}

function buildEnumFromModel(info, model) {
    let props = {};

    if (model.type === 'object' || model.properties) {
        props = model.properties;
    } else if (model.type === 'string' || model.enum) {
        props[info.def] = model;
    }

    Object.keys(props).forEach((prop) => {
        if (props[prop].enum) {
            info.name = prop;
            info.enumType = 'Request Body Parameter - Enum';
            appendEnum(info, props[prop]);
        }
    });
}

function buildEnumFromMethod(info, method) {
    if (!method.apiEndpoints) {
        return;
    }

    method.apiEndpoints.forEach((endpoint) => {
        let params;
        const doit = (param) => {
            if (params[param].enum) {
                info.def = endpoint.operationId.replace(/\s/g, '');
                info.name = param;
                appendEnum(info, params[param]);
            }
        };

        params = endpoint.pathParams || {};
        info.enumType = 'URL Path Parameter - Enum';
        Object.keys(params).forEach(doit);
        params = endpoint.queryString || {};
        info.enumType = 'Query String Parameter - Enum';
        Object.keys(params).forEach(doit);
    });
}

export {
    buildEnumFromModel,
    buildEnumFromMethod
};
