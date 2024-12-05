var lt=i=>{throw TypeError(i)};var Z=(i,t,e)=>t.has(i)||lt("Cannot "+e);var s=(i,t,e)=>(Z(i,t,"read from private field"),e?e.call(i):t.get(i)),p=(i,t,e)=>t.has(i)?lt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),u=(i,t,e,r)=>(Z(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e),d=(i,t,e)=>(Z(i,t,"access private method"),e);import{S as Qt,E as ft,G as C,H as z,I as $,J as jt,K as dt,L as pt,M as Et,N as Dt,O as Ft,P as bt,Q as Ut,R as Tt,i as St,T as Mt,U as xt,p as J,V as yt,W as Lt,X as gt,Y as _t,Z as Ct,y as tt}from"./B6x4_DXj.js";var g,n,B,y,x,A,P,S,q,k,K,L,_,Q,H,h,N,et,st,it,rt,nt,at,ot,wt,vt,At=(vt=class extends Qt{constructor(t,e){super();p(this,h);p(this,g);p(this,n);p(this,B);p(this,y);p(this,x);p(this,A);p(this,P);p(this,S);p(this,q);p(this,k);p(this,K);p(this,L);p(this,_);p(this,Q);p(this,H,new Set);this.options=e,u(this,g,t),u(this,S,null),u(this,P,ft()),this.options.experimental_prefetchInRender||s(this,P).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,n).addObserver(this),Ot(s(this,n),this.options)?d(this,h,N).call(this):this.updateResult(),d(this,h,rt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ht(s(this,n),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ht(s(this,n),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,d(this,h,nt).call(this),d(this,h,at).call(this),s(this,n).removeObserver(this)}setOptions(t,e){const r=this.options,o=s(this,n);if(this.options=s(this,g).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof C(this.options.enabled,s(this,n))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");d(this,h,ot).call(this),s(this,n).setOptions(this.options),r._defaulted&&!z(this.options,r)&&s(this,g).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,n),observer:this});const c=this.hasListeners();c&&mt(s(this,n),o,this.options,r)&&d(this,h,N).call(this),this.updateResult(e),c&&(s(this,n)!==o||C(this.options.enabled,s(this,n))!==C(r.enabled,s(this,n))||$(this.options.staleTime,s(this,n))!==$(r.staleTime,s(this,n)))&&d(this,h,et).call(this);const l=d(this,h,st).call(this);c&&(s(this,n)!==o||C(this.options.enabled,s(this,n))!==C(r.enabled,s(this,n))||l!==s(this,Q))&&d(this,h,it).call(this,l)}getOptimisticResult(t){const e=s(this,g).getQueryCache().build(s(this,g),t),r=this.createResult(e,t);return Kt(this,r)&&(u(this,y,r),u(this,A,this.options),u(this,x,s(this,n).state)),r}getCurrentResult(){return s(this,y)}trackResult(t,e){const r={};return Object.keys(t).forEach(o=>{Object.defineProperty(r,o,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(o),e==null||e(o),t[o])})}),r}trackProp(t){s(this,H).add(t)}getCurrentQuery(){return s(this,n)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=s(this,g).defaultQueryOptions(t),r=s(this,g).getQueryCache().build(s(this,g),e);return r.fetch().then(()=>this.createResult(r,e))}fetch(t){return d(this,h,N).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,y)))}createResult(t,e){var Y;const r=s(this,n),o=this.options,c=s(this,y),l=s(this,x),O=s(this,A),E=t!==r?t.state:s(this,B),{state:w}=t;let f={...w},I=!1,a;if(e._optimisticResults){const b=this.hasListeners(),T=!b&&Ot(t,e),M=b&&mt(t,r,e,o);(T||M)&&(f={...f,...Ft(w.data,t.options)}),e._optimisticResults==="isRestoring"&&(f.fetchStatus="idle")}let{error:v,errorUpdatedAt:D,status:m}=f;if(e.select&&f.data!==void 0)if(c&&f.data===(l==null?void 0:l.data)&&e.select===s(this,q))a=s(this,k);else try{u(this,q,e.select),a=e.select(f.data),a=bt(c==null?void 0:c.data,a,e),u(this,k,a),u(this,S,null)}catch(b){u(this,S,b)}else a=f.data;if(e.placeholderData!==void 0&&a===void 0&&m==="pending"){let b;if(c!=null&&c.isPlaceholderData&&e.placeholderData===(O==null?void 0:O.placeholderData))b=c.data;else if(b=typeof e.placeholderData=="function"?e.placeholderData((Y=s(this,K))==null?void 0:Y.state.data,s(this,K)):e.placeholderData,e.select&&b!==void 0)try{b=e.select(b),u(this,S,null)}catch(T){u(this,S,T)}b!==void 0&&(m="success",a=bt(c==null?void 0:c.data,b,e),I=!0)}s(this,S)&&(v=s(this,S),a=s(this,k),D=Date.now(),m="error");const F=f.fetchStatus==="fetching",U=m==="pending",V=m==="error",G=U&&F,X=a!==void 0,R={status:m,fetchStatus:f.fetchStatus,isPending:U,isSuccess:m==="success",isError:V,isInitialLoading:G,isLoading:G,data:a,dataUpdatedAt:f.dataUpdatedAt,error:v,errorUpdatedAt:D,failureCount:f.fetchFailureCount,failureReason:f.fetchFailureReason,errorUpdateCount:f.errorUpdateCount,isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0,isFetchedAfterMount:f.dataUpdateCount>E.dataUpdateCount||f.errorUpdateCount>E.errorUpdateCount,isFetching:F,isRefetching:F&&!U,isLoadingError:V&&!X,isPaused:f.fetchStatus==="paused",isPlaceholderData:I,isRefetchError:V&&X,isStale:ut(t,e),refetch:this.refetch,promise:s(this,P)};if(this.options.experimental_prefetchInRender){const b=W=>{R.status==="error"?W.reject(R.error):R.data!==void 0&&W.resolve(R.data)},T=()=>{const W=u(this,P,R.promise=ft());b(W)},M=s(this,P);switch(M.status){case"pending":t.queryHash===r.queryHash&&b(M);break;case"fulfilled":(R.status==="error"||R.data!==M.value)&&T();break;case"rejected":(R.status!=="error"||R.error!==M.reason)&&T();break}}return R}updateResult(t){const e=s(this,y),r=this.createResult(s(this,n),this.options);if(u(this,x,s(this,n).state),u(this,A,this.options),s(this,x).data!==void 0&&u(this,K,s(this,n)),z(r,e))return;u(this,y,r);const o={},c=()=>{if(!e)return!0;const{notifyOnChangeProps:l}=this.options,O=typeof l=="function"?l():l;if(O==="all"||!O&&!s(this,H).size)return!0;const j=new Set(O??s(this,H));return this.options.throwOnError&&j.add("error"),Object.keys(s(this,y)).some(E=>{const w=E;return s(this,y)[w]!==e[w]&&j.has(w)})};(t==null?void 0:t.listeners)!==!1&&c()&&(o.listeners=!0),d(this,h,wt).call(this,{...o,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&d(this,h,rt).call(this)}},g=new WeakMap,n=new WeakMap,B=new WeakMap,y=new WeakMap,x=new WeakMap,A=new WeakMap,P=new WeakMap,S=new WeakMap,q=new WeakMap,k=new WeakMap,K=new WeakMap,L=new WeakMap,_=new WeakMap,Q=new WeakMap,H=new WeakMap,h=new WeakSet,N=function(t){d(this,h,ot).call(this);let e=s(this,n).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(jt)),e},et=function(){d(this,h,nt).call(this);const t=$(this.options.staleTime,s(this,n));if(dt||s(this,y).isStale||!pt(t))return;const r=Et(s(this,y).dataUpdatedAt,t)+1;u(this,L,setTimeout(()=>{s(this,y).isStale||this.updateResult()},r))},st=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,n)):this.options.refetchInterval)??!1},it=function(t){d(this,h,at).call(this),u(this,Q,t),!(dt||C(this.options.enabled,s(this,n))===!1||!pt(s(this,Q))||s(this,Q)===0)&&u(this,_,setInterval(()=>{(this.options.refetchIntervalInBackground||Dt.isFocused())&&d(this,h,N).call(this)},s(this,Q)))},rt=function(){d(this,h,et).call(this),d(this,h,it).call(this,d(this,h,st).call(this))},nt=function(){s(this,L)&&(clearTimeout(s(this,L)),u(this,L,void 0))},at=function(){s(this,_)&&(clearInterval(s(this,_)),u(this,_,void 0))},ot=function(){const t=s(this,g).getQueryCache().build(s(this,g),this.options);if(t===s(this,n))return;const e=s(this,n);u(this,n,t),u(this,B,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},wt=function(t){Ut.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(s(this,y))}),s(this,g).getQueryCache().notify({query:s(this,n),type:"observerResultsUpdated"})})},vt);function kt(i,t){return C(t.enabled,i)!==!1&&i.state.data===void 0&&!(i.state.status==="error"&&t.retryOnMount===!1)}function Ot(i,t){return kt(i,t)||i.state.data!==void 0&&ht(i,t,t.refetchOnMount)}function ht(i,t,e){if(C(t.enabled,i)!==!1){const r=typeof e=="function"?e(i):e;return r==="always"||r!==!1&&ut(i,t)}return!1}function mt(i,t,e,r){return(i!==t||C(r.enabled,i)===!1)&&(!e.suspense||i.state.status!=="error")&&ut(i,e)}function ut(i,t){return C(t.enabled,i)!==!1&&i.isStaleByTime($(t.staleTime,i))}function Kt(i,t){return!z(i.getCurrentResult(),t)}function Ht(i,t,e){const r=Tt(),o=St(()=>{const a=Mt(t);typeof a.enabled=="function"&&(a.enabled=a.enabled());const v=r.defaultQueryOptions(a);return v._optimisticResults=r.isRestoring.value?"isRestoring":"optimistic",v}),c=new i(r,o.value),l=xt(c.getCurrentResult());let O=()=>{};J(r.isRestoring,a=>{a||(O(),O=c.subscribe(v=>{yt(l,v)}))},{immediate:!0});const j=()=>{c.setOptions(o.value),yt(l,c.getCurrentResult())};J(o,j),Lt(()=>{O()});const E=(...a)=>(j(),l.refetch(...a)),w=()=>new Promise((a,v)=>{let D=()=>{};const m=()=>{if(o.value.enabled!==!1){c.setOptions(o.value);const F=c.getOptimisticResult(o.value);F.isStale?(D(),c.fetchOptimistic(o.value).then(a,U=>{gt(o.value.throwOnError,[U,c.getCurrentQuery()])?v(U):a(c.getCurrentResult())})):(D(),a(F))}};m(),D=J(o,m)});J(()=>l.error,a=>{if(l.isError&&!l.isFetching&&gt(o.value.throwOnError,[a,c.getCurrentQuery()]))throw a});const I=_t(l);for(const a in l)typeof l[a]=="function"&&(I[a]=l[a]);return I.suspense=w,I.refetch=E,I}function Wt(i,t){return Ht(At,i)}function ct(i,t){if(t){const e=t(i);if(e===void 0&&Ct(i)||e!==void 0)return e}if(Array.isArray(i))return i.map(e=>ct(e,t));if(typeof i=="object"&&Bt(i)){const e=Object.entries(i).map(([r,o])=>[r,ct(o,t)]);return Object.fromEntries(e)}return i}function Nt(i){return ct(i,t=>{if(Ct(t))return Nt(tt(t))})}function Bt(i){if(Object.prototype.toString.call(i)!=="[object Object]")return!1;const t=Object.getPrototypeOf(i);return t===null||t===Object.prototype}function qt(i){return JSON.stringify(i,(t,e)=>Vt(e)?Object.keys(e).sort().reduce((r,o)=>(r[o]=e[o],r),{}):typeof e=="bigint"?e.toString():e)}function Vt(i){if(!Rt(i))return!1;const t=i.constructor;if(typeof t>"u")return!0;const e=t.prototype;return!(!Rt(e)||!e.hasOwnProperty("isPrototypeOf"))}function Rt(i){return Object.prototype.toString.call(i)==="[object Object]"}function se(i){const{_defaulted:t,behavior:e,gcTime:r,initialData:o,initialDataUpdatedAt:c,maxPages:l,meta:O,networkMode:j,queryFn:E,queryHash:w,queryKey:f,queryKeyHashFn:I,retry:a,retryDelay:v,structuralSharing:D,getPreviousPageParam:m,getNextPageParam:F,initialPageParam:U,_optimisticResults:V,enabled:G,notifyOnChangeProps:X,placeholderData:It,refetchInterval:R,refetchIntervalInBackground:Y,refetchOnMount:b,refetchOnReconnect:T,refetchOnWindowFocus:M,retryOnMount:W,select:Jt,staleTime:$t,suspense:Gt,throwOnError:Xt,config:Yt,connector:Zt,query:zt,...Pt}=i;return Pt}function ie(i){const t=St(()=>({...tt(i),queryKeyHashFn:qt})),e=Wt(t);return e.queryKey=tt(t).queryKey,e}export{Nt as d,se as f,ie as u};