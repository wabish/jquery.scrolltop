# jquery.scrolltop

> A simple jquery plugin to enable scroll to top.

## Installing with NPM

``` bash
$ npm install jquery.scrolltop --save
```

## Installing with Bower

``` bash
$ bower install jquery.scrolltop --save
```

## Demo
[https://cobish.github.io/jquery.scrolltop/](https://cobish.github.io/jquery.scrolltop/)

## How to use

First include the ``jquery.scrolltop.css`` file, you can also create your own style file.

``` css
<link rel="stylesheet" href="./css/scrolltop.css" />
```

Simply include the `jquery.scrolltop.min.js` file and place the following in the head of your document (make sure **jQuery** is included).

``` js
<script src="../dist/lib/jquery-1.11.1.min.js"></script>
<script src="../dist/jquery.scrolltop.min.js"></script>
```

### Minimum setup

``` javascript
$(function() {
  $.scrolltop();
});
```

#### Example with default options

``` javascript
$(function() {
  $.scrolltop({
    elemName: 'scrolltop',    // 元素ID
    scrollDistance: 300,      // 元素开始显示的距离 (px)
    scrollSpeed: 300,         // 回到顶部的速度 (ms)
    animationSpeed: 200       // 元素显示的速度 (ms)
  });
});
```

## License

This plugin is available under [the MIT license](http://mths.be/mit).
