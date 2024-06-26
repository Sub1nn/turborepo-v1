import express from "express";

const app = express();

import { BACKEND_URL } from "@repo/common/config";

console.log(BACKEND_URL);
app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(3005, () => {
  console.log("App listening at http://localhost:3005");
});
