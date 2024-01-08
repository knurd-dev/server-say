import{d}from"./date.c5abda58.js";import{F as c,ae as m,ah as u}from"./index.e5125957.js";const e=c({selecteDate:void 0,showAddEditForm:!1,loadingTable:!1,loadingSubmitButton:!1,is_executive:!1,selectedTag:"Fellowship",list:[],users:[],selectedList:[],pagination:{descending:!0,rowsPerPage:15,rowsNumber:0,page:0},columns:p(),form_columns:h(),form:b(),create:F,update:w,getList:g,reset:y,save:f});async function f(a,n){var r,l,t,o;let i=a.params.id;(r=a.query.executive)!=null,e.loadingTable=!0,e.loadingSubmitButton=!0;try{const s=await m.request({url:i!="add"?`faith-promises/${i}`:"faith-promises",method:i!="add"?"patch":"post",data:{faith_promise_data:e.users,month:e.selecteDate},params:{...e.pagination}});e.list=s.data.data,e.pagination.rowsNumber=s.data.total,e.showAddEditForm=!1,n.push({name:"faith-promises"})}catch(s){console.error(s.message),u.create((o=(t=(l=s.response)==null?void 0:l.data)==null?void 0:t.message)!=null?o:s==null?void 0:s.message)}e.loadingTable=!1,e.loadingSubmitButton=!1}async function g(a){var n,i,r,l,t,o;e.loadingTable=!0;try{a&&(e.pagination=a.pagination);const s=await m.get("faith-promises",{params:e.pagination});e.list=(i=(n=s.data)==null?void 0:n.data)!=null?i:[],e.pagination.rowsNumber=(r=s.data)==null?void 0:r.total}catch(s){console.error(s.message),u.create((o=(t=(l=s.response)==null?void 0:l.data)==null?void 0:t.message)!=null?o:s==null?void 0:s.message)}e.loadingTable=!1}function p(){return[{label:"Month",name:"month",align:"left",field:a=>d.formatDate(a.month,"MMMM, YYYY")},{label:"Amount",name:"amount",align:"left",field:a=>a.total_amount},{name:"actions",label:""}]}function h(){return[{label:"name",name:"name",align:"left",field:a=>{var n,i;return(i=a.name)!=null?i:(n=a.user)==null?void 0:n.name}},{label:"Amount",name:"amount"}]}function b(){return{id:null,name:"",phone:"",corp:null}}function y(){e.form={id:null,name:"",phone:"",corp:null}}async function F(a){var n,i,r,l,t;try{const o=await m.get(`faith-promises/create?executive=${(n=a.query.executive)!=null?n:0}`);e.users=(i=o.data)!=null?i:[],e.is_executive=!!a.query.executive}catch(o){console.error(o.message),u.create((t=(l=(r=o.response)==null?void 0:r.data)==null?void 0:l.message)!=null?t:o==null?void 0:o.message)}}async function w(a){var n,i,r,l;try{e.loadingTable=!0;const t=await m.get(`faith-promises/${a}/edit`);e.users=(n=t.data.details)!=null?n:[],e.selecteDate=t.data.month,e.loadingTable=!1}catch(t){e.loadingTable=!1,console.error(t.message),u.create((l=(r=(i=t.response)==null?void 0:i.data)==null?void 0:r.message)!=null?l:t==null?void 0:t.message)}}export{e as f};
