(function(e){function t(t){for(var n,o,r=t[0],c=t[1],l=t[2],u=0,m=[];u<r.length;u++)o=r[u],a[o]&&m.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var p=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"124f":function(e,t,s){"use strict";var n=s("9ba2"),a=s.n(n);a.a},1832:function(e,t,s){"use strict";var n=s("66d5"),a=s.n(n);a.a},"1c42":function(e,t,s){e.exports=s.p+"img/timg.f89b7552.png"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"appPhone"},[n("div",{staticClass:"phoneHeader"},[2==e.step||3==e.step?n("a",{staticClass:"cancle-home",attrs:{href:"#"},on:{click:e.goToHome}},[e._v("Cancle")]):e._e(),n("img",{attrs:{src:s("1c42"),alt:""}}),2==e.step?n("a",{staticClass:"cancle-next",attrs:{href:"#"},on:{click:function(t){e.step=3}}},[e._v("Next")]):e._e(),3==e.step?n("a",{staticClass:"cancle-next",attrs:{href:"#"},on:{click:e.release}},[e._v("Share")]):e._e()]),n("phonebody",{attrs:{posts:e.posts,step:e.step,img:e.img,filters:e.filters},on:{inputTxet:e.inputTxet},model:{value:e.caption,callback:function(t){e.caption=t},expression:"caption"}}),n("div",{staticClass:"phoneFooter"},[n("div",{staticClass:"homg-cta",on:{click:e.goToHome}},[n("img",{attrs:{src:s("9750"),alt:""}})]),n("div",{staticClass:"icon"},[n("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"file",disabled:1!==e.step},on:{change:e.uploadPic}}),e._m(0)])])],1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{attrs:{for:"file"}},[n("img",{attrs:{src:s("cc8e")}})])}],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"phonebody"},[1==e.step?s("div",{staticClass:"feed"},e._l(e.posts,function(e,t){return s("vuegram-body",{key:t,attrs:{post:e}})}),1):e._e(),2==e.step?s("div",[s("div",[s("div",{staticClass:"image",class:e.styles,style:{backgroundImage:"url("+e.img+")"}})]),e._l(e.filters,function(t,n){return s("vuegrampic",{key:t.name,attrs:{img:e.img,filter:t},on:{changes:e.changes}})})],2):e._e(),3==e.step?s("div",[s("div",{staticClass:"image",class:e.styles,style:{backgroundImage:"url("+e.img+")"}}),s("div",{staticClass:"caption-container"},[s("textarea",{attrs:{placeholder:"Write a caption..."},domProps:{value:e.value},on:{input:e.inputText}})])]):e._e()])},r=[],c=(s("c5f6"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vuegram-post"},[s("div",{staticClass:"header"},[s("img",{attrs:{src:e.post.userImage}}),s("span",{staticClass:"username "},[e._v(e._s(e.post.username))])]),s("div",{staticClass:"contener",class:e.post.filter,style:{backgroundImage:"url("+e.post.postImage+")"},on:{dblclick:e.clickLike}}),s("div",{staticClass:"footer"},[s("div",{staticClass:"heart",class:{fas:this.post.hasBeenLiked},on:{click:e.clickLike}}),s("div",{staticClass:"isLike"},[s("span",[e._v(e._s(e.post.likes)+" likes")])]),s("div",{staticClass:"caption"},[s("span",[e._v(e._s(e.post.caption))])])])])}),l=[],p={props:["post"],methods:{clickLike:function(){this.post.hasBeenLiked?this.post.likes--:this.post.likes++,this.post.hasBeenLiked=!this.post.hasBeenLiked}}},u=p,m=(s("124f"),s("2877")),f=Object(m["a"])(u,c,l,!1,null,null,null),d=f.exports,g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vuegram-pic"},[s("div",{staticClass:"pic"},[s("p",[e._v(e._s(e.filter.name))]),s("div",{staticClass:"img",class:e.filter.name,style:{backgroundImage:"url("+e.img+")"},on:{click:function(t){e.changes(),e.filterChange()}}})])])},h=[],v=(s("7f7f"),new n["a"]),b={props:{img:String,filter:Object},data:function(){return{curstyle:""}},methods:{changes:function(){this.$emit("changes",this.filter.name)},filterChange:function(){v.$emit("filterChange",this.filter.name)}}},k=b,y=(s("c309"),Object(m["a"])(k,g,h,!1,null,null,null)),_=y.exports,w={props:{posts:Array,step:Number,img:String,value:String,filters:Array},components:{"vuegram-body":d,vuegrampic:_},data:function(){return{styles:""}},methods:{changes:function(e){this.styles=e},inputText:function(e){this.$emit("inputTxet",e.target.value)}}},C=w,x=(s("1832"),Object(m["a"])(C,o,r,!1,null,null,null)),j=x.exports,I=[{username:"liuluwei",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_beach.jpg",likes:36,hasBeenLiked:!1,caption:"When you're ready for summer '18 ☀️",filter:"perpetua"},{username:"cc",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg",likes:20,hasBeenLiked:!1,caption:"Views from the six...",filter:"clarendon"},{username:"ice",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg",likes:49,hasBeenLiked:!1,caption:"Current mood 🐶",filter:"lofi"}],O=[{name:"normal"},{name:"clarendon"},{name:"gingham"},{name:"moon"},{name:"lark"},{name:"reyes"},{name:"juno"},{name:"slumber"},{name:"aden"},{name:"perpetua"},{name:"mayfair"},{name:"rise"},{name:"hudson"},{name:"valencia"},{name:"xpro2"},{name:"willow"},{name:"lofi"},{name:"inkwell"},{name:"nashville"}],L={name:"app",created:function(){var e=this;v.$on("filterChange",function(t){e.filter=t,console.log(t)})},data:function(){return{posts:I,step:1,img:"",filters:O,filter:"",caption:""}},components:{phonebody:j},methods:{uploadPic:function(e){var t=this;console.log(e);var s=e.target.files;if(s.length){var n=new FileReader;n.readAsDataURL(s[0]),n.onload=function(e){t.img=e.target.result,t.step=2}}},goToHome:function(){this.step=1,this.caption=""},inputTxet:function(e){this.caption=e},release:function(){var e={username:"juanjuan",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",postImage:this.img,likes:0,hasBeenLiked:!1,caption:this.caption,filter:this.filter};this.posts.unshift(e),this.goToHome()}}},T=L,P=(s("7c55"),Object(m["a"])(T,a,i,!1,null,null,null)),S=P.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(S)}}).$mount("#app")},"5c48":function(e,t,s){},"66d5":function(e,t,s){},"7c55":function(e,t,s){"use strict";var n=s("5c48"),a=s.n(n);a.a},9750:function(e,t,s){e.exports=s.p+"img/home.68f8ed36.jpg"},"9ba2":function(e,t,s){},bf05:function(e,t,s){},c309:function(e,t,s){"use strict";var n=s("bf05"),a=s.n(n);a.a},cc8e:function(e,t,s){e.exports=s.p+"img/jiahao.a006994b.jpg"}});
//# sourceMappingURL=app.29b77336.js.map