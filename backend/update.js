import { connect, disco } from "./connection.js";
import { User } from "./user.js";

await connect();

const userToUpdate = await User.findOneAndUpdate(
  { username: "User5" },
  { username: "High Five", email: "high5@aol.com" },
  { new: true }
);
console.log(userToUpdate);

await disco();
