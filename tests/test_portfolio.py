"""Playwright end-to-end test for the React + Tailwind CSS portfolio (dist/)."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
import unittest

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"


class PortfolioReactTest(unittest.TestCase):
    def test_react_portfolio_interactions(self):
        self.assertTrue(DIST.exists(), "Run `npm run build` before running tests.")
        handler = partial(SimpleHTTPRequestHandler, directory=str(DIST))
        with ThreadingHTTPServer(("127.0.0.1", 0), handler) as server:
            worker = Thread(target=server.serve_forever, daemon=True)
            worker.start()
            try:
                self.check_site(f"http://127.0.0.1:{server.server_port}")
            finally:
                server.shutdown()
                worker.join()

    def check_site(self, origin):
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(channel="msedge")
            page = browser.new_page(viewport={"width": 1440, "height": 900})
            page.set_default_timeout(5000)
            errors = []
            page.on("pageerror", lambda error: errors.append(str(error)))
            page.route("https://**/*", lambda route: route.abort())

            response = page.goto(origin + "/")
            self.assertTrue(response.ok)

            # Verify hero & waveform render
            self.assertTrue(page.get_by_role("heading", name="Vũ Thế Anh").first.is_visible())
            self.assertTrue(page.locator("#wave").is_visible())

            # Verify 5 featured project cards render
            self.assertEqual(page.locator(".project-card").count(), 5)

            # Verify language toggle (default VI -> switch to EN)
            lang_btn = page.get_by_role("button", name="Toggle language between Vietnamese and English")
            lang_btn.click()
            self.assertTrue(page.get_by_text("What I'm working on right now").is_visible())

            # Verify project modal opens & closes
            page.get_by_role("heading", name="LAMAudiobook").first.click()
            self.assertTrue(page.get_by_role("dialog").is_visible())
            page.keyboard.press("Escape")

            # Verify Interactive CV section exists
            self.assertTrue(page.locator("#cv-section").is_visible())

            self.assertEqual(errors, [])
            browser.close()


if __name__ == "__main__":
    unittest.main()
