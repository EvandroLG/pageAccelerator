# pageAccelerator
[![Build
Status](https://travis-ci.org/Easyfood/pageAccelerator.svg?branch=master)](https://travis-ci.org/Easyfood/pageAccelerator)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/evandrolg/pageAccelerator?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A very light solution to load web pages faster.

## Browser Support
![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
5.0+ ✔ | 4.0+ ✔ | 10+ ✔ | 11.5 ✔ | 5.0+ ✔ |

# How does it work?
It's an agnostic library that uses ajax and pushState to deliver a faster navigation experience. pageAccelerator is a very light version of [turbolinks](https://github.com/turbolinks/turbolinks) and [pjax](https://github.com/defunkt/jquery-pjax) (our minfied file is just 2.2KB!). Basically what it does is follow every link in your application and each click it loads the page in background and replaces the content correctly, keeping the real datas from body and head, updating the title.

## Installation
To install pageAccelerator, execute:

```shell
  npm install page-accelerator --save
```

or

```shell
  bower install page-accelerator --save
```

Or simply use the minified file from the `dist/` directory.

## How to use?
pageAccelerator doesn't depend on jQuery, Zepto or any other library to work. You need just to include it at the end of your HTML code:

```html
  <script src="page-accelerator.min.js"></script>
```

Then you need to call the `pageAccelerator` function, such as the example bellow:

```js
  pageAccelerator();
```

Just call it and pageAccelerator was already following the web application links.

For links that you don't want to be followed, you need simply add `data-pageAccelerator="false"`.

## Parameters
`pageAccelerator` can also receive an object as a parameter with the following options:
* **beforeLoading** <code>function</code>: Will be called whenever a new page was requested by a click or the browser back
* **afterLoading** <code>function</code>: Will be called whenever a new page has been loaded

## Team
pageAccelerator was made with love by a bunch of [awesome contributors](https://github.com/EasyFood/pageAccelerator/graphs/contributors).

| Author
|:-:|:-:|
|[![@evandrolg](https://avatars3.githubusercontent.com/u/444054?v=3&amp;s=96)](https://github.com/evandrolg)
| [@evandrolg](https://github.com/evandrolg)

