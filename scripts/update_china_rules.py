#!/usr/bin/env python3
"""Update DoH2 domestic split rules from blueskycrb/ios_surge china.list.

The Worker embeds DOMAIN, DOMAIN-SUFFIX, and DOMAIN-KEYWORD rules so runtime
requests do not depend on GitHub availability or an external KV binding.
"""

from __future__ import annotations

import json
import re
import urllib.request
from pathlib import Path

SOURCE_URL = "https://raw.githubusercontent.com/blueskycrb/ios_surge/main/china.list"
WORKER = Path(__file__).resolve().parents[1] / "_worker.js"
START_MARKER = "// BEGIN GENERATED CHINA RULES"
END_MARKER = "// END GENERATED CHINA RULES"
DOMAIN_RE = re.compile(r"^[a-z0-9*_.\-\u4e00-\u9fff]+$")


def clean(value: str) -> str:
    return value.split("#", 1)[0].strip().strip('"').strip("'").lower().strip(".")


def fetch_source() -> str:
    req = urllib.request.Request(
        SOURCE_URL,
        headers={"User-Agent": "CF-Workers-DoH rule updater"},
    )
    with urllib.request.urlopen(req, timeout=45) as response:
        return response.read().decode("utf-8", "ignore")


def parse_rules(text: str) -> tuple[list[str], list[str], list[str]]:
    exact: set[str] = set()
    suffix: set[str] = set()
    keyword: set[str] = set()

    for line in text.splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("#") or "," not in stripped:
            continue
        rule_type, value = stripped.split(",", 1)
        rule_type = rule_type.strip().upper()
        value = clean(value)
        if not value or not DOMAIN_RE.match(value):
            continue
        if rule_type == "DOMAIN":
            exact.add(value)
        elif rule_type == "DOMAIN-SUFFIX":
            suffix.add(value)
        elif rule_type == "DOMAIN-KEYWORD":
            keyword.add(value.strip("."))

    return sorted(exact), sorted(suffix), sorted(keyword)


def render_rules(exact: list[str], suffix: list[str], keyword: list[str]) -> str:
    return (
        f"{START_MARKER}\n"
        f"// Generated from {SOURCE_URL}\n"
        "// Includes DOMAIN, DOMAIN-SUFFIX, and DOMAIN-KEYWORD rules.\n"
        f"const CHINA_RULE_EXACT = {json.dumps(exact, ensure_ascii=False, indent=2)};\n\n"
        f"const CHINA_RULE_SUFFIX = {json.dumps(suffix, ensure_ascii=False, indent=2)};\n\n"
        f"const CHINA_RULE_KEYWORD = {json.dumps(keyword, ensure_ascii=False, indent=2)};\n"
        f"{END_MARKER}"
    )


def replace_generated_block(worker_text: str, generated: str) -> str:
    start = worker_text.find(START_MARKER)
    end = worker_text.find(END_MARKER)
    if start != -1 and end != -1 and end > start:
        end += len(END_MARKER)
        return worker_text[:start] + generated + worker_text[end:]

    legacy_start = worker_text.find("// Generated from https://github.com/blueskycrb/ios_surge/blob/main/china.list")
    legacy_end = worker_text.find("const DOH2_DOMESTIC_SUFFIXES = CHINA_RULE_SUFFIX;", legacy_start)
    if legacy_start == -1 or legacy_end == -1:
        raise RuntimeError("Could not find generated china rules block in _worker.js")
    return worker_text[:legacy_start] + generated + "\n" + worker_text[legacy_end:]


def normalize_crlf(text: str) -> str:
    return text.replace("\r\n", "\n").replace("\r", "\n").replace("\n", "\r\n")


def main() -> None:
    source = fetch_source()
    exact, suffix, keyword = parse_rules(source)
    if not suffix:
        raise RuntimeError("Parsed zero DOMAIN-SUFFIX rules; refusing to update")
    generated = render_rules(exact, suffix, keyword)
    old_text = WORKER.read_text(encoding="utf-8")
    new_text = replace_generated_block(old_text, generated)
    WORKER.write_text(normalize_crlf(new_text), encoding="utf-8")
    print(
        f"Updated china rules: {len(exact)} exact, "
        f"{len(suffix)} suffix, {len(keyword)} keyword"
    )


if __name__ == "__main__":
    main()
