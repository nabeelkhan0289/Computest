# QA Automation Engineer Assignment

This repository contains a test automation assignment for QA Engineer candidates. The assignment is designed to evaluate your skills with the following technologies:

- Node.js 22+
- TypeScript
- WebdriverIO
- Mocha
- Page Object Model pattern

## Assignment Overview

Your task is to implement automated tests for the [Sauce Demo](https://www.saucedemo.com/) website, which is a sample e-commerce application. The repository contains a basic structure with placeholder files that you need to complete.

### Requirements

1. Implement the page objects in the `src/pages` directory:

   - Complete the `LoginPage` implementation
   - Complete the `InventoryPage` implementation
   - Complete the `CartPage` implementation

2. Implement the test cases in the `test/specs` directory:

   - Login functionality tests
   - Shopping cart functionality tests

   Detailed test case descriptions can be found in the [Test Cases Documentation](./doc/test-cases.md) file.

3. Make sure all tests pass successfully

4. Follow best practices:
   - Use proper assertions
   - Implement clean, readable code
   - Add comments where necessary
   - Follow the Page Object Model pattern

## Getting Started

### Prerequisites

- Node.js 22 or higher
- npm or yarn
- Git

### Setting Up the Repository

This assignment is distributed as a Git bundle. Follow these steps to set it up:

1. Create a new directory for the project:

   ```bash
   mkdir qa-automation-assignment
   cd qa-automation-assignment
   ```

2. Clone the repository from the bundle:

   ```bash
   git clone qa-automation-solution.bundle .
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests

To run the tests:

```bash
npm test
```

### Generating Reports

This project uses Allure for test reporting. After running the tests, you can generate and open the Allure report with:

```bash
npm run report
```

This will generate the report and automatically open it in your default browser.

## Submission

Please submit your completed assignment using Git bundle and sending it via email. Git bundle allows packaging your entire repository (including commit history) into a single file.

### Packaging Your Solution

1. After completing the assignment, commit all your changes:

```bash
git add .
git commit -m "Completed assignment"
```

2. Create a Git bundle of your repository:

```bash
# To bundle the entire repository with all branches
git bundle create qa-automation-solution.bundle --all

# OR to bundle only the current branch (recommended)
git bundle create qa-automation-solution.bundle HEAD main
```

3. Send the bundle file to the provided email address with the subject line "QA Automation Assignment - [Your Name]"

### Notes

- Make sure to include your name and contact information in the email
- The bundle file contains your complete repository with all commits

## Evaluation Criteria

Your submission will be evaluated based on:

1. **Functionality**: Do the tests work correctly?
2. **Code Quality**: Is the code well-structured, readable, and maintainable?
3. **Test Coverage**: Do the tests cover the required scenarios as specified in the [Test Cases Documentation](./doc/test-cases.md)?
4. **Best Practices**: Are you following testing best practices?
5. **TypeScript Usage**: Are you using TypeScript features correctly?

## Resources

- [WebdriverIO Documentation](https://webdriver.io/docs/gettingstarted)
- [Mocha Documentation](https://mochajs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Sauce Demo Website](https://www.saucedemo.com/)

Good luck!
