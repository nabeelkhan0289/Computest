import BasePage from './BasePage';

/**
 * Inventory page object
 * TODO: Candidate should implement this page object
 */
export default class InventoryPage extends BasePage {
  // TODO: Define selectors for inventory items, add to cart buttons, cart icon, etc.

  /**
   * Checks if the page is loaded
   * @returns True if the page is loaded
   * TODO: Implement this method
   */

get inventoryContainer() {
    return $('#inventory_container'); // Adjust selector if needed
  }

  async isLoaded(): Promise<boolean> {
    // TODO: Implement check if inventory page is loaded
        return await this.inventoryContainer.waitForDisplayed({ timeout: 5000 });
    //throw new Error('Method not implemented');
  }

  /**
   * Adds an item to the cart by its name
   * @param itemName Name of the item to add
   * TODO: Implement this method
   */
  async addItemToCart(itemName: string): Promise<void> {
    // TODO: Implement adding item to cart
const items = await $$('div.inventory_item');
    for (const item of items) {
      const title = await item.$('div.inventory_item_name').getText();
      if (title === itemName) {
        const addButton = await item.$('button.btn_inventory');
        await addButton.click();
        return;
      }
    }
    throw new Error(`Item with name "${itemName}" not found`);
  }  

  /**
   * Gets the number of items in the cart
   * @returns Number of items in the cart
   * TODO: Implement this method
   */

 get cartBadge() {
        return $('.shopping_cart_badge');
    }

  async getCartItemCount(): Promise<number> {
    // TODO: Implement getting cart item count
    const isDisplayed = await this.cartBadge.isDisplayed();
        if (!isDisplayed) return 0;

        const text = await this.cartBadge.getText();
        return parseInt(text, 10);
   // throw new Error('Method not implemented');
  }

  /**
   * Navigates to the cart page
   * TODO: Implement this method
   */
  
   private get cartIcon() {
    return $('a.shopping_cart_link');
  }
  
  async goToCart(): Promise<void> {
    // TODO: Implement navigation to cart
            await this.cartIcon.click();
   // throw new Error('Method not implemented');
  }
}
