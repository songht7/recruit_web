(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-login"],{"0bb4":function(e,t,n){"use strict";n("c5f6"),n("28a5"),n("3b2b"),e.exports={error:"",check:function(e,t){for(var n=0;n<t.length;n++){if(!t[n].checkType)return!0;if(!t[n].name)return!0;if(!t[n].errorMsg)return!0;if(!e[t[n].name])return this.error=t[n].errorMsg,!1;switch(t[n].checkType){case"string":var r=new RegExp("^.{"+t[n].checkRule+"}$");if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"int":r=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[n].checkRule+"}$");if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[n].name]))return this.error=t[n].errorMsg,!1;var o=t[n].checkRule.split(",");if(o[0]=Number(o[0]),o[1]=Number(o[1]),e[t[n].name]>o[1]||e[t[n].name]<o[0])return this.error=t[n].errorMsg,!1;break;case"betweenD":r=/^-?[1-9][0-9]?$/;if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;o=t[n].checkRule.split(",");if(o[0]=Number(o[0]),o[1]=Number(o[1]),e[t[n].name]>o[1]||e[t[n].name]<o[0])return this.error=t[n].errorMsg,!1;break;case"betweenF":r=/^-?[0-9][0-9]?.+[0-9]+$/;if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;o=t[n].checkRule.split(",");if(o[0]=Number(o[0]),o[1]=Number(o[1]),e[t[n].name]>o[1]||e[t[n].name]<o[0])return this.error=t[n].errorMsg,!1;break;case"same":if(e[t[n].name]!=t[n].checkRule)return this.error=t[n].errorMsg,!1;break;case"notsame":if(e[t[n].name]==t[n].checkRule)return this.error=t[n].errorMsg,!1;break;case"email":r=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"phoneno":r=/^1[0-9]{10,10}$/;if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"zipcode":r=/^[0-9]{6}$/;if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"reg":r=new RegExp(t[n].checkRule);if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"in":if(-1==t[n].checkRule.indexOf(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"notnull":if(null==e[t[n].name]||e[t[n].name].length<1)return this.error=t[n].errorMsg,!1;break}}return!0},isNumber:function(e){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(e)}}},"31ff":function(e,t,n){"use strict";n.r(t);var r=n("5cde"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=o.a},"3e4f":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".user-login[data-v-5295ce0a]{padding:%?100?% %?30?% %?30?%}.login-block[data-v-5295ce0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.login-label[data-v-5295ce0a]{line-height:1.6;padding-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.label[data-v-5295ce0a]{font-size:%?70?%;color:#000}.sub-label[data-v-5295ce0a]{font-size:%?42?%;color:#848383}.login-input[data-v-5295ce0a]{padding:%?10?%;border:%?2?% solid #eee;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;margin-bottom:%?30?%;border-radius:%?10?%}.phone-err[data-v-5295ce0a]{border-color:#f33}.user-input[data-v-5295ce0a]{line-height:2;font-size:%?40?%;color:#666}.login-btns[data-v-5295ce0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.login-btn[data-v-5295ce0a]{width:100%;background:#3a78ea;border-radius:%?10?%;line-height:2;border:%?2?% solid #3a78ea;color:#fff;font-size:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.get-code[data-v-5295ce0a]{color:#007aff}.disbale-btn[data-v-5295ce0a],\n.loading[data-v-5295ce0a]{color:#666}",""])},"5cde":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("0bb4"),o=[{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"}],i={data:function(){return{title:"登录",pageIs:"phone",disbale:!0,phoneErr:!1,loading:!1,formData:{phone:"",code:""},WeChatInfo:[]}},onLoad:function(){var e=this;uni.getStorage({key:"WeChatInfo",success:function(t){console.log(t.data),e.WeChatInfo=t.data}})},onShow:function(){},methods:{login:function(e){var t=this;console.log(t.formData);t=this;uni.pageScrollTo({scrollTop:0,duration:0});var n=[].concat(o,[{name:"code",checkType:"notnull",checkRule:"",errorMsg:"验证码不能为空"}]),i=t.formData,a=r.check(i,n);if(a){t.loading=!0;var s=t.$store.state.testToken?t.$store.state.testToken:t.WeChatInfo.token,c={inter:"savePhone",method:"POST",header:{token:s},data:t.formData};console.log("login:",c),c["fun"]=function(e){console.log(e),t.loading=!1,e.success||uni.showToast({title:e.msg,icon:"none"})},t.$store.dispatch("getData",c)}else uni.showToast({title:r.error,icon:"none"})},checkPhone:function(){var e=this;uni.pageScrollTo({scrollTop:0,duration:0});var t=e.formData,n=r.check(t,o);n?e.disbale=!1:(e.phoneErr=!0,e.disbale=!0,uni.showToast({title:r.error,icon:"none"}))},onFocus:function(){var e=this;e.phoneErr=!1,e.disbale=!0},getCode:function(){var e=this;if(!e.disbale){e.loading=!0,console.log(e.formData);var t={inter:"sendSms",parm:"?phone=".concat(e.formData.phone),fun:function(t){console.log(t),e.loading=!1,t.success}};e.$store.dispatch("getData",t)}}}};t.default=i},"6de3":function(e,t,n){"use strict";var r,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"user-login"},[[n("v-uni-view",{staticClass:"login-block"},[n("v-uni-view",{staticClass:"login-label"},[n("v-uni-text",{staticClass:"label"},[e._v("绑定关联手机号")])],1),n("v-uni-view",{class:["login-input",e.phoneErr?"phone-err":""]},[n("v-uni-input",{staticClass:"user-input",attrs:{type:"number",maxlength:"11",placeholder:"手机号"},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.checkPhone.apply(void 0,arguments)}},model:{value:e.formData["phone"],callback:function(t){e.$set(e.formData,"phone",t)},expression:"formData['phone']"}})],1),n("v-uni-view",{staticClass:"login-input"},[n("v-uni-input",{staticClass:"user-input",attrs:{type:"text",maxlength:"6",placeholder:"验证码"},model:{value:e.formData["code"],callback:function(t){e.$set(e.formData,"code",t)},expression:"formData['code']"}}),n("v-uni-view",{class:["get-code",e.disbale?"disbale-btn":"",e.loading?"loading":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}},[e._v("获取验证码")])],1),n("v-uni-view",{staticClass:"login-btns"},[n("v-uni-view",{staticClass:"login-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login.apply(void 0,arguments)}}},[e._v("登录")])],1)],1)]],2)},i=[];n.d(t,"b",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return r})},"8bbd":function(e,t,n){"use strict";var r=n("fc5d"),o=n.n(r);o.a},d9e8:function(e,t,n){"use strict";n.r(t);var r=n("6de3"),o=n("31ff");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("8bbd");var a,s=n("f0c5"),c=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"5295ce0a",null,!1,r["a"],a);t["default"]=c.exports},fc5d:function(e,t,n){var r=n("3e4f");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("4f06").default;o("544464ec",r,!0,{sourceMap:!1,shadowMode:!1})}}]);