"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[667],{368:function(e,t,r){r.d(t,{O:function(){return a}});var n=r(689),u=r(87),s=r(184),a=function(e){var t=e.items,r=(0,n.TH)();return(0,s.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.title,a=e.name;return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"/movies/".concat(t),state:{from:r},children:n||a})},t)}))})}},667:function(e,t,r){r.r(t),r.d(t,{MoviesPage:function(){return p}});var n=r(861),u=r(439),s=r(757),a=r.n(s),c=r(791),i=r(87),o=r(94),l=r(339),f=r(368),m=r(812),h=r(184),p=function(){var e=(0,c.useState)([]),t=(0,u.Z)(e,2),r=t[0],s=t[1],p=(0,c.useState)(null),v=(0,u.Z)(p,2),x=v[0],d=v[1],j=(0,c.useState)(!1),k=(0,u.Z)(j,2),w=k[0],b=k[1],g=(0,i.lr)(),y=(0,u.Z)(g,2),Z=y[0],q=y[1],S=Z.get("query");(0,c.useEffect)((function(){if(S){var e=function(){var e=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,(0,l.ME)(S);case 4:if(0!==(t=e.sent).results.length){e.next=8;break}return o.Am.error(" Enter the correct movie name"),e.abrupt("return");case 8:s(t.results),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),d(e.t0);case 14:return e.prev=14,b(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}}),[S]);return(0,h.jsxs)("main",{children:[x&&(0,h.jsxs)("p",{children:["Whoops, something went wrong: ",x.message]}),w&&(0,h.jsx)(m.Z,{}),(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;""!==t.elements.query.value.trim()&&(q({query:t.elements.query.value}),t.reset())},autoComplete:"off",children:[(0,h.jsx)("input",{type:"text",name:"query",placeholder:"Enter name"}),(0,h.jsx)("button",{children:"Search"})]}),!x>0&&(0,h.jsx)(f.O,{items:r})]})}}}]);
//# sourceMappingURL=667.d868bb77.chunk.js.map