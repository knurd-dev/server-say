import{f as a}from"./index.66738bff.js";const s={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function l(t,i=()=>{},r=()=>{}){return{transitionProps:a(()=>{const e=`q-transition--${t.transitionShow||i()}`,n=`q-transition--${t.transitionHide||r()}`;return{appear:!0,enterFromClass:`${e}-enter-from`,enterActiveClass:`${e}-enter-active`,enterToClass:`${e}-enter-to`,leaveFromClass:`${n}-leave-from`,leaveActiveClass:`${n}-leave-active`,leaveToClass:`${n}-leave-to`}}),transitionStyle:a(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}export{l as a,s as u};