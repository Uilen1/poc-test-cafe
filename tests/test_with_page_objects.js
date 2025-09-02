import ExamplePage from '../pages/example_page';
import { TEST_CAFE_URL } from '../configuration/constants/tests-url';


fixture('Test with Page Objects')
	.page(TEST_CAFE_URL);

test('Submit form and verify submission', async t => {
	const examplePage = new ExamplePage();
	const name = 'Test User';
	const comment = 'This is a test comment.';

	await examplePage.submitForm(t, name, comment);

	const isSuccessful = await examplePage.isSubmissionSuccessful(t);
	await t.expect(isSuccessful).ok('Form submission was not successful');
});

test('Enabling and select a rate', async t => {
	const examplePage = new ExamplePage();
	const offset = 10;

	await examplePage.selectCheckboxByAttribute('data-testid', 'tried-testcafe-checkbox')
	await examplePage.setSliderValue(examplePage.exampleMap.selectSlider, offset);
	await examplePage.verifySliderValue(examplePage.exampleMap.selectHandle, offset);

});
