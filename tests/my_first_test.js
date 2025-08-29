import { Selector } from 'testcafe';

fixture('My First Test')
    .page('http://devexpress.github.io/testcafe/example/');

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