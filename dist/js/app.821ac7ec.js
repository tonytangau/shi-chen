(function(e){function n(n){for(var r,c,u=n[0],a=n[1],s=n[2],f=0,p=[];f<u.length;f++)c=u[f],o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(n);while(p.length)p.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,u=1;u<t.length;u++){var a=t[u];0!==o[a]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},i=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var l=a;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("c21b"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Time")],1)},i=[],c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v(e._s(this.shichen))]),t("h2",[e._v(e._s(this.currentTime))])])},u=[],a=function(e){return e>=1&&e<3?"【丑时】":e>=3&&e<5?"【寅时】":e>=5&&e<7?"【卯时】":e>=7&&e<9?"【辰时】":e>=9&&e<11?"【巳时】":e>=11&&e<13?"【午时】":e>=13&&e<15?"【未时】":e>=15&&e<17?"【申时】":e>=17&&e<19?"【酉时】":e>=19&&e<21?"【戌时】":e>=21&&e<23?"【亥时】":"【子时】"},s={name:"Time",data:function(){return{shichen:a((new Date).getHours()),currentTime:null}},methods:{updateCurrentTime:function(){this.currentTime=(new Date).toLocaleTimeString()}},created:function(){var e=this;this.currentTime=(new Date).toLocaleTimeString(),setInterval(function(){return e.updateCurrentTime()},1e3)}},l=s,f=(t("d7c7"),t("2877")),p=Object(f["a"])(l,c,u,!1,null,"55f4b4fa",null);p.options.__file="Time.vue";var d=p.exports,v={name:"app",components:{Time:d}},h=v,b=(t("034f"),Object(f["a"])(h,o,i,!1,null,null,null));b.options.__file="App.vue";var m=b.exports,g=t("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(m)}}).$mount("#app")},"875c":function(e,n,t){},c21b:function(e,n,t){},d7c7:function(e,n,t){"use strict";var r=t("875c"),o=t.n(r);o.a}});
//# sourceMappingURL=app.821ac7ec.js.map