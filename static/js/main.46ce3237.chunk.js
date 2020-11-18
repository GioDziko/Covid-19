(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){e.exports={container:"Cards_container__3ylMN",card:"Cards_card__XRcrS",infected:"Cards_infected__1X9aj",recovered:"Cards_recovered__kAh07",deaths:"Cards_deaths__oULrP"}},208:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),o=a(71),s=a.n(o),i=(a(89),a(6)),u=a.n(i),d=a(11),l=a(72),j=a(73),h=a(81),p=a(80),f=a(226),b=a(230),v=a(227),x=a(228),m=a(14),O=a.n(m),y=a(31),g=a.n(y),C=a(32),_=a.n(C),w=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?Object(n.jsx)("div",{className:O.a.container,children:Object(n.jsxs)(f.a,{container:!0,spacing:3,justify:"center",children:[Object(n.jsx)(f.a,{item:!0,component:b.a,xs:12,md:3,className:_()(O.a.card,O.a.infected),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(n.jsx)(x.a,{variant:"h5",children:Object(n.jsx)(g.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(n.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(n.jsx)(f.a,{item:!0,component:b.a,xs:12,md:3,className:_()(O.a.card,O.a.recovered),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(n.jsx)(x.a,{variant:"h5",children:Object(n.jsx)(g.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(n.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of recoveries from COVID-19"})]})}),Object(n.jsx)(f.a,{item:!0,component:b.a,xs:12,md:3,className:_()(O.a.card,O.a.deaths),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(n.jsx)(x.a,{variant:"h5",children:Object(n.jsx)(g.a,{start:0,end:c.value,duration:2.5,separator:","})}),Object(n.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of deaths caused by COVID-19"})]})})]})}):"Loading..."},S=a(30),k=a(44),D=a.n(k),N=a(33),I=a.n(N),B="https://covid19.mathdro.id/api",V=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r,c,o,s,i,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=B,t&&(a="".concat(B,"/countries/").concat(t)),e.prev=2,e.next=5,I.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,d={confirmed:c,recovered:o,deaths:s,lastUpdate:i},e.abrupt("return",d);case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("https://covid19.mathdro.id/api/daily");case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("https://covid19.mathdro.id/api/countries");case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(46),F=function(e){var t=e.data,a=e.country,c=Object(r.useState)([]),o=Object(S.a)(c,2),s=o[0],i=o[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,L();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=0!==s.length?Object(n.jsx)(A.Line,{data:{labels:s.map((function(e){return e.date})),datasets:[{data:s.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:s.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,j=t.confirmed?Object(n.jsx)(A.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.9)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(a)}}}):null;return Object(n.jsx)("div",{className:D.a.container,children:a?j:l})},U=a(231),E=a(229),J=a(78),M=a.n(J),R=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(S.a)(a,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,P();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),Object(n.jsx)(U.a,{className:M.a.formControl,children:Object(n.jsxs)(E.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(n.jsx)("option",{value:"",children:"Global"}),o.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))]})})},G=a(79),T=a.n(G),X=a.p+"static/media/corona.3d836c2e.jpg",z=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(d.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(n.jsxs)("div",{className:T.a.container,children:[Object(n.jsx)("img",{src:X,alt:"Corona-img"}),Object(n.jsxs)("h1",{children:[Object(n.jsx)("span",{className:"span",children:"Corona"})," Virus"]}),Object(n.jsx)(w,{data:t}),Object(n.jsx)(R,{handleCountryChange:this.handleCountryChange}),Object(n.jsx)(F,{data:t,country:a}),Object(n.jsx)("h3",{children:"Created Gio Dzirkvelishvili"})]})}}]),a}(r.Component),W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,232)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),W()},44:function(e,t,a){e.exports={container:"Chart_container__3eoJW"}},78:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3CAVS"}},79:function(e,t,a){e.exports={container:"App_container__2sx0_"}},89:function(e,t,a){}},[[208,1,2]]]);
//# sourceMappingURL=main.46ce3237.chunk.js.map