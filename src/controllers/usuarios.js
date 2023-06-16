"use strict";
const Usuario = require("../models/usuarios");
const axios = require("axios");

// Listar todos los usuarios
exports.findAll = async function (req, res) {
  let dataGeneral = [];
  try {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );

    if (response.status === 200 || response.status === 304) {
      let resp = await response.data;

      dataGeneral = resp.map((data) => {
        const usuario = {
          id: data.id,
          nombre: data.name,
          email: data.email,
          telefono: data.phone,
          direccion: data.address.street
        };
        return usuario;
      })

    } else {
      return res
        .status(400)
        .json({ msj: "No se puedo conectar a servidor externo" });
    }
  } catch (err) {
    return res.status(401).send(err.message);
  }

  res.status(200).send(dataGeneral);
};

// Leer un usuario por id
exports.findById = async function (req, res) {
    let dataGeneral = [];
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${req.params.id}`
      );
  
      if (response.status === 200 || response.status === 304) {
        let data = await response.data;
        
        const usuario = {
          id: data.id,
          nombre: data.name,
          email: data.email,
          telefono: data.phone,
          direccion: data.address.street
        };

        dataGeneral.push(usuario);
  
      } else {
        return res
          .status(400)
          .json({ msj: "No se puedo conectar a servidor externo" });
      }
    } catch (err) {
      return res.status(401).send(err.message);
    }
  
    res.status(200).send(dataGeneral);
};
