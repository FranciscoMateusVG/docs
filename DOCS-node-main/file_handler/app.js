const express = require("express");
const app = express();
const {
  uploadSalvaNoServidor,
  uploadComBuffer,
  uploadComFiltro,
} = require("./controller/configuracoesMulter.js");

app.get(
  "/salvaNoServidor",
  uploadSalvaNoServidor.single("arquivo"),
  (req, res) => {
    res.send(
      "Como foi especificado na configuracao do Multer o dest meu arquivo esta salvo na pasta dos arquivos"
    );
  }
);

app.get("/extraiBufffer", uploadComBuffer.single("arquivo"), (req, res) => {
  res.send(req.file.buffer);
});

app.get("/comFiltro", uploadComFiltro.single("arquivo"), (req, res) => {
  res.send(
    "Se voce esta vendo essa mensagem eh pq o arquivo enviado eh um pdf!"
  );
});

app.listen(3000);
