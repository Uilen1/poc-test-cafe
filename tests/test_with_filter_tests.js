import XPathSelector from '../utils/xpath_selector';

fixture`Use XPath selectors - IS RUN`
    .meta({ severity: 'high', repeatDaily: true })
    .page('https://devexpress.github.io/testcafe/example/');

test.meta({ device: 'web', skip: false })
    ('Click checkboxes', async t => {
        const firstCheckbox = XPathSelector('//input[@type="checkbox"]');
        const secondCheckbox = XPathSelector('//input[@type="checkbox"]').nth(1);

        await t
            .click(firstCheckbox)
            .click(secondCheckbox);
    });

fixture`Use XPath selectors - NOT RUN`
    .meta({ severity: 'high', repeatDaily: false })
    .page('https://devexpress.github.io/testcafe/example/');

test.meta({ device: 'web', skip: false })
    ('Click checkboxes', async t => {
        const firstCheckbox = XPathSelector('//input[@type="checkbox"]');
        const secondCheckbox = XPathSelector('//input[@type="checkbox"]').nth(1);

        await t
            .click(firstCheckbox)
            .click(secondCheckbox);
    });