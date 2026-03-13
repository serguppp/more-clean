import { expect, test } from "@playwright/test";

test("main page should be visible", async ({ page }) => {
  await page.goto("/");

  const body = page.locator("body");
  await expect(body).toBeVisible();
});
