(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5b81798a"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-gh-pages/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{staticClass:"nav-color",attrs:{app:"",dark:""}},[a("div",{staticClass:"d-flex  align-center nav-div"},t._l(t.navList,(function(e){return a("v-btn",{key:e,staticClass:"nav-list",attrs:{text:""}},[t._v(t._s(e)+" ")])})),1),a("v-spacer"),a("div",t._l(t.icons,(function(e){return a("v-icon",{key:e,staticClass:"pa-2 nav-icon"},[t._v(t._s(e))])})),1)],1),a("v-content",[a("MainPage")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",[a("v-flex",{attrs:{md4:""}},[a("v-card",{staticClass:"left-card-up"},[a("v-card-title",{staticClass:"profile-card-title"},[a("v-row",[a("v-col",{attrs:{md4:""}},[t._v("My Profile")]),a("v-col",{staticClass:"text-right"},[a("v-icon",{staticClass:"icon-profile"},[t._v("mdi-arrow-up")])],1)],1)],1),a("v-card-actions",[a("v-list-item",{staticClass:"grow"},[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[a("v-img",{staticClass:"elevation-6",attrs:{src:"http://img10.reactor.cc/pics/post/Anime-Tate-no-Yuusha-no-Nariagari-Raphtalia-aisha-%28rfrm%29-5850729.jpeg"}})],1),a("v-list-item-content",[a("v-card-title",{staticClass:"white--text"},[t._v("Ariatar")]),a("v-card-subtitle",{staticClass:"green--text"},[t._v("Main menu")])],1)],1)],1),a("v-row",t._l(t.images,(function(t){return a("v-col",{key:t,staticClass:"flex-grow"},[a("v-img",{staticClass:"hero-profile-images",attrs:{src:t}}),a("v-col",{staticClass:"flex-grow1"},[a("v-img",{staticClass:"hero-profile-images",attrs:{src:t}})],1)],1)})),1),a("div",{staticClass:"d-flex justify-space-around text-center stats-card-title"},[a("p",[t._v(" wins "),a("br"),t._v(" 44 ")]),a("p",[t._v(" matches "),a("br"),t._v(" 85 ")])])],1),a("v-card",{staticClass:"mt-2"},[a("v-card-title",[t._v("fdsgfd")])],1)],1),a("v-flex",{staticClass:"ml-4",attrs:{md8:""}},[t._v(" fdsfdsfs")])],1)],1)},s=[],c={name:"HelloWorld",data:function(){return{images:["images/mirana-avatar.png","images/traxex-avatar.png","images/wind-avatar.png"],imagesBigs:["images/mirana-avatar-big.png","images/traxex-avatar-big.png","images/wind-avatar-big.png"]}}},l=c,u=a("2877"),f=a("6544"),p=a.n(f),d=a("b0af"),v=a("99d9"),g=a("62ad"),m=a("a523"),h=a("0e8f"),b=a("132d"),w=a("adda"),y=a("a722"),C=a("da13"),_=a("8270"),x=a("5d23"),V=a("0fd9"),j=Object(u["a"])(l,i,s,!1,null,null,null),k=j.exports;p()(j,{VCard:d["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardTitle:v["c"],VCol:g["a"],VContainer:m["a"],VFlex:h["a"],VIcon:b["a"],VImg:w["a"],VLayout:y["a"],VListItem:C["a"],VListItemAvatar:_["a"],VListItemContent:x["a"],VRow:V["a"]});var O={name:"App",components:{MainPage:k},data:function(){return{navList:["heroes","store","watch","learn","arcade"],icons:["mdi-plus","mdi-mail","mdi-sword","mdi-close"]}}},P=O,A=a("7496"),M=a("40dc"),S=a("8336"),L=a("a75b"),E=a("2fa4"),T=Object(u["a"])(P,r,o,!1,null,null,null),I=T.exports;p()(T,{VApp:A["a"],VAppBar:M["a"],VBtn:S["a"],VContent:L["a"],VIcon:b["a"],VSpacer:E["a"]});var B=a("9483");Object(B["a"])("".concat("/vue-gh-pages/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var N=a("8c4f"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("MainPage",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},F=[],H={name:"Home",components:{MainPage:k}},q=H,J=Object(u["a"])(q,$,F,!1,null,null,null),R=J.exports;n["a"].use(N["a"]);var W=[{path:"/",name:"Home",component:R},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Y=new N["a"]({mode:"history",base:"/vue-gh-pages/",routes:W}),z=Y,D=a("2f62");n["a"].use(D["a"]);var G=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}}),K=a("f309");n["a"].use(K["a"]);var Q=new K["a"]({});a("684f");n["a"].config.productionTip=!1,new n["a"]({router:z,store:G,vuetify:Q,render:function(t){return t(I)}}).$mount("#app")},"684f":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0bc0252b.js.map