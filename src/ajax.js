/*
  * PageAccelerator - A solution to load web pages faster
  * http://github.com/EasyFood/PageAccelerator
  * author: Evandro Leopoldino Goncalves <evandrolgoncalves@gmail.com>
  * http://github.com/EasyFood
  * License: MIT
*/

(function(global) {

  var M = global._PageAccelerator = global._PageAccelerator || {};

  M.ajax = {
    get: function(url) {
      return new global.Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url, true);

        req.onload = function() {
          if (req.status >= 200 && req.status < 400) {
            resolve(req.response);
            return;
          }

          reject(req.response);
        };

        req.onerror = function() {
          reject(Error('Network Error'));
        };

        req.send();
      });
    }
  };

}(window));
