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

        pageAccelerator();
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
    });

  });

}(document));
