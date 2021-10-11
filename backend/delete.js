import { connect, disco } from "./connection.js";
import { User } from "./user.js";

await connect();

await User.deleteOne({ username: "User50" });

await disco();
