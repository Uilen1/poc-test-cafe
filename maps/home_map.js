import BaseMap from "./base_map";
import { Selector } from "testcafe";

export default class HomeMap extends BaseMap {
    constructor() {
        super();
        this.mainTitle = Selector('.app_logo');
    }
}
