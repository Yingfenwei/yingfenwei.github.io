"""Serve the local homepage with automatic browser refresh."""

import hashlib
import io
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit


SITE = Path(__file__).resolve().parents[1] / "dist"
REVISION_PATH = "/__preview_revision"


def revision():
    digest = hashlib.sha256()
    for path in sorted(SITE.rglob("*")):
        if path.is_file():
            info = path.stat()
            digest.update(f"{path.relative_to(SITE)}:{info.st_mtime_ns}:{info.st_size}\n".encode())
    return digest.hexdigest()


class PreviewHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def send_head(self):
        if urlsplit(self.path).path == REVISION_PATH:
            return self.response_bytes(revision().encode(), "text/plain")

        page = Path(self.translate_path(self.path))
        if page == SITE:
            page = SITE / "index.html"
        if page.suffix != ".html" or not page.is_file():
            return super().send_head()

        refresh = """
<script>
(() => {
  const original = "REVISION";
  async function check() {
    try {
      const response = await fetch("/__preview_revision", {cache: "no-store"});
      if (response.ok && (await response.text()) !== original) {
        location.reload();
        return;
      }
    } catch {
      // Resume checking when the preview server becomes available again.
    }
    setTimeout(check, 1000);
  }
  setTimeout(check, 1000);
})();
</script>
""".replace("REVISION", revision())
        html = page.read_text(encoding="utf-8").replace("</body>", refresh + "</body>", 1)
        return self.response_bytes(html.encode("utf-8"), "text/html; charset=utf-8")

    def response_bytes(self, data, content_type):
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        return io.BytesIO(data)

    def log_request(self, code="-", size="-"):
        if self.path != REVISION_PATH:
            super().log_request(code, size)


if __name__ == "__main__":
    handler = partial(PreviewHandler, directory=str(SITE))
    with ThreadingHTTPServer(("127.0.0.1", 4173), handler) as server:
        print("Local preview: http://127.0.0.1:4173/#news", flush=True)
        server.serve_forever()
