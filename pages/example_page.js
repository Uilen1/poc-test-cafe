import BasePage from "./base_page";
import ExampleMap from "../maps/example_map";

export default class ExamplePage extends BasePage {

    constructor() {
        super();
        this.exampleMap = new ExampleMap();
    }

    async submitForm(t, name, comment) {
        await t
            .typeText(this.exampleMap.nameInput, name)
            .click(this.exampleMap.featureCheckbox)
            .click(this.exampleMap.getElementByDataAttribute('data-testid', 'windows-radio'));

        await this.selectOption(this.exampleMap.osSelect, 'JavaScript API');

        await t
            .typeText(this.exampleMap.commentTextArea, comment)
            .click(this.exampleMap.submitButton);
    }

    async resetForm(t) {
        await t.click(this.exampleMap.resetButton);
    }

    async isSubmissionSuccessful(t) {
        return this.exampleMap.articleHeader.exists;
    }
}