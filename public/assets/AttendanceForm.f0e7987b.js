import{Q as p}from"./QInput.7a5bb95a.js";import{Q as f,b as g,_}from"./ConfirmDelete.ca6af9ea.js";import{ad as w,r as v,f as b,J as y,o as Q,L as T,M as V,N as n,O as l,af as a,Q as o,R as k}from"./index.5ef8b902.js";import{Q as L}from"./QPage.81e6af24.js";import{a as e}from"./helper.7675f3d4.js";import{d as M}from"./date.2b7c7fcb.js";import"./QCardActions.7c0da824.js";import"./use-dark.b2f0c4d5.js";import"./format.f7460066.js";import"./use-transition.de55f996.js";const C={class:"full-width"},R={class:"row q-col-gutter-sm"},B={class:"col-12 col-sm-6 col-md-4"},x={class:"col-12 col-sm-6 col-md-4"},N={class:"col-12 col-sm-6 col-md-4"},P={__name:"AttendanceForm",setup(U){const i=w(),r=v(null),c=b(()=>e.is_executive?(e.selectedTag="Council",["Council","Activity"]):(e.selectedTag="Meeting",["Meeting","Activity"]));y(()=>{e.users=[],e.selectedList=[],M.formatDate(new Date,"ddd")=="Mon"&&(e.selectedTag="Monday")}),Q(async()=>{i.params._id=="add"?await e.create(i):await e.update(i.params._id,i)});function u(d,t){const s=e.selectedList.findIndex(m=>m._id==t._id);s>=0?e.selectedList.splice(s,1):e.selectedList.push(t)}return(d,t)=>(T(),V(L,{class:"",padding:""},{default:n(()=>[l(g,{ref_key:"tableRef",ref:r,square:"",flat:"",bordered:"",filter:o(e).pagination.filter,selection:"multiple",onRowClick:u,loading:o(e).loadingTable,rows:o(e).users,columns:o(e).form_columns,"rows-per-page-options":[0],"hide-pagination":"",class:"full-width",selected:o(e).selectedList,"onUpdate:selected":t[3]||(t[3]=s=>o(e).selectedList=s),"row-key":"_id"},{top:n(()=>[a("div",C,[a("div",R,[a("div",B,[l(p,{dense:"",outlined:"",modelValue:o(e).pagination.filter,"onUpdate:modelValue":t[0]||(t[0]=s=>o(e).pagination.filter=s),label:"Search"},null,8,["modelValue"])]),a("div",x,[l(f,{dense:"",outlined:"",options:c.value,modelValue:o(e).selectedTag,"onUpdate:modelValue":t[1]||(t[1]=s=>o(e).selectedTag=s)},null,8,["options","modelValue"])]),a("div",N,[l(k,{class:"full-width",onClick:t[2]||(t[2]=s=>o(e).save(d.$route,d.$router)),label:"save",color:"primary"})])])])]),_:1},8,["filter","loading","rows","columns","selected"]),l(_,{onUpdateTable:t[4]||(t[4]=s=>{o(e).list=s.data,o(e).pagination.rowsNumber=s.total})})]),_:1}))}};export{P as default};