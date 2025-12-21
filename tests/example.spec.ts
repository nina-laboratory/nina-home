import { expect, test } from "@playwright/test";

test("homepage has correct title and content", async ({ page }) => {
	await page.goto("/");

	// Check title
	await expect(page).toHaveTitle(/Create Next App/); // Matches layout.tsx metadata default

	// Check Header
	await expect(
		page.getByRole("heading", { name: "Nina Laboratory" }),
	).toBeVisible();
	await expect(page.getByText("created by Pedro AZ")).toBeVisible();

	// Check Cards
	await expect(page.getByRole("heading", { name: "Call Nina" })).toBeVisible();
	await expect(
		page.getByRole("heading", { name: "Nina Controller" }),
	).toBeVisible();
	await expect(page.getByRole("heading", { name: "Nina Fast" })).toBeVisible();

	// Check Footer Button
	await expect(page.getByRole("button", { name: "CV" })).toBeVisible();
});
