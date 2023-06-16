const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Server arriba" });
});

const ruta_usuarios = require("./routes/usuarios");

app.use("/api/v1/usuarios", ruta_usuarios);

module.exports = app