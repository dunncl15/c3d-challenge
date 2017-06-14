/* eslint-disable arrow-body-style */

exports.seed = function (knex, Promise) {
  return knex('locations').del()
    .then(() => {
      return Promise.all([
        knex('locations').insert([
          {
            name: 'Denver',
            lat: 39.742043,
            lng: -104.991531,
          },
          {
            name: 'LA',
            lat: 34.052235,
            lng: -118.243683,
          },
          {
            name: 'Boston',
            lat: 42.364506,
            lng: -71.038887,
          },
        ]),
      ]);
    });
};
