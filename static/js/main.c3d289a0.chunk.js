(this.webpackJsonpreactside=this.webpackJsonpreactside||[]).push([[0],{13:function(e,t,a){},18:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),o=a.n(r),l=(a(13),a(16)),s=a(1);a(23);function i(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement("div",{class:"hbutton"},c.a.createElement("svg",{height:"32px",class:"hamburger",id:"Layer_1",version:"1.1",viewBox:"0 0 32 32",width:"32px",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"})),c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",{class:"link"},c.a.createElement("a",{href:"https://www.google.com/search?q=emil+joshy&rlz=1C5CHFA_enIN918IN918&oq=emil+joshy&aqs=chrome..69i57j69i60l2j69i61.2819j0j15&sourceid=chrome&ie=UTF-8",target:"_blank"},"About Me")),c.a.createElement("li",{class:"link"},c.a.createElement("a",{href:"https://www.instagram.com/emjshrx/",target:"_blank"},"Instagram")),c.a.createElement("li",{class:"link"},c.a.createElement("a",{href:"https://www.linkedin.com/in/emil-joshy-1ab610144/",target:"_blank"},"Linkedin")),c.a.createElement("li",{class:"link"},c.a.createElement("a",{href:"https://github.com/emjshrx",target:"_blank"},"Github"))))),c.a.createElement("div",{class:"name"},"Emil Joshy")),c.a.createElement("main",null,c.a.createElement("div",{class:"isa"},"I am a"),c.a.createElement("div",{class:"jobs"},c.a.createElement("div",{class:"job"},c.a.createElement("a",{href:"/#/clock"},"coder.")),c.a.createElement("div",{class:"job"},c.a.createElement("a",{href:"https://drive.google.com/drive/folders/0B8Tu2WmoMEAjOTJyUUxMRXk2Y3M?usp=sharing",target:"_blank"},"designer.")),c.a.createElement("div",{class:"job"},c.a.createElement("a",{href:"https://www.youtube.com/channel/UCap13UTaDSzgB4u-7gyuQtw",target:"_blank"},"critic.")),c.a.createElement("div",{class:"job"},c.a.createElement("a",{href:"https://drive.google.com/drive/folders/0B8Tu2WmoMEAjOTJyUUxMRXk2Y3M?usp=sharing",target:"_blank"},"editor.")),c.a.createElement("div",{class:"job"},c.a.createElement("a",{href:"https://drive.google.com/file/d/1KkFfEyTzM1Xgf9xUm5y_m5dkCCVP81kY/view",target:"_blank"},"hacker.")))),c.a.createElement("div",{class:"subtext"},"click links to explore"),c.a.createElement("footer",null,c.a.createElement("div",{class:"foottext"},"COPYRIGHT \xa9 2020")))}var m=a(6);a(24);function u(e){var t=Object(m.a)(e.hands,3),a=t[0],r=t[1],o=t[2],l=Object(m.a)(e.setters,3),s=l[0],i=l[1],u=l[2],d=30*a+.5*r+90,E=6*r+.1*o+90,h=6*o+90;return Object(n.useEffect)((function(){var e=setInterval((function(){s(o+1),o>59&&(s(0),i(r+1)),r>59&&(i(0),u(a+1))}),1e3);return function(){return clearInterval(e)}}),[o,r,a]),c.a.createElement("div",{className:"ClockContainer"},c.a.createElement("div",{className:"ClockFace"},c.a.createElement("div",{className:"Hour",style:{transform:"rotate(".concat(d,"deg)")}},c.a.createElement("div",{className:"hr"})),c.a.createElement("div",{className:"Minute",style:{transform:"rotate(".concat(E,"deg)")}},c.a.createElement("div",{className:"mn"})),c.a.createElement("div",{className:"Second",style:{transform:"rotate(".concat(h,"deg)")}},c.a.createElement("div",{className:"sc"})),c.a.createElement("div",{className:"Knob"},c.a.createElement("div",{className:"sc"}))))}function d(e){var t=e.setLocation,a=e.Locationactive;return c.a.createElement("div",{className:"Buttons"},c.a.createElement(E,{type:"Local",setLocation:t,Locationactive:a}),c.a.createElement(E,{type:"London",setLocation:t,Locationactive:a}),c.a.createElement(E,{type:"Budapest",setLocation:t,Locationactive:a}),c.a.createElement(E,{type:"Bengaluru",setLocation:t,Locationactive:a}))}function E(e){return c.a.createElement("button",{className:"ChangeButton",onClick:function(){e.setLocation(e.type)},style:{color:"".concat(e.Locationactive==e.type?"#ff7070":"")}},e.type)}function h(e,t,a){var n=new Date;e(n.getHours()),t(n.getMinutes()),a(n.getSeconds())}var v=function(){var e=Object(n.useState)(0),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(0),l=Object(m.a)(o,2),s=l[0],i=l[1],E=Object(n.useState)(0),v=Object(m.a)(E,2),p=v[0],f=v[1],g=Object(n.useState)("Local"),b=Object(m.a)(g,2),k=b[0],w=b[1],j=Object(n.useState)("Local"),L=Object(m.a)(j,2),y=L[0],O=L[1];return Object(n.useEffect)((function(){h(r,i,f)}),[]),Object(n.useEffect)((function(){if("Local"===k)h(r,i,f),O(k);else{var e=new XMLHttpRequest;switch(k){case"Bengaluru":e.open("GET","https://worldtimeapi.org/api/timezone/Asia/Kolkata",!0);break;case"Budapest":e.open("GET","https://worldtimeapi.org/api/timezone/Europe/Budapest",!0);break;case"London":e.open("GET","https://worldtimeapi.org/api/timezone/Europe/London",!0)}e.onload=function(){var e=JSON.parse(this.response),t=e.datetime.search("T"),a=e.datetime[t+1]+e.datetime[t+2];a=parseInt(a);var n=e.datetime[t+4]+e.datetime[t+5];n=parseInt(n);var c=e.datetime[t+7]+e.datetime[t+8];c=parseInt(c),r(a),i(n),f(c),O(k)},e.send()}}),[k]),c.a.createElement("div",{className:"Clock"},c.a.createElement("header",{className:"Clock-header"},"WORLD CLOCK"),c.a.createElement(u,{hands:[a,s,p],setters:[f,i,r]}),c.a.createElement(d,{setLocation:w,Locationactive:y}))};var p=function(){return c.a.createElement(l.a,null,c.a.createElement(s.a,{path:"/",exact:!0,component:i}),c.a.createElement(s.a,{path:"/clock",component:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.c3d289a0.chunk.js.map