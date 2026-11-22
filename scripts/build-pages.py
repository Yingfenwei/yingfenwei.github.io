"""Prepare the GitHub Pages artifact with release-specific local resource URLs."""

import re
import shutil
import sys
from pathlib import Path


SOURCE = Path(__file__).resolve().parents[1] / "dist"
REFERENCE = re.compile(r'(?P<field>\b(?:src|href)=|"(?:image|pdf)":\s*)"(?P<url>[^"]+)"')


def build(output, revision):
    if not re.fullmatch(r"[0-9a-f]{40}", revision):
        raise ValueError("Expected a full Git commit SHA")

    shutil.copytree(SOURCE, output)
    files = {p.relative_to(output).as_posix() for p in output.rglob("*") if p.is_file()}

    def add_version(match):
        path, separator, fragment = match["url"].partition("#")
        if path not in files:
            return match[0]
        return f'{match["field"]}"{path}?v={revision}{separator}{fragment}"'

    for path in [*output.glob("*.html"), output / "content.js"]:
        source = path.read_text(encoding="utf-8")
        path.write_text(REFERENCE.sub(add_version, source), encoding="utf-8", newline="\n")


if __name__ == "__main__":
    build(Path(sys.argv[1]), sys.argv[2])
