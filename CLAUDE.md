# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm ci

# Install Playwright browsers (required after fresh clone)
npx playwright install

# Run all tests
npx playwright test

# Run a single test file
npx playwright test tests/auth.spec.ts

# Run tests by tag
npx playwright test --grep @smoke
npx playwright test --grep @regression

# Run with interactive UI
npx playwright test --ui

# View the HTML report after a run
npx playwright show-report
```

## Architecture

This is a **Playwright end-to-end test suite** (TypeScript) for a live Firebase-hosted web app (`designerblinds-c482a.web.app`). There is no local dev server — tests always run against the deployed app. The `BASE_URL` environment variable overrides the default target.

### Test organization

- `tests/` — spec files. Tags (`@smoke`, `@regression`) are embedded in test names and used with `--grep` to filter runs.
- `utils/` — shared page-object-style helper functions imported across specs. Helpers accept a `Page` instance and encapsulate interactions + assertions for a given domain (auth, navigation, quote form).
- `data/taskCases.ts` — test data objects that drive data-driven tests. The regression loop in `quote.spec.ts` iterates `quoteCases` and runs the same test logic against each entry.

### Key patterns

- **Element selection**: tests prefer `getByTestId()` (matching `data-testid` attributes) over CSS selectors.
- **Regression tests are currently skipped** via `test.skip` in `quote.spec.ts`. To re-enable them, remove the `.skip`.
- **Auth credentials** are hardcoded in `utils/auth.ts` (`Testuser1@gmail.com` / `Password`).
- **CI behavior** (set by `process.env.CI`): headless mode, 1 retry, 1 worker. Locally: headed by default, no retries, parallel workers.
- Runs against **Chromium and Firefox** by default; Mobile/Edge/Chrome projects are commented out in `playwright.config.ts`.
