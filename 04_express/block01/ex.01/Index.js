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
  const message = greetings[lang] || greetings.EN;

  res.json({ ok: true, data: message });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
