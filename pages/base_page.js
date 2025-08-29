import { Selector, t } from "testcafe";
import BaseMap from "../maps/base_map";

export default class BasePage {

    constructor() {
        this.baseMap = new BaseMap();
    }

    async selectOption(selectSelector, optionText) {
        const select = Selector(selectSelector);
        const option = select.find('option').withText(optionText);

        await t
            .click(select)
            .click(option);
    }

    async setSliderValue(selectSlider, value, min = 0, max = 10) {
        await t.expect(selectSlider.exists).ok('Slider not found');
        await t.scrollIntoView(selectSlider);

        const sliderRect = await selectSlider.boundingClientRect;
        if (!sliderRect?.width || !sliderRect?.height)
            throw new Error('Cannot measure slider size');

        const totalSteps = max - min;
        const stepWidth = sliderRect.width / totalSteps;

        const offsetX = Math.round(stepWidth * (value - min));
        const offsetY = Math.round(sliderRect.height / 2);

        await t.click(selectSlider, { offsetX, offsetY });
    }

    async verifySliderValue(selectHandle, value, min = 1, max = 10) {
        const leftStyle = await selectHandle.getAttribute('style');
        const actualPercent = parseFloat(leftStyle.match(/left:\s*([\d.]+)%/)[1]);
        const expectedPercent = ((value - min) / (max - min)) * 100;
        await t.expect(Math.round(actualPercent)).eql(Math.round(expectedPercent), `Expected slider at ${expectedPercent}, but was at ${actualPercent}%`);
    }


}