(this.webpackJsonphabit_react_proj2021=this.webpackJsonphabit_react_proj2021||[]).push([[0],{27:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var c=function(t){return!!t.auth.token}},3:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return b})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return O})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return d})),n.d(e,"j",(function(){return p}));var c=n(1),r=Object(c.b)("REGISTER_REQUEST"),a=Object(c.b)("REGISTER_SUCCESS"),u=Object(c.b)("REGISTER_ERROR"),o=Object(c.b)("LOGIN_REQUEST"),i=Object(c.b)("LOGIN_SUCCESS"),b=Object(c.b)("LOGIN_ERROR"),s=Object(c.b)("LOGOUT_REQUEST"),j=Object(c.b)("LOGOUT_SUCCESS"),O=Object(c.b)("LOGOUT_ERROR"),f=Object(c.b)("UPDATE_USER_REQUEST"),d=Object(c.b)("UPDATE_USER_SUCCESS"),p=Object(c.b)("UPDATE_USER_ERROR")},35:function(t,e,n){"use strict";n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return d}));var c=n(8),r=n.n(c),a=n(17),u=n(12),o=n.n(u),i=n(3);o.a.defaults.baseURL="https://goiteens-habits.herokuapp.com/api/";var b=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},s=function(){o.a.defaults.headers.common.Authorization=""},j=function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n(Object(i.h)()),e.prev=2,e.next=5,o.a.post("/auth/register",t);case 5:c=e.sent,a=c.data,console.log(a),b(a.token),n(Object(i.i)(a)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),n(Object(i.g)(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}()},O=function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.b)()),e.prev=1,e.next=4,o.a.post("/auth/login",t);case 4:c=e.sent,a=c.data,b(a.token),n(Object(i.c)(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(Object(i.a)(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(Object(i.e)());try{s(),e(Object(i.f)())}catch(n){e(Object(i.d)(n.message))}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(i.k)()),t.prev=1,c=n().auth.token,b(c),t.next=6,o.a.get("/auth/me");case 6:a=t.sent,u=a.data,e(Object(i.l)(u)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e(Object(i.j)(t.t0.message));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}},36:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return j}));var c=n(8),r=n.n(c),a=n(17),u=n(12),o=n.n(u),i=n(7);o.a.defaults.baseURL="https://goiteens-habits.herokuapp.com/api";var b=function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.e)()),console.log("Add Habit",t),e.prev=2,e.next=5,o.a.post("/habits",t);case 5:c=e.sent,a=c.data,console.log("response",a),n(Object(i.f)(a)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),n(Object(i.d)(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()},s=function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(i.b)()),t.prev=1,t.next=4,o.a.get("/habits");case 4:n=t.sent,c=n.data,e(Object(i.c)(c)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.message),e(Object(i.a)(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},j=function(t,e){return function(){var n=Object(a.a)(r.a.mark((function n(c){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(Object(i.h)()),n.prev=1,n.next=4,o.a.delete("/habits/".concat(t));case 4:a=n.sent,a.data,c(Object(i.i)(t)),e.push("/habits"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0.message),c(Object(i.g)(n.t0.message));case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(t){return n.apply(this,arguments)}}()}},49:function(t,e,n){},7:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"h",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"f",(function(){return o})),n.d(e,"i",(function(){return i})),n.d(e,"c",(function(){return b})),n.d(e,"j",(function(){return s})),n.d(e,"d",(function(){return j})),n.d(e,"g",(function(){return O})),n.d(e,"a",(function(){return f}));var c=n(1),r=(Object(c.b)("HABITUPDATE_REQUEST"),Object(c.b)("HABITADD_REQUEST")),a=Object(c.b)("HABITDELETE_REQUEST"),u=Object(c.b)("GETALLHABITS_REQUEST"),o=(Object(c.b)("HABITUPDATE_SUCCESS"),Object(c.b)("HABITADD_SUCCESS")),i=Object(c.b)("HABITDELETE_SUCCESS"),b=Object(c.b)("GETALLHABITS_SUCCESS"),s=Object(c.b)("HABITUPDATE_ERROR"),j=Object(c.b)("HABITADD_ERROR"),O=Object(c.b)("HABITDELETE_ERROR"),f=Object(c.b)("GETALLHABITS_ERROR")},80:function(t,e,n){},83:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(25),a=n.n(r),u=n(10),o=n(85),i=[{component:Object(c.lazy)((function(){return n.e(7).then(n.bind(null,264))})),path:"/",exact:!0,key:Object(o.a)(),private:!1,restricted:!0},{component:Object(c.lazy)((function(){return n.e(8).then(n.bind(null,265))})),path:"/register",exact:!0,key:Object(o.a)(),private:!1,restricted:!0},{component:Object(c.lazy)((function(){return n.e(6).then(n.bind(null,266))})),path:"/login",exact:!0,key:Object(o.a)(),private:!1,restricted:!0},{component:Object(c.lazy)((function(){return n.e(5).then(n.bind(null,267))})),path:"/user",exact:!0,key:Object(o.a)(),private:!0,restricted:!0},{component:Object(c.lazy)((function(){return n.e(4).then(n.bind(null,268))})),path:"/habits",exact:!0,key:Object(o.a)(),private:!0,restricted:!1},{component:Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(9)]).then(n.bind(null,269))})),path:"/habits/:id",exact:!0,key:Object(o.a)(),private:!0,restricted:!0}],b=n(28),s=n(5),j=n(19),O=n(27),f=n(6),d=Object(j.b)((function(t){return{isAuthenticated:Object(O.a)(t)}}))((function(t){var e=t.isAuthenticated,n=t.component,c=Object(b.a)(t,["isAuthenticated","component"]);return Object(f.jsx)(s.b,Object(u.a)(Object(u.a)({},c),{},{render:function(t){return e?Object(f.jsx)(n,Object(u.a)({},t)):Object(f.jsx)(s.a,{to:"/"})}}))})),p=Object(j.b)((function(t){return{isAuthenticated:Object(O.a)(t)}}))((function(t){var e=t.isAuthenticated,n=t.restricted,c=t.component,r=Object(b.a)(t,["isAuthenticated","restricted","component"]);return Object(f.jsx)(s.b,Object(u.a)(Object(u.a)({},r),{},{render:function(t){return e&&n?Object(f.jsx)(s.a,{to:"/habits"}):Object(f.jsx)(c,Object(u.a)({},t))}}))})),l=(n(49),n(35)),h=n(36);var E,v,R,m,S,x=function(){var t=Object(j.c)();return Object(c.useEffect)((function(){t(Object(l.d)()),t(Object(h.c)())}),[]),Object(f.jsx)("div",{className:"App",style:{width:320},children:Object(f.jsx)(c.Suspense,{fallback:"...",children:Object(f.jsx)(s.d,{children:i.map((function(t){return t.private?Object(f.jsx)(d,Object(u.a)({},t)):Object(f.jsx)(p,Object(u.a)({restricted:t.restricted},t))}))})})})},y=n(21),T=(n(79),n(80),n(24)),k=n(1),g=n(4),A=n(9),_=n(3),U={phoneNumber:"",password:"",firstName:"",lastName:"",height:0,weight:0,birthday:""},w=Object(k.c)(U,(E={},Object(g.a)(E,_.i,(function(t,e){return e.payload.user})),Object(g.a)(E,_.c,(function(t,e){return e.payload.user})),Object(g.a)(E,_.f,(function(){return U})),Object(g.a)(E,_.k,(function(t,e){var n=e.payload;return Object(u.a)(Object(u.a)({},t),n)})),E)),I=Object(k.c)(null,(v={},Object(g.a)(v,_.i,(function(t,e){return e.payload.token})),Object(g.a)(v,_.c,(function(t,e){return e.payload.token})),Object(g.a)(v,_.f,(function(){return null})),v)),C=Object(k.c)(null,(R={},Object(g.a)(R,_.g,(function(t,e){return e.payload})),Object(g.a)(R,_.a,(function(t,e){return e.payload})),Object(g.a)(R,_.d,(function(t,e){return e.payload})),Object(g.a)(R,_.j,(function(t,e){return e.payload})),R)),L=Object(A.c)({user:w,token:I,error:C}),D=n(7),B=Object(k.c)(null,(m={},Object(g.a)(m,D.a,(function(t,e){return e.payload})),Object(g.a)(m,D.d,(function(t,e){return e.payload})),Object(g.a)(m,D.g,(function(t,e){return e.payload})),Object(g.a)(m,D.j,(function(t,e){return e.payload})),m)),H=Object(k.c)([],(S={},Object(g.a)(S,D.c,(function(t,e){return e.payload})),Object(g.a)(S,D.f,(function(t,e){var n=e.payload;return[].concat(Object(T.a)(t),[n])})),Object(g.a)(S,D.i,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),S)),G=Object(A.c)({habits:H,habitError:B}),z=n(18),Q=n(47),N={key:"auth",storage:n.n(Q).a,whitelist:["token"]},P=Object(k.a)({reducer:{auth:Object(z.g)(N,L),habits:G},middleware:Object(T.a)(Object(k.d)({serializableCheck:{ignoredActions:[z.a,z.f,z.b,z.c,z.d,z.e]}}))}),J=Object(z.h)(P),q=n(48);a.a.render(Object(f.jsx)(j.a,{store:P,children:Object(f.jsx)(q.a,{persistor:J,loading:null,children:Object(f.jsx)(y.a,{children:Object(f.jsx)(x,{})})})}),document.getElementById("root"))}},[[83,1,3]]]);
//# sourceMappingURL=main.103c53a7.chunk.js.map