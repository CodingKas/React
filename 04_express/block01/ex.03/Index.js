const express = require("express");
const app = express();
const PORT = 4040;

const greetings = {};

app.get("/:lang", (req, res) => {
  const lang = req.params.lang.toUpperCase();
  const message = greetings[lang] || `Hello World in ${lang} not found`;

  res.json({ ok: true, data: message });
});

app.get("/:lang/:message", (req, res) => {
  const lang = req.params.lang.toUpperCase();
  const message = decodeURIComponent(req.params.message);

  greetings[lang] = message;

  res.json({ ok: true, data: `${lang} added with message "${message}"` });
});

app.get("/:lang/remove", (req, res) => {
  const lang = req.params.lang.toUpperCase();

  if (greetings[lang]) {
    delete greetings[lang];
    res.json({ ok: true, data: `${lang} removed` });
  } else {
    res.json({ ok: false, data: `${lang} not found` });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
