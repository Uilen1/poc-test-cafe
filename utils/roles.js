import { Role } from "testcafe";
import { LOGIN_URL } from "../configuration/constants/tests-url";
import { ERROR, STANDARD, VISUAL } from "../data/users";
import HomeMap from "../maps/home_map";
import login_map from "../maps/login_map";

const { USERNAME, PASSWORD, LOGIN_BUTTON } = new login_map();

const standartUser = Role(LOGIN_URL, async t => {
	const homeMap = new HomeMap();
	await t
		.typeText(USERNAME, STANDARD.username)
		.typeText(PASSWORD, STANDARD.password)
		.click(LOGIN_BUTTON)
		.expect(homeMap.mainTitle.exists)
		.ok('Main title not found - login may have failed')
});

const visualUser = Role(LOGIN_URL, async t => {
	await t
		.typeText(USERNAME, VISUAL.username)
		.typeText(PASSWORD, VISUAL.password)
		.click(LOGIN_BUTTON)
});

const errorUser = Role(LOGIN_URL, async t => {
	await t
		.typeText(USERNAME, ERROR.username)
		.typeText(PASSWORD, ERROR.password)
		.click(LOGIN_BUTTON)
});

export { errorUser, standartUser, visualUser };
