const express = require("express");
const app = express();
const PORT = 4040;

const greetings = {};

const response = (ok, data) => ({ ok, data });

app.get("/:lang", (req, res) => {
  const lang = req.params.lang.toUpperCase();
  res.json(
    response(true, greetings[lang] || `Hello World in ${lang} not found`)
  );
});

app.get("/:lang/:message", (req, res) => {
  const lang = req.params.lang.toUpperCase();
  if (greetings[lang])
    return res.json(
      response(false, `Action forbidden, ${lang} is already present`)
    );

  greetings[lang] = decodeURIComponent(req.params.message);
  res.json(response(true, `${lang} added with message "${greetings[lang]}"`));
});

app.get("/:lang/update/:message", (req, res) => {
  const lang = req.params.lang.toUpperCase();
  if (!greetings[lang])
    return res.json(response(false, `${lang} not found, cannot update`));

  const oldMessage = greetings[lang];
  greetings[lang] = decodeURIComponent(req.params.message);
  res.json(
    response(
      true,
      `${lang} updated from '${oldMessage}' to '${greetings[lang]}'`
    )
  );
});

app.get("/:lang/remove", (req, res) => {
  const lang = req.params.lang.toUpperCase();
  res.json(
    greetings[lang]
      ? (delete greetings[lang], response(true, `${lang} removed`))
      : response(false, `${lang} not found`)
  );
});

app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
