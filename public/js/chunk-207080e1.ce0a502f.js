(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-207080e1"],{9899:function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return o});var n=function(e){return!!e||"Required field."},o=function(e){return!isNaN(e)||"Only contains numbers."}},e480:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"","pa-3":""}},[r("Panel",{attrs:{title:"Bow centers"},scopedSlots:e._u([{key:"buttons",fn:function(){return[r("v-tooltip",{key:"create",attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({staticClass:"elevation-4",attrs:{fab:"",dark:"",small:"",bottom:"",right:"",color:"green"},on:{click:e.OPEN_CREATE_DIALOG}},n),[r("v-icon",[e._v("add")])],1)]}}])},[r("span",[e._v("Create new center")])])]},proxy:!0}])},[r("Table",{attrs:{headers:e.table.headers,items:e.items,searchable:""},scopedSlots:e._u([{key:"actions",fn:function(t){var n=t.item;return[r("v-btn",{attrs:{text:"",icon:"",color:"primary"},on:{click:function(t){return e.OPEN_EDIT_DIALOG(n)}}},[r("v-icon",[e._v("edit")])],1),r("v-btn",{attrs:{text:"",icon:"",color:"red"},on:{click:function(t){return e.OPEN_DELETE_DIALOG(n)}}},[r("v-icon",[e._v("delete")])],1)]}}])}),r("Dialog",{attrs:{show:e.createDialogOpened,title:"New center",color:"green",width:"800"}},[r("BowCenterForm",{on:{onSubmit:e.createItem,onCancel:e.CLOSE_CREATE_DIALOG}})],1),r("Dialog",{attrs:{show:e.editDialogOpened,title:"Edit center",color:"primary",width:"800"}},[r("BowCenterForm",{attrs:{item:e.current},on:{onSubmit:e.editItem,onCancel:e.CLOSE_EDIT_DIALOG}})],1),r("Dialog",{attrs:{show:e.deleteDialogOpened,title:"Delete center",color:"error",width:"400"}},[r("p",[e._v("Are you sure, do you want to delete this item?")]),r("v-btn",{attrs:{"ma-2":"",color:"error"},on:{click:function(t){return e.deleteItem(e.current)}}},[e._v("Delete")]),r("v-btn",{attrs:{"ma-2":""},on:{click:e.CLOSE_DELETE_DIALOG}},[e._v("Cancel")])],1)],1)],1)],1)},o=[],l=r("9c97"),a=r("0748"),i=r("3f7a"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Brand",placeholder:"Brand",rules:e.rules.brand,autofocus:""},model:{value:e.center.brand,callback:function(t){e.$set(e.center,"brand",t)},expression:"center.brand"}}),r("v-text-field",{attrs:{label:"Angle up",placeholder:"Angle up",type:"number",rules:e.rules.angle_up},model:{value:e.center.angle_up,callback:function(t){e.$set(e.center,"angle_up",t)},expression:"center.angle_up"}}),r("v-text-field",{attrs:{label:"ILF-B distance up",placeholder:"ILF-Berger distance up",type:"number",rules:e.rules.ilf_berger_distance_up},model:{value:e.center.ilf_berger_distance_up,callback:function(t){e.$set(e.center,"ilf_berger_distance_up",t)},expression:"center.ilf_berger_distance_up"}}),r("v-text-field",{attrs:{label:"Weight",placeholder:"Weight",type:"number",rules:e.rules.weight},model:{value:e.center.weight,callback:function(t){e.$set(e.center,"weight",t)},expression:"center.weight"}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Model",placeholder:"Model",rules:e.rules.model},model:{value:e.center.model,callback:function(t){e.$set(e.center,"model",t)},expression:"center.model"}}),r("v-text-field",{attrs:{label:"Angle down",placeholder:"Angle down",type:"number",rules:e.rules.angle_down},model:{value:e.center.angle_down,callback:function(t){e.$set(e.center,"angle_down",t)},expression:"center.angle_down"}}),r("v-text-field",{attrs:{label:"ILF-B distance down",placeholder:"ILF-Berger distance down",type:"number",rules:e.rules.ilf_berger_distance_down},model:{value:e.center.ilf_berger_distance_down,callback:function(t){e.$set(e.center,"ilf_berger_distance_down",t)},expression:"center.ilf_berger_distance_down"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticClass:"white--text mr-4",attrs:{type:"submit",color:"primary",disabled:!e.valid}},[e._v("Save")]),r("v-btn",{staticClass:"mr-4",on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)],1)],1)},s=[],u=r("a34a"),d=r.n(u),b=r("9899");function f(e,t,r,n,o,l,a){try{var i=e[l](a),c=i.value}catch(s){return void r(s)}i.done?t(c):Promise.resolve(c).then(n,o)}function p(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var l=e.apply(t,r);function a(e){f(l,n,o,a,i,"next",e)}function i(e){f(l,n,o,a,i,"throw",e)}a(void 0)})}}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(r,!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={props:["item"],mounted:function(){this.item&&(this.center=v({},this.item))},data:function(){return{valid:!1,center:{brand:"",model:"",weight:"",angle_up:"",angle_down:"",ilf_berger_distance_up:"",ilf_berger_distance_dowm:""},rules:{brand:[b["b"]],model:[b["b"]],weight:[b["b"],b["a"]],angle_up:[b["b"],b["a"]],angle_down:[b["b"],b["a"]],ilf_berger_distance_up:[b["b"],b["a"]],ilf_berger_distance_down:[b["b"],b["a"]]}}},methods:{onSubmit:function(){var e=p(d.a.mark(function e(){return d.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$emit("onSubmit",v({},this.center)),this.resetForm();case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onCancel:function(){var e=p(d.a.mark(function e(){return d.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$emit("onCancel"),this.resetForm();case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),resetForm:function(){this.$refs.form.resetValidation()}}},w=m,h=r("2877"),O=Object(h["a"])(w,c,s,!1,null,null,null),y=O.exports,E=r("2f62");function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(r,!0).forEach(function(t){I(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C={mounted:function(){this.$store.dispatch("bowCenterModule/fetchItems")},components:{Panel:l["a"],Dialog:i["a"],Table:a["a"],BowCenterForm:y},computed:x({},Object(E["e"])("bowCenterModule",["items","createDialogOpened","editDialogOpened","deleteDialogOpened","current"])),methods:x({},Object(E["b"])("bowCenterModule",["editItem","createItem","deleteItem"]),{},Object(E["d"])("bowCenterModule",["OPEN_CREATE_DIALOG","CLOSE_CREATE_DIALOG","OPEN_EDIT_DIALOG","CLOSE_EDIT_DIALOG","OPEN_DELETE_DIALOG","CLOSE_DELETE_DIALOG"])),data:function(){return{table:{headers:[{text:"ID",align:"left",value:"id",sortable:!0},{text:"Brand",align:"left",value:"brand",sortable:!0},{text:"Model",align:"left",value:"model",sortable:!0},{text:"Weight",align:"left",value:"weight",sortable:!0},{text:"Angle up",align:"left",value:"angle_up",sortable:!0},{text:"Angle down",align:"left",value:"angle_down",sortable:!0},{text:"ILF-B dist. up",align:"left",value:"ilf_berger_distance_up",sortable:!0},{text:"ILF-B dist. down",align:"left",value:"ilf_berger_distance_down",sortable:!0},{text:"",align:"right",value:"actions",sortable:!1}]}}}},L=C,P=Object(h["a"])(L,n,o,!1,null,null,null);t["default"]=P.exports}}]);
//# sourceMappingURL=chunk-207080e1.ce0a502f.js.map