
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stocks').del()
    .then(function () {
      // Inserts seed entries
      return knex('stocks').insert([
        {
          meta: JSON.stringify({name: 'Clifford'}),
          timeseries: JSON.stringify({lastname: 'Kasper'}),
        },
      ]);
    });
};
