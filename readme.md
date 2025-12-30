# Request Utility

## requestWithRetry

Send a request with retry support.

### Configuration

| Parameter | Type | Description |
|---------|------|-------------|
| retryCount | number | Number of retry attempts. Range: **1–5**. Default: **3**. Passing a value outside **1–5** throws an error. |

### Example

Default (uses the implementation default of 3 attempts):

```ts
requestWithRetry("/api/data");
```

Custom valid value:

```ts
requestWithRetry("/api/data", { retryCount: 2 });
```