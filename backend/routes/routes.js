const express = require('express')

const router = express.Router()

const { getGoals,setGoals, putGoal , patchGoal, deleteGoals } = require('../controllers/controller')

router.route('/').get(getGoals).post(setGoals)

router.route('/:id').put(putGoal).patch(patchGoal).delete(deleteGoals)

module.exports = router

