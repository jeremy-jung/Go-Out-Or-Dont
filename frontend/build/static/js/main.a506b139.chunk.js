(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(t,e,n){t.exports={button:"button_button__3Pz0r"}},45:function(t,e,n){},46:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var s=n(1),o=n(2),i=n.n(o),c=n(32),r=n.n(c),a=(n(45),n(35)),l=n(39),u=(n(46),n(13)),d=n(20),h=n(15),j=n(14),p=n(18),b=n(23),O=n.n(b),g=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var s;return Object(u.a)(this,n),s=e.call(this,t),console.log(s.props),s}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return this.props.auth.currentUser&&Object(s.jsx)(p.b,{to:"/",className:O.a.button,onClick:function(){return t.props.auth.signOut()},style:{fontSize:"15px",borderRadius:"20px",backgroundColor:"rgba(255,255,255,0.3)"},children:"Sign Out"})}}]),n}(i.a.Component),f=n(8),x=n(19),m=(n(29),n(26),n(28),n(22)),v=(n(27),function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var o;return Object(u.a)(this,n),(o=e.call(this,t)).signInWithGoogle=function(){var t=new x.a.auth.GoogleAuthProvider;o.props.auth.signInWithPopup(t)},o.render=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{children:Object(s.jsx)(p.b,{to:"/locations",onClick:o.signInWithGoogle,children:"Sign in with Google"})}),Object(s.jsx)("p",{style:{marginTop:"5px",color:"white"},children:"Brought to you by 4MichelinStars"})]})},o.signInWithGoogle=o.signInWithGoogle.bind(Object(f.a)(o)),o}return n}(i.a.Component)),S=function(t){var e=t.completed,n={height:"100%",width:"".concat(e,"%"),backgroundColor:"#608FDA",borderRadius:"inherit",justifyContent:"center"};return Object(s.jsx)("div",{style:{height:20,width:"100%",backgroundColor:"#ffff",borderRadius:50,margins:10,justifyContent:"center"},children:Object(s.jsx)("div",{style:n})})},y=(n.p,function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var s;return Object(u.a)(this,n),(s=e.call(this,t)).getAPIRating=function(t,e){var n="";"country"==e?n="https://shouldigoout.herokuapp.com/api/rate/country/?location="+t:"state"==e&&(n="https://shouldigoout.herokuapp.com/api/rate/state/?location="+t),fetch(n).then((function(t){return t.json()})).then((function(t){var e=[];for(var n in t){var o={};o[n]=t[n],e.push(o)}s.setState((function(t){return{items:e,apiResponse:!0}})),console.log(s.state.items)}))},s.getLocation=function(t){var e=s.props.match.params.id.substring(0),n=e.indexOf(","),o=e.substring(0,n),i=e.substring(n+1),c={};c.place=o,c.worldOption=i,t(c)},s.getRatings=function(){s.getLocation((function(t){var e=t.worldOption,n=t.place;s.getAPIRating(n,e)}))},s.state={error:null,learningMore:!1,isLoaded:!0,items:[],apiResponse:!1},s.handleLearnMore=s.handleLearnMore.bind(Object(f.a)(s)),s.getAPIRating=s.getAPIRating.bind(Object(f.a)(s)),s.getRatings=s.getRatings.bind(Object(f.a)(s)),s.getRatings(),s}return Object(d.a)(n,[{key:"handleLearnMore",value:function(){this.setState({learningMore:!0,items:this.state.items})}},{key:"render",value:function(){if(1==this.state.apiResponse){var t,e=this.state.learningMore,n="";return n=1==this.state.items[3].goout?"You should go out today!":"Maybe you should stay home today...",t=e?Object(s.jsxs)("div",{style:{marginBottom:"30px"},class:"detailedResult",children:[Object(s.jsx)("br",{}),Object(s.jsx)("div",{style:{color:"#ffff",fontSize:"13px"},children:"The higher the score, the better the condition is! So if your results said not to leave the house but COVID-19 is 5/5, at least you know you're safe!"}),Object(s.jsxs)("div",{class:"individualResult",children:[Object(s.jsx)("p",{style:{marginRight:"20px"},children:"UV INDEX"}),Object(s.jsx)(S,{completed:20*this.state.items[0].uv}),Object(s.jsx)("p",{style:{marginLeft:"20px",width:"30px"},children:this.state.items[0].uv})]}),Object(s.jsxs)("div",{class:"individualResult",children:[Object(s.jsx)("p",{style:{marginRight:"20px"},children:"TEMP"}),Object(s.jsx)(S,{completed:20*this.state.items[1].temp}),Object(s.jsx)("p",{style:{marginLeft:"20px",width:"30px"},children:this.state.items[1].temp})]}),Object(s.jsxs)("div",{class:"individualResult",children:[Object(s.jsx)("p",{style:{marginRight:"20px"},children:"COVID-19"}),Object(s.jsx)(S,{completed:20*this.state.items[2].covid}),Object(s.jsx)("p",{style:{marginLeft:"20px",width:"30px"},children:this.state.items[2].covid})]})]}):Object(s.jsx)("p",{}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{class:"simpleResult",children:[undefined,Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{style:{marginTop:"35px",fontSize:"25px"},children:n}),Object(s.jsx)("button",{onClick:this.handleLearnMore,children:"see why"}),Object(s.jsx)("p",{})]})]}),t]}),Object(s.jsx)("div",{}),Object(s.jsxs)("div",{children:[Object(s.jsx)(p.b,{to:"/locations",className:O.a.button,style:{fontSize:"15px",borderRadius:"20px",backgroundColor:"rgba(255,255,255,0.3)"},children:"back to list"}),Object(s.jsx)("br",{})," ",Object(s.jsx)("br",{}),Object(s.jsx)(g,{auth:this.props.auth})]})]})}return Object(s.jsx)("div",{style:{color:"#ffff"},children:"Loading results..."})}}]),n}(i.a.Component)),C=n.p+"static/media/logo.057a6dee.png",L=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var s;return Object(u.a)(this,n),(s=e.call(this,t)).handleChange=function(t){"USA"==t.target.value?s.setState({worldOption:"state"}):s.setState({worldOption:"country"}),s.setState({locationSelected:t.target.value})},s.handleStatesChange=function(t){s.setState({locationSelected:t.target.value})},s.handleSubmit=function(){console.log("worldOption: ",s.state.worldOption);var t=s.state.locationSelected,e=s.state.worldOption;s.props.onLocationSubmit(t,e)},s.state={locationSelected:null,worldOption:"country"},s.handleChange=s.handleChange.bind(Object(f.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(f.a)(s)),s}return Object(d.a)(n,[{key:"render",value:function(){return null==this.props.countries||null==this.props.states?Object(s.jsx)("div",{style:{color:"#ffff"},children:"Loading places.."}):(null==this.state.locationSelected&&this.setState({locationSelected:this.props.countries[0]}),"country"==this.state.worldOption?Object(s.jsxs)("div",{children:[Object(s.jsx)("select",{onChange:this.handleChange,children:this.props.countries.map((function(t){return Object(s.jsx)("option",{children:t})}))}),Object(s.jsx)("button",{style:{margin:"10px",padding:"5px",fontSize:"13px"},onClick:this.handleSubmit,children:"Add Location"})]}):"state"==this.state.worldOption?("USA"==this.state.locationSelected&&this.setState({locationSelected:this.props.states[0]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"States"}),Object(s.jsx)("select",{onChange:this.handleStatesChange,children:this.props.states.map((function(t){return Object(s.jsx)("option",{children:t})}))}),Object(s.jsx)("button",{style:{margin:"10px",padding:"5px",fontSize:"13px"},onClick:this.handleSubmit,children:"Add Location"})]})):void 0)}}]),n}(i.a.Component),w=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var o;return Object(u.a)(this,n),(o=e.call(this,t)).getCountries=function(){fetch("https://shouldigoout.herokuapp.com/api/countries").then((function(t){return t.json()})).then((function(t){o.setState({countries:t.places}),o.setState({apiResultsCountries:!0}),console.log(t.places)}),(function(t){console.log("Error in getCountries: ",t)}))},o.getStates=function(){fetch("https://shouldigoout.herokuapp.com/api/states").then((function(t){return t.json()})).then((function(t){o.setState({states:t.places}),o.setState({apiResultsStates:!0}),console.log(t.places)}),(function(t){console.log("Error in getCountries: ",t)}))},o.onLocationSubmit=function(t,e){o.setState((function(n){return{locationSelected:t,worldOption:e}})),console.log(t);var n=t+","+e;console.log(n),o.sendMessage(n)},o.setLoccArr=function(){o.props.firestore.collection(o.props.auth.currentUser.uid).doc("locations").onSnapshot((function(t){o.setState({locArr:t.data().locations})}))},o.sendMessage=function(t){var e=""+t;console.log("from sendMessage: "+t),o.props.firestore.collection(o.props.auth.currentUser.uid).doc("locations").update({locations:x.a.firestore.FieldValue.arrayUnion(e)}),o.setLoccArr()},o.addCollec=function(){o.props.firestore.collection(o.props.auth.currentUser.uid).doc("locations").get().then((function(t){t.exists||o.props.firestore.collection(o.props.auth.currentUser.uid).doc("locations").set({locations:[""]})}))},o.render=function(){return o.addCollec(),console.log("array is initialized"),1==o.state.locArr[0]?Object(s.jsxs)("main",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(L,{countries:o.state.countries,states:o.state.states,onLocationSubmit:o.onLocationSubmit})}),Object(s.jsx)("div",{style:{color:"#ffff",margin:"5px"},children:"Add location with the dropdown list above!"})]}):(console.log("array is initialized"),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("main",{children:[Object(s.jsx)("div",{children:Object(s.jsxs)("h1",{style:{color:"#ffff"},children:["Hello ",o.props.auth.currentUser.displayName]})}),Object(s.jsx)("div",{children:Object(s.jsx)(L,{countries:o.state.countries,states:o.state.states,onLocationSubmit:o.onLocationSubmit})}),Object(s.jsx)("div",{children:o.state.locArr.map((function(t){var e=""+t,n=e.indexOf(","),o=e.substring(0,n);return Object(s.jsxs)("div",{children:[" ",Object(s.jsx)(p.b,{to:"/result/"+t,className:t,value:t,children:o}),"  "]})}))})]})}))},o.state={me:o.props.firestore.collection(o.props.auth.currentUser.uid),locc:null,locArr:[1,2,3,4],countries:null,states:null,locationSelected:null,worldOption:null,apiResultsCountries:!1,apiResultsStates:!1},console.log("addlist is made"),o.sendMessage=o.sendMessage.bind(Object(f.a)(o)),o.onLocationSubmit=o.onLocationSubmit.bind(Object(f.a)(o)),o.addCollec=o.addCollec.bind(Object(f.a)(o)),o.setLoccArr=o.setLoccArr.bind(Object(f.a)(o)),o.getCountries=o.getCountries.bind(Object(f.a)(o)),o.getStates=o.getStates.bind(Object(f.a)(o)),o.setLoccArr(),o.getCountries(),o.getStates(),o}return n}(i.a.Component),R=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{style:{width:"200px"},src:C,alt:"Logo"})}),Object(s.jsx)("section",{children:this.props.user?Object(s.jsx)(w,{firestore:this.props.firestore,auth:this.props.auth}):Object(s.jsx)(v,{firestore:this.props.firestore,auth:this.props.auth})}),Object(s.jsx)("div",{children:Object(s.jsx)(g,{auth:this.props.auth})})]})}}]),n}(i.a.Component),k=n(5);x.a.initializeApp({apiKey:"AIzaSyBozbLN9F8w_LCmJEvPsCIx82h7Hd0NtrY",authDomain:"comp20finalproj.firebaseapp.com",projectId:"comp20finalproj",storageBucket:"comp20finalproj.appspot.com",messagingSenderId:"721509114501",appId:"1:721509114501:web:3e7a6c1a4147938ca77fec",measurementId:"G-SJD7Z64VEP"});var A=x.a.auth(),I=x.a.firestore();x.a.analytics();var M=function(){var t=Object(m.a)(A),e=Object(l.a)(t,1)[0];return Object(o.useRef)(),console.log("props.auth.currentuser is null"),Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(p.a,{children:Object(s.jsxs)(k.c,{children:[Object(s.jsx)(k.a,{path:"/result/:id",render:function(t){return Object(s.jsx)(y,Object(a.a)(Object(a.a)({},t),{},{auth:A,firestore:I}))}}),Object(s.jsx)(k.a,{path:"/locations",children:Object(s.jsx)(R,{auth:A,firestore:I,user:e})}),Object(s.jsxs)(k.a,{path:"/",children:[Object(s.jsx)("img",{style:{width:"300px"},src:C,alt:"Logo"}),Object(s.jsx)(v,{auth:A})]})]})})})},z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(e){var n=e.getCLS,s=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),s(t),o(t),i(t),c(t)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(M,{})}),document.getElementById("root")),z()}},[[53,1,2]]]);
//# sourceMappingURL=main.a506b139.chunk.js.map