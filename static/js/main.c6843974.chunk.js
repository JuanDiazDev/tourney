(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(31),r=a.n(s),i=(a(39),a(40),a(17)),o=a(15),l=a(16),d=a(34),j=a(19),m=(a(41),a(8)),h=a.n(m),u=a(32),b=a(1),p=function(e,t){var a="https://img.icons8.com/color/48/000000/".concat(e.team,".png"),n=e.team.charAt(0).toUpperCase()+e.team.slice(1);return Object(b.jsxs)("tr",{style:{fontSize:"20px"},children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{src:a,style:f})}),Object(b.jsx)("td",{children:t+1}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:n}),Object(b.jsx)("td",{children:e.matches_played}),Object(b.jsx)("td",{children:e.points}),Object(b.jsx)("td",{children:e.wins}),Object(b.jsx)("td",{children:e.draws}),Object(b.jsx)("td",{children:e.losses})]})},f={minHeight:"100%",minWidth:"48px",width:"100%",height:"auto",position:"relative"},O=function(e){var t=e.list;return Object(b.jsxs)(u.a,{striped:!0,hover:!0,variant:"light",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Flag"}),Object(b.jsx)("th",{children:"Position"}),Object(b.jsx)("th",{children:"Player"}),Object(b.jsx)("th",{children:"Team"}),Object(b.jsx)("th",{children:"Matches"}),Object(b.jsx)("th",{children:"Points"}),Object(b.jsx)("th",{children:"Wins"}),Object(b.jsx)("th",{children:"Draws"}),Object(b.jsx)("th",{children:"Losses"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e,t){return p(e,t)}))})]})},x=a(10),g=a(11),v=a(9),y=function(e){var t=e.onAdd,a=e.onChange;return Object(b.jsxs)(g.a,{inline:!0,children:[Object(b.jsx)(g.a.Control,{id:"playername",placeholder:"Name",className:"mb-2 mr-sm-2",name:"name",onChange:a}),Object(b.jsx)(v.a,{id:"playerteam",placeholder:"Team",className:"mb-2 mr-sm-2",name:"team",onChange:a}),Object(b.jsx)(x.a,{type:"submit",variant:"info",className:"mb-2",onClick:t,children:"Submit"})]})},C=a(33),w=(a(64),function(e){var t=e.onAdd,a=e.onChange;return Object(b.jsxs)(g.a,{inline:!0,children:[Object(b.jsx)(g.a.Control,{id:"local",placeholder:"Local",className:"mb-2 mr-sm-2",name:"teams",onChange:a}),Object(b.jsx)(v.a,{id:"local",placeholder:"0",className:"mb-2 mr-sm-2",name:"score",onChange:a}),Object(b.jsx)(g.a.Control,{id:"visitor",placeholder:"0",className:"mb-2 mr-sm-2",name:"score",onChange:a}),Object(b.jsx)(v.a,{id:"visitor",placeholder:"Visitor",className:"mb-2 mr-sm-2",name:"teams",onChange:a}),Object(b.jsx)(x.a,{type:"submit",variant:"info",className:"mb-2",onClick:t,children:"Submit"})]})}),N={color:"white",fontSize:"70px",fontFamily:"Roboto Slab"},S=function(){var e=c.a.useState([]),t=Object(j.a)(e,2),a=t[0],n=t[1],s=c.a.useState({name:"",team:"",matches_played:0,points:0,wins:0,draws:0,losses:0}),r=Object(j.a)(s,2),m=r[0],u=r[1],p=c.a.useState({teams:["",""],score:[0,0]}),f=Object(j.a)(p,2),g=f[0],v=f[1];function S(){h.a.get("/api/players/").then((function(e){var t=Object(d.a)(e.data);t.sort((function(e,t){return t.points-e.points})),n(t)})).catch((function(e){return console.log(e)}))}function k(e){h.a.defaults.withCredentials=!0,h.a.post("admin/login/",{username:"juanmd",password:"dadada77"}).then((function(t){return function(e){h.a.post("/api/players/",e).then((function(e){return alert("Equipo agregado")})).catch((function(e){return console.log(e)}))}(e)})).catch((function(e){return console.log("Login error",e.response)})).finally(S)}return h.a.defaults.xsrfHeaderName="X-CSRFTOKEN",h.a.defaults.xsrfCookieName="csrftoken",Object(b.jsxs)(C.a,{children:[Object(b.jsx)("img",{src:"https://img.fifa.com/image/upload/t_tc1/oqp6macvzvwwfbb0kuhs.jpg"}),Object(b.jsxs)("div",{className:"group-container",children:[Object(b.jsx)("h1",{style:N,children:"Laderas Cup"}),Object(b.jsxs)("div",{className:"group",children:[Object(b.jsx)(x.a,{type:"submit",variant:"danger",className:"mb-2",onClick:S,children:"Refresh"}),Object(b.jsx)(x.a,{type:"submit",variant:"danger",className:"mb-2",onClick:function(e){e.preventDefault();var t,n,c=Object(i.a)(a);try{for(c.s();!(t=c.n()).done;){var s=t.value;n=s,h.a.delete("/api/players/".concat(n.id,"/")).then((function(e){return S()}))}}catch(r){c.e(r)}finally{c.f()}},children:"Delete all"}),Object(b.jsx)(y,{onAdd:function(e){e.preventDefault(),k(m),u({name:"",team:"",matches_played:0,points:0,wins:0,draws:0,losses:0})},onChange:function(e){e.preventDefault();var t=e.target.name,a=e.target.value;u(Object(l.a)(Object(l.a)({},m),{},Object(o.a)({},t,a)))}}),Object(b.jsx)(w,{onAdd:function(e){if(e.preventDefault(),g.score[0]===g.score[1]){var t,n=Object(i.a)(a);try{for(n.s();!(t=n.n()).done;){var c=t.value;c.team!==g.teams[0]&&c.team!==g.teams[1]||(c.matches_played+=1,c.draws+=1,c.points+=1),h.a.put("/api/players/".concat(c.id,"/"),c).then((function(e){return S()}))}}catch(d){n.e(d)}finally{n.f()}}else{var s,r=Object(i.a)(a);try{for(r.s();!(s=r.n()).done;){var o=s.value,l=g.score[0]>g.score[1]?g.teams[0]:g.teams[1];o.team!==g.teams[0]&&o.team!==g.teams[1]||(o.matches_played+=1,o.team===l?(o.wins+=1,o.points+=3):o.losses+=1,h.a.put("/api/players/".concat(o.id,"/"),o).then((function(e){return S()})))}}catch(d){r.e(d)}finally{r.f()}}},onChange:function(e){e.preventDefault();var t=e.target.name,a="local"===e.target.id?0:1,n=e.target.value,c=g[t];c[a]=n,v(Object(l.a)(Object(l.a)({},g),{},Object(o.a)({},t,c)))}}),Object(b.jsx)(O,{list:a})]})]})]})};var k=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(S,{})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),D()}},[[65,1,2]]]);
//# sourceMappingURL=main.c6843974.chunk.js.map