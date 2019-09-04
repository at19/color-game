(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,n){e.exports=n(76)},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),l=n.n(o),c=(n(45),n(4)),i=n(10),u=n.n(i),s=n(17),m=n(14),d=n(8),f=(n(47),n(48),n(49),[{minimumPoints:0,numberOfColors:3,similarColors:0,headerColor:"rgba(150, 150, 150, 0.5)",canLoadNewColors:!0},{minimumPoints:50,numberOfColors:6,similarColors:1,headerColor:"rgba(50, 200, 50, 0.5)",canLoadNewColors:!0},{minimumPoints:100,numberOfColors:6,similarColors:2,headerColor:"rgba(25, 100, 200, 0.5)",canLoadNewColors:!1},{minimumPoints:200,numberOfColors:9,similarColors:4,headerColor:"rgba(200, 25, 200, 0.7)",canLoadNewColors:!1},{minimumPoints:350,numberOfColors:9,similarColors:5,headerColor:"rgba(225, 200, 0, 0.7)",canLoadNewColors:!1}]),h="RGB",E="HSL",b="HEX",p=0,g=0,v=5,C=10,S="hsl(0, 25%, 97%)",O=r.a.createContext(),N=r.a.createContext(h),_=function(e){var t=Object(a.useState)(localStorage.getItem("USER_LAST_NAME")),n=Object(c.a)(t,2),o=n[0],l=n[1];return Object(a.useEffect)(function(){var e=function(){return l(localStorage.getItem("USER_LAST_NAME"))};return document.addEventListener("localStorageItemInserted",e),function(){document.removeEventListener("localStorageItemInserted",e)}}),r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-container"},r.a.createElement("div",{className:"nav-container__inner"},r.a.createElement("div",{className:"home-link__container"},r.a.createElement(d.b,{to:"/",className:"home-link"},"Choosing Colors")),r.a.createElement("ul",{className:"top-nav"},r.a.createElement("li",{className:"top-nav__authButton"},r.a.createElement("p",null,"0"!==o?o:null),r.a.createElement(O.Consumer,null,function(t){return null!==t?r.a.createElement("button",{onClick:e.signOut},"Sign out"):r.a.createElement(d.b,{to:"/login"},"Login")}))))))},w=n(39),y=(n(54),function(e){var t=e.handleColorModelChange,n=[{value:h,label:h},{value:b,label:b},{value:E,label:E}];return r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"hero__inner"},r.a.createElement("h2",null,"Learn your colors, while having fun"),r.a.createElement("div",{className:"hero__select"},r.a.createElement(N.Consumer,null,function(e){return r.a.createElement(w.a,{value:n.map(function(t){return t.value===e?t:null}),onChange:function(e){t(e.value)},options:n})})),r.a.createElement(d.b,{className:"hero__cta",to:"/play"},r.a.createElement(O.Consumer,null,function(e){return null!==e?"Play":"Try it out!"}))))}),j=(n(57),function(e){var t=e.getContent,n=function(){var e=Object(s.a)(u.a.mark(function e(n,a){var o,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n);case 2:return o=e.sent,l=o.docs.map(function(e){return{name:e.data().name,points:e.data()["highScore".concat(n)],isCurrentUser:e.data().uid===a}}),e.abrupt("return",l.map(function(e,t){return r.a.createElement("tr",{key:t,className:e.isCurrentUser?"currentUser":null},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.points))}));case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),a=function(){var e=Object(s.a)(u.a.mark(function e(t,a){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t,a);case 2:r=e.sent,parseInt(localStorage.getItem("IS_USER_LOGGED_IN"))&&l.a.render(r,document.getElementById("leaderboard__table-body"));case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"leaderboard"},r.a.createElement("h2",{className:"leaderboard__header"},"Leaderboard"),r.a.createElement(O.Consumer,null,function(e){return null!==e?r.a.createElement("table",{className:"leaderboard__table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Points"))),r.a.createElement("tbody",{id:"leaderboard__table-body"},r.a.createElement(N.Consumer,null,function(t){e.uid&&a(t,e.uid).catch(function(e){return console.log(e)})}))):r.a.createElement("p",null,"Please login to see the leaderboard")}))}),I=function(e){var t=e.signOut,n=e.handleColorModelChange,a=e.leaderboardContent;return r.a.createElement("div",null,r.a.createElement(_,{signOut:t}),r.a.createElement(y,{handleColorModelChange:n}),r.a.createElement(j,{getContent:function(e){return a(e)}}))},k=n(35),L=n(24),P=(n(58),n(59),n(60),function(e){return r.a.createElement("div",{className:e.backgroundColor===S?"tile":"tile tile--modified",style:{backgroundColor:e.backgroundColor},id:e.whichOne})}),A=function(e){return r.a.createElement("div",{className:"colors",onClick:function(t){return e.onClick(t)}},function(e){for(var t=[],n=0;n<e.length;n+=3)t.push(r.a.createElement("div",{key:n,className:"color-stack "},e[n],e[n+1],e[n+2]));return t}(function(e){for(var t=[],n=0;n<e.length;n++)t.push(r.a.createElement(P,{key:n+1,whichOne:n,backgroundColor:e[n]}));return t}(e.colors)))},U=(n(61),function(e){var t=e.headerColor.split(",")[2].split("%")[0]<45?"hsl(0, 0%, 95%)":"hsl(0, 0%, 15%)";return r.a.createElement("div",{className:"header"},r.a.createElement(d.b,{to:"/"},"Go Back"),r.a.createElement("h2",{className:"header__color",style:{color:t}},e.chosenColor),r.a.createElement("div",{className:"header__buttons"},null!==e.resetColors?r.a.createElement("button",{onClick:e.resetColors},"New Colors"):null),r.a.createElement("p",{className:"header__subtext",style:{borderColor:e.triesLeft<3?"red":"green"}},"Tries Left: ",e.triesLeft),r.a.createElement("p",{className:"header__subtext featured",style:{backgroundColor:e.headerColor}},"Level: ",e.difficulty))}),x=(n(62),function(e){return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal__body"},r.a.createElement("p",{className:"celebratory"},"You Scored ",e.points," points!"),r.a.createElement("button",{onClick:e.playAgain},"Play again"),r.a.createElement(O.Consumer,null,function(e){return null!==e?null:r.a.createElement("p",{className:"subtext"},r.a.createElement(d.b,{to:"/login"},"Login")," to save your score, and compete with friends!")})),r.a.createElement("div",{className:"modal__overlay",onClick:e.playAgain}))}),M=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},R=function(){var e=M(5,20);return Math.round(Math.random())?e:-e};var G=function(){return Array.from({length:3}).map(function(){return M(25,200)})},B=function(e){var t;switch(e){case E:t=function(){var e=M(1,360),t=M(25,90),n=M(25,85);return"hsl(".concat(e,", ").concat(t,"%, ").concat(n,"%)")}();break;case h:t="rgb(".concat(G(),")");break;case b:t="#"+G().map(function(e){return 1===(e=e.toString(16)).length?e+="0":e}).join("");break;default:throw new Error("Invalid color pattern")}return t},D=function(e){return(e=e.map(function(e){return"".concat(e+R(),",")}))[e.length-1]=e[e.length-1].slice(0,-1),e},T=function(e){return"#"+D(function(e){var t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,255&t]}(e)).map(function(e){return e=e.endsWith(",")?e.slice(0,-1):e,Number(e).toString(16).padStart(2,"0")}).join("")},W=function(e,t){var n;switch(t){case E:n=function(e){return"hsl(".concat(e.substring(4).slice(0,-1).split(",").map(function(e){return"%"===e[e.length-1]&&(e=Number(e.slice(0,-1).trim()),e=(e+=R()).toString()+"%"),e}).join(","),")")}(e);break;case h:n=function(e){return"rgb(".concat(D(e.substring(4).slice(0,-1).split(",").map(function(e){return Number(e.trim())})).join(""),")")}(e);break;case b:n=T(e)}return n},H=function(e,t,n,a){for(var r=[],o=[],l=0;l<e;l++)r.push(B(n)),l!==a&&o.push(l);for(var c=0;c<t;c++)r[o.pop(Math.floor(Math.random()*o.length)+1)]=W(r[a],n);return r};function J(e,t){var n=f[e].numberOfColors,a=f[e].similarColors,r=[],o=Math.floor(Math.random()*n);if(0===e)for(var l=0;l<n;l++)r.push(B(t));else r.push.apply(r,Object(L.a)(H(n,a,t,o)));return{colors:r,chosenOne:o}}var Z=n(21),X=n(63);n(66),n(68);var z={apiKey:"AIzaSyDic3lgSNLBrxXcnKijtBhJZl0ldwjv1TA",authDomain:"choosing-colors.firebaseapp.com",databaseURL:"https://choosing-colors.firebaseio.com",projectId:"choosing-colors",storageBucket:"choosing-colors.appspot.com",messagingSenderId:"1095059129734",appId:"1:1095059129734:web:b94c0a918d83a16e"};function K(e,t){return X.auth().signInWithEmailAndPassword(e,t)}function V(e,t,n){return X.auth().createUserWithEmailAndPassword(t,n)}function $(e,t,n){X.firestore().collection("users").add({uid:e,name:t,email:n,highScoreRGB:0,highScoreHEX:0,highScoreHSL:0,dateJoined:new Date,colorPalettes:null,profilePic:null,bio:null})}var q=function(e){var t=Object(a.useState)(p),n=Object(c.a)(t,2),o=n[0],l=n[1],i=Object(a.useState)(g),u=Object(c.a)(i,2),s=u[0],m=u[1],d=Object(a.useState)(v),h=Object(c.a)(d,2),E=h[0],b=h[1],O=Object(a.useState)(J(s,e.colorPattern)),N=Object(c.a)(O,2),_=N[0],w=N[1],y=Object(a.useState)(!1),j=Object(c.a)(y,2),I=j[0],P=j[1];function M(){P(!0),function(e,t){if(null!==X.auth().currentUser){var n="highScore".concat(e);X.firestore().collection("users").where("uid","==",X.auth().currentUser.uid).get().then(function(e){e.docs[0].data()[n]<t&&e.docs[0].ref.update(Object(Z.a)({},n,t))})}}(e.colorPattern,o)}function R(){var e=o+C,t=function(e){var t=0;return e>=f[4].minimumPoints?t=4:e>=f[3].minimumPoints?t=3:e>=f[2].minimumPoints?t=2:e>=f[1].minimumPoints&&(t=1),t}(e);s!==t&&b(v),l(e),m(t),G(t)}function G(t){w(J(t,e.colorPattern))}function B(){P(!1),m(g),l(p),b(v),w(J(g,e.colorPattern))}function D(e){if(E>0){var t=Number(e.target.id);"".concat(e.target.className).includes("tile")&&(t===_.chosenOne?R():function(e){if(_.colors[e]!==S){var t=Object(L.a)(_.colors);t[e]=S,w(Object(k.a)({},_,{colors:t}));var n=E-1;b(n),0===n&&M()}}(t))}}return r.a.createElement("div",{className:"Play"},r.a.createElement("div",{className:"Play__inner"},r.a.createElement(U,{headerColor:f[s].headerColor,chosenColor:_.colors[_.chosenOne],resetColors:f[s].canLoadNewColors?function(){return G(s)}:null,triesLeft:E,difficulty:s+1}),r.a.createElement(A,{colors:_.colors,onClick:function(e){return D(e)}}),I?r.a.createElement(x,{points:o,playAgain:B}):null))},F=n(15),Y=(n(75),function(e){var t=e.signInUser,n=e.createUser,o=Object(a.useState)(),l=Object(c.a)(o,2),i=l[0],u=l[1],s=Object(a.useState)(!0),m=Object(c.a)(s,2),d=m[0],f=m[1],h=Object(a.useState)("Create an account"),E=Object(c.a)(h,2),b=E[0],p=E[1],g=Object(a.useState)("Sign in"),v=Object(c.a)(g,2),C=v[0],S=v[1];return r.a.createElement("div",{className:"auth"},r.a.createElement("div",{className:"form"},r.a.createElement("h3",null,C),r.a.createElement(F.d,{initialValues:{email:"",password:"",name:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e,a){var o=a.setSubmitting;d?t(e.email,e.password).catch(function(e){u(r.a.createElement("div",{className:"error"},e.message)),o(!1)}):n(e.name,e.email,e.password).catch(function(e){u(r.a.createElement("div",{className:"error"},e.message)),o(!1)})}},function(e){var t=e.isSubmitting;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.c,{noValidate:!0},d?null:r.a.createElement(F.b,{disabled:t,placeholder:"Name",type:"text",name:"name"}),r.a.createElement(F.b,{disabled:t,placeholder:"Email",type:"email",name:"email"}),r.a.createElement(F.a,{className:"error",name:"email",component:"div"}),r.a.createElement(F.b,{disabled:t,placeholder:"Password",type:"password",name:"password"}),d?null:r.a.createElement(F.a,{className:"error",name:"password",component:"div"}),r.a.createElement("button",{className:"primary",type:"submit",disabled:t},"Next"),i))}),r.a.createElement("button",{className:"secondary",onClick:function(){f(!d),d?(p("Sign in"),S("Create an account")):(p("Create an account"),S("Sign in"))}},b)))});function Q(e,t){localStorage.setItem(e,t),document.dispatchEvent(new Event("localStorageItemInserted"))}var ee=function(){var e=Object(a.useState)(parseInt(localStorage.getItem("IS_USER_LOGGED_IN"))?X.auth().currentUser:null),t=Object(c.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(null),i=Object(c.a)(l,2),f=i[0],h=i[1],E=Object(a.useContext)(N),b=Object(a.useState)(localStorage.getItem("COLOR_MODEL")||E),p=Object(c.a)(b,2),g=p[0],v=p[1];function C(e){var t;localStorage.setItem("IS_USER_LOGGED_IN",1),o(e.user),h(r.a.createElement(m.a,{to:"/"})),(t=e.user.uid,X.firestore().collection("users").where("uid","==",t).get()).then(function(e){var t=e.docs[0].data().name.split(" ");Q("USER_LAST_NAME",t[t.length-1])})}function S(e,t){return _.apply(this,arguments)}function _(){return(_=Object(s.a)(u.a.mark(function e(t,n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(t,n);case 2:C(e.sent);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(e,t,n){return y.apply(this,arguments)}function y(){return(y=Object(s.a)(u.a.mark(function e(t,n,a){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(0,n,a);case 2:C(r=e.sent),$(r.user.uid,t,n);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function j(){X.auth().signOut().then(function(){localStorage.setItem("IS_USER_LOGGED_IN",0),o(null),Q("USER_LAST_NAME",0)})}return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O.Provider,{value:n},r.a.createElement(N.Provider,{value:g},r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(O.Consumer,null,function(e){return null!==e?r.a.createElement(m.a,{to:"/"}):r.a.createElement(Y,{signInUser:S,createUser:w})})}}),r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(I,{signIn:S,signOut:j,handleColorModelChange:function(e){return v(t=e),void localStorage.setItem("COLOR_MODEL",t);var t},leaderboardContent:function(e){return function(e){var t="highScore".concat(e);return X.firestore().collection("users").orderBy(t,"desc").get()}(e)}})}}),r.a.createElement(N.Consumer,null,function(e){return r.a.createElement(m.b,{path:"/play",render:function(){return r.a.createElement(q,{colorPattern:e})}})}))),f))},te=function(){var e=Object(a.useState)(),t=Object(c.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)(function(){var e;e=function(e){o(e)},X.auth().onAuthStateChanged(function(t){t&&e(t)})}),parseInt(localStorage.getItem("IS_USER_LOGGED_IN"))?n?r.a.createElement(ee,null):r.a.createElement("div",null,"Signing you in..."):r.a.createElement(ee,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));X.initializeApp(z),l.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.7fd3c9a8.chunk.js.map