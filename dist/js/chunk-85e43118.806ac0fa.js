(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85e43118"],{"01d0":function(e,t,n){"use strict";var i=n("6ffc"),r=n.n(i);r.a},"18d2":function(e,t,n){"use strict";var i=n("18e9");e.exports=function(e){e=e||{};var t=e.reporter,n=e.batchProcessor,r=e.stateHandler.getState;if(!t)throw new Error("Missing required dependency: reporter.");function o(e,t){function n(){t(e)}if(i.isIE(8))r(e).object={proxy:n},e.attachEvent("onresize",n);else{var o=c(e);if(!o)throw new Error("Element is not detectable by this strategy.");o.contentDocument.defaultView.addEventListener("resize",n)}}function s(t){var n=e.important?" !important; ":"; ";return(t.join(n)+n).trim()}function a(e,o,a){a||(a=o,o=e,e=null),e=e||{};e.debug;function c(o,a){var c=s(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),l=!1,d=window.getComputedStyle(o),u=o.offsetWidth,f=o.offsetHeight;function m(){function n(){if("static"===d.position){o.style.setProperty("position","relative",e.important?"important":"");var n=function(t,n,i,r){function o(e){return e.replace(/[^-\d\.]/g,"")}var s=i[r];"auto"!==s&&"0"!==o(s)&&(t.warn("An element that is positioned static has style."+r+"="+s+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+r+" will be set to 0. Element: ",n),n.style.setProperty(r,"0",e.important?"important":""))};n(t,o,d,"top"),n(t,o,d,"right"),n(t,o,d,"bottom"),n(t,o,d,"left")}}function s(){function e(t,n){if(!t.contentDocument){var i=r(t);return i.checkForObjectDocumentTimeoutId&&window.clearTimeout(i.checkForObjectDocumentTimeoutId),void(i.checkForObjectDocumentTimeoutId=setTimeout(function(){i.checkForObjectDocumentTimeoutId=0,e(t,n)},100))}n(t.contentDocument)}l||n();var t=this;e(t,function(e){a(o)})}""!==d.position&&(n(d),l=!0);var u=document.createElement("object");u.style.cssText=c,u.tabIndex=-1,u.type="text/html",u.setAttribute("aria-hidden","true"),u.onload=s,i.isIE()||(u.data="about:blank"),r(o)&&(o.appendChild(u),r(o).object=u,i.isIE()&&(u.data="about:blank"))}r(o).startSize={width:u,height:f},n?n.add(m):m()}i.isIE(8)?a(o):c(o,a)}function c(e){return r(e).object}function l(e){if(r(e)){var t=c(e);t&&(i.isIE(8)?e.detachEvent("onresize",t.proxy):e.removeChild(t),r(e).checkForObjectDocumentTimeoutId&&window.clearTimeout(r(e).checkForObjectDocumentTimeoutId),delete r(e).object)}}return{makeDetectable:a,addListener:o,uninstall:l}}},"18e9":function(e,t,n){"use strict";var i=e.exports={};i.isIE=function(e){function t(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")||-1!==e.indexOf(" edge/")}if(!t())return!1;if(!e)return!0;var n=function(){var e,t=3,n=document.createElement("div"),i=n.getElementsByTagName("i");do{n.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i></i><![endif]--\x3e"}while(i[0]);return t>4?t:e}();return e===n},i.isLegacyOpera=function(){return!!window.opera}},"2cef":function(e,t,n){"use strict";e.exports=function(){var e=1;function t(){return e++}return{generate:t}}},"313a":function(e,t,n){"use strict";var i=n("ed66"),r=n.n(i);r.a},"456d":function(e,t,n){var i=n("4bf8"),r=n("0d58");n("5eda")("keys",function(){return function(e){return r(i(e))}})},"49ad":function(e,t,n){"use strict";e.exports=function(e){var t={};function n(n){var i=e.get(n);return void 0===i?[]:t[i]||[]}function i(n,i){var r=e.get(n);t[r]||(t[r]=[]),t[r].push(i)}function r(e,t){for(var i=n(e),r=0,o=i.length;r<o;++r)if(i[r]===t){i.splice(r,1);break}}function o(e){var t=n(e);t&&(t.length=0)}return{get:n,add:i,removeListener:r,removeAllListeners:o}}},"504c":function(e,t,n){var i=n("9e1e"),r=n("0d58"),o=n("6821"),s=n("52a7").f;e.exports=function(e){return function(t){var n,a=o(t),c=r(a),l=c.length,d=0,u=[];while(l>d)n=c[d++],i&&!s.call(a,n)||u.push(e?[n,a[n]]:a[n]);return u}}},5058:function(e,t,n){"use strict";e.exports=function(e){var t=e.idGenerator,n=e.stateHandler.getState;function i(e){var t=n(e);return t&&void 0!==t.id?t.id:null}function r(e){var i=n(e);if(!i)throw new Error("setId required the element to have a resize detection state.");var r=t.generate();return i.id=r,r}return{get:i,set:r}}},"50bf":function(e,t,n){"use strict";var i=e.exports={};function r(e,t,n){var i=e[t];return void 0!==i&&null!==i||void 0===n?i:n}i.getOption=r},"540e":function(e,t,n){"use strict";var i=n("d701"),r=n.n(i);r.a},"5be5":function(e,t,n){"use strict";e.exports=function(e){var t=e.stateHandler.getState;function n(e){var n=t(e);return n&&!!n.isDetectable}function i(e){t(e).isDetectable=!0}function r(e){return!!t(e).busy}function o(e,n){t(e).busy=!!n}return{isDetectable:n,markAsDetectable:i,isBusy:r,markBusy:o}}},"5eda":function(e,t,n){var i=n("5ca1"),r=n("8378"),o=n("79e5");e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],s={};s[e]=t(n),i(i.S+i.F*o(function(){n(1)}),"Object",s)}},"67cf":function(e,t,n){"use strict";n.d(t,"e",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return a}),n.d(t,"f",function(){return c}),n.d(t,"a",function(){return l});var i=n("284b");function r(e){return Object(i["a"])({url:"/goods/list/on_sell",method:"get",params:e})}function o(e){return Object(i["a"])({url:"/goods/list/off_sell",method:"get",params:e})}function s(){return Object(i["a"])({url:"/goods/list/info",method:"get"})}function a(e){return Object(i["a"])({url:"/goods/detail",method:"get",params:e})}function c(e){return Object(i["a"])({url:"/goods/seller",method:"get",params:e})}function l(e){return Object(i["a"])({url:"/goods/comments",method:"get",params:e})}},"6ffc":function(e,t,n){},8615:function(e,t,n){var i=n("5ca1"),r=n("504c")(!1);i(i.S,"Object",{values:function(e){return r(e)}})},abb4:function(e,t,n){"use strict";e.exports=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var i=function(e,t){e[t]=function(){var e=console[t];if(e.apply)e.apply(console,arguments);else for(var n=0;n<arguments.length;n++)e(arguments[n])}};i(n,"log"),i(n,"warn"),i(n,"error")}return n}},b770:function(e,t,n){"use strict";var i=e.exports={};i.forEach=function(e,t){for(var n=0;n<e.length;n++){var i=t(e[n]);if(i)return i}}},c274:function(e,t,n){"use strict";var i=n("50bf");function r(){var e={},t=0,n=0,i=0;function r(r,o){o||(o=r,r=0),r>n?n=r:r<i&&(i=r),e[r]||(e[r]=[]),e[r].push(o),t++}function o(){for(var t=i;t<=n;t++)for(var r=e[t],o=0;o<r.length;o++){var s=r[o];s()}}function s(){return t}return{add:r,process:o,size:s}}e.exports=function(e){e=e||{};var t=e.reporter,n=i.getOption(e,"async",!0),o=i.getOption(e,"auto",!0);o&&!n&&(t&&t.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),n=!0);var s,a=r(),c=!1;function l(e,t){!c&&o&&n&&0===a.size()&&f(),a.add(e,t)}function d(){c=!0;while(a.size()){var e=a;a=r(),e.process()}c=!1}function u(e){c||(void 0===e&&(e=n),s&&(m(s),s=null),e?f():d())}function f(){s=h(d)}function m(e){var t=clearTimeout;return t(e)}function h(e){var t=function(e){return setTimeout(e,0)};return t(e)}return{add:l,force:u}}},c946:function(e,t,n){"use strict";var i=n("b770").forEach;e.exports=function(e){e=e||{};var t=e.reporter,n=e.batchProcessor,r=e.stateHandler.getState,o=(e.stateHandler.hasState,e.idHandler);if(!n)throw new Error("Missing required dependency: batchProcessor");if(!t)throw new Error("Missing required dependency: reporter.");var s=u(),a="erd_scroll_detection_scrollbar_style",c="erd_scroll_detection_container";function l(e){f(e,a,c)}function d(t){var n=e.important?" !important; ":"; ";return(t.join(n)+n).trim()}function u(){var e=500,t=500,n=document.createElement("div");n.style.cssText=d(["position: absolute","width: "+2*e+"px","height: "+2*t+"px","visibility: hidden","margin: 0","padding: 0"]);var i=document.createElement("div");i.style.cssText=d(["position: absolute","width: "+e+"px","height: "+t+"px","overflow: scroll","visibility: none","top: "+3*-e+"px","left: "+3*-t+"px","visibility: hidden","margin: 0","padding: 0"]),i.appendChild(n),document.body.insertBefore(i,document.body.firstChild);var r=e-i.clientWidth,o=t-i.clientHeight;return document.body.removeChild(i),{width:r,height:o}}function f(e,t,n){function i(n,i){i=i||function(t){e.head.appendChild(t)};var r=e.createElement("style");return r.innerHTML=n,r.id=t,i(r),r}if(!e.getElementById(t)){var r=n+"_animation",o=n+"_animation_active",s="/* Created by the element-resize-detector library. */\n";s+="."+n+" > div::-webkit-scrollbar { "+d(["display: none"])+" }\n\n",s+="."+o+" { "+d(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+r,"animation-name: "+r])+" }\n",s+="@-webkit-keyframes "+r+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",s+="@keyframes "+r+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",i(s)}}function m(e){e.className+=" "+c+"_animation_active"}function h(e,n,i){if(e.addEventListener)e.addEventListener(n,i);else{if(!e.attachEvent)return t.error("[scroll] Don't know how to add event listeners.");e.attachEvent("on"+n,i)}}function g(e,n,i){if(e.removeEventListener)e.removeEventListener(n,i);else{if(!e.detachEvent)return t.error("[scroll] Don't know how to remove event listeners.");e.detachEvent("on"+n,i)}}function v(e){return r(e).container.childNodes[0].childNodes[0].childNodes[0]}function p(e){return r(e).container.childNodes[0].childNodes[0].childNodes[1]}function b(e,t){var n=r(e).listeners;if(!n.push)throw new Error("Cannot add listener to an element that is not detectable.");r(e).listeners.push(t)}function w(e,a,l){function u(){if(e.debug){var n=Array.prototype.slice.call(arguments);if(n.unshift(o.get(a),"Scroll: "),t.log.apply)t.log.apply(null,n);else for(var i=0;i<n.length;i++)t.log(n[i])}}function f(e){function t(e){return e===e.ownerDocument.body||e.ownerDocument.body.contains(e)}return!t(e)||null===window.getComputedStyle(e)}function g(e){var t=r(e).container.childNodes[0],n=window.getComputedStyle(t);return!n.width||-1===n.width.indexOf("px")}function b(){var e=window.getComputedStyle(a),t={};return t.position=e.position,t.width=a.offsetWidth,t.height=a.offsetHeight,t.top=e.top,t.right=e.right,t.bottom=e.bottom,t.left=e.left,t.widthCSS=e.width,t.heightCSS=e.height,t}function w(){var e=b();r(a).startSize={width:e.width,height:e.height},u("Element start size",r(a).startSize)}function y(){r(a).listeners=[]}function _(){if(u("storeStyle invoked."),r(a)){var e=b();r(a).style=e}else u("Aborting because element has been uninstalled")}function x(e,t,n){r(e).lastWidth=t,r(e).lastHeight=n}function C(e){return v(e).childNodes[0]}function S(){return 2*s.width+1}function k(){return 2*s.height+1}function E(e){return e+10+S()}function I(e){return e+10+k()}function D(e){return 2*e+S()}function O(e){return 2*e+k()}function z(e,t,n){var i=v(e),r=p(e),o=E(t),s=I(n),a=D(t),c=O(n);i.scrollLeft=o,i.scrollTop=s,r.scrollLeft=a,r.scrollTop=c}function A(){var e=r(a).container;if(!e){e=document.createElement("div"),e.className=c,e.style.cssText=d(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),r(a).container=e,m(e),a.appendChild(e);var t=function(){r(a).onRendered&&r(a).onRendered()};h(e,"animationstart",t),r(a).onAnimationStart=t}return e}function j(){function n(){var n=r(a).style;if("static"===n.position){a.style.setProperty("position","relative",e.important?"important":"");var i=function(e,t,n,i){function r(e){return e.replace(/[^-\d\.]/g,"")}var o=n[i];"auto"!==o&&"0"!==r(o)&&(e.warn("An element that is positioned static has style."+i+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};i(t,a,n,"top"),i(t,a,n,"right"),i(t,a,n,"bottom"),i(t,a,n,"left")}}function i(e,t,n,i){return e=e?e+"px":"0",t=t?t+"px":"0",n=n?n+"px":"0",i=i?i+"px":"0",["left: "+e,"top: "+t,"right: "+i,"bottom: "+n]}if(u("Injecting elements"),r(a)){n();var o=r(a).container;o||(o=A());var l=s.width,f=s.height,m=d(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),g=d(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(i(-(1+l),-(1+f),-f,-l))),v=d(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),p=d(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),b=d(["position: absolute","left: 0","top: 0"]),w=d(["position: absolute","width: 200%","height: 200%"]),y=document.createElement("div"),_=document.createElement("div"),x=document.createElement("div"),C=document.createElement("div"),S=document.createElement("div"),k=document.createElement("div");y.dir="ltr",y.style.cssText=m,y.className=c,_.className=c,_.style.cssText=g,x.style.cssText=v,C.style.cssText=b,S.style.cssText=p,k.style.cssText=w,x.appendChild(C),S.appendChild(k),_.appendChild(x),_.appendChild(S),y.appendChild(_),o.appendChild(y),h(x,"scroll",E),h(S,"scroll",I),r(a).onExpandScroll=E,r(a).onShrinkScroll=I}else u("Aborting because element has been uninstalled");function E(){r(a).onExpand&&r(a).onExpand()}function I(){r(a).onShrink&&r(a).onShrink()}}function T(){function s(t,n,i){var r=C(t),o=E(n),s=I(i);r.style.setProperty("width",o+"px",e.important?"important":""),r.style.setProperty("height",s+"px",e.important?"important":"")}function c(i){var c=a.offsetWidth,d=a.offsetHeight,f=c!==r(a).lastWidth||d!==r(a).lastHeight;u("Storing current size",c,d),x(a,c,d),n.add(0,function(){if(f)if(r(a))if(l()){if(e.debug){var n=a.offsetWidth,i=a.offsetHeight;n===c&&i===d||t.warn(o.get(a),"Scroll: Size changed before updating detector elements.")}s(a,c,d)}else u("Aborting because element container has not been initialized");else u("Aborting because element has been uninstalled")}),n.add(1,function(){r(a)?l()?z(a,c,d):u("Aborting because element container has not been initialized"):u("Aborting because element has been uninstalled")}),f&&i&&n.add(2,function(){r(a)?l()?i():u("Aborting because element container has not been initialized"):u("Aborting because element has been uninstalled")})}function l(){return!!r(a).container}function d(){function e(){return void 0===r(a).lastNotifiedWidth}u("notifyListenersIfNeeded invoked");var t=r(a);return e()&&t.lastWidth===t.startSize.width&&t.lastHeight===t.startSize.height?u("Not notifying: Size is the same as the start size, and there has been no notification yet."):t.lastWidth===t.lastNotifiedWidth&&t.lastHeight===t.lastNotifiedHeight?u("Not notifying: Size already notified"):(u("Current size not notified, notifying..."),t.lastNotifiedWidth=t.lastWidth,t.lastNotifiedHeight=t.lastHeight,void i(r(a).listeners,function(e){e(a)}))}function f(){if(u("startanimation triggered."),g(a))u("Ignoring since element is still unrendered...");else{u("Element rendered.");var e=v(a),t=p(a);0!==e.scrollLeft&&0!==e.scrollTop&&0!==t.scrollLeft&&0!==t.scrollTop||(u("Scrollbars out of sync. Updating detector elements..."),c(d))}}function m(){u("Scroll detected."),g(a)?u("Scroll event fired while unrendered. Ignoring..."):c(d)}if(u("registerListenersAndPositionElements invoked."),r(a)){r(a).onRendered=f,r(a).onExpand=m,r(a).onShrink=m;var h=r(a).style;s(a,h.width,h.height)}else u("Aborting because element has been uninstalled")}function H(){if(u("finalizeDomMutation invoked."),r(a)){var e=r(a).style;x(a,e.width,e.height),z(a,e.width,e.height)}else u("Aborting because element has been uninstalled")}function L(){l(a)}function N(){u("Installing..."),y(),w(),n.add(0,_),n.add(1,j),n.add(2,T),n.add(3,H),n.add(4,L)}l||(l=a,a=e,e=null),e=e||{},u("Making detectable..."),f(a)?(u("Element is detached"),A(),u("Waiting until element is attached..."),r(a).onRendered=function(){u("Element is now attached"),N()}):N()}function y(e){var t=r(e);t&&(t.onExpandScroll&&g(v(e),"scroll",t.onExpandScroll),t.onShrinkScroll&&g(p(e),"scroll",t.onShrinkScroll),t.onAnimationStart&&g(t.container,"animationstart",t.onAnimationStart),t.container&&e.removeChild(t.container))}return l(window.document),{makeDetectable:w,addListener:b,uninstall:y,initDocument:l}}},d6eb:function(e,t,n){"use strict";var i="_erd";function r(e){return e[i]={},o(e)}function o(e){return e[i]}function s(e){delete e[i]}e.exports={initState:r,getState:o,cleanState:s}},d701:function(e,t,n){},e855:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"pr-3",staticStyle:{width:"68%"}},[n("DetailInfo",{attrs:{goods:e.goods,goodsId:e.goodsId}})],1),n("div",{staticClass:"pl-3",staticStyle:{width:"32%"}},[n("DetailUser",{attrs:{seller:e.seller}}),n("DetailComment",{staticClass:"mt-6",attrs:{comments:e.comments,goodsId:e.goodsId,owner:e.seller._id,total:e.pagination.total},on:{refreshComments:function(t){return e.getGoodsComments()},switchPage:function(t){e.getGoodsComments(t)}}})],1)])},r=[],o=(n("96cf"),n("3b8d")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative p-6 bg-primary rounded-lg overflow-hidden"},[n("div",{staticClass:"flex"},[n("div",{staticStyle:{width:"60%"}},[n("el-carousel",{attrs:{autoplay:!1}},e._l(e.goods.img_list,function(e,t){return n("el-carousel-item",{key:t,staticStyle:{display:"flex","justify-content":"center"}},[n("img",{staticClass:"h-full",staticStyle:{"max-width":"inherit"},attrs:{src:e}})])}),1),n("vs-images",{attrs:{hover:"zoom"}},e._l(e.goods.img_list,function(t,i){return n("vs-image",{key:i,attrs:{src:t+"?imageView2/2/w/100"},nativeOn:{click:function(t){e.showViewer=!0}}})}),1)],1),n("div",{staticClass:"pl-5",staticStyle:{width:"40%"}},[n("p",{staticClass:"text-primary text-lg font-bold"},[e._v(e._s(e.goods.name))]),n("div",{staticClass:"my-2 flex items-center justify-between text-gray text-sm"},[n("p",[e._v("发布于 "+e._s(e.$timeDiff(e.goods.created_at)))]),n("div",{staticClass:"flex items-center"},[n("span",{staticClass:"ml-2 text-sm text-gray"},[e._v(e._s(e.goods.collect_num)+" 人收藏")])])]),n("vs-divider",{attrs:{"border-style":"dashed"}}),n("div",{staticClass:"info-item"},[n("vs-chip",[e._v("类 别")]),e._l(e.goods.category,function(t,i){return n("span",{key:i,staticClass:"text-gray",staticStyle:{margin:"0 5px 4px 0","font-size":"15px"}},[e._v("\n          "+e._s(t.name)+"\n        ")])})],2),n("div",{staticClass:"info-item"},[n("vs-chip",[e._v("价 格")]),n("div",[n("span",{staticClass:"text-2xl text-primary font-semibold"},[e._v("\n            ￥"+e._s(Number(e.goods.price).toFixed(2))+"\n          ")]),0!==e.goods.original_price?n("span",{staticClass:"text-gray",staticStyle:{"text-decoration":"line-through"}},[e._v("\n            ￥"+e._s(Number(e.goods.original_price).toFixed(2))+"\n          ")]):e._e()])],1),n("div",{staticClass:"info-item"},[n("vs-chip",[e._v("新 旧")]),n("span",{staticClass:"font-bold",class:{success:e.goods.degree>70,warning:e.goods.degree>=30&&e.goods.degree<70,danger:e.goods.degree<30},staticStyle:{"margin-bottom":"2px"}},[e._v("\n          "+e._s(e.goods.degree)+"%\n        ")])],1),n("div",{staticClass:"info-item"},[n("vs-chip",[e._v("数 量")]),n("span",{staticClass:"text-gray",staticStyle:{"margin-bottom":"2px"}},[e._v(e._s(e.goods.quantity))])],1),n("div",{staticClass:"info-item"},[n("vs-chip",[e._v("配 送")]),n("span",{staticClass:"text-gray",staticStyle:{"margin-bottom":"4px","font-size":"15px"}},[e._v("\n          "+e._s("1"===e.goods.delivery?"包邮":"2"===e.goods.delivery?"自费":"自提")+"\n        ")]),"2"===e.goods.delivery?n("span",{staticClass:"text-gray",staticStyle:{"margin-bottom":"4px","font-size":"15px"}},[e._v("\n          (￥"+e._s(Number(e.goods.delivery_charge).toFixed(2))+")\n        ")]):e._e()],1),e.goods.returnable?n("div",{staticClass:"info-item"},[n("vs-chip",[e._v("保 障")]),n("span",{staticStyle:{"margin-bottom":"4px","font-size":"15px"}},[e._v("\n          7天无理由退换货\n        ")])],1):e._e(),n("vs-divider",{attrs:{"border-style":"dashed"}}),n("div",[1===e.goods.status?n("vs-button",{attrs:{color:"success"}},[e._v("出售中")]):e._e(),2===e.goods.status?n("vs-button",{attrs:{color:"warning"}},[e._v("已售出")]):e._e(),3===e.goods.status?n("vs-button",{attrs:{color:"danger",disabled:!0}},[e._v("该商品已下架")]):e._e()],1)],1)]),n("div",{staticClass:"mt-4"},[n("p",{staticClass:"text-primary"},[e._v("商品详细介绍")]),n("div",{staticClass:"mt-2 text-sm goods-desc",domProps:{innerHTML:e._s(e.goods.description)}})]),n("el-image-viewer",{directives:[{name:"show",rawName:"v-show",value:e.showViewer,expression:"showViewer"}],attrs:{"on-close":function(){e.showViewer=!1},"url-list":e.goods.img_list}})],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"viewer-fade"}},[n("div",{staticClass:"el-image-viewer__wrapper",style:{"z-index":e.zIndex}},[n("div",{staticClass:"el-image-viewer__mask"}),n("span",{staticClass:"el-image-viewer__btn el-image-viewer__close",on:{click:e.hide}},[n("i",{staticClass:"el-icon-circle-close"})]),e.isSingle?e._e():[n("span",{staticClass:"el-image-viewer__btn el-image-viewer__prev",class:{"is-disabled":!e.infinite&&e.isFirst},on:{click:e.prev}},[n("i",{staticClass:"el-icon-arrow-left"})]),n("span",{staticClass:"el-image-viewer__btn el-image-viewer__next",class:{"is-disabled":!e.infinite&&e.isLast},on:{click:e.next}},[n("i",{staticClass:"el-icon-arrow-right"})])],n("div",{staticClass:"el-image-viewer__btn el-image-viewer__actions"},[n("div",{staticClass:"el-image-viewer__actions__inner"},[n("i",{staticClass:"el-icon-zoom-out",on:{click:function(t){return e.handleActions("zoomOut")}}}),n("i",{staticClass:"el-icon-zoom-in",on:{click:function(t){return e.handleActions("zoomIn")}}}),n("i",{staticClass:"el-image-viewer__actions__divider"}),n("i",{class:e.mode.icon,on:{click:e.toggleMode}}),n("i",{staticClass:"el-image-viewer__actions__divider"}),n("i",{staticClass:"el-icon-refresh-left",on:{click:function(t){return e.handleActions("anticlocelise")}}}),n("i",{staticClass:"el-icon-refresh-right",on:{click:function(t){return e.handleActions("clocelise")}}})])]),n("div",{staticClass:"el-image-viewer__canvas"},e._l(e.urlList,function(t,i){return i===e.index?n("img",{key:t,ref:"img",refInFor:!0,staticClass:"el-image-viewer__img",style:e.imgStyle,attrs:{src:e.currentImg},on:{load:e.handleImgLoad,error:e.handleImgError,mousedown:e.handleMouseDown}}):e._e()}),0)],2)])},l=[],d=n("db72"),u=(n("8615"),n("ac6a"),n("456d"),n("c5f6"),n("2b0e"));const f=u["default"].prototype.$isServer,m=(f||Number(document.documentMode),function(){return!f&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)}}()),h=function(){return!f&&document.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)}}();Object.prototype.hasOwnProperty;const g=function(){return!u["default"].prototype.$isServer&&!!window.navigator.userAgent.match(/firefox/i)};function v(e){let t=!1;return function(...n){t||(t=!0,window.requestAnimationFrame(i=>{e.apply(this,n),t=!1}))}}var p={CONTAIN:{name:"contain",icon:"el-icon-full-screen"},ORIGINAL:{name:"original",icon:"el-icon-c-scale-to-original"}},b=g()?"DOMMouseScroll":"mousewheel",w={name:"elImageViewer",props:{urlList:{type:Array,default:function(){return[]}},zIndex:{type:Number,default:2e3},onSwitch:{type:Function,default:function(){}},onClose:{type:Function,default:function(){}}},data:function(){return{index:0,isShow:!1,infinite:!0,loading:!1,mode:p.CONTAIN,transform:{scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}},computed:{isSingle:function(){return this.urlList.length<=1},isFirst:function(){return 0===this.index},isLast:function(){return this.index===this.urlList.length-1},currentImg:function(){return this.urlList[this.index]},imgStyle:function(){var e=this.transform,t=e.scale,n=e.deg,i=e.offsetX,r=e.offsetY,o=e.enableTransition,s={transform:"scale(".concat(t,") rotate(").concat(n,"deg)"),transition:o?"transform .3s":"","margin-left":"".concat(i,"px"),"margin-top":"".concat(r,"px")};return this.mode===p.CONTAIN&&(s.maxWidth=s.maxHeight="100%"),s}},watch:{index:{handler:function(e){this.reset(),this.onSwitch(e)}},currentImg:function(e){var t=this;this.$nextTick(function(e){var n=t.$refs.img[0];n.complete||(t.loading=!0)})}},methods:{hide:function(){this.deviceSupportUninstall(),this.onClose()},deviceSupportInstall:function(){var e=this;this._keyDownHandler=v(function(t){var n=t.keyCode;switch(n){case 27:e.hide();break;case 32:e.toggleMode();break;case 37:e.prev();break;case 38:e.handleActions("zoomIn");break;case 39:e.next();break;case 40:e.handleActions("zoomOut");break}}),this._mouseWheelHandler=v(function(t){var n=t.wheelDelta?t.wheelDelta:-t.detail;n>0?e.handleActions("zoomIn",{zoomRate:.015,enableTransition:!1}):e.handleActions("zoomOut",{zoomRate:.015,enableTransition:!1})}),m(document,"keydown",this._keyDownHandler),m(document,b,this._mouseWheelHandler)},deviceSupportUninstall:function(){h(document,"keydown",this._keyDownHandler),h(document,b,this._mouseWheelHandler),this._keyDownHandler=null,this._mouseWheelHandler=null},handleImgLoad:function(e){this.loading=!1},handleImgError:function(e){this.loading=!1,e.target.alt="加载失败"},handleMouseDown:function(e){var t=this;if(!this.loading&&0===e.button){var n=this.transform,i=n.offsetX,r=n.offsetY,o=e.pageX,s=e.pageY;this._dragHandler=v(function(e){t.transform.offsetX=i+e.pageX-o,t.transform.offsetY=r+e.pageY-s}),m(document,"mousemove",this._dragHandler),m(document,"mouseup",function(e){h(document,"mousemove",t._dragHandler)}),e.preventDefault()}},reset:function(){this.transform={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}},toggleMode:function(){if(!this.loading){var e=Object.keys(p),t=Object.values(p),n=t.indexOf(this.mode),i=(n+1)%e.length;this.mode=p[e[i]],this.reset()}},prev:function(){if(!this.isFirst||this.infinite){var e=this.urlList.length;this.index=(this.index-1+e)%e}},next:function(){if(!this.isLast||this.infinite){var e=this.urlList.length;this.index=(this.index+1)%e}},handleActions:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.loading){var n=Object(d["a"])({zoomRate:.2,rotateDeg:90,enableTransition:!0},t),i=n.zoomRate,r=n.rotateDeg,o=n.enableTransition,s=this.transform;switch(e){case"zoomOut":s.scale>.2&&(s.scale=parseFloat((s.scale-i).toFixed(3)));break;case"zoomIn":s.scale=parseFloat((s.scale+i).toFixed(3));break;case"clocelise":s.deg+=r;break;case"anticlocelise":s.deg-=r;break}s.enableTransition=o}}},mounted:function(){this.deviceSupportInstall()}},y=w,_=n("2877"),x=Object(_["a"])(y,c,l,!1,null,null,null),C=x.exports,S={name:"DetailInfo",components:{ElImageViewer:C},props:{goods:Object,goodsId:String},data:function(){return{showViewer:!1}}},k=S,E=(n("313a"),Object(_["a"])(k,s,a,!1,null,"d6d8aac0",null)),I=E.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"mb-5 p-3 text-center bg-semi base-shadow radius"},[n("vs-avatar",{attrs:{size:"90px",src:e.seller.avatar_url+"?imageView2/2/w/100"},on:{click:function(t){return e.viewUserDetail(e.seller._id)}}}),n("div",{staticClass:"flex-row-center text-lg cursor-pointer",on:{click:function(t){return e.viewUserDetail(e.seller._id)}}},[n("span",{staticClass:"text-primary"},[e._v(e._s(e.seller.nickname))]),n("i",{staticClass:"ml-1",class:"1"===e.seller.gender?"el-icon-male primary":"el-icon-female danger"})]),n("div",{staticClass:"my-1 text-sm text-gray"},[e._v("\n      "+e._s(e.seller.school.name)+"\n    ")]),n("div",{staticClass:"flex justify-around mt-3"},[n("div",[n("div",{staticClass:"text-semi font-bold"},[e._v(e._s(e.seller.published_num))]),n("div",{staticClass:"text-gray text-sm"},[e._v("已发布")])]),n("div",[n("div",{staticClass:"text-semi font-bold"},[e._v(e._s(e.seller.fans_num))]),n("div",{staticClass:"text-gray text-sm"},[e._v("关注者")])]),n("div",[n("div",{staticClass:"text-semi font-bold"},[e._v(e._s(e.seller.credit_value))]),n("div",{staticClass:"text-gray text-sm"},[e._v("信用值")])])])],1),n("div",{staticClass:"hover-light cursor-pointer"},[n("div",{staticClass:"py-3 flex-row-center text-center text-white\n        bg-primary-gradient rounded-lg",on:{click:function(t){return e.contactSeller()}}},[e._v("\n      联系卖家\n    ")]),n("div",{staticClass:"light"})])])},O=[],z={name:"DetailUser",props:{seller:Object},methods:{viewUserDetail:function(e){this.$router.push({path:"/user-detail",query:{userId:e}})},contactSeller:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.seller,n=t._id,i=t.nickname,this.$store.getters["chat/isInChat"](n)){e.next=4;break}return e.next=4,this.$store.dispatch("chat/addContact",n);case 4:this.$store.commit("chat/SET_ACTIVE_CHAT_USER",{_id:n,nickname:i}),this.$store.commit("chat/SET_CHAT_OPEN");case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},A=z,j=(n("01d0"),Object(_["a"])(A,D,O,!1,null,"8988bf0c",null)),T=j.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"comment",staticClass:"relative p-3 bg-primary rounded-lg overflow-hidden",style:"max-height: "+e.maxHeight+"px;"},[e._m(0),e.comments.length>0?n("VuePerfectScrollbar",{staticStyle:{"max-height":"550px"},attrs:{settings:{maxScrollbarLength:160,wheelSpeed:.6}}},[n("ul",{staticClass:"pt-2 overflow-hidden"},e._l(e.comments,function(t,i){return n("li",{key:i,staticClass:"msg relative mb-2",class:{"px-1 py-2 bg-gray-100 rounded-lg":e.currMsg===t._id},staticStyle:{transition:"all 0.3s"}},[n("div",{staticClass:"flex items-center"},[n("vs-avatar",{attrs:{src:t.sender.avatar_url+"?imageView2/2/w/50"},on:{click:function(n){return e.viewUserDetail(t.sender._id)}}}),n("p",{staticClass:"name ml-1"},[e._v("\n            "+e._s(t.sender.nickname)+"\n          ")]),t.sender._id===e.owner?n("p",{staticClass:"owner ml-1"},[e._v("主人")]):e._e(),n("p",{staticClass:"ml-2 text-xs text-gray"},[e._v("\n            "+e._s(e.$timeDiff(t.created_at))+"\n          ")])],1),n("p",{staticClass:"ml-8 text-sm text-gray"},[e._v(e._s(t.content))]),t.replies.length>0?n("ul",{staticClass:"ml-6 p-2 bg-gray rounded-lg"},e._l(t.replies,function(t,i){return n("li",{key:i},[n("p",{staticClass:"text-sm"},[n("span",[n("span",{staticClass:"name cursor-pointer",on:{click:function(n){return e.viewUserDetail(t.sender._id)}}},[e._v(e._s(t.sender.nickname))]),t.sender._id===e.owner?n("span",{staticClass:"owner cursor-default"},[e._v("主人")]):e._e()]),n("span",{staticClass:"mx-1 text-gray"},[e._v("回复")]),n("span",[n("span",{staticClass:"name cursor-pointer",on:{click:function(n){return e.viewUserDetail(t.at._id)}}},[e._v(e._s(t.at.nickname))]),t.at._id===e.owner?n("span",{staticClass:"owner cursor-default"},[e._v("主人")]):e._e(),e._v("\n                :\n              ")]),n("span",{staticClass:"text-gray"},[e._v("\n                "+e._s(t.content)+"\n              ")])])])}),0):e._e()])}),0)]):n("p",{staticClass:"p-3 text-center text-sm text-gray bg-gray rounded-lg"},[e._v("\n    暂时还没有留言\n  ")]),e.showComments&&!e.hideComment?n("div",[n("vs-pagination",{attrs:{total:Math.ceil(e.total/5)},model:{value:e.currPage,callback:function(t){e.currPage=t},expression:"currPage"}})],1):e._e(),e.hideComment?n("div",{staticClass:"hide-comment absolute left-0 bottom-0 w-full text-sm text-center text-gray",on:{click:function(t){return e.showMoreComments()}}},[e._v("\n    查看更多留言\n  ")]):e._e()],1)},L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-1 flex justify-between items-center"},[n("span",{staticClass:"mb-2 text-primary"},[e._v("留言板")])])}],N=n("eec4"),M=n.n(N),P=n("9d63"),$=n.n(P),F={name:"DetailComment",components:{VuePerfectScrollbar:$.a},props:{goodsId:String,comments:Array,owner:String,total:Number},watch:{currPage:function(e){this.$emit("switchPage",e)}},data:function(){return{counterDanger:!0,maxHeight:500,placeholder:"",textContent:"",repContent:"",currMsg:null,currRep:null,currPage:1,hideComment:!1,showComments:!1}},userId:function(){return this.$store.getters["admin/userId"]},mounted:function(){var e=this,t=M()();t.listenTo(this.$refs.comment,function(t){t.offsetHeight>=e.maxHeight?e.hideComment=!0:e.hideComment=!1})},methods:{showMoreComments:function(){this.maxHeight=1e4,this.showComments=!0},viewUserDetail:function(e){e!==this.userId&&this.$router.push({path:"/user-detail",query:{userId:e}})}}},R=F,W=(n("540e"),Object(_["a"])(R,H,L,!1,null,"786d638d",null)),U=W.exports,V=n("67cf"),q={name:"GoodsDetail",components:{DetailInfo:I,DetailUser:T,DetailComment:U},data:function(){return{goodsId:"",goods:{},comments:[],pagination:{},seller:{avatar_url:"",nickname:"----",school:{name:"-----"},gender:"",credit_value:0,fans:[],published_goods:[]}}},mounted:function(){this.goodsId=this.$route.query.goodsId,this.getGoodsDetail(),this.getGoodsSeller(),this.getGoodsComments()},methods:{getGoodsDetail:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(V["b"])({goods_id:this.goodsId});case 2:t=e.sent,n=t.code,i=t.data,2e3===n&&(this.goods=i.goods_detail);case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getGoodsSeller:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(V["f"])({goods_id:this.goodsId});case 2:t=e.sent,n=t.code,i=t.data,2e3===n&&(this.seller=i.seller);case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getGoodsComments:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,i,r,o=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,e.next=3,Object(V["a"])({goods_id:this.goodsId,page:t,page_size:5});case 3:n=e.sent,i=n.code,r=n.data,2e3===i&&(this.comments=r.comments,this.pagination=r.pagination);case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},G=q,B=Object(_["a"])(G,i,r,!1,null,null,null);t["default"]=B.exports},ed66:function(e,t,n){},eec4:function(e,t,n){"use strict";var i=n("b770").forEach,r=n("5be5"),o=n("49ad"),s=n("2cef"),a=n("5058"),c=n("abb4"),l=n("18e9"),d=n("c274"),u=n("d6eb"),f=n("18d2"),m=n("c946");function h(e){return Array.isArray(e)||void 0!==e.length}function g(e){if(Array.isArray(e))return e;var t=[];return i(e,function(e){t.push(e)}),t}function v(e){return e&&1===e.nodeType}function p(e,t,n){var i=e[t];return void 0!==i&&null!==i||void 0===n?i:n}e.exports=function(e){var t;if(e=e||{},e.idHandler)t={get:function(t){return e.idHandler.get(t,!0)},set:e.idHandler.set};else{var n=s(),b=a({idGenerator:n,stateHandler:u});t=b}var w=e.reporter;if(!w){var y=!1===w;w=c(y)}var _=p(e,"batchProcessor",d({reporter:w})),x={};x.callOnAdd=!!p(e,"callOnAdd",!0),x.debug=!!p(e,"debug",!1);var C,S=o(t),k=r({stateHandler:u}),E=p(e,"strategy","object"),I=p(e,"important",!1),D={reporter:w,batchProcessor:_,stateHandler:u,idHandler:t,important:I};if("scroll"===E&&(l.isLegacyOpera()?(w.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),E="object"):l.isIE(9)&&(w.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),E="object")),"scroll"===E)C=m(D);else{if("object"!==E)throw new Error("Invalid strategy name: "+E);C=f(D)}var O={};function z(e,n,r){function o(e){var t=S.get(e);i(t,function(t){t(e)})}function s(e,t,n){S.add(t,n),e&&n(t)}if(r||(r=n,n=e,e={}),!n)throw new Error("At least one element required.");if(!r)throw new Error("Listener required.");if(v(n))n=[n];else{if(!h(n))return w.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");n=g(n)}var a=0,c=p(e,"callOnAdd",x.callOnAdd),l=p(e,"onReady",function(){}),d=p(e,"debug",x.debug);i(n,function(e){u.getState(e)||(u.initState(e),t.set(e));var f=t.get(e);if(d&&w.log("Attaching listener to element",f,e),!k.isDetectable(e))return d&&w.log(f,"Not detectable."),k.isBusy(e)?(d&&w.log(f,"System busy making it detectable"),s(c,e,r),O[f]=O[f]||[],void O[f].push(function(){a++,a===n.length&&l()})):(d&&w.log(f,"Making detectable..."),k.markBusy(e,!0),C.makeDetectable({debug:d,important:I},e,function(e){if(d&&w.log(f,"onElementDetectable"),u.getState(e)){k.markAsDetectable(e),k.markBusy(e,!1),C.addListener(e,o),s(c,e,r);var t=u.getState(e);if(t&&t.startSize){var m=e.offsetWidth,h=e.offsetHeight;t.startSize.width===m&&t.startSize.height===h||o(e)}O[f]&&i(O[f],function(e){e()})}else d&&w.log(f,"Element uninstalled before being detectable.");delete O[f],a++,a===n.length&&l()}));d&&w.log(f,"Already detecable, adding listener."),s(c,e,r),a++}),a===n.length&&l()}function A(e){if(!e)return w.error("At least one element is required.");if(v(e))e=[e];else{if(!h(e))return w.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e=g(e)}i(e,function(e){S.removeAllListeners(e),C.uninstall(e),u.cleanState(e)})}function j(e){C.initDocument&&C.initDocument(e)}return{listenTo:z,removeListener:S.removeListener,removeAllListeners:S.removeAllListeners,uninstall:A,initDocument:j}}}}]);
//# sourceMappingURL=chunk-85e43118.806ac0fa.js.map