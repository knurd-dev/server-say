import{r as p,G as d,J as u,o as c,L as m,M as f,N as n,O as i,af as a,R as l,Q as e,A as _,S as g}from"./index.e5125957.js";import{Q as h}from"./QTd.16e28931.js";import{b as w,_ as k,C}from"./ConfirmDelete.dd6d46a4.js";import{Q as v}from"./QPage.6fbce2e0.js";import{f as o}from"./helper.b2890975.js";import"./use-dark.2ec33909.js";import"./format.d7a04122.js";import"./QCardActions.79831d6d.js";import"./use-transition.91f38473.js";import"./date.c5abda58.js";const B={class:"full-width"},Q={class:"row q-col-gutter-sm"},b=a("div",{class:"col"},null,-1),D={class:"col-auto"},H={class:"row q-col-gutter-sm"},N={class:"col-auto"};const E={__name:"FaithPromisePage",setup(q){return p(null),d(()=>{o.list=[]}),u(()=>{o.list=[]}),c(async()=>{await o.getList()}),(r,s)=>(m(),f(v,{class:"",padding:""},{default:n(()=>[i(w,{loading:e(o).loadingTable,pagination:e(o).pagination,"onUpdate:pagination":s[1]||(s[1]=t=>e(o).pagination=t),onRequest:e(o).getList,square:"",flat:"",bordered:"",rows:e(o).list,columns:e(o).columns,class:"full-width"},{top:n(()=>[a("div",B,[a("div",Q,[b,a("div",D,[i(l,{rounded:"",color:"accent",icon:"add",title:"Add Faith Promise",onClick:s[0]||(s[0]=()=>{e(o).reset(),r.$router.push({name:"faith-promise-form",params:{id:"add"}})})})])])])]),"body-cell-actions":n(t=>[i(h,{"auto-width":"",props:t},{default:n(()=>[a("div",H,[a("div",N,[_(i(l,{round:"",onClick:()=>{r.$router.push({name:"faith-promise-form",params:{id:t.row.id}})},color:"accent",size:"12px",icon:"edit"},null,8,["onClick"]),[[C]])]),g("",!0)])]),_:2},1032,["props"])]),_:1},8,["loading","pagination","onRequest","rows","columns"]),i(k,{onUpdateTable:s[2]||(s[2]=t=>{e(o).list=t.data,e(o).pagination.rowsNumber=t.total})})]),_:1}))}};export{E as default};
