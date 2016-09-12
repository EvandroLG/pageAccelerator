# pageAccelerator
A very light solution to load web pages faster.

# How does it work?
It's an agnostic library that uses ajax and pushState to deliver a faster navigation experience. pageAccelerator is a very light version of turbolinks and pajx (our minify file has 2.2KB!). Basically what it does is follow every link in your application and each click it loads the page in background and replaces the content correctly, keeping the real datas from body and head, updating the title.

## Installation
To install pageAccelerator, execute:

```shell
  npm install page-accelerator
```

or

```shell
  bower install page-accelerator
```

Or simply pick up the minify file from dist/ directory.

## How to use?
pageAccelerator doesn't depend on jQuery, Zepto or any other library to work. You need just to include it at the end of your HTML code:

```html
  <script src="page-accelerator.min.js"></script>
```

Then you need to call the `pageAccelerator` function, such as the example bellow:

```js
  pageAccelerator();
```

`pageAccelerator` also can receive a callback as a parameter - this callback will be called whenever a new page has loaded.

Just it and pageAccelerator was already following the web application links.

For links that you wouldn't like to be followed, you need simply add `data-pageAccelerator="false"`.
