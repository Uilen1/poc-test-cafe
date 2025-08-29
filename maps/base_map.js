import { Selector } from "testcafe";

export default class BaseMap {

    getElementById = (id) => Selector(`#${id}`);

    getElementByClass = (className) => Selector(`.${className}`);

    getElementByDataAttribute = (attr, value) => Selector(`[${attr}="${value}"]`);

    getElementByTag = (tag) => Selector(tag);

    getElementByText = (text) => Selector('*').withText(text);

    getNthElement = (selector, n) => selector.nth(n);

    getChildElement = (parentSelector, childSelector) => parentSelector.find(childSelector);

    getSiblingElement = (selector, siblingSelector) => selector.sibling(siblingSelector);

    getParentElement = (selector) => selector.parent();

    getElementByAttributeContains = (attr, value) => Selector(`[${attr}*="${value}"]`);

    getElementByAttributeStartsWith = (attr, value) => Selector(`[${attr}^="${value}"]`);

    getElementByAttributeEndsWith = (attr, value) => Selector(`[${attr}$="${value}"]`);

    getElementByIndex = (selector, index) => selector.nth(index);

    getElementCount = async (selector) => selector.count;

    getElementText = async (selector) => selector.innerText;

}