# Request Utility

## requestWithRetry

Send a request with retry support.

### Configuration

| Parameter | Type | Description |
|---------|------|-------------|
| retryCount | number | Number of retry attempts. Range: **0–10**, default is **1** |

### Example

```ts
requestWithRetry("/api/data", {
  retryCount: 0
});
```
