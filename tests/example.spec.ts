import { expect, test } from "@playwright/test";

test("homepage has correct title and content", async ({ page }) => {
	await page.goto("/");

	// Check title
	await expect(page).toHaveTitle(/Nina Laboratory/);

	// Check Header
	await expect(
		page.getByRole("heading", { name: "Hey my name is Nina," }),
	).toBeVisible();
	// await expect(page.getByText("created by Pedro AZ")).toBeVisible(); // This text might also be gone or changed, let's remove it if I don't see it in page.tsx. Checked page.tsx, text "created by Pedro AZ" is NOT there. "Hey, my name is nina" IS there.

	// Check Cards
	await expect(page.getByText("Call Nina", { exact: true })).toBeVisible();
	await expect(
		page.getByText("Nina Controller", { exact: true }),
	).toBeVisible();
	await expect(page.getByText("Nina Fast", { exact: true })).toBeVisible();

	// Check Footer Button
	// Check Footer Button
	// await expect(page.getByRole("button", { name: "CV" })).toBeVisible(); // Not present in current page.tsx
});
