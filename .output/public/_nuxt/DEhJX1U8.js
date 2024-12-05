import{i as T,j as N,k as O,l as P,n as V,r as y,s as w,A as B,c as k,a as t,B as E,d as m,C as f,D as v,t as C,x as q,y as I,o as _}from"./B6x4_DXj.js";import{u as S}from"./CX6VZ4dE.js";import{f as U,u as A,d as D}from"./DmP7V_PI.js";import{g as H,b as Q}from"./DDHX_lXK.js";function F(r,s){const{chainId:a,...u}=s,c=r.getClient({chainId:a});return H(c,Q,"getTransaction")(u)}function M(r,s={}){return{async queryFn({queryKey:a}){const{blockHash:u,blockNumber:c,blockTag:n,hash:l,index:p}=a[1];if(!u&&!c&&!n&&!l)throw new Error("blockHash, blockNumber, blockTag, or hash is required");if(!l&&!p)throw new Error("index is required for blockHash, blockNumber, or blockTag");const{scopeKey:g,...o}=a[1];return F(r,o)},queryKey:j(s)}}function j(r={}){return["transaction",U(r)]}function K(r={}){const s=T(()=>D(r)),a=N(s),u=O({config:a}),c=T(()=>{const{blockHash:n,blockNumber:l,blockTag:p,chainId:g=u.value,hash:o,query:i={}}=s.value,x=M(a,{...s.value,chainId:g}),h=!!(!(n&&l&&p&&o)&&(i.enabled??!0));return{...i,...x,enabled:h}});return A(c)}const $={class:"max-w-2xl mx-auto p-4 space-y-8"},W={class:"bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"},z={class:"space-y-2"},G=["disabled"],J={class:"space-y-2"},L=["disabled"],R={class:"space-y-2"},X=["disabled"],Y={class:"space-y-2"},Z=["disabled"],ee={key:0,class:"text-red-500 text-sm mt-2"},te={class:"flex justify-end gap-4"},oe=["disabled"],se=["disabled"],ae={key:0,class:"inline-block animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white"},de=P({__name:"create",async setup(r){let s,a;const{address:u,status:c}=V();K();const n=y(""),l=y(""),p=y(""),g=y(60),o=y(!1),i=y(null);c.value==="disconnected"&&w("/");const x=([s,a]=B(()=>S()),s=await s,a(),s),h=async()=>{if(!u.value){i.value="Please connect your wallet first";return}i.value=null,o.value=!0;try{const b=await x.createPoll({title:n.value,optionOne:l.value,optionTwo:p.value,durationInMinutes:BigInt(g.value)});if(console.log("Transaction receipt:",b),b.status==="success")await new Promise(e=>setTimeout(e,1e3)),w("/");else throw new Error("Transaction failed")}catch(b){console.error("Error creating poll:",b),i.value=b instanceof Error?b.message:"Failed to create poll"}finally{o.value=!1}};return(b,e)=>(_(),k("div",$,[t("div",W,[e[9]||(e[9]=t("h1",{class:"text-xl font-bold mb-6"},"Create New Poll",-1)),t("form",{onSubmit:E(h,["prevent"]),class:"space-y-6"},[t("div",z,[e[5]||(e[5]=t("label",{class:"block text-sm font-medium text-gray-200"},[m(" Poll Title "),t("span",{class:"text-red-500"},"*")],-1)),f(t("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>n.value=d),type:"text",placeholder:"What's your question?",disabled:o.value,required:"",maxlength:"100",class:"w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"},null,8,G),[[v,n.value]])]),t("div",J,[e[6]||(e[6]=t("label",{class:"block text-sm font-medium text-gray-200"},[m(" Option 1 "),t("span",{class:"text-red-500"},"*")],-1)),f(t("input",{"onUpdate:modelValue":e[1]||(e[1]=d=>l.value=d),type:"text",placeholder:"First option",disabled:o.value,required:"",maxlength:"50",class:"w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"},null,8,L),[[v,l.value]])]),t("div",R,[e[7]||(e[7]=t("label",{class:"block text-sm font-medium text-gray-200"},[m(" Option 2 "),t("span",{class:"text-red-500"},"*")],-1)),f(t("input",{"onUpdate:modelValue":e[2]||(e[2]=d=>p.value=d),type:"text",placeholder:"Second option",disabled:o.value,required:"",maxlength:"50",class:"w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"},null,8,X),[[v,p.value]])]),t("div",Y,[e[8]||(e[8]=t("label",{class:"block text-sm font-medium text-gray-200"},[m(" Duration (minutes) "),t("span",{class:"text-red-500"},"*")],-1)),f(t("input",{"onUpdate:modelValue":e[3]||(e[3]=d=>g.value=d),type:"number",min:1,max:10080,disabled:o.value,required:"",class:"w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"},null,8,Z),[[v,g.value]])]),i.value?(_(),k("div",ee,C(i.value),1)):q("",!0),t("div",te,[t("button",{type:"button",onClick:e[4]||(e[4]=d=>I(w)("/")),disabled:o.value,class:"px-4 py-2 rounded-lg text-gray-300 hover:text-white bg-gray-700/50 hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"}," Cancel ",8,oe),t("button",{type:"submit",disabled:o.value,class:"px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"},[o.value?(_(),k("span",ae)):q("",!0),m(" "+C(o.value?"Creating...":"Create Poll"),1)],8,se)])],32)])]))}});export{de as default};