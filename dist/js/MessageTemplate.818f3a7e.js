(window.webpackJsonp=window.webpackJsonp||[]).push([["MessageTemplate"],{"0122":function(t,s,a){"use strict";var e=a("6ecb");a.n(e).a},"6ecb":function(t,s,a){},fbd0:function(t,s,a){"use strict";a.r(s);const e=[{name:"确认订单",status:1},{name:"付款成功",status:1},{name:"订单发货",status:2},{name:"充值成功",status:1}],o={1:{color:"success",text:"已启用"},2:{color:"danger",text:"已禁用"}};var n={name:"MessageTemplate",data:()=>({status:o,templateList:[],form:{name:"",content:"尊敬的{用户昵称}，您已成功充值{充值金额}！如您还有疑问，请与客服人员联系。"},showPopup:!1}),created(){this.templateList=e}},l=(a("0122"),a("2877")),c=Object(l.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("vs-table",{staticClass:"p-3",attrs:{search:"",pagination:"",noDataText:"暂无数据","max-items":10,data:t.templateList},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.data;return t._l(e,function(s,e){return a("vs-tr",{key:e,attrs:{data:s}},[a("vs-td",{staticClass:"text-base text-gray font-bold"},[t._v(t._s(s.name)+" ")]),a("vs-td",{class:t.status[s.status].color},[t._v(t._s(t.status[s.status].text))]),a("vs-td",[a("span",{on:{click:function(s){s.stopPropagation(),t.showPopup=!0}}},[t._v("编辑模板")])])],1)})}}])},[a("template",{slot:"thead"},[a("vs-th",[t._v("名称")]),a("vs-th",[t._v("状态")]),a("vs-th",[t._v("操作")])],1)],2),a("vs-popup",{staticClass:"avatar-popup",attrs:{title:"编辑模板",active:t.showPopup},on:{"update:active":function(s){t.showPopup=s}}},[a("el-form",{ref:"form",attrs:{"label-width":"80px",model:t.form}},[a("el-form-item",{staticClass:"flex",attrs:{label:"昵称"}},[a("div",{staticClass:"w-64"},[a("el-input",{staticClass:"no-dark",attrs:{placeholder:"只能是中文、字母、数字"},model:{value:t.form.name,callback:function(s){t.$set(t.form,"name",s)},expression:"form.name"}})],1)]),a("el-form-item",{staticClass:"flex",attrs:{label:"系统模板"}},[a("div",{staticClass:"flex flex-col"},[a("div",{staticClass:"mb-2"},[a("vs-chip",[t._v("{用户昵称}")]),a("vs-chip",[t._v("{用户账号}")]),a("vs-chip",[t._v("{充值金额}")])],1),a("div",[a("vs-textarea",{staticClass:"w-10/12",attrs:{label:"任务描述",height:String(180)},model:{value:t.form.content,callback:function(s){t.$set(t.form,"content",s)},expression:"form.content"}})],1)])])],1)],1)],1)},[],!1,null,"7054eaff",null);s.default=c.exports}}]);