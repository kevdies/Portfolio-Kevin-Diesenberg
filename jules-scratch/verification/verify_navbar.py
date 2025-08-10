from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Desktop view
    page.set_viewport_size({"width": 1280, "height": 720})
    page.goto("http://localhost:3000")
    page.screenshot(path="jules-scratch/verification/desktop_navbar_final.png")
    print("Desktop screenshot taken.")

    # Mobile view
    page.set_viewport_size({"width": 375, "height": 667})
    page.goto("http://localhost:3000")

    # Click the hamburger menu. The original component has this label.
    menu_trigger = page.get_by_label("Open menu")
    menu_trigger.click()

    # Wait for the dialog content to be visible.
    dialog_content = page.locator("div[role='dialog']")
    expect(dialog_content).to_be_visible()

    # Take a screenshot of the open mobile menu.
    page.screenshot(path="jules-scratch/verification/mobile_navbar_final.png")
    print("Mobile screenshot taken.")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
