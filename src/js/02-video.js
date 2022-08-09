// import Player from '@vimeo/player';
// import { throttle } from 'lodash';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// player.on(
//   'timeupdate',
//   throttle(element => {
//     localStorage.setItem('videoplayer-current-time', element.seconds);
//   }, 1000)
// );

// player
//   .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
//   .catch(function (error) {
//     console.error(error);
//   });
import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', `${seconds}`);
  }, 1000)
);

const currentTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(currentTime)
  .then(function () {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
