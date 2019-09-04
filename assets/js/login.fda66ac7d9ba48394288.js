/*! Wiki.js - wiki.js.org - Licensed under AGPL */
(this.webpackJsonp=this.webpackJsonp||[]).push([["login"],{"./client/components/login.vue":function(e,i,n){"use strict";n.r(i);var t=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("v-app",[n("div",{staticClass:"login"},[n("v-container",{attrs:{"grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"","offset-sm1":"",sm10:"","offset-md2":"",md8:"","offset-lg3":"",lg6:"","offset-xl4":"",xl4:""}},[n("transition",{attrs:{name:"fadeUp"}},[n("v-card",{directives:[{name:"show",rawName:"v-show",value:e.isShown,expression:"isShown"}],staticClass:"elevation-5",attrs:{light:""}},[n("v-toolbar",{attrs:{color:"primary",flat:"",dense:"",dark:""}},[n("v-spacer"),"tfa"===e.screen?n("div",{staticClass:"subheading"},[e._v(e._s(e.$t("auth:tfa.subtitle")))]):e._e(),"changePwd"===e.screen?n("div",{staticClass:"subheading"},[e._v(e._s(e.$t("auth:changePwd.subtitle")))]):"local"!==e.selectedStrategy.key?n("div",{staticClass:"subheading"},[e._v(e._s(e.$t("auth:loginUsingStrategy",{strategy:e.selectedStrategy.title,interpolation:{escapeValue:!1}})))]):n("div",{staticClass:"subheading"},[e._v(e._s(e.$t("auth:loginRequired")))]),n("v-spacer")],1),n("v-card-text",{staticClass:"text-center"},[n("h1",{staticClass:"display-1 primary--text py-2"},[e._v(e._s(e.siteTitle))]),"login"===e.screen?[n("v-text-field",{ref:"iptEmail",staticClass:"mt-3",attrs:{solo:"",flat:"","prepend-icon":"mdi-clipboard-account","background-color":"grey lighten-4","hide-details":"",placeholder:e.$t("auth:fields.emailUser")},model:{value:e.username,callback:function(i){e.username=i},expression:"username"}}),n("v-text-field",{ref:"iptPassword",staticClass:"mt-2",attrs:{solo:"",flat:"","prepend-icon":"mdi-textbox-password","background-color":"grey lighten-4","hide-details":"","append-icon":e.hidePassword?"mdi-eye-off":"mdi-eye",type:e.hidePassword?"password":"text",placeholder:e.$t("auth:fields.password")},on:{"click:append":function(){return e.hidePassword=!e.hidePassword},keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.login(i)}},model:{value:e.password,callback:function(i){e.password=i},expression:"password"}})]:"tfa"===e.screen?[n("div",{staticClass:"body-2"},[e._v("Enter the security code generated from your trusted device:")]),n("v-text-field",{ref:"iptTFA",staticClass:"centered mt-2",attrs:{solo:"",flat:"","background-color":"grey lighten-4","hide-details":"",placeholder:e.$t("auth:tfa.placeholder")},on:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.verifySecurityCode(i)}},model:{value:e.securityCode,callback:function(i){e.securityCode=i},expression:"securityCode"}})]:"changePwd"===e.screen?[n("div",{staticClass:"body-2"},[e._v(e._s(e.$t("auth:changePwd.instructions")))]),n("v-text-field",{ref:"iptNewPassword",staticClass:"mt-2",attrs:{type:"password",solo:"",flat:"","background-color":"grey lighten-4","hide-details":"",placeholder:e.$t("auth:changePwd.newPasswordPlaceholder")},model:{value:e.newPassword,callback:function(i){e.newPassword=i},expression:"newPassword"}}),n("v-text-field",{staticClass:"mt-2",attrs:{type:"password",solo:"",flat:"","background-color":"grey lighten-4","hide-details":"",placeholder:e.$t("auth:changePwd.newPasswordVerifyPlaceholder")},on:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.changePassword(i)}},model:{value:e.newPasswordVerify,callback:function(i){e.newPasswordVerify=i},expression:"newPasswordVerify"}})]:"forgot"===e.screen?[n("div",{staticClass:"body-2"},[e._v(e._s(e.$t("auth:forgotPasswordSubtitle")))]),n("v-text-field",{ref:"iptEmailForgot",staticClass:"mt-3",attrs:{solo:"",flat:"","prepend-icon":"mdi-email","background-color":"grey lighten-4","hide-details":"",placeholder:e.$t("auth:fields.email")},model:{value:e.username,callback:function(i){e.username=i},expression:"username"}})]:e._e()],2),n("v-card-actions",{staticClass:"pb-4"},[n("v-spacer"),"login"===e.screen?n("v-btn",{attrs:{width:"100%","max-width":"250px",large:"",color:"teal",dark:"",rounded:"",loading:e.isLoading},on:{click:e.login}},[e._v(e._s(e.$t("auth:actions.login")))]):"tfa"===e.screen?n("v-btn",{attrs:{width:"100%","max-width":"250px",large:"",color:"teal",dark:"",rounded:"",loading:e.isLoading},on:{click:e.verifySecurityCode}},[e._v(e._s(e.$t("auth:tfa.verifyToken")))]):"changePwd"===e.screen?n("v-btn",{attrs:{width:"100%","max-width":"250px",large:"",color:"teal",dark:"",rounded:"",loading:e.isLoading},on:{click:e.changePassword}},[e._v(e._s(e.$t("auth:changePwd.proceed")))]):"forgot"===e.screen?n("v-btn",{attrs:{width:"100%","max-width":"250px",large:"",color:"teal",dark:"",rounded:"",loading:e.isLoading},on:{click:e.forgotPasswordSubmit}},[e._v(e._s(e.$t("auth:sendResetPassword")))]):e._e(),n("v-spacer")],1),"login"===e.screen&&"local"===e.selectedStrategy.key?n("v-card-actions",{staticClass:"pb-3"},[n("v-spacer"),n("a",{staticClass:"caption",attrs:{href:"#forgot"},on:{click:function(i){return i.stopPropagation(),i.preventDefault(),e.forgotPassword(i)}}},[e._v(e._s(e.$t("auth:forgotPasswordLink")))]),n("v-spacer")],1):"forgot"===e.screen?n("v-card-actions",{staticClass:"pb-3"},[n("v-spacer"),n("a",{staticClass:"caption",attrs:{href:"#cancelforgot"},on:{click:function(i){i.stopPropagation(),i.preventDefault(),e.screen="login"}}},[e._v(e._s(e.$t("auth:forgotPasswordCancel")))]),n("v-spacer")],1):e._e(),"login"===e.screen&&e.isSocialShown?[n("v-divider"),n("v-card-text",{staticClass:"grey lighten-4 text-center"},[n("div",{staticClass:"pb-2 body-2 text-xs-center grey--text text--darken-2"},[e._v(e._s(e.$t("auth:orLoginUsingStrategy")))]),e._l(e.strategies,function(i){return n("v-btn",{key:i.key,staticClass:"mx-1 social-login-btn",attrs:{large:"",dark:"",color:i.color,depressed:i.key===e.selectedStrategy.key},on:{click:function(n){return e.selectStrategy(i)}}},[n("v-avatar",{staticClass:"mr-3",class:i.color,attrs:{tile:"",size:"24"},domProps:{innerHTML:e._s(i.icon)}}),n("span",{staticStyle:{"text-transform":"none"}},[e._v(e._s(i.title))])],1)})],2)]:e._e(),"login"===e.screen&&e.selectedStrategy.selfRegistration?[n("v-divider"),n("v-card-actions",{staticClass:"py-3",class:e.isSocialShown?"":"grey lighten-4"},[n("v-spacer"),n("i18next",{staticClass:"caption",attrs:{path:"auth:switchToRegister.text",tag:"div"}},[n("a",{staticClass:"caption",attrs:{href:"/register",place:"link"}},[e._v(e._s(e.$t("auth:switchToRegister.link")))])]),n("v-spacer")],1)]:e._e()],2)],1)],1)],1)],1)],1),n("loader",{attrs:{color:e.loaderColor,title:e.loaderTitle,subtitle:e.$t("auth:pleaseWait")},model:{value:e.isLoading,callback:function(i){e.isLoading=i},expression:"isLoading"}}),n("nav-footer",{attrs:{color:"grey darken-4"}}),n("notify")],1)};t._withStripped=!0;var a=n("./node_modules/lodash/delay.js"),s=n.n(a),o=n("./node_modules/lodash/get.js"),d=n.n(o),l=n("./node_modules/lodash/has.js"),r=n.n(l),c=n("./node_modules/lodash/find.js"),u=n.n(c),m=n("./node_modules/js-cookie/src/js.cookie.js"),g=n.n(m),v=n("./client/graph/login/login-query-strategies.gql"),f=n.n(v),k=n("./client/graph/login/login-mutation-login.gql"),h=n.n(k),p=n("./client/graph/login/login-mutation-tfa.gql"),y=n.n(p),w=n("./client/graph/login/login-mutation-changepassword.gql"),b=n.n(w),S={i18nOptions:{namespaces:"auth"},data:()=>({error:!1,strategies:[],selectedStrategy:{key:"local"},screen:"login",username:"",password:"",hidePassword:!0,securityCode:"",continuationToken:"",isLoading:!1,loaderColor:"grey darken-4",loaderTitle:"Working...",isShown:!1,newPassword:"",newPasswordVerify:""}),computed:{siteTitle:()=>siteConfig.title,isSocialShown(){return this.strategies.length>1}},watch:{strategies(e,i){this.selectedStrategy=u()(e,["key","local"])}},mounted(){this.isShown=!0,this.$nextTick(()=>{this.$refs.iptEmail.focus()})},methods:{selectStrategy(e){this.selectedStrategy=e,this.screen="login",e.useForm?this.$nextTick(()=>{this.$refs.iptEmail.focus()}):(this.isLoading=!0,window.location.assign("/login/"+e.key))},async login(){if(this.username.length<2)this.$store.commit("showNotification",{style:"red",message:this.$t("auth:invalidEmailUsername"),icon:"alert"}),this.$refs.iptEmail.focus();else if(this.password.length<2)this.$store.commit("showNotification",{style:"red",message:this.$t("auth:invalidPassword"),icon:"alert"}),this.$refs.iptPassword.focus();else{this.loaderColor="grey darken-4",this.loaderTitle=this.$t("auth:signingIn"),this.isLoading=!0;try{let e=await this.$apollo.mutate({mutation:h.a,variables:{username:this.username,password:this.password,strategy:this.selectedStrategy.key}});if(!r()(e,"data.authentication.login"))throw new Error(this.$t("auth:genericError"));{let i=d()(e,"data.authentication.login",{});if(!0!==i.responseResult.succeeded)throw new Error(i.responseResult.message);this.continuationToken=i.continuationToken,!0===i.mustChangePwd?(this.screen="changePwd",this.$nextTick(()=>{this.$refs.iptNewPassword.focus()}),this.isLoading=!1):!0===i.mustProvideTFA?(this.screen="tfa",this.securityCode="",this.$nextTick(()=>{this.$refs.iptTFA.focus()}),this.isLoading=!1):(this.loaderColor="green darken-1",this.loaderTitle=this.$t("auth:loginSuccess"),g.a.set("jwt",i.jwt,{expires:365}),s()(()=>{window.location.replace("/")},1e3))}}catch(e){console.error(e),this.$store.commit("showNotification",{style:"red",message:e.message,icon:"alert"}),this.isLoading=!1}}},verifySecurityCode(){6!==this.securityCode.length?(this.$store.commit("showNotification",{style:"red",message:"Enter a valid security code.",icon:"warning"}),this.$refs.iptTFA.focus()):(this.isLoading=!0,this.$apollo.mutate({mutation:y.a,variables:{continuationToken:this.continuationToken,securityCode:this.securityCode}}).then(e=>{if(!r()(e,"data.authentication.loginTFA"))throw new Error(this.$t("auth:genericError"));{let i=d()(e,"data.authentication.loginTFA",{});if(!0!==i.responseResult.succeeded)throw new Error(i.responseResult.message);this.$store.commit("showNotification",{message:"Login successful!",style:"success",icon:"check"}),s()(()=>{window.location.replace("/")},1e3),this.isLoading=!1}}).catch(e=>{console.error(e),this.$store.commit("showNotification",{style:"red",message:e.message,icon:"alert"}),this.isLoading=!1}))},async changePassword(){this.loaderColor="grey darken-4",this.loaderTitle=this.$t("auth:changePwd.loading"),this.isLoading=!0;const e=await this.$apollo.mutate({mutation:b.a,variables:{continuationToken:this.continuationToken,newPassword:this.newPassword}});!0===d()(e,"data.authentication.loginChangePassword.responseResult.succeeded",!1)?(this.loaderColor="green darken-1",this.loaderTitle=this.$t("auth:loginSuccess"),g.a.set("jwt",d()(e,"data.authentication.loginChangePassword.jwt",""),{expires:365}),s()(()=>{window.location.replace("/")},1e3)):(this.$store.commit("showNotification",{style:"red",message:d()(e,"data.authentication.loginChangePassword.responseResult.message",!1),icon:"alert"}),this.isLoading=!1)},forgotPassword(){this.screen="forgot",this.$nextTick(()=>{this.$refs.iptEmailForgot.focus()})},async forgotPasswordSubmit(){this.$store.commit("showNotification",{style:"pink",message:"Coming soon!",icon:"ferry"})}},apollo:{strategies:{query:f.a,update:e=>e.authentication.strategies,watchLoading(e){this.$store.commit("loading".concat(e?"Start":"Stop"),"login-strategies-refresh")}}}},_=(n("./client/components/login.vue?vue&type=style&index=0&lang=scss&"),n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),N=n("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),x=n.n(N),C=n("./node_modules/vuetify/lib/components/VApp/VApp.js"),j=n("./node_modules/vuetify/lib/components/VAvatar/VAvatar.js"),T=n("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),P=n("./node_modules/vuetify/lib/components/VCard/VCard.js"),$=n("./node_modules/vuetify/lib/components/VCard/index.js"),V=n("./node_modules/vuetify/lib/components/VGrid/VContainer.js"),F=n("./node_modules/vuetify/lib/components/VDivider/VDivider.js"),E=n("./node_modules/vuetify/lib/components/VGrid/VFlex.js"),D=n("./node_modules/vuetify/lib/components/VGrid/VLayout.js"),L=n("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),A=n("./node_modules/vuetify/lib/components/VTextField/VTextField.js"),R=n("./node_modules/vuetify/lib/components/VToolbar/VToolbar.js"),q=Object(_.a)(S,t,[],!1,null,null,null);x()(q,{VApp:C.a,VAvatar:j.a,VBtn:T.a,VCard:P.a,VCardActions:$.a,VCardText:$.b,VContainer:V.a,VDivider:F.a,VFlex:E.a,VLayout:D.a,VSpacer:L.a,VTextField:A.a,VToolbar:R.a}),q.options.__file="client/components/login.vue";i.default=q.exports},"./client/components/login.vue?vue&type=style&index=0&lang=scss&":function(e,i,n){"use strict";var t=n("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/login.vue?vue&type=style&index=0&lang=scss&");n.n(t).a},"./client/graph/login/login-mutation-changepassword.gql":function(e,i){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"continuationToken"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"newPassword"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authentication"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"loginChangePassword"},arguments:[{kind:"Argument",name:{kind:"Name",value:"continuationToken"},value:{kind:"Variable",name:{kind:"Name",value:"continuationToken"}}},{kind:"Argument",name:{kind:"Name",value:"newPassword"},value:{kind:"Variable",name:{kind:"Name",value:"newPassword"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"responseResult"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"succeeded"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"errorCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"jwt"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:292}};n.loc.source={body:"mutation($continuationToken: String!, $newPassword: String!) {\n  authentication {\n    loginChangePassword(continuationToken: $continuationToken, newPassword: $newPassword) {\n      responseResult {\n        succeeded\n        errorCode\n        slug\n        message\n      }\n      jwt\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};n.definitions.forEach(function(e){if(e.name){var i=new Set;!function e(i,n){if("FragmentSpread"===i.kind)n.add(i.name.value);else if("VariableDefinition"===i.kind){var t=i.type;"NamedType"===t.kind&&n.add(t.name.value)}i.selectionSet&&i.selectionSet.selections.forEach(function(i){e(i,n)}),i.variableDefinitions&&i.variableDefinitions.forEach(function(i){e(i,n)}),i.definitions&&i.definitions.forEach(function(i){e(i,n)})}(e,i),t[e.name.value]=i}}),e.exports=n,n.documentId="ba49ef1f5369c9e42db8974258812f3720f4fafb491b9e18d0ea7fb6c86918d8"},"./client/graph/login/login-mutation-login.gql":function(e,i){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"username"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"password"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"strategy"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authentication"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"login"},arguments:[{kind:"Argument",name:{kind:"Name",value:"username"},value:{kind:"Variable",name:{kind:"Name",value:"username"}}},{kind:"Argument",name:{kind:"Name",value:"password"},value:{kind:"Variable",name:{kind:"Name",value:"password"}}},{kind:"Argument",name:{kind:"Name",value:"strategy"},value:{kind:"Variable",name:{kind:"Name",value:"strategy"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"responseResult"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"succeeded"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"errorCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"jwt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mustChangePwd"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mustProvideTFA"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"continuationToken"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:348}};n.loc.source={body:"mutation($username: String!, $password: String!, $strategy: String!) {\n  authentication {\n    login(username: $username, password: $password, strategy: $strategy) {\n      responseResult {\n        succeeded\n        errorCode\n        slug\n        message\n      }\n      jwt\n      mustChangePwd\n      mustProvideTFA\n      continuationToken\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};n.definitions.forEach(function(e){if(e.name){var i=new Set;!function e(i,n){if("FragmentSpread"===i.kind)n.add(i.name.value);else if("VariableDefinition"===i.kind){var t=i.type;"NamedType"===t.kind&&n.add(t.name.value)}i.selectionSet&&i.selectionSet.selections.forEach(function(i){e(i,n)}),i.variableDefinitions&&i.variableDefinitions.forEach(function(i){e(i,n)}),i.definitions&&i.definitions.forEach(function(i){e(i,n)})}(e,i),t[e.name.value]=i}}),e.exports=n,n.documentId="eb9b704eaf26fade3e5c9928a20f78844e2c849cd1ae7e2df139772229e8b4be"},"./client/graph/login/login-mutation-tfa.gql":function(e,i){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"continuationToken"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"securityCode"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authentication"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"loginTFA"},arguments:[{kind:"Argument",name:{kind:"Name",value:"continuationToken"},value:{kind:"Variable",name:{kind:"Name",value:"continuationToken"}}},{kind:"Argument",name:{kind:"Name",value:"securityCode"},value:{kind:"Variable",name:{kind:"Name",value:"securityCode"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"responseResult"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"succeeded"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"errorCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"jwt"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:284}};n.loc.source={body:"mutation($continuationToken: String!, $securityCode: String!) {\n  authentication {\n    loginTFA(continuationToken: $continuationToken, securityCode: $securityCode) {\n      responseResult {\n        succeeded\n        errorCode\n        slug\n        message\n      }\n      jwt\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};n.definitions.forEach(function(e){if(e.name){var i=new Set;!function e(i,n){if("FragmentSpread"===i.kind)n.add(i.name.value);else if("VariableDefinition"===i.kind){var t=i.type;"NamedType"===t.kind&&n.add(t.name.value)}i.selectionSet&&i.selectionSet.selections.forEach(function(i){e(i,n)}),i.variableDefinitions&&i.variableDefinitions.forEach(function(i){e(i,n)}),i.definitions&&i.definitions.forEach(function(i){e(i,n)})}(e,i),t[e.name.value]=i}}),e.exports=n,n.documentId="3191328b0199f8c322e8027de61f4ce9bc82136e2cf77e8cb24f3069240a5427"},"./client/graph/login/login-query-strategies.gql":function(e,i){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authentication"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"strategies"},arguments:[{kind:"Argument",name:{kind:"Name",value:"isEnabled"},value:{kind:"BooleanValue",value:!0}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"useForm"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"selfRegistration"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:167}};n.loc.source={body:"query {\n  authentication {\n    strategies(\n      isEnabled: true\n    ) {\n      key\n      title\n      useForm\n      icon\n      color\n      selfRegistration\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};n.definitions.forEach(function(e){if(e.name){var i=new Set;!function e(i,n){if("FragmentSpread"===i.kind)n.add(i.name.value);else if("VariableDefinition"===i.kind){var t=i.type;"NamedType"===t.kind&&n.add(t.name.value)}i.selectionSet&&i.selectionSet.selections.forEach(function(i){e(i,n)}),i.variableDefinitions&&i.variableDefinitions.forEach(function(i){e(i,n)}),i.definitions&&i.definitions.forEach(function(i){e(i,n)})}(e,i),t[e.name.value]=i}}),e.exports=n,n.documentId="cd0932bd3da66e665c50136de4aa5ba67d3bb48e3d7541b05f7a22437cb7ff2d"},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/login.vue?vue&type=style&index=0&lang=scss&":function(e,i,n){var t=n("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/login.vue?vue&type=style&index=0&lang=scss&");"string"==typeof t&&(t=[[e.i,t,""]]);var a={insert:"head",singleton:!1};n("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(t,a);t.locals&&(e.exports=t.locals)},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/login.vue?vue&type=style&index=0&lang=scss&":function(e,i,n){}}]);