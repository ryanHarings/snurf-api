
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
          title: 'First Snow Fall First Shred Fall 2016 Les Diablerets from Demonium DMC',
          user_id: 1
        }),
        knex('content').insert({
          type: 'snow',
          content: 'video',
          data: 'https://player.vimeo.com/video/77177549',
          title: 'Naked Ski and Snowboard Segment from VALHALLA',
          user_id: 2
        }),
        knex('content').insert({
          type: 'snow',
          content: 'video',
          data: 'https://player.vimeo.com/video/51911889',
          title: 'Pepping 2012',
          user_id: 1
        }),
        knex('content').insert({
          type: 'snow',
          content: 'video',
          data: 'https://player.vimeo.com/video/12949172',
          title: 'RobotFood - Snowboard Afterbang 2002',
          user_id: 1
        }),
        knex('content').insert({
          type: 'snow',
          content: 'video',
          data: 'https://player.vimeo.com/video/163328119',
          title: 'Lick the Cat - Snowboard Edit',
          user_id: 1
        }),
        knex('content').insert({
          type: 'snow',
          content: 'video',
          data: 'https://player.vimeo.com/video/154777371',
          title: 'High Cascade Snowboard Camp - The Summer Snowboard Movie',
          user_id: 2
        }),
        knex('content').insert({
          type: 'surf',
          content: 'video',
          data: 'https://player.vimeo.com/video/77948519',
          title: 'INTO THE MIND - DCP',
          user_id: 1
        }),
        knex('content').insert({
          type: 'surf',
          content: 'video',
          data: 'https://player.vimeo.com/video/37741577',
          title: 'Bikinis & Surf: Sayulita, Mexico',
          user_id: 2
        }),
        knex('content').insert({
          type: 'surf',
          content: 'video',
          data: 'https://player.vimeo.com/video/166930720',
          title: 'Surf in Siberia Arctic Ocean',
          user_id: 2
        }),
        knex('content').insert({
          type: 'surf',
          content: 'video',
          data: 'https://player.vimeo.com/video/173444263',
          title: 'Skip Work and Surf',
          user_id: 1
        }),
        knex('content').insert({
          type: 'surf',
          content: 'video',
          data: 'https://player.vimeo.com/video/191396851',
          title: 'Surf Day',
          user_id: 1
        }),
        knex('content').insert({
          type: 'surf',
          content: 'video',
          data: 'https://player.vimeo.com/video/192972381',
          title: 'Euskal Surf Zirkuitua - ORRUA',
          user_id: 1
        }),
        knex('content').insert({
          type: 'surf',
          content: 'image',
          data: 'https://cdn.playbuzz.com/cdn/574497d1-7118-49af-8cd9-3ffdcbb058b9/f151031a-736f-467e-8def-21d477cf14bb.jpg',
          title: 'Fire Fly',
          user_id: 2
        }),
        knex('content').insert({
          type: 'surf',
          content: 'image',
          data: 'https://s-media-cache-ak0.pinimg.com/originals/f6/4a/24/f64a245e8e74259801cf8b95ceeaa6f8.jpg',
          title: 'Huge Barrel',
          user_id: 1
        }),
        knex('content').insert({
          type: 'surf',
          content: 'image',
          data: 'https://petapixel.com/assets/uploads/2015/08/11_big.jpg',
          title: 'Moto Surf',
          user_id: 1
        }),
        knex('content').insert({
          type: 'surf',
          content: 'image',
          data: 'https://s-media-cache-ak0.pinimg.com/564x/b7/3a/40/b73a4063daaf949cb1f06e4166cfa583.jpg',
          title: 'Warped Wall',
          user_id: 2
        }),
        knex('content').insert({
          type: 'surf',
          content: 'image',
          data: 'https://s-media-cache-ak0.pinimg.com/564x/26/c6/c0/26c6c0c14dbdfa06d4997afc8d19e66f.jpg',
          title: 'Cut!',
          user_id: 1
        }),
        knex('content').insert({
          type: 'surf',
          content: 'image',
          data: 'https://s-media-cache-ak0.pinimg.com/originals/5c/3f/2f/5c3f2f859e3a0aa177e8acabb168c82f.jpg',
          title: 'Shallows',
          user_id: 2
        }),
        knex('content').insert({
          type: 'snow',
          content: 'image',
          data: 'https://i.ytimg.com/vi/dhzsOoCee8A/maxresdefault.jpg',
          title: 'Send It',
          user_id: 2
        }),
        knex('content').insert({
          type: 'snow',
          content: 'image',
          data: 'https://i.ytimg.com/vi/exxji9vqjSw/maxresdefault.jpg',
          title: 'Drop',
          user_id: 2
        }),
        knex('content').insert({
          type: 'snow',
          content: 'image',
          data: 'https://image2.redbull.com/rbcom/010/2016-08-24/1331813753491_2/0010/1/1500/1000/2/the-fourth-phase-snowboarding-film-gopro-shot.jpg',
          title: 'World View',
          user_id: 1
        }),
        knex('content').insert({
          type: 'snow',
          content: 'image',
          data: 'https://i.ytimg.com/vi/3ro7Oi5FgdE/maxresdefault.jpg',
          title: 'Floating Selfie',
          user_id: 2
        }),
        knex('content').insert({
          type: 'snow',
          content: 'image',
          data: 'https://www.snowskool.com/uploads/files/Snowboarding_Switch.jpg',
          title: 'No Life',
          user_id: 1
        }),
        knex('content').insert({
          type: 'snow',
          content: 'image',
          data: 'https://www.whistler.com/skiing/slider/snowboarding-whistler.jpg',
          title: 'Neature',
          user_id: 1
        }),
        knex('content').insert({
          type: 'skate',
          content: 'image',
          data: 'https://yt3.ggpht.com/-QkqvzArFkYs/AAAAAAAAAAI/AAAAAAAAAAA/qw97foQDUbQ/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
          title: 'Goodbye Blue Skies',
          user_id: 2
        }),
        knex('content').insert({
          type: 'skate',
          content: 'image',
          data: 'https://d1wlqxr6fzatvd.cloudfront.net/wordpress/wp-content/uploads/2015/05/Skaters-in-street2.jpg?767122',
          title: 'Full Mast',
          user_id: 2
        }),
        knex('content').insert({
          type: 'skate',
          content: 'image',
          data: 'https://s-media-cache-ak0.pinimg.com/736x/66/cb/50/66cb504a7a7f44fcdfe327a6e766494f.jpg',
          title: 'Flippin Bro',
          user_id: 1
        }),
        knex('content').insert({
          type: 'skate',
          content: 'image',
          data: 'https://i.ytimg.com/vi/aNlyat4Xf58/maxresdefault.jpg',
          title: 'Low Rider',
          user_id: 2
        }),
        knex('content').insert({
          type: 'skate',
          content: 'image',
          data: 'https://ohsodapper.files.wordpress.com/2012/02/tumblr_lwmvmpddwi1r6a91io1_1280.jpg',
          title: 'Twinning',
          user_id: 2
        }),
        knex('content').insert({
          type: 'skate',
          content: 'image',
          data: 'https://i.ytimg.com/vi/X9tMocUR-80/maxresdefault.jpg',
          title: 'Chalk Board',
          user_id: 1
        }),
        knex('content').insert({
          type: 'skate',
          content: 'video',
          data: 'https://player.vimeo.com/video/35557799',
          title: 'Leeside Skateboard Mayhem',
          user_id: 2
        }),
        knex('content').insert({
          type: 'skate',
          content: 'video',
          data: 'https://player.vimeo.com/video/168102126',
          title: 'Things That Move',
          user_id: 1
        }),
        knex('content').insert({
          type: 'skate',
          content: 'video',
          data: 'https://player.vimeo.com/video/26124634',
          title: 'Experiment No. 1 - Skateboard Shades',
          user_id: 1
        }),
        knex('content').insert({
          type: 'skate',
          content: 'video',
          data: 'https://player.vimeo.com/video/17692083',
          title: 'Skateboard',
          user_id: 2
        }),
        knex('content').insert({
          type: 'skate',
          content: 'video',
          data: 'https://player.vimeo.com/video/111305561',
          title: 'Skateboard Cool Guy',
          user_id: 2
        }),
        knex('content').insert({
          type: 'skate',
          content: 'video',
          data: 'https://player.vimeo.com/video/96799408',
          title: 'in-between matters - a skateboard short film',
          user_id: 1
        })
      ]);
    });
};
