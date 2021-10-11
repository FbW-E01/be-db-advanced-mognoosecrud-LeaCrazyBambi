import { connect, disco } from "./connection.js";
import { User } from "./user.js";

await connect();

const users = await User.find();
console.log(users);

await disco();
