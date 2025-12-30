# Citations and Evidence

## Issue 1 — Range & Default Mismatch (README.md vs input.ts)

Documentation statement (README.md):

> "| retryCount | number | Number of retry attempts. Range: **0–10**, default is **1** |"

Documentation reference: `README.md` — Configuration table (line with retryCount entry).

Code implementation (input.ts):

- JSDoc above `retryCount`:
  - "Must be between 1 and 5."
  - "Default is 3."
  (See `input.ts`, lines 5-7)
- Default assignment in function:
  - `const retryCount = options?.retryCount ?? 3;` (See `input.ts`, line 16)
- Validation (throws if out of range):
  - `if (retryCount < 1 || retryCount > 5) { throw new Error("retryCount must be between 1 and 5"); }` (See `input.ts`, lines 18-19)

Explanation:
- The README documents a permitted range of 0–10 and a default of 1, whereas the code enforces 1–5 and uses 3 as the default. This is a factual mismatch that can lead to incorrect usage.

---

## Issue 2 — Invalid Example (README.md vs input.ts)

Documentation example (README.md):

```ts
requestWithRetry("/api/data", {
  retryCount: 0
});
```

Documentation reference: `README.md` — Example section.

Code implementation (input.ts):

- Validation that will throw for 0:
  - `if (retryCount < 1 || retryCount > 5) { throw new Error("retryCount must be between 1 and 5"); }` (See `input.ts`, lines 18-19)

Explanation:
- The README example demonstrates calling `requestWithRetry` with `retryCount: 0`, but the code rejects 0 and throws. The example therefore demonstrates invalid usage and should be corrected.
