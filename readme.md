# Request Utility

## requestWithRetry

Send a request with retry support.

### Configuration

| Parameter | Type | Description |
|---------|------|-------------|
| retryCount | number | Number of retry attempts. Range: **1–5**; default is **3** (when omitted) |

Notes:
- Passing a value outside the range 1–5 will cause the function to throw an error.

### Example

```ts
// uses default retryCount = 3
requestWithRetry("/api/data");

// explicit valid value
requestWithRetry("/api/data", { retryCount: 2 });
```
