import BasePage from './BasePage';
import { $ } from '@wdio/globals';

//import { $ } from 'webdriverio';
/**
 * Login page object
 * TODO: Candidate should implement this page object
 */

export default class LoginPage extends BasePage {
  // TODO: Define selectors for username, password, login button, and error message

  private usernameInput = $('#user-name');
  private passwordInput = $('#password');
  private loginButton = $('#login-button');
  private errorMessage = $('.error-message-container');

  /**
   * Opens the login page
   */
  async open(): Promise<void> {
    await super.open('https://www.saucedemo.com/');
  }

  /**
   * Login with the given credentials
   * @param username Username
   * @param password Password
   * TODO: Implement this method
   */
  async login(username: string, password: string): Promise<void> {
    // TODO: Implement login functionality
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
    //throw new Error('Method not implemented');
  }

  /**
   * Gets the error message text
   * @returns Error message text
   * TODO: Implement this method
   */
  async getErrorMessage(): Promise<string> {
    // TODO: Implement getting error message
      return await this.errorMessage.getText();
   // throw new Error('Method not implemented');
  }
}
