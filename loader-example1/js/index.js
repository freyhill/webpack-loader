//scss
require("../sass/style.scss");

//获取json数据
var datajson = require("./data.json");

//获取fastclick
var FastClick = require('fastclick');

//获取模版
var template = require('../tpl/tpl.html');

//数据插入模版
var html = template(datajson);
 
//dom渲染 
document.querySelector("#content").innerHTML = html;

//使用es6
import Obj from './obj.js';

//获取zepoto
import $ from 'webpack-zepto';

$(function(){
  FastClick.attach(document.body);
  $(".pic").click(function(){
  	alert(0);
  })
})
console.log(Obj.name);