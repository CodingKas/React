const express = require("express");
const app = express();
const PORT = 4040;

const accounts = {};

app.get("/account/new/:id/:amount", (req, res) => {
  const { id, amount } = req.params;
  if (accounts[id])
    return res.json({ ok: true, data: `account ${id} already exists` });

  accounts[id] = parseFloat(amount);
  res.json({ ok: true, data: `account ${id} created with ${amount} euros` });
});

app.get("/:id/balance", (req, res) =>
  res.json({ ok: true, data: accounts[req.params.id] ?? "Account not found" })
);

app.get("/:id/deposit/:amount", (req, res) => {
  const { id, amount } = req.params;
  if (!accounts[id]) return res.json({ ok: true, data: "Account not found" });

  accounts[id] += parseFloat(amount);
  res.json({ ok: true, data: `${amount} euros added to account num ${id}` });
});

app.get("/:id/withdraw/:amount", (req, res) => {
  const { id, amount } = req.params;
  if (!accounts[id]) return res.json({ ok: true, data: "Account not found" });

  accounts[id] -= parseFloat(amount);
  res.json({ ok: true, data: `${amount} euros taken from account num ${id}` });
});

app.get("/:id/delete", (req, res) => {
  if (!accounts[req.params.id])
    return res.json({ ok: true, data: "Account not found" });

  delete accounts[req.params.id];
  res.json({ ok: true, data: `Account num ${req.params.id} deleted` });
});

app.get("*", (_, res) =>
  res.json({ ok: true, data: "404 resource not found" })
);

app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
