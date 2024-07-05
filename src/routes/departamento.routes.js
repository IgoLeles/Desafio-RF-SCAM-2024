const express = require('express');
const router = express.Router();
const Departamento = require('../models/departamento.model');

router.post('/', (req, res) => {
    Departamento.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(result);
    });
});

router.get('/', (req, res) => {
    Departamento.findAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(results);
    });
});

router.get('/:id', (req, res) => {
    Departamento.findById(req.params.id, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(result);
    });
});

router.put('/:id', (req, res) => {
    Departamento.update(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(result);
    });
});

router.delete('/:id', (req, res) => {
    Departamento.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(result);
    });
});

module.exports = router;
