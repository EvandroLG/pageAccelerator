# PageAccelerator
A very light solution to load web pages faster.

# How does it work?
It's an agnostic library that uses ajax and pushState to deliver a faster navigation experience. PageAccelerator is a very light version of turbolinks and pajx (our minify file has 2.2KB!). Basically what it does is follow every link in your application and each click it loads the page in background and replaces the content correctly, keeping the real datas from body and head, updating the title.

## Installation
To install PageAccelerator, execute:

```shell
  npm install page-accelerator
```

or

```shell
  bower install page-accelerator
```

Or simply pick up the minify file from dist/ directory.

## How to use?
PageAccelerator doesn't depend on jQuery, Zepto or any other library to work. You need just to include it at the end of your HTML code:

```html
  <script src="page-accelerator.min.js"></script>
```

Then you need to instantiate the object and call the `start` method, such as the example bellow:

```js
  var p = new PageAccelerator();
  p.start();
```

Just it and PageAccelerator was already following the web application links.

For links that you wouldn't like to be followed, you need simply add `data-pageAccelerator="false"`.

## API
- PageAccelerator.prototype.`start([callback])`
Initiliaze method, it also receive a optional callback that will be called whenever a new page has loaded
