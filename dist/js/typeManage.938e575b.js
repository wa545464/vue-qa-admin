(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["typeManage"],{"06a1":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"type-manage"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.type}},[n("el-form-item",{attrs:{label:"分区名"}},[n("el-input",{attrs:{placeholder:"分区名"},model:{value:e.type.name,callback:function(t){e.$set(e.type,"name",t)},expression:"type.name"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onCreate}},[e._v("创建")])],1)],1),n("el-table",{staticStyle:{width:"800px"},attrs:{data:e.formatTypes}},[n("el-table-column",{attrs:{prop:"question_tid",label:"id"}}),n("el-table-column",{attrs:{prop:"type_name",label:"分区名"}}),n("el-table-column",{attrs:{prop:"create_time",label:"创建日期"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.edit(t.$index)}}},[e._v("编辑")])]}}])})],1)],1)},a=[],s=(n("d81d"),n("b0c0"),n("96cf"),n("1da1")),c=n("5c96"),o=n("6f05"),i=n("ed08"),u={data:function(){return{type:{name:""},types:[]}},components:{},computed:{formatTypes:function(){return this.types.map((function(e){return e.create_time=Object(i["a"])(e.create_time),e}))}},created:function(){this.getTypes()},methods:{onCreate:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.type.name,t.next=3,Object(o["b"])(n);case 3:r=t.sent,0===r.status&&(e.type.name="",e.getTypes(),c["Message"].success({type:"success",message:"创建成功"}));case 5:case"end":return t.stop()}}),t)})))()},edit:function(e){var t=this,n=this.types[e].question_tid;this.$prompt("请输入新分区名","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S{2,10}/,inputErrorMessage:"请输入长度2-10的新分区名"}).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=r.value,e.next=3,Object(o["l"])(n,a);case 3:s=e.sent,0===s.status&&(t.getTypes(),c["Message"].success({type:"success",message:"更新成功"}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),t.$message({type:"info",message:"取消输入"})}))},getTypes:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["f"])();case 2:n=t.sent,0===n.status&&(e.types=n.data.question_type);case 4:case"end":return t.stop()}}),t)})))()}}},p=u,l=(n("b26d"),n("2877")),f=Object(l["a"])(p,r,a,!1,null,"156a42aa",null);t["default"]=f.exports},"1dde":function(e,t,n){var r=n("d039"),a=n("b622"),s=n("2d00"),c=a("species");e.exports=function(e){return s>=51||!r((function(){var t=[],n=t.constructor={};return n[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"22f0":function(e,t,n){},b0c0:function(e,t,n){var r=n("83ab"),a=n("9bf2").f,s=Function.prototype,c=s.toString,o=/^\s*function ([^ (]*)/,i="name";r&&!(i in s)&&a(s,i,{configurable:!0,get:function(){try{return c.call(this).match(o)[1]}catch(e){return""}}})},b26d:function(e,t,n){"use strict";n("22f0")},d81d:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").map,s=n("1dde"),c=n("ae40"),o=s("map"),i=c("map");r({target:"Array",proto:!0,forced:!o||!i},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);