import test from "@playwright/test";

test("Do global teardown", async ({ page }) => {
  console.log("Do the teardown");
});