import BasePage from './BasePage';
import type { ChainablePromiseElement, ChainablePromiseArray } from 'webdriverio';

/**
 * Cart page object
 */
export default class CartPage extends BasePage {
  // Selector for checkout button
  get checkoutButton(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#checkout');
  }

  // Selector for all cart items
  get cartItems(): ChainablePromiseArray<WebdriverIO.Element> {
    return $$('div.cart_item');
  }

  // Check if cart page is loaded by verifying checkout button visibility
  async isLoaded(): Promise<boolean> {
    return (await this.checkoutButton).isDisplayed();
  }

  // Get array of cart item names
  async getCartItems(): Promise<string[]> {
    // Await once to get plain array
    const cartElements: WebdriverIO.Element[] = await this.cartItems;
    const itemNames: string[] = [];

    for (const item of cartElements) {
      const name = await item.$('.inventory_item_name').getText();
      itemNames.push(name);
    }

    return itemNames;
  }

  // Remove item by name from cart
  async removeItem(itemName: string): Promise<void> {
    // Await once here too
    const items: WebdriverIO.Element[] = await this.cartItems;

    for (const item of items) {
      const title = await item.$('.inventory_item_name').getText();
      if (title === itemName) {
        const removeButton = await item.$('button.cart_button');
        await removeButton.click();
        return;
      }
    }

    throw new Error(`Item "${itemName}" not found in the cart`);
  }

  // Proceed to checkout
  async checkout(): Promise<void> {
    await this.checkoutButton.click();
  }
}

// import BasePage from './BasePage';
// import type { ChainablePromiseElement, ChainablePromiseArray } from 'webdriverio';
// /**
//  * Cart page object
//  * TODO: Candidate should implement this page object
//  */
// export default class CartPage extends BasePage {
//   // TODO: Define selectors for cart items, checkout button, etc.

//   /**
//    * Checks if the page is loaded
//    * @returns True if the page is loaded
//    * TODO: Implement this method
//    */

// // get checkoutButton() {
// //     return $('#checkout');
// //   }
// get checkoutButton(): ChainablePromiseElement<WebdriverIO.Element> {
//   return $('#checkout');
// }

//   // get cartItems() {
//   //   return $$('div.cart_item');  // all cart item containers
//   // }
//   get cartItems(): ChainablePromiseArray<WebdriverIO.Element> {
//   return $$('div.cart_item');
// }

//   async isLoaded(): Promise<boolean> {
//     // TODO: Implement check if cart page is loaded
//     return (await this.checkoutButton).isDisplayed();
//     //throw new Error('Method not implemented');
//   }

//   /**
//    * Gets the list of items in the cart
//    * @returns Array of item names in the cart
//    * TODO: Implement this method
//    */
//   async getCartItems(): Promise<string[]> {
//     // TODO: Implement getting cart items
//     const cartElements = await $$('div.cart_item');
//   const itemNames: string[] = [];

//   for (const item of cartElements) {
//     const name = await item.$('.inventory_item_name').getText();
//     itemNames.push(name);
//   }

//   return itemNames;  // <--- add this line
// }
// }

//   /**
//    * Removes an item from the cart by its name
//    * @param itemName Name of the item to remove
//    * TODO: Implement this method
//    */
//   async removeItem(itemName: string): Promise<void> {
//     // TODO: Implement removing item from cart
//      const items = await $$('div.cart_item');
//   for (const item of items) {
//     const title = await item.$('div.inventory_item_name').getText();
//     if (title === itemName) {
//       const removeButton = await item.$('button.cart_button');
//       await removeButton.click();
//       return;
//     }
//   }
//   throw new Error(`Item "${itemName}" not found in the cart`);
//   }

//   /**
//    * Proceeds to checkout
//    * TODO: Implement this method
//    */
//   async checkout(): Promise<void> {
//     // TODO: Implement checkout
//     await this.checkoutButton.click();
//     //throw new Error('Method not implemented');
//   }
// }
