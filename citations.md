# Documentation Audit - Citation Evidence

## Issue 1: Incorrect Value Range

### Documentation Claim
**File:** readme.md  
**Section:** Configuration  
**Quoted text:** "Range: **0–10**"

### Code Implementation
**File:** input.ts  
**Lines 6-8 (JSDoc comment):**
```typescript
/**
 * Number of retry attempts.
 * Must be between 1 and 5.
```

**Lines 17-19 (Runtime validation):**
```typescript
if (retryCount < 1 || retryCount > 5) {
    throw new Error("retryCount must be between 1 and 5");
}
```

### Why It's Incorrect
The documentation states the valid range is 0–10, but the code explicitly validates that `retryCount` must be between 1 and 5 (inclusive). Any value outside this range throws a runtime error. The documented range is factually wrong.

---

## Issue 2: Incorrect Default Value

### Documentation Claim
**File:** readme.md  
**Section:** Configuration  
**Quoted text:** "default is **1**"

### Code Implementation
**File:** input.ts  
**Lines 7 (JSDoc comment):**
```typescript
 * Default is 3.
```

**Line 15 (Runtime default):**
```typescript
const retryCount = options?.retryCount ?? 3;
```

### Why It's Incorrect
The documentation claims the default value is 1, but the code uses the nullish coalescing operator (`??`) to set the default to 3 when `retryCount` is not provided. The JSDoc also confirms the default is 3. The documented default is wrong.

---

## Issue 3: Invalid Example Code

### Documentation Claim
**File:** readme.md  
**Section:** Example  
**Quoted code:**
```ts
requestWithRetry("/api/data", {
  retryCount: 0
});
```

### Code Behavior
**File:** input.ts  
**Lines 17-19:**
```typescript
if (retryCount < 1 || retryCount > 5) {
    throw new Error("retryCount must be between 1 and 5");
}
```

### Why It's Incorrect
The example demonstrates calling `requestWithRetry` with `retryCount: 0`, which violates the code's validation rule. This example would throw an error at runtime: `"retryCount must be between 1 and 5"`. The example provides invalid, non-functional code that misleads users into writing broken code.

---

## Summary

All three issues are **High Severity** because they lead to incorrect API usage and runtime errors:
- Users following the documented range (0–10) would encounter runtime failures
- Users relying on the documented default (1) would get 3 instead
- Users copying the example code would get an immediate runtime error
