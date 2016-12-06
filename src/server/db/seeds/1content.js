
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('content').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('content').insert({
          type: 'snow',
          content: 'video',
          data: 'https://player.vimeo.com/video/191842147',
          title: 'First Snow Fall First Shred Fall 2016 Les Diablerets from Demonium DMC'
        }),
        knex('content').insert({
          type: 'snow',
          content: 'video',
          data: 'https://player.vimeo.com/video/77177549',
          title: 'Naked Ski and Snowboard Segment from VALHALLA'
        }),
        knex('content').insert({
          type: 'snow',
          content: 'video',
          data: 'https://player.vimeo.com/video/51911889',
          title: 'Pepping 2012'
        }),
        knex('content').insert({
          type: 'snow',
          content: 'video',
          data: 'https://player.vimeo.com/video/12949172',
          title: 'RobotFood - Snowboard Afterbang 2002'
        }),
        knex('content').insert({
          type: 'snow',
          content: 'video',
          data: 'https://player.vimeo.com/video/163328119',
          title: 'Lick the Cat - Snowboard Edit'
        }),
        knex('content').insert({
          type: 'snow',
          content: 'video',
          data: 'https://player.vimeo.com/video/154777371',
          title: 'High Cascade Snowboard Camp - The Summer Snowboard Movie'
        }),
        knex('content').insert({
          type: 'surf',
          content: 'video',
          data: 'https://player.vimeo.com/video/77948519',
          title: 'INTO THE MIND - DCP'
        }),
        knex('content').insert({
          type: 'surf',
          content: 'video',
          data: 'https://player.vimeo.com/video/37741577',
          title: 'Bikinis & Surf: Sayulita, Mexico'
        }),
        knex('content').insert({
          type: 'surf',
          content: 'video',
          data: 'https://player.vimeo.com/video/166930720',
          title: 'Surf in Siberia Arctic Ocean'
        }),
        knex('content').insert({
          type: 'surf',
          content: 'video',
          data: 'https://player.vimeo.com/video/173444263',
          title: 'Skip Work and Surf'
        }),
        knex('content').insert({
          type: 'surf',
          content: 'video',
          data: 'https://player.vimeo.com/video/191396851',
          title: 'Surf Day'
        }),
        knex('content').insert({
          type: 'surf',
          content: 'video',
          data: 'https://player.vimeo.com/video/192972381',
          title: 'Euskal Surf Zirkuitua - ORRUA'
        }),
        knex('content').insert({
          type: 'surf',
          content: 'image',
          data: 'http://cdn.playbuzz.com/cdn/574497d1-7118-49af-8cd9-3ffdcbb058b9/f151031a-736f-467e-8def-21d477cf14bb.jpg',
          title: 'Fire Fly'
        }),
        knex('content').insert({
          type: 'surf',
          content: 'image',
          data: 'https://s-media-cache-ak0.pinimg.com/originals/f6/4a/24/f64a245e8e74259801cf8b95ceeaa6f8.jpg',
          title: 'Huge Barrel'
        }),
        knex('content').insert({
          type: 'surf',
          content: 'image',
          data: 'http://petapixel.com/assets/uploads/2015/08/11_big.jpg',
          title: 'Moto Surf'
        }),
        knex('content').insert({
          type: 'surf',
          content: 'image',
          data: 'http://costaricasurfing.org/wp-content/uploads/2013/07/Surfing-Equipment-and-Gear.jpg',
          title: 'Pink Hang Ten'
        }),
        knex('content').insert({
          type: 'surf',
          content: 'image',
          data: 'http://www.tenerifeactive.com/wp-content/uploads/2014/12/surfing-in-tenerife-e1429538334905.jpg',
          title: 'Beach Tail'
        }),
        knex('content').insert({
          type: 'surf',
          content: 'image',
          data: 'https://s-media-cache-ak0.pinimg.com/originals/5c/3f/2f/5c3f2f859e3a0aa177e8acabb168c82f.jpg',
          title: 'Shallows'
        }),
        knex('content').insert({
          type: 'snow',
          content: 'image',
          data: 'http://snowbrains.com/wp-content/uploads/2014/01/url-2.jpeg',
          title: 'Manual Grab'
        }),
        knex('content').insert({
          type: 'snow',
          content: 'image',
          data: 'https://i.ytimg.com/vi/exxji9vqjSw/maxresdefault.jpg',
          title: 'Drop'
        }),
        knex('content').insert({
          type: 'snow',
          content: 'image',
          data: 'http://image2.redbull.com/rbcom/010/2016-08-24/1331813753491_2/0010/1/1500/1000/2/the-fourth-phase-snowboarding-film-gopro-shot.jpg',
          title: 'World View'
        }),
        knex('content').insert({
          type: 'snow',
          content: 'image',
          data: 'https://i.ytimg.com/vi/3ro7Oi5FgdE/maxresdefault.jpg',
          title: 'Floating Selfie'
        }),
        knex('content').insert({
          type: 'snow',
          content: 'image',
          data: 'https://www.snowskool.com/uploads/files/Snowboarding_Switch.jpg',
          title: 'No Life'
        }),
        knex('content').insert({
          type: 'snow',
          content: 'image',
          data: 'https://www.whistler.com/skiing/slider/snowboarding-whistler.jpg',
          title: 'Neature'
        }),
        knex('content').insert({
          type: 'skate',
          content: 'image',
          data: 'https://yt3.ggpht.com/-QkqvzArFkYs/AAAAAAAAAAI/AAAAAAAAAAA/qw97foQDUbQ/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
          title: 'Goodbye Blue Skies'
        }),
        knex('content').insert({
          type: 'skate',
          content: 'image',
          data: 'https://d1wlqxr6fzatvd.cloudfront.net/wordpress/wp-content/uploads/2015/05/Skaters-in-street2.jpg?767122',
          title: 'Full Mast'
        }),
        knex('content').insert({
          type: 'skate',
          content: 'image',
          data: 'https://s-media-cache-ak0.pinimg.com/736x/66/cb/50/66cb504a7a7f44fcdfe327a6e766494f.jpg',
          title: 'Flippin Bro'
        }),
        knex('content').insert({
          type: 'skate',
          content: 'image',
          data: 'http://www.brailleskateboarding.com/wp-content/uploads/2014/01/F-nose-still.jpg',
          title: 'Nosey'
        }),
        knex('content').insert({
          type: 'skate',
          content: 'image',
          data: 'http://www.skateboardingmagazine.com/wp-content/uploads/2012/04/skateboarding-easter-bunny.jpg',
          title: 'Skate Bunny'
        }),
        knex('content').insert({
          type: 'skate',
          content: 'image',
          data: 'https://i.ytimg.com/vi/X9tMocUR-80/maxresdefault.jpg',
          title: 'Chalk Board'
        }),
        knex('content').insert({
          type: 'skate',
          content: 'video',
          data: 'https://player.vimeo.com/video/35557799',
          title: 'Leeside Skateboard Mayhem'
        }),
        knex('content').insert({
          type: 'skate',
          content: 'video',
          data: 'https://player.vimeo.com/video/168102126',
          title: 'Things That Move'
        }),
        knex('content').insert({
          type: 'skate',
          content: 'video',
          data: 'https://player.vimeo.com/video/26124634',
          title: 'Experiment No. 1 - Skateboard Shades'
        }),
        knex('content').insert({
          type: 'skate',
          content: 'video',
          data: 'https://player.vimeo.com/video/17692083',
          title: 'Skateboard'
        }),
        knex('content').insert({
          type: 'skate',
          content: 'video',
          data: 'https://player.vimeo.com/video/111305561',
          title: 'Skateboard Cool Guy'
        }),
        knex('content').insert({
          type: 'skate',
          content: 'video',
          data: 'https://player.vimeo.com/video/96799408',
          title: 'in-between matters - a skateboard short film'
        })
      ]);
    });
};
