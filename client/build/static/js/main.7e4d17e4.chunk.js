(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{362:function(e,t){},364:function(e,t){},376:function(e,t){},378:function(e,t){},404:function(e,t){},406:function(e,t){},407:function(e,t){},413:function(e,t){},415:function(e,t){},433:function(e,t){},435:function(e,t){},447:function(e,t){},450:function(e,t){},633:function(e,t,c){},634:function(e,t,c){},635:function(e,t,c){},636:function(e,t,c){},637:function(e,t,c){},638:function(e,t,c){},639:function(e,t,c){},640:function(e,t,c){},641:function(e,t,c){},678:function(e,t,c){},679:function(e,t,c){},706:function(e,t,c){},707:function(e,t,c){},708:function(e,t,c){},709:function(e,t,c){},710:function(e,t,c){},711:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(2),s=c.n(a),i=c(110),r=c.n(i),l=c(16),j=c(44),d=c(307),o=c(11);var b=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Forgot Page"})})},h=c(3),u=c(27),O=c.n(u),x=function(){var e=c(357),t=JSON.parse(localStorage.getItem("user")),n=e.createHmac("sha256",t.accessToken).update(document.location.host).digest("hex");return t&&t.accessToken&&n?{"x-access-token":n,"x-user-id":t.id,"content-type":"application/json"}:{}},m=function(){return O()({url:"./api/charts",method:"GET",headers:x()}).then((function(e){return 200===e.status?e.data:e}))},f=function(e,t){return O.a.post("./api/auth/login",{email:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e}))},p=function(){localStorage.removeItem("user")},g=function(){return JSON.parse(localStorage.getItem("user"))},v=function(e){return O.a.post("./api/auth/signup",e)},N=function(e){return O()({url:"/api/profile/".concat(e.id),userData:e,method:"PUT",headers:x()})},C=function(e){return O()({url:"/api/child/addChild",data:e,method:"POST",headers:x()})},y=function(){return O()({url:"api/child/children",method:"GET",headers:x()}).then((function(e){return 200===e.status?e.data:e}))},S=function(e){return O()({url:"api/donation/create",data:e,method:"POST",headers:x()}).then((function(e){return 200===e.status?e.data:e}))},k=function(e){return O()({url:"api/child/deleteChild/".concat(e),method:"DELETE",headers:x()})},F=function(e){return O()({url:"api/child/editChild/".concat(e.id),data:e,method:"PUT",headers:x()})},T=function(){return O()({url:"api/tags",method:"GET",headers:x()}).then((function(e){return 200===e.status?{toyTags:e.data.filter((function(e){return"toy"===e.type})),clothesTags:e.data.filter((function(e){return"clothes"===e.type})),furnitureTags:e.data.filter((function(e){return"furniture"===e.type}))}:"Error getting tags"}))};var w=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(""),r=Object(h.a)(i,2),l=r[0],j=r[1],d=Object(a.useState)(""),b=Object(h.a)(d,2),u=b[0],O=b[1],x=Object(a.useState)(""),m=Object(h.a)(x,2),f=m[0],p=m[1],g=Object(a.useState)(""),N=Object(h.a)(g,2),C=N[0],y=N[1],S=Object(a.useState)(""),k=Object(h.a)(S,2),F=k[0],T=k[1],w=Object(a.useState)(""),D=Object(h.a)(w,2),I=D[0],L=D[1],E=Object(a.useState)(""),A=Object(h.a)(E,2),P=A[0],M=A[1],z=Object(a.useState)(""),J=Object(h.a)(z,2),U=J[0],B=J[1],R=Object(a.useState)(""),H=Object(h.a)(R,2),W=H[0],G=H[1];return W?Object(n.jsx)(o.a,{to:"/"}):Object(n.jsx)("div",{children:Object(n.jsx)("table",{children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"email",children:"Email:"})}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{name:"email",type:"text",placeholder:"",value:c,onChange:function(e){s(e.target.value)}})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"password",children:"Password:"})}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{name:"password",type:"password",placeholder:"",value:l,onChange:function(e){j(e.target.value)}})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"firstName",children:"First Name:"})}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{name:"firstName",type:"text",placeholder:"",value:u,onChange:function(e){O(e.target.value)}})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"lastName",children:"Last Name:"})}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{name:"lastName",type:"text",placeholder:"",value:f,onChange:function(e){p(e.target.value)}})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"address1",children:"Address Line 1:"})}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{name:"address1",type:"text",placeholder:"",value:C,onChange:function(e){y(e.target.value)}})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"address2",children:"Address Line 2:"})}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{name:"address2",type:"text",placeholder:"",value:F,onChange:function(e){T(e.target.value)}})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"city",children:"City:"})}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{name:"city",type:"text",placeholder:"",value:I,onChange:function(e){L(e.target.value)}})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"state",children:"State:"})}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{name:"state",type:"text",placeholder:"",value:P,onChange:function(e){M(e.target.value)}})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"zipCode",children:"Zip Code:"})}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{name:"zipCode",type:"text",placeholder:"",value:U,onChange:function(e){B(e.target.value)}})})]}),Object(n.jsx)("tr",{rowSpan:"2",children:Object(n.jsx)("td",{children:Object(n.jsx)("button",{onClick:function(e){e.preventDefault(),v({email:c,password:l,firstName:u,lastName:f,address1:C,address2:F,city:I,state:P,zipCode:U}).then((function(e){200===e.status&&(localStorage.setItem("user",JSON.stringify({id:id,email:c,address1:C,city:I,state:P,zipCode:U})),G(!0))}))},children:"Create Account"})})})]})})})};var D=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Create an account"}),Object(n.jsx)(w,{})]})},I=c(45);var L=function(){var e=Object(a.useState)(),t=Object(h.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(),r=Object(h.a)(i,2),l=r[0],j=r[1],d=Object(a.useState)(),o=Object(h.a)(d,2),b=o[0],u=o[1];return Object(a.useEffect)((function(){m().then((function(e){s(e[0].toysDonated),j(e[0].clothesDonated),u(e[0].furnitureDonated)})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsxs)(I.b,{width:300,height:300,data:[{name:"Clothes",amt:l},{name:"Toys",amt:c},{name:"Furniture",amt:b}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(n.jsx)(I.c,{strokeDasharray:"3 3"}),Object(n.jsx)(I.f,{dataKey:"name"}),Object(n.jsx)(I.g,{type:"number",domain:[0,500]}),Object(n.jsx)(I.e,{}),Object(n.jsx)(I.d,{}),Object(n.jsx)(I.a,{name:"Amount donated",dataKey:"amt",fill:"#8884d8"})]})},E=function(){var e=g();return Object(n.jsxs)("div",{className:"loggedInDiv",children:[Object(n.jsx)("h1",{children:"Members Page"}),Object(n.jsxs)("p",{children:["Welcome ",e.firstName]}),Object(n.jsx)(L,{}),Object(n.jsx)(l.b,{className:"donateBtn",to:"/Donations",children:"I'm ready to DONATE!"})]})};c(633),c(634);var A=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(!1),r=Object(h.a)(i,2),j=r[0],d=r[1],b=Object(a.useState)(""),u=Object(h.a)(b,2),O=u[0],x=u[1],m=Object(a.useState)(""),p=Object(h.a)(m,2),g=p[0],v=p[1];return c?Object(n.jsx)(o.a,{to:"/Members"}):Object(n.jsxs)("form",{className:"login-form",id:"login",children:[Object(n.jsx)("h2",{children:"Welcome Back"}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"login-row",children:[Object(n.jsx)("label",{type:"text",htmlFor:"userName",children:"Username"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{className:"input-field",type:"userName",id:"userName",name:"userName",placeholder:"",value:O,onChange:function(e){x(e.target.value)}})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"login-row",children:[Object(n.jsx)("label",{type:"text",htmlFor:"password",children:"Password"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{className:"input-field",type:"password",id:"password",name:"password",placeholder:"",value:g,onChange:function(e){v(e.target.value)}})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"login-row",children:[Object(n.jsx)("input",{type:"checkbox",id:"remember-me",name:"remember-me",value:"false"}),Object(n.jsx)("label",{type:"text",htmlFor:"remember-me",children:"\xa0Remember Me"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"login-row",children:Object(n.jsx)("button",{className:"sign-in-btn",onClick:function(e){e.preventDefault(),f(O,g).then((function(e){200===e.status?s(!0):d(!0)})).catch((function(){d(!0)}))},children:"Sign In"})}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"login-row",children:Object(n.jsxs)(l.b,{className:"forgot",to:"/forgot",children:["Forgot password?\xa0",Object(n.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})]})}),Object(n.jsxs)("div",{className:"login-row",children:[Object(n.jsxs)(l.b,{className:"forgot",to:"/signup",children:["Not a member? Sign up now.\xa0",Object(n.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})]}),j&&Object(n.jsx)("div",{className:"error",children:"The username or password provided did not match."})]})]})};var P=function(){return g()?Object(n.jsx)(o.a,{to:"/Members"}):Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("h1",{children:"Hand-Me-Ups"})}),Object(n.jsx)("div",{id:"lego"}),Object(n.jsx)("div",{id:"stripe"}),Object(n.jsx)("div",{id:"grid-one"}),Object(n.jsxs)("div",{id:"grid-two",children:[Object(n.jsx)("h1",{children:"Connect"}),Object(n.jsx)("p",{id:"p1",children:"Join local families and help your child learn about responsibility, genorosity and giving. Donate or recieve toys, clothing and furniture from a family in your community and give these items a second life."})]}),Object(n.jsxs)("div",{id:"grid-three",children:[Object(n.jsx)("h1",{children:"Donate and Recieve"}),Object(n.jsx)("p",{id:"p1",children:"Create an account and sign up to recieve and donate toys, furniture or clothing. Based on your childrens age, gender preference and items to be donated or recieved you can connect with families in your community that fit the needs of your child. Let the toys, clothing and furniture that your child no longer uses have a second chance to bring joy to a child or recieve items that your child will love."})]}),Object(n.jsx)(A,{})]})},M=c(66),z=c(17),J=c(18);var U=function(e){var t=e.tag,c=e.tags,s=e.id,i=e.icon,r=e.Icon,l=e.edit,j=e.onClick,d=Object(a.useState)(!1),o=Object(h.a)(d,2),b=o[0],u=o[1],O=Object(a.useState)(!1),x=Object(h.a)(O,2),m=x[0],f=x[1];return Object(a.useEffect)((function(){c.includes(s)&&(f(!0),u(!0))}),[]),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsxs)("label",{children:[t,":"]})}),Object(n.jsx)("td",{children:m&&!l?Object(n.jsx)(r,{icon:i}):""}),Object(n.jsx)("td",{children:l?Object(n.jsx)("form",{children:Object(n.jsx)("input",{type:"checkbox",checked:b,onChange:function(e){return function(e){u(e.target.checked),j(s)}(e)}})}):""})]})};c(635);var B=function(e){var t=Object(a.useState)(!1),c=Object(h.a)(t,2),s=c[0],i=c[1],r=g(""),l=Object(a.useState)(""),j=Object(h.a)(l,2),d=j[0],b=j[1],u=Object(a.useState)(""),O=Object(h.a)(u,2),x=O[0],m=O[1],f=Object(a.useState)(""),p=Object(h.a)(f,2),v=p[0],N=p[1],C=Object(a.useState)(""),y=Object(h.a)(C,2),S=y[0],w=y[1],D=Object(a.useState)(),I=Object(h.a)(D,2),L=I[0],E=I[1],A=Object(a.useState)(),P=Object(h.a)(A,2),B=P[0],R=P[1],H=Object(a.useState)(),W=Object(h.a)(H,2),G=W[0],Y=W[1],Z=Object(a.useState)(),K=Object(h.a)(Z,2),q=K[0],X=K[1],$=Object(a.useState)(),Q=Object(h.a)($,2),V=Q[0],_=Q[1],ee=Object(a.useState)(),te=Object(h.a)(ee,2),ce=te[0],ne=te[1],ae=Object(a.useState)(!1),se=Object(h.a)(ae,2),ie=se[0],re=se[1],le=Object(a.useState)([]),je=Object(h.a)(le,2),de=je[0],oe=je[1],be=Object(a.useState)([]),he=Object(h.a)(be,2),ue=he[0],Oe=he[1],xe=Object(a.useState)([]),me=Object(h.a)(xe,2),fe=me[0],pe=me[1],ge=Object(a.useState)([]),ve=Object(h.a)(ge,2),Ne=ve[0],Ce=ve[1],ye=function(e){Ne.includes(e)?Ce(Ne.filter((function(t){return t!==e}))):Ce([].concat(Object(M.a)(Ne),[e]))};return Object(a.useEffect)((function(){b(e.firstName),m(e.lastName),N(e.birthday),w(e.gender),E(e.receiveToys),R(e.receiveClothes),Y(e.receiveFurniture),X(e.donateToys),_(e.donateClothes),ne(e.donateFurniture),e.tags&&Ce(e.tags),T().then((function(e){console.log(e),"Error getting tags"!==e&&(oe(e.toyTags),Oe(e.clothesTags),pe(e.furnitureTags))}))}),[]),s?Object(n.jsx)(o.a,{to:"/Profile"}):Object(n.jsxs)("div",{className:"childProfile",children:[Object(n.jsxs)("h2",{className:"editChildTitle",children:["Edit ",e.firstName,"\u2019s profile"]}),Object(n.jsx)("table",{className:"table",children:Object(n.jsxs)("tbody",{id:"childTableBody",children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"firstName",className:"editChildLabel",children:"Firstname:"})}),Object(n.jsx)("td",{children:e.firstName}),Object(n.jsx)("td",{children:ie?Object(n.jsx)("input",{name:"firstName",className:"editChildInput",type:"text",placeholder:e.firstName,value:d,onChange:function(e){b(e.target.value)}}):Object(n.jsx)("div",{})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"lastName",className:"editChildLabel",children:"Last Name:"})}),Object(n.jsx)("td",{children:e.lastName}),Object(n.jsx)("td",{children:ie?Object(n.jsx)("input",{name:"lastName",className:"editChildInput",type:"text",placeholder:e.lastName,value:x,onChange:function(e){m(e.target.value)}}):Object(n.jsx)("div",{})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"birthday",className:"editChildLabel",children:"Birthday:"})}),Object(n.jsx)("td",{children:e.birthday}),Object(n.jsx)("td",{children:ie?Object(n.jsx)("input",{name:"birthday",className:"editChildInput",type:"text",placeholder:e.birthday,value:v,onChange:function(e){N(e.target.value)}}):Object(n.jsx)("div",{})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"gender",className:"editChildLabel",children:"Gender:"})}),Object(n.jsx)("td",{children:e.gender}),Object(n.jsx)("td",{children:ie?Object(n.jsxs)("select",{className:"childSelect",onChange:function(e){w(e.target.value)},children:[Object(n.jsx)("option",{value:"male",children:"male"}),Object(n.jsx)("option",{value:"female",children:"female"})]}):""})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"receiveToys",className:"editChildLabel",children:"Receive Toys:"})}),Object(n.jsx)("td",{children:e.receiveToys?Object(n.jsx)(z.a,{icon:J.c}):""}),Object(n.jsx)("td",{children:ie?Object(n.jsx)("input",{name:"receiveToys",className:"editChildCheckbox",type:"checkbox",checked:L,onChange:function(e){E(e.target.checked)}}):""})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"receiveClothes",className:"editChildLabel",children:"Receive Clothes:"})}),Object(n.jsx)("td",{children:e.receiveClothes?Object(n.jsx)(z.a,{icon:J.f}):""}),Object(n.jsx)("td",{children:ie?Object(n.jsx)("input",{name:"receiveClothes",className:"editChildCheckbox",type:"checkbox",checked:B,onChange:function(e){R(e.target.checked)}}):""})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"receiveFurniture",className:"editChildLabel",children:"Receive Furniture:"})}),Object(n.jsx)("td",{children:e.receiveFurniture?Object(n.jsx)(z.a,{icon:J.a}):""}),Object(n.jsx)("td",{children:ie?Object(n.jsx)("input",{name:"receiveFurniture",className:"editChildCheckbox",type:"checkbox",checked:G,onChange:function(e){Y(e.target.checked)}}):""})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"donateToys",className:"editChildLabel",children:"Donate Toys:"})}),Object(n.jsx)("td",{children:e.donateToys?Object(n.jsx)(z.a,{icon:J.c}):""}),Object(n.jsx)("td",{children:ie?Object(n.jsx)("input",{name:"donateToys",className:"editChildCheckbox",type:"checkbox",checked:q,onChange:function(e){X(e.target.checked)}}):""})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"donateClothes",className:"editChildLabel",children:"Donate Clothes:"})}),Object(n.jsx)("td",{children:e.donateClothes?Object(n.jsx)(z.a,{icon:J.f}):""}),Object(n.jsx)("td",{children:ie?Object(n.jsx)("input",{name:"donateClothes",className:"editChildCheckbox",type:"checkbox",checked:V,onChange:function(e){_(e.target.checked)}}):""})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("label",{htmlFor:"donateFurniture",className:"editChildLabel",children:"Donate Furniture:"})}),Object(n.jsx)("td",{children:e.donateFurniture?Object(n.jsx)(z.a,{icon:J.a}):""}),Object(n.jsx)("td",{children:ie?Object(n.jsx)("input",{name:"donateFurniture",className:"editChildCheckbox",type:"checkbox",checked:ce,onChange:function(e){ne(e.target.checked)}}):""})]}),de.map((function(e){return Object(n.jsx)(U,{tag:e.tag,tags:Ne,id:e.id,icon:J.b,Icon:z.a,edit:ie,onClick:ye},e.id)})),ue.map((function(e){return Object(n.jsx)(U,{tag:e.tag,tags:Ne,id:e.id,icon:J.b,Icon:z.a,edit:ie,onClick:ye},e.id)})),fe.map((function(e){return Object(n.jsx)(U,{tag:e.tag,tags:Ne,id:e.id,icon:J.b,Icon:z.a,edit:ie,onClick:ye},e.id)})),Object(n.jsx)("tr",{})]})}),ie?Object(n.jsxs)("div",{className:"btnDiv",children:[Object(n.jsx)("button",{className:"btn btn-default",onClick:function(t){t.preventDefault(),k(e.ParentId,e.childId).then((function(t){if(200===t.status){var c=r.children;r.children=c.filter((function(t){return t.childId!==e.childId})),localStorage.setItem("user",JSON.stringify(r)),i(!0)}}))},children:"Delete Child"}),Object(n.jsx)("button",{className:"btn btn-default",onClick:function(t){t.preventDefault(),F({firstName:d,lastName:x,birthday:v,gender:S,receiveToys:L,receiveClothes:B,receiveFurniture:G,donateToys:q,donateClothes:V,donateFurniture:ce,tags:Ne,id:e.childId},r.id).then((function(t){if(200===t.status){var c=r.children;r.children=c.map((function(t){return t.childId!==e.childId||(t.firstName=d,t.lastName=x,t.birthday=v,t.gender=S,t.receiveToys=L,t.receiveClothes=B,t.receiveFurniture=G,t.donateToys=q,t.donateClothes=V,t.donateFurniture=ce,t.tags=Ne),t})),localStorage.setItem("user",JSON.stringify(r)),window.location.reload()}}))},children:"Save Changes"}),Object(n.jsx)("button",{className:"btn btn-default",onClick:function(){window.location.reload()},children:"Cancel"})]}):Object(n.jsx)("div",{className:"btnDiv",children:Object(n.jsx)("button",{className:"btn btn-default",onClick:function(){re(!ie)},children:"Edit Child"})})]})};c(636);var R=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(""),r=Object(h.a)(i,2),l=r[0],d=r[1],b=Object(a.useState)(""),u=Object(h.a)(b,2),O=u[0],x=u[1],m=Object(a.useState)(""),f=Object(h.a)(m,2),p=f[0],v=f[1],C=Object(a.useState)(""),y=Object(h.a)(C,2),S=y[0],k=y[1],F=Object(a.useState)(""),T=Object(h.a)(F,2),w=T[0],D=T[1],I=Object(a.useState)(!1),L=Object(h.a)(I,2),E=L[0],A=L[1],P=g(""),M=Object(a.useState)(!1),z=Object(h.a)(M,2),J=z[0],U=z[1],R=Object(a.useState)(!1),H=Object(h.a)(R,2),W=H[0],G=H[1],Y=Object(a.useState)([]),Z=Object(h.a)(Y,2),K=Z[0],q=Z[1];return Object(a.useEffect)((function(){s(P.id),d(P.email),x(P.address1),v(P.city),k(P.state),D(P.zipCode),q(P.children)}),[]),J?Object(n.jsx)(o.a,{to:"/AddChild"}):W?(G(!1),Object(n.jsx)(o.a,{to:"/Profile"})):Object(n.jsxs)("div",{className:"parentProfile",children:[Object(n.jsx)("h2",{className:"editTitle",children:"Edit your profile"}),Object(n.jsx)("table",{className:"table",children:Object(n.jsxs)("tbody",{id:"tableBody",children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"right-Align",children:Object(n.jsx)("label",{htmlFor:"email",className:"parentLabel",children:"Email:"})}),Object(n.jsx)("td",{children:P.email}),Object(n.jsx)("td",{children:E?Object(n.jsx)("input",{name:"email",className:"parentInput",type:"text",placeholder:l,value:l,onChange:function(e){d(e.target.value)}}):""})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"right-Align",children:Object(n.jsx)("label",{htmlFor:"address1",className:"parentLabel",children:"Address:"})}),Object(n.jsx)("td",{children:P.address1}),Object(n.jsx)("td",{children:E?Object(n.jsx)("input",{name:"address1",className:"parentInput",type:"text",placeholder:O,value:O,onChange:function(e){setAddress1(e.target.value)}}):""})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"right-Align",children:Object(n.jsx)("label",{htmlFor:"city",className:"parentLabel",children:"City:"})}),Object(n.jsx)("td",{children:P.city}),Object(n.jsx)("td",{children:E?Object(n.jsx)("input",{name:"city",className:"parentInput",type:"text",placeholder:p,value:p,onChange:function(e){v(e.target.value)}}):""})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"right-Align",children:Object(n.jsx)("label",{htmlFor:"state",className:"parentLabel ",children:"State:"})}),Object(n.jsx)("td",{children:P.state}),Object(n.jsx)("td",{children:E?Object(n.jsx)("input",{name:"state",className:"parentInput",type:"text",placeholder:S,value:S,onChange:function(e){k(e.target.value)}}):""})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"right-Align",children:Object(n.jsx)("label",{htmlFor:"zipCode",className:"parentLabel ",children:"Zip Code:"})}),Object(n.jsx)("td",{children:P.zipCode}),Object(n.jsx)("td",{children:E?Object(n.jsx)("input",{name:"zipCode",className:"parentInput",type:"text",placeholder:w,value:w,onChange:function(e){D(e.target.value)}}):""})]})]})}),E?Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(e){e.preventDefault(),N({email:l,id:c,address1:O,city:p,state:S,zipCode:w}).then((function(e){200===e.status&&(localStorage.setItem("user",JSON.stringify(Object(j.a)(Object(j.a)({},P),{},{email:l,address1:O,city:p,state:S,zipCode:w}))),A(!1))}))},className:"btn btn-default",children:"Update"}),Object(n.jsx)("button",{onClick:function(){window.location.reload()},className:"btn btn-default",children:"Cancel"})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(){A(!E)},className:"btn btn-default",children:"Edit"}),Object(n.jsx)("button",{onClick:function(){U(!0)},className:"btn btn-default",children:"Add Child"})]}),Object(n.jsx)("div",{className:"childDiv",children:K.map((function(e){return Object(n.jsx)(B,Object(j.a)(Object(j.a)({},e),{},{refresh:G,ParentId:P.id}),"childId-"+e.childId)}))})]})};var H=function(){return Object(n.jsx)("div",{className:"loggedInDiv",children:Object(n.jsx)(R,{})})};var W=function(e){var t=e.tag,c=e.id,s=e.onClick,i=Object(a.useState)(!1),r=Object(h.a)(i,2),l=r[0],j=r[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("label",{children:[t,":"]}),Object(n.jsx)("input",{type:"checkbox",value:l,onChange:function(e){j(e.target.value),s(e,c)}})]})};c(637);var G=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(""),r=Object(h.a)(i,2),l=r[0],j=r[1],d=Object(a.useState)(""),b=Object(h.a)(d,2),u=b[0],O=b[1],x=Object(a.useState)(""),m=Object(h.a)(x,2),f=m[0],p=m[1],v=Object(a.useState)(!1),N=Object(h.a)(v,2),y=N[0],S=N[1],k=Object(a.useState)(!1),F=Object(h.a)(k,2),w=F[0],D=F[1],I=Object(a.useState)(!1),L=Object(h.a)(I,2),E=L[0],A=L[1],P=Object(a.useState)(!1),z=Object(h.a)(P,2),J=z[0],U=z[1],B=Object(a.useState)(!1),R=Object(h.a)(B,2),H=R[0],G=R[1],Y=Object(a.useState)(!1),Z=Object(h.a)(Y,2),K=Z[0],q=Z[1],X=Object(a.useState)([]),$=Object(h.a)(X,2),Q=$[0],V=$[1],_=g(""),ee=Object(a.useState)(!1),te=Object(h.a)(ee,2),ce=te[0],ne=te[1],ae=Object(a.useState)([]),se=Object(h.a)(ae,2),ie=se[0],re=se[1],le=Object(a.useState)([]),je=Object(h.a)(le,2),de=je[0],oe=je[1],be=Object(a.useState)([]),he=Object(h.a)(be,2),ue=he[0],Oe=he[1],xe=function(e,t){e.preventDefault(),V([].concat(Object(M.a)(Q),[t]))};return Object(a.useEffect)((function(){T(_.id).then((function(e){"Error getting tags"!==e&&(re(e.toyTags),oe(e.clothesTags),Oe(e.furnitureTags))}))}),[]),ce?Object(n.jsx)(o.a,{to:"/Profile"}):Object(n.jsxs)("div",{className:"addChild",children:[Object(n.jsx)("h2",{className:"addChildTitle",children:"Add a Child"}),Object(n.jsxs)("form",{className:"addChildForm",children:[Object(n.jsx)("label",{htmlFor:"fName",className:"addChildLabel",children:"First Name:"}),Object(n.jsx)("input",{name:"fName",className:"addChildInput",type:"text",value:c,onChange:function(e){s(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"lName",className:"addChildLabel",children:"Last Name:"}),Object(n.jsx)("input",{name:"lName",className:"addChildInput",type:"text",value:l,onChange:function(e){j(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"bDay",className:"addChildLabel",children:"Birthday:"}),Object(n.jsx)("input",{name:"bDay",className:"addChildInput",type:"text",placeholder:"YYYY-MM-DD",value:u,onChange:function(e){O(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"gender",className:"addChildLabel",children:"Gender:"}),Object(n.jsxs)("select",{className:"childSelect",onChange:function(e){p(e.target.value)},children:[Object(n.jsx)("option",{value:"male",children:"male"}),Object(n.jsx)("option",{value:"female",children:"female"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"receiveToys",className:"addChildLabel",children:"Receive Toys:"}),Object(n.jsx)("input",{name:"receiveToys",className:"addChildCheckbox",type:"checkbox",value:!0,onChange:function(e){S(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"receiveClothes",className:"addChildLabel",children:"Receive Clothes:"}),Object(n.jsx)("input",{name:"receiveClothes",className:"addChildCheckbox",type:"checkbox",value:!0,onChange:function(e){D(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"receiveFurniture",className:"addChildLabel",children:"Receive Furniture:"}),Object(n.jsx)("input",{name:"receiveFurniture",className:"addChildCheckbox",type:"checkbox",value:!0,onChange:function(e){A(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"donateToys",className:"addChildLabel",children:"Donate Toys:"}),Object(n.jsx)("input",{name:"donateToys",className:"addChildCheckbox",type:"checkbox",value:!0,onChange:function(e){U(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"donateClothes",className:"addChildLabel",children:"Donate Clothes:"}),Object(n.jsx)("input",{name:"donateClothes",className:"addChildCheckbox",type:"checkbox",value:!0,onChange:function(e){G(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"donateFurniture",className:"addChildLabel",children:"Donate Furniture:"}),Object(n.jsx)("input",{name:"donateFurniture",className:"addChildCheckbox",type:"checkbox",value:!0,onChange:function(e){q(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("h3",{children:"Tell us your child\u2019s interests:"}),ie.map((function(e){return Object(n.jsx)(W,{tag:e.tag,id:e.id,onClick:xe},e.id)})),Object(n.jsx)("h3",{children:"Tell us what clothes you need:"}),de.map((function(e){return Object(n.jsx)(W,{tag:e.tag,id:e.id,onClick:xe},e.id)})),Object(n.jsx)("h3",{children:"Tell us your furniture needs:"}),ue.map((function(e){return Object(n.jsx)(W,{tag:e.tag,id:e.id,onClick:xe},e.id)})),Object(n.jsx)("button",{onClick:function(e){e.preventDefault(),C({firstName:c,lastName:l,birthday:u,gender:f,receiveToys:y,receiveClothes:w,receiveFurniture:E,donateToys:J,donateClothes:H,donateFurniture:K,tags:Q,ParentId:_.id}).then((function(e){200===e.status&&(_.children.push({childId:e.data.id,firstName:c,lastName:l,birthday:u,gender:f,receiveToys:y,receiveClothes:w,receiveFurniture:E,donateToys:J,donateClothes:H,donateFurniture:K,tags:Q}),localStorage.setItem("user",JSON.stringify(_)),ne(!0))}))},className:"btn btn-default",children:"Add Child"})]})]})};var Y=function(){return Object(n.jsx)("div",{className:"loggedInDiv",children:Object(n.jsx)(G,{})})},Z=function(e){var t=e.tag;return Object(n.jsx)("ul",{className:"toyTags",children:t.map((function(e){return Object(n.jsx)("li",{children:e.tag},e.tag)}))})},K=function(e){var t=e.tag;return Object(n.jsx)("ul",{className:"clothesTags",children:t.map((function(e){return Object(n.jsx)("li",{children:e.tag},e.tag)}))})},q=function(e){var t=e.tag;return Object(n.jsx)("ul",{className:"furnitureTags",children:t.map((function(e){return Object(n.jsx)("li",{children:e.tag},e.tag)}))})};c(638);var X=function(e){var t=e.tags.filter((function(e){return"toy"===e.type})),c=e.tags.filter((function(e){return"clothes"===e.type})),a=e.tags.filter((function(e){return"furniture"===e.type}));return Object(n.jsx)("div",{className:"DonationDemographics",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("h3",{children:e.gender}),Object(n.jsx)("h3",{children:e.age}),Object(n.jsx)(Z,{tag:t}),Object(n.jsx)(K,{tag:c}),Object(n.jsx)(q,{tag:a})]})})};c(639),c(640);var $=function(e){var t=e.changeChosen,c=e.childID;return Object(n.jsx)("button",{onClick:function(){return t(c)},className:"card-btn",children:"Choose this Donation"})},Q=(c(641),c(642));var V=function(e){var t=e.parentFName,c=e.parentLName,a=e.parentID,s=e.parentAddy1,i=e.parentCity,r=e.parentState,l=e.parentZip,j=e.toggleModal,d="".concat(t).concat(c).concat(a);return Object(n.jsx)("div",{id:"container",onClick:function(e){return j(e)},children:Object(n.jsxs)("div",{className:"ShippingLabel",children:[Object(n.jsx)("div",{onClick:function(e){return j(e)},children:"X"}),Object(n.jsx)("h3",{children:"Please detach this half of the page and place inside your package"}),Object(n.jsx)(Q,{value:d}),Object(n.jsx)("p",{children:"-----------------------------------------------------------------------------------------"}),Object(n.jsxs)("div",{className:"returnAddy",children:[Object(n.jsx)("p",{children:"".concat(t," ").concat(c)}),Object(n.jsx)("p",{children:"".concat(s," ").concat(i,", ").concat(r," ").concat(l)})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"address",children:[Object(n.jsx)("h3",{children:"Hand-Me-Ups LLC"}),Object(n.jsx)("h4",{children:"1234 Donation Lane"}),Object(n.jsx)("h4",{children:"Lynnburn Issaqualmie, WA 98123"}),Object(n.jsx)(Q,{value:"HandMeUpsLLC"})]})]})})},_=function(){var e=Object(a.useState)(!0),t=Object(h.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)([]),r=Object(h.a)(i,2),l=r[0],j=r[1],d=Object(a.useState)(!1),o=Object(h.a)(d,2),b=o[0],u=o[1],O=Object(a.useState)(!1),x=Object(h.a)(O,2),m=x[0],f=x[1];function p(){!1===b&&u(!0),S(userData).then((function(e){return e.data})).then((function(){f(!0)}))}var v=g();return Object(a.useEffect)((function(){y().then((function(e){s(!1),j(e)}))}),[]),c?Object(n.jsx)("h1",{children:"Loading..."}):Object(n.jsxs)("div",{className:"Outgoing",children:[l.map((function(e){return Object(n.jsxs)("div",{className:"outgoingCard",children:[Object(n.jsx)(X,{child:e}),Object(n.jsx)($,{childID:e.id,changeChosen:p})]},e.id)})),m?Object(n.jsx)(V,{parentFName:v.firstName,parentLName:v.lastName,parentAddy1:v.address1,parentCity:v.city,parentState:v.state,parentZip:v.zipCode,parentID:v.id,toggleModal:function(e){e.preventDefault(),e.stopPropagation(),f(!m)}}):Object(n.jsx)(n.Fragment,{children:" "}),";"]})};c(678);var ee=function(){return Object(n.jsx)("div",{className:"container1",children:Object(n.jsxs)("div",{className:"grid loggedInDiv",children:[Object(n.jsx)("h1",{children:"Donations"}),Object(n.jsx)(_,{})]})})},te=c(42),ce=c.n(te),ne=Object(a.createContext)(),ae=function(e){var t=Object(a.useState)(0),c=Object(h.a)(t,2),s=c[0],i=c[1];return Object(n.jsx)(ne.Provider,{value:{shipNotifications:s,setShipNotifications:i},children:e.children})};ne.propTypes={children:ce.a.node};var se=ne,ie=(c(679),c(284)({withCredentials:!0,extraHeaders:{"hand-me-ups-header":"header-content"}}));var re=function(){var e=Object(a.useContext)(se),t=e.shipNotifications,c=e.setShipNotifications;return Object(a.useEffect)((function(){ie.on("package",(function(){c(t+1)}))})),Object(a.useEffect)((function(){document.title="".concat(t," new package coming")}),[t]),Object(n.jsx)(s.a.Fragment,{children:Object(n.jsxs)("div",{className:"notification",onClick:function(e){return function(e){e.preventDefault(),c(0)}(e)},children:[Object(n.jsx)(z.a,{icon:J.d}),t>0?Object(n.jsx)("span",{className:"badge",children:t}):""]})})};c(706);var le=function(){var e=Object(o.g)();return Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsx)("div",{className:"navbar-branding",children:Object(n.jsx)("div",{className:"navbar-brand",children:Object(n.jsx)("h1",{children:"Hand Me Ups"})})}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:"nav-list",children:[Object(n.jsx)("li",{children:Object(n.jsx)(re,{})}),Object(n.jsx)("li",{className:"nav-spacer",children:"|"}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.c,{to:"/Members",className:"nav-link",activeClassName:"active",children:"Members"})}),Object(n.jsx)("li",{className:"nav-spacer",children:"|"}),Object(n.jsx)("li",{className:"nav-item",activeClassName:"active",children:Object(n.jsx)(l.c,{to:"/Profile",className:"nav-link",activeClassName:"active",children:"Profile"})}),Object(n.jsx)("li",{className:"nav-spacer",children:"|"}),Object(n.jsx)("li",{className:"nav-item",onClick:function(){p(),e.push("/")},children:Object(n.jsx)("span",{className:"nav-link",children:"Logout"})})]})})]})};c(707),c(708);var je=function(e){var t=e.line,c=e.author,a={textAlign:"right"};return t.author===c&&(a={textAlign:"left"}),Object(n.jsxs)("div",{className:"messageLine",style:a,children:[t.author,": ",t.message]})},de=c(284)({withCredentials:!0,extraHeaders:{"hand-me-ups":"header-content"}});var oe=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(!1),r=Object(h.a)(i,2),l=r[0],j=r[1],d=Object(a.useState)(""),o=Object(h.a)(d,2),b=o[0],u=o[1],O=Object(a.useState)(!1),x=Object(h.a)(O,2),m=x[0],f=x[1],p=Object(a.useState)([]),v=Object(h.a)(p,2),N=v[0],C=v[1],y=g({}),S=Object(a.useState)(0),k=Object(h.a)(S,2),F=k[0],T=k[1];return de.on("chat",(function(e){u(""),f(!1),C([].concat(Object(M.a)(N),[e])),l||T(F+1)})),de.on("typing",(function(e){u(e),f(!0)})),Object(n.jsx)("section",{className:"chat-section",children:l?Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"chat-popup",children:[Object(n.jsx)("div",{className:"chat-area",children:Object(n.jsxs)("div",{className:"income-msg",children:[Object(n.jsx)("div",{className:"feedback",children:Object(n.jsx)("em",{children:m?"".concat(b," is typing a message..."):""})}),Object(n.jsx)("div",{className:"output",children:N.map((function(e,t){return Object(n.jsx)(je,{line:e,author:y.firstName},t)}))})]})}),Object(n.jsxs)("div",{className:"input-area",children:[Object(n.jsx)("input",{id:"message",type:"text",placeholder:"Message",value:c,onChange:function(e){return function(e){s(e.target.value),de.emit("typing",y.firstName)}(e)}}),Object(n.jsx)("button",{className:"submit",id:"send",onClick:function(){return de.emit("chat",{author:y.firstName,message:c}),void s("")},children:Object(n.jsx)(z.a,{icon:J.e})})]})]}),Object(n.jsx)("div",{className:"notification chat-btn",onClick:function(){j(!l),T(0)},children:Object(n.jsx)(z.a,{icon:J.g})})]}):Object(n.jsxs)("div",{className:"notification chat-btn",onClick:function(){j(!l),T(0)},children:[Object(n.jsx)(z.a,{icon:J.g}),F>0?Object(n.jsx)("span",{className:"badge",children:F}):""]})})};c(709);var be=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("span",{children:"Hand Me Ups \xa92020"})})},he=function(e){var t=e.component,c=Object(d.a)(e,["component"]);return g()?Object(n.jsx)(o.b,Object(j.a)(Object(j.a)({},c),{},{component:t})):Object(n.jsx)(o.a,{to:"/"})},ue=function(){return Object(n.jsxs)(ae,{children:[Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{exact:!0,path:"/"}),Object(n.jsx)(o.b,{component:le})]}),Object(n.jsxs)(o.d,{children:[Object(n.jsx)(he,{exact:!0,path:"/Members",component:E}),Object(n.jsx)(he,{exact:!0,path:"/Profile",component:H}),Object(n.jsx)(he,{exact:!0,path:"/AddChild",component:Y}),Object(n.jsx)(he,{exact:!0,path:"/Donations",component:ee}),Object(n.jsx)(o.b,{exact:!0,path:"/Forgot",component:b}),Object(n.jsx)(o.b,{exact:!0,path:"/Signup",component:D}),Object(n.jsx)(o.b,{path:"/",component:P})]}),Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{exact:!0,path:"/"}),Object(n.jsx)(o.b,{component:oe})]}),Object(n.jsx)(be,{})]})},Oe=(c(710),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function xe(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(n.jsx)(l.a,{children:Object(n.jsx)(ue,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");Oe?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):xe(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):xe(e)}))}}()}},[[711,1,2]]]);
//# sourceMappingURL=main.7e4d17e4.chunk.js.map