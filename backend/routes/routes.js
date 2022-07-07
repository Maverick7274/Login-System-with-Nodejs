const express = require('express')

const router = express.Router()

const { getGoals,setGoals, putGoal , patchGoal, deleteGoal } = require('../controllers/controller')

router.route('/').get(getGoals).post(setGoals)

router.route('/:id').put(putGoal).patch(patchGoal).delete(deleteGoal)

module.exports = router

