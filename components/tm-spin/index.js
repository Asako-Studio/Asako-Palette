(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tm-spin/index"],{"1d84":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2010"));function i(t){return t&&t.__esModule?t:{default:t}}var o={name:"TmSpin",props:{color:String,size:{type:String,default:"default"},center:{type:Boolean,default:!0},fix:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},sHeight:[String,Number],loadImage:[String,Boolean],loadImageSize:{type:[String,Number],default:160}},data:function(){return{prefixCls:"".concat(a.default.prefix,"-spin")}},computed:{spinStyle:function(){var t={};return this.sHeight&&(t.height="".concat(this.sHeight,"px")),t},mainStyle:function(){var t={};return this.color&&(t.color=this.color),t},spinImage:function(){return this.loadImage&&"boolean"===typeof this.loadImage?this.app.images.loading:this.loadImage}},methods:{}};e.default=o},"94e0":function(t,e,n){"use strict";n.r(e);var a=n("bf60"),i=n("b58c");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("1b9a");var r,u=n("f0c5"),l=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"1a45536c",null,!1,a["a"],r);e["default"]=l.exports},b58c:function(t,e,n){"use strict";n.r(e);var a=n("1d84"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},bf60:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.spinStyle])),a=t.__get_style([t.mainStyle]);t.$mp.data=Object.assign({},{$root:{s0:n,s1:a}})},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tm-spin/index-create-component',
    {
        'components/tm-spin/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("94e0"))
        })
    },
    [['components/tm-spin/index-create-component']]
]);
