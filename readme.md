# Request Utility

## requestWithRetry

Send a request with retry support.

### Configuration

| Parameter | Type | Description |
|---------|------|-------------|
| retryCount | number | Number of retry attempts. Range: **1–5**, default is **3**. Providing a value outside this range will cause the function to throw an error. |

### Example

```ts
// using the default retryCount (3)
requestWithRetry("/api/data");

// or specify a valid explicit value
requestWithRetry("/api/data", {
  retryCount: 3
});
