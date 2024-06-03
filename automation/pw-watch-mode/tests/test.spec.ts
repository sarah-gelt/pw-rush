import test from "@playwright/test";

test.describe("My Test Suite", () => {
  test("Watch this test", async ({ page }) => {
    await test.step("Step 1", async () => {
      console.log("Run the watched test");
      await page.goto("https://playwright.dev/");
      await page.hover("text=Get Started");
    });
  });
});