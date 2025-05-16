import LoginPage from '../../src/pages/LoginPage';
import InventoryPage from '../../src/pages/InventoryPage';
import TestData from '../../src/utils/TestData';
import ReportHelper from '../../src/utils/ReportHelper';

describe('Login functionality', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  beforeEach(async () => {
    loginPage = new LoginPage();
    inventoryPage = new InventoryPage();
    await loginPage.open();
  });

  it('should login with valid credentials', async () => {
    ReportHelper.addStep('Attempting login with standard user');
    // Login with standard user credentials
    await loginPage.login(TestData.STANDARD_USER.username, TestData.STANDARD_USER.password);

    // Verify that the inventory page is loaded
    const isLoaded = await inventoryPage.isLoaded();
    expect(isLoaded).toBe(true);

    // Take a screenshot for the report
    // await ReportHelper.takeScreenshot('After successful login');
  });

  it('should show error message with invalid credentials', async () => {
    ReportHelper.addStep('Attempting login with invalid credentials');
    // Login with invalid credentials
    await loginPage.login(TestData.INVALID_USER.username, TestData.INVALID_USER.password);

    // Verify that the error message is displayed
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Username and password do not match');

    // Add the error message to the report
    // await ReportHelper.addAttachment('Error message', errorMessage, 'text/plain');
    //await ReportHelper.takeScreenshot('Login error');
  });
});
