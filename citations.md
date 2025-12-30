# Citations for Incorrect Documentation Issues

## Issue 1: Incorrect Default Value for retryCount

### Documentation Statement
Number of retry attempts. Range: **0–10**, default is **1**

### Code Implementation
```ts
const retryCount = options?.retryCount ?? 3;
```

### Explanation
The documentation claims the default value for retryCount is 1, but the code implementation uses the nullish coalescing operator (??) to default to 3 if options?.retryCount is undefined or null. This mismatch could lead to unexpected behavior for users relying on the documented default.

## Issue 2: Incorrect Range for retryCount

### Documentation Statement
Number of retry attempts. Range: **0–10**, default is **1**

### Code Implementation
```ts
if (retryCount < 1 || retryCount > 5) {
  throw new Error("retryCount must be between 1 and 5");
}
```

### Explanation
The documentation specifies the range for retryCount as 0–10, but the code enforces a stricter range of 1 to 5 by throwing an error for values outside this range. Additionally, the example in the documentation uses retryCount: 0, which would cause a runtime error according to the code implementation.