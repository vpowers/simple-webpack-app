/**
 * Created by victoriapowers on 11/16/16.
 */
var videojs = require('video.js');
require('videojs-contrib-hls');

var player = videojs('my-video', {autoplay: true});
player.src({src: 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8', type: 'application/x-mpegURL'});