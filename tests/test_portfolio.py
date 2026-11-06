"""Run with the venv's Python after installing playwright and Microsoft Edge."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
import unittest

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
PROJECTS = ("lamaudiobook", "voicestudy", "news-rag", "iot-tracking", "4money")


class PortfolioTest(unittest.TestCase):
    def test_navigation_demos_and_motion(self):
        handler = partial(SimpleHTTPRequestHandler, directory=str(ROOT))
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
            page = browser.new_page(viewport={"width": 390, "height": 844}, reduced_motion="no-preference")
            page.set_default_timeout(5000)
            errors = []
            page.on("pageerror", lambda error: errors.append(str(error)))
            page.route("https://**/*", lambda route: route.abort())
            response = page.goto(origin + "/")
            self.assertTrue(response.ok)
            self.assertEqual(page.locator("nav [aria-current=page]").inner_text(), "Home")
            self.assertEqual(page.locator("main").evaluate("(e) => getComputedStyle(e).animationName"), "arrive")
            page.emulate_media(reduced_motion="reduce")
            self.assertEqual(page.locator("main").evaluate("(e) => getComputedStyle(e).animationName"), "none")

            page.get_by_role("navigation").get_by_role("link", name="Projects").click()
            self.assertTrue(page.url.endswith("/projects.html"))
            self.assertEqual(page.locator(".project-card").count(), len(PROJECTS))
            for slug in PROJECTS:
                with self.subTest(project=slug):
                    page.locator(f'.project-card[href="projects/{slug}.html"]').click()
                    self.assertTrue(page.url.endswith(f"/projects/{slug}.html"))
                    self.assertTrue(page.locator(".demo-image").evaluate("(img) => img.complete && img.naturalWidth > 0"))
                    demo = page.locator(".video-demo")
                    self.assertIsNone(demo.get_attribute("open"))
                    demo.locator("summary").focus()
                    page.keyboard.press("Enter")
                    self.assertTrue(demo.get_by_text("Video coming soon").is_visible())
                    self.assertTrue(page.evaluate("document.documentElement.scrollWidth <= innerWidth"))
                    page.get_by_role("link", name="All projects").click()

            page.get_by_role("navigation").get_by_role("link", name="About").click()
            self.assertTrue(page.url.endswith("/about.html"))
            self.assertTrue(page.get_by_role("heading", name="Let's talk").is_visible())
            page.set_viewport_size({"width": 1440, "height": 900})
            page.get_by_role("navigation").get_by_role("link", name="Projects").click()
            first, second = page.locator(".project-card").all()[:2]
            self.assertEqual(first.bounding_box()["y"], second.bounding_box()["y"])
            self.assertEqual(errors, [])
            browser.close()


if __name__ == "__main__":
    unittest.main()
