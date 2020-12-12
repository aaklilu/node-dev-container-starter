require("env");
require("@babel/register")({
  rootMode: "upward",
  extensions: [".ts", ".d.ts"],
  include: [],
});

const express = require("express");

const app = express();
const port = process.env.PORT || 8080;
const { env } = process;

app.get("/", (req, res) => {
	res.send('Hello remote world!\n');
});

app.listen(port, () => {
  process.stdout.write(`[api] http://localhost:${port}/ `);
  console.log({ env: env.APP_ENV, version: env.VERSION, db: env.PGDATABASE });
});
