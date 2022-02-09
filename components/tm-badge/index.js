(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tm-badge/index"],{"21f2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("2010"));function a(t){return t&&t.__esModule?t:{default:t}}var o={name:"TmBadge",props:{type:{type:String,validator:function(t){return["primary","error","default","warning"].includes(t)},default:"default"},size:String,color:String,bgColor:String,bgGradient:String,dot:{type:Boolean,default:!1}},data:function(){return{prefixCls:"".concat(r.default.prefix,"-badge")}},computed:{badgeStyle:function(){var t={};return this.color&&(t.color=this.color),this.bgColor&&(t.backgroundColor=this.bgColor),this.bgGradient&&(t.backgroundImage=this.bgGradient),t}},methods:{handleClick:function(t){this.$emit("onClick",t)}}};e.default=o},4346:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.badgeStyle]));t.$mp.data=Object.assign({},{$root:{s0:n}})},o=[]},bc9a:function(t,e,n){"use strict";n.r(e);var r=n("21f2"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},e9c5:function(t,e,n){"use strict";n.r(e);var r=n("4346"),a=n("bc9a");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("6a6f");var i,u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"0fed833c",null,!1,r["a"],i);e["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tm-badge/index-create-component',
    {
        'components/tm-badge/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e9c5"))
        })
    },
    [['components/tm-badge/index-create-component']]
]);
