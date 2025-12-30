# Request Utility

## requestWithRetry

Send a request with retry support.

### Configuration

| Parameter | Type | Description |
|---------|------|-------------|
| retryCount | number | Number of retry attempts. Range: **1–5**, default is **3** |

### Example

```ts
requestWithRetry("/api/data", {
  retryCount: 3
});
