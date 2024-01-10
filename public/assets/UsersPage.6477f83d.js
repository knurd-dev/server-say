import{F as C,ae as _,ah as w,o as h,L as Q,M as y,N as l,O as s,af as r,X as F,Q as e,A as v,R as m,G as T,J as x,I as u}from"./index.66738bff.js";import{Q as S}from"./QTd.2207540f.js";import{C as V,Q as U,a as N,b as A,_ as B}from"./ConfirmDelete.334ecd6e.js";import{a as D,b as k,Q as q}from"./QPage.09d4b7cf.js";import{Q as E,l as P}from"./format.163352c0.js";import{Q as g}from"./QInput.35f5ec64.js";import{Q as L}from"./QCardActions.b506d104.js";import{d as b}from"./helper.cd8f94b5.js";import"./use-dark.762d7bde.js";import"./use-transition.4eecf650.js";const o=C({list:[],pagination:{rowsPerPage:15,rowsNumber:0,page:0,descending:!0},columns:R(),getList:M,showAddEditForm:!1,form:z(),reset:I,add:$,loadingTable:!1,loadingSubmitButton:!1});async function $(){var n,d,t;o.loadingTable=!0,o.loadingSubmitButton=!0;try{const a=await _.request({url:o.form._id?`users/${o.form._id}`:"users",method:o.form._id?"patch":"post",data:{...o.form},params:{...o.pagination}});o.list=a.data.data,o.pagination.rowsNumber=a.data.total,o.showAddEditForm=!1}catch(a){console.error(a.message),w.create((t=(d=(n=a.response)==null?void 0:n.data)==null?void 0:d.message)!=null?t:a==null?void 0:a.message)}o.loadingTable=!1,o.loadingSubmitButton=!1}async function M(n){var d,t,a,p,c,f;o.loadingTable=!0;try{n&&(o.pagination=n.pagination);const i=await _.get("users",{params:o.pagination});o.list=(t=(d=i.data)==null?void 0:d.data)!=null?t:[],o.pagination.rowsNumber=(a=i.data)==null?void 0:a.total}catch(i){console.error(i.message),w.create((f=(c=(p=i.response)==null?void 0:p.data)==null?void 0:c.message)!=null?f:i==null?void 0:i.message)}o.loadingTable=!1}function R(){return[{name:"name",label:"name",align:"left",field:n=>n.name},{name:"phone",label:"phone",align:"left",field:n=>n.phone},{name:"actions",label:""}]}function z(){return{id:null,name:"",phone:"",corp:null,designations:[]}}function I(){o.form={id:null,name:"",phone:"",corp:null}}const G={class:"col"},H={class:"col-auto"},J={__name:"UserForm",setup(n){return h(()=>{b.getList()}),(d,t)=>(Q(),y(N,{"no-backdrop-dismiss":"",modelValue:e(o).showAddEditForm,"onUpdate:modelValue":t[3]||(t[3]=a=>e(o).showAddEditForm=a)},{default:l(()=>[s(D,{style:{"min-width":"min(400px, 100vw)"}},{default:l(()=>[s(E,{class:"bg-primary text-white"},{default:l(()=>[s(P,{class:"row"},{default:l(()=>{var a;return[r("div",G,F((a=e(o).form)!=null&&a._id?"Edit":"Add")+" User",1),r("div",H,[v(s(m,{round:"",flat:"",icon:"close"},null,512),[[V]])])]}),_:1})]),_:1}),s(k,null,{default:l(()=>[s(L,{onSubmit:e(o).add},{default:l(()=>[s(g,{autofocus:"",modelValue:e(o).form.name,"onUpdate:modelValue":t[0]||(t[0]=a=>e(o).form.name=a),type:"text",label:"Name",rules:[a=>!!a||"Name is required"]},null,8,["modelValue","rules"]),s(g,{modelValue:e(o).form.phone,"onUpdate:modelValue":t[1]||(t[1]=a=>e(o).form.phone=a),type:"text",label:"Phone",rules:[a=>!!a||"Phone is required"]},null,8,["modelValue","rules"]),s(U,{outlined:"","emit-value":"","map-options":"",multiple:"",modelValue:e(o).form.designations,"onUpdate:modelValue":t[2]||(t[2]=a=>e(o).form.designations=a),options:e(b).list,label:"Designation",hint:"","option-label":"name","option-value":"_id"},null,8,["modelValue","options"]),s(m,{loading:e(o).loadingSubmitButton,type:"submit",color:"primary",class:"full-width q-mt-md",label:"Submit"},null,8,["loading"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},O={class:"full-width row"},X=r("div",{class:"col"},null,-1),j={class:"col-auto"},K={class:"row q-col-gutter-sm",style:{"min-width":"100px"}},W={class:"col-auto"},Y={class:"col-auto"},uo={__name:"UsersPage",setup(n){return T(()=>{o.list=[]}),x(()=>{o.list=[]}),h(async()=>{await o.getList()}),(d,t)=>(Q(),y(q,{class:"",padding:""},{default:l(()=>[s(A,{loading:e(o).loadingTable,pagination:e(o).pagination,"onUpdate:pagination":t[1]||(t[1]=a=>e(o).pagination=a),onRequest:e(o).getList,square:"",flat:"",bordered:"",rows:e(o).list,columns:e(o).columns,class:"full-width"},{top:l(()=>[r("div",O,[X,r("div",j,[s(m,{rounded:"",color:"accent",icon:"add",title:"Add User",onClick:t[0]||(t[0]=()=>{e(o).reset(),e(o).showAddEditForm=!0})})])])]),"body-cell-actions":l(a=>[s(S,{"auto-width":"",props:a},{default:l(()=>[r("div",K,[r("div",W,[v(s(m,{round:"",onClick:()=>{e(o).form={...a.row},e(o).showAddEditForm=!0},color:"accent",size:"12px",icon:"edit"},null,8,["onClick"]),[[V]])]),r("div",Y,[s(m,{round:"",onClick:()=>{e(u).tempData={...a.row},e(u).tempData.title=a.row.name,e(u).tempData.endpoint="users",e(u).showConfirmDeleteDialog=!0,e(u).pagination={...e(o).pagination}},color:"negative",size:"12px",icon:"delete"},null,8,["onClick"])])])]),_:2},1032,["props"])]),_:1},8,["loading","pagination","onRequest","rows","columns"]),s(J),s(B,{onUpdateTable:t[2]||(t[2]=a=>{e(o).list=a.data,e(o).pagination.rowsNumber=a.total})})]),_:1}))}};export{uo as default};
