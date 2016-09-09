(function(global, doc) {

  var M = global.EasyFood = global.EasyFood || {};

  M.LoadPage = function() {
    this.url = doc.location.href;
    this.callback = function() {};
  };

  M.LoadPage.prototype = {
    _updateHistory: function(head, body) {
      global.history.pushState({
        head: head.innerHTML.trim(),
        id: body.id,
        className: body.className,
        content: body.innerHTML.trim(),
        namespace: body.attr('data-namespace'),
        controller: body.attr('data-controller'),
        action: body.attr('data-action'),
      }, '', this.url);

      global.on('popstate', this._updateBody.bind(this));
    },

    _DOMParser: function(data) {
      var parser = new DOMParser();
      return parser.parseFromString(data, 'text/html');
    },

    _updateBody: function(e) {
      var data = e.state;
      doc.body.id = data.id;
      doc.body.className = data.className;
      doc.body.attr('data-namespace', data.namespace);
      doc.body.attr('data-controller', data.controller);
      doc.body.attr('data-action', data.action);
      doc.body.innerHTML = data.content;

      var data = this._DOMParser(data.head);
      doc.title = data.head.find('title').innerText;

      this.url = global.location.href;
      this.start();
      this.callback();
    },

    _loadStyles: function(head, callback) {
      var requests = head.querySelectorAll('link[rel="stylesheet"]').map(function(element) {
        return M.ajax.get(element.href);
      });

      Promise.all(requests).then(callback.bind(this));
    },

    _update: function(data) {
      var dom = this._DOMParser(data);
      var head = dom.head;

      this._loadStyles(head, function() {
        var body = dom.body;
        doc.body = body;
        doc.head = head;
        doc.title = head.find('title').innerText;

        this._updateHistory(head, body);
        this.callback();
        global.scrollTo(0, 0);
        this.start();
      }.bind(this));
    },

    _onClick: function(element) {
      this.url = element.href;
      M.ajax.get(this.url).then(this._update.bind(this))
                          .catch(this._update.bind(this));
    },

    _replaceHistory: function() {
      var body = doc.body;

      global.history.replaceState({
        head: doc.head.innerHTML,
        id: body.id,
        className: body.className,
        content: body.innerHTML,
        namespace: body.attr('data-namespace'),
        controller: body.attr('data-controller'),
        action: body.attr('data-action')
      }, '', this.url);
    },

    start: function(callback) {
      this.callback = callback || this.callback;
      var that = this;

      doc.findAll('a:not([data-loadPage="false"])').on('click', function(e) {
        e.preventDefault();
        that._onClick.call(that, this);
      });

      this._replaceHistory();
    }
  };

}(window, document));
