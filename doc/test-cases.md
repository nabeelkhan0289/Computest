# Test Cases Documentation

This document describes the test scenarios implemented in the automated test suite. These test cases verify the core functionality of the Sauce Demo website.

## Login Functionality

### TC-001: Login with Valid Credentials

**Description:** Verify that a user can successfully log in with valid credentials.  
**Preconditions:** The Sauce Demo website is accessible.  
**Steps:**

1. Navigate to the login page
2. Enter valid username (standard_user)
3. Enter valid password (secret_sauce)
4. Click the login button
   **Expected Results:**

- User is successfully logged in
- User is redirected to the inventory page

### TC-002: Login with Invalid Credentials

**Description:** Verify that an appropriate error message is displayed when a user attempts to log in with invalid credentials.  
**Preconditions:** The Sauce Demo website is accessible.  
**Steps:**

1. Navigate to the login page
2. Enter invalid username
3. Enter invalid password
4. Click the login button
   **Expected Results:**

- User remains on the login page
- Error message "Username and password do not match" is displayed

## Shopping Cart Functionality

### TC-003: Add Item to Cart

**Description:** Verify that a user can add an item to the shopping cart.  
**Preconditions:**

- The Sauce Demo website is accessible
- User is logged in with valid credentials  
  **Steps:**

1. Navigate to the inventory page
2. Click the "Add to cart" button for the "Sauce Labs Backpack" item
   **Expected Results:**

- The item is added to the cart
- The cart badge shows the correct count (1)

### TC-004: Display Correct Items in Cart

**Description:** Verify that the cart displays the correct items that were added.  
**Preconditions:**

- The Sauce Demo website is accessible
- User is logged in with valid credentials  
  **Steps:**

1. Navigate to the inventory page
2. Add "Sauce Labs Backpack" to the cart
3. Add "Sauce Labs Bike Light" to the cart
4. Click on the cart icon to navigate to the cart page
   **Expected Results:**

- The cart page displays both items: "Sauce Labs Backpack" and "Sauce Labs Bike Light"

### TC-005: Remove Item from Cart

**Description:** Verify that a user can remove an item from the shopping cart.  
**Preconditions:**

- The Sauce Demo website is accessible
- User is logged in with valid credentials
- At least one item has been added to the cart  
  **Steps:**

1. Navigate to the inventory page
2. Add "Sauce Labs Backpack" to the cart
3. Click on the cart icon to navigate to the cart page
4. Click the "Remove" button for the "Sauce Labs Backpack" item
   **Expected Results:**

- The item is removed from the cart
- The cart is empty

## Implementation Notes for Candidates

As part of this assignment, you are expected to:

1. Implement the page object methods in the provided page classes
2. Complete the test implementations according to these test cases
3. Ensure all tests pass successfully
4. Follow best practices for test automation:
   - Use appropriate assertions
   - Implement proper error handling
   - Add meaningful reporting with screenshots and attachments
   - Write clean, maintainable code

The test cases are designed to verify core functionality of the application and demonstrate your ability to implement automated tests using the Page Object Model pattern.
