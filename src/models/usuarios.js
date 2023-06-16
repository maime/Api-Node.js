"use strict";

var Usuario = function (usuario) {
  this.id = usuario.id;
  this.nombre = usuario.nombre;
  this.email = usuario.email;
  this.telefono = usuario.telefono;
  this.direccion = usuario.direccion;
};



module.exports = Usuario;
