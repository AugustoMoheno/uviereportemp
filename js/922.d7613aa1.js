"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[922],{6139:function(t,e,a){a.r(e),a.d(e,{default:function(){return P}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto overflow-hidden",attrs:{color:"#F2F4F4",height:"100vh"}},[a("nav-bar-detail-client"),a("v-subheader",[t._v(" "+t._s(t.actualClient.tradename))]),a("scroll-detail-client")],1)],1)},l=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticStyle:{color:"#d5dbdb"},attrs:{elevation:"0",color:"#273746",dense:""}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.back()}}},[a("v-icon",{attrs:{size:"23",color:"#D5DBDB"}},[t._v("arrow_back")])],1),a("v-toolbar-title",[t._v("DETALLE DEL CLIENTE")]),a("v-spacer")],1)},n=[],i={name:"NavBarDetailClient",methods:{back(){this.$router.push("/")}}},c=i,s=a(1001),u=a(3453),v=a.n(u),d=a(3497),m=a(6190),h=a(4324),f=a(3687),b=a(7953),p=(0,s.Z)(c,o,n,!1,null,null,null),V=p.exports;v()(p,{VAppBar:d.Z,VBtn:m.Z,VIcon:h.Z,VSpacer:f.Z,VToolbarTitle:b.qW});var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tabs",[a("v-tab",[t._v("Tableros")]),a("v-tab",[t._v("Otros")]),a("v-tab-item",[a("div",[a("v-card",{staticClass:"mx-auto",attrs:{elevation:"0",color:"#F2F4F4"}},[a("v-virtual-scroll",{staticStyle:{height:"82vh"},attrs:{items:t.items,"item-height":80},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[a("v-card",{attrs:{elevation:"0"}},[a("div",[a("v-list-item",{on:{click:function(e){return t.open(r)}}},[a("v-list-item-action",[a("v-btn",{staticClass:"white--text",attrs:{fab:"",small:"",depressed:"",color:"#273746"}},[t._v(" "+t._s(r.reference)+" ")])],1),a("v-list-item-content",[a("v-list-item-title",[a("strong",[t._v(" "+t._s(r.nomenclature))])]),a("v-list-item-subtitle",[t._v(t._s(r.location))])],1),a("v-list-item-action",[a("v-icon",[t._v(" toc ")])],1)],1)],1)])]}}])}),a("new-electrical-boards")],1)],1)]),a("v-tab-item",[a("p",{staticClass:"text-center"},[t._v("Aquí se pueden poner mas configuraciónes")])])],1)},Z=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-dialog",{attrs:{persistent:"",height:"100vh",width:"80vh"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[a("v-btn",t._g(t._b({attrs:{fab:"",dark:"",color:"rgba(39,55,70,1)",fixed:"",right:"",bottom:""}},"v-btn",l,!1),r),[a("v-icon",{attrs:{size:"23",color:"#D5DBDB",dark:""}},[t._v("add")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"white--text",attrs:{color:"#F2F4F4"}},[a("v-container",[a("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[t._v(" Nuevo Tablero ")]),a("v-card-text",{staticStyle:{color:"#273746"}},[t._v("Datos del tablero")]),a("v-form",{ref:"form"},[a("v-text-field",{staticClass:"text-capitalize",attrs:{outlined:"",disabled:"",label:"Referencia",required:""},model:{value:t.reference,callback:function(e){t.reference=e},expression:"reference"}}),a("v-text-field",{attrs:{outlined:"",label:"Nomenclatura",required:""},model:{value:t.nomenclature,callback:function(e){t.nomenclature=e},expression:"nomenclature"}}),a("v-text-field",{attrs:{outlined:"",label:"Localización",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"#273746",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancelar ")]),a("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(e){return t.create()}}},[t._v(" Crear ")])],1)],1)],1)],1)],1)},C=[],x={name:"NewElectricalBoards",data(){return{reference:this.$store.getters.getElectricalBoards.length+1,nomenclature:"erd",location:"palapa",dialog:!1}},methods:{create(){const t={reference:this.reference,nomenclature:this.nomenclature,location:this.location};console.log(t),this.$store.dispatch("addElectricalBoardAction",t),this.dialog=!1,this.reference=this.referenceAuto(),this.nomenclature="",this.location=""},referenceAuto(){return this.$store.getters.getElectricalBoards.length+1}}},k=x,B=a(4145),E=a(4886),D=a(2118),S=a(9930),T=a(5125),w=a(1713),F=a(7808),I=(0,s.Z)(k,g,C,!1,null,"10d91dde",null),L=I.exports;v()(I,{VBtn:m.Z,VCard:B.Z,VCardActions:E.h7,VCardText:E.ZB,VCardTitle:E.EB,VContainer:D.Z,VDialog:S.Z,VForm:T.Z,VIcon:h.Z,VRow:w.Z,VSpacer:f.Z,VTextField:F.Z});var $={components:{NewElectricalBoards:L},name:"ScrollDetailClient",computed:{items(){return this.$store.getters.getElectricalBoards}}},A=$,N=a(4525),y=a(5187),q=a(8251),z=a(626),R=a(2165),O=a(5965),W=a(4924),j=(0,s.Z)(A,_,Z,!1,null,null,null),G=j.exports;v()(j,{VBtn:m.Z,VCard:B.Z,VIcon:h.Z,VListItem:N.Z,VListItemAction:y.Z,VListItemContent:q.km,VListItemSubtitle:q.oZ,VListItemTitle:q.V9,VTab:z.Z,VTabItem:R.Z,VTabs:O.Z,VVirtualScroll:W.Z});var H={components:{NavBarDetailClient:V,ScrollDetailClient:G},created(){console.log(this.actualClient)},computed:{actualClient(){return this.$store.getters.actualClient}}},J=H,K=a(2540),M=(0,s.Z)(J,r,l,!1,null,null,null),P=M.exports;v()(M,{VCard:B.Z,VSubheader:K.Z})}}]);
//# sourceMappingURL=922.d7613aa1.js.map