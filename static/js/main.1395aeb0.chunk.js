(this.webpackJsonpreactside=this.webpackJsonpreactside||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),s=(a(9),a(1));a(10);function l(e){return c.a.createElement("div",{className:"ClockContainer"},c.a.createElement("div",{className:"ClockFace"},c.a.createElement("div",{className:"Hour",style:{transform:"rotate(".concat(e.hourangle,"deg)")}},c.a.createElement("div",{className:"hr"})),c.a.createElement("div",{className:"Minute",style:{transform:"rotate(".concat(e.minuteangle,"deg)")}},c.a.createElement("div",{className:"mn"})),c.a.createElement("div",{className:"Second",style:{transform:"rotate(".concat(e.secondangle,"deg)")}},c.a.createElement("div",{className:"sc"})),c.a.createElement("div",{className:"Knob"},c.a.createElement("div",{className:"sc"}))))}function i(e){return c.a.createElement("button",{className:"ChangeButton"},e.type)}var m=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(0),m=Object(s.a)(o,2),u=m[0],d=m[1],E=Object(n.useState)(0),v=Object(s.a)(E,2),f=v[0],g=v[1],h=30*a+90,N=6*u+90,b=6*f+90;return Object(n.useEffect)((function(){!function(e,t,a){var n=new Date;e(n.getHours()),t(n.getMinutes()),a(n.getSeconds())}(r,d,g)}),[]),Object(n.useEffect)((function(){var e=setInterval((function(){g(f+1),f>59&&(g(0),d(u+1)),u>59&&(d(0),r(a+1)),a>12&&r(a-12)}),1e3);return function(){return clearInterval(e)}}),[f,u,a]),c.a.createElement("div",{className:"Clock"},c.a.createElement("header",{className:"Clock-header"},"WORLD CLOCK"),c.a.createElement(l,{hourangle:h,minuteangle:N,secondangle:b}),c.a.createElement("div",{className:"Buttons"},c.a.createElement(i,{type:"Local"}),c.a.createElement(i,{type:"England"}),c.a.createElement(i,{type:"Budapest"}),c.a.createElement(i,{type:"Bengaluru"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.1395aeb0.chunk.js.map