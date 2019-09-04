/*! Wiki.js - wiki.js.org - Licensed under AGPL */
(this.webpackJsonp=this.webpackJsonp||[]).push([["ui-extra"],{"./client/components/common/loader.vue":function(e,s,o){"use strict";o.r(s);var t=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:e.value,callback:function(s){e.value=s},expression:"value"}},[o("v-card",{staticClass:"loader-dialog radius-7",attrs:{color:e.color,dark:""}},[o("v-card-text",{staticClass:"text-center py-4"},["loading"===e.mode?o("atom-spinner",{staticClass:"is-inline",attrs:{"animation-duration":1e3,size:60,color:"#FFF"}}):"icon"===e.mode?o("img",{attrs:{src:"/svg/icon-"+e.icon+".svg",alt:e.icon}}):e._e(),o("div",{staticClass:"subtitle-1 white--text"},[e._v(e._s(e.title))]),o("div",{staticClass:"caption"},[e._v(e._s(e.subtitle))])],1)],1)],1)};t._withStripped=!0;var n={components:{AtomSpinner:o("./node_modules/epic-spinners/src/lib.js").a},props:{value:{type:Boolean,default:!1},color:{type:String,default:"blue darken-3"},title:{type:String,default:"Working..."},subtitle:{type:String,default:"Please wait"},mode:{type:String,default:"loading"},icon:{type:String,default:"checkmark"}}},i=(o("./client/components/common/loader.vue?vue&type=style&index=0&lang=scss&"),o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),l=o("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),d=o.n(l),a=o("./node_modules/vuetify/lib/components/VCard/VCard.js"),r=o("./node_modules/vuetify/lib/components/VCard/index.js"),c=o("./node_modules/vuetify/lib/components/VDialog/VDialog.js"),u=Object(i.a)(n,t,[],!1,null,null,null);d()(u,{VCard:a.a,VCardText:r.b,VDialog:c.a}),u.options.__file="client/components/common/loader.vue";s.default=u.exports},"./client/components/common/loader.vue?vue&type=style&index=0&lang=scss&":function(e,s,o){"use strict";var t=o("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/loader.vue?vue&type=style&index=0&lang=scss&");o.n(t).a},"./client/components/common/page-selector.vue":function(e,s,o){"use strict";o.r(s);var t=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("v-dialog",{attrs:{"max-width":"850px"},model:{value:e.isShown,callback:function(s){e.isShown=s},expression:"isShown"}},[o("v-card",{staticClass:"page-selector"},[o("div",{staticClass:"dialog-header is-dark"},[o("v-icon",{staticClass:"mr-3",attrs:{color:"white"}},[e._v("mdi-page-next-outline")]),o("span",[e._v("Select Page Location")]),o("v-spacer"),o("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:e.searchLoading,expression:"searchLoading"}],attrs:{indeterminate:"",color:"white",size:20,width:2}})],1),o("v-card-actions",{staticClass:"grey pa-2",class:e.darkMode?"darken-3-d5":"lighten-1"},[o("v-select",{staticStyle:{flex:"0 0 100px"},attrs:{solo:"",dark:"","background-color":"grey darken-3-d2","hide-details":"","single-line":"",items:e.namespaces},model:{value:e.currentLocale,callback:function(s){e.currentLocale=s},expression:"currentLocale"}}),o("v-text-field",{attrs:{solo:"","hide-details":"",prefix:"/",flat:"",clearable:""},model:{value:e.currentPath,callback:function(s){e.currentPath=s},expression:"currentPath"}})],1),o("v-card-chin",[o("v-spacer"),o("v-btn",{attrs:{text:""},on:{click:e.close}},[e._v("Cancel")]),o("v-btn",{staticClass:"px-4",attrs:{color:"primary"},on:{click:e.open}},[o("v-icon",{attrs:{left:""}},[e._v("mdi-check")]),o("span",[e._v("Select")])],1)],1)],1)],1)};t._withStripped=!0;var n=o("./node_modules/vuex-pathify/dist/vuex-pathify.js"),i={props:{value:{type:Boolean,default:!1},path:{type:String,default:"new-page"},locale:{type:String,default:"en"},mode:{type:String,default:"create"},openHandler:{type:Function,default:()=>{}}},data:()=>({searchLoading:!1,currentLocale:"en",currentPath:"new-page",tree:[],treeChildren:[],namespaces:siteLangs.length?siteLangs.map(e=>e.code):[siteConfig.lang]}),computed:{darkMode:Object(n.get)("site/dark"),isShown:{get(){return this.value},set(e){this.$emit("input",e)}},treeFolders:()=>[{id:"/",name:"/ (root)",children:[]}]},watch:{isShown(e,s){e&&!s&&(this.currentPath=this.path,this.currentLocale=this.locale)}},methods:{close(){this.isShown=!1},open(){!1!==this.openHandler({locale:this.currentLocale,path:this.currentPath})&&this.close()},async fetchFolders(e){console.info(e)}}},l=(o("./client/components/common/page-selector.vue?vue&type=style&index=0&lang=scss&"),o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),d=o("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),a=o.n(d),r=o("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),c=o("./node_modules/vuetify/lib/components/VCard/VCard.js"),u=o("./node_modules/vuetify/lib/components/VCard/index.js"),m=o("./node_modules/vuetify/lib/components/VDialog/VDialog.js"),v=o("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),p=o("./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js"),h=o("./node_modules/vuetify/lib/components/VSelect/VSelect.js"),g=o("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),_=o("./node_modules/vuetify/lib/components/VTextField/VTextField.js"),j=Object(l.a)(i,t,[],!1,null,null,null);a()(j,{VBtn:r.a,VCard:c.a,VCardActions:u.a,VDialog:m.a,VIcon:v.a,VProgressCircular:p.a,VSelect:h.a,VSpacer:g.a,VTextField:_.a}),j.options.__file="client/components/common/page-selector.vue";s.default=j.exports},"./client/components/common/page-selector.vue?vue&type=style&index=0&lang=scss&":function(e,s,o){"use strict";var t=o("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/page-selector.vue?vue&type=style&index=0&lang=scss&");o.n(t).a},"./client/components/common/search-results.vue":function(e,s,o){"use strict";o.r(s);var t=function(){var e=this,s=e.$createElement,o=e._self._c||s;return e.searchIsFocused||e.search.length>1?o("div",{staticClass:"search-results"},[o("div",{staticClass:"search-results-container"},[e.search.length<2?o("div",{staticClass:"search-results-help"},[o("img",{attrs:{src:"/svg/icon-search-alt.svg"}}),o("div",{staticClass:"mt-4"},[e._v(e._s(e.$t("common:header.searchHint")))])]):e.searchIsLoading&&e.results.length<1?o("div",{staticClass:"search-results-loader"},[o("orbit-spinner",{attrs:{"animation-duration":1e3,size:100,color:"#FFF"}}),o("div",{staticClass:"headline mt-5"},[e._v(e._s(e.$t("common:header.searchLoading")))])],1):!e.searchIsLoading&&e.results.length<1?o("div",{staticClass:"search-results-none"},[o("img",{attrs:{src:"/svg/icon-no-results.svg",alt:"No Results"}}),o("div",{staticClass:"subheading"},[e._v(e._s(e.$t("common:header.searchNoResult")))])]):e._e(),e.results.length>0?[o("v-subheader",{staticClass:"white--text"},[e._v(e._s(e.$t("common:header.searchResultsCount",{total:e.response.totalHits})))]),o("v-list",{staticClass:"search-results-items radius-7 py-0",attrs:{"two-line":""}},[e._l(e.results,function(s,t){return[o("v-list-item",{key:s.id,class:t===e.cursor?"highlighted":"",on:{click:function(o){return e.goToPage(s)}}},[o("v-list-item-avatar",{attrs:{tile:""}},[o("img",{attrs:{src:"/svg/icon-selective-highlighting.svg"}})]),o("v-list-item-content",[o("v-list-item-title",{domProps:{innerHTML:e._s(s.title)}}),o("v-list-item-subtitle",{domProps:{innerHTML:e._s(s.description)}}),o("div",{staticClass:"caption grey--text",domProps:{innerHTML:e._s(s.path)}})],1),o("v-list-item-action",[o("v-chip",{attrs:{label:"",outlined:""}},[e._v(e._s(s.locale.toUpperCase()))])],1)],1),t<e.results.length-1?o("v-divider"):e._e()]})],2),e.paginationLength>1?o("v-pagination",{staticClass:"mt-3",attrs:{dark:"",length:e.paginationLength},model:{value:e.pagination,callback:function(s){e.pagination=s},expression:"pagination"}}):e._e()]:e._e(),e.suggestions.length>0?[o("v-subheader",{staticClass:"white--text mt-3"},[e._v(e._s(e.$t("common:header.searchDidYouMean")))]),o("v-list",{staticClass:"search-results-suggestions radius-7",attrs:{dense:"",dark:""}},[e._l(e.suggestions,function(s,t){return[o("v-list-item",{key:s,class:t+e.results.length===e.cursor?"highlighted":"",on:{click:function(o){return e.setSearchTerm(s)}}},[o("v-list-item-avatar",[o("v-icon",[e._v("mdi-magnify")])],1),o("v-list-item-content",[o("v-list-item-title",{domProps:{innerHTML:e._s(s)}})],1)],1),t<e.suggestions.length-1?o("v-divider"):e._e()]})],2)]:e._e(),e.search.length>1?o("div",{staticClass:"text-xs-center pt-5"},[o("v-btn",{staticClass:"mx-2",attrs:{outlined:"",color:"pink"},on:{click:function(s){e.search=""}}},[o("v-icon",{attrs:{left:""}},[e._v("mdi-close")]),o("span",[e._v(e._s(e.$t("common:header.searchClose")))])],1)],1):e._e()],2)]):e._e()};t._withStripped=!0;var n=o("./node_modules/lodash/get.js"),i=o.n(n),l=o("./node_modules/lodash/nth.js"),d=o.n(l),a=o("./node_modules/vuex-pathify/dist/vuex-pathify.js"),r=o("./node_modules/epic-spinners/src/lib.js"),c=o("./client/graph/common/common-pages-query-search.gql"),u=o.n(c),m={components:{OrbitSpinner:r.d},data:()=>({cursor:0,pagination:1,response:{results:[],suggestions:[],totalHits:0}}),computed:{search:Object(a.sync)("site/search"),searchIsFocused:Object(a.sync)("site/searchIsFocused"),searchIsLoading:Object(a.sync)("site/searchIsLoading"),searchRestrictLocale:Object(a.sync)("site/searchRestrictLocale"),searchRestrictPath:Object(a.sync)("site/searchRestrictPath"),results(){return this.response.results?this.response.results:[]},hits(){return this.response.totalHits?this.response.totalHits:0},suggestions(){return this.response.suggestions?this.response.suggestions:[]},paginationLength(){return this.response.totalHits>0?0:Math.ceil(this.response.totalHits/10)}},watch:{search(e,s){this.cursor=0,e.length<2?(this.response.results=[],this.response.suggestions=[]):this.searchIsLoading=!0}},mounted(){this.$root.$on("searchMove",e=>{this.cursor+="up"===e?-1:1,this.cursor<-1?this.cursor=-1:this.cursor>this.results.length+this.suggestions.length-1&&(this.cursor=this.results.length+this.suggestions.length-1)}),this.$root.$on("searchEnter",()=>{this.cursor>=0&&this.cursor<this.results.length?this.goToPage(d()(this.results,this.cursor)):this.cursor>=0&&this.setSearchTerm(d()(this.suggestions,this.cursor-this.results.length))})},methods:{setSearchTerm(e){this.search=e},goToPage(e){window.location.assign("/".concat(e.locale,"/").concat(e.path))}},apollo:{response:{query:u.a,variables(){return{query:this.search}},fetchPolicy:"network-only",debounce:300,throttle:1e3,skip(){return!this.search||this.search.length<2},update:e=>i()(e,"pages.search",{}),watchLoading(e){this.searchIsLoading=e}}}},v=(o("./client/components/common/search-results.vue?vue&type=style&index=0&lang=scss&"),o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),p=o("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),h=o.n(p),g=o("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),_=o("./node_modules/vuetify/lib/components/VChip/VChip.js"),j=o("./node_modules/vuetify/lib/components/VDivider/VDivider.js"),y=o("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),f=o("./node_modules/vuetify/lib/components/VList/VList.js"),b=o("./node_modules/vuetify/lib/components/VList/VListItem.js"),x=o("./node_modules/vuetify/lib/components/VList/VListItemAction.js"),V=o("./node_modules/vuetify/lib/components/VList/VListItemAvatar.js"),k=o("./node_modules/vuetify/lib/components/VList/index.js"),S=o("./node_modules/vuetify/lib/components/VPagination/VPagination.js"),L=o("./node_modules/vuetify/lib/components/VSubheader/VSubheader.js"),C=Object(v.a)(m,t,[],!1,null,null,null);h()(C,{VBtn:g.a,VChip:_.a,VDivider:j.a,VIcon:y.a,VList:f.a,VListItem:b.a,VListItemAction:x.a,VListItemAvatar:V.a,VListItemContent:k.b,VListItemSubtitle:k.c,VListItemTitle:k.d,VPagination:S.a,VSubheader:L.a}),C.options.__file="client/components/common/search-results.vue";s.default=C.exports},"./client/components/common/search-results.vue?vue&type=style&index=0&lang=scss&":function(e,s,o){"use strict";var t=o("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/search-results.vue?vue&type=style&index=0&lang=scss&");o.n(t).a},"./client/components/common/v-card-chin.vue":function(e,s,o){"use strict";o.r(s);var t=function(){var e=this.$createElement,s=this._self._c||e;return s("div",[s("v-divider",{staticClass:"my-0"}),s("v-card-actions",{class:this.dark?"grey darken-4-l5":"grey lighten-4"},[this._t("default")],2)],1)};t._withStripped=!0;var n={computed:{dark(){return this.$vuetify.theme.dark}}},i=o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),l=o("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),d=o.n(l),a=o("./node_modules/vuetify/lib/components/VCard/index.js"),r=o("./node_modules/vuetify/lib/components/VDivider/VDivider.js"),c=Object(i.a)(n,t,[],!1,null,null,null);d()(c,{VCardActions:a.a,VDivider:r.a}),c.options.__file="client/components/common/v-card-chin.vue";s.default=c.exports},"./client/graph/common/common-pages-query-search.gql":function(e,s){var o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"query"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pages"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"search"},arguments:[{kind:"Argument",name:{kind:"Name",value:"query"},value:{kind:"Variable",name:{kind:"Name",value:"query"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"results"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"path"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"locale"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"suggestions"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalHits"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:206}};o.loc.source={body:"query ($query: String!) {\n  pages {\n    search(query:$query) {\n      results {\n        id\n        title\n        description\n        path\n        locale\n      }\n      suggestions\n      totalHits\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};o.definitions.forEach(function(e){if(e.name){var s=new Set;!function e(s,o){if("FragmentSpread"===s.kind)o.add(s.name.value);else if("VariableDefinition"===s.kind){var t=s.type;"NamedType"===t.kind&&o.add(t.name.value)}s.selectionSet&&s.selectionSet.selections.forEach(function(s){e(s,o)}),s.variableDefinitions&&s.variableDefinitions.forEach(function(s){e(s,o)}),s.definitions&&s.definitions.forEach(function(s){e(s,o)})}(e,s),t[e.name.value]=s}}),e.exports=o,o.documentId="e6f55543447a171489b32a1887ed3fb815766e00154388195d2f1ffd322ae11b"},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/loader.vue?vue&type=style&index=0&lang=scss&":function(e,s,o){var t=o("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/loader.vue?vue&type=style&index=0&lang=scss&");"string"==typeof t&&(t=[[e.i,t,""]]);var n={insert:"head",singleton:!1};o("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(t,n);t.locals&&(e.exports=t.locals)},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/page-selector.vue?vue&type=style&index=0&lang=scss&":function(e,s,o){var t=o("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/page-selector.vue?vue&type=style&index=0&lang=scss&");"string"==typeof t&&(t=[[e.i,t,""]]);var n={insert:"head",singleton:!1};o("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(t,n);t.locals&&(e.exports=t.locals)},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/search-results.vue?vue&type=style&index=0&lang=scss&":function(e,s,o){var t=o("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/search-results.vue?vue&type=style&index=0&lang=scss&");"string"==typeof t&&(t=[[e.i,t,""]]);var n={insert:"head",singleton:!1};o("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(t,n);t.locals&&(e.exports=t.locals)},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/loader.vue?vue&type=style&index=0&lang=scss&":function(e,s,o){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/page-selector.vue?vue&type=style&index=0&lang=scss&":function(e,s,o){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/search-results.vue?vue&type=style&index=0&lang=scss&":function(e,s,o){}}]);