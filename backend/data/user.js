
import bcrypt from'bcryptjs'

const users = [
  {
    name: "amit",
    email: "amit@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "sumit",
    email: "sumit@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "amrmit",
    email: "bumit@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users