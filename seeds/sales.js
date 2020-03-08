
exports.seed = async function(knex) {
  await knex("sales").truncate()

  await knex("sales").insert([
    {VIN: 123412341234, profit: "$100,000", payment_type: "cash"},
    {VIN: 789078907890, profit: "$100,000", payment_type: "cash"},
    {VIN: 234523452345, profit: "$100,000", payment_type: "card"},
    {VIN: 345634563456, profit: "$100,000", payment_type: "cash"},
    {VIN: 456745674567, profit: "$1.00", payment_type: "card"}
  ])
};

