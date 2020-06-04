(window.webpackJsonp=window.webpackJsonp||[]).push([["Billboard"],{3048:function(t,e,a){},"386b":function(t,e,a){var r=a("5ca1"),i=a("79e5"),l=a("be13"),s=/"/g,n=function(t,e,a,r){var i=String(l(t)),n="<"+e;return""!==a&&(n+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),n+">"+i+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(n),r(r.P+r.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",a)}},"58f6":function(t,e,a){"use strict";var r=a("b840");a.n(r).a},b54a:function(t,e,a){"use strict";a("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},b840:function(t,e,a){},c306:function(t,e,a){"use strict";a.r(e);a("b54a"),a("96cf");var r=a("1da1"),i=a("cc33"),l=a("284b");var s=[{label:"普通类型",value:1},{label:"站内导航",value:2},{label:"站外链接",value:3}],n={name:"Billboard",data:function(){return{types:s,billboardList:[],headers:{Authorization:"Bearer ".concat(Object(i.a)())},showPopup:!1,currDelete:null,currEdit:{}}},created:function(){this.getBillboardList()},methods:{getBillboardList:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)({url:"/billboard/list",method:"get"});case 2:e=t.sent,a=e.code,r=e.data.billboard_list,2e3===a&&(this.billboardList=r);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),deleteBillboard:function(t,e){var a=this,i=t._id,s=t.url;this.$loading(Object(r.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r={_id:i,url:s},Object(l.a)({url:"/billboard/delete",method:"delete",data:r});case 2:e=t.sent,2e3===e.code&&a.getBillboardList();case 5:case"end":return t.stop()}var r},t)})),{container:"#billboard-item-".concat(e),scale:1},function(){a.currDelete=null})},updateBillboard:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,a,r,i,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.currEdit,a=e._id,r=e.type,i=e.link,1!==r&&(2!==r&&3!==r||!i)){t.next=11;break}return t.prev=2,t.next=5,n={_id:a,type:r,link:i},Object(l.a)({url:"/billboard/update",method:"put",data:n});case 5:s=t.sent,2e3===s.code&&this.getBillboardList();case 8:return t.prev=8,this.showPopup=!1,t.finish(8);case 11:case"end":return t.stop()}var n},t,this,[[2,,8,11]])}));return function(){return t.apply(this,arguments)}}(),successUpload:function(){this.getBillboardList()}}},c=(a("58f6"),a("fdbd"),a("2877")),o=Object(c.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-10 flex"},[a("div",{staticClass:"w-1/2"},[a("el-carousel",{staticClass:"mb-6 radius",attrs:{arrow:"always",autoplay:!1}},t._l(t.billboardList,function(t,e){return a("el-carousel-item",{key:e},[a("el-image",{staticClass:"h-full",attrs:{fit:"cover",src:t.url}})],1)}),1),a("ul",t._l(t.billboardList,function(e,r){return a("li",{key:r,staticClass:"billboard-item relative mb-4 p-3 flex radius bg-gray overflow-hidden\n           vs-con-loading__container",attrs:{id:"billboard-item-"+r}},[a("el-image",{staticClass:"h-full w-48 mr-3 rounded-lg",attrs:{src:e.url+"?imageView2/2/w/200","preview-src-list":[e.url]}}),a("div",{staticClass:"text-sm text-semi"},[a("div",{staticClass:"w-64 truncate",attrs:{title:e.url}},[t._v("URL："+t._s(e.url))]),a("div",[t._v("Link："+t._s(e.link||"未指定"))]),a("div",[t._v("类型："+t._s(t.types[e.type-1].label))]),a("div",{staticClass:"text-semi"},[t._v("上传时间："+t._s(t.$dayjs(e.created_at).format("YYYY-MM-DD")))])]),a("div",{staticClass:"close-icon text-primary",attrs:{title:"删除"},on:{click:function(e){t.currDelete=r}}},[a("feather",{attrs:{size:"20","stroke-width":"2.4",type:"x"}})],1),a("div",{staticClass:"edit-icon text-primary",attrs:{title:"管理"},on:{click:function(a){t.showPopup=!0,t.currEdit=t.$cloneDeepWith(e)}}},[a("feather",{attrs:{size:"20","stroke-width":"2.4",type:"terminal"}})],1),t.currDelete===r?a("div",{staticClass:"delete-bg absolute top-0 left-0 w-full h-full flex-row-center text-primary text-sm"},[a("div",{staticClass:"absolute z-40 top-0 left-0 w-full h-full bg-main",staticStyle:{opacity:"0.85"}}),a("div",{staticClass:"relative z-50 flex-col-center"},[a("p",{staticClass:"mb-2 text-base font-bold"},[t._v("\n              删除后将不可恢复，请谨慎操作！\n            ")]),a("div",[a("vs-button",{attrs:{color:"danger",size:"small"},on:{click:function(a){return t.deleteBillboard(e,r)}}},[t._v("确认删除")]),a("span",{staticClass:"ml-2 font-bold cursor-pointer",on:{click:function(e){t.currDelete=null}}},[t._v("手滑点错了")])],1)])]):t._e()],1)}),0)],1),a("div",{staticClass:"w-1/2 pl-8"},[a("vs-upload",{ref:"fileUpload",attrs:{multiple:"",action:"/api/billboard/upload",text:"图片上传（JPG、PNG）",fileName:"billboard",accept:"image/jpeg,image/jpg,image/png",limit:6,headers:t.headers},on:{"on-success":t.successUpload}})],1),a("vs-popup",{staticClass:"edit-popup",attrs:{title:"管理广告牌",active:t.showPopup},on:{"update:active":function(e){t.showPopup=e}}},[a("div",{staticClass:"w-full py-2 px-10 flex-col-center"},[a("span",{staticClass:"ml-1 text-sm self-start text-primary"},[t._v("类型")]),a("el-select",{staticClass:"w-full mb-3 no-dark",attrs:{placeholder:"请选择"},model:{value:t.currEdit.type,callback:function(e){t.$set(t.currEdit,"type",e)},expression:"currEdit.type"}},t._l(t.types,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),a("vs-input",{staticClass:"w-full mb-4 no-dark",attrs:{label:"Link",placeholder:"请输入路由或外链链接"},model:{value:t.currEdit.link,callback:function(e){t.$set(t.currEdit,"link",e)},expression:"currEdit.link"}}),a("vs-button",{staticClass:"w-full radius",on:{click:function(e){return t.updateBillboard()}}},[t._v("完成修改")])],1)])],1)},[],!1,null,"7f22f175",null);e.default=o.exports},fdbd:function(t,e,a){"use strict";var r=a("3048");a.n(r).a}}]);