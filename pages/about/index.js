(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/about/index"],{"5ae7":function(e,t,n){"use strict";(function(e){n("d9e8");a(n("66fd"));var t=a(n("9e08"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"9e08":function(e,t,n){"use strict";n.r(t);var a=n("c057"),o=n("d66d");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("7822");var c,u=n("f0c5"),i=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"034664d8",null,!1,a["a"],c);t["default"]=i.exports},c057:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={tmNavbar:function(){return Promise.all([n.e("common/vendor"),n.e("components/tm-navbar/index")]).then(n.bind(null,"38f4"))},tmAvatar:function(){return Promise.all([n.e("common/vendor"),n.e("components/tm-avatar/index")]).then(n.bind(null,"67ae"))},tmAuthor:function(){return Promise.all([n.e("common/vendor"),n.e("components/tm-author/index")]).then(n.bind(null,"131f"))},tmIcon:function(){return Promise.all([n.e("common/vendor"),n.e("components/tm-icon/index")]).then(n.bind(null,"ddea"))},tmActionsheet:function(){return Promise.all([n.e("common/vendor"),n.e("components/tm-actionsheet/index")]).then(n.bind(null,"0244"))}},o=function(){var e=this,t=e.$createElement;e._self._c},r=[]},c6b1:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("26cb");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={data:function(){var e=this.$store.state.app;return{source:null,languageGroup:e.languages.map((function(t){return r(r({},t),{},{color:t.type===e.language&&e.theme.success})})),feedback:{guideLanguage:!1,guideAction:!1,guideCtList:[{text:"联系我们",color:e.theme.success,opentype:"contact"}]}}},computed:{language:function(){var e=this;return this.languageGroup.find((function(t){return t.type===e.app.language}))}},onLoad:function(t){(null===t||void 0===t?void 0:t.source)&&(this.source=t.source),e.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]})},onShareAppMessage:function(e){var t=this.app.shares;return{title:t.title,path:"pages/about/index"}},methods:r(r({},(0,a.mapMutations)(["changeLanguage"])),{},{handleOpenItem:function(t){var n=this;if(this.source&&t.route_type&&this.source.includes("creator")&&this.source===t.route_type)return this.handleNavigateBack();this.handleOpenCommunity(t),t.exit||e.setClipboardData({data:t.url||this.app.name,success:function(e){n.feedback=r(r(r({},n.feedback),t),{},{contact:r(r({},t.contact),{},{preview:!0,text:t.contact&&t.contact.qrcode?"温馨提示：长按识别或保存到微信相册扫一扫\n".concat(t.url||""):"小程序内暂不支持打开当前外链，建议打开浏览器查看\n".concat(t.url||"")}),guideAction:!0})}})},handleSelectLanguage:function(t){var n=this,a=this.languageGroup[t].type,o=this.app.language;a!==o&&(this.languageGroup=this.languageGroup.map((function(e){return r(r({},e),{},{color:e.type===a&&n.app.theme.success})})),this.changeLanguage(a),e.setStorage({key:"".concat(this.app.key,"_language"),data:a,success:function(){e.showToast({title:"".concat(n.languageGroup[t].abbr||n.languageGroup[t].text,"已配置"),icon:"success"})}}))},handleCommonModal:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e in this.feedback?this.feedback[e]=t:this.$set(this.feedback,e,t)},handleEncourage:function(){this.feedback.contact={switch:!0,preview:!0,tips:"送人玫瑰，手留余香 🌹",qrcode:"".concat(this.app.domain.cloud.studio,"/static/images/qrcode_team_encourage.jpeg")},this.handleCommonModal("guideAction")}})};t.default=u}).call(this,n("543d")["default"])},d66d:function(e,t,n){"use strict";n.r(t);var a=n("c6b1"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a}},[["5ae7","common/runtime","common/vendor"]]]);