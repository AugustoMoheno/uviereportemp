"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[109],{8242:function(t,e,i){i.d(e,{Z:function(){return a}});var l=i(5082),n=i(4904),s=i(6878),o=i(7678),a=(0,o.Z)(n.Wk,s.Z).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return(0,l.Z)((0,l.Z)({},n.Wk.options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,(0,l.Z)({},n.Wk.options.methods.genData.call(this)))}}})},5109:function(t,e,i){i.r(e),i.d(e,{default:function(){return Z}});var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}}),i("v-card",{attrs:{elevation:"0",outlined:""}},[i("v-card-title",[t._v(" "+t._s(t.nom)+" ")]),i("v-card-text",[i("strong",[i("div",[t._v(" "+t._s(t.description)+" ")])])]),i("v-divider",{staticClass:"mx-4"}),i("v-card-text",[i("v-chip-group",{attrs:{"active-class":"primary white--text",column:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[i("v-chip",{attrs:{value:"yes"}},[t._v(" cumple ")]),i("v-chip",{attrs:{value:"no"}},[t._v(" no cumple ")])],1),"no"==t.value?i("div",[i("br"),i("v-select",{attrs:{outlined:"",items:t.items,required:""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1):t._e()],1)],1)],1)},n=[],s=(i(2526),i(1817),{name:"ItemBasicSelect",props:{template:Object},data:function(){return{description:null,nom:null,value:null,items:null,model:null}},watch:{value:function(t){this.$emit("setOption",t)},model:function(t){this.$emit("setModel",t)},template:function(){this.start()}},created:function(){this.start()},methods:{start:function(){this.description=this.template.description,this.nom=this.template.nom,this.value=this.template.value,this.items=this.template.items,this.model=this.template.model}}}),o=s,a=i(1001),c=i(3453),r=i.n(c),u=i(4145),p=i(4886),m=i(4127),d=i(8242),h=i(9223),v=i(1399),f=(0,a.Z)(o,l,n,!1,null,null,null),Z=f.exports;r()(f,{VCard:u.Z,VCardText:p.ZB,VCardTitle:p.EB,VChip:m.Z,VChipGroup:d.Z,VDivider:h.Z,VSelect:v.Z})}}]);
//# sourceMappingURL=109-legacy.f536dd6a.js.map