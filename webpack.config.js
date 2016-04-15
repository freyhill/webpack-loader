
var webpack  = require("webpack")

module.exports = {
  entry: {
    index:"./loader-example1/js/index.js"
  },
  output: {
      path: './loader-example1/build', //输出路径 __dirname,
      publicPath:"./",
      filename: "[name].js" //输出名称  name就是上面entry定义的page1,page2
     
  },
  module:{
    loaders:[
       {test : /\.css$/  , loader :"style!css" }, //css
       {test : /\.scss$/ , loaders : ["style", "css", "sass"] }, //sass
       {test : /\.js$/   , loader: 'babel',query: {presets: 'es2015'} },
       {test : /\.(png|jpg|gif)$/ , loader:'url?limit=8192&name=images/[name].[ext]'}, //
       {test : /\.json$/ , loader:"json-loader"},
       {test : /\.html$/, loader:"mustache"}
      
    ]
  }

}

