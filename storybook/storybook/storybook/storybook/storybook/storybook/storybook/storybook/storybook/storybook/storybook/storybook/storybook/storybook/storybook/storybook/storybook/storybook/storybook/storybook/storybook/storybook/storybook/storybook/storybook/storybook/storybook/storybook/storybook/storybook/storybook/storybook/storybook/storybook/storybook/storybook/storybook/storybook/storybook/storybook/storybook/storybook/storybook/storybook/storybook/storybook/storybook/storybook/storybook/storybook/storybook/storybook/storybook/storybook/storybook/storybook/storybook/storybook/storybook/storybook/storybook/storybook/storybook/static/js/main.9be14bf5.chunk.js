(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(n,e,t){},115:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"home",function(){return g}),t.d(r,"play",function(){return E}),t.d(r,"plus",function(){return O}),t.d(r,"profile",function(){return j}),t.d(r,"words",function(){return w});var a=t(0),o=t.n(a),c=t(25),i=t.n(c),u=t(123),l=t(1),s=t(9),d=t(2),f="#9438EA",m="#FFFFFF",b="rgba(0, 0, 0, 0.1)",p="rgba(0, 0, 0, 0.3)",v="rgba(0, 0, 0, 0.6)",h="2px 2px 7px rgba(0, 0, 0, 0.1)",g=function(n){return o.a.createElement("svg",{width:n,height:n,viewBox:"0 0 24 24"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 12.5H2L12 3.5L22 12.5H19V20.5H13V14.5H11V20.5H5V12.5ZM17 10.69L12 6.19L7 10.69V18.5H9V12.5H15V18.5H17V10.69Z"}))},E=function(n){return o.a.createElement("svg",{width:n,height:n,viewBox:"0 0 61 61"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.4792 30.5L16.5208 48.2917V12.7083L44.4792 30.5ZM34.9988 30.5L21.6042 21.96V39.04L34.9988 30.5Z"}))},O=function(n){return o.a.createElement("svg",{width:n,height:n,viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"}))},j=function(n){return o.a.createElement("svg",{width:n,height:n,viewBox:"0 0 24 24"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8ZM18 18C17.8 17.29 14.7 16 12 16C9.31 16 6.23 17.28 6 18H18ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V20H4V18Z"}))},w=function(n){return o.a.createElement("svg",{width:n,height:n,viewBox:"0 0 24 24"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V5.99H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM17.5 12.67L15.88 17H19.12L17.5 12.67Z"}))};function x(){var n=Object(l.a)(["\n    display: ",";\n    vertical-align: middle;\n    svg {\n        display: block;\n        margin: auto;\n        fill: currentColor;\n    }\n"]);return x=function(){return n},n}var y,k={normal:24,large:62},C=function(n){var e=n.name,t=n.size,a=void 0===t?"normal":t,c=n.block,i=void 0!==c&&c;return o.a.createElement(S,{block:i},r[e](k[a]))},S=d.b.div(x(),function(n){return n.block?"block":"inline-block"});function R(){var n=Object(l.a)(["\n    transition: all 0 ease;\n    opacity: 0.3;\n    transform: scale(1);\n    background: rgba(255, 255, 255, 0);\n"]);return R=function(){return n},n}function H(){var n=Object(l.a)(["\n    transition: all ",";\n    opacity: 0;\n    transform: scale(2);\n    background: ",";\n"]);return H=function(){return n},n}function W(){var n=Object(l.a)(["\n    color: ",";\n    display: block;\n    background: none;\n    border: none;\n    padding: 10px 25px;\n    position: relative;\n    line-height: 1.5em;\n    &::after {\n        content: '';\n        display: block;\n        border-radius: 100%;\n        height: 60px;\n        width: 60px;\n        position: absolute;\n        margin: auto;\n        top: -50px;\n        bottom: -50px;\n        left: -50px;\n        right: -50px;\n        ",";\n    }\n    &:active::after {\n        transition: opacity 0.6s ease-out, background 0.6s ease-out, transform 1s ease-out;\n        opacity: 0.1;\n        transform: scale(1.2);\n        background: ",";\n    }\n"]);return W=function(){return n},n}function L(){var n=Object(l.a)(["\n    background: ",";\n    display: flex;\n    width: 100%;\n    min-height: ","px;\n    justify-content: space-evenly;\n    box-shadow: ",";\n    overflow: hidden;\n"]);return L=function(){return n},n}!function(n){n.Home="home",n.Words="words",n.Profile="profile",n.Game="game"}(y||(y={}));var D=function(n){return a.createElement(z,null,a.createElement(V,{isActive:n.active===y.Home,onClick:function(){return n.onChange(y.Home)}},a.createElement(C,{name:"home",block:!0}),"Home"),a.createElement(V,{isActive:n.active===y.Words,onClick:function(){return n.onChange(y.Words)}},a.createElement(C,{name:"words",block:!0}),"Words"),a.createElement(V,{isActive:n.active===y.Profile,onClick:function(){return n.onChange(y.Profile)}},a.createElement(C,{name:"profile",block:!0}),"Profile"))},z=d.b.nav(L(),m,60,"0 0 10px rgba(0, 0, 0, 0.1)"),V=d.b.button(W(),function(n){return n.isActive?f:v},function(n){return n.isActive?A:M},f),A=Object(d.a)(H(),"0.2s ease",f),M=Object(d.a)(R()),F=t(4),B=t(26),T=t(54),N=t.n(T),I="' ,",P=["qwertyuiop","asdfghjkl","zxcvbnm",I].map(function(n){return n.split("")}),Z=function(n,e,t){var r=t?N()(n+e)():0;return{key:n,visible:e.includes(n)||t>r&&!I.includes(n)}};function U(){var n=Object(l.a)(["\n    &:active {\n        outline: none;\n        background-color: ",";\n        color: ",";\n    }\n"]);return U=function(){return n},n}function G(){var n=Object(l.a)(["\n    width: ",";\n    height: 7vh;\n    padding: 0;\n    margin: 0 4px;\n    border: 2px solid ",";\n    opacity: ",";\n    border-radius: 4px;\n    color: ",";\n    font-weight: bold;\n    font-size: 24px;\n    text-align: center;\n    background: none;\n    transition: all ",";\n\n    ","\n"]);return G=function(){return n},n}var K=function(n){return o.a.createElement(X,{visible:n.visible,onClick:n.onClick,isSpace:" "===n.symbol},n.symbol,o.a.createElement(B.b,{keyEventName:B.a,keyValue:n.symbol,onKeyHandle:n.onClick}))},X=d.b.button(G(),function(n){return n.isSpace?"47vw":"8vw"},f,function(n){return n.visible?1:.1},f,"0.2s ease",function(n){return n.visible&&Y}),Y=Object(d.a)(U(),f,m);function _(){var n=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    padding: 10px 5px 0;\n"]);return _=function(){return n},n}function J(){var n=Object(l.a)(["\n    padding: 0 0 50px;\n    background: ",";\n    box-shadow: ",";\n"]);return J=function(){return n},n}var q=function(n){return o.a.createElement($,null,function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=n.toLowerCase();return P.map(function(n){return n.map(function(n){return Z(n,t,e)})})}(n.word,n.fakeKeys).map(function(e,t){return o.a.createElement(Q,{key:t},e.map(function(e){return o.a.createElement(K,{key:e.key,symbol:e.key,visible:e.visible,onClick:function(){e.visible&&n.onPress(e.key)}})}))}))},$=d.b.div(J(),m,"0 0 10px rgba(0, 0, 0, 0.1)"),Q=d.b.div(_()),nn=t(30),en=t.n(nn),tn=t(18);function rn(){var n=Object(l.a)(["\n    display: inline-block;\n    height: 1em;\n    width: 0.1em;\n    margin: 0 -0.05em;\n    vertical-align: middle;\n    background-color: ",";\n"]);return rn=function(){return n},n}var an=function(){var n=Object(tn.b)({transform:"translate(0) scaleX(1)",from:{transform:"translate(-0.3em) scaleX(3)"}});return o.a.createElement(on,{style:n})},on=Object(d.b)(tn.a.span)(rn(),f);function cn(){var n=Object(l.a)(["\n    display: inline-block;\n    text-align: center;\n    position: relative;\n    margin: 0 0.025em;\n    height: 100%;\n    min-width: 25px;\n    transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);\n    transform: ",";\n    color: ",";\n\n    &::after {\n        content: '*';\n        position: absolute;\n        text-align: center;\n        top: 0.5em;\n        left: 0;\n        right: 0;\n        line-height: 0.5em;\n        height: 20px;\n        transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);\n        color: ",";\n        transform: ",";\n        opacity: ",";\n    }\n"]);return cn=function(){return n},n}function un(){var n=Object(l.a)(["\n    display: inline-block;\n    line-height: 1em;\n    height: 90px;\n    margin: 0 1px;\n    vertical-align: middle;\n    position: relative;\n"]);return un=function(){return n},n}function ln(){var n=Object(l.a)(["\n    white-space: nowrap;\n    position: relative;\n    width: 100%;\n"]);return ln=function(){return n},n}function sn(){var n=Object(l.a)(["\n    text-align: center;\n    font-size: 74px;\n    font-weight: normal;\n    padding: 0px 25px;\n    overflow: hidden;\n    height: 2em;\n    width: 100%;\n    line-height: 2em;\n"]);return sn=function(){return n},n}var dn,fn=function(n){var e=n.word,t=n.progress,r=e.substr(0,t);return o.a.createElement(mn,null,o.a.createElement(en.a,{widthOnly:!0,maxFontSize:74},o.a.createElement(bn,null,e.split("").map(function(n,e){return o.a.createElement(pn,{key:n+e},e===t&&o.a.createElement(an,{key:r}),o.a.createElement(vn,{letterState:t<=e},n))}))))},mn=d.b.div(sn()),bn=d.b.div(ln()),pn=d.b.span(un()),vn=d.b.span(cn(),function(n){return n.letterState?"scale(0.5)":"scale(1)"},function(n){return n.letterState?"rgba(255,255,255,0)":"#000000"},p,function(n){return n.letterState?"scale(2)":"scale(0)"},function(n){return n.letterState?1:0}),hn=t(55),gn={route:y.Words,lastRoutes:[],words:void 0,user:void 0},En=t(24),On=t(11),jn=t(56),wn=t.n(jn);!function(n){n[n.Add=0]="Add",n[n.Delete=1]="Delete"}(dn||(dn={}));var xn,yn=Object(hn.a)((xn=function(n,e){switch(e.type){case"ROUTER/SET_ROUTE":return Object(On.a)({},n,{route:e.payload.route,lastRoutes:[n.route].concat(Object(En.a)(n.lastRoutes))});case"ROUTER/BACK":return Object(On.a)({},n,{route:n.lastRoutes[0],lastRoutes:n.lastRoutes.slice(1)});case"WORDS/SET":return Object(On.a)({},n,{words:e.payload});case"WORDS/ADD_WORD":var t=Object(On.a)({id:"local-".concat(wn()()),action:dn.Add},e.payload);return Object(On.a)({},n,{words:[].concat(Object(En.a)(n.words),[t])});case"WORDS/REMOVE_WORD":return Object(On.a)({},n,{words:n.words.map(function(n){return n.id===e.payload.id?Object(On.a)({},n,{action:dn.Delete}):n})});case"USER/CHANGE":return Object(On.a)({},n,{user:e.payload});default:throw new Error("[reducer] Unknown action type!")}},function(n,e){return console.log("\u2192",e.type,e.payload),xn(n,e)}),gn),kn=yn.GlobalStateProvider,Cn=yn.dispatch,Sn=yn.useGlobalState,Rn=function(){var n=Sn("route");return{route:Object(F.a)(n,1)[0],setRoute:function(n){Cn({type:"ROUTER/SET_ROUTE",payload:{route:n}})},goBack:function(){Cn({type:"ROUTER/BACK"})}}},Hn=function(){var n=Sn("words"),e=Object(F.a)(n,1)[0];return{words:e,addWord:function(n,e,t){Cn({type:"WORDS/ADD_WORD",payload:{name:n,translation:e,example:t}})},removeWord:function(n){Cn({type:"WORDS/REMOVE_WORD",payload:{id:n}})},randomWord:function(){return e[Math.floor(Math.random()*e.length)]}}},Wn=t(57),Ln=t.n(Wn),Dn=(t(106),t(108),Ln.a.initializeApp({apiKey:"AIzaSyATMnw8FbczS1-0yJwrHl98EunKDAjE1DM",authDomain:"reword-1.firebaseapp.com",databaseURL:"https://reword-1.firebaseio.com",projectId:"reword-1",storageBucket:"reword-1.appspot.com",messagingSenderId:"220877466530",appId:"1:220877466530:web:7c95c058eaa3a7ed"}));function zn(){var n=Object(l.a)(["\n    padding: 30px 50px;\n    border: none;\n    color: ",";\n    background: ",";\n    border-radius: 4px;\n    box-shadow: ",";\n    font-weight: bold;\n    font-size: 24px;\n"]);return zn=function(){return n},n}function Vn(){var n=Object(l.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return Vn=function(){return n},n}function An(){var n=Object(l.a)(["\n    width: 100%;\n    position: relative;\n"]);return An=function(){return n},n}function Mn(){var n=Object(l.a)(["\n    width: 100%;\n    flex: 1 0 auto;\n"]);return Mn=function(){return n},n}function Fn(){var n=Object(l.a)(["\n    /* display: grid; */\n    /* grid-template-rows: 1fr 2fr auto; */\n    height: 100%;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n    overflow: hidden;\n"]);return Fn=function(){return n},n}var Bn=d.b.div(Fn()),Tn=d.b.div(Mn()),Nn=d.b.div(An()),In=d.b.div(Vn()),Pn=d.b.button(zn(),m,"#AED900",h);function Zn(){var n=Object(l.a)(["\n    display: inline-block;\n    height: 1em;\n    width: 0.1em;\n    margin: 0 0.05em;\n    vertical-align: middle;\n    background-color: ",";\n"]);return Zn=function(){return n},n}function Un(){var n=Object(l.a)(["\n    display: inline-block;\n"]);return Un=function(){return n},n}function Gn(){var n=Object(l.a)(["\n    display: inline-block;\n"]);return Gn=function(){return n},n}function Kn(){var n=Object(l.a)(["\n    text-align: center;\n    font-size: 74px;\n    font-weight: normal;\n"]);return Kn=function(){return n},n}var Xn=function(){var n=Object(tn.b)({opacity:1,transform:"translate(0)",delay:200,from:{opacity:0,transform:"translate(-0.2em)"}}),e=Object(tn.b)({opacity:1,transform:"translate(0)",delay:300,from:{opacity:0,transform:"translate(-0.2em)"}}),t=Object(tn.b)({transform:"translate(0) scaleX(1)",from:{transform:"translate(-1.2em) scaleX(5)"}});return o.a.createElement(Yn,null,o.a.createElement(_n,{style:n},"Re"),o.a.createElement(qn,{style:t}),o.a.createElement(Jn,{style:e},"word"))},Yn=d.b.h1(Kn()),_n=Object(d.b)(tn.a.span)(Gn()),Jn=Object(d.b)(tn.a.span)(Un()),qn=Object(d.b)(tn.a.span)(Zn(),f),$n=function(){var n=Sn("words"),e=Object(F.a)(n,1)[0],t=Sn("user"),r=Object(F.a)(t,1)[0];return void 0===e||void 0===r};function Qn(){var n=Object(l.a)(["\n    background: ",";\n    border: none;\n    box-shadow: ",";\n    width: ",";\n    height: ",";\n    max-width: 260px;\n    max-height: 260px;\n    border-radius: 100%;\n    color: ",";\n    font-size: 36px;\n"]);return Qn=function(){return n},n}var ne=function(n){var e=Rn().setRoute;return n.loading?o.a.createElement(ee,null,"Loading"):n.words.length?o.a.createElement(ee,{onClick:function(){return e(y.Game)}},o.a.createElement(C,{name:"play",size:"large",block:!0}),"Play"):o.a.createElement(ee,{onClick:function(){return e(y.Words)}},o.a.createElement(C,{name:"plus",size:"large",block:!0}),"Word")},ee=d.b.button(Qn(),m,h,"45vmin","45vmin",f);function te(){var n=Object(l.a)(["\n    padding: 25px;\n    text-align: center;\n"]);return te=function(){return n},n}function re(){var n=Object(l.a)(["\n    display: grid;\n    height: 100%;\n    grid-auto-rows: 1fr 3fr 1fr;\n    align-items: center;\n    justify-items: center;\n"]);return re=function(){return n},n}var ae=d.b.div(re()),oe=d.b.div(te());function ce(){var n=Object(l.a)(["\n    display: inline-block;\n    padding: 5px 15px;\n    border: 2px solid ",";\n    border-radius: 5px;\n    background: transparent;\n"]);return ce=function(){return n},n}var ie=d.b.button(ce(),f);function ue(){var n=Object(l.a)(["\n    display: flex;\n    min-height: 260px;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return ue=function(){return n},n}var le=function(n){return o.a.createElement(se,null,o.a.createElement(C,{name:n.iconName,size:"large"}),o.a.createElement("h1",null,n.title),n.children)},se=d.b.header(ue());function de(){var n=Object(l.a)(["\n    padding: 12px 0 9px;\n    border: none;\n    font-size: 15px;\n    display: block;\n    width: 100%;\n    margin: 15px 0;\n    border-bottom: 2px solid ",";\n"]);return de=function(){return n},n}function fe(){var n=Object(l.a)(["\n    position: absolute;\n    top: 9px;\n    left: 0px;\n    font-size: 15px;\n    transition: transform 0.15s ease-out;\n    color: ",";\n    cursor: text;\n    transform-origin: 0 0; // top left for scale\n    transform: ",";\n"]);return fe=function(){return n},n}function me(){var n=Object(l.a)(["\n    position: relative;\n    display: block;\n    span {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 2px;\n        opacity: 1;\n        transition: transform 0.25s ease-out;\n        transform: scaleX(",");\n        background: ",";\n        pointer-events: none;\n    }\n"]);return me=function(){return n},n}var be=function(n){var e=n.value,t=n.type,r=void 0===t?"text":t,c=n.placeholder,i=n.onChange,u=n.autoFocus,l=n.name,s=Object(a.useState)(!1),d=Object(F.a)(s,2),f=d[0],m=d[1],b=Object(a.useState)(0),p=Object(F.a)(b,2),v=p[0],h=p[1],g=Object(a.useRef)(null),E=g.current?g.current.getBoundingClientRect().width/2:0;return Object(a.useEffect)(function(){h(E)},[E]),o.a.createElement(pe,{active:f,onMouseDown:function(n){h(n.pageX)},ref:g},o.a.createElement(ve,{move:""!==e},c),o.a.createElement(he,{type:r,value:e,onChange:function(n){return i(n.target.value)},onFocus:function(){return m(!0)},onBlur:function(){h(E),m(!1)},autoFocus:u,name:l}),o.a.createElement("span",{style:{transformOrigin:"".concat(v,"px 0")}}))},pe=d.b.label(me(),function(n){return n.active?1:0},f),ve=d.b.div(fe(),p,function(n){return n.move?"translateY(-17px) scale(0.8)":"translate(0px)"}),he=d.b.input(de(),p);function ge(){var n=Object(l.a)(["\n    padding: 30px;\n"]);return ge=function(){return n},n}var Ee=d.b.div(ge());function Oe(){var n=Object(l.a)(["\n    position: fixed;\n    bottom: ","px;\n    right: 15px;\n    padding: 12px;\n    border: 2px solid ",";\n    color: ",";\n    box-shadow: ",";\n    border-radius: 50%;\n    background: ",";\n    transition: 0.2s;\n    &:active {\n        border-color: ",";\n    }\n"]);return Oe=function(){return n},n}var je=function(n){return o.a.createElement(we,{onClick:n.onClick},o.a.createElement(C,{name:n.iconName,size:"normal"}))},we=d.b.button(Oe(),75,m,f,h,m,f),xe=t(14);function ye(){var n=Object(l.a)(["\n    ",";\n    ",";\n    ",";\n    ",";\n"]);return ye=function(){return n},n}function ke(){var n=Object(l.a)(["\n    animation: "," ","ms "," forwards;\n"]);return ke=function(){return n},n}function Ce(){var n=Object(l.a)(["\n    animation: "," ","ms "," forwards;\n"]);return Ce=function(){return n},n}function Se(){var n=Object(l.a)(["\n    ",";\n    ",";\n    ",";\n    ",";\n"]);return Se=function(){return n},n}function Re(){var n=Object(l.a)(["\n    animation: "," ","ms "," forwards;\n"]);return Re=function(){return n},n}function He(){var n=Object(l.a)(["\n    animation: "," ","ms "," forwards;\n"]);return He=function(){return n},n}function We(){var n=Object(l.a)(["\n    from { opacity: 1; }\n    to { opacity: 0; }\n"]);return We=function(){return n},n}function Le(){var n=Object(l.a)(["\n    from { opacity: 0; }\n    to { opacity: 1; }\n"]);return Le=function(){return n},n}function De(){var n=Object(l.a)(["\n    from {\n        transform: translateY(0px);\n        opacity: 1;\n    }\n    to {\n        transform: translateY(80px);\n        opacity: 0;\n    }\n"]);return De=function(){return n},n}function ze(){var n=Object(l.a)(["\n    from {\n        transform: translateY(80px);\n        opacity: 0;\n    }\n    to {\n        transform: translateY(0px);\n        opacity: 1;\n    }\n"]);return ze=function(){return n},n}var Ve="cubic-bezier(0.29, 0.87, 0.54, 0.99)",Ae=Object(d.c)(ze()),Me=Object(d.c)(De()),Fe=Object(d.c)(Le()),Be=Object(d.c)(We()),Te=Object(d.a)(He(),Ae,400,Ve),Ne=Object(d.a)(Re(),Me,400,Ve),Ie=Object(d.a)(Ce(),Fe,400,Ve),Pe=Object(d.a)(ke(),Be,400,Ve);function Ze(){var n=Object(l.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.1);\n    z-index: 100;\n    ",";\n"]);return Ze=function(){return n},n}function Ue(){var n=Object(l.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 15px;\n    margin: 0 auto auto;\n    width: calc(100vw - 20px);\n    max-height: calc(100vh - 20px);\n    overflow-y: auto;\n    background: ",";\n    border-radius: 4px;\n    z-index: 1000;\n    padding: 15px;\n    box-shadow: ",";\n    ",";\n"]);return Ue=function(){return n},n}var Ge=function(n){return i.a.createPortal(o.a.createElement(xe.d,{in:n.show,timeout:1e3},function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Xe,{status:e},n.children,n.footer&&n.footer()),o.a.createElement(Ye,{status:e,onClick:n.close}))}),Ke)},Ke=document.getElementById("modals"),Xe=d.b.div(Ue(),m,h,function(n){return e=n.status,Object(d.a)(Se(),e===xe.a&&Te,e===xe.c&&Ne,e===xe.c&&"pointer-events: none;",e===xe.b&&"display: none;");var e}),Ye=d.b.div(Ze(),function(n){return e=n.status,Object(d.a)(ye(),e===xe.a&&Ie,e===xe.c&&Pe,e===xe.c&&"pointer-events: none;",e===xe.b&&"display: none;");var e});function _e(){var n=Object(l.a)([""]);return _e=function(){return n},n}var Je=function(n){return o.a.createElement(qe,{type:"search",value:n.value,onChange:function(e){return n.onChange(e.target.value)},placeholder:"Search\u2026"})},qe=d.b.input(_e()),$e=t(27),Qe=t.n($e),nt=t(31),et="abcdefghijklmnopqrstuvwxyz".split(""),tt={},rt=function(){var n=Object(nt.a)(Qe.a.mark(function n(e){var t,r;return Qe.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(et.includes(e)){n.next=2;break}return n.abrupt("return",null);case 2:if(!tt[e]){n.next=4;break}return n.abrupt("return",tt[e]);case 4:return n.next=6,fetch("/dictionary/en-pl/".concat(e,".json"));case 6:return t=n.sent,n.next=9,t.json();case 9:return r=n.sent,tt[e]=r,n.abrupt("return",r);case 12:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),at=function(n){var e=Object(a.useState)(""),t=Object(F.a)(e,2),r=t[0],o=t[1],c=Object(a.useState)([]),i=Object(F.a)(c,2),u=i[0],l=i[1];return function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(a.useEffect)(function(){var r=setTimeout(n.bind(null,t),e);return function(){clearTimeout(r)}},[t,n,e])}(function(){return o(n.toLowerCase())},400,[n]),Object(a.useMemo)(function(){var n=(r[0]||"").toLowerCase();(function(){var e=Object(nt.a)(Qe.a.mark(function e(){var t,a;return Qe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,rt(n);case 2:if(t=e.sent){e.next=6;break}return l([]),e.abrupt("return");case 6:a=t.filter(function(n){return n.word.toLowerCase().startsWith(r)}).slice(0,5),l(a);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[r]),{results:u}};function ot(){var n=Object(l.a)(["\n    border: none;\n    background: none;\n"]);return ot=function(){return n},n}function ct(){var n=Object(l.a)(["\n    color: ",";\n    font-size: 0.8em;\n    font-style: italic;\n"]);return ct=function(){return n},n}function it(){var n=Object(l.a)(["\n    color: ",";\n    font-size: 1.2em;\n"]);return it=function(){return n},n}function ut(){var n=Object(l.a)(["\n    font-weight: normal;\n    font-size: 1.2em;\n"]);return ut=function(){return n},n}function lt(){var n=Object(l.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    padding: 12px;\n    border-bottom: 1px solid ",";\n"]);return lt=function(){return n},n}var st=function(n){return o.a.createElement(dt,null,o.a.createElement("div",null,o.a.createElement(ft,null,n.word.name," - "),o.a.createElement(mt,null,n.word.translation.join(", ")),n.word.action&&"Loading\u2026",!!n.word.example.length&&o.a.createElement(bt,null,n.word.example.join(", "))),o.a.createElement(pt,{onClick:n.removeWord},"\u2716"))},dt=d.b.div(lt(),b),ft=d.b.strong(ut()),mt=d.b.span(it(),f),bt=d.b.div(ct(),v),pt=d.b.button(ot());function vt(){var n=Object(l.a)(["\n    display: block;\n    width: 100%;\n    padding: 1em 0;\n    border: none;\n    border-bottom: 1px solid ",";\n    text-align: left;\n    font-size: 14px;\n"]);return vt=function(){return n},n}var ht,gt=d.b.button(vt(),b);function Et(){var n=Object(l.a)(["\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    left: 0;\n"]);return Et=function(){return n},n}function Ot(){var n=Object(l.a)(["\n    height: calc(100% - ","px);\n    position: relative;\n    width: 100%;\n    overflow-y: auto;\n"]);return Ot=function(){return n},n}var jt=(ht={},Object(s.a)(ht,y.Home,function(){var n=$n(),e=Hn().words;return o.a.createElement(ae,null,o.a.createElement(Xn,null),o.a.createElement(ae,null,o.a.createElement(ne,{words:e,loading:n})),o.a.createElement(oe,null,!n&&o.a.createElement(o.a.Fragment,null,"You added ",o.a.createElement("b",null,e.length)," words")))}),Object(s.a)(ht,y.Words,function(){var n=Hn(),e=n.words,t=n.addWord,r=n.removeWord,c=Object(a.useState)(""),i=Object(F.a)(c,2),u=i[0],l=i[1],s=Object(a.useState)(!1),d=Object(F.a)(s,2),f=d[0],m=d[1],b=Object(a.useState)(""),p=Object(F.a)(b,2),v=p[0],h=p[1],g=Object(a.useState)(""),E=Object(F.a)(g,2),O=E[0],j=E[1],w=Object(a.useState)(""),x=Object(F.a)(w,2),y=x[0],k=x[1],C=at(v).results,S=function(){t(v.trim(),[O],y?[y]:[]),h(""),j(""),k("")},R=function(n){return n.map(function(n){return n.texts[0]}).join(", ")};return o.a.createElement("div",null,o.a.createElement(le,{title:"Words",iconName:"words"},o.a.createElement(Je,{value:u,onChange:l})),o.a.createElement("div",null,e&&e.filter(function(n){return n.name.includes(u)}).map(function(n){return o.a.createElement(st,{key:n.id,word:n,removeWord:function(){return r(n.id)}})})),o.a.createElement(je,{onClick:function(){return m(!f)},iconName:"plus"}),o.a.createElement(Ge,{show:f,footer:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){return m(!1)}},"Close"),o.a.createElement("button",{onClick:S},"Save"))},close:function(){return m(!1)}},o.a.createElement("div",null,o.a.createElement(be,{value:v,placeholder:"Word",onChange:h})),!O&&o.a.createElement("div",null,C.map(function(n){return o.a.createElement(gt,{key:n.id,onClick:function(){h(n.word),j(R(n.trans))}},o.a.createElement("b",null,n.word)," - ",R(n.trans))})),o.a.createElement("div",null,o.a.createElement(be,{value:O,onChange:j,placeholder:"Translation"})),o.a.createElement("div",null,o.a.createElement(be,{value:y,onChange:k,placeholder:"Example"}))))}),Object(s.a)(ht,y.Profile,function(){var n=$n(),e=Object(a.useState)(""),t=Object(F.a)(e,2),r=t[0],c=t[1],i=Object(a.useState)(""),u=Object(F.a)(i,2),l=u[0],s=u[1],d=Sn("user"),f=Object(F.a)(d,1)[0];return n?o.a.createElement("div",null,o.a.createElement(le,{title:"Settings",iconName:"profile"}),o.a.createElement("p",null,"Loading\u2026")):o.a.createElement("div",null,o.a.createElement(le,{title:"Settings",iconName:"profile"}),f?o.a.createElement(ie,{type:"button",onClick:function(){Dn.auth().signOut()}},"Sign out"):o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(n){n.preventDefault(),Dn.auth().createUserWithEmailAndPassword(r,l).catch(function(n){return console.log(n)})}},o.a.createElement(Ee,null,o.a.createElement("h2",null,"Create an account"),o.a.createElement(be,{name:"email",value:r,onChange:c,placeholder:"email"}),o.a.createElement(be,{name:"password",type:"password",value:l,onChange:s,placeholder:"password"}),o.a.createElement(ie,null,"Sign up"))),o.a.createElement("form",{onSubmit:function(n){n.preventDefault(),Dn.auth().signInWithEmailAndPassword(r,l).catch(function(n){return console.log(n)})}},o.a.createElement(Ee,null,o.a.createElement("h2",null,"I already have an account"),o.a.createElement(be,{name:"email",value:r,onChange:c,placeholder:"email"}),o.a.createElement(be,{name:"password",type:"password",value:l,onChange:s,placeholder:"password"}),o.a.createElement(ie,null,"Sign in")))))}),Object(s.a)(ht,y.Game,function(){var n=Rn().goBack,e=Hn().randomWord,t=Object(a.useState)(0),r=Object(F.a)(t,2),c=r[0],i=r[1],u=Object(a.useState)(e()),l=Object(F.a)(u,2),s=l[0],d=l[1],f=s.name.substr(c),m=c===s.name.length,b=function(){d(e()),i(0)};return o.a.createElement(Bn,null,o.a.createElement(Tn,null,o.a.createElement(en.a,{maxFontSize:24},o.a.createElement("div",null,o.a.createElement("h1",null,s.translation),o.a.createElement("h5",null,m?s.example:"\xa0")))),o.a.createElement(Tn,null,o.a.createElement(fn,{word:s.name,progress:c,key:s.name}),o.a.createElement("button",{onClick:n},"Cancel")),o.a.createElement(Nn,null,o.a.createElement(q,{word:f,onPress:function(n){n===s.name[c].toLocaleLowerCase()&&i(c+1)}}),m&&o.a.createElement(In,null,o.a.createElement("h2",null,"Done!"),o.a.createElement(Pn,{onClick:b},"Next word",o.a.createElement(C,{name:"play"})),o.a.createElement(B.b,{keyEventName:B.a,keyValue:"Enter",onKeyHandle:b}))))}),ht),wt=d.b.main(Ot(),60),xt=d.b.div(Et());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(113);var yt=t(13),kt=t(21),Ct=t(16),St=t(15),Rt=t(17),Ht=t(10),Wt=function(n){function e(){var n,t;Object(yt.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(Ct.a)(this,(n=Object(St.a)(e)).call.apply(n,[this].concat(a)))).state={error:null,eventId:null},t.handleReportDialog=function(){u.b({eventId:t.state.eventId})},t}return Object(Rt.a)(e,n),Object(kt.a)(e,[{key:"componentDidCatch",value:function(n,e){var t=this;this.setState({error:n}),Ht.b(function(r){r.setExtras(e),t.setState({eventId:Ht.a(n)})})}},{key:"render",value:function(){return this.state.error?o.a.createElement("div",null,o.a.createElement("h1",null,"Error occurred ;("),o.a.createElement("a",{onClick:this.handleReportDialog},"Report feedback"),o.a.createElement("pre",null,JSON.stringify(this.state.error,null,2))):this.props.children}}]),e}(a.Component);u.a({dsn:"https://adf49e52f07d479098537009eb0044b0@sentry.io/1446350"}),Object(c.render)(o.a.createElement(Wt,null,o.a.createElement(kn,null,o.a.createElement(function(){!function(){var n=Sn("user"),e=Object(F.a)(n,1)[0],t=Sn("words"),r=Object(F.a)(t,1)[0];Object(a.useEffect)(function(){if(void 0!==e){if(null!==e)return Dn.firestore().collection("users").doc(e.id).collection("words").onSnapshot(function(n){var e=[];n.forEach(function(n){var t=n.data();e.push({id:n.id,name:t.name,translation:t.translation,example:t.example})}),Cn({type:"WORDS/SET",payload:e})});Cn({type:"WORDS/SET",payload:[]})}},[e]),Object(a.useEffect)(function(){if(r){var n=r.filter(function(n){return n.action===dn.Add}),t=r.filter(function(n){return n.action===dn.Delete});if((n||t)&&e){var a=Dn.firestore().collection("users").doc(e.id).collection("words");n.forEach(function(n){var e=Object(On.a)({},n);delete e.action,delete e.id,a.add(e)}),t.forEach(function(n){a.doc(n.id).delete()})}}},[r,e])}();var n=Rn(),e=n.route,t=n.setRoute,r=jt[e];return Object(a.useEffect)(function(){Dn.auth().onAuthStateChanged(function(n){Cn({type:"USER/CHANGE",payload:n?{email:n.email,id:n.uid,name:n.displayName}:null})})},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(wt,null,o.a.createElement(r,null)),o.a.createElement(xt,null,o.a.createElement(D,{active:e,onChange:t})))},null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},62:function(n,e,t){n.exports=t(115)}},[[62,1,2]]]);
//# sourceMappingURL=main.9be14bf5.chunk.js.map