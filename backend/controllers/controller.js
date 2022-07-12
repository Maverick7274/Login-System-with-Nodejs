const asyncHandler = require('express-async-handler')


const Goal = require("../models/models")
const User = require("../models/userModel")
// @Description : GET
// @Routing : /api/goals/
// @Access : Private

const getGoals = asyncHandler(async (req, res) => {

    const goals = await Goal.find({user: req.user.id})

    res.status(200).json(goals)

})

// @Description : POST
// @Routing : /api/goals/
// @Access : Private

const setGoals = asyncHandler(async (req, res) => {
    // console.log(req.body)

    if(!req.body.text)
    {
        res.status(400)
        throw new Error("Please add a Text Field")
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })


    res.status(200).json(goal)

})

// @Description : PUT
// @Routing : /api/goals/:id
// @Access : Private

const putGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal Not Found!')
    }

    // Check Credentials

    if(!req.user){
        res.status(401)
        throw new Error("User Not Found")
    }

    // Logged In User Matches the Goal User
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("User Not Authorized")
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true,})


    res.status(200).json(updatedGoal)

})

// @Description : PATCH
// @Routing : /api/goals/:id
// @Access : Private

const patchGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message : "Update Goals(Patch)"})

})

// @Description : DELETE
// @Routing : /api/goals/:id
// @Access : Private

const deleteGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal Not Found!')
    }

    // Check Credentials

    if(!req.user){
        res.status(401)
        throw new Error("User Not Found")
    }

    // Logged In User Matches the Goal User
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("User Not Authorized")
    }

    await Goal.deleteOne()
    // await Goal.remove()


    res.status(200).json({ id: req.params.id })

})

module.exports = {
    getGoals,
    setGoals,
    putGoal ,
    patchGoal,
    deleteGoal,
}