function greetings<T>(name: T) {
  console.log(`Hello ${name}. Type of ${name} is ${typeof name} `);
}

greetings({
  name: "Shariar",
  age: 29,
});

// (name:T) ekne name er type ta T dise . And T ta holo ekta generic type . tar mane ami call korar somoy j type a dibo setai se accept krote parbe

// ekhn etar type sudhu T dile vbbe pura file a T name hoyto kno type define kora ase. but pabe na . Tai generic type declare korar age seta define korar way hosche  function greetings<T>(name: T) . evbe  (name:T) etar age <T>
