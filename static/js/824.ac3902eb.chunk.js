"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[824],{368:function(e,t,n){n.d(t,{O:function(){return s}});var r=n(689),u=n(87),a=n(184),s=function(e){var t=e.items,n=(0,r.TH)();return(0,a.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.title,s=e.name;return(0,a.jsx)("li",{children:(0,a.jsx)(u.rU,{to:"/movies/".concat(t),state:{from:n},children:r||s})},t)}))})}},824:function(e,t,n){n.r(t),n.d(t,{MoviesPage:function(){return v}});var r=n(861),u=n(439),a=n(757),s=n.n(a),c=n(791),i=n(87),o=n(94),l=n(339),f=n(368),h=n(184),m=function(e){var t=e.handleSubmit,n=(0,c.useState)(""),r=(0,u.Z)(n,2),a=r[0],s=r[1];return(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a&&t(a)},onChange:function(e){s(e.target.value.trim())},autoComplete:"off",children:[(0,h.jsx)("input",{type:"text",name:"query",placeholder:"Enter name"}),(0,h.jsx)("button",{children:"Search"})]})},p=n(812),v=function(){var e=(0,c.useState)([]),t=(0,u.Z)(e,2),n=t[0],a=t[1],v=(0,c.useState)(null),x=(0,u.Z)(v,2),d=x[0],j=x[1],b=(0,c.useState)(!1),g=(0,u.Z)(b,2),k=g[0],w=g[1],S=(0,i.lr)(),y=(0,u.Z)(S,2),Z=y[0],q=y[1],C=Z.get("query");(0,c.useEffect)((function(){if(C){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,(0,l.ME)(C);case 4:if(0!==(t=e.sent).results.length){e.next=8;break}return o.Am.error(" Enter the correct movie name"),e.abrupt("return");case 8:a(t.results),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),j(e.t0);case 14:return e.prev=14,w(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}}),[C]);return(0,h.jsxs)("main",{children:[d&&(0,h.jsxs)("p",{children:["Whoops, something went wrong: ",d.message]}),k&&(0,h.jsx)(p.Z,{}),(0,h.jsx)(m,{query:Z.get("query"),handleSubmit:function(e){e&&q({query:e})}}),!d>0&&(0,h.jsx)(f.O,{items:n})]})}}}]);
//# sourceMappingURL=824.ac3902eb.chunk.js.map