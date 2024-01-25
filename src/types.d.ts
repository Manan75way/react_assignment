// interface User {
//   data: {
//     msg:string,
//     token:string,
//     users: {
//       _id: string;
//       username: string;
//       password: string;
//       email: string;
//       isAdmin: boolean;
//       inTime: Array;
//       outTIme: Array;
//       onLeave: Array;
//       shortLeave: Array;
//       createdAt: Date;
//       updatedAt: Date;
//     };
//   };
// }

interface User {
  msg: string;
  token: string;
  users: {
    createdAt: string;
    email: string;
    inTime: any[]; 
    isAdmin: boolean;
    onLeave: any[]; 
    outTime: any[]; 
    password: string;
    shortLeave: any[]; 
    updatedAt: string;
    username: string;
    __v: number;
    _id: string;
    [[Prototype]]: Object; 
  };
}

interface RegisterUsers {
  username: string;
  email: string;
  password: string;
  age: number;
}

interface LoginUser {
  email: string;
  password: string;
}
