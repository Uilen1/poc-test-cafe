import { Role, Selector } from "testcafe";
import { LOGIN_URL } from "../configuration/constants/tests-url";
import { ERROR, STANDARD, VISUAL } from "../configuration/constants/users";
import HomeMap from "../maps/home_map";

const USERNAME = Selector('#user-name');
const PASSWORD = Selector('#password');
const LOGIN_BUTTON = Selector('#login-button')

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
