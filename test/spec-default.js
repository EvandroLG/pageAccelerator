(function(doc) {

  describe('pageAccelerator', function() {

    var _find = function(value) {
      return doc.querySelector(value);
    };

    var _click = function(el) {
      var ev = document.createEvent("MouseEvent");
      ev.initMouseEvent(
          "click",
          true /* bubble */, true /* cancelable */,
          window, null,
          0, 0, 0, 0, /* coordinates */
          false, false, false, false, /* modifier keys */
          0 /*left*/, null
      );
      el.dispatchEvent(ev);
    };

    var _key = function(type, config) {
      var ev = document.createEvent('Event');
      var bubbles = true, cancellable = true;

      ev.initEvent(type, bubbles, cancellable);

      for (var key in config) {
        ev[key] = config[key];
      }

      window.dispatchEvent(ev);
    }

    describe('instance', function() {
      it('should exists pageAccelerator function', function() {
        expect(pageAccelerator).to.be.an('function');
      });

      it('should exists _PageAccelerator namespace', function() {
        expect(_PageAccelerator).to.be.an('object');
      });

      it('should exists ajax object on namespace', function() {
        expect(_PageAccelerator.ajax).to.be.an('object');
      });

      it('should exists get method on ajax object', function() {
        expect(_PageAccelerator.ajax.get).to.be.an('function');
      });
    });

    describe('run', function() {
      pageAccelerator();

      var verifyAjaxWasCalled = function(element, expected) {
        var wasCalled = false;

        _PageAccelerator.ajax.get = function(url) {
          wasCalled = true;

          return {
            then: function() {
              return {
                catch: function() {}
              }
            }
          }
        };

        _click(element);

        expect(wasCalled).to.be[expected];
      };

      it('should call ajax method when user requests a new page', function() {
        verifyAjaxWasCalled(_find('#link_1'), 'true');
      });

      it('should not call ajax method when user requests a new page by a link with data-pageAccelerator="false"', function() {
        verifyAjaxWasCalled(_find('#link_2'), 'false');
      });

      it('should not call ajax method when user requests a new page on an external domain', function() {
        verifyAjaxWasCalled(_find('#link_3'), 'false');
      });

      it('should not call ajax method when user requests a new page by a link with href*="#"', function() {
        verifyAjaxWasCalled(_find('#link_4'), 'false');
      });

      it('should not call ajax method when link was clicked when meta key is pressed', function() {
        _key('keydown', { metaKey: true });
        verifyAjaxWasCalled(_find('#link_1'), 'false');
      });

      it('should call ajax method when link was clicked when meta key is released', function() {
        _key('keyup', { metaKey: true });
        verifyAjaxWasCalled(_find('#link_1'), 'true');
      });

      it('should not call ajax method when link was clicked when ctrl key is pressed', function() {
        _key('keydown', { ctrlKey: true });
        verifyAjaxWasCalled(_find('#link_1'), 'false');
      });

      it('should call ajax method when link was clicked when meta ctrl is released', function() {
        _key('keyup', { ctrlKey: true });
        verifyAjaxWasCalled(_find('#link_1'), 'true');
      });
    });

  });

}(document));
