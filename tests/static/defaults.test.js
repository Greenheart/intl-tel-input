/**
 * @jest-environment jsdom
 */
const { initPlugin, teardown, checkFlagSelected } = require("../helpers/helpers");
const intlTelInput = require("intlTelInputWithUtils.js");
const backupInitialCountry = intlTelInput.defaults.initialCountry; // empty string by default

describe("defaults static", () => {
  afterEach(() => {
    intlTelInput.defaults.initialCountry = backupInitialCountry;
  });

  test("changing default initialCountry to ru", () => {
    intlTelInput.defaults.initialCountry = "ru";
    const { iti, container } = initPlugin();
    expect(checkFlagSelected(container, "ru")).toBe(true);
    teardown(iti);
  });
});
