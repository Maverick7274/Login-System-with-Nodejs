const express = require('express')

const router = express.Router()

const { getGoals,setGoals, putGoal , patchGoal, deleteGoal } = require('../controllers/controller')

const {protect} = require('../middleware/authMiddleware')


router.route('/').get(protect, getGoals).post(protect, setGoals)

router.route('/:id').put(protect, putGoal).patch(protect, patchGoal).delete(protect, deleteGoal)

module.exports = router

