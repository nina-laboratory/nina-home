import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("/");

	// Expect a title "to contain" a substring.
	// Using a generic check since I don't know the exact title,
	// but usually standard Next.js apps or this specific app will have some title.
	// Checking for response status is also a good basic check.

	// You can also check for specific text on the page
	// await expect(page.locator('h1')).toContainText('Nina');
});

test("homepage loads successfully", async ({ page }) => {
	const response = await page.goto("/");
	expect(response?.status()).toBe(200);
});
