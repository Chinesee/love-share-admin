(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38b7921c"],{"28a5":function(t,e,s){"use strict";var i=s("aae3"),n=s("cb7c"),a=s("ebd6"),l=s("0390"),r=s("9def"),o=s("5f1b"),c=s("520a"),u=s("79e5"),d=Math.min,f=[].push,p="split",v="length",h="lastIndex",m=4294967295,g=!u(function(){RegExp(m,"y")});s("214f")("split",2,function(t,e,s,u){var b;return b="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[v]||2!="ab"[p](/(?:ab)*/)[v]||4!="."[p](/(.?)(.?)/)[v]||"."[p](/()()/)[v]>1||""[p](/.?/)[v]?function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!i(t))return s.call(n,t,e);var a,l,r,o=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,p=void 0===e?m:e>>>0,g=new RegExp(t.source,u+"g");while(a=c.call(g,n)){if(l=g[h],l>d&&(o.push(n.slice(d,a.index)),a[v]>1&&a.index<n[v]&&f.apply(o,a.slice(1)),r=a[0][v],d=l,o[v]>=p))break;g[h]===a.index&&g[h]++}return d===n[v]?!r&&g.test("")||o.push(""):o.push(n.slice(d)),o[v]>p?o.slice(0,p):o}:"0"[p](void 0,0)[v]?function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)}:s,[function(s,i){var n=t(this),a=void 0==s?void 0:s[e];return void 0!==a?a.call(s,n,i):b.call(String(n),s,i)},function(t,e){var i=u(b,t,this,e,b!==s);if(i.done)return i.value;var c=n(t),f=String(this),p=a(c,RegExp),v=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(g?"y":"g"),x=new p(g?c:"^(?:"+c.source+")",h),y=void 0===e?m:e>>>0;if(0===y)return[];if(0===f.length)return null===o(x,f)?[f]:[];var _=0,C=0,k=[];while(C<f.length){x.lastIndex=g?C:0;var w,S=o(x,g?f:f.slice(C));if(null===S||(w=d(r(x.lastIndex+(g?0:C)),f.length))===_)C=l(f,C,v);else{if(k.push(f.slice(_,C)),k.length===y)return k;for(var L=1;L<=S.length-1;L++)if(k.push(S[L]),k.length===y)return k;C=_=w}}return k.push(f.slice(_)),k}]})},"384b":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"flex mt-3 mb-6"},[s("div",{staticClass:"box w-1/4 lg:px-6 px-3 radius bg-gray",on:{click:function(e){return t.getGoodsListOnSell()}}},[s("div",[s("div",{staticClass:"text-3xl text-primary"},[t._v("\n          "+t._s(t.onSellCount.toLocaleString())+"\n        ")]),s("div",{staticClass:"text-semi"},[t._v("已上架商品")])]),t._m(0)]),s("div",{staticClass:"box w-1/4 mx-5 lg:px-6 px-3 radius bg-gray",on:{click:function(e){return t.getGoodsListOffSell()}}},[s("div",[s("div",{staticClass:"text-3xl text-primary"},[t._v("\n          "+t._s(t.offSellCount.toLocaleString())+"\n        ")]),s("div",{staticClass:"text-semi"},[t._v("已下架商品")])]),t._m(1)]),s("div",{staticClass:"w-2/4 py-6 px-6 radius bg-gray"},[s("div",{staticClass:"mb-3 text-semi"},[t._v("高级操作")]),s("div",{staticClass:"flex items-center justify-between text-sm"},[s("div",{staticClass:"sm:w-1/2"},[s("vs-input",{staticClass:"search-input w-full",attrs:{icon:"search",placeholder:"输入商品 ID 搜索"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearchByID(e)}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1)])])]),s("div",{staticClass:"mb-6 py-4 px-6 radius base-shadow bg-semi"},[s("div",{staticClass:"flex items-center justify-between text-semi"},[s("div",[t._v("过滤搜索")]),s("div",[s("i",{staticClass:"el-icon-arrow-down mr-2 cursor-pointer",staticStyle:{transition:"transform 0.3s"},style:t.filtersStyle,attrs:{title:t.hideFilters?"展开":"收起"},on:{click:function(e){t.hideFilters=!t.hideFilters}}}),s("i",{staticClass:"el-icon-refresh-right cursor-pointer",attrs:{title:"重置"},on:{click:function(e){t.selectedCategory="",t.selectedSchool=""}}})])]),s("div",{staticClass:"pt-8 pb-2 flex justify-around items-center flex-wrap overflow-hidden",staticStyle:{transition:"all 0.4s ease"},style:t.inputStyle},[s("div",[s("el-select",{attrs:{filterable:"",placeholder:"根据商品分类搜索"},model:{value:t.selectedCategory,callback:function(e){t.selectedCategory=e},expression:"selectedCategory"}},t._l(t.categoryList,function(t,e){return s("el-option",{key:e,attrs:{label:t.name,value:t._id}})}),1)],1),s("div",[s("el-select",{attrs:{filterable:"",placeholder:"根据商品分类搜索"},model:{value:t.selectedSchool,callback:function(e){t.selectedSchool=e},expression:"selectedSchool"}},t._l(t.schoolList,function(t,e){return s("el-option",{key:e,attrs:{label:t.name,value:t._id}})}),1)],1),s("div",[s("el-select",{attrs:{filterable:"",placeholder:"根据学校搜索"},model:{value:t.selectedSchool,callback:function(e){t.selectedSchool=e},expression:"selectedSchool"}},t._l(t.schoolList,function(t,e){return s("el-option",{key:e,attrs:{label:t.name,value:t._id}})}),1)],1),s("div",[s("vs-button",{staticClass:"w-32 text-sm",attrs:{type:"relief"}},[t._v("确认搜索")])],1)])]),s("ListTable",{attrs:{goodsList:t.goodsList,tableTitle:t.tableTitle,loading:t.tableLoading},on:{getGoodsListOnSell:t.getGoodsListOnSell}})],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rounded-full",staticStyle:{background:"rgba(var(--vs-primary), 0.2)"}},[s("i",{staticClass:"el-icon-sell p-2 text-3xl primary"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rounded-full",staticStyle:{background:"rgba(var(--vs-danger), 0.2)"}},[s("i",{staticClass:"el-icon-sold-out p-2 text-3xl danger"})])}],a=(s("96cf"),s("3b8d")),l=s("db72"),r=s("2f62"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"radius vs-con-loading__container",attrs:{id:"table-list"}},[s("vs-table",{attrs:{search:"",pagination:"","max-items":"10",noDataText:"暂无数据",data:t.goodsList},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.data;return[t._l(i,function(e,i){return[e.seller?s("vs-tr",{key:i},[s("vs-td",{staticClass:"text-primary"},[t._v(t._s(e.name))]),s("vs-td",t._l(e.category,function(e,i){return s("vs-chip",{key:i},[t._v(t._s(e.name))])}),1),s("vs-td",{staticClass:"text-gray font-bold"},[t._v("￥"+t._s(Number(e.price).toFixed(2)))]),s("vs-td",{staticClass:"text-semi"},[t._v(t._s(e.collect_num))]),s("vs-td",{staticClass:"text-gray font-bold"},[t._v(t._s(e.seller.nickname))]),s("vs-td",{staticClass:"text-semi cursor-pointer",attrs:{title:"查看详情"},nativeOn:{click:function(s){return s.stopPropagation(),t.viewGoodsDetail(e._id)}}},[s("feather",{attrs:{size:"18",type:"log-in"}})],1),s("template",{slot:"expand"},[s("div",{staticClass:"flex w-full"},[s("div",{staticClass:"w-1/6"},[s("div",{staticClass:"flex flex-col h-full justify-center items-center"},[s("vs-avatar",{attrs:{size:"45px",src:e.seller.avatar_url},on:{click:function(e){return t.viewUserDetail()}}}),s("div",{staticClass:"my-2 text-gray text-base\n                    font-semibold cursor-pointer",on:{click:function(e){return t.viewUserDetail()}}},[t._v(t._s(e.seller.nickname))]),s("vs-chip",{attrs:{color:"success"}},[t._v("\n                    乐享信用 良好\n                  ")])],1)]),s("vs-list",{staticClass:"w-5/12"},[s("vs-list-header",{staticClass:"text-base",attrs:{title:"卖家信息",color:"success"}}),s("vs-list-item",{attrs:{"icon-pack":"el-icon",icon:"el-icon-user",title:"真实姓名",subtitle:e.seller.real_name}}),s("vs-list-item",{attrs:{"icon-pack":"el-icon",icon:"el-icon-star-off",title:"乐享值",subtitle:""+e.price}})],1),s("vs-list",{staticClass:"w-5/12"},[s("vs-list-header",{staticClass:"text-base",attrs:{title:"商品信息",color:"warning"}}),s("vs-list-item",{attrs:{"icon-pack":"el-icon",icon:"el-icon-collection-tag",title:"商品 ID",subtitle:e._id}},[s("vs-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e._id,expression:"tr._id",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],attrs:{type:"flat",size:"small"}},[t._v("复制")])],1),s("vs-list-item",{attrs:{"icon-pack":"el-icon",icon:"el-icon-time",title:"发布时间",subtitle:t.formatTime(e.created_at)}},[s("vs-button",{attrs:{type:"flat",size:"small"},on:{click:function(s){return t.viewGoodsDetail(e._id)}}},[t._v("查看商品详情")])],1)],1)],1)])],2):t._e()]})]}}])},[s("template",{slot:"header"},[s("div",{staticClass:"w-full flex items-center p-4"},[s("div",{staticClass:"text-xl font-semibold",class:"已上架商品"===t.tableTitle?"primary":"danger"},[t._v(t._s(t.tableTitle))]),s("div",{staticClass:"ml-auto flex items-center"},[s("el-tooltip",{attrs:{content:"导出列表数据"}},[s("div",{staticClass:"w-10 h-10 mr-5 flex-row-center primary-semi\n               rounded-lg bg-main-10 cursor-pointer",on:{click:function(e){return t.exportExcel()}}},[s("feather",{attrs:{size:"21","stroke-width":"1.8",type:"download"}})],1)]),s("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},on:{change:t.onDateChange},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)])]),s("template",{slot:"thead"},[s("vs-th",[t._v("商品名称")]),s("vs-th",[t._v("分类")]),s("vs-th",[t._v("单价")]),s("vs-th",[t._v("收藏数")]),s("vs-th",[t._v("卖家昵称")]),s("vs-th")],1)],2)],1)},c=[],u=(s("28a5"),{name:"ListTable",props:{goodsList:{type:Array,default:function(){return[]}},tableTitle:{type:String,default:"已上架商品"},loading:{type:Boolean,default:!1}},data:function(){return{date:null,pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,s=new Date;s.setTime(s.getTime()-6048e5),t.$emit("pick",[s,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,s=new Date;s.setTime(s.getTime()-2592e6),t.$emit("pick",[s,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,s=new Date;s.setTime(s.getTime()-7776e6),t.$emit("pick",[s,e])}}]}}},watch:{loading:function(t){t?this.$vs.loading({type:"point",container:"#table-list",scale:1}):this.$vs.loading.close("#table-list > .con-vs-loading")}},methods:{viewGoodsDetail:function(t){this.$router.push({path:"/goods-detail",query:{goodsId:t}})},viewUserDetail:function(t){this.$router.push({path:"/user-detail",query:{userId:t}})},onDateChange:function(t){this.$emit("getGoodsListOnSell",t)},onCopy:function(t){this.$message("已复制商品编号：".concat(t.text,"  🎉"))},formatTime:function(t){return this.$dayjs(t).format("YYYY/MM/DD HH:mm:ss")},exportExcel:function(){var t=this;Promise.all([s.e("chunk-6e83591c"),s.e("chunk-34182fda"),s.e("chunk-350d80be")]).then(s.bind(null,"4bf8d")).then(function(e){var s=["商品 ID","商品名称","价格","卖家昵称","卖家姓名","发布时间"],i=["_id","name","price","seller.nickname","seller.real_name","created_at"],n=t.formatJson(i,t.goodsList);e.export_json_to_excel({header:s,data:n,filename:"乐享校园_商品列表",autoWidth:!0,bookType:"xlsx"})})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){var s=t.split(".");return 1===s.length?e[s[0]]:e[s[0]][s[1]]})})}}}),d=u,f=(s("d3dc"),s("2877")),p=Object(f["a"])(d,o,c,!1,null,"09bc2e25",null),v=p.exports,h=s("67cf"),m={name:"GoodsList",components:{ListTable:v},data:function(){return{goodsList:[],selectedCategory:"",selectedSchool:"",tableTitle:null,onSellCount:"--",offSellCount:"--",searchText:"",tableLoading:!1,hideFilters:!1}},computed:Object(l["a"])({},Object(r["c"])(["categoryList","schoolList"]),{filtersStyle:function(){return this.hideFilters?{transform:"rotate(-180deg)"}:{transform:"rotate(0)"}},inputStyle:function(){return this.hideFilters?{opacity:"0","max-height":"0",padding:"0"}:{opacity:"1","max-height":"100px"}}}),activated:function(){this.getGoodsListOnSell(),this.getGoodsListInfo()},methods:{getGoodsListOnSell:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,s,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.tableLoading){t.next=12;break}return this.tableLoading=!0,t.prev=2,t.next=5,Object(h["e"])({page:1,page_size:10});case 5:e=t.sent,s=e.code,i=e.data,2e3===s&&(this.tableTitle="已上架商品",this.goodsList=i.goods_list);case 9:return t.prev=9,this.tableLoading=!1,t.finish(9);case 12:case"end":return t.stop()}},t,this,[[2,,9,12]])}));function e(){return t.apply(this,arguments)}return e}(),getGoodsListOffSell:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,s,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.tableLoading){t.next=12;break}return this.tableLoading=!0,t.prev=2,t.next=5,Object(h["d"])({page:1,page_size:10});case 5:e=t.sent,s=e.code,i=e.data,2e3===s&&(this.tableTitle="已下架商品",this.goodsList=i.goods_list);case 9:return t.prev=9,this.tableLoading=!1,t.finish(9);case 12:case"end":return t.stop()}},t,this,[[2,,9,12]])}));function e(){return t.apply(this,arguments)}return e}(),getGoodsListInfo:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,s,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["c"])();case 2:e=t.sent,s=e.code,i=e.data,2e3===s&&(this.onSellCount=i.on_sell_count,this.offSellCount=i.off_sell_count);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onSearchByID:function(){this.searchText.length>0&&this.getGoodsListOffSell()}}},g=m,b=(s("491e"),Object(f["a"])(g,i,n,!1,null,"08537572",null));e["default"]=b.exports},"491e":function(t,e,s){"use strict";var i=s("b651"),n=s.n(i);n.a},"67cf":function(t,e,s){"use strict";s.d(e,"e",function(){return n}),s.d(e,"d",function(){return a}),s.d(e,"c",function(){return l}),s.d(e,"b",function(){return r}),s.d(e,"f",function(){return o}),s.d(e,"a",function(){return c});var i=s("284b");function n(t){return Object(i["a"])({url:"/goods/list/on_sell",method:"get",params:t})}function a(t){return Object(i["a"])({url:"/goods/list/off_sell",method:"get",params:t})}function l(){return Object(i["a"])({url:"/goods/list/info",method:"get"})}function r(t){return Object(i["a"])({url:"/goods/detail",method:"get",params:t})}function o(t){return Object(i["a"])({url:"/goods/seller",method:"get",params:t})}function c(t){return Object(i["a"])({url:"/goods/comments",method:"get",params:t})}},b651:function(t,e,s){},c8cf:function(t,e,s){},d3dc:function(t,e,s){"use strict";var i=s("c8cf"),n=s.n(i);n.a}}]);
//# sourceMappingURL=chunk-38b7921c.8b7ceca8.js.map