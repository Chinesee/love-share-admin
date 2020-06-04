(window.webpackJsonp=window.webpackJsonp||[]).push([["TodoList"],{1066:function(t,e,s){"use strict";var a=s("eaf9");s.n(a).a},1397:function(t,e,s){},"231d":function(t,e,s){},"386d":function(t,e,s){"use strict";var a=s("cb7c"),i=s("83a1"),r=s("5f1b");s("214f")("search",1,function(t,e,s,l){return[function(s){var a=t(this),i=null==s?void 0:s[e];return void 0!==i?i.call(s,a):new RegExp(s)[e](String(a))},function(t){var e=l(s,t,this);if(e.done)return e.value;var n=a(t),o=String(this),c=n.lastIndex;i(c,0)||(n.lastIndex=0);var d=r(n,o);return i(n.lastIndex,c)||(n.lastIndex=c),null===d?-1:d.index}]})},"471c":function(t,e,s){"use strict";s.r(e);const a=[{icon:"bookmark",text:"重要事项",value:"is_important"},{icon:"star",text:"星号标记",value:"is_starred"},{icon:"check-square",text:"已完成",value:"is_done"},{icon:"trash-2",text:"丢弃的",value:"is_trashed"},{icon:"loader",text:"待完成",value:"undone"}],i=[{color:"primary",text:"前端",value:1},{color:"warning",text:"后端",value:2},{color:"success",text:"其它",value:3},{color:"danger",text:"BUG",value:4}];var r={name:"TodoBar",data:()=>({labelItems:a,labelMarks:i}),computed:{currentSelected(){return this.$store.state.todo.currentSelected}},methods:{setActive(t,e){this.$store.commit("todo/SET_CURRENT_SELECTED",{type:t,value:e})}}},l=(s("1066"),s("2877")),n=Object(l.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-6 py-2 bg-main"},[s("div",{staticClass:"text-center"},[s("vs-button",{staticClass:"w-48 radius",on:{click:function(e){return t.$store.commit("todo/SET_TODO_POPUP_STATUS",{status:!0})}}},[t._v("添加任务")])],1),s("div",{staticClass:"py-5"},[s("div",{staticClass:"label-item text-semi",class:{primary:!t.currentSelected.type},on:{click:function(e){return t.setActive()}}},[s("feather",{staticClass:"mr-2",attrs:{size:"22","stroke-width":"1.8",type:"layers"}}),s("span",{staticClass:"label-text"},[t._v("所有任务")])],1)]),s("vs-divider"),s("div",{staticClass:"py-5"},[s("div",{staticClass:"text-lg text-primary"},[t._v("筛 选")]),t._l(t.labelItems,function(e,a){return s("div",{key:a,staticClass:"label-item text-semi",class:{primary:e.value===t.currentSelected.value},on:{click:function(s){return t.setActive("filter",e.value)}}},[s("feather",{staticClass:"mr-2",attrs:{size:"22","stroke-width":"1.8",type:e.icon}}),s("span",[t._v(t._s(e.text))])],1)})],2),s("vs-divider"),s("div",{staticClass:"py-5"},[s("div",{staticClass:"text-lg text-primary"},[t._v("标 签")]),t._l(t.labelMarks,function(e,a){return s("div",{key:a+10,staticClass:"label-item  text-semi",class:{primary:t.currentSelected.value===e.value},on:{click:function(s){return t.setActive("tag",e.value)}}},[s("div",{staticClass:"w-3 h-3 rounded-full",class:"bg-"+e.color}),s("span",{staticClass:"ml-2"},[t._v(t._s(e.text))])])})],2)],1)},[],!1,null,null,null).exports,o=(s("386d"),s("9d63")),c=s.n(o),d=s("db65");const u={1:{text:"前端",color:"primary"},2:{text:"后端",color:"warning"},3:{text:"其它",color:"success"},4:{text:"BUG",color:"danger"}};var p={name:"TodoItem",components:{VuePerfectScrollbar:c.a,FlipList:d.a},data:()=>({tags:u,search:"",onlyToday:!1}),computed:{currentSelected(){return this.$store.state.todo.currentSelected},filterItems(){return this.$store.getters["todo/filterItems"](this.currentSelected)},queryItems(){return this.search.length<=0?this.filterItems:this.filterItems.filter(t=>-1!==t.title.indexOf(this.search))},tasks(){return this.onlyToday?this.$store.getters["todo/todayTask"].filter(t=>this.queryItems.includes(t)):this.queryItems}},methods:{toggleType(t,e,s){this.$store.dispatch("todo/updateTodoType",{todo_id:t,type:e,flag:s})}}},v=(s("c566"),{name:"TodoList",components:{TodoBar:n,TodoItem:Object(l.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-full"},[s("div",{staticClass:"flex items-center"},[s("div",{staticClass:"relative flex-1 radius overflow-hidden",staticStyle:{background:"rgba(var(--vs-primary), 0.065)"}},[s("div",{staticClass:"absolute left-0 z-50 h-full flex-row-center radius bg-primary-10 cursor-pointer",staticStyle:{width:"50px",height:"50px"}},[s("feather",{staticClass:"primary-semi",attrs:{type:"search"}})],1),s("vs-input",{staticClass:"search-input sticky top-0 z-40 w-full",staticStyle:{height:"50px",background:"transparent"},attrs:{size:"large",placeholder:"搜索..."},model:{value:t.search,callback:function(e){t.search="string"==typeof e?e.trim():e},expression:"search"}})],1),s("div",{staticClass:"ml-4 w-24 py-3 flex-row-center text-sm radius cursor-pointer",class:{"primary-semi bg-primary-10":t.onlyToday,"text-primary base-shadow ":!t.onlyToday},staticStyle:{transition:"all 0.3s"},on:{click:function(e){t.onlyToday=!t.onlyToday}}},[t._v("\n      今日任务\n    ")])]),s("VuePerfectScrollbar",{staticClass:"relative h-full pt-4",staticStyle:{"max-height":"636px"},attrs:{settings:{maxScrollbarLength:200,wheelSpeed:.6}}},[s("FlipList",[t._l(t.tasks,function(e){return s("li",{key:e._id,staticClass:"todo-item p-3 w-full",on:{click:function(s){return t.$store.commit("todo/SET_TODO_POPUP_STATUS",{status:!0,data:e})}}},[s("vs-row",[s("vs-col",{attrs:{"vs-w":"10"}},[s("div",{staticClass:"todo-item__header flex justify-between items-center"},[s("div",{staticClass:"flex justify-between items-center"},[s("vs-checkbox",{on:{click:function(s){return s.stopPropagation(),t.toggleType(e._id,"is_done",!e.is_done)}},model:{value:e.is_done,callback:function(s){t.$set(e,"is_done",s)},expression:"todo.is_done"}}),s("div",{staticClass:"truncate mr-3 text-primary",staticStyle:{"max-width":"12rem"}},[t._v(t._s(e.title))]),e.tags.length>0?t._l(e.tags,function(e){return s("div",{key:e,staticClass:"mr-1 flex justify-between items-center\n                    rounded-full py-1 px-3 bg-gray"},[s("span",{staticClass:"w-2 h-2 mr-2 rounded-full",class:"bg-"+t.tags[e].color}),s("span",{staticClass:"text-gray text-xs"},[t._v(t._s(t.tags[e].text))])])}):t._e()],2)])]),s("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-end","vs-w":"2"}},[e.is_trashed?s("div",[s("i",{staticClass:"todo-mark__icon mr-2 el-icon-upload2",attrs:{title:"还原"},on:{click:function(s){return s.stopPropagation(),t.toggleType(e._id,"is_trashed",!e.is_trashed)}}}),s("i",{staticClass:"todo-mark__icon el-icon-close",attrs:{title:"永久删除"},on:{click:function(s){return s.stopPropagation(),t.$store.dispatch("todo/deleteTodo",e._id)}}})]):s("div",{staticClass:"flex items-center text-gray"},[s("feather",{staticClass:"todo-mark__icon mr-2",class:{success:e.is_important},attrs:{size:"19",type:"bookmark"},on:{click:function(s){return s.stopPropagation(),t.toggleType(e._id,"is_important",!e.is_important)}}}),s("feather",{staticClass:"todo-mark__icon mr-2",class:{warning:e.is_starred},attrs:{size:"19",type:"star"},on:{click:function(s){return s.stopPropagation(),t.toggleType(e._id,"is_starred",!e.is_starred)}}}),s("feather",{staticClass:"todo-mark__icon",attrs:{size:"19",type:"trash-2"},on:{click:function(s){return s.stopPropagation(),t.toggleType(e._id,"is_trashed",!e.is_trashed)}}})],1)])],1),s("div",{staticClass:"p-2 pr-0 flex justify-between"},[s("p",{staticClass:"content-overflow pr-5 text-gray"},[t._v(t._s(e.content))]),s("div",{staticClass:"text-xs text-gray"},[t._v("\n            "+t._s(t.$dayjs(e.complete_time[0]).format("YYYY-MM-DD"))+"\n            至\n            "+t._s(t.$dayjs(e.complete_time[1]).format("YYYY-MM-DD"))+"\n          ")])])],1)}),0===t.tasks.length?s("li",{key:"123456",staticClass:"todo-item w-full p-10 text-center text-gray"},[s("p",[t._v("\n          (｡•ˇ‸ˇ•｡) "),s("br"),t._v("\n          无任务\n        ")])]):t._e()],2)],1)],1)},[],!1,null,"2b5dee9a",null).exports}}),m=Object(l.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pt-8"},[e("div",{staticClass:"flex"},[e("div",{staticStyle:{width:"25%"}},[e("TodoBar")],1),e("div",{staticStyle:{width:"75%"}},[e("TodoItem")],1)])])},[],!1,null,null,null);e.default=m.exports},7522:function(t,e,s){"use strict";var a=s("231d");s.n(a).a},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},c566:function(t,e,s){"use strict";var a=s("1397");s.n(a).a},db65:function(t,e,s){"use strict";var a={name:"FlipList",props:{tag:{type:String,default:"ul"}}},i=(s("7522"),s("2877")),r=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("transition-group",{attrs:{name:"flip-list",tag:this.tag}},[this._t("default")],2)},[],!1,null,null,null);e.a=r.exports},eaf9:function(t,e,s){}}]);