interface GenericInterface<T> {
  value: T;
}

class MyClass implements GenericInterface<string> {
  value: string = "Hello";
}

class MyClass2 implements GenericInterface<number> {
  value: number = 100;
}

// interface GenericInterface<T> {
//     value: T;
//   }

// Amra ekta generic type dia interface banailam . tar mane holo ei interface k implement kore jokhn jokhn class banano jabe tokhn
// type ta oi class bananor somoy dawa jabe tate ei value er jnno ei class implment hbe

class MyClass3 implements GenericInterface<string> {
  value: string = "Duke";
}

// ei j ekhne ei kaj ta holo jokhn amra class create kortese oi GenericInterface k implement kore tokhn amra oi type take dite partse
// and jokhn class a oi property ta dibo tokhn oi type ta automatically nia nibe
