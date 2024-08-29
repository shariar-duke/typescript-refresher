type ISBN = number | string;

// tar type ISBN hbe sekhene value number o dawa jabe or string o dawa jabe j kno ekta ischa

type Book = {
  title: string;
  pages: number;
  isbn: ISBN;
};

type Writer = {
  name: string;
  age: number;
  address: string;
};

// ekhn amra jode chai amn ekta type banabo jetay property thakbe 6 ta . jate Book er ei 3ta property o thakbe and Writer er ei 3 tao thakbe
// tahle amra ei duta mile ekta and operter korte pare

type BookWriter = Book & Writer; // ei duta type mile ekta type holo ..jar modhe 3 ta 3 ta ei 6 ta Property a present thakte hbe .

const bookAndWriter: BookWriter = {
  title: "Friction",
  pages: 200,
  isbn: 12,
  name: "Kohtao keu nei",
  age: 36,
  address: "Saplapara Gaibandha",
};

// ei new bookAndWriter er modhe 6 ta property thaklo and 6 property er jnno new kno type banate holo na duta ager type combine kore new banano holo
