function formatInput<T extends { toString(): string }>(input: T): string {
  return (input as unknown as { toString(): string }).toString().toUpperCase();
}
