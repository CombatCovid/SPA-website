(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{501:function(e,t,a){},665:function(e,t,a){"use strict";var r=a(501);a.n(r).a},670:function(e,t,a){"use strict";a.r(t);var r=a(664),n=a.n(r),o={name:"JoseLayout",metaInfo:{title:"Jose Layout"}},s=a(27),i=Object(s.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",{attrs:{"d-flex":"","flex-wrap":""}},[t("v-row",[this._t("default")],2)],1)}),[],!1,null,"249f1b1f",null).exports,c=(a(68),{name:"JoseCard",props:{repo:{type:Object,default:{title:"A Repo",name:"a-repo",nameWithOwner:"a-repo-repo-owner",description:"this is a repo",cardImage:"cardimage.jpg",thumbImage:"thumbimage.jpg"}}},methods:{getImgUrl:function(e,t){return void 0!==t?"https://raw.githubusercontent.com/".concat(e,"/master").concat(t):"/resources/image/image-placeholder.png"},showContent:function(e){if(e)return this.$router.push({path:"/viewer/".concat(e),design:"".concat(e)})}}}),l={metaInfo:{title:"Finder"},data:function(){return{numberRepos:3,indexName:"dev_NARRATIONSD",searchClient:n()("ISO35TPV9I","028bacf007600d31402b783ea3f19004")}},components:{JoseCard:Object(s.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{hover:"","min-height":"","max-height":""},on:{click:function(t){return e.showContent(e.repo.name)}}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.getImgUrl(e.repo.nameWithOwner,e.repo.cardImage),"p-5":"",height:"200px",gradient:"to bottom, rgba(0,0,50,.6), rgba(0,0,80,.2)"}}),a("v-card-title",{domProps:{textContent:e._s(e.repo.title)}}),a("v-card-text",{staticClass:"text-primary",domProps:{textContent:e._s(e.repo.description)}})],1)}),[],!1,null,null,null).exports,JoseLayout:i},computed:{placeholder:function(){return"/resources/image/image-placeholder.png"}},methods:{showContent:function(e){return this.$router.push({path:"/viewer/".concat(e),design:"${repoName}"})}}},u=(a(665),Object(s.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("h1",{staticClass:"horiz-center"},[e._v("Finder")]),a("client-only",[a("ais-instant-search",{staticClass:"horiz-center searchbox",attrs:{"index-name":e.indexName,"search-client":e.searchClient}},[a("ais-configure",{attrs:{hitsPerPage:8}}),a("ais-powered-by"),a("ais-search-box"),a("ais-hits",{staticClass:"clear-above",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.items;return a("div",{staticClass:"viewer"},[a("v-container",{staticClass:"viewer__container",attrs:{"grid-list-lg":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},e._l(r,(function(t,r){return a("v-flex",{key:r,attrs:{xs12:"",sm6:"",md3:"",lg3:""}},[null!==t.cardImage?a("JoseCard",{attrs:{repo:{title:t.title,name:t.name,nameWithOwner:t.nameWithOwner,description:t.description,cardImage:t.cardImage}}}):e._e()],1)})),1)],1)],1)}}])})],1)],1)],1)}),[],!1,null,"5affa751",null));t.default=u.exports}}]);