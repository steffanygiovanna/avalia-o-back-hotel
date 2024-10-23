const express = require('express');
const router = express;

const clientes = require('./controllers/clientes')
const telefones = require('./controllers/telefones')
const quartos = require('./controllers/quartos')
const reservas = require('./controllers/reservas')
const estacionamentos = require('./controllers/estacionamentos')

const testeget = (req, res) => {
    res.json("API funcionando")
};

const testepost = (req, res) => {
    res.json("API funcionando")
};

router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);

router.post('/telefones', telefones.create);
router.get('/telefones', telefones.read);

router.post('/quartos', quartos.create);
router.get('/quartos', quartos.read);

router.post('/reservas', reservas.create);
router.get('/reservas', reservas.read);

router.post('/estacionamentos', estacionamentos.create);
router.get('/estacionamentos', estacionamentos.read);


module.exports = router();