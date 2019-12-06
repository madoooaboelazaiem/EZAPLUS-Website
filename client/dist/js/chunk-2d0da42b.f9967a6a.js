(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da42b"],{"6b9b":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row justify-center q-gutter-md"},[e._l(e.MyGroups,(function(t,o){return s("div",{key:o,staticClass:"col-3 q-gutter-md"},[s("q-card",[s("q-card-section",[s("div",{staticClass:"text-h6"},[e._v(e._s(t.Name))])]),s("q-card-actions",{staticClass:"q-gutter-sm row justify-center"},[s("q-btn",{attrs:{color:"red-8"},on:{click:function(s){return e.SelectGroup(t)}}},[e._v("Delete Group")]),s("q-btn",{attrs:{color:"primary"},on:{click:function(s){return e.inviteUser(t)}}},[e._v("Invite User")]),s("q-btn",{attrs:{color:"secondary"},on:{click:function(s){return e.viewUsers(t)}}},[e._v("View Users")]),s("q-btn",{attrs:{color:"amber"},on:{click:function(s){return e.uploadResourceClicked(t)}}},[e._v("Upload Resource")]),s("q-btn",{attrs:{color:"purple-7"},on:{click:function(s){return e.viewRequests(t)}}},[e._v("View Join Requests")])],1)],1)],1)})),s("q-dialog",{attrs:{persistent:""},model:{value:e.confirm,callback:function(t){e.confirm=t},expression:"confirm"}},[s("q-card",[s("q-card-section",{staticClass:"row items-center"},[s("span",{staticClass:"q-ml-sm"},[e._v("Are you sure you want to delete "+e._s(e.selectedGroup.Name)+" ?")])]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Yes",color:"primary"},on:{click:function(t){return e.DeleteGroup(e.selectedGroup)}}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"No",color:"primary"},on:{click:function(t){e.selectedGroup={}}}})],1)],1)],1),s("q-dialog",{attrs:{persistent:""},model:{value:e.invite,callback:function(t){e.invite=t},expression:"invite"}},[s("q-card",{staticStyle:{"min-width":"350px"}},[s("q-card-section",[s("div",{staticClass:"text-h6"},[e._v("Enter User Email")])]),s("q-card-section",[s("q-input",{attrs:{dense:"",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),s("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Invite",color:"primary"},on:{click:function(t){return e.InviteUser(e.selectedGroup)}}})],1)],1)],1),s("q-dialog",{attrs:{persistent:""},model:{value:e.users,callback:function(t){e.users=t},expression:"users"}},[s("q-card",{staticStyle:{width:"700px","max-width":"80vw"}},[e._l(e.groupUsers,(function(t,o){return s("q-card-section",{key:o,staticClass:"row justify-around"},[s("div",{staticClass:"column text-h5"},[e._v(e._s(t.First_Name?t.First_Name+" "+t.Last_Name:t.Email))]),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{round:"",color:"red-10",icon:"far fa-trash-alt",title:"kick"},on:{click:function(s){return e.kickClicked(t)}}})],1)})),s("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[s("q-btn",{attrs:{flat:"",label:"OK",color:"primary"},on:{click:function(t){e.users=!1}}})],1)],2)],1),s("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:e.secondDialog,callback:function(t){e.secondDialog=t},expression:"secondDialog"}},[s("q-card",[s("q-card-section",[s("div",{staticClass:"text-h6"},[e._v("Are you sure you want to kick "+e._s(e.selectedKickedUser.First_Name?e.selectedKickedUser.First_Name+" "+e.selectedKickedUser.Last_Name:e.selectedKickedUser.Email)+" ?")])]),s("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[s("q-btn",{attrs:{flat:"",label:"Yes"},on:{click:e.kickUser}}),s("q-btn",{attrs:{flat:"",label:"No"},on:{click:function(t){e.secondDialog=!1}}})],1)],1)],1),s("q-dialog",{attrs:{persistent:""},model:{value:e.joinRequestsFlag,callback:function(t){e.joinRequestsFlag=t},expression:"joinRequestsFlag"}},[s("q-card",{staticStyle:{width:"700px","max-width":"80vw"}},[e._l(e.joinRequests,(function(t,o){return s("q-card-section",{key:o,staticClass:"row justify-around"},[s("div",{staticClass:"column text-h5"},[e._v(e._s(t.user_id.First_Name?t.user_id.First_Name+" "+t.user_id.Last_Name:t.user_id.Email))]),s("div",{staticClass:"row q-gutter-sm"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{round:"",color:"secondary",icon:"fas fa-check",title:"accept"},on:{click:function(s){return e.acceptJoinRequest(t)}}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{round:"",color:"red-10",icon:"fas fa-times",title:"reject"},on:{click:function(s){return e.rejectJoinRequest(t)}}})],1)])})),s("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[s("q-btn",{attrs:{flat:"",label:"OK",color:"primary"},on:{click:function(t){e.joinRequestsFlag=!1}}})],1)],2)],1),s("q-dialog",{attrs:{persistent:""},model:{value:e.resourceDialogFlag,callback:function(t){e.resourceDialogFlag=t},expression:"resourceDialogFlag"}},[s("q-card",[s("q-card-section",{staticClass:"row items-center"},[s("input",{ref:"file",attrs:{type:"file"},on:{change:e.setFilePDF}})]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{attrs:{flat:"",label:"OK",color:"primary"},on:{click:e.fileUpload}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"},on:{click:function(t){e.resourceDialogFlag=!1}}})],1)],1)],1)],2)])},i=[],r=(s("99af"),s("b0c0"),s("d3b7"),s("96cf"),s("c151")),c=s("bc3a"),a=s.n(c),n={name:"Groups",data:function(){return{confirm:!1,selectedGroup:{Name:"First"},myGroups:[],invite:!1,email:"",users:!1,groupUsers:[],inception:!1,secondDialog:!1,selectedKickedUser:{Fitst_Name:"",Last_Name:""},joinRequestsFlag:!1,joinRequests:[],resourceDialogFlag:!1,filePDF:null}},created:function(){this.$store.dispatch("fetchMyGroups")},methods:{SelectGroup:function(e){this.selectedGroup=e,this.confirm=!0},inviteUser:function(e){this.selectedGroup=e,this.invite=!0},DeleteGroup:function(e){var t,s=this;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return t=this.$store.getters.getUserData.id,console.log(this.email),o.next=4,regeneratorRuntime.awrap(Object(r["a"])().delete("/groups/deleteGroup/".concat(t,"/").concat(e._id)).then((function(e){"success"==e.data.status&&(s.$q.notify({color:"teal",message:"Group Deleted Successfully",position:"top-right",timeout:1e3}),s.$store.dispatch("fetchMyGroups"),s.confirm=!1,s.selectedGroup={})})).catch((function(e){console.log(e),s.$q.notify({color:"red-10",message:"Error Occured , Try Again",position:"top-right",timeout:1e3})})));case 4:case"end":return o.stop()}}),null,this)},InviteUser:function(e){var t,s=this;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return t=this.$store.getters.getUserData.id,console.log(this.email),o.next=4,regeneratorRuntime.awrap(Object(r["a"])().post("/groups/doctorInviteUser/".concat(t,"/").concat(e._id),{email:this.email}).then((function(e){"success"==e.data.status&&(s.$q.notify({color:"teal",message:"User Invited Successfully",position:"top-right",timeout:1e3}),s.$store.dispatch("fetchMyGroups"),s.invite=!1,s.selectedGroup={})})).catch((function(e){console.log(e),s.$q.notify({color:"red-10",message:"Error Occured , Try Again",position:"top-right",timeout:1e3})})));case 4:case"end":return o.stop()}}),null,this)},viewUsers:function(e){var t=this;this.groupUsers=[],this.$q.loading.show(),this.selectedGroup=e,this.timer=setTimeout((function(){t.$q.loading.hide(),t.timer=void 0}),1e3);var s=this.$store.getters.getUserData.id,o=e._id;Object(r["a"])().get("/groups/getAllUsersInGroup/".concat(s,"/").concat(o)).then((function(e){"success"==e.data.status&&(t.groupUsers=e.data.data)})).catch((function(){t.$q.notify({color:"red-10",message:"Error Occured , Try Again",position:"top-right",timeout:1e3})})),this.users=!0},kickClicked:function(e){this.selectedKickedUser=e,this.secondDialog=!0},kickUser:function(){var e=this,t=this.$store.getters.getUserData.id,s=this.selectedGroup._id,o=this.selectedKickedUser._id;Object(r["a"])().delete("/groups/".concat(s,"/doctorKickUser/").concat(t,"/").concat(o)).then((function(t){"success"==t.data.status&&(e.$q.notify({color:"teal",message:"User Kicked Successfully",position:"top-right",timeout:1e3}),e.secondDialog=!1)})).catch((function(t){console.log(t.response.data.message),console.log(t.message),e.$q.notify({color:"red-10",message:"Error Occured , Try Again",position:"top-right",timeout:1e3})}))},viewRequests:function(e){var t=this;this.joinRequests=[],this.$q.loading.show(),this.timer=setTimeout((function(){t.$q.loading.hide(),t.timer=void 0}),1e3);var s=e._id;Object(r["a"])().get("/groups/requests/".concat(s)).then((function(e){"success"==e.data.status&&(t.joinRequests=e.data.requests)})).catch((function(){t.$q.notify({color:"red-10",message:"Error Occured , Try Again",position:"top-right",timeout:1e3})})),this.joinRequestsFlag=!0},acceptJoinRequest:function(e){var t=this,s=this.$store.getters.getUserData.id,o={group_id:e.group_id._id,requesting_id:e.user_id._id};Object(r["a"])().post("/groups/acceptJoinRequest/".concat(s),o).then((function(s){"success"==s.data.status&&(t.$q.notify({color:"teal",message:"Join Request Accepted Successfully",position:"top-right",timeout:1e3}),t.viewRequests(e.group_id))})).catch((function(e){console.log(e),t.$q.notify({color:"red-10",message:"Error Occured , Try Again",position:"top-right",timeout:1e3})}))},rejectJoinRequest:function(e){var t=this;this.$store.getters.getUserData.id,e.group_id._id,e.user_id._id;Object(r["a"])().delete("/groups/".concat(e.group_id._id,"/requests/").concat(e.user_id._id)).then((function(s){"success"==s.data.status&&(t.$q.notify({color:"teal",message:"Join Request Rejected Successfully",position:"top-right",timeout:1e3}),t.viewRequests(e.group_id))})).catch((function(e){console.log(e),t.$q.notify({color:"red-10",message:"Error Occured , Try Again",position:"top-right",timeout:1e3})}))},uploadResourceClicked:function(e){this.resourceDialogFlag=!0,this.selectedGroup=e},fileUpload:function(){var e,t=this;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:if(this.filePDF){s.next=4;break}this.$q.notify({color:"red-10",message:"Please select a file to Upload",position:"top-right",timeout:1e3}),s.next=15;break;case 4:return this.resourceDialogFlag=!1,this.$q.notify({color:"amber",message:"Your file is uploading !!",position:"top-right",timeout:1e3}),e=new FormData,e.append("file",this.filePDF),e.append("upload_preset","x3gcuzpi"),e.append("api_key","455655914782479"),console.log(this.filePDF),s.next=13,regeneratorRuntime.awrap(a.a.post("https://api.cloudinary.com/v1_1/eza/auto/upload",e).then((function(e){if(console.log(e.data),200==e.status){var s=e.data.secure_url,o={data:s,name:t.filePDF.name},i=t.selectedGroup._id;Object(r["a"])().post("/resources/".concat(i),o).then((function(e){"success"==e.data.status&&t.$q.notify({color:"teal",message:"File done uploading !!",position:"top-right",timeout:1e3})})).catch((function(e){console.log(e.response.data),t.$q.notify({color:"red-10",message:"Error occured while uploading",position:"top-right",timeout:1e3})}))}})).catch((function(e){console.log(e.response.data),t.$q.notify({color:"red-10",message:"Error occured while uploading",position:"top-right",timeout:1e3})})));case 13:this.filePDF=null,this.selectedGroup=null;case 15:case"end":return s.stop()}}),null,this)},setFilePDF:function(){this.filePDF=this.$refs.file.files[0]}},computed:{MyGroups:function(){return this.$store.getters.getMyGroups},Role:function(){return sessionStorage.getItem("role")}}},l=n,u=s("2877"),d=Object(u["a"])(l,o,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0da42b.f9967a6a.js.map