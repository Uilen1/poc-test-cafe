import { Selector } from "testcafe";
import BaseMap from "./base_map";

export default class login_map extends BaseMap {
	constructor() {
		super();
		this.USERNAME = Selector('#user-name');
		this.PASSWORD = Selector('#password');
		this.LOGIN_BUTTON = Selector('#login-button')
	}
}
