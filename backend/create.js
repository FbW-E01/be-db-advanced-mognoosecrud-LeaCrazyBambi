import { connect, disco } from "./connection.js";
import { User } from "./user.js";

await connect();

await User.create({
  email: "LCB@gmail.com",
  password: "12345678",
  username: "LeaCrazyBambi",
});

await disco();
