webpackJsonp([4],{204:function(e,t,r){r(249);var a=r(91)(r(230),r(258),"data-v-23645230",null);e.exports=a.exports},213:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(54),o=r.n(a),l=r(53),n=r.n(l),s=r(52),A=r.n(s),i=r(29),p=(r(93),r(92));t.default={data:function(){return{baseImgPath:r(216)}},created:function(){window.vm=this},props:["flag"],computed:A()({},r.i(p.b)(["adminInfo"])),methods:A()({},r.i(p.c)(["getAdminData"]),{handleCommand:function(e){var t=this;return n()(o.a.mark(function a(){return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:"home"==e?t.$router.push("/manage"):"singout"==e&&(r.i(i.c)("adminInfo"),t.$message({type:"success",message:"退出成功"}),t.$router.push("/"));case 1:case"end":return a.stop()}},a,t)}))()},toSelect:function(){console.log("this flag--",this.flag),this.$router.push(this.flag)},toAdd:function(){this.$router.push("/detail")}})}},214:function(e,t,r){t=e.exports=r(201)(!1),t.push([e.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{-webkit-transform:translateY(-50%);transform:translateY(-50%)}.lr{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.header_container{background-color:#eff2f7;height:60px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:20px}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}",""])},215:function(e,t,r){var a=r(214);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(202)("2001d075",a,!0)},216:function(e,t){e.exports="data:image/jpeg;base64,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"},217:function(e,t,r){r(215);var a=r(91)(r(213),r(218),null,null);e.exports=a.exports},218:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header_container"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/manage"}}},[e._v("首页")]),e._v(" "),e._l(e.$route.meta,function(t,a){return r("el-breadcrumb-item",{key:a,attrs:{to:{path:t.path}}},[e._v(e._s(t.title))])})],2),e._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"select app",placement:"top-start"}},[r("el-button",{attrs:{type:"primary",round:""},on:{click:e.toSelect}},[e._v("SELECT")])],1),e._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"add app",placement:"top-start"}},[r("el-button",{attrs:{type:"primary",round:""},on:{click:e.toAdd}},[e._v("ADD")])],1),e._v(" "),r("el-dropdown",{attrs:{"menu-align":"start"},on:{command:e.handleCommand}},[r("img",{staticClass:"avator",attrs:{src:e.baseImgPath}}),e._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"home"}},[e._v("首页")]),e._v(" "),r("el-dropdown-item",{attrs:{command:"singout"}},[e._v("退出")])],1)],1)],1)},staticRenderFns:[]}},230:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(217),o=r.n(a);t.default={data:function(){return{ruleForm:{belongs:"11",desc:"222"},typeOptions:[{value:"t1",label:"pa培训"},{value:"t2",label:"pa培训"},{value:"t3",label:"pa培训"},{value:"t4",label:"pa培训"},{value:"t5",label:"pa培训"}],type:"",rules:{type:[{required:!0,message:"请选择类型",trigger:"blur"}],belongs:[{required:!0,message:"请选择所属产品",trigger:"blur"}],desc:[{required:!0,message:"请填写描述",trigger:"blur"}],resource:[{required:!0,message:"请上传资源",trigger:"blur"}],visitHtml:[{required:!0,message:"请输入访问html",trigger:"blur"}]},fileList:[],uploadForm:new FormData}},created:function(){},components:{headTop:o.a},methods:{handlePreview:function(){},handleRemove:function(){},beforeRemove:function(){},success:function(e,t,r){},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit"),!1;alert("submit"),t.formName.append("type",t.ruleForm.type),t.formName.append("belongs",t.ruleForm.belongs),t.formName.append("desc",t.ruleForm.desc),t.formName.append("resource",t.ruleForm.resource),t.formName.append("visitHtml",t.ruleForm.visitHtml)})}}}},240:function(e,t,r){t=e.exports=r(201)(!1),t.push([e.i,".allcover[data-v-23645230]{position:absolute;top:0;right:0}.ctt[data-v-23645230]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.tb[data-v-23645230]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.lr[data-v-23645230]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.form[data-v-23645230]{min-width:400px;margin-bottom:30px}.form[data-v-23645230]:hover{box-shadow:0 0 8px 0 rgba(232,237,250,.6),0 2px 4px 0 rgba(232,237,250,.5);border-radius:6px;transition:all .4s}.form_header[data-v-23645230]{text-align:left;margin:0 0 20px 25px}",""])},249:function(e,t,r){var a=r(240);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(202)("4ca2ab7a",a,!0)},258:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"fillcontain"},[r("head-top"),e._v(" "),r("el-row",{staticStyle:{"margin-top":"20px"}},[r("el-col",{attrs:{span:20}},[r("header",{staticClass:"form_header"},[e._v("Add-一分期-保险协议")]),e._v(" "),r("el-form",{ref:"ruleForm",staticClass:"form",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"110px"}},[r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.typeOptions,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"所属产品",prop:"belongs"}},[r("el-input",{model:{value:e.ruleForm.belongs,callback:function(t){e.$set(e.ruleForm,"belongs",t)},expression:"ruleForm.belongs"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"desc"}},[r("el-input",{model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"资源",prop:"resource"}},[r("el-upload",{staticClass:"upload-file",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,"on-success":e.success,multiple:!1,accept:".zip","file-list":e.fileList}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("上传已.zip结尾的压缩包,并且不能存在根目录")])],1),e._v(" "),r("el-input",{staticStyle:{display:"none"},model:{value:e.ruleForm.resource,callback:function(t){e.$set(e.ruleForm,"resource",t)},expression:"ruleForm.resource"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"访问html",prop:"visitHtml"}},[r("el-input",{model:{value:e.ruleForm.visitHtml,callback:function(t){e.$set(e.ruleForm,"visitHtml",t)},expression:"ruleForm.visitHtml"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"}},[e._v("save and add another")]),e._v(" "),r("el-button",{attrs:{type:"primary"}},[e._v("save and continue editing")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("save")])],1)],1)],1)],1)],1)},staticRenderFns:[]}}});
