import{f as c,c as ot,r as k,w as U,h as i,ah as K,C as rt,g as ut,aE as it,b as Te,V as H}from"./index.d3ad043f.js";import{u as st,a as ct}from"./use-quasar.f628857e.js";import{f as dt,l as vt,j as ft}from"./QCardActions.79877e99.js";import{t as mt,a as Fe,f as ht,g as yt,j as ge,_ as gt}from"./date.4199c5fc.js";import{p as B}from"./format.59a25017.js";function _t(){const n=new Map;return{getCache:function(D,_){return n[D]===void 0?n[D]=_:n[D]},getCacheWithFn:function(D,_){return n[D]===void 0?n[D]=_():n[D]}}}const bt=["gregorian","persian"],Dt={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:n=>bt.includes(n),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},wt=["update:modelValue"];function Y(n){return n.year+"/"+B(n.month)+"/"+B(n.day)}function Ct(n,D){const _=c(()=>n.disable!==!0&&n.readonly!==!0),L=c(()=>_.value===!0?0:-1),q=c(()=>{const m=[];return n.color!==void 0&&m.push(`bg-${n.color}`),n.textColor!==void 0&&m.push(`text-${n.textColor}`),m.join(" ")});function le(){return n.locale!==void 0?{...D.lang.date,...n.locale}:D.lang.date}function w(m){const $=new Date,j=m===!0?null:0;if(n.calendar==="persian"){const E=mt($);return{year:E.jy,month:E.jm,day:E.jd}}return{year:$.getFullYear(),month:$.getMonth()+1,day:$.getDate(),hour:j,minute:j,second:j,millisecond:j}}return{editable:_,tabindex:L,headerClass:q,getLocale:le,getCurrentDate:w}}const I=20,Mt=["Calendar","Years","Months"],Ie=n=>Mt.includes(n),_e=n=>/^-?[\d]+\/[0-1]\d$/.test(n),z=" \u2014 ";function S(n){return n.year+"/"+B(n.month)}var Yt=ot({name:"QDate",props:{...Dt,...dt,...st,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:_e},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:_e},navigationMaxYearMonth:{type:String,validator:_e},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Ie}},emits:[...wt,"rangeStart","rangeEnd","navigation"],setup(n,{slots:D,emit:_}){const{proxy:L}=ut(),{$q:q}=L,le=ct(n,q),{getCache:w}=_t(),{tabindex:m,headerClass:$,getLocale:j,getCurrentDate:E}=Ct(n,q);let G;const Be=vt(n),$e=ft(Be),oe=k(null),O=k(ke()),f=k(j()),Ee=c(()=>ke()),Ae=c(()=>j()),x=c(()=>E()),u=k(He(O.value,f.value)),b=k(n.defaultView),be=q.lang.rtl===!0?"right":"left",X=k(be.value),re=k(be.value),ue=u.value.year,Z=k(ue-ue%I-(ue<0?I:0)),g=k(null),Re=c(()=>{const e=n.landscape===!0?"landscape":"portrait";return`q-date q-date--${e} q-date--${e}-${n.minimal===!0?"minimal":"standard"}`+(le.value===!0?" q-date--dark q-dark":"")+(n.bordered===!0?" q-date--bordered":"")+(n.square===!0?" q-date--square no-border-radius":"")+(n.flat===!0?" q-date--flat no-shadow":"")+(n.disable===!0?" disabled":n.readonly===!0?" q-date--readonly":"")}),T=c(()=>n.color||"primary"),A=c(()=>n.textColor||"white"),p=c(()=>n.emitImmediately===!0&&n.multiple!==!0&&n.range!==!0),ie=c(()=>Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue!==null&&n.modelValue!==void 0?[n.modelValue]:[]),M=c(()=>ie.value.filter(e=>typeof e=="string").map(e=>ve(e,O.value,f.value)).filter(e=>e.dateHash!==null&&e.day!==null&&e.month!==null&&e.year!==null)),R=c(()=>{const e=t=>ve(t,O.value,f.value);return ie.value.filter(t=>it(t)===!0&&t.from!==void 0&&t.to!==void 0).map(t=>({from:e(t.from),to:e(t.to)})).filter(t=>t.from.dateHash!==null&&t.to.dateHash!==null&&t.from.dateHash<t.to.dateHash)}),ee=c(()=>n.calendar!=="persian"?e=>new Date(e.year,e.month-1,e.day):e=>{const t=Fe(e.year,e.month,e.day);return new Date(t.gy,t.gm-1,t.gd)}),se=c(()=>n.calendar==="persian"?Y:(e,t,a)=>ht(new Date(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond),t===void 0?O.value:t,a===void 0?f.value:a,e.year,e.timezoneOffset)),P=c(()=>M.value.length+R.value.reduce((e,t)=>e+1+yt(ee.value(t.to),ee.value(t.from)),0)),De=c(()=>{if(n.title!==void 0&&n.title!==null&&n.title.length!==0)return n.title;if(g.value!==null){const a=g.value.init,l=ee.value(a);return f.value.daysShort[l.getDay()]+", "+f.value.monthsShort[a.month-1]+" "+a.day+z+"?"}if(P.value===0)return z;if(P.value>1)return`${P.value} ${f.value.pluralDay}`;const e=M.value[0],t=ee.value(e);return isNaN(t.valueOf())===!0?z:f.value.headerTitle!==void 0?f.value.headerTitle(t,e):f.value.daysShort[t.getDay()]+", "+f.value.monthsShort[e.month-1]+" "+e.day}),Ne=c(()=>M.value.concat(R.value.map(t=>t.from)).sort((t,a)=>t.year-a.year||t.month-a.month)[0]),We=c(()=>M.value.concat(R.value.map(t=>t.to)).sort((t,a)=>a.year-t.year||a.month-t.month)[0]),we=c(()=>{if(n.subtitle!==void 0&&n.subtitle!==null&&n.subtitle.length!==0)return n.subtitle;if(P.value===0)return z;if(P.value>1){const e=Ne.value,t=We.value,a=f.value.monthsShort;return a[e.month-1]+(e.year!==t.year?" "+e.year+z+a[t.month-1]+" ":e.month!==t.month?z+a[t.month-1]:"")+" "+t.year}return M.value[0].year}),te=c(()=>{const e=[q.iconSet.datetime.arrowLeft,q.iconSet.datetime.arrowRight];return q.lang.rtl===!0?e.reverse():e}),Ce=c(()=>n.firstDayOfWeek!==void 0?Number(n.firstDayOfWeek):f.value.firstDayOfWeek),ze=c(()=>{const e=f.value.daysShort,t=Ce.value;return t>0?e.slice(t,7).concat(e.slice(0,t)):e}),V=c(()=>{const e=u.value;return n.calendar!=="persian"?new Date(e.year,e.month,0).getDate():ge(e.year,e.month)}),Le=c(()=>typeof n.eventColor=="function"?n.eventColor:()=>n.eventColor),h=c(()=>{if(n.navigationMinYearMonth===void 0)return null;const e=n.navigationMinYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),y=c(()=>{if(n.navigationMaxYearMonth===void 0)return null;const e=n.navigationMaxYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),ce=c(()=>{const e={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return h.value!==null&&h.value.year>=u.value.year&&(e.year.prev=!1,h.value.year===u.value.year&&h.value.month>=u.value.month&&(e.month.prev=!1)),y.value!==null&&y.value.year<=u.value.year&&(e.year.next=!1,y.value.year===u.value.year&&y.value.month<=u.value.month&&(e.month.next=!1)),e}),ae=c(()=>{const e={};return M.value.forEach(t=>{const a=S(t);e[a]===void 0&&(e[a]=[]),e[a].push(t.day)}),e}),Me=c(()=>{const e={};return R.value.forEach(t=>{const a=S(t.from),l=S(t.to);if(e[a]===void 0&&(e[a]=[]),e[a].push({from:t.from.day,to:a===l?t.to.day:void 0,range:t}),a<l){let o;const{year:d,month:r}=t.from,s=r<12?{year:d,month:r+1}:{year:d+1,month:1};for(;(o=S(s))<=l;)e[o]===void 0&&(e[o]=[]),e[o].push({from:void 0,to:o===l?t.to.day:void 0,range:t}),s.month++,s.month>12&&(s.year++,s.month=1)}}),e}),Q=c(()=>{if(g.value===null)return;const{init:e,initHash:t,final:a,finalHash:l}=g.value,[o,d]=t<=l?[e,a]:[a,e],r=S(o),s=S(d);if(r!==C.value&&s!==C.value)return;const v={};return r===C.value?(v.from=o.day,v.includeFrom=!0):v.from=1,s===C.value?(v.to=d.day,v.includeTo=!0):v.to=V.value,v}),C=c(()=>S(u.value)),Pe=c(()=>{const e={};if(n.options===void 0){for(let a=1;a<=V.value;a++)e[a]=!0;return e}const t=typeof n.options=="function"?n.options:a=>n.options.includes(a);for(let a=1;a<=V.value;a++){const l=C.value+"/"+B(a);e[a]=t(l)}return e}),Qe=c(()=>{const e={};if(n.events===void 0)for(let t=1;t<=V.value;t++)e[t]=!1;else{const t=typeof n.events=="function"?n.events:a=>n.events.includes(a);for(let a=1;a<=V.value;a++){const l=C.value+"/"+B(a);e[a]=t(l)===!0&&Le.value(l)}}return e}),Je=c(()=>{let e,t;const{year:a,month:l}=u.value;if(n.calendar!=="persian")e=new Date(a,l-1,1),t=new Date(a,l-1,0).getDate();else{const o=Fe(a,l,1);e=new Date(o.gy,o.gm-1,o.gd);let d=l-1,r=a;d===0&&(d=12,r--),t=ge(r,d)}return{days:e.getDay()-Ce.value-1,endDay:t}}),qe=c(()=>{const e=[],{days:t,endDay:a}=Je.value,l=t<0?t+7:t;if(l<6)for(let r=a-l;r<=a;r++)e.push({i:r,fill:!0});const o=e.length;for(let r=1;r<=V.value;r++){const s={i:r,event:Qe.value[r],classes:[]};Pe.value[r]===!0&&(s.in=!0,s.flat=!0),e.push(s)}if(ae.value[C.value]!==void 0&&ae.value[C.value].forEach(r=>{const s=o+r-1;Object.assign(e[s],{selected:!0,unelevated:!0,flat:!1,color:T.value,textColor:A.value})}),Me.value[C.value]!==void 0&&Me.value[C.value].forEach(r=>{if(r.from!==void 0){const s=o+r.from-1,v=o+(r.to||V.value)-1;for(let J=s;J<=v;J++)Object.assign(e[J],{range:r.range,unelevated:!0,color:T.value,textColor:A.value});Object.assign(e[s],{rangeFrom:!0,flat:!1}),r.to!==void 0&&Object.assign(e[v],{rangeTo:!0,flat:!1})}else if(r.to!==void 0){const s=o+r.to-1;for(let v=o;v<=s;v++)Object.assign(e[v],{range:r.range,unelevated:!0,color:T.value,textColor:A.value});Object.assign(e[s],{flat:!1,rangeTo:!0})}else{const s=o+V.value-1;for(let v=o;v<=s;v++)Object.assign(e[v],{range:r.range,unelevated:!0,color:T.value,textColor:A.value})}}),Q.value!==void 0){const r=o+Q.value.from-1,s=o+Q.value.to-1;for(let v=r;v<=s;v++)e[v].color=T.value,e[v].editRange=!0;Q.value.includeFrom===!0&&(e[r].editRangeFrom=!0),Q.value.includeTo===!0&&(e[s].editRangeTo=!0)}u.value.year===x.value.year&&u.value.month===x.value.month&&(e[o+x.value.day-1].today=!0);const d=e.length%7;if(d>0){const r=7-d;for(let s=1;s<=r;s++)e.push({i:s,fill:!0})}return e.forEach(r=>{let s="q-date__calendar-item ";r.fill===!0?s+="q-date__calendar-item--fill":(s+=`q-date__calendar-item--${r.in===!0?"in":"out"}`,r.range!==void 0&&(s+=` q-date__range${r.rangeTo===!0?"-to":r.rangeFrom===!0?"-from":""}`),r.editRange===!0&&(s+=` q-date__edit-range${r.editRangeFrom===!0?"-from":""}${r.editRangeTo===!0?"-to":""}`),(r.range!==void 0||r.editRange===!0)&&(s+=` text-${r.color}`)),r.classes=s}),e}),Ue=c(()=>n.disable===!0?{"aria-disabled":"true"}:{});U(()=>n.modelValue,e=>{if(G===e)G=0;else{const t=He(O.value,f.value);N(t.year,t.month,t)}}),U(b,()=>{oe.value!==null&&L.$el.contains(document.activeElement)===!0&&oe.value.focus()}),U(()=>u.value.year+"|"+u.value.month,()=>{_("navigation",{year:u.value.year,month:u.value.month})}),U(Ee,e=>{Oe(e,f.value,"mask"),O.value=e}),U(Ae,e=>{Oe(O.value,e,"locale"),f.value=e});function xe(){const{year:e,month:t,day:a}=x.value,l={...u.value,year:e,month:t,day:a},o=ae.value[S(l)];(o===void 0||o.includes(l.day)===!1)&&me(l),de(l.year,l.month)}function Ke(e){Ie(e)===!0&&(b.value=e)}function Ge(e,t){["month","year"].includes(e)&&(e==="month"?Ye:fe)(t===!0?-1:1)}function de(e,t){b.value="Calendar",N(e,t)}function Xe(e,t){if(n.range===!1||!e){g.value=null;return}const a=Object.assign({...u.value},e),l=t!==void 0?Object.assign({...u.value},t):a;g.value={init:a,initHash:Y(a),final:l,finalHash:Y(l)},de(a.year,a.month)}function ke(){return n.calendar==="persian"?"YYYY/MM/DD":n.mask}function ve(e,t,a){return gt(e,t,a,n.calendar,{hour:0,minute:0,second:0,millisecond:0})}function He(e,t){const a=Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue?[n.modelValue]:[];if(a.length===0)return Ve();const l=a[a.length-1],o=ve(l.from!==void 0?l.from:l,e,t);return o.dateHash===null?Ve():o}function Ve(){let e,t;if(n.defaultYearMonth!==void 0){const a=n.defaultYearMonth.split("/");e=parseInt(a[0],10),t=parseInt(a[1],10)}else{const a=x.value!==void 0?x.value:E();e=a.year,t=a.month}return{year:e,month:t,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:e+"/"+B(t)+"/01"}}function Ye(e){let t=u.value.year,a=Number(u.value.month)+e;a===13?(a=1,t++):a===0&&(a=12,t--),N(t,a),p.value===!0&&ne("month")}function fe(e){const t=Number(u.value.year)+e;N(t,u.value.month),p.value===!0&&ne("year")}function Ze(e){N(e,u.value.month),b.value=n.defaultView==="Years"?"Months":"Calendar",p.value===!0&&ne("year")}function pe(e){N(u.value.year,e),b.value="Calendar",p.value===!0&&ne("month")}function et(e,t){const a=ae.value[t];(a!==void 0&&a.includes(e.day)===!0?he:me)(e)}function F(e){return{year:e.year,month:e.month,day:e.day}}function N(e,t,a){if(h.value!==null&&e<=h.value.year&&((t<h.value.month||e<h.value.year)&&(t=h.value.month),e=h.value.year),y.value!==null&&e>=y.value.year&&((t>y.value.month||e>y.value.year)&&(t=y.value.month),e=y.value.year),a!==void 0){const{hour:o,minute:d,second:r,millisecond:s,timezoneOffset:v,timeHash:J}=a;Object.assign(u.value,{hour:o,minute:d,second:r,millisecond:s,timezoneOffset:v,timeHash:J})}const l=e+"/"+B(t)+"/01";l!==u.value.dateHash&&(X.value=u.value.dateHash<l==(q.lang.rtl!==!0)?"left":"right",e!==u.value.year&&(re.value=X.value),Te(()=>{Z.value=e-e%I-(e<0?I:0),Object.assign(u.value,{year:e,month:t,day:1,dateHash:l})}))}function Se(e,t,a){const l=e!==null&&e.length===1&&n.multiple===!1?e[0]:e;G=l;const{reason:o,details:d}=je(t,a);_("update:modelValue",l,o,d)}function ne(e){const t=M.value[0]!==void 0&&M.value[0].dateHash!==null?{...M.value[0]}:{...u.value};Te(()=>{t.year=u.value.year,t.month=u.value.month;const a=n.calendar!=="persian"?new Date(t.year,t.month,0).getDate():ge(t.year,t.month);t.day=Math.min(Math.max(1,t.day),a);const l=W(t);G=l;const{details:o}=je("",t);_("update:modelValue",l,e,o)})}function je(e,t){return t.from!==void 0?{reason:`${e}-range`,details:{...F(t.target),from:F(t.from),to:F(t.to)}}:{reason:`${e}-day`,details:F(t)}}function W(e,t,a){return e.from!==void 0?{from:se.value(e.from,t,a),to:se.value(e.to,t,a)}:se.value(e,t,a)}function me(e){let t;if(n.multiple===!0)if(e.from!==void 0){const a=Y(e.from),l=Y(e.to),o=M.value.filter(r=>r.dateHash<a||r.dateHash>l),d=R.value.filter(({from:r,to:s})=>s.dateHash<a||r.dateHash>l);t=o.concat(d).concat(e).map(r=>W(r))}else{const a=ie.value.slice();a.push(W(e)),t=a}else t=W(e);Se(t,"add",e)}function he(e){if(n.noUnset===!0)return;let t=null;if(n.multiple===!0&&Array.isArray(n.modelValue)===!0){const a=W(e);e.from!==void 0?t=n.modelValue.filter(l=>l.from!==void 0?l.from!==a.from&&l.to!==a.to:!0):t=n.modelValue.filter(l=>l!==a),t.length===0&&(t=null)}Se(t,"remove",e)}function Oe(e,t,a){const l=M.value.concat(R.value).map(o=>W(o,e,t)).filter(o=>o.from!==void 0?o.from.dateHash!==null&&o.to.dateHash!==null:o.dateHash!==null);_("update:modelValue",(n.multiple===!0?l:l[0])||null,a)}function tt(){if(n.minimal!==!0)return i("div",{class:"q-date__header "+$.value},[i("div",{class:"relative-position"},[i(K,{name:"q-transition--fade"},()=>i("div",{key:"h-yr-"+we.value,class:"q-date__header-subtitle q-date__header-link "+(b.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:m.value,...w("vY",{onClick(){b.value="Years"},onKeyup(e){e.keyCode===13&&(b.value="Years")}})},[we.value]))]),i("div",{class:"q-date__header-title relative-position flex no-wrap"},[i("div",{class:"relative-position col"},[i(K,{name:"q-transition--fade"},()=>i("div",{key:"h-sub"+De.value,class:"q-date__header-title-label q-date__header-link "+(b.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:m.value,...w("vC",{onClick(){b.value="Calendar"},onKeyup(e){e.keyCode===13&&(b.value="Calendar")}})},[De.value]))]),n.todayBtn===!0?i(H,{class:"q-date__header-today self-start",icon:q.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:m.value,onClick:xe}):null])])}function ye({label:e,type:t,key:a,dir:l,goTo:o,boundaries:d,cls:r}){return[i("div",{class:"row items-center q-date__arrow"},[i(H,{round:!0,dense:!0,size:"sm",flat:!0,icon:te.value[0],tabindex:m.value,disable:d.prev===!1,...w("go-#"+t,{onClick(){o(-1)}})})]),i("div",{class:"relative-position overflow-hidden flex flex-center"+r},[i(K,{name:"q-transition--jump-"+l},()=>i("div",{key:a},[i(H,{flat:!0,dense:!0,noCaps:!0,label:e,tabindex:m.value,...w("view#"+t,{onClick:()=>{b.value=t}})})]))]),i("div",{class:"row items-center q-date__arrow"},[i(H,{round:!0,dense:!0,size:"sm",flat:!0,icon:te.value[1],tabindex:m.value,disable:d.next===!1,...w("go+#"+t,{onClick(){o(1)}})})])]}const at={Calendar:()=>[i("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[i("div",{class:"q-date__navigation row items-center no-wrap"},ye({label:f.value.months[u.value.month-1],type:"Months",key:u.value.month,dir:X.value,goTo:Ye,boundaries:ce.value.month,cls:" col"}).concat(ye({label:u.value.year,type:"Years",key:u.value.year,dir:re.value,goTo:fe,boundaries:ce.value.year,cls:""}))),i("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},ze.value.map(e=>i("div",{class:"q-date__calendar-item"},[i("div",e)]))),i("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[i(K,{name:"q-transition--slide-"+X.value},()=>i("div",{key:C.value,class:"q-date__calendar-days fit"},qe.value.map(e=>i("div",{class:e.classes},[e.in===!0?i(H,{class:e.today===!0?"q-date__today":"",dense:!0,flat:e.flat,unelevated:e.unelevated,color:e.color,textColor:e.textColor,label:e.i,tabindex:m.value,...w("day#"+e.i,{onClick:()=>{nt(e.i)},onMouseover:()=>{lt(e.i)}})},e.event!==!1?()=>i("div",{class:"q-date__event bg-"+e.event}):null):i("div",""+e.i)]))))])])],Months(){const e=u.value.year===x.value.year,t=l=>h.value!==null&&u.value.year===h.value.year&&h.value.month>l||y.value!==null&&u.value.year===y.value.year&&y.value.month<l,a=f.value.monthsShort.map((l,o)=>{const d=u.value.month===o+1;return i("div",{class:"q-date__months-item flex flex-center"},[i(H,{class:e===!0&&x.value.month===o+1?"q-date__today":null,flat:d!==!0,label:l,unelevated:d,color:d===!0?T.value:null,textColor:d===!0?A.value:null,tabindex:m.value,disable:t(o+1),...w("month#"+o,{onClick:()=>{pe(o+1)}})})])});return n.yearsInMonthView===!0&&a.unshift(i("div",{class:"row no-wrap full-width"},[ye({label:u.value.year,type:"Years",key:u.value.year,dir:re.value,goTo:fe,boundaries:ce.value.year,cls:" col"})])),i("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},a)},Years(){const e=Z.value,t=e+I,a=[],l=o=>h.value!==null&&h.value.year>o||y.value!==null&&y.value.year<o;for(let o=e;o<=t;o++){const d=u.value.year===o;a.push(i("div",{class:"q-date__years-item flex flex-center"},[i(H,{key:"yr"+o,class:x.value.year===o?"q-date__today":null,flat:!d,label:o,dense:!0,unelevated:d,color:d===!0?T.value:null,textColor:d===!0?A.value:null,tabindex:m.value,disable:l(o),...w("yr#"+o,{onClick:()=>{Ze(o)}})})]))}return i("div",{class:"q-date__view q-date__years flex flex-center"},[i("div",{class:"col-auto"},[i(H,{round:!0,dense:!0,flat:!0,icon:te.value[0],tabindex:m.value,disable:l(e),...w("y-",{onClick:()=>{Z.value-=I}})})]),i("div",{class:"q-date__years-content col self-stretch row items-center"},a),i("div",{class:"col-auto"},[i(H,{round:!0,dense:!0,flat:!0,icon:te.value[1],tabindex:m.value,disable:l(t),...w("y+",{onClick:()=>{Z.value+=I}})})])])}};function nt(e){const t={...u.value,day:e};if(n.range===!1){et(t,C.value);return}if(g.value===null){const a=qe.value.find(o=>o.fill!==!0&&o.i===e);if(n.noUnset!==!0&&a.range!==void 0){he({target:t,from:a.range.from,to:a.range.to});return}if(a.selected===!0){he(t);return}const l=Y(t);g.value={init:t,initHash:l,final:t,finalHash:l},_("rangeStart",F(t))}else{const a=g.value.initHash,l=Y(t),o=a<=l?{from:g.value.init,to:t}:{from:t,to:g.value.init};g.value=null,me(a===l?t:{target:t,...o}),_("rangeEnd",{from:F(o.from),to:F(o.to)})}}function lt(e){if(g.value!==null){const t={...u.value,day:e};Object.assign(g.value,{final:t,finalHash:Y(t)})}}return Object.assign(L,{setToday:xe,setView:Ke,offsetCalendar:Ge,setCalendarTo:de,setEditingRange:Xe}),()=>{const e=[i("div",{class:"q-date__content col relative-position"},[i(K,{name:"q-transition--fade"},at[b.value])])],t=rt(D.default);return t!==void 0&&e.push(i("div",{class:"q-date__actions"},t)),n.name!==void 0&&n.disable!==!0&&$e(e,"push"),i("div",{class:Re.value,...Ue.value},[tt(),i("div",{ref:oe,class:"q-date__main col column",tabindex:-1},e)])}}});export{Yt as Q};
