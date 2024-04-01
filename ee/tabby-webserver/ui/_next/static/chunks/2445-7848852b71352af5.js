"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2445],{10356:function(e,n,r){r.d(n,{P:function(){return s}});var t=r(99109),i=r(60106);let o=(0,i.BX)("\n  query MeQuery {\n    me {\n      id\n      authToken\n      email\n      isAdmin\n      isPasswordSet\n    }\n  }\n"),s=()=>(0,t.aM)({query:o})},19567:function(e,n,r){r.d(n,{Uw:function(){return l},c7:function(){return u},jJ:function(){return d},xG:function(){return a}});var t=r(99109),i=r(60106);let o=(0,i.BX)("\n  query GetServerInfo {\n    serverInfo {\n      isAdminInitialized\n      isEmailConfigured\n      isChatEnabled\n      allowSelfSignup\n    }\n  }\n"),s=()=>{let[{data:e}]=(0,t.aM)({query:o});return null==e?void 0:e.serverInfo},a=()=>{var e;return null===(e=s())||void 0===e?void 0:e.isChatEnabled},u=()=>{var e;return null===(e=s())||void 0===e?void 0:e.isAdminInitialized},l=()=>{var e;return null===(e=s())||void 0===e?void 0:e.isEmailConfigured},d=()=>{var e;return null===(e=s())||void 0===e?void 0:e.allowSelfSignup}},58001:function(e,n,r){r.d(n,{Dp:function(){return b},Ho:function(){return $},QJ:function(){return A},Rn:function(){return S},av:function(){return q},bW:function(){return p},kP:function(){return P},pC:function(){return k},zq:function(){return w}});var t,i,o=r(57437),s=r(2265),a=r(24033),u=r(26566),l=r.n(u),d=r(60106),f=r(39311),c=r(10356),v=r(19567),g=r(7820);(t=i||(i={}))[t.SignIn=0]="SignIn",t[t.SignOut=1]="SignOut",t[t.Refresh=2]="Refresh";let h="_tabby_auth",p=()=>{if((0,f.S_)()){let e=localStorage.getItem(h);if(e)try{return JSON.parse(e)}catch(e){}}},k=e=>{localStorage.setItem(h,JSON.stringify(e))},S=()=>{localStorage.removeItem(h),window.dispatchEvent(new StorageEvent("storage",{storageArea:window.localStorage,url:window.location.href,key:h}))};function m(e,n){var r,t;let o=function(e,n){switch(n.type){case i.SignIn:case i.Refresh:return{status:"authenticated",data:n.data};case i.SignOut:return{status:"unauthenticated",data:void 0}}}(0,n);return e.status==o.status&&(r=e.data,t=o.data,(null==r?void 0:r.accessToken)===(null==t?void 0:t.accessToken)&&(null==r?void 0:r.refreshToken)===(null==t?void 0:t.refreshToken))?e:o}let y=s.createContext({}),b=(0,d.BX)("\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n"),T=(0,d.BX)("\n  mutation LogoutAllSessions {\n    logoutAllSessions\n  }\n"),$=e=>{let{children:n}=e,r=s.useRef(!1),[t]=l()(h,void 0),[a,u]=s.useReducer(m,{status:"loading",data:void 0}),[,d]=(0,c.P)();s.useEffect(()=>{r.current=!0,(null==t?void 0:t.accessToken)&&(null==t?void 0:t.refreshToken)?u({type:i.SignIn,data:t}):u({type:i.SignOut})},[]),s.useEffect(()=>{r.current&&((null==t?void 0:t.accessToken)&&(null==t?void 0:t.refreshToken)?(u({type:i.SignIn,data:t}),d()):u({type:i.SignOut}))},[t]);let f=s.useMemo(()=>{var e;return(null==a?void 0:a.status)=="authenticated"?{data:{accessToken:a.data.accessToken},status:a.status}:{status:null!==(e=null==a?void 0:a.status)&&void 0!==e?e:"loading",data:null}},[a]);return(0,o.jsx)(y.Provider,{value:{authState:a,dispatch:u,session:f},children:n})};class E extends Error{constructor(){super("AuthProvider is missing. Please add the AuthProvider at root level")}}function I(){let e=s.useContext(y);if(!e)throw new E;return e}function w(){let{dispatch:e}=I(),[n,r]=l()(h,void 0);return async n=>(r({accessToken:n.accessToken,refreshToken:n.refreshToken}),e({type:i.SignIn,data:n}),!0)}function A(){let e=(0,g.D)(T),{dispatch:n}=I(),[r,t]=l()(h,void 0);return async()=>{await e(),t(void 0),n({type:i.SignOut})}}function P(){let{session:e}=I();return e}let C=["/auth/signin","/auth/signup","/auth/reset-password"];function q(){let e=(0,v.c7)(),n=(0,a.useRouter)(),r=(0,a.usePathname)(),t=(0,a.useSearchParams)(),{data:i,status:o}=P();return s.useEffect(()=>{if("loading"===o||"authenticated"===o||void 0===e)return;if(!e)return n.replace("/auth/signup?isAdmin=true");let i="/auth/signup"===r&&"true"===t.get("isAdmin");(!C.includes(r)||i)&&n.replace("/auth/signin")},[e,o]),i}},7820:function(e,n,r){r.d(n,{D:function(){return c},L:function(){return g}});var t=r(69166),i=r(73997),o=r(83074),s=r(53771),a=r(24144),u=r(99109),l=r(18398),d=r(58001),f=r(57166);function c(e,n){var r;let[t,i]=(0,u.Db)(e),o=(null==n?void 0:n.form)?(r=n.form,e=>{let{graphQLErrors:n=[]}=e;for(let e of n)if(e.extensions&&e.extensions["validation-errors"]){let n=e.extensions["validation-errors"];for(let e of n.errors)r.setError(e.path,e)}else(null==e?void 0:e.originalError)&&r.setError("root",e.originalError)}):void 0,s=async e=>{let r;try{if(null==(r=await i(e))?void 0:r.error)o&&o(r.error),(null==n?void 0:n.onError)&&n.onError(r.error);else if(!(0,a.Z)(null==r?void 0:r.data)){var t;null==n||null===(t=n.onCompleted)||void 0===t||t.call(n,r.data)}}catch(e){(null==n?void 0:n.onError)&&n.onError(e);return}return r};return s}let v=e=>Date.now()>1e3*e,g=new l.KU({url:"/graphql",requestPolicy:"cache-and-network",exchanges:[(0,i.HG)({resolvers:{Query:{invitations:(0,o.N)(),repositories:(0,o.N)()}},updates:{Mutation:{deleteInvitation(e,n,r,t){e.deleteInvitation&&r.inspectFields("Query").filter(e=>"invitations"===e.fieldName).forEach(e=>{r.updateQuery({query:f.lE,variables:e.arguments},e=>{var r;return(null==e?void 0:null===(r=e.invitations)||void 0===r?void 0:r.edges)&&(e.invitations.edges=e.invitations.edges.filter(e=>e.node.id!==n.id)),e})})},deleteRepository(e,n,r,t){e.deleteRepository&&r.inspectFields("Query").filter(e=>"repositories"===e.fieldName).forEach(e=>{r.updateQuery({query:f.S1,variables:e.arguments},e=>{var r;return(null==e?void 0:null===(r=e.repositories)||void 0===r?void 0:r.edges)&&(e.repositories.edges=e.repositories.edges.filter(e=>e.node.id!==n.id)),e})})}}}}),(0,t.M)(async e=>{let n=(0,d.bW)(),r=null==n?void 0:n.accessToken,t=null==n?void 0:n.refreshToken;return{addAuthToOperation:n=>r?e.appendHeaders(n,{Authorization:"Bearer ".concat(r)}):n,didAuthError:(e,n)=>e.graphQLErrors.some(e=>{var n;return(null==e?void 0:null===(n=e.extensions)||void 0===n?void 0:n.code)==="UNAUTHORIZED"}),willAuthError(e){let n=(0,d.bW)();if(r=null==n?void 0:n.accessToken,t=null==n?void 0:n.refreshToken,"mutation"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null===(n=e.name)||void 0===n?void 0:n.value)&&["tokenAuth","registerUser"].includes(e.name.value)})||t&&"mutation"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null==e?void 0:null===(n=e.name)||void 0===n?void 0:n.value)==="refreshToken"}))return!1;if(!r)return!0;try{let{exp:e}=(0,s.o)(r);return!e||v(e)}catch(e){return!0}},async refreshAuth(){if(t){var n;let i=await e.mutate(d.Dp,{refreshToken:t});(null===(n=i.data)||void 0===n?void 0:n.refreshToken)?(r=i.data.refreshToken.accessToken,t=i.data.refreshToken.refreshToken,(0,d.pC)({accessToken:r,refreshToken:t})):(0,d.Rn)()}else(0,d.Rn)()}}}),(0,l.Dk)({onError(e){e.message.startsWith("[GraphQL]")&&(e.message=e.message.replace("[GraphQL]","").trim())}}),l.Ek]})},57166:function(e,n,r){r.d(n,{DQ:function(){return u},GG:function(){return s},S1:function(){return o},lE:function(){return i},yB:function(){return a}});var t=r(60106);let i=(0,t.BX)("\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),o=(0,t.BX)("\n  query repositories($after: String, $before: String, $first: Int, $last: Int) {\n    repositories(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),s=(0,t.BX)("\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          finishedAt\n          exitCode\n          stdout\n          stderr\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),a=(0,t.BX)("\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n"),u=(0,t.BX)("\n  query ListJobs {\n    jobs\n  }\n")}}]);