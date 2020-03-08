
exports.seed = async function(knex) {
  await knex("cars").truncate()

  await knex("cars").insert([
    {VIN: 123412341234, make: "ford", model: "mustang", mileage: 50000, title: "clean"},
    {VIN: 789078907890, make: "dodge", model: "caliber", mileage: 10000, title: "clean"},
    {VIN: 234523452345, make: "nissan", model: "juke", mileage: 12100, title: "clean"},
    {VIN: 345634563456, make: "ford", model: "f150", mileage: 1000, title: "clean"},
    {VIN: 456745674567, make: "ford", model: "mustang", mileage: 100000, title: "clean"}
  ])
};

