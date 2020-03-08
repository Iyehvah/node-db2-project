
exports.up = async function(knex) {
    await knex.schema.createTable("sales", (table) => {
        table.increments('id')
        table.integer('VIN').notNull().unique()
        table.text("profit").notNull()
        table.text("payment_type").notNull()
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("sales")
};
