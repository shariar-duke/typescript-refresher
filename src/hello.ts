function greetings<T, V>(param1: T, param2: V) {
  console.log(`Hello ${param1}. Type of ${param1} is ${typeof param1} `);
}

greetings(
  {
    name: "Shariar",
    age: 29,
  },
  "Duke"
);

// a funcation with two generic peramter
