(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fd43b10"],{"13fc":function(t,e,a){},"5ec6":function(t,e,a){},"753c":function(t,e,a){"use strict";var i=a("5ec6"),s=a.n(i);s.a},"7ab8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4"},[a("vs-table",{staticClass:"p-4",attrs:{search:"",pagination:"",noDataText:"暂无数据","max-items":10,data:t.beggingList},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.data;return t._l(i,function(e,i){return a("vs-tr",{key:i,attrs:{data:e}},[a("vs-td",[t._v(t._s(e.name))]),a("vs-td",t._l(e.category,function(e,i){return a("vs-chip",{key:i,staticClass:"mr-1"},[t._v("\n            "+t._s(e.name)+"\n          ")])}),1),a("vs-td",[a("p",{staticClass:"text-gray font-bold"},[t._v("\n            ￥"+t._s(Number(e.min_price).toFixed(2))+" - ￥"+t._s(Number(e.max_price).toFixed(2))+"\n          ")])]),a("vs-td",{staticClass:"text-gray"},[t._v("\n          "+t._s(t.$dayjs(e.created_at).format("YYYY/MM/DD"))+"\n        ")]),a("vs-td",{staticClass:"text-gray"},[t._v("\n          "+t._s(t.$dayjs(e.updated_at).format("YYYY/MM/DD"))+"\n        ")]),a("vs-td",[a("div",{staticClass:"text-center"},[a("vs-dropdown",[a("i",{staticClass:"el-icon-more-outline"}),a("vs-dropdown-menu",{staticClass:"w-24"},[a("vs-dropdown-item",{staticClass:"text-center",on:{click:function(a){t.addNewDataSidebar=!0,t.sidebarTitle="编辑更新信息",t.sidebarData=e}}},[a("i",{staticClass:"el-icon-edit mr-2"}),a("span",[t._v("编辑")])]),a("vs-dropdown-item",{staticClass:"text-center danger",attrs:{divider:""},on:{click:function(a){return t.deleteBegging(e.buying_id)}}},[a("i",{staticClass:"el-icon-delete mr-2"}),a("span",[t._v("删除")])])],1)],1)],1)])],1)})}}])},[a("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"}),a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"name"}},[t._v("求购标题")]),a("vs-th",{attrs:{"sort-key":"category"}},[t._v("分类")]),a("vs-th",[t._v("求购价")]),a("vs-th",{attrs:{"sort-key":"created_at"}},[t._v("发布时间")]),a("vs-th",{attrs:{"sort-key":"updated_at"}},[t._v("最后更新")])],1)],2),a("AddNewDataSidebar",{attrs:{title:t.sidebarTitle,isSidebarActive:t.addNewDataSidebar,data:t.sidebarData},on:{closeSidebar:function(e){t.addNewDataSidebar=!1}}})],1)},s=[],r=(a("96cf"),a("3b8d")),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vs-sidebar",{staticClass:"sidebar-main",attrs:{spacer:"","click-not-close":"","position-right":"",parent:"body","default-index":"1",color:"primary"},model:{value:t.isSidebarActiveLocal,callback:function(e){t.isSidebarActiveLocal=e},expression:"isSidebarActiveLocal"}},[a("div",{staticClass:"mt-6 flex items-center justify-between px-6"},[a("span",{staticClass:"text-lg",class:["添加求购信息"===t.title?"text-primary":"text-success"]},[t._v(t._s(t.title))]),a("i",{staticClass:"el-icon-close text-2xl font-bold cursor-pointer",on:{click:function(e){e.stopPropagation(),t.isSidebarActiveLocal=!1}}})]),a("vs-divider",{staticClass:"mb-0"}),a("VuePerfectScrollbar",{staticClass:"scroll-area pt-4 pb-6",attrs:{settings:{maxScrollbarLength:180,wheelSpeed:.6}}},[a("div",{staticClass:"p-6"},[a("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"标题"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("div",{staticClass:"mt-5",staticStyle:{"font-size":"0.85rem",color:"rgba(0, 0, 0, .7)"}},[t._v("商品分类")]),a("el-select",{staticClass:"w-full",attrs:{multiple:"",placeholder:"请选择分类","multiple-limit":2},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},t._l(t.categoryList,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t._id}})}),1),a("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"价格",icon:"attach_money"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}}),a("vs-upload",{ref:"fileUpload",staticClass:"img-upload",attrs:{text:"Upload Image"}})],1)]),a("div",{staticClass:"flex flex-wrap items-center p-6 text-sm",attrs:{slot:"footer"},slot:"footer"},["添加求购信息"===this.title?a("vs-button",{staticClass:"mr-6",on:{click:function(e){return t.onPublish()}}},[t._v("确认添加")]):a("vs-button",{staticClass:"mr-6",attrs:{color:"success"},on:{click:function(e){return t.onUpdate()}}},[t._v("更新修改")]),a("vs-button",{attrs:{type:"border",color:"danger"},on:{click:function(e){t.isSidebarActiveLocal=!1}}},[t._v("取消操作")])],1)],1)},c=[],o=(a("7f7f"),a("9d63")),l=a.n(o),d={name:"AddNewDataSidebar",components:{VuePerfectScrollbar:l.a},props:{isSidebarActive:{type:Boolean,required:!0},title:{type:String,required:!0},data:{type:Object,required:!0}},data:function(){return{name:"",category:[],price:""}},computed:{categoryList:function(){return this.$store.state.categoryList},isSidebarActiveLocal:{get:function(){return this.isSidebarActive},set:function(t){t||this.$emit("closeSidebar")}}},watch:{isSidebarActive:function(t){t&&("添加求购信息"===this.title?(this.name="",this.category=[],this.price=""):this.initValues())}},methods:{initValues:function(){this.name=this.data.name,this.category=this.data.category,this.price=this.data.price,this.$refs.fileUpload.srcs=[]},verification:function(){return this.name.length>0&&this.category.length>0&&this.price.length>0},onPublish:function(){if(this.verification()){var t={name:this.name,category:this.category,price:this.price,time:this.$dayjs().format("YY-MM-DD hh:mm:ss")};this.$emit("addListData",t),this.$emit("closeSidebar")}},onUpdate:function(){if(this.verification()){var t={buying_id:this.data.buying_id,time:this.data.time,name:this.name,category:this.category,price:this.price};this.$emit("updateListData",t),this.$emit("closeSidebar")}}}},u=d,p=(a("753c"),a("a911"),a("2877")),m=Object(p["a"])(u,n,c,!1,null,"0ec11482",null),f=m.exports,v=a("284b");function g(t){return Object(v["a"])({url:"/begging/list",method:"get",params:t})}function b(){return Object(v["a"])({url:"/buying/add",method:"post"})}function h(){return Object(v["a"])({url:"/buying/add",method:"post"})}var y={data:function(){return{selected:[],beggingList:[],sidebarTitle:"",sidebarData:{},addNewDataSidebar:!1}},components:{AddNewDataSidebar:f},created:function(){this.getBeggingList()},methods:{getBeggingList:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g({page:1,page_size:50});case 2:e=t.sent,a=e.code,i=e.data,2e3===a&&(this.beggingList=i.begging_list);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),updateBegging:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),deleteBegging:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}},_=y,x=Object(p["a"])(_,i,s,!1,null,"dac963b8",null);e["default"]=x.exports},a911:function(t,e,a){"use strict";var i=a("13fc"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-2fd43b10.1b2b5405.js.map