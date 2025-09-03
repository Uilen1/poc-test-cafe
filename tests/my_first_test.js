import { Selector } from 'testcafe';
import { TEST_CAFE_URL } from '../resources/constants/tests-url';


fixture('My First Test')
	.page(TEST_CAFE_URL);

test('Check page title with screenshot', async t => {
	await t
		.expect(Selector('h1').innerText).eql('Example')
		.takeScreenshot();
});

test('Check page title with screenshot', async t => {
	await t
		.expect(Selector('h1').innerText).eql('Example')
		.takeScreenshot();
});
test('Check page title with screenshot', async t => {
	await t
		.expect(Selector('h1').innerText).eql('Example')
		.takeScreenshot();
});
