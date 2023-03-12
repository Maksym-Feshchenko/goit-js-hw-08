import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new Player('vimeo-player');

const THROTTLE_DELAY = 1000;
const currentTimeKey = 'videoplayer-current-time';

vimeoPlayer.on('timeupdate', throttle(function(data) {
  localStorage.setItem(currentTimeKey, data.seconds);
}, THROTTLE_DELAY));

const savedTime = localStorage.getItem(currentTimeKey);

if (savedTime) {
  vimeoPlayer.setCurrentTime(savedTime);
}