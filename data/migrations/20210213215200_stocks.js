
exports.up = (knex => {
  return knex.schema.createTable("stocks", tbl => {
    tbl.increments("id").primary();

    tbl.jsonb("meta").notNullable();
    tbl.jsonb("timeseries");

    tbl.timestamps(true, true);
  });
});

exports.down = (knex => {
  return knex.schema.dropTableIfExists("stocks");
});
