const express = require("express")
const router = express.Router()
const db = require("../data/config")

//GET SALES
router.get("/", async (req, res, next) => {
    try {
        const sales = await db("sales")
        res.json(sales)
    } catch(error) {
        next(error)
    }
})
//POST SALES
router.get("/", async (req, res, next) => {
    try {

    } catch(error) {
        next(error)
    }
})
//DELETE SALES
router.get("/", async (req, res, next) => {
    try {

    } catch(error) {
        next(error)
    }
})
//PUT SALES
router.get("/", async (req, res, next) => {
    try {

    } catch(error) {
        next(error)
    }
})

module.exports = router