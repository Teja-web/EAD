const express = require('express');
const router = express.Router();
const model = require('../modelss/models');

router.get('/', async (req, res) => {
    try {
        const sts = await model.find();
        res.json(sts);
    } catch (err) {
        res.send('Error ' + err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const st = await model.findById(req.params.id);
        res.json(st);
    } catch (err) {
        res.send('Error ' + err);
    }
});

router.post('/', async (req, res) => {
    const st = new model({
        name: req.body.name,
        section: req.body.section,
        placementoffered: req.body.placementoffered,
    });

    try {
        const s = await st.save();
        res.json(s);
    } catch (err) {
        res.send('Error');
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const st = await model.findById(req.params.id);
        st.placementoffered = true;
        const s = await st.save();
        res.json(s);
    } catch (err) {
        res.send('Error');
    }
});

module.exports = router;

