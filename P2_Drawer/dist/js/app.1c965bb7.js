(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)r=i[u],s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},o=[];function r(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0aa661":"10ff9ef6","chunk-2d21dc81":"9247e2c0","chunk-2d21f2da":"649174e3"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=s[t]=[e,a]});e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(t),o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");r.type=a,r.request=o,n[1](r)}s[t]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0571":function(t,e,n){"use strict";var a=n("dad0"),s=n.n(a);s.a},"112b":function(t,e,n){"use strict";var a=n("3f97"),s=n.n(a);s.a},"1d37":function(t,e,n){"use strict";var a=n("37fe"),s=n.n(a);s.a},3790:function(t,e,n){t.exports=n.p+"img/A3.20279b70.jpg"},"37fe":function(t,e,n){},"3ee7":function(t,e,n){"use strict";var a=n("7ecc"),s=n.n(a);s.a},"3f97":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var a=n("2b0e"),s=n("bb71");n("da64");a["a"].use(s["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("router-view")],1)],1)},r=[],i=n("2f62"),c={name:"App"},l=c,u=n("2877"),f=n("6544"),d=n.n(f),p=n("7496"),h=n("549c"),m=Object(u["a"])(l,o,r,!1,null,null,null),v=m.exports;d()(m,{VApp:p["a"],VContent:h["a"]});var g=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"HOME"},[n("div",{staticClass:"menu"},[n("input",{staticClass:"menu-open",attrs:{type:"checkbox",href:"#",name:"menu-open",id:"menu-open"}}),t._m(0),n("a",{staticClass:"menu-item menu-item1",attrs:{title:"搜尋"},on:{click:function(e){return t.$router.push({name:"area"})}}},[t._v("\n      搜尋\n      "),n("font-awesome-icon",{attrs:{icon:t.search,size:"1x"}})],1),n("a",{staticClass:"menu-item menu-item2",attrs:{href:"#singin",title:"登入"}},[t._v("\n      登入\n      "),n("font-awesome-icon",{attrs:{icon:t.usercircle,size:"1x"}})],1)])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"menu-open-button",attrs:{for:"menu-open"}},[n("ol",{staticClass:"menu-text",attrs:{href:"",target:"_"}},[n("li",{staticClass:"menu-li",staticStyle:{"font-size":"30px"}},[t._v("Vá ao café")]),n("li",{staticClass:"menu-li",staticStyle:{"font-size":"10px"}},[t._v("ENJOY YOUR REST TIME")])])])}],C=n("ad3d"),w=n("c074"),y={data:function(){return{search:w["b"],usercircle:w["d"]}},components:{FontAwesomeIcon:C["a"]}},x=y,k=(n("1d37"),Object(u["a"])(x,_,b,!1,null,"74bf0b5f",null)),O=k.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xs":""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("v-img",{attrs:{src:t.dog.url}})],1),n("v-flex",[n("h1",[t._v(t._s(t.dog.comment))]),n("p",{staticClass:"subtitle"},[t._v(t._s(t.dog.info))])])],1)],1)},j=[],E={props:["dog"],data:function(){return{}}},S=E,T=n("a523"),N=n("0e8f"),V=n("adda"),$=n("a722"),B=Object(u["a"])(S,A,j,!1,null,null,null),P=B.exports;d()(B,{VContainer:T["a"],VFlex:N["a"],VImg:V["a"],VLayout:$["a"]});var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xs":""}},[n("v-layout",[n("v-flex",[n("div",{attrs:{id:"spinner_container"}},[t.loading?n("v-progress-circular",{staticClass:"spinner",attrs:{size:40,indeterminate:"",color:"pink"}}):t._e()],1),n("img",{attrs:{src:this.dogUrl}}),n("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{name:"title",label:"Describe me",id:"title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("v-text-field",{attrs:{name:"author",label:"Author",hint:"your name",id:"author"},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}}),n("v-btn",{attrs:{block:"",color:"primary"},on:{click:function(e){return t.post()}}},[t._v("\n                            POST A DOG\n                        ")])],1)],1)],1)],1)],1)],1)},D=[],I=n("bc3a"),F=n.n(I),L={data:function(){return{dogUrl:null,title:"",author:"",loading:!0}},mounted:function(){var t=this;F.a.get("https://dog.ceo/api/breed/appenzeller/images/random").then(function(e){e.data.status?(t.dogUrl=e.data.message,t.loading=!1):console.log("Error getting image")})},methods:{post:function(){}}},z=L,R=(n("112b"),n("8336")),U=n("490a"),G=n("2677"),J=Object(u["a"])(z,M,D,!1,null,"2f4f9987",null),q=J.exports;d()(J,{VBtn:R["a"],VContainer:T["a"],VFlex:N["a"],VLayout:$["a"],VProgressCircular:U["a"],VTextField:G["a"]});var H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"AREA"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"top u-cf"},[n("div",{staticClass:"navbar"},[n("div",{staticClass:"nav_LOGO"},[n("a",{on:{click:function(e){return t.$router.push({name:"home"})}}},[t._v("Vá ao café")])]),t._m(0)])]),n("div",{staticClass:"down u-cf"},[n("div",{staticClass:"content"},[n("ul",{staticClass:"content_menu"},[n("li",{staticClass:"area_1"},[n("a",{attrs:{href:"#"}},[t._v("北部")]),n("div",{staticClass:"area_menu area_menu1"},[n("div",{staticClass:"left"},[t._v("北部")]),n("ul",{staticClass:"right"},t._l(t.norths,function(e){return n("li",{key:e.value},[n("a",{on:{click:function(n){return t.onSelectArea(e)}}},[t._v(t._s(e.info))])])}),0)])]),n("li",{staticClass:"area_2"},[n("a",{attrs:{href:"#"}},[t._v("東部")]),n("div",{staticClass:"area_menu area_menu2"},[n("div",{staticClass:"left"},[t._v("東部")]),n("ul",{staticClass:"right"},t._l(t.easts,function(e){return n("li",{key:e.value},[n("a",{on:{click:function(n){return t.onSelectArea(e)}}},[t._v(t._s(e.info))])])}),0)])]),n("li",{staticClass:"area_3"},[n("a",{attrs:{href:"#"}},[t._v("中部")]),n("div",{staticClass:"area_menu area_menu3"},[n("div",{staticClass:"left"},[t._v("中部")]),n("ul",{staticClass:"right"},t._l(t.mids,function(e){return n("li",{key:e.value},[n("a",{on:{click:function(n){return t.onSelectArea(e)}}},[t._v(t._s(e.info))])])}),0)])]),n("li",{staticClass:"area_4"},[n("a",{attrs:{href:"#"}},[t._v("南部")]),n("div",{staticClass:"area_menu area_menu4"},[n("div",{staticClass:"left"},[t._v("南部")]),n("ul",{staticClass:"right"},t._l(t.souths,function(e){return n("li",{key:e.value},[n("a",{on:{click:function(n){return t.onSelectArea(e)}}},[t._v(t._s(e.info))])])}),0)])])])])])])])},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav_menu"},[n("li",[n("a",{attrs:{href:"#"}},[t._v("登入")])])])}],K=(n("7f7f"),n("cebc")),Q={data:function(){return{norths:[{value:"norths"}],easts:[{value:"easts"}],mids:[{value:"mids"}],souths:[{value:"souths"}]}},methods:Object(K["a"])({},Object(i["b"])(["setTitleName"]),{getData:function(){var t=this;this.$axios.get("../static/areas.json").then(function(e){t.norths=e.data.north,t.easts=e.data.east,t.mids=e.data.mid,t.souths=e.data.south})},onSelectArea:function(t){this.setTitleName(t.name),it.push({name:"search",params:{name:t.name,area:t}})}}),mounted:function(){this.getData()},created:function(){this.setTitleName("dogApp")}},W=Q,X=(n("3ee7"),Object(u["a"])(W,H,Y,!1,null,"39f48d71",null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MAIN"},[n("transition",{attrs:{name:"fade"}},[t.showintro?n("div",{staticClass:"showintro"},[n("div",{staticClass:"INTRO"},[n("div",{staticClass:"intro_top"},[n("font-awesome-icon",{staticClass:"closeBtn closeBtn1",attrs:{icon:t.closeBtn1},on:{click:t.hide}})],1),n("div",{staticClass:"intro_content"},[n("img",{attrs:{src:t.photo}})]),n("div",{staticClass:"intro_btm"},[n("font-awesome-icon",{staticClass:"closeBtn closeBtn2",attrs:{icon:t.closeBtn2},on:{click:t.hide}})],1)])]):t._e()]),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"top u-cf"},[n("div",{staticClass:"navbar"},[n("div",{staticClass:"nav_LOGO"},[n("a",{on:{click:function(e){return t.$router.push({name:"home"})}}},[t._v("Vá ao café")])]),n("ul",{staticClass:"nav_menu"},[n("li",[n("a",[t._v(t._s(t.area.name))])])])])]),n("div",{staticClass:"down u-cf"},[n("div",{staticClass:"content"},[n("div",{staticClass:"searchbar"},[n("input",{staticClass:"searchTerm",attrs:{type:"text",placeholder:"Search"}}),n("button",{staticClass:"searchButton",attrs:{type:"submit"}},[n("font-awesome-icon",{attrs:{icon:t.search}})],1)]),n("div",{staticClass:"SEARCH"},t._l(t.a,function(e){return n("div",{key:e.id,staticClass:"search_content search_content1",attrs:{id:"search_content1"},on:{click:function(n){return t.content(e)}}},[n("img",{staticStyle:{width:"100%",height:"auto"},attrs:{src:e.url}})])}),0)])])])],1)},et=[],nt=n("b702"),at={props:["area"],data:function(){return{wrapper:!0,showintro:!1,search:w["b"],closeBtn1:w["c"],closeBtn2:nt["a"],circleup:w["a"],cons:[{id:0,url:"https://www.searchome.net/Article/doc17274/P.jpg"},{id:1,url:n("6cca")},{id:2,url:n("3790")}],photo:null,a:[]}},methods:{content:function(t){this.showintro=!0,this.wrapper=!1,this.photo=t.url,console.log(this.showintro)},hide:function(){this.showintro=!1,this.wrapper=!0,console.log(this.showintro)},getData:function(){var t=this;this.$axios.get("./static/coffee.json").then(function(e){t.a=e.data.coffee,console.log(t.a)})}},mounted:function(){this.getData()},components:{FontAwesomeIcon:C["a"]}},st=at,ot=(n("0571"),Object(u["a"])(st,tt,et,!1,null,"1867c38c",null)),rt=ot.exports;a["a"].use(g["a"]);var it=new g["a"]({routes:[{path:"/",name:"home",component:O},{path:"/area",name:"area",component:Z},{path:"/search/:name",name:"search",props:!0,component:rt},{path:"/details/:id",name:"details",props:!0,component:P},{path:"/post",name:"post",component:q},{path:"/page1",name:"page1",component:function(){return n.e("chunk-2d0aa661").then(n.bind(null,"119d"))}},{path:"/page2",name:"page2",component:function(){return n.e("chunk-2d21dc81").then(n.bind(null,"d384"))}},{path:"/page3",name:"page3",component:function(){return n.e("chunk-2d21f2da").then(n.bind(null,"d95d"))}}]});a["a"].use(i["a"]);var ct=new i["a"].Store({state:{titleName:"DogApp"},getters:{titleName:function(t){return t.titleName}},mutations:{SET_TITLE_NAME:function(t,e){"home"==it.name?t.titleName="DogApp":t.titleName=e}},actions:{setTitleName:function(t,e){var n=t.commit;n("SET_TITLE_NAME",e)}}}),lt=n("9483");Object(lt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d1e7"),n("a7fe");a["a"].config.productionTip=!1,a["a"].prototype.$axios=F.a,new a["a"]({router:it,store:ct,render:function(t){return t(v)}}).$mount("#app")},"6cca":function(t,e,n){t.exports=n.p+"img/A2.66524116.jpg"},"7ecc":function(t,e,n){},dad0:function(t,e,n){}});
//# sourceMappingURL=app.1c965bb7.js.map