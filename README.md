# simple-webpack-app
Simple webpack app that uses video.js with the hls plugin.  In order for the
videojs-contrib-hls plugin to play nice with webpack, the webworkify module is swapped out for
the webworkify-webpack-dropin module.

Swapping out webworkify for webworkify-webpack-dropin DOES work when bundling with webpack.  See:

Main issue:
https://github.com/videojs/videojs-contrib-hls/issues/600

Related comments:
https://github.com/videojs/videojs-contrib-hls/issues/600#issuecomment-260686550
https://github.com/videojs/videojs-contrib-hls/issues/600#issuecomment-260693499
https://github.com/videojs/videojs-contrib-hls/issues/600#issuecomment-261107458
https://github.com/videojs/videojs-contrib-hls/issues/600#issuecomment-262288718
https://github.com/videojs/videojs-contrib-hls/issues/600#issuecomment-262527068




## Quick start
1. npm install
2. ./node_modules/webpack-dev-server/bin/webpack-dev-server.js  --progress --colors
3. open a browser and view http://localhost:8080/