// tslint:disable max-line-length
import { FeaturedPlaylistsState } from '../app/core/store/reducers';
import { FeaturedPlaylists } from '../app/models';
import { HttpErrorResponse } from '@angular/common/http';

export const featuredPlayLists = {
  name: 'Featured Playlists',
  content: [
    {
      id: 'pl.2b0e6e332fdf4b7a91164da3162127b5',
      kind: 'playlist',
      name: 'New Music Daily',
      url: 'https://music.apple.com/us/playlist/new-music-daily/pl.2b0e6e332fdf4b7a91164da3162127b5?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music',
      artwork: 'https://is2-ssl.mzstatic.com/image/thumb/Features113/v4/e0/08/d0/e008d09d-4a04-eebc-9f63-6d3c2bc1eae7/source/600x600cc.jpg'
    },
    {
      id: 'pl.f4d106fed2bd41149aaacabb233eb5eb',
      kind: 'playlist',
      name: 'Today\'s Hits',
      url: 'https://music.apple.com/us/playlist/todays-hits/pl.f4d106fed2bd41149aaacabb233eb5eb?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Pop',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features117/v4/94/17/2e/94172e16-e5d7-2d2b-66ec-e72473988168/source/600x600cc.jpg'
    },
    {
      id: 'pl.abe8ba42278f4ef490e3a9fc5ec8e8c5',
      kind: 'playlist',
      name: 'Rap Life',
      url: 'https://music.apple.com/us/playlist/rap-life/pl.abe8ba42278f4ef490e3a9fc5ec8e8c5?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Hip-Hop',
      artwork: 'https://is2-ssl.mzstatic.com/image/thumb/Features123/v4/15/ea/a0/15eaa0b1-72e6-5078-dacb-27407b8fd6a5/source/600x600cc.jpg'
    },
    {
      id: 'pl.5cb9c0f3ca9d4fc1bccbaf67ca6201e7',
      kind: 'playlist',
      name: 'Up Next',
      url: 'https://music.apple.com/us/playlist/up-next/pl.5cb9c0f3ca9d4fc1bccbaf67ca6201e7?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music',
      artwork: 'https://is4-ssl.mzstatic.com/image/thumb/Features113/v4/f9/7c/6e/f97c6ebc-8d33-cca4-a808-3f4d504297ba/source/600x600cc.jpg'
    },
    {
      id: 'pl.4b364b8b182f4115acbf6deb83bd5222',
      kind: 'playlist',
      name: '¡Dale Play!',
      url: 'https://music.apple.com/us/playlist/dale-play/pl.4b364b8b182f4115acbf6deb83bd5222?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Pop Latino',
      artwork: 'https://is2-ssl.mzstatic.com/image/thumb/Features113/v4/be/c7/a9/bec7a928-ada0-bf24-480c-f240000bf3bb/source/600x600cc.jpg'
    },
    {
      id: 'pl.5ee8333dbe944d9f9151e97d92d1ead9',
      kind: 'playlist',
      name: 'A-List Pop',
      url: 'https://music.apple.com/us/playlist/a-list-pop/pl.5ee8333dbe944d9f9151e97d92d1ead9?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Pop',
      artwork: 'https://is3-ssl.mzstatic.com/image/thumb/Features113/v4/dc/c4/4f/dcc44fdb-c5a7-571a-8d4c-e44b1c0eb91b/source/600x600cc.jpg'
    },
    {
      id: 'pl.426a1044619f47d6b1f86b3f79ecf857',
      kind: 'playlist',
      name: '#OnRepeat',
      url: 'https://music.apple.com/us/playlist/onrepeat/pl.426a1044619f47d6b1f86b3f79ecf857?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Hip-Hop',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features123/v4/5a/91/21/5a9121c6-bd83-a3d8-012d-b8f00dc4d06a/source/600x600cc.jpg'
    },
    {
      id: 'pl.2a0b1ea7704842f4b956e959067b8389',
      kind: 'playlist',
      name: 'In My Room',
      url: 'https://music.apple.com/us/playlist/in-my-room/pl.2a0b1ea7704842f4b956e959067b8389?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Pop',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features128/v4/f9/30/e9/f930e902-c3df-3d85-884f-9a2170e6db2b/source/600x600cc.jpg'
    },
    {
      id: 'pl.74fdbee9582349a4bdca600cbdffa2e9',
      kind: 'playlist',
      name: 'The Plug',
      url: 'https://music.apple.com/us/playlist/the-plug/pl.74fdbee9582349a4bdca600cbdffa2e9?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Hip-Hop',
      artwork: 'https://is5-ssl.mzstatic.com/image/thumb/Features124/v4/ae/41/87/ae4187bd-aa54-5523-5cd7-78db3580cc3d/source/600x600cc.jpg'
    },
    {
      id: 'pl.5030c32a73e9459d82fae6f7b046d3ec',
      kind: 'playlist',
      name: 'Trap Kingz',
      url: 'https://music.apple.com/us/playlist/trap-kingz/pl.5030c32a73e9459d82fae6f7b046d3ec?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Urbano Latino',
      artwork: 'https://is5-ssl.mzstatic.com/image/thumb/Features113/v4/9a/82/3d/9a823d34-a504-4a99-20a6-a8fee44621b7/source/600x600cc.jpg'
    },
    {
      id: 'pl.6bf4415b83ce4f3789614ac4c3675740',
      kind: 'playlist',
      name: 'danceXL',
      url: 'https://music.apple.com/us/playlist/dancexl/pl.6bf4415b83ce4f3789614ac4c3675740?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Dance',
      artwork: 'https://is2-ssl.mzstatic.com/image/thumb/Features123/v4/7b/06/fa/7b06fa6e-64fd-2692-4667-baf26f88ac5c/source/600x600cc.jpg'
    },
    {
      id: 'pl.2a86e272cf2349a99de68fd9cf7d4776',
      kind: 'playlist',
      name: 'Today\'s Indie Rock',
      url: 'https://music.apple.com/us/playlist/todays-indie-rock/pl.2a86e272cf2349a99de68fd9cf7d4776?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Indie',
      artwork: 'https://is3-ssl.mzstatic.com/image/thumb/Features124/v4/44/9d/66/449d66d4-38e5-f536-4b7f-71d28acc3202/source/600x600cc.jpg'
    },
    {
      id: 'pl.34c6bf42a176492abb918edb57b565e9',
      kind: 'playlist',
      name: 'Songs of the Summer',
      url: 'https://music.apple.com/us/playlist/songs-of-the-summer/pl.34c6bf42a176492abb918edb57b565e9?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Pop',
      artwork: 'https://is2-ssl.mzstatic.com/image/thumb/Features128/v4/d9/e4/1c/d9e41c78-9b3b-96fe-f9c3-e8aac136a47e/source/600x600cc.jpg'
    },
    {
      id: 'pl.0f11015342a9473c849f0af4ab5f509c',
      kind: 'playlist',
      name: 'The Sand Bar',
      url: 'https://music.apple.com/us/playlist/the-sand-bar/pl.0f11015342a9473c849f0af4ab5f509c?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Country',
      artwork: 'https://is4-ssl.mzstatic.com/image/thumb/Features128/v4/a6/d0/f6/a6d0f622-8d58-d697-ab96-7a632162a42e/source/600x600cc.jpg'
    },
    {
      id: 'pl.29c85b7a007946c0b7c5ab445a544b0c',
      kind: 'playlist',
      name: 'Meditation Moments',
      url: 'https://music.apple.com/us/playlist/meditation-moments/pl.29c85b7a007946c0b7c5ab445a544b0c?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Classical',
      artwork: 'https://is2-ssl.mzstatic.com/image/thumb/Features114/v4/d2/ba/0e/d2ba0e33-30a8-666d-be44-89cbba8fd8c0/source/600x600cc.jpg'
    },
    {
      id: 'pl.7e484c6b5169487d9d465a4b8bc68d09',
      kind: 'playlist',
      name: 'The Beats 1 List',
      url: 'https://music.apple.com/us/playlist/the-beats-1-list/pl.7e484c6b5169487d9d465a4b8bc68d09?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music',
      artwork: 'https://is3-ssl.mzstatic.com/image/thumb/Features123/v4/24/d9/1f/24d91f88-d53c-bf82-c95d-4cf35ea0b844/source/600x600cc.jpg'
    },
    {
      id: 'pl.b7ae3e0a28e84c5c96c4284b6a6c70af',
      kind: 'playlist',
      name: 'R&B Now',
      url: 'https://music.apple.com/us/playlist/r-b-now/pl.b7ae3e0a28e84c5c96c4284b6a6c70af?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music R&B',
      artwork: 'https://is2-ssl.mzstatic.com/image/thumb/Features123/v4/c6/cb/71/c6cb717b-9392-6088-5e33-27117ab96eaa/source/600x600cc.jpg'
    },
    {
      id: 'pl.c79a0c8eac46444ea8058d68008ba2d4',
      kind: 'playlist',
      name: 'Wake Me Up',
      url: 'https://music.apple.com/us/playlist/wake-me-up/pl.c79a0c8eac46444ea8058d68008ba2d4?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Pop',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/4f/71/35/4f71350e-b74c-ae9f-f3dc-67af06fda2ad/source/600x600cc.jpg'
    },
    {
      id: 'pl.58c2477d86ea46db997048afd159d01d',
      kind: 'playlist',
      name: 'The Riff',
      url: 'https://music.apple.com/us/playlist/the-riff/pl.58c2477d86ea46db997048afd159d01d?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Hard Rock',
      artwork: 'https://is2-ssl.mzstatic.com/image/thumb/Features114/v4/ec/f3/7a/ecf37ad1-e9b4-206c-5f09-70347bf5f54c/source/600x600cc.jpg'
    },
    {
      id: 'pl.51c1d571cc7b484eb1dead1939811f2d',
      kind: 'playlist',
      name: 'Optimus Metallum',
      url: 'https://music.apple.com/us/playlist/optimus-metallum/pl.51c1d571cc7b484eb1dead1939811f2d?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Metal',
      artwork: 'https://is4-ssl.mzstatic.com/image/thumb/Features123/v4/f3/ed/62/f3ed620a-da55-44ef-67fe-c36a4a50ffa7/source/600x600cc.jpg'
    },
    {
      id: 'pl.d73049603d7143ec86d84fc8b8af3827',
      kind: 'playlist',
      name: 'Groove',
      url: 'https://music.apple.com/us/playlist/groove/pl.d73049603d7143ec86d84fc8b8af3827?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Dance',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/cd/2e/ea/cd2eeac2-6593-c899-6582-11c0522f4ef8/source/600x600cc.jpg'
    },
    {
      id: 'pl.c463e22d78b44011935bb22c39d2c66f',
      kind: 'playlist',
      name: 'Wax Eclectic',
      url: 'https://music.apple.com/us/playlist/wax-eclectic/pl.c463e22d78b44011935bb22c39d2c66f?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Rock',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features123/v4/4f/2f/c1/4f2fc1a8-4423-b8ee-7724-1695b4d7bd2f/source/600x600cc.jpg'
    },
    {
      id: 'pl.9b3daf7efb204d2ba88c21ba76942097',
      kind: 'playlist',
      name: 'INDIY',
      url: 'https://music.apple.com/us/playlist/indiy/pl.9b3daf7efb204d2ba88c21ba76942097?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Indie',
      artwork: 'https://is3-ssl.mzstatic.com/image/thumb/Features128/v4/9e/3e/1b/9e3e1b84-f2c5-b3ed-4f93-2082606a108e/source/600x600cc.jpg'
    },
    {
      id: 'pl.0e91490f3310408eb1186fc9befb3d11',
      kind: 'playlist',
      name: 'Untitled',
      url: 'https://music.apple.com/us/playlist/untitled/pl.0e91490f3310408eb1186fc9befb3d11?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Indie',
      artwork: 'https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/20/ce/45/20ce457a-cbc0-d418-9aed-79c313b66700/source/600x600cc.jpg'
    },
    {
      id: 'pl.2bb29727dbc34a63936787297305c37c',
      kind: 'playlist',
      name: 'Today\'s Chill',
      url: 'https://music.apple.com/us/playlist/todays-chill/pl.2bb29727dbc34a63936787297305c37c?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Electronic',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features128/v4/0d/96/b8/0d96b8ca-a12d-32a5-520f-c64bca4793bb/source/600x600cc.jpg'
    },
    {
      id: 'pl.b5e8dbe8a706496496e1292466839207',
      kind: 'playlist',
      name: 'Acoustic Chill',
      url: 'https://music.apple.com/us/playlist/acoustic-chill/pl.b5e8dbe8a706496496e1292466839207?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Singer/Songwriter',
      artwork: 'https://is5-ssl.mzstatic.com/image/thumb/Features124/v4/08/f8/31/08f83119-2394-6f45-e3aa-54cb16ab075f/source/600x600cc.jpg'
    },
    {
      id: 'pl.84c6259af39545a1bbe8a57f169925c9',
      kind: 'playlist',
      name: 'RGTN Fire',
      url: 'https://music.apple.com/us/playlist/rgtn-fire/pl.84c6259af39545a1bbe8a57f169925c9?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Urbano Latino',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features113/v4/22/56/51/22565139-2b96-d1f9-ce1d-3a02a65d43e7/source/600x600cc.jpg'
    },
    {
      id: 'pl.139df28c68b0465fb57f162799b84699',
      kind: 'playlist',
      name: 'La Fórmula',
      url: 'https://music.apple.com/us/playlist/la-f%C3%B3rmula/pl.139df28c68b0465fb57f162799b84699?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Urbano Latino',
      artwork: 'https://is4-ssl.mzstatic.com/image/thumb/Features128/v4/87/da/43/87da43d5-9930-38ce-79b5-dd6a228959d3/source/600x600cc.jpg'
    },
    {
      id: 'pl.bf9a12f44e504278baeaff311b5964a9',
      kind: 'playlist',
      name: 'Southern Craft',
      url: 'https://music.apple.com/us/playlist/southern-craft/pl.bf9a12f44e504278baeaff311b5964a9?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Americana',
      artwork: 'https://is3-ssl.mzstatic.com/image/thumb/Features123/v4/e9/e7/b2/e9e7b235-feaf-96ba-f1ac-bfbddaa14e72/source/600x600cc.jpg'
    },
    {
      id: 'pl.0eb0cf3412c14c9c9df870ca4da0ca6b',
      kind: 'playlist',
      name: 'Back Porch Country',
      url: 'https://music.apple.com/us/playlist/back-porch-country/pl.0eb0cf3412c14c9c9df870ca4da0ca6b?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Country',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/8d/e9/b4/8de9b468-6985-648f-939f-2086658e8c77/source/600x600cc.jpg'
    },
    {
      id: 'pl.5a26d34eb6ec4825976bdef03784537d',
      kind: 'playlist',
      name: 'Classical Chill',
      url: 'https://music.apple.com/us/playlist/classical-chill/pl.5a26d34eb6ec4825976bdef03784537d?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Classical',
      artwork: 'https://is5-ssl.mzstatic.com/image/thumb/Features124/v4/19/53/e2/1953e296-339b-b0b1-70af-80d29338179c/source/600x600cc.jpg'
    },
    {
      id: 'pl.9e1d81be9a3a4a93af47734543cdd3a0',
      kind: 'playlist',
      name: 'Brown Sugar',
      url: 'https://music.apple.com/us/playlist/brown-sugar/pl.9e1d81be9a3a4a93af47734543cdd3a0?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music R&B',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/d8/29/69/d8296994-5a35-c853-c6c4-d2878b8bd6fb/source/600x600cc.jpg'
    },
    {
      id: 'pl.06b53bbdc8844d2eb4573826b074da54',
      kind: 'playlist',
      name: 'SUAVE',
      url: 'https://music.apple.com/us/playlist/suave/pl.06b53bbdc8844d2eb4573826b074da54?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music R&B',
      artwork: 'https://is3-ssl.mzstatic.com/image/thumb/Features123/v4/c2/28/55/c2285504-5f21-37c4-f54a-f4c621e3f9be/source/600x600cc.jpg'
    },
    {
      id: 'pl.5b0194eaa170401e8986335d7e77aa4e',
      kind: 'playlist',
      name: 'World Record',
      url: 'https://music.apple.com/us/playlist/world-record/pl.5b0194eaa170401e8986335d7e77aa4e?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Zane Lowe',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features18/v4/60/de/60/60de606d-33ca-6857-0e0a-974f1aeb4bc6/source/600x600cc.jpg'
    },
    {
      id: 'pl.67bd9524334c4ea288ce0ca9bc0f0b95',
      kind: 'playlist',
      name: 'Alt R&B',
      url: 'https://music.apple.com/us/playlist/alt-r-b/pl.67bd9524334c4ea288ce0ca9bc0f0b95?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music R&B',
      artwork: 'https://is4-ssl.mzstatic.com/image/thumb/Features114/v4/29/8d/e2/298de2ff-9afe-8ad2-d213-c42f51f06ca6/source/600x600cc.jpg'
    },
    {
      id: 'pl.3a85cc83130443b68415718f19372cf4',
      kind: 'playlist',
      name: 'Today\'s Easy Hits',
      url: 'https://music.apple.com/us/playlist/todays-easy-hits/pl.3a85cc83130443b68415718f19372cf4?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Pop',
      artwork: 'https://is5-ssl.mzstatic.com/image/thumb/Features123/v4/bc/a8/58/bca858f6-72b5-fec7-bcb0-ba9e42c48600/source/600x600cc.jpg'
    },
    {
      id: 'pl.daa2a689923d4562bf5650a96809f929',
      kind: 'playlist',
      name: 'Mood.',
      url: 'https://music.apple.com/us/playlist/mood/pl.daa2a689923d4562bf5650a96809f929?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music R&B',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features123/v4/dd/b7/8b/ddb78baf-7d3a-ad42-4cc3-d4f1237fd7e7/source/600x600cc.jpg'
    },
    {
      id: 'pl.77a913605bba4a968c5cb2b93d87b2ca',
      kind: 'playlist',
      name: 'Breaking Dance',
      url: 'https://music.apple.com/us/playlist/breaking-dance/pl.77a913605bba4a968c5cb2b93d87b2ca?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Dance',
      artwork: 'https://is2-ssl.mzstatic.com/image/thumb/Features118/v4/1e/8f/16/1e8f16ad-d61f-94fe-090e-4f52556ba765/source/600x600cc.jpg'
    },
    {
      id: 'pl.fecfa8a26ea44ad581d4fe501892c8ff',
      kind: 'playlist',
      name: 'Today’s Christian',
      url: 'https://music.apple.com/us/playlist/todays-christian/pl.fecfa8a26ea44ad581d4fe501892c8ff?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Christian & Gospel',
      artwork: 'https://is4-ssl.mzstatic.com/image/thumb/Features113/v4/e9/61/79/e9617945-a962-c232-1017-3fe801ffafa4/source/600x600cc.jpg'
    },
    {
      id: 'pl.ffd19f956613408b8ef24ece4ad16c08',
      kind: 'playlist',
      name: 'Pure Fuego',
      url: 'https://music.apple.com/us/playlist/pure-fuego/pl.ffd19f956613408b8ef24ece4ad16c08?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Urbano Latino',
      artwork: 'https://is4-ssl.mzstatic.com/image/thumb/Features118/v4/94/de/a4/94dea4e7-c624-239b-59ab-bc3c3b559fcb/source/600x600cc.jpg'
    },
    {
      id: 'pl.f494429097a74da48204a51b7f25901b',
      kind: 'playlist',
      name: 'Midnight City',
      url: 'https://music.apple.com/us/playlist/midnight-city/pl.f494429097a74da48204a51b7f25901b?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Indie',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features118/v4/de/de/11/dede1149-1341-d0cf-1272-933d24a6ce3f/source/600x600cc.jpg'
    },
    {
      id: 'pl.4705ab1ed97c4f4bb54f48940faf5623',
      kind: 'playlist',
      name: 'Loops',
      url: 'https://music.apple.com/us/playlist/loops/pl.4705ab1ed97c4f4bb54f48940faf5623?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Electronic',
      artwork: 'https://is5-ssl.mzstatic.com/image/thumb/Features128/v4/07/78/5c/07785c39-2b6c-a8db-776f-ac375fdea7d4/source/600x600cc.jpg'
    },
    {
      id: 'pl.bc556ab8077140d7a60b174146cb154d',
      kind: 'playlist',
      name: 'Corridos al Cien',
      url: 'https://music.apple.com/us/playlist/corridos-al-cien/pl.bc556ab8077140d7a60b174146cb154d?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Música Mexicana',
      artwork: 'https://is2-ssl.mzstatic.com/image/thumb/Features124/v4/04/e2/6e/04e26e5c-d110-a0f6-5fa3-314fabc602f3/source/600x600cc.jpg'
    },
    {
      id: 'pl.8e78f32951a4462f9f4d369c006bc97d',
      kind: 'playlist',
      name: 'Today\'s Acoustic',
      url: 'https://music.apple.com/us/playlist/todays-acoustic/pl.8e78f32951a4462f9f4d369c006bc97d?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Singer/Songwriter',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/59/16/ff/5916ff17-28cc-793b-ad26-b761a7407f2f/source/600x600cc.jpg'
    }
  ]
};

export const featuredPlaylistsState: FeaturedPlaylistsState = {
  featuredPlaylists: featuredPlayLists,
  featuredPlaylistsLoading: false,
  featuredPlaylistsLoaded: false,
  pageSize: 5,
  filterText: 'day',
  error: new HttpErrorResponse({})
};

export const filteredFeaturedPlaylists: FeaturedPlaylists = {
  name: 'Featured Playlists',
  content: [
    {
      id: 'pl.f4d106fed2bd41149aaacabb233eb5eb',
      kind: 'playlist',
      name: 'Today\'s Hits',
      url: 'https://music.apple.com/us/playlist/todays-hits/pl.f4d106fed2bd41149aaacabb233eb5eb?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Pop',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features117/v4/94/17/2e/94172e16-e5d7-2d2b-66ec-e72473988168/source/600x600cc.jpg'
    },
    {
      id: 'pl.2a86e272cf2349a99de68fd9cf7d4776',
      kind: 'playlist',
      name: 'Today\'s Indie Rock',
      url: 'https://music.apple.com/us/playlist/todays-indie-rock/pl.2a86e272cf2349a99de68fd9cf7d4776?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Indie',
      artwork: 'https://is3-ssl.mzstatic.com/image/thumb/Features124/v4/44/9d/66/449d66d4-38e5-f536-4b7f-71d28acc3202/source/600x600cc.jpg'
    },
    {
      id: 'pl.2bb29727dbc34a63936787297305c37c',
      kind: 'playlist',
      name: 'Today\'s Chill',
      url: 'https://music.apple.com/us/playlist/todays-chill/pl.2bb29727dbc34a63936787297305c37c?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Electronic',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features128/v4/0d/96/b8/0d96b8ca-a12d-32a5-520f-c64bca4793bb/source/600x600cc.jpg'
    },
    {
      id: 'pl.3a85cc83130443b68415718f19372cf4',
      kind: 'playlist',
      name: 'Today\'s Easy Hits',
      url: 'https://music.apple.com/us/playlist/todays-easy-hits/pl.3a85cc83130443b68415718f19372cf4?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Pop',
      artwork: 'https://is5-ssl.mzstatic.com/image/thumb/Features123/v4/bc/a8/58/bca858f6-72b5-fec7-bcb0-ba9e42c48600/source/600x600cc.jpg'
    },
    {
      id: 'pl.fecfa8a26ea44ad581d4fe501892c8ff',
      kind: 'playlist',
      name: 'Today\’s Christian',
      url: 'https://music.apple.com/us/playlist/todays-christian/pl.fecfa8a26ea44ad581d4fe501892c8ff?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Christian & Gospel',
      artwork: 'https://is4-ssl.mzstatic.com/image/thumb/Features113/v4/e9/61/79/e9617945-a962-c232-1017-3fe801ffafa4/source/600x600cc.jpg'
    },
    {
      id: 'pl.8e78f32951a4462f9f4d369c006bc97d',
      kind: 'playlist',
      name: 'Today\'s Acoustic',
      url: 'https://music.apple.com/us/playlist/todays-acoustic/pl.8e78f32951a4462f9f4d369c006bc97d?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
      curator_name: 'Apple Music Singer/Songwriter',
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/59/16/ff/5916ff17-28cc-793b-ad26-b761a7407f2f/source/600x600cc.jpg'
    }
  ]
};

export const filteredPagedFeaturedPlaylists: FeaturedPlaylists = {'name': 'Featured Playlists',
  content: [{
    id: 'pl.8e78f32951a4462f9f4d369c006bc97d',
    kind: 'playlist',
    name: 'Today\'s Acoustic',
    url: 'https://music.apple.com/us/playlist/todays-acoustic/pl.8e78f32951a4462f9f4d369c006bc97d?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
    curator_name: 'Apple Music Singer/Songwriter',
    artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/59/16/ff/5916ff17-28cc-793b-ad26-b761a7407f2f/source/600x600cc.jpg'
  }]
};
