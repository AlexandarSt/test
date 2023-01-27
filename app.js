const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("CICD completed successfully! This is new commit and change!"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("Target is healthy");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
