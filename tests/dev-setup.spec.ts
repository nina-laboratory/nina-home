import { expect, test } from "@playwright/test";

test("dev setup page works correctly", async ({ page }) => {
	await page.goto("/dev-setup");

	// Check title
	await expect(page.getByRole("heading", { name: "Dev Setup" })).toBeVisible();

	// Check Tabs exist
	await expect(
		page.getByRole("tab", { name: "Development Flow" }),
	).toBeVisible();
	await expect(page.getByRole("tab", { name: "Tech Stack" })).toBeVisible();
	await expect(page.getByRole("tab", { name: "Testing" })).toBeVisible();
	await expect(page.getByRole("tab", { name: "CI/CD" })).toBeVisible();
	await expect(page.getByRole("tab", { name: "Controller" })).toBeVisible();

	// Check default content (Development Flow)
	await expect(
		page.getByRole("heading", { name: "Development Flow" }),
	).toBeVisible();

	// Switch to Tech Stack tab
	await page.getByRole("tab", { name: "Tech Stack" }).click();
	await expect(page.getByRole("heading", { name: "Tech Stack" })).toBeVisible();

	// Switch to Testing tab
	await page.getByRole("tab", { name: "Testing" }).click();
	await expect(
		page.getByRole("heading", { name: "Testing Strategy" }),
	).toBeVisible();

	// Switch to CI/CD tab
	await page.getByRole("tab", { name: "CI/CD" }).click();
	await expect(
		page.getByRole("heading", { name: "CI/CD Pipeline" }),
	).toBeVisible();

	// Switch to Nina Controller tab (now just Controller)
	await page.getByRole("tab", { name: "Controller" }).click();
	await expect(
		page.getByRole("heading", { name: "Nina Controller" }),
	).toBeVisible();
});

test("blog link is removed from navigation", async ({ page }) => {
	await page.goto("/");
	const blogLink = page.getByRole("link", { name: "Blog" });
	await expect(blogLink).not.toBeVisible();

	// Check Dev Setup link exists
	const devSetupLink = page.getByRole("link", { name: "Dev Setup" });
	await expect(devSetupLink).toBeVisible();
});
