const asyncHandler = require('express-async-handler')
// @Description : GET
// @Routing : /api/goals/
// @Access : Private

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message : "Get Goals"})

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

    res.status(200).json({message : "Set Goals"})

})

// @Description : PUT
// @Routing : /api/goals/:id
// @Access : Private

const putGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message : "Update Goals(Put)"})

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

const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message : "Delete Goals"})

})

module.exports = {
    getGoals,
    setGoals,
    putGoal ,
    patchGoal,
    deleteGoals,
}