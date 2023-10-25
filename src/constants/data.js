// const beneficiaries = [
//     {
//         id: '',
//         firstName: '',
//         lastName: '',
//         branch: '',
//         accountNumber: '',
//         phoneNumber: '',
//         email: '',
//         transactions: [{
//             id: '',
//             reason: '',
//             date: '',
//             amount: '',
//             state: '',
//         }],
//     }
// ]

export const beneficiaries = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    branch: 'Cairo',
    accountNumber: '1234567890',
    phoneNumber: '+201234567890',
    email: 'john.doe@example.com',
    transactions: [
      {
        id: 1,
        reason: 'Salary deposit',
        date: '2023-10-23',
        amount: 1000,
        state: 'Completed',
      },
      {
        id: 2,
        reason: 'Utility bill payment',
        date: '2023-10-25',
        amount: 200,
        state: 'Completed',
      },
      {
        id: 3,
        reason: 'Online shopping purchase',
        date: '2023-10-27',
        amount: 500,
        state: 'Completed',
      },
    ],
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    branch: 'Alexandria',
    accountNumber: '9876543210',
    phoneNumber: '+209876543210',
    email: 'jane.smith@example.com',
    transactions: [
      {
        id: 4,
        reason: 'Salary deposit',
        date: '2023-10-23',
        amount: 1000,
        state: 'Completed',
      },
      {
        id: 5,
        reason: 'Rent payment',
        date: '2023-10-26',
        amount: 2000,
        state: 'Completed',
      },
      {
        id: 6,
        reason: 'Restaurant bill payment',
        date: '2023-10-28',
        amount: 300,
        state: 'Completed',
      },
    ],
  },
  {
    id: 3,
    firstName: 'Peter',
    lastName: 'Jones',
    branch: 'Giza',
    accountNumber: '0987654321',
    phoneNumber: '+200987654321',
    email: 'peter.jones@example.com',
    transactions: [
      {
        id: 7,
        reason: 'Salary deposit',
        date: '2023-10-23',
        amount: 1000,
        state: 'Completed',
      },
      {
        id: 8,
        reason: 'Loan repayment',
        date: '2023-10-24',
        amount: 500,
        state: 'Completed',
      },
      {
        id: 9,
        reason: 'Gas bill payment',
        date: '2023-10-29',
        amount: 100,
        state: 'Completed',
      },
    ],
  },
  {
    id: 4,
    firstName: 'Mary',
    lastName: 'Williams',
    branch: 'Luxor',
    accountNumber: '1098765432',
    phoneNumber: '+201098765432',
    email: 'mary.williams@example.com',
    transactions: [
      {
        id: 10,
        reason: 'Salary deposit',
        date: '2023-10-23',
        amount: 1000,
        state: 'Completed',
      },
      {
        id: 11,
        reason: 'School fees payment',
        date: '2023-10-25',
        amount: 1500,
        state: 'Completed',
      },
      {
        id: 12,
        reason: 'Grocery purchase',
        date: '2023-10-3',
        state: 'failed',
      },
    ],
  },
];
