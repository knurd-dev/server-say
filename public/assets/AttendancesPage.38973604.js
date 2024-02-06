import{Q as _,b as w,_ as v,C as b}from"./ConfirmDelete.041abbd4.js";import{r as h,K as C,N as k,o as Q,P as m,Q as u,R as n,S as s,T as i,U as t,V as r,$ as p,a0 as f,ak as q,W as x,A as $,aJ as g,M as d}from"./index.d3ad043f.js";import{Q as c}from"./QTd.1a8fab95.js";import{Q as y}from"./QTr.bdf9c68b.js";import{Q as D}from"./QPage.7bf2ba30.js";import{a as e}from"./helper.8e3deb34.js";import{d as M}from"./date.4199c5fc.js";import"./use-quasar.f628857e.js";import"./format.59a25017.js";import"./QCardActions.79877e99.js";import"./use-transition.5f5ddb9c.js";const V={class:"full-width"},A={class:"row q-col-gutter-sm"},T={class:"col-12 col-sm-6 col-md-4"},N={class:"col-6 col-sm-3 col-md-2"},z={class:"col-6 col-sm-3 col-md-2"},B={class:"q-pl-xs"},U={class:"row q-col-gutter-sm no-wrap"},E={class:"col-auto"},P={class:"col-auto"},X={__name:"AttendancesPage",setup(L){return h(null),C(()=>{e.list=[]}),k(()=>{e.list=[]}),Q(async()=>{await e.getList()}),(l,a)=>(m(),u(D,{class:"",padding:""},{default:n(()=>[s(w,{loading:t(e).loadingTable,pagination:t(e).pagination,"onUpdate:pagination":a[4]||(a[4]=o=>t(e).pagination=o),onRequest:t(e).getList,square:"",flat:"",bordered:"",rows:t(e).list,columns:t(e).columns,class:"full-width"},{top:n(()=>[i("div",V,[i("div",A,[i("div",T,[s(_,{outlined:"",dense:"",style:{"min-height":"50px"},modelValue:t(e).pagination.is_executive,"onUpdate:modelValue":[a[0]||(a[0]=o=>t(e).pagination.is_executive=o),a[1]||(a[1]=o=>t(e).getList({pagination:t(e).pagination}))],"map-options":"","emit-value":"",options:[{value:!1,label:"Member"},{value:!0,label:"Executive"}]},null,8,["modelValue"])]),i("div",N,[s(r,{"no-caps":"",class:"full-width",label:"Member",color:"accent",icon:"add",title:"Add Attendance",onClick:a[2]||(a[2]=()=>{t(e).reset(),l.$router.push({name:"attendance-form",params:{_id:"add"}})})})]),i("div",z,[s(r,{"no-caps":"",class:"full-width",color:"accent",icon:"new_label",title:"Executive Attendance",label:"Executive",onClick:a[3]||(a[3]=()=>{t(e).reset(),l.$router.push({name:"attendance-form",params:{_id:"add"},query:{executive:1}})})})])])])]),body:n(o=>[s(y,{props:o,onClick:R=>l.$router.push({name:"attendance-detail",params:{_id:o.row._id}})},{default:n(()=>[s(c,{style:{position:"relative"}},{default:n(()=>[i("div",B,[p(f(t(M).formatDate(o.row.date,"Do MMM, 'YY"))+" ",1),o.row.tag=="Activity"?(m(),u(q,{key:0,class:"absolute-top-left q-pl-xs q-pt-xs",name:"star",size:"11px",color:"primary"})):x("",!0)])]),_:2},1024),s(c,{"auto-width":""},{default:n(()=>[p(f(o.row.no_of_attendant),1)]),_:2},1024),s(c,{"auto-width":""},{default:n(()=>[i("div",U,[i("div",E,[$(s(r,{round:"",onClick:g(()=>{l.$router.push({name:"attendance-form",params:{_id:o.row._id}}),t(e).showAddEditForm=!0},["stop"]),color:"accent",size:l.$q.screen.lt.sm?"xs":"md",icon:"edit"},null,8,["onClick","size"]),[[b]])]),i("div",P,[s(r,{round:"",onClick:g(()=>{t(d).tempData={...o.row},t(d).tempData.title=`attendence on ${o.row.date}`,t(d).tempData.endpoint="attendances",t(d).showConfirmDeleteDialog=!0,t(d).pagination={...t(e).pagination}},["stop"]),color:"negative",size:l.$q.screen.lt.sm?"xs":"md",icon:"delete"},null,8,["onClick","size"])])])]),_:2},1024)]),_:2},1032,["props","onClick"])]),_:1},8,["loading","pagination","onRequest","rows","columns"]),s(v,{onUpdateTable:a[5]||(a[5]=o=>{t(e).list=o.data,t(e).pagination.rowsNumber=o.total})})]),_:1}))}};export{X as default};