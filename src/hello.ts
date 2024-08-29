function sum(a: number, b?: number): number {
  if (b) {
    return a + b;
  }

  return a;
}

// optional peramter while calling function

sum(3 + 4);
