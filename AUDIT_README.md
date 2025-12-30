Audit: requestWithRetry documentation vs implementation

What was audited
- Public README (`README.md`) and the implementation (`input.ts`) for the `requestWithRetry` API.

Summary of findings
- 3 issues found (2 High, 1 Medium):
  - Incorrect documented range (README said 0–10; code enforces 1–5) — High
  - Invalid example that uses `retryCount: 0` (will throw) — High
  - Incorrect documented default (README said default 1; implementation default is 3) — Medium

How citations were derived
- Source of truth: the runtime implementation in `input.ts`.
- Documentation extracts taken from the original README (preserved as `README_backup.md`).
- All citations include file name and exact line numbers; reviewers can open the files and see the quoted lines.

How reviewers can verify
1. Open `input.ts` and inspect:
   - default expression: `const retryCount = options?.retryCount ?? 3;` (confirms default = 3)
   - range check: `if (retryCount < 1 || retryCount > 5) { ... }` (confirms allowed range 1–5)
2. Open `README_backup.md` to see the original (incorrect) documentation and `README.md` to see the corrected text.
3. (Runtime) Call the function in a Node/TypeScript REPL or test: `requestWithRetry('/x', { retryCount: 0 })` — it should throw.

Files produced/modified
- Created: `README_backup.md`, `report.json`, `citations.md`, `AUDIT_README.md`
- Updated: `README.md` (now matches `input.ts`)

Recommended next steps
- Review and approve the updated `README.md`.
- Add a unit test that asserts valid bounds and documents behavior (suggested).

Contact
- If you want, I can open a PR with these doc changes and add a unit test.