interface Customer {
  name: string;
  address: string;
}

const rahim: Customer = {
  name: "Rahim",
  address: "Hong Kong",
};

class GoldenChase implements Customer {
  name: string;
  address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}

const abcd = new GoldenChase("ABCD", "Dhaka");

console.log(abcd.name);
