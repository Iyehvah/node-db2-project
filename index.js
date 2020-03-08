const express = require("express")
const helmet = require("helmet")
const carsRouter = require("./cars/cars-router")
const welcome = require("./welcome/welcome")
const salesRouter = require("./sales/sales-router")

const server = express()
const port = 5000

server.use(helmet())
server.use(express.json())
server.use("/", welcome)
server.use("/cars", carsRouter)
server.use("/sales", salesRouter)

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
