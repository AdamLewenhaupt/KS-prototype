(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,n){e.exports=n(358)},129:function(e,t,n){},131:function(e,t,n){},133:function(e,t,n){},350:function(e,t,n){},352:function(e,t,n){},354:function(e,t,n){},356:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var a,r,c,o=n(0),i=n.n(o),l=n(113),s=n.n(l),u=(n(129),n(4)),m=n(5),p=n(7),b=n(6),f=n(8),d=(n(131),n(40)),h=n.n(d),E=n(359),g=n(376),j=n(370),O=(n(133),n(360)),v=n(364),k=n(378),y=[{label:"Aktuellt",href:"/"},{label:"Schema",href:"/a"},{label:"Terminsplanering",href:"/b"},{label:"Senaste Bed\xf6mningar",href:"/c"},{label:"Termins\xf6versikt",href:"/overview"}],w=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.location;return i.a.createElement(o.Fragment,null,i.a.createElement(E.a,{elevation:1},y.map(function(t){var n,a=(n=t.href,e.pathname===n)?"default":"minimal";return i.a.createElement(v.a,{key:t.label,to:t.href,className:"header-link"},i.a.createElement(O.a,{appearance:a},t.label))})))}}]),t}(o.Component),C=Object(k.a)(w),x=n(21),D=n(117),S=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this.props.percentage;return i.a.createElement(D.a,{legend:!1,data:(e=t,{datasets:[{data:[e,100-e],backgroundColor:["#45BBA3","#FFF"],hoverBackgroundColor:["#45BBA3","#FFF"]}]}),options:{cutoutPercentage:70,tooltips:{enabled:!1}}})}}]),t}(o.Component),B=n(18),I=n.n(B),A=function(e){return e.selected},T=function(e){return I.a.some(e.subTasks,A)},F=function(e){return I.a.some(e.tasks,T)},L=function(e){return I.a.some(e.steps,F)},M=function(e){var t=e.subTasks.filter(A),n=I.a.countBy(t,function(e){return e.completed});return{completed:n.true||0,left:n.false||0,total:t.length}},N=function(e){var t=e.tasks,n=t.map(M).reduce(function(e,t){var n=t.completed,a=t.total;return{completed:e.completed+n,total:e.total+a}},{completed:0,total:0});return 0===n.total?0:100*n.completed/n.total},W=function(e){var t=e.steps.filter(F);return 0===t.length?0:I.a.sum(t.map(N))/t.length},z=(n(350),n(120)),K=(n(352),n(365)),_=n(91),G=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.percent,n=e.text,a=e.color,r=Object(z.a)(e,["percent","text","color"]),c=n||"".concat(t," %");return i.a.createElement(K.a,Object.assign({},r,{height:30,width:"100%",backgroundColor:"#F1F5F4",overflow:"hidden"}),i.a.createElement(E.a,{className:"progress-bar",height:30,width:"".concat(t,"%"),background:a||"#3EBCA3"}),i.a.createElement(E.a,{marginTop:-24,textAlign:"center"},i.a.createElement(_.a,{color:"black"},c)))}}]),t}(o.Component),H=n(366),U=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.course,t=e.color,n=e.name,a=e.steps,r=W(e),c=I.a.find(a,function(e){return 100!==N(e)});return i.a.createElement(v.a,{to:"/overview/".concat(n),className:"subject-link"},i.a.createElement(E.a,{cursor:"pointer",elevation:0,padding:8,marginBottom:16},i.a.createElement(H.a,{color:t},n),i.a.createElement(E.a,null,!c&&i.a.createElement(_.a,null,"Inget steg p\xe5b\xf6rjat"),c&&i.a.createElement(_.a,null,"Steg ",c.number),i.a.createElement(K.a,{overflow:"hidden"},i.a.createElement(G,{color:t,percent:Math.round(r)}))),i.a.createElement(E.a,null,i.a.createElement(_.a,null,"Termin"),i.a.createElement(K.a,{display:"flex",overflow:"hidden"},a.map(function(e,n){return i.a.createElement(G,{key:e.name,color:t,percent:N(e),text:"Steg ".concat(e.number),borderLeft:0!==n?"2px solid white":null})})))))}}]),t}(o.Component),J=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this.props.courses,n=(e=t.map(W),I.a.sum(e)/e.length);return i.a.createElement(o.Fragment,null,i.a.createElement(E.a,{width:"50%"},t.map(function(e){return i.a.createElement(U,{key:e.name,course:e})})),i.a.createElement(E.a,{width:"50%",textAlign:"center"},i.a.createElement("h1",null,"Termin ",Math.round(n)," %"),i.a.createElement(S,{percentage:n})))}}]),t}(o.Component),P=Object(x.b)(function(e){return{courses:e.courses}})(J),V=n(369),R=n(374),$=(n(354),n(367)),q=n(368),Q=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.step;return i.a.createElement(E.a,null,i.a.createElement(H.a,null,e.title),i.a.createElement($.a,null,e.tasks.map(function(e){return i.a.createElement(q.a,{key:e.id},e.title)})))}}]),t}(o.Component),X=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.subject,n=e.step,a=n.number;return i.a.createElement(v.a,{to:"/overview/".concat(t,"/").concat(a),className:"step-link"},i.a.createElement(E.a,{elevation:3,padding:8,width:"100%",marginTop:16},i.a.createElement(V.a,{textAlign:"center",is:"h3"},"Steg ",a),i.a.createElement(E.a,{display:"flex",alignItems:"center"},i.a.createElement(E.a,{width:"25%"},i.a.createElement(S,{percentage:N(n)})),i.a.createElement(Q,{step:n}))))}}]),t}(o.Component),Y=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.match,n=e.courses,a=t.params.subject,r=I.a.find(n,function(e){return e.name===a});return r?i.a.createElement(E.a,{width:"100%"},i.a.createElement(V.a,{is:"h1",color:"#45BBA3"},r.name),r.steps.map(function(e){return i.a.createElement(X,{subject:a,key:e.number,step:e})})):i.a.createElement(R.a,{to:"/overview"})}}]),t}(o.Component),Z=Object(k.a)(Object(x.b)(function(e){return{courses:e.courses}})(Y)),ee=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.step,t=e.selectedDate;return i.a.createElement(E.a,{textAlign:"left",display:"flex",alignItems:"fill",width:"100%",justifyContent:"space-between",borderBottom:"1px solid rgb(190,190,190)",paddingBottom:16},i.a.createElement(E.a,{width:"25%",display:"flex",alignItems:"center"},i.a.createElement(S,{percentage:N(e)})),i.a.createElement(E.a,null,i.a.createElement(V.a,{textAlign:"center",size:400},"Steg ",e.number),i.a.createElement(Q,{step:e})),e.selectedDate&&i.a.createElement(K.a,{backgroundColor:"#45BBA3",flex:1,marginLeft:16,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minWidth:120,maxWidth:120,maxHeight:120,minHeight:120},i.a.createElement(V.a,{size:900,color:"white",as:"h1"},t.format("D")),i.a.createElement(V.a,{color:"white",as:"h2"},t.format("MMM"))))}}]),t}(o.Component),te=n(70),ne=n(53),ae=n(29),re=0,ce=0,oe=0,ie=0,le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return{id:ce++,title:e,subTasks:t.map(function(e){return{id:ie++,text:e,completed:!1,selected:!1}})}},se=function(e,t,n){return{id:re++,number:e,title:t,tasks:n,selectedDate:null}},ue=(a="Engelska",r="#1DAFEB",c=[se(18,"Vykort",[le("Ber\xe4tta och skriv om olika milj\xf6er",["G\xf6ra n\xe5gonting bra"]),le("Typiska aktiviterer",[]),le("L\xe4sa, f\xf6rst\xe5 och skriva vykort",[])]),se(19,"L\xe4sa Noveller",[le("Tillgodog\xf6ra sig inneh\xe5llet i en novell",["Ordinl\xe4rningsstrategier"]),le("Skriva en l\xe4slogg",["Obest\xe4md artikel","Obest\xe4md artikel interaktiv","Att l\xe4sa och skriva"]),le("\xc5terber\xe4tta det du har l\xe4st och delta i samtal om litteratur med kompisar",["D\xe5tid"])]),se(20,"Summer Camp",[le("F\xf6rst\xe5 och tolka inneh\xe5llet i engelsk text",["A","B"]),le("Formulera dig i en broschyr om ett summer camp och kommunicera genom att beskriva och svara p\xe5 fr\xe5gor om ditt summer camp",["A","B","C"])])],{id:oe++,name:a,color:r,steps:c}),me=function(e){localStorage.setItem("courses",function(e){return JSON.stringify(e.map(function(e){return Object(ae.a)({},e,{steps:e.steps.map(function(e){return Object(ae.a)({},e,{selectedDate:e.selectedDate&&e.selectedDate.valueOf()})})})}))}(e))},pe=function(e,t,n,a){return e.map(function(e){return e[t]!=n?e:a(e)})},be=function(e,t,n,a){return pe(e,"id",t,function(e){return Object(ae.a)({},e,Object(ne.a)({},n,a(e[n])))})},fe=function(){var e,t=localStorage.getItem("courses");return t&&(e=t,JSON.parse(e).map(function(e){return Object(ae.a)({},e,{steps:e.steps.map(function(e){return Object(ae.a)({},e,{selectedDate:e.selectedDate&&h()(e.selectedDate)})})})}))}()||[ue],de=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).selectSubtask=function(e,t){var a=n.props,r=a.courseID,c=a.step;(0,a.toggleSubtask)(r,c.id,e,t)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.step.tasks;return i.a.createElement($.a,{display:"inline-block",width:"100%",maxWidth:"400px",listStyleType:"none",marginLeft:0,padding:12,textAlign:"left"},t.map(function(t){return[i.a.createElement(q.a,{key:t.id},i.a.createElement(H.a,null,t.title))].concat(Object(te.a)(t.subTasks.map(function(n){return i.a.createElement(q.a,{listStylePosition:"inside",key:n.id},i.a.createElement(O.a,{onClick:e.selectSubtask.bind(e,t.id,n.id),width:"100%",appearance:n.selected?"primary":"default",intent:"success"},n.text))})))}))}}]),t}(o.Component),he=Object(x.b)(null,{toggleSubtask:function(e,t,n,a){return{type:"TOGGLE_SUBTASK",courseID:e,stepID:t,taskID:n,subtaskID:a}}})(de),Ee=I.a.memoize(function(){var e=h()();return I.a.range(0,5).map(function(t){return e.clone().add(t+14,"days")})}),ge=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).setDate=function(e){var t=n.props,a=t.setDate,r=t.step;a(t.courseID,r.id,e)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(E.a,{textAlign:"left",padding:20,borderBottom:"1px solid #bbb"},i.a.createElement(H.a,{size:600,color:"#45BBA3",as:"h2"},"V\xe4lj Redovisningstillf\xe4lle"),i.a.createElement(E.a,{display:"flex",justifyContent:"space-around",marginTop:16},Ee().map(function(t){return i.a.createElement(K.a,{cursor:"pointer",onClick:e.setDate.bind(e,t),key:t.toString(),backgroundColor:"#45BBA3",flex:1,marginLeft:16,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minWidth:80,maxWidth:80,maxHeight:80,minHeight:80},i.a.createElement(V.a,{size:900,color:"white",as:"h1"},t.format("D")),i.a.createElement(V.a,{color:"white",as:"h2"},t.format("MMM")))})))}}]),t}(o.Component),je=Object(x.b)(null,{setDate:function(e,t,n){return{type:"SET_DATE",courseID:e,stepID:t,date:n}}})(ge),Oe=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.match,n=e.courses,a=t.params,r=a.subject,c=a.step,o=I.a.find(n,function(e){return e.name===r});if(!o)return i.a.createElement(R.a,{to:"/overview/"});var l=I.a.find(o.steps,function(e){return e.number==c});return l?i.a.createElement(E.a,{width:"100%",textAlign:"center"},i.a.createElement(v.a,{to:"/overview/".concat(r)},i.a.createElement(V.a,{textAlign:"left",is:"h1",color:"#45BBA3"},i.a.createElement(V.a,{display:"inline"},r," >")," ","Steg ",l.number)),i.a.createElement(E.a,{elevation:1,padding:12,marginTop:12},i.a.createElement(ee,{step:l}),!l.selectedDate&&i.a.createElement(je,{courseID:o.id,step:l}),i.a.createElement(he,{step:l,courseID:o.id}),i.a.createElement(E.a,null,i.a.createElement(v.a,{to:"/overview/".concat(r)},i.a.createElement(O.a,{appearance:"primary"},"Klar"))))):i.a.createElement(R.a,{to:"/overview/".concat(r)})}}]),t}(o.Component),ve=Object(x.b)(function(e){return{courses:e.courses}})(Oe),ke=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(E.a,{padding:16,backgroundColor:"#F8F8F8",display:"flex",alignItems:"center"},i.a.createElement(g.a,null,i.a.createElement(j.a,{path:"/overview/:subject/:step",component:ve}),i.a.createElement(j.a,{path:"/overview/:subject",component:Z}),i.a.createElement(j.a,{component:P})))}}]),t}(o.Component),ye=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("h1",null,"News")}}]),t}(o.Component),we=n(371),Ce=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this.props.courses,n=(e=t.map(W),I.a.sum(e)/e.length);return i.a.createElement(E.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},i.a.createElement(E.a,{width:"50%"},i.a.createElement(G,{percent:Math.round(n)})),i.a.createElement(E.a,null,"Vecka 39"),i.a.createElement(E.a,{display:"flex"},i.a.createElement(we.a,{icon:"chevron-left"}),i.a.createElement(we.a,{icon:"chevron-right"})))}}]),t}(o.Component),xe=Object(x.b)(function(e){return{courses:e.courses}})(Ce),De=(n(356),n(377)),Se=n(373),Be=function(e){return Object(te.a)(Array(e).keys())},Ie=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.n,n=e.progress,a=t-n;return i.a.createElement(E.a,{position:"relative"},i.a.createElement(E.a,{marginLeft:10,marginRight:10,position:"relative",top:14,backgroundColor:"#E4E7EB",opacity:"0.3",borderBottom:"4px solid gray"}),i.a.createElement(E.a,null,Be(n).map(function(e,t){return i.a.createElement(Se.a,{key:t,marginLeft:4,isSolid:!0,name:" ",color:"green"})}),Be(a).map(function(e,t){return i.a.createElement(Se.a,{key:t,marginLeft:4,name:" ",color:"neutral"})})))}}]),t}(o.Component),Ae=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={showContent:!1},n.toggleShowContent=function(){n.setState({showContent:!n.state.showContent})},n.completeSubtask=function(e,t,a){var r=n.props,c=r.course;(0,r.completeSubtask)(c.id,e,t,a)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.course,n=t.name,a=t.steps,r=I.a.flatten(I.a.map(a.filter(F),"tasks")).map(function(e){return M(e)}).reduce(function(e,t){var n=t.completed,a=t.total;return{completed:e.completed+n,total:e.total+a}},{completed:0,total:0});return i.a.createElement(K.a,{backgroundColor:"#F1F5F4"},i.a.createElement(E.a,{onClick:this.toggleShowContent,display:"flex",justifyContent:"space-between",alignItems:"center",padding:8,backgroundColor:"#EEEEEE",color:"#88D0C1",borderBottom:"1px solid rgb(160, 160, 160)"},i.a.createElement("strong",null,n.toUpperCase()),i.a.createElement(Ie,{n:r.total,progress:r.completed}),i.a.createElement(we.a,{appearance:"minimal",icon:this.state.showContent?"chevron-up":"chevron-down"})),this.state.showContent&&i.a.createElement(E.a,null,a.filter(F).map(function(t){return i.a.createElement(E.a,{key:t.id,padding:8},i.a.createElement(H.a,null,i.a.createElement(De.a,{color:"green"},t.number)," ",t.title),i.a.createElement($.a,{icon:"circle"},I.a.flatten(I.a.map(t.tasks,function(n){return n.subTasks.filter(A).map(function(a){var r={};return a.completed&&(r.icon="full-circle",r.iconColor="#45BBA3"),i.a.createElement(q.a,Object.assign({},r,{key:a.id,cursor:"pointer",onClick:e.completeSubtask.bind(e,t.id,n.id,a.id)}),a.text)})}))))})))}}]),t}(o.Component),Te=Object(x.b)(null,{completeSubtask:function(e,t,n,a){return{type:"COMPLETE_SUBTASK",courseID:e,stepID:t,taskID:n,subtaskID:a}}})(Ae),Fe=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.courses.filter(L);return i.a.createElement(K.a,{elevation:1,backgroundColor:"#BED3CE",padding:16},i.a.createElement(xe,null),i.a.createElement(E.a,{marginTop:12},0===e.length?i.a.createElement(_.a,null,"Inga Aktiva Kurser"):e.map(function(e){return i.a.createElement(Te,{key:e.id,course:e})})))}}]),t}(o.Component),Le=Object(x.b)(function(e){return{courses:e.courses}})(Fe);h.a.locale("sv");var Me=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(E.a,{display:"flex",boxSizing:"border-box",backgroundColor:"white",minHeight:"100vh",elevation:1},i.a.createElement(E.a,{width:"60%",marginLeft:16,marginTop:16},i.a.createElement(C,null),i.a.createElement(E.a,{elevation:3,marginTop:16},i.a.createElement(g.a,null,i.a.createElement(j.a,{exact:!0,path:"/",component:ye}),i.a.createElement(j.a,{path:"/overview",component:ke})))),i.a.createElement(E.a,{width:"40%",margin:16},i.a.createElement(Le,null)))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ne,We=n(375),ze=n(43),Ke=Object(ze.b)({courses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;me(e);var n=I.a.bind(pe,null,e,"id",t.courseID);switch(t.type){case"SET_DATE":return n(function(e){return Object(ae.a)({},e,{steps:(n=e.steps,a=t.stepID,r="selectedDate",c=t.date,pe(n,"id",a,function(e){return Object(ae.a)({},e,Object(ne.a)({},r,c))}))});var n,a,r,c});case"TOGGLE_SUBTASK":return n(function(e){return Object(ae.a)({},e,{steps:be(e.steps,t.stepID,"tasks",function(e){return be(e,t.taskID,"subTasks",function(e){return be(e,t.subtaskID,"selected",function(e){return!e})})})})});case"COMPLETE_SUBTASK":return n(function(e){return Object(ae.a)({},e,{steps:be(e.steps,t.stepID,"tasks",function(e){return be(e,t.taskID,"subTasks",function(e){return be(e,t.subtaskID,"completed",function(e){return!e})})})})});default:return e}}}),_e=(Ne={},Object(ze.c)(Ke,Ne));s.a.render(i.a.createElement(We.a,null,i.a.createElement(x.a,{store:_e},i.a.createElement(Me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[124,2,1]]]);
//# sourceMappingURL=main.09079d74.chunk.js.map