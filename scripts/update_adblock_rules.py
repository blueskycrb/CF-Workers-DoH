#!/usr/bin/env python3
"""Fetch Loon ad-block rules and generate a Worker JS snippet.

Only DNS-applicable REJECT rules are exported: DOMAIN, DOMAIN-SUFFIX,
DOMAIN-KEYWORD. URL/path rules are intentionally skipped because a DNS resolver
only sees queried domain names.
"""

from __future__ import annotations

import json
import re
import urllib.request
from pathlib import Path

SOURCE_URL = "https://kelee.one/Tool/Loon/Lpx/BlockAdvertisers.lpx"
LOON_UA = "Loon/918 CFNetwork/1496.0.7 Darwin/23.5.0"
OUT = Path(__file__).resolve().parents[1] / "adblock-rules.js"
DOMAIN_RE = re.compile(r"^[a-z0-9*_.-]+$")


def clean(value: str) -> str:
    return value.strip().strip('"').strip("'").lower().rstrip(".")


def fetch_source() -> str:
    req = urllib.request.Request(SOURCE_URL, headers={"User-Agent": LOON_UA})
    with urllib.request.urlopen(req, timeout=30) as response:
        return response.read().decode("utf-8")


def parse_rules(text: str) -> tuple[list[str], list[str], list[str]]:
    exact: set[str] = set()
    suffix: set[str] = set()
    keyword: set[str] = set()

    for line in text.splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("#") or stripped.startswith("["):
            continue

        parts = [part.strip() for part in stripped.split(",")]
        if "REJECT" not in {part.upper() for part in parts}:
            continue

        rule_type = parts[0].upper()
        if len(parts) < 2:
            continue

        value = clean(parts[1])
        if not value:
            continue

        if rule_type == "DOMAIN" and DOMAIN_RE.match(value):
            exact.add(value)
        elif rule_type == "DOMAIN-SUFFIX" and DOMAIN_RE.match(value):
            suffix.add(value)
        elif rule_type == "DOMAIN-KEYWORD":
            keyword.add(value)

    return sorted(exact), sorted(suffix), sorted(keyword)


def render_js(exact: list[str], suffix: list[str], keyword: list[str]) -> str:
    return (
        "// Generated from https://kelee.one/Tool/Loon/Lpx/BlockAdvertisers.lpx\n"
        "// Only DNS-applicable REJECT rules are included: DOMAIN, DOMAIN-SUFFIX, DOMAIN-KEYWORD.\n"
        "// Source fetched with Loon-compatible User-Agent.\n\n"
        f"const AD_BLOCK_EXACT = {json.dumps(exact, ensure_ascii=False, indent=2)};\n\n"
        f"const AD_BLOCK_SUFFIX = {json.dumps(suffix, ensure_ascii=False, indent=2)};\n\n"
        f"const AD_BLOCK_KEYWORD = {json.dumps(keyword, ensure_ascii=False, indent=2)};\n"
    )


def main() -> None:
    text = fetch_source()
    exact, suffix, keyword = parse_rules(text)
    OUT.write_text(render_js(exact, suffix, keyword), encoding="utf-8")
    print(
        f"Wrote {OUT} with {len(exact)} exact, "
        f"{len(suffix)} suffix, {len(keyword)} keyword rules"
    )


if __name__ == "__main__":
    main()
