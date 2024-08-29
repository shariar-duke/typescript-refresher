type Employe = {
  id: number;
  name: string;
  email?: string;
  salary: number;
};

type Deparment = {
  name: string;
  employees: Employe[];
};

// ekhn onk gula employer ekta array banabo jar type dbo Employe

const employeeCollection: Employe[] = [
  {
    id: 1,
    name: "Shariar",
    // email:"shariarmahmud225@gmail.com",
    salary: 2000,
  },

  {
    id: 2,
    name: "Shariar",
    email: "shariarmahmud225@gmail.com",
    salary: 2000,
  },
  {
    id: 3,
    name: "Shariar",
    email: "shariarmahmud225@gmail.com",
    salary: 2000,
  },
];

// ekhn ekta deparment banabo jar modhe dept er name thakbe and employee er ekta collection o thakbe

const newDepartment: Deparment = {
  name: "ECE",
  employees: employeeCollection,
};
