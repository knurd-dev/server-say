import{F as g,ae as d,ah as m}from"./index.66738bff.js";const a=g({list:[],pagination:{rowsPerPage:15,rowsNumber:0,page:0,descending:!1,orderBy:"order"},columns:f(),getList:c,showAddEditForm:!1,form:p(),reset:b,add:u,loadingTable:!1,loadingSubmitButton:!1});async function u(){var n,o,i;a.loadingTable=!0,a.loadingSubmitButton=!0;try{const e=await d.request({url:a.form._id?`designations/${a.form._id}`:"designations",method:a.form._id?"patch":"post",data:{...a.form},params:{...a.pagination}});a.list=e.data.data,a.pagination.rowsNumber=e.data.total,a.showAddEditForm=!1}catch(e){console.error(e.message),m.create((i=(o=(n=e.response)==null?void 0:n.data)==null?void 0:o.message)!=null?i:e==null?void 0:e.message)}a.loadingTable=!1,a.loadingSubmitButton=!1}async function c(n){var o,i,e,s,r,l;a.loadingTable=!0;try{n&&(a.pagination=n.pagination);const t=await d.get("designations",{params:a.pagination});a.list=(i=(o=t.data)==null?void 0:o.data)!=null?i:[],a.pagination.rowsNumber=(e=t.data)==null?void 0:e.total}catch(t){console.error(t.message),m.create((l=(r=(s=t.response)==null?void 0:s.data)==null?void 0:r.message)!=null?l:t==null?void 0:t.message)}a.loadingTable=!1}function f(){return[{name:"name",label:"name",align:"left",field:n=>n.name},{name:"actions",label:""}]}function p(){return{id:null,name:"",phone:"",corp:null}}function b(){a.form={id:null,name:"",phone:"",corp:null}}export{a as d};
