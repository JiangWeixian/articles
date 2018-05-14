# Vue+webpack从开始配置
> 不适用vue-cli，学习一下webpack

## 前言

`vue-cli`很好用，`webpack`很强大。有必要学习一下如何使用`webpack`打包自己项目。

* [参考地址](http://www.qinshenxue.com/article/20161118151423.html) - 从零开始说明webpack+vue2
* [参考地址](https://www.cnblogs.com/libin-1/p/6596810.html) - 说明`vue-cli`配置

## 基础版本(配置`npm run dev`)

本文已经假设你已经安装了`npm`，以及安装了`webpack`(使用`npm`安装即可)

* [从零开始项目地址](https://github.com/JiangWeixian/tf-mobilenet-vue/tree/webpack-stage-young)

### Step 1. 初始化NPM项目


```bash
# cd your-projectname
npm init
```

接下来一路`enter`即可。

**构建目录**

传统的`vue`项目目录结构如下：

```bash
├── build
├── config
├── index.html
├── node_modules
├── package.json
├── package-lock.json
├── README.md
├── src
└── static
```

那么请手动创建`build`, `src`, `static`.

而在`src`文件夹中，目录为

```bash
├── App.vues
├── assets
├── components
├── main.js
```

那么请手动创建`assets`, `components`.

至此项目的基本目录结构已经完成了。如下：

```bash
├── build
├── package.json
├── src
│   ├── assets
│   └── components
└── static
```

## Step 2. 安装依赖 Install Packages

具体配置详见**webpack小结**。

### Vue parts依赖

我们需要的`packages`，**npm install packages --save**

* `vue`

`dev`阶段需要的`packages`，**npm install autoprefixer --save-dev**

* `vue-loader`
* `vue-template-compiler` - `vue-loader`需要

### JS parts依赖

需要`ES6`支持。

`dev`阶段需要的`packages`，**npm install autoprefixer --save-dev**

* `babel-core`
* `babel-helper-vue-jsx-merge-props`
* `babel-loader`
* `babel-plugin-syntax-jsx` - 带有`plugin`和`polyfill`解决浏览器兼容问题。
* `babel-plugin-transform-runtime`
* `babel-plugin-transform-vue-jsx`
* `babel-polyfill`
* `babel-preset-env` - 转译包，和下面的区别。在`.babelrc`配置中，target选项代表了babel-preset-env支持的目标对象。也就是会从`babel-preset-stage-2`选择部分支持。
* `babel-preset-stage-2`- 官方推荐

含义[参考地址](https://juejin.im/post/5a79adeef265da4e93116430)，初次之外我们需要根目录下创建`.babelrc`

**可以发现其实没有并没有在上面加上css相关loader，这是因为vue文件的style写在.vue文件内。和传统外部的css样式不同。需要特别的配置技巧。**

## Step 3. webpack 4

* [webpack入门](https://segmentfault.com/a/1190000006178770)
* [参考地址](https://www.javascriptcn.com/read-31785.html)
* 建议只使用一个loader的，使用`loader`key。多个loader的使用`use`key。

`webpack`入口文件是`main.js`，和传统`vue`项目类似，我们放在`src`文件下。对于`webpack`，常常需要三种配置文件来应对不同的开发环境，而不仅仅是`webpack.config.js`。[参考地址](http://web.jobbole.com/92555/)。

不过刚开始，我们先使用`webpack.config.js`然后在进阶版本中修改为三个文件。参考[webpack docs](https://doc.webpack-china.org/concepts/#%E5%85%A5%E5%8F%A3-entry-)。

在此之前我们需要`vue`的入口文件`index.html`，

* 在根目录下创建`index.html`。以及模板渲染插件`html-webpack-plugin`。`npm install html-webpack-plugin --save-dev`
* 在`src`目录下创建`App.vue` - **创建app.vue的时候去掉style部分**

之后，在`build`文件夹下创建`webpack.conf.js`。

**声明：以下举例npm run dev模式下配置情况**

在`package.json`有`scripts`选项，配置`webpack-dev-server --inline --progress --config build/webpack.conf.js`

截止到**2018-05-13**，我需要通过`npm install package --save-dev`安装：

* `webpack-dev-server` - 对应`webpack.conf.js`中`devServer`配置项目。[参考地址](https://webpack.js.org/configuration/dev-server/)
    ```JavaScript
    devServer: {
        clientLogLevel: 'warning',
        // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        historyApiFallback: {
        rewrites: [
            { from: /.*/, to: path.posix.join('/', 'index.html') },
          ],
        },
        // 开始热加载，每次改动文件自动刷新浏览器
        hot: true,
        contentBase: false,
        compress: true,
        // 浏览器访问地址
        host: 'localhost',
        port: 8080,
        // 是否自动打开浏览器
        open: false,
        // 浏览器全屏显示错误
        overlay: true,
        publicPath: '/',
        // 自动打包，dev模式不需要
        watchOptions: {
          poll: false
        }
  }
    ```
* `webpack-cli`

配置文件如下:

* 由于我们将`webpack.conf.js`放到了`build`文件夹中，所以要指定上下文`context`环境。从`context`环境下寻找`entry`。

```Javascript
'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: 'build.js',
    publicPath: '/'
  },
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join('/', 'index.html') },
      ],
    },
    hot: true,
    contentBase: false,
    compress: true,
    host: 'localhost',
    port: 8080,
    open: false,
    overlay: true,
    publicPath: '/',
    watchOptions: {
      poll: false
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../static'),
      to: 'static',
      ignore: ['.*']
    }]),
    new VueLoaderPlugin()
  ]
}
```

**说明plugins相关：**

* `HtmlWebpackPlugin` - 由于`index.html`在根目录中，所以这样配置没有问题。也就是我们编译的js，css等文件插入的对象。
  * `inject` - 自动插入到index.html中
*  `HotModuleReplacementPlugin` - 对应`devServer`中`hot`选项，或者在`package.json scripts dev`选项中加上`--hot`
* `NamedModulesPlugin` - `es6`的模块话，我们在`.babelrc`中设置了`module: false`。所以希望`webpack`帮我们处理模块化的问题。
* `VueLoaderPlugin` - vue-loader官方推荐，用就完事了。
* `CopyWebpackPlugin` - 讲`../static`内部所有文件拷贝到`static`文件夹中。

## Step 4. Vue初始

在`src`文件夹中我们有`main.js`以及`App.vue`。我们需要做的就是初始化一个`VUE`。这个官方文档应该有教程。

### Error

* 无法`resolve App.vue` - 在`webpack.conf.js`中加上：
  ```JavaScript
  resolve: {
      extensions: ['.js', '.vue', '.json']
    }
  ```
  这样导入就不用加上扩展名。

此时在命令行输出`npm run dev`，就可以在浏览器看到我们需要的东西。
  
## 基础部分更多设置

* 加上css-loader，由于我使用预编译是`stylus`，所以我们需要`npm install package --save-dev`
  * `stylus-loader`
  * `stylus`
  * `css-loader`
  * `vue-style-loader` - 替代`style-loader`，官方推荐，作用是类似的。不过修复了bugs。
  * `postcss-loader` - 为了`autoprefixer`实现自动添加前缀。

在`rules for vue-loader`加上：

```JavaScript
{
  test: /\.vue$/,
  loader: "vue-loader",
 options: {
          // 这部分处理css部分以及不同预处理器的css样式。sourcemap就是为合并为同一个css文件
          loaders: {
            css: ['vue-style-loader',
              {loader: 'css-loader', options: {sourceMap: true}}],
            stylus: ['vue-style-loader',
              { loader: 'css-loader', options: {sourceMap: true}},
              { loader: 'stylus-loader', options: {sourceMap: true}}],
            styl: ['vue-style-loader',
              { loader: 'css-loader', options: {sourceMap: true}},
              { loader: 'stylus-loader', options: {sourceMap: true}}]
          },
          cssSourceMap: true,
          // 使用缓存，访问更快。可能有bugs
          cacheBusting: true,
          // 详见下面
          transformToRuqire: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
}
```

* 其中`options`部分就是css-loader所存在的位置
* `transformToRuqire` - 原因在于在vue文件中，加了这个选项之后。例如在img标签中引用图片地址`src=url`而不需要使用`:src=require(url)`

除了这个之外，还要额外加上处理`css, postcss, stylus, styl`的`rules`:


```JavaScript
{
  test: /\.css$/,
  use: ['vue-style-loader',
    {loader: 'css-loader', options: {sourceMap: true}},
    {loader: 'postcss-loader', options: {sourceMap: true}}
  ]
},
{
  test: /\.postcss$/,
  use: ['vue-style-loader',
    {loader: 'css-loader', options: {sourceMap: true}},
    {loader: 'postcss-loader', options: {sourceMap: true}}
  ]
},
{
  test: /\.styl$/,
  use: ['vue-style-loader',
    {loader: 'css-loader', options: {sourceMap: true}},
    {loader: 'stylus-loader', options: {sourceMap: true}},
    {loader: 'postcss-loader', options: {sourceMap: true}}
  ]
},
{
  test: /\.stylus$/,
  use: ['vue-style-loader',
    {loader: 'css-loader', options: {sourceMap: true}},
    {loader: 'stylus-loader', options: {sourceMap: true}},
    {loader: 'postcss-loader', options: {sourceMap: true}}
  ]
}
```

**注意loader添加顺序（use中），style-loader，css-loader， postcss-loader，预处理器loader**。

这样我们就可以处理样式文件。

不过还有一个**error: no postcss config find**，因为postcss添加前缀必须要根据一个配置，例如支持99%浏览器之类的。

* 在`package.json`文件中加上
  ```JavaScript
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <=8"
  ]
  ```
* 添加`postcss`配置（也就是引入`autoprefixer`），有两种方法
  * 在每个含有`postcss rules`添加`plugin项` - `{loader: 'postcss-loader', options: {sourceMap: true}， plugins: (loader) => {
    require('autoprefixer')()
  }}`这个方法工程太大。
  * 所以参考`autoprefixer`主页上的做法，添加`postcss.config.js`
    ```JavaScript
    module.exports = {
      plugins: [
        require('autoprefixer')
      ]
    }
    ```

此时你在`App.vue`追加`style`就可以在浏览器预览了。

### 添加更多loader

和图片、视频、字体相关loader - `url-loader`

```JavaScript
{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
  }
},
{
  test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
  use: ["url-loader"],
  options: {
    limit: 10000,
    name: path.posix.join('static', 'media/[name].[hash:7].[ext]')
  }
},
{
  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
  use: ["url-loader"],
  options: {
    limit: 10000,
    name: path.posix.join('static', 'media/[name].[hash:7].[ext]')
  }
}
```

* `limit` - 文件大小限制，超过的`base64`
* `name` - 文件名

经测试，在`aseets`文件夹里面才会使用以上`loader`。

### 优化error提示

在此步骤之前，error提示方式可能比较粗暴。使用`friendly-errors-webpack-plugin`格式化`error`。[官方文档](https://github.com/geowarin/friendly-errors-webpack-plugin#build-success)

在webpack.conf.js中`plugins`添加：

```JavaScript
new FriendlyErrorsPlugin({
    onErrors: (severity, errors) => {
      if (severity  !== 'error') {
        return;
      }
      const error = errors[0]
      notifier.notify({
        title: "TF-MOBILE-NET error",
        message: severity + ':' + error.name,
        subtitle: error.file || '',
      })
    }
  })
```

其中还有一个`icon`配置项目，应该是桌面提醒的。我在`linux-eos`上没有成功。大家可以在其他平台试一试，加上`icon: icon路径地址即可`

## 进阶

待写...











