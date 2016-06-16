# html-append-plugin

## Install

```
$ npm install html-append-plugin -D
```

## Usage

The plugin will append content to html files duration compilation

```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlAppendPlugin = require('html-append-plugin');
var webpackConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new htmlAppendPlugin({
      append: 'added content'
      // or
      // append: function(){
      //   return 'added content';
      // }
    })
  ]
}
```

This will generate a file `dist/index.html` containing the following content:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
  </head>
  <body>
    <script src="bundle.js"></script>
    added content
  </body>
</html>
```


## License

MIT © [fengzilong](https://github.com/fengzilong)
