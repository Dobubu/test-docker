const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());

app.get("/api", (req, res) => {
  res.send("Hello from the API!");
});

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});
