import { parentSuite, suite } from "allure-js-commons";
import { test } from "../fixtures/testFixtures";
import {TestData} from "../test-data/testData";

test.use({ storageState: TestData.USER_SESSION_STATE_PATH });

test.describe("Accessibility tests", () => {
  test.beforeAll(async () => {
    await parentSuite("Epic name for report");
    await suite("Suite name for report");
  });

  test.beforeEach(async ({ homePageSteps }) => {
    await homePageSteps.openHomePage();
  });

  test("Check product card is displayed on the product page", async ({ productsPageSteps }) => {
    await productsPageSteps.openProductsPage();
    await productsPageSteps.checkProductCardIsDisplayed();
  });
});
