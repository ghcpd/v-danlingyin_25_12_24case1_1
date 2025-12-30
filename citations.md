# Citation Evidence

## Issue: `retryCount` documented range/default is incorrect

Documentation statement (original README):

> "Number of retry attempts. Range: **0–10**, default is **1**"

- Source: `README_backup.md` (Configuration table row for `retryCount`)
- Exact text: `Number of retry attempts. Range: **0–10**, default is **1**`

Code implementation:

- `input.ts` (JSDoc on `RetryOptions.retryCount`):
  - Lines 5-7: `* Must be between 1 and 5.` / `* Default is 3.`
- `input.ts` (runtime enforcement and default):
  - Line 16: `const retryCount = options?.retryCount ?? 3;` (default = 3)
  - Lines 18-19: `if (retryCount < 1 || retryCount > 5) { throw new Error("retryCount must be between 1 and 5"); }` (range enforced 1–5)

Why the documentation is incorrect:
- The README claims the allowed range is 0–10 and default is 1, but the code sets the default to 3 and enforces a 1–5 range. Passing 0 or values >5 will throw at runtime; using the documented default (1) is not what the function uses.

Impact:
- Severity: High — callers following README may pass invalid values (e.g., 0) and encounter runtime errors.

Files referenced:
- `README_backup.md` (original doc)
- `readme.md` (updated to match code)
- `input.ts` (source code enforcing behaviour)
