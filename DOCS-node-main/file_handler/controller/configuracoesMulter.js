const multer = require("multer");

const uploadSalvaNoServidor = multer({
  dest: "arquivos",
});

const uploadComBuffer = multer({});

const uploadComFiltro = multer({
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.pdf$/)) {
      return cb(new Error("Please upload an pdf"));
    }

    cb(undefined, true);
  },
});

module.exports = { uploadSalvaNoServidor, uploadComBuffer, uploadComFiltro };
