import XPathSelector from '../utils/xpath_selector';
import { TEST_CAFE_URL } from '../resources/constants/tests-url';

fixture`Use XPath selectors`
    .page(TEST_CAFE_URL);

test('Click checkboxes', async t => {
    const firstCheckbox = XPathSelector('//input[@type="checkbox"]');
    const secondCheckbox = XPathSelector('//input[@type="checkbox"]').nth(1);

    await t
        .click(firstCheckbox)
        .click(secondCheckbox);
});
