# Citations — requestWithRetry documentation vs implementation

Issue: README.md documents `retryCount` incorrectly. Below are side-by-side extracts and a short explanation for each mismatch.

1) Range mismatch
- Documentation (original): README_backup.md:11
  - "| retryCount | number | Number of retry attempts. Range: **0–10**, default is **1** |"

- Code (authoritative): input.ts:18-19
  - "if (retryCount < 1 || retryCount > 5) {\n    throw new Error(\"retryCount must be between 1 and 5\");\n  }"

- Explanation: The README claims allowed values are 0–10; the implementation rejects values <1 or >5 and throws. Allowing 0 (or >5) per the docs would cause runtime errors — the documented range is incorrect.

2) Default value mismatch
- Documentation (original): README_backup.md:11
  - "default is **1**"

- Code (authoritative): input.ts:16 and input.ts JSDoc (lines 5–7)
  - "const retryCount = options?.retryCount ?? 3;"
  - JSDoc: "Default is 3."

- Explanation: The implementation uses 3 when `retryCount` is omitted; README states the default is 1. This will cause callers to see different retry behavior than documented.

3) Example shows an invalid value
- Documentation (original example): README_backup.md:16-17
  - "requestWithRetry(\"/api/data\", {\n  retryCount: 0\n});"

- Code (authoritative): input.ts:18-19
  - "if (retryCount < 1 || retryCount > 5) { throw new Error(\"retryCount must be between 1 and 5\"); }"

- Explanation: The example uses `retryCount: 0`, which the implementation rejects. Running the example will produce a runtime error — the example is invalid and dangerous for users.

Conclusion: The README contained a critical range error and a default-value mismatch; both are now corrected in `README.md`. The original file is preserved as `README_backup.md` for audit traceability.