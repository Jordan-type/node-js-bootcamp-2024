const express = require('express');
const router = express.Router();


const { createTeacher } = require('../../controllers/teacher.controller')


router.post('/create/new-teacher', createTeacher)


module.exports = router