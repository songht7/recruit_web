(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-company-detail"],{2619:function(t,e,i){"use strict";i.r(e);var a=i("8920"),n=i("5706");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"3e9ec665",null,!1,a["a"],r);e["default"]=c.exports},"26de":function(t,e,i){"use strict";i.r(e);var a=i("e70c"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"48b0":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"job-header"},[i("v-uni-view",{staticClass:"job-val"},[i("v-uni-view",{staticClass:"job-title"},[t._v(t._s(t.detail.name))]),i("v-uni-view",{staticClass:"job-price"},[t._v(t._s(t.detail.salary))])],1),i("v-uni-view",{staticClass:"job-tags"},[i("v-uni-view",{staticClass:"tag city"},[t._v(t._s(t.detail.city))]),i("v-uni-view",{staticClass:"tag years"},[t._v(t._s(t.detail.age_min))]),t.detail.education?i("v-uni-view",{staticClass:"tag edu"},[t._v(t._s(t.detail.education))]):t._e()],1)],1),i("v-uni-view",{staticClass:"manager"},[i("v-uni-view",{staticClass:"portrait"},[i("v-uni-image",{staticClass:"portrait-img",attrs:{src:t.portrait?t.portrait:"../../static/logo.png",mode:"aspectFit"}})],1),i("v-uni-view",{staticClass:"manager-info"},[i("v-uni-view",{staticClass:"manager-name"},[t._v(t._s(t.detail.eName))])],1)],1),i("v-uni-view",{staticClass:"detail"},[i("v-uni-rich-text",{staticClass:"job-detail",attrs:{nodes:t.detail.detail?t.detail.detail:t.detail.overview}})],1),i("fix-button",{attrs:{gobackShow:"false"}},[i("v-uni-view",{class:["fbtns","fbtns-clr-full ","fbtn-full",t.reumeIsSend?"reume-send":""],attrs:{disable:t.reumeIsSend},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reumeSend.apply(void 0,arguments)}}},[t._v(t._s(t.reumeIsSend?"简历已提交":"投递简历"))])],1)],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},5706:function(t,e,i){"use strict";i.r(e);var a=i("91b0"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"741c":function(t,e,i){"use strict";i.r(e);var a=i("48b0"),n=i("26de");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("a8bb");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"3d7bacf8",null,!1,a["a"],r);e["default"]=c.exports},8920:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"fix-button",style:"position:"+t.isFixed},[i("v-uni-view",{staticClass:"fbtn-main"},["show"==t.gobackShow?i("v-uni-view",{staticClass:"fbtns btn-goback",class:t.btnType,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$store.dispatch("goback")}}},[t._v("返回")]):t._e(),t._t("default")],2)],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},"91b0":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"fix-button",props:{btnType:{type:String,default:""},gobackShow:{type:String,default:"show"},isFixed:{type:String,default:"fixed"}},data:function(){return{}},computed:{},methods:{}};e.default=a},"9b4c":function(t,e,i){var a=i("e8cf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("38d5cc12",a,!0,{sourceMap:!1,shadowMode:!1})},a8bb:function(t,e,i){"use strict";var a=i("9b4c"),n=i.n(a);n.a},e70c:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("2619")),o={data:function(){return{title:"策划",id:"",detail:[],portrait:!1,data:"<p>detail</p>",reumeIsSend:!1}},components:{fixButton:n.default},onLoad:function(t){var e=this;e.id=t.id?t.id:"",e.id&&e.getData()},onShow:function(){},methods:{getData:function(){var t=this,e=t.$store.state.testToken;t.$store.state.isWeixin&&(e=t.$store.state.weChatAuthInfo.token);var i={inter:"supportDtl",parm:"?id=".concat(t.id),header:{token:e},fun:function(e){console.log(e),e.success&&(t.detail=e.data,t.reumeIsSend=!!e.data.resume_article)}};t.$store.dispatch("getData",i)},reumeSend:function(){var t=this;if(!t.reumeIsSend){t.loading=!0;var e=t.$store.state.testToken;t.$store.state.isWeixin&&(e=t.$store.state.weChatAuthInfo.token);var i={inter:"resume",method:"POST",data:{article_id:t.id},header:{token:e}};console.log("login:",i),i["fun"]=function(e){console.log(e),t.loading=!1,e.success?(uni.showToast({title:"简历已投递",icon:"none"}),t.reumeIsSend=!0):(t.reumeIsSend=!1,uni.showToast({title:e.msg,icon:"none"}))},t.$store.dispatch("getData",i)}}}};e.default=o},e8cf:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.content[data-v-3d7bacf8]{padding:%?30?%}.job-header[data-v-3d7bacf8]{width:100%;padding:%?20?% 0 %?30?%;border-bottom:%?2?% solid #e2e2e2;margin-bottom:%?30?%}.job-val[data-v-3d7bacf8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;line-height:2}.job-title[data-v-3d7bacf8]{font-size:%?70?%;color:#000}.job-price[data-v-3d7bacf8]{font-size:%?45?%;color:#3b78ea}.job-tags[data-v-3d7bacf8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tag[data-v-3d7bacf8]{padding:%?2?%;margin-right:%?20?%;font-size:%?40?%;color:#000}.tag[data-v-3d7bacf8]:before{font-family:uniicons!important;content:"\\E6BD";padding-right:%?4?%;font-size:inherit;color:inherit}.years[data-v-3d7bacf8]:before{content:"\\E702"}.edu[data-v-3d7bacf8]:before{content:"\\E675"}.manager[data-v-3d7bacf8]{padding:0 0 %?30?%;border-bottom:%?2?% solid #e2e2e2;margin-bottom:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.portrait[data-v-3d7bacf8]{width:%?150?%;height:%?150?%;border-radius:50%;overflow:hidden}.portrait-img[data-v-3d7bacf8]{width:100%;height:100%}.manager-info[data-v-3d7bacf8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:center;align-content:center;line-height:1.4;padding-left:%?40?%}.manager-name[data-v-3d7bacf8]{font-size:%?50?%;color:#000}.manager-post[data-v-3d7bacf8]{font-size:%?40?%}.detail[data-v-3d7bacf8]{padding-bottom:%?50?%}.reume-send[data-v-3d7bacf8]{background-color:#727272;border-color:#727272;color:#fff}',""])}}]);