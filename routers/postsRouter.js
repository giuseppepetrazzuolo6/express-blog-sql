const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController')

// index
router.get('/', postsController.index);

// destroy
router.delete('/:id', postsController.destroy)


module.exports = router

