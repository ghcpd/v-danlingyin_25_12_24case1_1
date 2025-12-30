// input.ts

export interface RetryOptions {
  /**
   * Number of retry attempts.
   * Must be between 1 and 5.
   * Default is 3.
   */
  retryCount?: number;
}

export function requestWithRetry(
  url: string,
  options?: RetryOptions
) {
  const retryCount = options?.retryCount ?? 3;

  if (retryCount < 1 || retryCount > 5) {
    throw new Error("retryCount must be between 1 and 5");
  }

  return {
    url,
    retryCount
  };
}
