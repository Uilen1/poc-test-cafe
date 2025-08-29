import { Selector } from 'testcafe';
import BaseMap from './base_map';
export default class ExampleMap extends BaseMap {

    constructor() {
        super();
        this.submitButton = Selector('#submit-button');
        this.nameInput = Selector('#developer-name');
        this.featureCheckbox = Selector('#remote-testing');
        this.osSelect = Selector('#preferred-interface');
        this.commentTextArea = Selector('#comments');
        this.populateButton = Selector('#populate');
        this.resetButton = Selector('#reset-button');
        this.selectHandle = Selector('.ui-slider-handle');
        this.selectSlider = Selector('#slider');
        this.articleHeader = Selector('#article-header').withText('Thank you');
    }
}

