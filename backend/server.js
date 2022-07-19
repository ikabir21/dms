import express from "express";
import dotenv from "dotenv";

// project imports
import configureExpress from "./src/config/appConfig.js";
import connectDB from "./src/config/db.js";

dotenv.config();
const app = express();

  const { DB_URL, PORT = 4000 } = process.env;
// const DB_URL="mongodb://localhost:27017/users";
// const PORT=3000;
await connectDB(DB_URL);
configureExpress(app);

// Run the server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

app.on("unhandledRejection", (err) => {
  console.log(`Error: ${err}`);
  app.close(() => app.exit(1));
});
