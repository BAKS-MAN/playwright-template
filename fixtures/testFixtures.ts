import { test as baseTest } from "@playwright/test";
import { HomePageSteps } from "../steps/homePageSteps";
import { HomePage } from "../pages/homePage";
import {ProductsPageSteps} from "../steps/productsPageSteps";
import {ProductsPage} from "../pages/productsPage";

export const test = baseTest.extend<{
  homePageSteps: HomePageSteps;
  productsPageSteps: ProductsPageSteps;
}>({
  homePageSteps: async ({ page }, use) => {
    await use(new HomePageSteps(new HomePage(page)));
  },
  productsPageSteps: async ({ page }, use) => {
    await use(new ProductsPageSteps(new ProductsPage(page)));
  }
});
export { expect } from "@playwright/test";
