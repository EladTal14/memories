(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/memories.9cfa8a46.png"},119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),s=a(18),i=a(22),o=a(69),l=a(48),u=a(162),d=a(163),p=a(157),j=a(166),b=a(161),f=a(151),m=Object(f.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),O=a(154),x=a(156),h=a(165),g=a(158),v=a(159),y=a(77),C=a.n(y),k=a(78),w=a.n(k),T=a(76),E=a.n(T),S=a(74),N=a.n(S),_=a(19),I=a.n(_),P=a(35),D=a(75),A=a.n(D).a.create({}),L="/posts",z=function(e,t){return A.patch("".concat(L,"/").concat(e),t)},B=function(e){return A.delete("".concat(L,"/").concat(e))},F=function(e){return A.patch("".concat(L,"/").concat(e,"/likePost"))},W=a(5);function M(e){var t=e.post,a=e.setCurrentId,n=m(),r=Object(s.b)();return Object(W.jsxs)(O.a,{className:n.card,children:[Object(W.jsx)(x.a,{className:n.media,image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:t.title}),Object(W.jsxs)("div",{className:n.overlay,children:[Object(W.jsx)(p.a,{variant:"h6",children:t.creator}),Object(W.jsx)(p.a,{variant:"body2",children:N()(t.createdAt).fromNow()})]}),Object(W.jsx)("div",{className:n.overlay2,children:Object(W.jsx)(h.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(W.jsx)(E.a,{fontSize:"default"})})}),Object(W.jsx)("div",{className:n.details,children:Object(W.jsx)(p.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(W.jsx)(p.a,{className:n.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(W.jsx)(g.a,{children:Object(W.jsx)(p.a,{variant:"body2",color:"textSecondary",component:"p",gutterBottom:!0,children:t.message})}),Object(W.jsxs)(v.a,{className:n.cardActions,children:[Object(W.jsxs)(h.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(P.a)(I.a.mark((function t(a){var n,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F(e);case 3:n=t.sent,r=n.data,a({type:"UPDATE_POST",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(W.jsx)(C.a,{fontSize:"small"}),"\xa0 Like \xa0",t.likeCount]}),Object(W.jsxs)(h.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(P.a)(I.a.mark((function t(a){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B(e);case 3:a({type:"DELETE_POST",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(W.jsx)(w.a,{fontSize:"small"}),"\xa0 Delete"]})]})]})}var R=Object(f.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),U=a(160),H=function(e){var t=e.setCurrentId,a=R(),n=Object(s.c)((function(e){return e.posts.posts}));return n.length?Object(W.jsx)(b.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(W.jsx)(b.a,{item:!0,xs:12,sm:6,children:Object(W.jsx)(M,{post:e,setCurrentId:t})},e._id)}))}):Object(W.jsx)(U.a,{})},J=a(11),K=Object(f.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10},buttonUpload:{backgroundColor:"#02c002","&:hover":{backgroundColor:"#07a307"}},input:{display:"none"}}})),V=a(82),q=a(164),G=a(79),Q=a.n(G);function X(e){var t=e.currentId,a=e.setCurrentId,r=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),c=Object(l.a)(r,2),i=c[0],o=c[1],u=Object(s.c)((function(e){return t?e.posts.posts.find((function(e){return e._id===t})):null})),d=Object(s.b)(),j=K();Object(n.useEffect)((function(){u&&o(u)}),[u]);var b=function(){a(0),o({creator:"",title:"",message:"",tags:"",selectedFile:""})};return Object(W.jsx)(V.a,{className:j.paper,children:Object(W.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(j.root," ").concat(j.form),onSubmit:function(e){e.preventDefault(),d(t?function(e,t){return function(){var a=Object(P.a)(I.a.mark((function a(n){var r,c;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,z(e,t);case 3:r=a.sent,c=r.data,n({type:"UPDATE_POST",payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,i):function(e){return function(){var t=Object(P.a)(I.a.mark((function t(a){var n,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,A.post(L,c);case 3:n=t.sent,r=n.data,a({type:"CREATE_POST",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(i)),b()},children:[Object(W.jsxs)(p.a,{variant:"h6",children:[t?"Editing":"Creating"," a Memory"]}),Object(W.jsx)(q.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:i.creator,onChange:function(e){return o(Object(J.a)(Object(J.a)({},i),{},{creator:e.target.value}))}}),Object(W.jsx)(q.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:i.title,onChange:function(e){return o(Object(J.a)(Object(J.a)({},i),{},{title:e.target.value}))}}),Object(W.jsx)(q.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:i.message,onChange:function(e){return o(Object(J.a)(Object(J.a)({},i),{},{message:e.target.value}))}}),Object(W.jsx)(q.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:i.tags,onChange:function(e){return o(Object(J.a)(Object(J.a)({},i),{},{tags:e.target.value.split(",")}))}}),Object(W.jsx)("div",{className:j.fileInput,children:Object(W.jsx)(Q.a,{style:{position:"absolute"},type:"file",className:j.fileBase,multnple:!1,onDone:function(e){var t=e.base64;return o(Object(J.a)(Object(J.a)({},i),{},{selectedFile:t}))}})}),Object(W.jsx)(h.a,{className:j.buttonSubmit,color:"primary",variant:"contained",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(W.jsx)(h.a,{variant:"contained",size:"small",color:"secondary",onClick:b,fullWidth:!0,children:"Clear"})]})})}var Y=a(47),Z=Object(f.a)((function(e){return Object(Y.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),$=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),r=t[0],c=t[1],i=Z(),o=Object(s.b)();return Object(n.useEffect)((function(){o(function(){var e=Object(P.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.get(L);case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[o]),Object(W.jsxs)(u.a,{maxidth:"lg",children:[Object(W.jsxs)(d.a,{position:"static",color:"inherit",className:i.appBar,children:[Object(W.jsx)(p.a,{className:i.heading,variant:"h2",align:"center",children:"Memories"}),Object(W.jsx)("img",{className:i.image,src:a(118).default,alt:"memories",height:"60"})]}),Object(W.jsx)(j.a,{in:!0,children:Object(W.jsx)(u.a,{children:Object(W.jsxs)(b.a,{container:!0,className:i.mainContainer,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(W.jsx)(b.a,{item:!0,xs:12,sm:7,children:Object(W.jsx)(H,{setCurrentId:c})}),Object(W.jsx)(b.a,{item:!0,xs:12,sm:4,children:Object(W.jsx)(X,{currentId:r,setCurrentId:c})})]})})})]})},ee=a(80),te={posts:[],currPost:{}},ae=Object(i.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_ALL":return Object(J.a)(Object(J.a)({},e),{},{posts:t.payload});case"CREATE_POST":return Object(J.a)(Object(J.a)({},e),{},{posts:[].concat(Object(ee.a)(e.posts),[t.payload])});case"UPDATE_POST":case"LIKE_POST":return Object(J.a)(Object(J.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case"DELETE_POST":return Object(J.a)(Object(J.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==t.payload}))});default:return e}}}),ne=(a(119),Object(i.e)(ae,Object(i.d)(Object(i.a)(o.a))));c.a.render(Object(W.jsx)(s.a,{store:ne,children:Object(W.jsx)($,{})}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.e2cf2c70.chunk.js.map