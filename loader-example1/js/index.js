//scss
require("../sass/style.scss");

//获取json数据
var datajson = require("./data.json");

//获取模版
var template = require('../tpl/tpl.html');

//数据插入模版
var html = template(datajson);
 
//dom渲染 
document.querySelector("#content").innerHTML = html;

//使用es6
import Obj from './obj.js';
 
console.log(Obj.name);