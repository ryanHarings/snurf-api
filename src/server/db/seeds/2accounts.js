
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('accounts').insert({
          name: 'Ryan Harings',
          email: 'ryan@email.com',
          password: '$2a$10$FAUzH4FoZTlW.hQVPA87NOAgB3NjDGGRf.rRaSlkyVJrCA9WCG4JG',
          active: true
        }),
        knex('accounts').insert({
          name: 'Sam Jeffers',
          email: 'sam@email.com',
          password: '$2a$10$FAUzH4FoZTlW.hQVPA87NOAgB3NjDGGRf.rRaSlkyVJrCA9WCG4JG',
          active: true,
          profilePicUrl: 'https://ohsodapper.files.wordpress.com/2012/02/tumblr_lwmvmpddwi1r6a91io1_1280.jpg'
        })
      ]);
    });
};
