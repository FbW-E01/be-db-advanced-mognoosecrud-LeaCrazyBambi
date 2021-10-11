import Mongoose from "mongoose";

// Connect to MongoDB
const connectionString = "mongodb://jimmy:passw0rd@localhost:27017/exampledb";

export async function connect() {
  await Mongoose.connect(connectionString);
  console.log("Connected!");
}

Mongoose.connection.on("error", (err) => {
  console.log("ERROR", err);
});
Mongoose.connection.on("connected", () => {
  console.log("Connected");
});
Mongoose.connection.on("disconnected", () => {
  console.log("Disconnected");
});

export async function disco() {
  await Mongoose.disconnect();
}
