interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
  isAdmin: boolean;
  inTime: Array;
  outTIme: Array;
  onLeave: Array;
  shortLeave: Array;
  createdAt: Date;
  updatedAt: Date;
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
