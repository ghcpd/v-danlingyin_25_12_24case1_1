# Audit Summary

## What was audited
- The project README (`README.md`) and the implementation in `input.ts` for `requestWithRetry`'s `retryCount` parameter.

## Issues found
- Incorrect documented range and default for `retryCount` (README said 0–10, default 1; code enforces 1–5, default 3). (High severity)
- The README example shows `retryCount: 0`, which is invalid and would cause a runtime error. (High severity)

## How citations were derived
- Documentation lines were extracted from `README.md` (Configuration table and Example block).
- Code evidence taken from `input.ts`: JSDoc comments (lines 5–7) for the asserted requirement and the implementation (default assignment line 16 and the validation at lines 18–19).

## How to verify fixes
1. Compare `README_backup.md` with the updated `README.md` to see corrected range, default, and example.
2. Optionally run a quick TypeScript/Node test: calling `requestWithRetry('/api', { retryCount: 0 })` should throw; calling it with no options or with `retryCount: 3` should return an object with `retryCount: 3`.

## Files added by this audit
- `README_backup.md` — original README preserved
- `README.md` — updated documentation
- `report.json` — machine-readable issue report
- `citations.md` — side-by-side evidence and explanation
- `AUDIT_README.md` — this summary
