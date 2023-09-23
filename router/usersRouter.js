// external imports
const express = require('express');

// internal imports
const { getUsers } = require('../controller/usersController');
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');

const router = express.Router();

// users page
router.get('/', decorateHtmlResponse('User'), getUsers);

module.exports = router;
