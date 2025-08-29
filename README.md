# poc-test-cafe

This project is a proof-of-concept automated testing framework using [TestCafe](https://devexpress.github.io/testcafe/) for web applications. It demonstrates how to organize tests, page objects, selectors, and reporting in a scalable way.

## Project Structure

- **controllers/**: Business logic and test orchestration (future expansion).
- **maps/**: Contains "Map" classes for UI element selectors.
  - [`base_map.js`](maps/base_map.js): Base class with generic selector methods.
  - [`example_map.js`](maps/example_map.js): Example selectors for the sample page.
- **pages/**: Page Object Model classes for test actions.
  - [`base_page.js`](pages/base_page.js): Base page with common actions (selecting options, sliders).
  - [`example_page.js`](pages/example_page.js): Example page actions (form submission, reset).
- **tests/**: Test files using TestCafe.
  - [`my_first_test.js`](tests/my_first_test.js): Simple screenshot and title check.
  - [`test_with_xpath.js`](tests/test_with_xpath.js): Demonstrates XPath selectors.
  - [`test_with_page_objects.js`](tests/test_with_page_objects.js): Advanced tests using page objects.
- **utils/**: Utility functions.
  - [`xpath_selector.js`](utils/xpath_selector.js): Custom XPath selector for TestCafe.
- **reports/**: Test result outputs (JSON, TXT) and screenshots.
- **screenshots/**: Stores screenshots taken during test runs.
- **configuration/**: Constants and properties for configuration.

## How It Works

- Tests are written using TestCafe and organized in the `tests/` folder.
- Page Object Model is used for maintainability: selectors are in "maps", actions in "pages".
- Utilities like XPath selectors extend TestCafe's capabilities.
- Reports and screenshots are automatically generated after test runs.

## Running Tests

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run TestCafe tests:
   ```sh
   npx testcafe chrome tests/
   ```
   Or use your `.testcaferc.json` configuration:
   ```sh
   npx testcafe
   ```

## Customization

- Add new selectors in `maps/`.
- Add new page actions in `pages/`.
- Write new tests in `tests/`.

## Reporting

- Test results are saved in `reports/` as JSON and TXT.
- Screenshots are saved in `screenshots/` for failed and successful tests.

## License

MIT

```// filepath: /home/idd_umoreira/Desktop/projetos/prototipo/poc-test-cafe/README.md

# poc-test-cafe

This project is a proof-of-concept automated testing framework using [TestCafe](https://devexpress.github.io/testcafe/) for web applications. It demonstrates how to organize tests, page objects, selectors, and reporting in a scalable way.

## Project Structure

- **controllers/**: Business logic and test orchestration (future expansion).
- **maps/**: Contains "Map" classes for UI element selectors.
  - [`base_map.js`](maps/base_map.js): Base class with generic selector methods.
  - [`example_map.js`](maps/example_map.js): Example selectors for the sample page.
- **pages/**: Page Object Model classes for test actions.
  - [`base_page.js`](pages/base_page.js): Base page with common actions (selecting options, sliders).
  - [`example_page.js`](pages/example_page.js): Example page actions (form submission, reset).
- **tests/**: Test files using TestCafe.
  - [`my_first_test.js`](tests/my_first_test.js): Simple screenshot and title check.
  - [`test_with_xpath.js`](tests/test_with_xpath.js): Demonstrates XPath selectors.
  - [`test_with_page_objects.js`](tests/test_with_page_objects.js): Advanced tests using page objects.
- **utils/**: Utility functions.
  - [`xpath_selector.js`](utils/xpath_selector.js): Custom XPath selector for TestCafe.
- **reports/**: Test result outputs (JSON, TXT) and screenshots.
- **screenshots/**: Stores screenshots taken during test runs.
- **configuration/**: Constants and properties for configuration.

## How It Works

- Tests are written using TestCafe and organized in the `tests/` folder.
- Page Object Model is used for maintainability: selectors are in "maps", actions in "pages".
- Utilities like XPath selectors extend TestCafe's capabilities.
- Reports and screenshots are automatically generated after test runs.

## Running Tests

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run TestCafe tests:
   ```sh
   npx testcafe chrome tests/
   ```
   Or use your `.testcaferc.json` configuration:
   ```sh
   npx testcafe
   ```

## Customization

- Add new selectors in `maps/`.
- Add new page actions in `pages/`.
- Write new tests in `tests/`.

## Reporting

- Test results are saved in `reports/` as JSON and TXT.
- Screenshots are saved in `screenshots/