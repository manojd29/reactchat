(this["webpackJsonpfirebase-react-auth"]=this["webpackJsonpfirebase-react-auth"]||[]).push([[0],{56:function(e,t,a){e.exports=a(90)},67:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(48),s=a.n(r),o=a(10),l=a(28);a(61),a(63),a(91);l.initializeApp({apiKey:"AIzaSyBpmYvFxrfpKeMp2n227DNJBdFly6GpqkU",authDomain:"reactjs-auth-324ee.firebaseapp.com",databaseURL:"https://reactjs-auth-324ee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"reactjs-auth-324ee",storageBucket:"reactjs-auth-324ee.appspot.com",messagingSenderId:"283143639450",appId:"1:283143639450:web:77bc31cc9504934637aa23"});var m=l.auth(),i=(l.firestore(),l.analytics(),new l.auth.GoogleAuthProvider),u=c.a.createContext();function p(e){var t=e.children,a=Object(n.useState)(),r=Object(o.a)(a,2),s=(r[0],r[1]),l=Object(n.useState)(!0),i=Object(o.a)(l,2),p=i[0],g=i[1];Object(n.useEffect)((function(){return m.onAuthStateChanged((function(e){s(e),g(!1)}))}),[]);var f={login:function(e,t){return m.signInWithEmailAndPassword(e,t)},logout:function(){return m.signOut()}};return c.a.createElement(u.Provider,{value:f},!p&&t)}var g=a(37),f=a(6),d=a(95),E=a(96);a(67);function b(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(f.f)();return console.log(a),c.a.createElement("div",{className:"loginPage"},c.a.createElement("div",{className:"loginContainer"},c.a.createElement(d.a.Title,null,"App Name"),c.a.createElement(E.a,{onClick:function(){m.signInWithPopup(i).then((function(){r(!0),s.push("/home")}))},variant:"outline-primary",className:"loginBtn",type:"submit"},c.a.createElement("img",{style:{width:"15px",marginBottom:"3px",marginRight:"5px"},alt:"Google login",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"}),"Sign In With Google")))}var h=a(41),v=a(40),j=a(94),N=a(93),O=(a(79),a(33)),y=a.n(O),x=a(39);a(80);function S(e){var t=e.message,a=t.text,n=t.user,r=!1;return n===e.name&&(r=!0),r?c.a.createElement("div",{className:"messageContainer justifyEnd"},c.a.createElement("p",{className:"sentText pr-10"},n),c.a.createElement("div",{className:"messageBox backgroundBlue"},c.a.createElement("p",{className:"messageText colorWhite"},y.a.emojify(a)))):c.a.createElement("div",{className:"messageContainer justifyStart"},c.a.createElement("div",{className:"messageBox backgroundLight"},c.a.createElement("p",{className:"messageText colorDark"},y.a.emojify(a))),c.a.createElement("p",{className:"sentText pl-10 "},n))}a(81);var C=function(e){var t=e.messages,a=e.name;return c.a.createElement("div",{className:"pageStyle",id:"msg-container"},c.a.createElement(x.a,null,t.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement(S,{message:e,name:a}))}))))},k=(a(82),a(92));a(83);function w(e){var t=e.room;return c.a.createElement(k.a,{className:"infobar-container"},c.a.createElement("div",{className:"left-container"},c.a.createElement("h1",{className:"room-name"},t)),c.a.createElement("div",{className:"right-container"},c.a.createElement("a",{href:"/home"},c.a.createElement(E.a,{className:"leave-btn"},"Leave Room"))))}var L;a(84);function R(e){var t=e.setMessage,a=e.sendMessage,n=e.message;return c.a.createElement("form",{className:"inputform"},c.a.createElement("input",{className:"textinput",value:n,placeholder:"Type your message!!!",onChange:function(e){return t(e.target.value)},onkeyPress:function(e){return"Enter"===e.key?a:"null"}}),c.a.createElement("button",{className:"sendMsg",onClick:a},"SEND"))}function B(e){var t=e.name,a=e.room,r=e.photoURL,s=Object(n.useState)(""),l=Object(o.a)(s,2),m=l[0],i=l[1],u=Object(n.useState)([]),p=Object(o.a)(u,2),g=p[0],f=p[1],d="https://manojd29.github.io/reactchat";Object(n.useEffect)((function(){return(L=Object(v.a)(d)).emit("join",{name:t,room:a,photoURL:r},(function(){})),function(){L.emit("disconnect"),L.off()}}),d),Object(n.useEffect)((function(){L.on("message",(function(e){f([].concat(Object(h.a)(g),[e]))}))}),[g]);return console.log(m,g),c.a.createElement("div",{className:"container"},c.a.createElement(w,{room:a}),c.a.createElement(C,{messages:g,name:t,photoURL:r}),c.a.createElement(R,{setMessage:i,sendMessage:function(e){e.preventDefault(),m&&L.emit("sendMessage",m,(function(){return i("")}))},message:m}))}var D,T=a(55),I=a.n(T);var U=function(e){var t=e.user,a=Object(f.f)(),r=Object(n.useState)(""),s=Object(o.a)(r,2),l=s[0],i=s[1],u=Object(n.useState)(""),p=Object(o.a)(u,2),g=p[0],b=p[1],O=Object(n.useState)(),S=Object(o.a)(O,2),C=S[0],k=S[1],w=Object(n.useState)([]),L=Object(o.a)(w,2),R=L[0],T=L[1],U=Object(n.useState)(""),A=Object(o.a)(U,2),G=A[0],M=A[1],P=Object(n.useState)(!1),W=Object(o.a)(P,2),F=W[0],J=W[1],_="https://manojd29.github.io/reactchat",z=new I.a;return Object(n.useEffect)((function(){var e=t.displayName,a=t.photoURL;b(e),k(a),(D=Object(v.a)(_)).on("connect",(function(){console.log("Socket connected to the backend"),D.on("message",(function(e){!function(e){T((function(t){return[].concat(Object(h.a)(t),[e])}))}(e)}))}))}),[_]),F?c.a.createElement(c.a.Fragment,null,c.a.createElement(B,{name:g,room:G,photoURL:C})):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"outerContainer"},c.a.createElement("div",{ClassName:"leftContainer"},c.a.createElement(d.a,{className:"join-card"},c.a.createElement("h5",null,"Create Room"),c.a.createElement("p",null,"Welcome back, ",g,"."),c.a.createElement(j.a,{onSubmit:function(e){G?J(!0):e.preventDefault()},className:"text-center"},c.a.createElement("div",{xs:6,md:4,style:{marginTop:"10px"}},c.a.createElement(N.a,{src:C,roundedCircle:!0})),c.a.createElement(d.a.Title,null,g),c.a.createElement("input",{className:"join-input",placeholder:"Enter Room Name..",style:{textTransform:"lowercase",textAlign:"center"},onChange:function(e){return M(e.target.value)}}),c.a.createElement(E.a,{className:"send-btn",type:"submit"},"Join")),c.a.createElement("p",null,"Not, ",g,"?"),c.a.createElement(E.a,{className:"logout-btn",onClick:function(){m.signOut(),a.push("/")}},"Sign Out"))),c.a.createElement("div",{className:"rightContainer"},c.a.createElement("h3",null,"Chat with everyone!"),c.a.createElement("div",{className:"msg-container"},c.a.createElement(x.a,null,R.map((function(e,t){return e.id===g?c.a.createElement("div",{className:"messageContainer justifyEnd"},c.a.createElement("div",{className:"sent-text pr-10",key:t},c.a.createElement(N.a,{width:"25px",src:e.pic,roundedCircle:!0}),e.id,c.a.createElement("div",{className:"message-box backgroundBlue"},c.a.createElement("p",{className:"message-text colorWhite"},y.a.emojify(z.clean(e.body)))))):c.a.createElement("div",{className:"messageContainer justifyStart"},c.a.createElement("div",{className:"sent-text pl-10 ",key:t},c.a.createElement("div",{className:"message-box backgroundLight"},c.a.createElement("p",{className:"message-text colorDark"},y.a.emojify(z.clean(e.body)))),c.a.createElement(N.a,{width:"25px",src:e.pic,roundedCircle:!0}),e.id))})))),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={body:l,id:g,pic:C};i(""),D.emit("send message",t)},className:"msg-form"},c.a.createElement("input",{placeholder:"Type a message to send",className:"msg-input",type:"text",autoComplete:"off",name:"messageInput",value:l,onChange:function(e){return i(e.target.value)}}),c.a.createElement(E.a,{className:"msg-btn",type:"submit",onClick:function(e){return l?"null":e.preventDefault()}},"SEND")))))};var A=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)((function(){return m.currentUser})),l=Object(o.a)(s,2),i=l[0],u=l[1],p=i.displayName;return i.photoURL,console.log(p),Object(n.useEffect)((function(){return m.onAuthStateChanged((function(e){u(e||!1),a&&r(!1)}))}),[m,a]),c.a.createElement(c.a.Fragment,null,c.a.createElement(U,{user:i}))};var G=function(){return c.a.createElement("div",null,c.a.createElement("center",null,c.a.createElement(g.a,null,c.a.createElement(p,null,c.a.createElement(f.c,null,c.a.createElement(f.a,{exact:!0,path:"/",component:b}),c.a.createElement(f.a,{path:"/home",component:A}))))))};a(89);s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(G,null)),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.7c6b6426.chunk.js.map