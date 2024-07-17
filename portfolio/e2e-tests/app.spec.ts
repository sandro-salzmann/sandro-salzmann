import { expect, test } from "@playwright/test";

test.describe("Smoke tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/sandro-salzmann/");
  });

  test(`Title is shown`, async ({ page }) => {
    const title = await page.innerText("h1");
    expect(title).toBe("Sandro Salzmann");
  });
});
