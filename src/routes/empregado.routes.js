const express = require('express');
const router = express.Router();
const Empregado = require('../models/empregado.model');

router.post('/', (req, res) => {
    Empregado.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(result);
    });
});

router.get('/', (req, res) => {
    Empregado.findAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(results);
    });
});

router.get('/:id', (req, res) => {
    Empregado.findById(req.params.id, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(result);
    });
});

router.put('/:id', (req, res) => {
    Empregado.update(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(result);
    });
});

router.delete('/:id', (req, res) => {
    Empregado.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(result);
    });
});

module.exports = router;
