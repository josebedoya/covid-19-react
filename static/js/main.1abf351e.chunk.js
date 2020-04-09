(this["webpackJsonpcovid-traker"]=this["webpackJsonpcovid-traker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},203:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(71),o=a.n(c),u=a(6),s=a.n(u),i=a(9),l=a(16),d=a(220),m=a(224),f=a(221),p=a(222),v=a(32),b=a.n(v),h=a(13),E=a.n(h),x=a(33),g=a.n(x),y=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return n.a.createElement("div",{className:E.a.container},n.a.createElement(d.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(d.a,{item:!0,component:m.a,xs:12,md:3,className:g()(E.a.card,E.a.infected)},n.a.createElement(f.a,null,n.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(p.a,{variant:"h5"},n.a.createElement(b.a,{start:0,end:a.value,duration:2.5,separator:","})),n.a.createElement(p.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(p.a,{variant:"body2"},"Number of active cases of COVID-19"))),n.a.createElement(d.a,{item:!0,component:m.a,xs:12,md:3,className:g()(E.a.card,E.a.recovered)},n.a.createElement(f.a,null,n.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(p.a,{variant:"h5"},n.a.createElement(b.a,{start:0,end:r.value,duration:2.5,separator:","})),n.a.createElement(p.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(p.a,{variant:"body2"},"Number of recoveries from COVID-19"))),n.a.createElement(d.a,{item:!0,component:m.a,xs:12,md:3,className:g()(E.a.card,E.a.deaths)},n.a.createElement(f.a,null,n.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(p.a,{variant:"h5"},n.a.createElement(b.a,{start:0,end:c.value,duration:2.5,separator:","})),n.a.createElement(p.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(p.a,{variant:"body2"},"Number of death caused by COVID-19")))))},_=a(45),O=a(34),C=a.n(O),j="https://covid19.mathdro.id/api",w=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r,n,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=j,t&&(a="".concat(j,"/countries/").concat(t)),e.prev=2,e.next=5,C.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,u=n.deaths,i=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(j,"/daily"));case 3:return t=e.sent,a=t.data,r=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(j,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),S=a(77),N=a.n(S),I=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,d=Object(r.useState)([]),m=Object(l.a)(d,2),f=m[0],p=m[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,k();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=f.length?n.a.createElement(_.b,{data:{labels:f.map((function(e){return e.date})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:f.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,b=a?n.a.createElement(_.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return n.a.createElement("div",{className:N.a.container},u?b:v)},V=a(225),B=a(223),U=a(78),P=a.n(U),z=function(e){var t=e.handleChange,a=Object(r.useState)([]),c=Object(l.a)(a,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),n.a.createElement(V.a,{className:P.a.formControl},n.a.createElement(B.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},n.a.createElement("option",{value:""},"Global"),o.map((function(e){return n.a.createElement("option",{key:e.name,value:e.name},e.name)}))))},A=a(79),G=a.n(A),J=a(80),M=a.n(J);var Q=function(){var e=Object(r.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(""),u=Object(l.a)(o,2),d=u[0],m=u[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,w();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,w(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1),m(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.confirmed?n.a.createElement("div",{className:G.a.container},n.a.createElement("img",{src:M.a,alt:"COVID-19"}),n.a.createElement(y,{data:a}),n.a.createElement(z,{handleChange:f}),n.a.createElement(I,{data:a,country:d})):n.a.createElement("div",null,"Loading...")};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Q,null)),document.getElementById("root"))},77:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},78:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},79:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},80:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},83:function(e,t,a){e.exports=a(203)}},[[83,1,2]]]);
//# sourceMappingURL=main.1abf351e.chunk.js.map