// @ts-check
const { test, expect } = require("@playwright/test");

test("1+1", async ({ page }) => {
  // Given empty calculator
  await page.goto("/");

  // When we enter 1 + 1
  const button1 = await page.getByTestId("button1");
  const buttonPlus = await page.getByTestId("button+");
  const buttonEquals = await page.getByTestId("button=");
  await button1.click();
  await buttonPlus.click();
  await button1.click();
  await buttonEquals.click();

  // Then 2 appears on the screen
  const calcScreen = await page.getByTestId("screen");
  await expect(calcScreen).toHaveText("2.0");
});
