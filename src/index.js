const puerto = process.env.PORT || 3001;
const app = require("./app");

app.listen(puerto, () => {
  console.log(`Corriendo en el puerto ${puerto}`);
});
