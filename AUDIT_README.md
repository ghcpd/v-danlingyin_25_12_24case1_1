Audit: Documentation vs implementation for `requestWithRetry`

What was audited
- The README documentation for `requestWithRetry` against its implementation in `input.ts`.

Errors found
- Incorrect parameter range and default for `retryCount` in `README.md`.
  - Documented: Range 0–10, default 1
  - Actual (code): Range 1–5, default 3
  - Severity: High (may cause runtime errors)

How citations were derived
- Exact lines were inspected in `input.ts` for both the JSDoc comments and runtime checks:
  - Default: `const retryCount = options?.retryCount ?? 3;` (line 16)
  - Validation: `if (retryCount < 1 || retryCount > 5) { throw new Error(...) }` (lines 18-19)
- The original README content is preserved in `README_backup.md` for comparison.

How reviewers can verify
1. Open `input.ts` and confirm default and validation logic.
2. Open `README.md` to confirm the corrected documentation now states range 1–5 and default 3.
3. Review `README_backup.md` to see the original, incorrect documentation.

Files produced by this audit
- `README_backup.md` — original documentation (unchanged)
- `README.md` — corrected documentation
- `report.json` — machine-readable audit report
- `citations.md` — human-readable evidence

Notes
- No source code was modified; only documentation files were changed to match code behaviour.
