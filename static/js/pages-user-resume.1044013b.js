(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-resume"],{"09cd":function(t,e,i){"use strict";var a={"uni-icons":i("9b2b").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"u-base-info"},[i("v-uni-view",{staticClass:"b-row"},[i("uni-icons",{staticClass:"b-icon",attrs:{type:"touxiang1",size:"18",color:"#fff"}}),i("v-uni-input",{staticClass:"b-input",attrs:{type:"text",placeholder:"姓名","placeholder-style":"color:#a9c4f6"},model:{value:t.formData["name"],callback:function(e){t.$set(t.formData,"name",e)},expression:"formData['name']"}})],1),i("v-uni-view",{staticClass:"b-row"},[i("uni-icons",{staticClass:"b-icon",attrs:{type:"shengri1",size:"18",color:"#fff"}}),i("v-uni-picker",{staticClass:"b-input",attrs:{mode:"date",value:t.formData["brithday"],start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)}}},[i("v-uni-view",[t._v(t._s(t.formData["brithday"]))])],1)],1),i("v-uni-view",{staticClass:"b-row"},[i("uni-icons",{staticClass:"b-icon",attrs:{type:"sina",size:"18",color:"#fff"}}),i("v-uni-input",{staticClass:"b-input",attrs:{type:"text",placeholder:"EMail","placeholder-style":"color:#a9c4f6"},model:{value:t.formData["email"],callback:function(e){t.$set(t.formData,"email",e)},expression:"formData['email']"}})],1),i("v-uni-view",{staticClass:"b-row"},[i("uni-icons",{staticClass:"b-icon",attrs:{type:"dianhua",size:"18",color:"#fff"}}),i("v-uni-input",{staticClass:"b-input",attrs:{type:"number",maxlength:"11",placeholder:"您的电话号","placeholder-style":"color:#a9c4f6"},model:{value:t.formData["phone"],callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData['phone']"}})],1)],1),i("v-uni-view",{staticClass:"about_self"},[i("v-uni-textarea",{attrs:{"auto-height":!0,"placeholder-style":"color:#a9c4f6",placeholder:"自我简介"},model:{value:t.formData["about_self"],callback:function(e){t.$set(t.formData,"about_self",e)},expression:"formData['about_self']"}})],1)],1),i("v-uni-view",{staticClass:"history"},[[i("v-uni-view",{staticClass:"his-block"},[i("v-uni-view",{staticClass:"his-title"},[t._v("教育经历")]),i("v-uni-view",{staticClass:"his-row"},[i("v-uni-view",{staticClass:"his-label"},[t._v("毕业学校：")]),i("v-uni-view",{staticClass:"his-val"},[i("v-uni-input",{staticClass:"his-input",attrs:{type:"text"},model:{value:t.formData["school"][0]["school"],callback:function(e){t.$set(t.formData["school"][0],"school",e)},expression:"formData['school'][0]['school']"}})],1)],1),i("v-uni-view",{staticClass:"his-row"},[i("v-uni-view",{staticClass:"his-label"},[t._v("攻读专业：")]),i("v-uni-view",{staticClass:"his-val"},[i("v-uni-input",{staticClass:"his-input",attrs:{type:"text"},model:{value:t.formData["school"][0]["profession"],callback:function(e){t.$set(t.formData["school"][0],"profession",e)},expression:"formData['school'][0]['profession']"}})],1)],1),i("v-uni-view",{staticClass:"his-row"},[i("v-uni-view",{staticClass:"his-label"},[t._v("就读年份：")]),i("v-uni-view",{staticClass:"his-val"},[i("v-uni-picker",{staticClass:"his-input his-input-helf",attrs:{mode:"date",value:t.formData["school"][0]["start_time"],start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindStartTime.apply(void 0,arguments)}}},[i("v-uni-view",[t._v(t._s(t.formData["school"][0]["start_time"]?t.formData["school"][0]["start_time"].split(" ")[0]:""))])],1),i("v-uni-view",{staticClass:"cut-val"},[t._v("至")]),i("v-uni-picker",{staticClass:"his-input his-input-helf",attrs:{mode:"date",value:t.formData["school"][0]["end_time"],start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindEndTime.apply(void 0,arguments)}}},[i("v-uni-view",[t._v(t._s(t.formData["school"][0]["end_time"]?t.formData["school"][0]["end_time"].split(" ")[0]:""))])],1)],1)],1)],1)],[i("v-uni-view",{staticClass:"his-block"},[i("v-uni-view",{staticClass:"his-title"},[t._v("职业技能")]),i("v-uni-view",{staticClass:"his-row"},[i("v-uni-view",{staticClass:"his-label"},[t._v("公司：")]),i("v-uni-view",{staticClass:"his-val"},[i("v-uni-input",{staticClass:"his-input",attrs:{type:"text"},model:{value:t.formData["project"][0]["name"],callback:function(e){t.$set(t.formData["project"][0],"name",e)},expression:"formData['project'][0]['name']"}})],1)],1),i("v-uni-view",{staticClass:"his-row"},[i("v-uni-view",{staticClass:"his-label"},[t._v("年份：")]),i("v-uni-view",{staticClass:"his-val"},[i("v-uni-picker",{staticClass:"his-input his-input-helf",attrs:{mode:"date",value:t.formData["project"][0]["start_time"],start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindStartTimeProject.apply(void 0,arguments)}}},[i("v-uni-view",[t._v(t._s(t.formData["project"][0]["start_time"]?t.formData["project"][0]["start_time"].split(" ")[0]:""))])],1),i("v-uni-view",{staticClass:"cut-val"},[t._v("至")]),i("v-uni-picker",{staticClass:"his-input his-input-helf",attrs:{mode:"date",value:t.formData["project"][0]["end_time"],start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindEndTimeProject.apply(void 0,arguments)}}},[i("v-uni-view",[t._v(t._s(t.formData["project"][0]["end_time"]?t.formData["project"][0]["end_time"].split(" ")[0]:""))])],1)],1)],1),i("v-uni-view",{staticClass:"his-row"},[i("v-uni-view",{staticClass:"his-label"},[t._v("工作内容：")]),i("v-uni-view",{staticClass:"his-val"},[i("v-uni-textarea",{staticClass:"his-input",attrs:{"auto-height":!0,"placeholder-style":"color:#a9c4f6"},model:{value:t.formData["project"][0]["overview"],callback:function(e){t.$set(t.formData["project"][0],"overview",e)},expression:"formData['project'][0]['overview']"}})],1)],1)],1)],i("v-uni-view",{staticClass:"submit-resume",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.editResume("PUT")}}},[t._v("提交")])],2)],1)},r=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return r}),i.d(e,"a",function(){return a})},"0bb4":function(t,e,i){"use strict";i("c5f6"),i("28a5"),i("3b2b"),t.exports={error:"",check:function(t,e){for(var i=0;i<e.length;i++){if(!e[i].checkType)return!0;if(!e[i].name)return!0;if(!e[i].errorMsg)return!0;if(!t[e[i].name])return this.error=e[i].errorMsg,!1;switch(e[i].checkType){case"string":var a=new RegExp("^.{"+e[i].checkRule+"}$");if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;break;case"int":a=new RegExp("^(-[1-9]|[1-9])[0-9]{"+e[i].checkRule+"}$");if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;break;case"between":if(!this.isNumber(t[e[i].name]))return this.error=e[i].errorMsg,!1;var n=e[i].checkRule.split(",");if(n[0]=Number(n[0]),n[1]=Number(n[1]),t[e[i].name]>n[1]||t[e[i].name]<n[0])return this.error=e[i].errorMsg,!1;break;case"betweenD":a=/^-?[1-9][0-9]?$/;if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;n=e[i].checkRule.split(",");if(n[0]=Number(n[0]),n[1]=Number(n[1]),t[e[i].name]>n[1]||t[e[i].name]<n[0])return this.error=e[i].errorMsg,!1;break;case"betweenF":a=/^-?[0-9][0-9]?.+[0-9]+$/;if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;n=e[i].checkRule.split(",");if(n[0]=Number(n[0]),n[1]=Number(n[1]),t[e[i].name]>n[1]||t[e[i].name]<n[0])return this.error=e[i].errorMsg,!1;break;case"same":if(t[e[i].name]!=e[i].checkRule)return this.error=e[i].errorMsg,!1;break;case"notsame":if(t[e[i].name]==e[i].checkRule)return this.error=e[i].errorMsg,!1;break;case"email":a=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;break;case"phoneno":a=/^1[0-9]{10,10}$/;if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;break;case"zipcode":a=/^[0-9]{6}$/;if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;break;case"reg":a=new RegExp(e[i].checkRule);if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;break;case"in":if(-1==e[i].checkRule.indexOf(t[e[i].name]))return this.error=e[i].errorMsg,!1;break;case"notnull":if(null==t[e[i].name]||t[e[i].name].length<1)return this.error=e[i].errorMsg,!1;break}}return!0},isNumber:function(t){var e=/^-?[1-9][0-9]?.?[0-9]*$/;return e.test(t)}}},4892:function(t,e,i){var a=i("da86");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("92815eb2",a,!0,{sourceMap:!1,shadowMode:!1})},5106:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("0bb4"),n=[{name:"email",checkType:"email",checkRule:"",errorMsg:"请填写正确的邮箱"},{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"}];function r(t){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return"start"===t?i-=60:"end"===t&&(i+=2),a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(i,"-").concat(a,"-").concat(n)}var s={data:function(){return{loading:!1,title:"我的",portrait:!0,startDate:r("start"),endDate:r("end"),formData:{name:"",brithday:r({format:!0}),email:"",phone:"",age_work:"",education:"",about_self:"",sex:"",post:"",status:"",school:[{id:"",school:"",profession:"",start_time:r({format:!0}),end_time:r({format:!0})}],company:[{id:"",company:"",job:"",start_time:"",end_time:"",infomation:""}],project:[{id:"",name:"",overview:"",start_time:"",end_time:""}]}}},onLoad:function(){},onShow:function(){var t=this;t.$store.dispatch("cheack_page",2),t.editResume("GET")},methods:{bindDateChange:function(t){this.formData["brithday"]=t.target.value},bindStartTime:function(t){this.formData["school"][0]["start_time"]=t.target.value},bindEndTime:function(t){this.formData["school"][0]["end_time"]=t.target.value},bindStartTimeProject:function(t){this.formData["project"][0]["start_time"]=t.target.value},bindEndTimeProject:function(t){this.formData["project"][0]["end_time"]=t.target.value},editResume:function(t){var e=this,i=e.formData,r=[].concat(n),s="GET"==t||a.check(i,r);if(s){e.loading=!0;var o=e.$store.state.testToken;e.$store.state.isWeixin&&(o=e.$store.state.weChatAuthInfo.token);var c={inter:"resume",method:t,header:{token:o}};"PUT"==t&&(c["data"]=i),console.log("login:",c),c["fun"]=function(i){console.log(i),e.loading=!1,i.success?"GET"==t&&0!=i.data.info?e.formData=i.data.info:"PUT"==t&&uni.showToast({title:"简历编辑成功",icon:"success"}):uni.showToast({title:i.msg,icon:"none"})},e.$store.dispatch("getData",c)}else uni.showToast({title:a.error,icon:"none"})}}};e.default=s},"685b":function(t,e,i){"use strict";i.r(e);var a=i("09cd"),n=i("db23");for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);i("7a1d");var s,o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"209f33b8",null,!1,a["a"],s);e["default"]=c.exports},"7a1d":function(t,e,i){"use strict";var a=i("4892"),n=i.n(a);n.a},da86:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".header[data-v-209f33b8]{background:#3a78ea;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;padding:%?90?% %?30?% %?30?%}.portrait[data-v-209f33b8]{width:%?150?%;height:%?150?%}.user-name[data-v-209f33b8]{color:#fff;font-size:%?32?%;line-height:2}.portrait-img[data-v-209f33b8]{width:inherit;height:inherit;border-radius:50%;overflow:hidden}.b-row[data-v-209f33b8]{width:100%;padding:%?10?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-left:%?-30?%}.b-icon[data-v-209f33b8]{width:20%}.b-input[data-v-209f33b8]{-webkit-box-flex:75%;-webkit-flex:75%;flex:75%;border-bottom:1px solid #a9c4f6;color:#fff;text-align:center}.about_self[data-v-209f33b8]{width:90%;border-radius:%?10?%;border:1px solid #a9c4f6;color:#fff;padding:%?10?%;margin:%?20?% 0}.history[data-v-209f33b8]{padding:%?30?%}.his-block[data-v-209f33b8]{padding-bottom:%?20?%}.his-title[data-v-209f33b8]{font-size:%?40?%;border-bottom:%?4?% solid #000;color:#000;line-height:2;margin-bottom:%?15?%}.his-row[data-v-209f33b8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;padding:%?15?% 0}.his-label[data-v-209f33b8]{width:25%;font-size:%?32?%}.his-val[data-v-209f33b8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}.his-input[data-v-209f33b8]{width:100%;font-size:%?32?%;border-bottom:1px solid #7f7f7f}.his-input-helf[data-v-209f33b8]{width:45%;text-align:center}.submit-resume[data-v-209f33b8]{width:100%;background:#3a78ea;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;line-height:3;font-size:%?32?%;border-radius:%?10?%}",""])},db23:function(t,e,i){"use strict";i.r(e);var a=i("5106"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=n.a}}]);