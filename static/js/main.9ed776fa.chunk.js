(this.webpackJsonpStopwatch=this.webpackJsonpStopwatch||[]).push([[0],{13:function(t,e,s){},14:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(1),r=s.n(n),c=s(5),i=s.n(c),a=s(3),o=s(2),u=s.n(o),j=(u.a.func.isRequired,u.a.func.isRequired,u.a.func.isRequired,u.a.func.isRequired,u.a.shape({hours:u.a.number.isRequired,minutes:u.a.number.isRequired,seconds:u.a.number.isRequired}).isRequired,u.a.func.isRequired,u.a.func.isRequired,u.a.func.isRequired,u.a.func.isRequired,u.a.string.isRequired,s(0)),l=function(t){var e=t.time;return Object(j.jsxs)("div",{className:"stopwatch__display",children:[Object(j.jsx)("span",{children:e.hours>=10?e.hours:"0".concat(e.hours)}),"\xa0:\xa0",Object(j.jsx)("span",{children:e.minutes>=10?e.minutes:"0".concat(e.minutes)}),"\xa0:\xa0",Object(j.jsx)("span",{children:e.seconds>=10?e.seconds:"0".concat(e.seconds)})]})},d=function(t){var e=t.startTimer;return Object(j.jsx)("button",{type:"button",className:"control-panel__button start-button",onClick:e,children:"Start"})},b=function(t){var e=t.stopTimer;return Object(j.jsx)("button",{type:"button",className:"control-panel__button start-button",onClick:e,children:"Stop"})},p=function(t){var e=t.resetTimer;return Object(j.jsx)("button",{type:"button",className:"control-panel__button start-button",onClick:e,children:"Reset"})},h=function(t){var e=t.wait;return Object(j.jsx)("button",{type:"button",className:"control-panel__button start-button",onClick:e,children:"Wait"})},m=(s(13),function(t){var e=t.startTimer,s=t.stopTimer,n=t.resetTimer,r=t.wait,c=t.status;return Object(j.jsxs)("div",{className:"stopwatch__control-panel control-panel",children:["stop"===c?Object(j.jsx)(d,{startTimer:e}):"","run"===c?Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{wait:r}),Object(j.jsx)(b,{stopTimer:s}),Object(j.jsx)(p,{resetTimer:n})]}):"","wait"===c?Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{startTimer:e}),Object(j.jsx)(b,{stopTimer:s})]}):""]})});s(14);var O=function(){var t=Object(n.useState)({hours:0,minutes:0,seconds:0}),e=Object(a.a)(t,2),s=e[0],r=e[1],c=Object(n.useState)(),i=Object(a.a)(c,2),o=i[0],u=i[1],d=Object(n.useState)("stop"),b=Object(a.a)(d,2),p=b[0],h=b[1],O=s.hours,x=s.minutes,f=s.seconds,v=0,w=function(){return 60===x&&(O+=1,x=0),60===f&&(x+=1,f=0),r({hours:O,minutes:x,seconds:f+=1})};return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)("div",{className:"app____stopwatch-holder stopwatch-holder",children:Object(j.jsxs)("div",{className:"stopwatch-holder__stopwatch stopwatch",children:[Object(j.jsx)(l,{time:s}),Object(j.jsx)(m,{startTimer:function(){w(),h("run"),u(setInterval(w,1e3))},stopTimer:function(){clearInterval(o),h("stop"),r({hours:0,minutes:0,seconds:0})},resetTimer:function(){clearInterval(o),r({hours:0,minutes:0,seconds:0}),O=0,x=0,f=0,u(setInterval(w,1e3))},wait:function(){var t=(new Date).getTime();t-v<300&&(clearInterval(o),h("wait")),v=t},status:p})]})})})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9ed776fa.chunk.js.map