const express = require("express");
const app = express();
const PORT = 4040;

const greetings = {
  EN: "Hello World",
  NL: "Hallo Wereld",
  IT: "Ciao Mondo",
  FR: "Bonjour le monde",
  ES: "Hola Mundo",
  DE: "Hallo Welt",
};

app.get("/:lang?", (req, res) => {
  const lang = req.params.lang ? req.params.lang.toUpperCase() : "EN";
  const message = greetings[lang] || `Hello World in ${lang} not found`;

  res.json({ ok: true, data: message });
});

app.get("/:lang/:message", (req, res) => {
  const lang = req.params.lang.toUpperCase();
  const message = decodeURIComponent(req.params.message);

  greetings[lang] = message;

  res.json({ ok: true, data: `${lang} added with message "${message}"` });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
