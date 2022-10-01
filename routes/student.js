const express = require('express');
const { getAll, get, add, update, upload, remove } = require('../controller/student');

const router = express.Router();

router.get('/', getAll)
        .get('/:id', get)
        .post('/', add)
        .put('/:id', update)
        .delete('/:id', remove)
        .put('/:id', upload);

module.exports = router;