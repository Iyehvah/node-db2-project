const express = require("express")
const router = express.Router()
const db = require("../data/config")

//READ / GET CARS
router.get("/", async (req, res, next) => {
    try {
        const cars = await db("cars")
        res.json(cars)
    } catch(error) {
        next(error)
    }
})

//POST A CAR / create a car
router.post("/", async (req, res, next) => {
    try {
        if(!req.body.VIN || !req.body.make || !req.body.model || !req.body.mileage) {
            res.status(400).json({
                message: "Missing a required parameter to enter the database"
            })
        }
        const carData = req.body
        const [id] = await db("cars").insert(carData)
        const newCar = await db("cars").where({ id })

        res.status(201).json(newCar)
    } catch(error) {
        next(error)
    }
})

//DELETE car 
router.delete("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        await db("cars").where("id", id).del()
        res.status(204).end()

    } catch(error) {
        next(error)
    }
})


module.exports = router

// table.integer('VIN').notNull().unique()
// table.text('make').notNull()
// table.text('model').notNull()
// table.integer('mileage').notNull()