import { Selector } from "testcafe";
import BaseMap from "./base_map";

export default class HomeMap extends BaseMap {
	constructor() {
		super();
		this.mainTitle = Selector('.app_logo');
	}
}
