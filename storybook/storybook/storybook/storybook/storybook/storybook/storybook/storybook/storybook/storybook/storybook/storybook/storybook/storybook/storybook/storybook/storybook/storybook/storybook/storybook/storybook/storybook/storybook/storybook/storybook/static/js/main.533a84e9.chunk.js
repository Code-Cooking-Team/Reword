(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(n,e,t){},137:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"home",function(){return g}),t.d(r,"play",function(){return O}),t.d(r,"plus",function(){return E}),t.d(r,"profile",function(){return j}),t.d(r,"words",function(){return w});var a=t(0),o=t.n(a),c=t(15),i=t.n(c),u=t(144),l=t(2),s=t(9),f=t(3),d="#9438EA",m="#FFFFFF",b="rgba(0, 0, 0, 0.1)",p="rgba(0, 0, 0, 0.3)",v="rgba(0, 0, 0, 0.6)",h="2px 2px 7px rgba(0, 0, 0, 0.1)",g=function(n){return o.a.createElement("svg",{width:n,height:n,viewBox:"0 0 24 24"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 12.5H2L12 3.5L22 12.5H19V20.5H13V14.5H11V20.5H5V12.5ZM17 10.69L12 6.19L7 10.69V18.5H9V12.5H15V18.5H17V10.69Z"}))},O=function(n){return o.a.createElement("svg",{width:n,height:n,viewBox:"0 0 61 61"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.4792 30.5L16.5208 48.2917V12.7083L44.4792 30.5ZM34.9988 30.5L21.6042 21.96V39.04L34.9988 30.5Z"}))},E=function(n){return o.a.createElement("svg",{width:n,height:n,viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"}))},j=function(n){return o.a.createElement("svg",{width:n,height:n,viewBox:"0 0 24 24"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8ZM18 18C17.8 17.29 14.7 16 12 16C9.31 16 6.23 17.28 6 18H18ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V20H4V18Z"}))},w=function(n){return o.a.createElement("svg",{width:n,height:n,viewBox:"0 0 24 24"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V5.99H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM17.5 12.67L15.88 17H19.12L17.5 12.67Z"}))};function y(){var n=Object(l.a)(["\n    display: ",";\n    vertical-align: middle;\n    svg {\n        display: block;\n        margin: auto;\n        fill: currentColor;\n    }\n"]);return y=function(){return n},n}var x,k={normal:24,large:62},C=function(n){var e=n.name,t=n.size,a=void 0===t?"normal":t,c=n.block,i=void 0!==c&&c;return o.a.createElement(S,{block:i},r[e](k[a]))},S=f.b.div(y(),function(n){return n.block?"block":"inline-block"}),R="0.3s cubic-bezier(.21,.96,.43,.98)";function H(){var n=Object(l.a)(["\n    transition: all 0 ease;\n    opacity: 0.3;\n    transform: scale(1);\n    background: rgba(255, 255, 255, 0);\n"]);return H=function(){return n},n}function W(){var n=Object(l.a)(["\n    transition: all ",";\n    opacity: 0;\n    transform: scale(2);\n    background: ",";\n"]);return W=function(){return n},n}function L(){var n=Object(l.a)(["\n    color: ",";\n    display: block;\n    background: none;\n    border: none;\n    padding: 10px 25px;\n    position: relative;\n    line-height: 1.5em;\n    &::after {\n        content: '';\n        display: block;\n        border-radius: 100%;\n        height: 60px;\n        width: 60px;\n        position: absolute;\n        margin: auto;\n        top: -50px;\n        bottom: -50px;\n        left: -50px;\n        right: -50px;\n        ",";\n    }\n    &:active::after {\n        transition: opacity 0.6s ease-out, background 0.6s ease-out, transform 1s ease-out;\n        opacity: 0.1;\n        transform: scale(1.2);\n        background: ",";\n    }\n"]);return L=function(){return n},n}function D(){var n=Object(l.a)(["\n    background: ",";\n    display: flex;\n    width: 100%;\n    min-height: ","px;\n    justify-content: space-evenly;\n    box-shadow: ",";\n    overflow: hidden;\n"]);return D=function(){return n},n}!function(n){n.Home="home",n.Words="words",n.Profile="profile",n.Game="game"}(x||(x={}));var A=function(n){return a.createElement(z,null,a.createElement(V,{isActive:n.active===x.Home,onClick:function(){return n.onChange(x.Home)}},a.createElement(C,{name:"home",block:!0}),"Home"),a.createElement(V,{isActive:n.active===x.Words,onClick:function(){return n.onChange(x.Words)}},a.createElement(C,{name:"words",block:!0}),"Words"),a.createElement(V,{isActive:n.active===x.Profile,onClick:function(){return n.onChange(x.Profile)}},a.createElement(C,{name:"profile",block:!0}),"Profile"))},z=f.b.nav(D(),m,60,"0 0 10px rgba(0, 0, 0, 0.1)"),V=f.b.button(L(),function(n){return n.isActive?d:v},function(n){return n.isActive?I:M},d),I=Object(f.a)(W(),R,d),M=Object(f.a)(H()),B=t(4),T=t(30),P=t(72),X=t.n(P),F="' ,",N=["qwertyuiop","asdfghjkl","zxcvbnm",F].map(function(n){return n.split("")}),Z=function(n,e,t){var r=t?X()(n+e)():0;return{key:n,visible:e.includes(n)||t>r&&!F.includes(n)}};function U(){var n=Object(l.a)(["\n    &:active {\n        outline: none;\n        background-color: ",";\n        color: ",";\n    }\n"]);return U=function(){return n},n}function G(){var n=Object(l.a)(["\n    width: ",";\n    height: 7vh;\n    padding: 0;\n    margin: 0 4px;\n    border: 2px solid ",";\n    opacity: ",";\n    border-radius: 4px;\n    color: ",";\n    font-weight: bold;\n    font-size: 24px;\n    text-align: center;\n    background: none;\n    transition: all ",";\n\n    ","\n"]);return G=function(){return n},n}var K=function(n){return o.a.createElement(Y,{visible:n.visible,onTouchStart:n.onClick,isSpace:" "===n.symbol},n.symbol,o.a.createElement(T.b,{keyEventName:T.a,keyValue:n.symbol,onKeyHandle:n.onClick}))},Y=f.b.button(G(),function(n){return n.isSpace?"47vw":"8vw"},d,function(n){return n.visible?1:.1},d,R,function(n){return n.visible&&_}),_=Object(f.a)(U(),d,m);function J(){var n=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    padding: 10px 5px 0;\n"]);return J=function(){return n},n}function q(){var n=Object(l.a)(["\n    padding: 0 0 50px;\n    background: ",";\n    box-shadow: ",";\n"]);return q=function(){return n},n}var $=function(n){return o.a.createElement(Q,null,function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=n.toLowerCase();return N.map(function(n){return n.map(function(n){return Z(n,t,e)})})}(n.word,n.fakeKeys).map(function(e,t){return o.a.createElement(nn,{key:t},e.map(function(e){return o.a.createElement(K,{key:e.key,symbol:e.key,visible:e.visible,onClick:function(){e.visible&&n.onPress(e.key)}})}))}))},Q=f.b.div(q(),m,"0 0 10px rgba(0, 0, 0, 0.1)"),nn=f.b.div(J()),en=t(20);function tn(){var n=Object(l.a)(["\n    display: inline-block;\n    height: 1em;\n    width: 0.1em;\n    margin: 0 -0.05em;\n    vertical-align: middle;\n    background-color: ",";\n"]);return tn=function(){return n},n}var rn=function(){var n=Object(en.b)({transform:"translate(0) scaleX(1)",from:{transform:"translate(-0.3em) scaleX(3)"}});return o.a.createElement(an,{style:n})},an=Object(f.b)(en.a.span)(tn(),d);function on(){var n=Object(l.a)(["\n    display: inline-block;\n    text-align: center;\n    position: relative;\n    margin: 0 0.025em;\n    height: 100%;\n    min-width: 25px;\n    transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);\n    transform: ",";\n    color: ",";\n\n    &::after {\n        content: '*';\n        position: absolute;\n        text-align: center;\n        top: 0.5em;\n        left: 0;\n        right: 0;\n        line-height: 0.5em;\n        height: 20px;\n        transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);\n        color: ",";\n        transform: ",";\n        opacity: ",";\n    }\n"]);return on=function(){return n},n}function cn(){var n=Object(l.a)(["\n    display: inline-block;\n    line-height: 1em;\n    height: 90px;\n    margin: 0 1px;\n    vertical-align: middle;\n    position: relative;\n"]);return cn=function(){return n},n}function un(){var n=Object(l.a)(["\n    white-space: nowrap;\n    position: relative;\n    width: 100%;\n"]);return un=function(){return n},n}function ln(){var n=Object(l.a)(["\n    text-align: center;\n    font-size: 74px;\n    font-weight: normal;\n    padding: 0px 25px;\n    overflow: hidden;\n    height: 2em;\n    width: 100%;\n    line-height: 2em;\n"]);return ln=function(){return n},n}var sn,fn=function(n){var e=n.word,t=n.progress,r=e.substr(0,t);return o.a.createElement(dn,null,o.a.createElement(mn,null,e.split("").map(function(n,e){return o.a.createElement(bn,{key:n+e},e===t&&o.a.createElement(rn,{key:r}),o.a.createElement(pn,{letterState:t<=e},n))})))},dn=f.b.div(ln()),mn=f.b.div(un()),bn=f.b.span(cn()),pn=f.b.span(on(),function(n){return n.letterState?"scale(0.5)":"scale(1)"},function(n){return n.letterState?"rgba(255,255,255,0)":"#000000"},p,function(n){return n.letterState?"scale(2)":"scale(0)"},function(n){return n.letterState?1:0}),vn=t(73),hn={route:x.Home,lastRoutes:[],words:void 0,user:void 0},gn=t(16),On=t(10),En=t(74),jn=t.n(En);!function(n){n[n.Add=0]="Add",n[n.Delete=1]="Delete"}(sn||(sn={}));var wn,yn=Object(vn.a)((wn=function(n,e){switch(e.type){case"ROUTER/SET_ROUTE":return Object(On.a)({},n,{route:e.payload.route,lastRoutes:[n.route].concat(Object(gn.a)(n.lastRoutes))});case"ROUTER/BACK":return Object(On.a)({},n,{route:n.lastRoutes[0],lastRoutes:n.lastRoutes.slice(1)});case"WORDS/SET":return Object(On.a)({},n,{words:e.payload});case"WORDS/ADD_WORD":var t=Object(On.a)({id:"local-".concat(jn()()),action:sn.Add},e.payload);return Object(On.a)({},n,{words:[].concat(Object(gn.a)(n.words),[t])});case"WORDS/REMOVE_WORD":return Object(On.a)({},n,{words:n.words.map(function(n){return n.id===e.payload.id?Object(On.a)({},n,{action:sn.Delete}):n})});case"USER/CHANGE":return Object(On.a)({},n,{user:e.payload});default:throw new Error("[reducer] Unknown action type!")}},function(n,e){return console.log("\u2192",e.type,e.payload),wn(n,e)}),hn),xn=yn.GlobalStateProvider,kn=yn.dispatch,Cn=yn.useGlobalState,Sn=function(){var n=Cn("route");return{route:Object(B.a)(n,1)[0],setRoute:function(n){kn({type:"ROUTER/SET_ROUTE",payload:{route:n}})},goBack:function(){kn({type:"ROUTER/BACK"})}}},Rn=function(){var n=Cn("words"),e=Object(B.a)(n,1)[0];return{words:e,addWord:function(n){kn({type:"WORDS/ADD_WORD",payload:n})},removeWord:function(n){kn({type:"WORDS/REMOVE_WORD",payload:{id:n}})},randomWord:function(){return e&&e.length?e[Math.floor(Math.random()*e.length)]:null}}},Hn=t(75),Wn=t.n(Hn),Ln=(t(94),t(96),Wn.a.initializeApp({apiKey:"AIzaSyATMnw8FbczS1-0yJwrHl98EunKDAjE1DM",authDomain:"reword-1.firebaseapp.com",databaseURL:"https://reword-1.firebaseio.com",projectId:"reword-1",storageBucket:"reword-1.appspot.com",messagingSenderId:"220877466530",appId:"1:220877466530:web:7c95c058eaa3a7ed"}));function Dn(){var n=Object(l.a)(["\n    padding: 30px 50px;\n    border: none;\n    color: ",";\n    background: ",";\n    border-radius: 4px;\n    box-shadow: ",";\n    font-weight: bold;\n    font-size: 24px;\n"]);return Dn=function(){return n},n}function An(){var n=Object(l.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return An=function(){return n},n}function zn(){var n=Object(l.a)(["\n    width: 100%;\n    position: relative;\n"]);return zn=function(){return n},n}function Vn(){var n=Object(l.a)(["\n    width: 100%;\n    flex: 1 0 auto;\n"]);return Vn=function(){return n},n}function In(){var n=Object(l.a)(["\n    /* display: grid; */\n    /* grid-template-rows: 1fr 2fr auto; */\n    height: 100%;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n    overflow: hidden;\n"]);return In=function(){return n},n}var Mn=f.b.div(In()),Bn=f.b.div(Vn()),Tn=f.b.div(zn()),Pn=f.b.div(An()),Xn=f.b.button(Dn(),m,"#AED900",h);function Fn(){var n=Object(l.a)(["\n    display: inline-block;\n    height: 1em;\n    width: 0.1em;\n    margin: 0 0.05em;\n    vertical-align: middle;\n    background-color: ",";\n"]);return Fn=function(){return n},n}function Nn(){var n=Object(l.a)(["\n    display: inline-block;\n"]);return Nn=function(){return n},n}function Zn(){var n=Object(l.a)(["\n    display: inline-block;\n"]);return Zn=function(){return n},n}function Un(){var n=Object(l.a)(["\n    text-align: center;\n    font-size: 74px;\n    font-weight: normal;\n"]);return Un=function(){return n},n}var Gn=function(){var n=Object(en.b)({opacity:1,transform:"translate(0)",delay:200,from:{opacity:0,transform:"translate(-0.2em)"}}),e=Object(en.b)({opacity:1,transform:"translate(0)",delay:300,from:{opacity:0,transform:"translate(-0.2em)"}}),t=Object(en.b)({transform:"translate(0) scaleX(1)",from:{transform:"translate(-1.2em) scaleX(5)"}});return o.a.createElement(Kn,null,o.a.createElement(Yn,{style:n},"Re"),o.a.createElement(Jn,{style:t}),o.a.createElement(_n,{style:e},"word"))},Kn=f.b.h1(Un()),Yn=Object(f.b)(en.a.span)(Zn()),_n=Object(f.b)(en.a.span)(Nn()),Jn=Object(f.b)(en.a.span)(Fn(),d),qn=function(){var n=Cn("words"),e=Object(B.a)(n,1)[0],t=Cn("user"),r=Object(B.a)(t,1)[0];return void 0===e||void 0===r};function $n(){var n=Object(l.a)(["\n    background: ",";\n    border: none;\n    box-shadow: ",";\n    width: ",";\n    height: ",";\n    max-width: 260px;\n    max-height: 260px;\n    border-radius: 100%;\n    color: ",";\n    font-size: 36px;\n"]);return $n=function(){return n},n}var Qn=function(n){var e=Sn().setRoute;return n.loading?o.a.createElement(ne,null,"Loading"):n.words.length?o.a.createElement(ne,{onClick:function(){return e(x.Game)}},o.a.createElement(C,{name:"play",size:"large",block:!0}),"Play"):o.a.createElement(ne,{onClick:function(){return e(x.Words)}},o.a.createElement(C,{name:"plus",size:"large",block:!0}),"Word")},ne=f.b.button($n(),m,h,"45vmin","45vmin",d);function ee(){var n=Object(l.a)(["\n    padding: 25px;\n    text-align: center;\n"]);return ee=function(){return n},n}function te(){var n=Object(l.a)(["\n    display: grid;\n    height: 100%;\n    grid-auto-rows: 1fr 3fr 1fr;\n    align-items: center;\n    justify-items: center;\n"]);return te=function(){return n},n}var re=f.b.div(te()),ae=f.b.div(ee());function oe(){var n=Object(l.a)(["\n    display: inline-block;\n    padding: 5px 15px;\n    border: 2px solid ",";\n    border-radius: 5px;\n    background: transparent;\n"]);return oe=function(){return n},n}var ce=f.b.button(oe(),d);function ie(){var n=Object(l.a)(["\n    display: flex;\n    min-height: 260px;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return ie=function(){return n},n}var ue=function(n){return o.a.createElement(le,null,o.a.createElement(C,{name:n.iconName,size:"large"}),o.a.createElement("h1",null,n.title),n.children)},le=f.b.header(ie());function se(){var n=Object(l.a)(["\n    padding: 12px 0 9px;\n    border: none;\n    font-size: 15px;\n    display: block;\n    width: 100%;\n    margin: 15px 0;\n    border-bottom: 2px solid ",";\n"]);return se=function(){return n},n}function fe(){var n=Object(l.a)(["\n    position: absolute;\n    top: 9px;\n    left: 0px;\n    font-size: 15px;\n    transition: transform 0.15s ease-out;\n    color: ",";\n    cursor: text;\n    transform-origin: 0 0; // top left for scale\n    transform: ",";\n"]);return fe=function(){return n},n}function de(){var n=Object(l.a)(["\n    position: relative;\n    display: block;\n    span {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 2px;\n        opacity: 1;\n        transition: transform 0.25s ease-out;\n        transform: scaleX(",");\n        background: ",";\n        pointer-events: none;\n    }\n"]);return de=function(){return n},n}var me=function(n){var e=n.value,t=n.type,r=void 0===t?"text":t,c=n.placeholder,i=n.onChange,u=n.autoFocus,l=n.name,s=Object(a.useState)(!1),f=Object(B.a)(s,2),d=f[0],m=f[1],b=Object(a.useState)(0),p=Object(B.a)(b,2),v=p[0],h=p[1],g=Object(a.useRef)(null),O=g.current?g.current.getBoundingClientRect().width/2:0;return Object(a.useEffect)(function(){h(O)},[O]),o.a.createElement(be,{active:d,onMouseDown:function(n){h(n.pageX)},ref:g},o.a.createElement(pe,{move:""!==e},c),o.a.createElement(ve,{type:r,value:e,onChange:function(n){return i(n.target.value)},onFocus:function(){return m(!0)},onBlur:function(){h(O),m(!1)},autoFocus:u,name:l}),o.a.createElement("span",{style:{transformOrigin:"".concat(v,"px 0")}}))},be=f.b.label(de(),function(n){return n.active?1:0},d),pe=f.b.div(fe(),p,function(n){return n.move?"translateY(-17px) scale(0.8)":"translate(0px)"}),ve=f.b.input(se(),p);function he(){var n=Object(l.a)(["\n    display: block;\n    padding: 15px 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    background: none;\n    border: none;\n    cursor: pointer;\n"]);return he=function(){return n},n}function ge(){var n=Object(l.a)(["\n    height: 2px;\n    ","\n    position: absolute;\n    top: 100%;\n    z-index: 10;\n    background: ",";\n"]);return ge=function(){return n},n}function Oe(){var n=Object(l.a)(["\n            animation: "," "," forwards;\n        "]);return Oe=function(){return n},n}function Ee(){var n=Object(l.a)(["\n            position: absolute;\n        "]);return Ee=function(){return n},n}function je(){var n=Object(l.a)(["\n    position: relative;\n    display: block;\n    text-align: center;\n    /* border: 1px solid #ccc; */\n    top: 0;\n    left: 0;\n    width: 100%;\n    ","\n    ","\n"]);return je=function(){return n},n}function we(){var n=Object(l.a)(["\n  from {\n    transform: translateX(-100%);\n  }\n\n  to {\n    transform: translateX(0%);\n  }\n"]);return we=function(){return n},n}function ye(){var n=Object(l.a)(["\n  from {\n    transform: translateX(0%);\n  }\n\n  to {\n    transform: translateX(-100%);\n  }\n"]);return ye=function(){return n},n}function xe(){var n=Object(l.a)(["\n  from {\n    transform: translateX(100%);\n  }\n\n  to {\n    transform: translateX(0%);\n  }\n"]);return xe=function(){return n},n}function ke(){var n=Object(l.a)(["\n  from {\n    transform: translateX(0%);\n  }\n\n  to {\n    transform: translateX(100%);\n  }\n"]);return ke=function(){return n},n}function Ce(){var n=Object(l.a)(["\n    position: relative;\n    overflow: hidden;\n"]);return Ce=function(){return n},n}function Se(){var n=Object(l.a)(["\n    position: relative;\n    display: grid;\n    grid-auto-columns: 1fr;\n    grid-auto-flow: column;\n"]);return Se=function(){return n},n}function Re(){var n=Object(l.a)([""]);return Re=function(){return n},n}var He=function(n){var e=a.Children.toArray(n.children),t=e.findIndex(function(n){return n.props.isActive}),r=Object(a.useState)(t>0?t:0),c=Object(B.a)(r,2),i=c[0],u=c[1],l=Object(a.useState)(null),s=Object(B.a)(l,2),f=s[0],d=s[1],m=Object(a.useRef)(null),b=Object(a.useRef)(null),p=Me(m,b,[i]),v=e[i],h=e[f];return o.a.createElement(We,null,o.a.createElement(Le,{ref:m},e.map(function(n,e){return o.a.createElement(Ie,{ref:e===i?b:null,key:e,onClick:function(){i!==e&&(d(i),u(e))}},n.props.name)}),o.a.createElement(Ve,{style:{transform:"translateX(".concat(p.left,"px)"),width:p.width}})),o.a.createElement(De,null,h&&o.a.createElement(ze,{animation:f>i?"rightOut":"leftOut",key:h.props.name},o.a.createElement(h.type,h.props)),o.a.createElement(ze,{animation:h&&(f<i?"rightIn":"leftIn"),key:v.props.name},o.a.createElement(v.type,v.props))))},We=f.b.div(Re()),Le=f.b.div(Se()),De=f.b.div(Ce()),Ae={rightOut:Object(f.c)(ke()),rightIn:Object(f.c)(xe()),leftOut:Object(f.c)(ye()),leftIn:Object(f.c)(we())},ze=f.b.div(je(),function(n){return n.animation&&n.animation.endsWith("Out")&&Object(f.a)(Ee())},function(n){return n.animation&&Object(f.a)(Oe(),Ae[n.animation],R)}),Ve=f.b.div(ge(),function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return"transition:".concat(e.map(function(n){return"".concat(n," ").concat(R)}).join(","),";\n")}("transform","width"),d),Ie=f.b.button(he()),Me=function(n,e,t){var r=Object(a.useState)(0),o=Object(B.a)(r,2),c=o[0],i=o[1],u=Object(a.useState)(0),l=Object(B.a)(u,2),s=l[0],f=l[1];return Object(a.useEffect)(function(){if(e.current&&n.current){var t=e.current.getBoundingClientRect(),r=n.current.getBoundingClientRect();i(t.left-r.left),f(t.width)}},[].concat(Object(gn.a)(t),[e,n])),{left:c,width:s}};function Be(){var n=Object(l.a)([""]);return Be=function(){return n},n}var Te=function(n){return o.a.createElement(Pe,null,n.children)},Pe=f.b.div(Be());function Xe(){var n=Object(l.a)(["\n    padding: 30px;\n"]);return Xe=function(){return n},n}var Fe=f.b.div(Xe());function Ne(){var n=Object(l.a)(["\n    position: fixed;\n    bottom: ","px;\n    right: 15px;\n    padding: 12px;\n    border: 2px solid ",";\n    color: ",";\n    box-shadow: ",";\n    border-radius: 50%;\n    background: ",";\n    transition: 0.2s;\n    &:active {\n        border-color: ",";\n    }\n"]);return Ne=function(){return n},n}var Ze=function(n){return o.a.createElement(Ue,{onClick:n.onClick},o.a.createElement(C,{name:n.iconName,size:"normal"}))},Ue=f.b.button(Ne(),75,m,d,h,m,d);function Ge(){var n=Object(l.a)([""]);return Ge=function(){return n},n}var Ke=function(n){return o.a.createElement(Ye,{type:"search",value:n.value,onChange:function(e){return n.onChange(e.target.value)},placeholder:"Search\u2026"})},Ye=f.b.input(Ge()),_e=t(52),Je=t.n(_e),qe=t(43);function $e(){var n=Object(l.a)(["\n    border-left: 1px solid #ccc;\n    color: red;\n    padding: 3px;\n    :after {\n        content: 'x';\n    }\n"]);return $e=function(){return n},n}function Qe(){var n=Object(l.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n"]);return Qe=function(){return n},n}function nt(){var n=Object(l.a)([""]);return nt=function(){return n},n}var et=function(n){return o.a.createElement(qe.a,{onDragEnd:function(e){if(console.log(e),e.destination){var t=rt(n.list,e.source.index,e.destination.index);n.onChange(t)}}},o.a.createElement(qe.c,{droppableId:"droppable"},function(e,t){return o.a.createElement(at,Object.assign({},e.droppableProps,{ref:e.innerRef}),n.list.map(function(e,t){return o.a.createElement(qe.b,{key:e,draggableId:e,index:t},function(r,a){return o.a.createElement(ot,Object.assign({key:t,ref:r.innerRef},r.draggableProps,r.dragHandleProps,{style:r.draggableProps.style}),e,o.a.createElement(ct,{onClick:function(){n.onChange(tt(n.list,t))}}))})}),e.placeholder)}))},tt=function(n,e){return n.filter(function(n,t){return e!==t})},rt=function(n,e,t){var r=Array.from(n),a=r.splice(e,1),o=Object(B.a)(a,1)[0];return r.splice(t,0,o),r},at=f.b.div(nt()),ot=f.b.div(Qe()),ct=f.b.button($e()),it=t(14);function ut(){var n=Object(l.a)(["\n    ",";\n    ",";\n    ",";\n    ",";\n"]);return ut=function(){return n},n}function lt(){var n=Object(l.a)(["\n    animation: "," ","ms "," forwards;\n"]);return lt=function(){return n},n}function st(){var n=Object(l.a)(["\n    animation: "," ","ms "," forwards;\n"]);return st=function(){return n},n}function ft(){var n=Object(l.a)(["\n    ",";\n    ",";\n    ",";\n    ",";\n"]);return ft=function(){return n},n}function dt(){var n=Object(l.a)(["\n    animation: "," ","ms "," forwards;\n"]);return dt=function(){return n},n}function mt(){var n=Object(l.a)(["\n    animation: "," ","ms "," forwards;\n"]);return mt=function(){return n},n}function bt(){var n=Object(l.a)(["\n    from { opacity: 1; }\n    to { opacity: 0; }\n"]);return bt=function(){return n},n}function pt(){var n=Object(l.a)(["\n    from { opacity: 0; }\n    to { opacity: 1; }\n"]);return pt=function(){return n},n}function vt(){var n=Object(l.a)(["\n    from {\n        transform: translateY(0px);\n        opacity: 1;\n    }\n    to {\n        transform: translateY(80px);\n        opacity: 0;\n    }\n"]);return vt=function(){return n},n}function ht(){var n=Object(l.a)(["\n    from {\n        transform: translateY(80px);\n        opacity: 0;\n    }\n    to {\n        transform: translateY(0px);\n        opacity: 1;\n    }\n"]);return ht=function(){return n},n}var gt="cubic-bezier(0.29, 0.87, 0.54, 0.99)",Ot=Object(f.c)(ht()),Et=Object(f.c)(vt()),jt=Object(f.c)(pt()),wt=Object(f.c)(bt()),yt=Object(f.a)(mt(),Ot,400,gt),xt=Object(f.a)(dt(),Et,400,gt),kt=Object(f.a)(st(),jt,400,gt),Ct=Object(f.a)(lt(),wt,400,gt);function St(){var n=Object(l.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.1);\n    z-index: 100;\n    ",";\n"]);return St=function(){return n},n}function Rt(){var n=Object(l.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 15px;\n    margin: 0 auto auto;\n    width: calc(100vw - 20px);\n    max-height: calc(100vh - 20px);\n    overflow-y: auto;\n    background: ",";\n    border-radius: 4px;\n    z-index: 1000;\n    padding: 15px;\n    box-shadow: ",";\n    ",";\n"]);return Rt=function(){return n},n}var Ht=function(n){return i.a.createPortal(o.a.createElement(it.d,{in:n.show,timeout:1e3},function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Lt,{status:e},n.children,n.footer&&n.footer()),o.a.createElement(Dt,{status:e,onClick:n.close}))}),Wt)},Wt=document.getElementById("modals"),Lt=f.b.div(Rt(),m,h,function(n){return e=n.status,Object(f.a)(ft(),e===it.a&&yt,e===it.c&&xt,e===it.c&&"pointer-events: none;",e===it.b&&"display: none;");var e}),Dt=f.b.div(St(),function(n){return e=n.status,Object(f.a)(ut(),e===it.a&&kt,e===it.c&&Ct,e===it.c&&"pointer-events: none;",e===it.b&&"display: none;");var e}),At=t(31),zt=t.n(At),Vt=t(40),It="abcdefghijklmnopqrstuvwxyz".split(""),Mt={},Bt=function(){var n=Object(Vt.a)(zt.a.mark(function n(e){var t,r;return zt.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(It.includes(e)){n.next=2;break}return n.abrupt("return",null);case 2:if(!Mt[e]){n.next=4;break}return n.abrupt("return",Mt[e]);case 4:return n.next=6,fetch("/dictionary/en-pl/".concat(e,".json"));case 6:return t=n.sent,n.next=9,t.json();case 9:return r=n.sent,Mt[e]=r,n.abrupt("return",r);case 12:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),Tt=function(n){var e=Object(a.useState)(""),t=Object(B.a)(e,2),r=t[0],o=t[1],c=Object(a.useState)([]),i=Object(B.a)(c,2),u=i[0],l=i[1];return function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(a.useEffect)(function(){var r=setTimeout(n.bind(null,t),e);return function(){clearTimeout(r)}},[t,n,e])}(function(){return o(n.toLowerCase())},400,[n]),Object(a.useMemo)(function(){var n=(r[0]||"").toLowerCase();(function(){var e=Object(Vt.a)(zt.a.mark(function e(){var t,a;return zt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Bt(n);case 2:if(t=e.sent){e.next=6;break}return l([]),e.abrupt("return");case 6:a=t.filter(function(n){return n.word.toLowerCase().startsWith(r)}).slice(0,5),l(a);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[r]),{results:u}};function Pt(){var n=Object(l.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n"]);return Pt=function(){return n},n}function Xt(){var n=Object(l.a)(["\n    display: block;\n    width: 100%;\n    padding: 1em 0;\n    border: none;\n    border-bottom: 1px solid ",";\n    text-align: left;\n    font-size: 14px;\n"]);return Xt=function(){return n},n}var Ft=function(n){var e=Object(a.useState)(""),t=Object(B.a)(e,2),r=t[0],c=t[1],i=Object(a.useState)(""),u=Object(B.a)(i,2),l=u[0],s=u[1],f=Object(a.useState)(""),d=Object(B.a)(f,2),m=d[0],b=d[1],p=Je()(),v=Object(B.a)(p,2),h=v[0],g=v[1],O=Je()(),E=Object(B.a)(O,2),j=E[0],w=E[1],y=Tt(r).results,x=function(){n.onSave({name:r,translation:h,example:j}),c(""),s(""),b(""),n.onClose()};return o.a.createElement(Ht,{show:n.show,footer:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,{onClick:n.onClose},"Close"),o.a.createElement(ce,{onClick:x},"Save"))},close:n.onClose},o.a.createElement("h4",null,"Word"),o.a.createElement("div",null,o.a.createElement(me,{value:r,placeholder:"Word",onChange:c})),!h.length&&o.a.createElement("div",null,y.map(function(n){return o.a.createElement(Nt,{key:n.id,onClick:function(){c(n.word);var e=n.trans.map(function(n){return n.texts[0]});g.set(e)}},o.a.createElement("b",null,n.word)," - ",n.trans.map(function(n){return n.texts[0]}).join(", "))})),o.a.createElement("h4",null,"Translations"),o.a.createElement(et,{list:h,onChange:g.set}),o.a.createElement(Zt,null,o.a.createElement("div",null,o.a.createElement(me,{value:l,onChange:s,placeholder:"Translation"})),o.a.createElement(ce,{onClick:function(){l&&(g.push(l),s(""))}},"+")),o.a.createElement("h4",null,"Examples"),o.a.createElement(et,{list:j,onChange:g.set}),o.a.createElement(Zt,null,o.a.createElement("div",null,o.a.createElement(me,{value:m,onChange:b,placeholder:"Example"})),o.a.createElement(ce,{onClick:function(){m&&(w.push(m),b(""))}},"+")))},Nt=f.b.button(Xt(),b),Zt=f.b.div(Pt());function Ut(){var n=Object(l.a)(["\n    border: none;\n    background: none;\n"]);return Ut=function(){return n},n}function Gt(){var n=Object(l.a)(["\n    color: ",";\n    font-size: 0.8em;\n    font-style: italic;\n"]);return Gt=function(){return n},n}function Kt(){var n=Object(l.a)(["\n    color: ",";\n    font-size: 1.2em;\n"]);return Kt=function(){return n},n}function Yt(){var n=Object(l.a)(["\n    font-weight: normal;\n    font-size: 1.2em;\n"]);return Yt=function(){return n},n}function _t(){var n=Object(l.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    padding: 12px;\n    border-bottom: 1px solid ",";\n"]);return _t=function(){return n},n}var Jt,qt=function(n){return o.a.createElement($t,null,o.a.createElement("div",null,o.a.createElement(Qt,null,n.word.name," - "),o.a.createElement(nr,null,n.word.translation.join(", ")),n.word.action&&"Loading\u2026",!!n.word.example.length&&o.a.createElement(er,null,n.word.example.join(", "))),o.a.createElement(tr,{onClick:n.removeWord},"\u2716"))},$t=f.b.div(_t(),b),Qt=f.b.strong(Yt()),nr=f.b.span(Kt(),d),er=f.b.div(Gt(),v),tr=f.b.button(Ut());function rr(){var n=Object(l.a)(["\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    left: 0;\n"]);return rr=function(){return n},n}function ar(){var n=Object(l.a)(["\n    height: calc(100% - ","px);\n    position: relative;\n    width: 100%;\n    overflow-y: auto;\n"]);return ar=function(){return n},n}var or=(Jt={},Object(s.a)(Jt,x.Home,function(){var n=qn(),e=Rn().words;return o.a.createElement(re,null,o.a.createElement(Gn,null),o.a.createElement(re,null,o.a.createElement(Qn,{words:e,loading:n})),o.a.createElement(ae,null,!n&&o.a.createElement(o.a.Fragment,null,"You added ",o.a.createElement("b",null,e.length)," words")))}),Object(s.a)(Jt,x.Words,function(){var n=Rn(),e=n.words,t=n.removeWord,r=n.addWord,c=Object(a.useState)(""),i=Object(B.a)(c,2),u=i[0],l=i[1],s=Object(a.useState)(!1),f=Object(B.a)(s,2),d=f[0],m=f[1];return o.a.createElement("div",null,o.a.createElement(ue,{title:"Words",iconName:"words"},o.a.createElement(Ke,{value:u,onChange:l})),o.a.createElement("div",null,e&&e.filter(function(n){return n.name.includes(u)}).map(function(n){return o.a.createElement(qt,{key:n.id,word:n,removeWord:function(){return t(n.id)}})})),o.a.createElement(Ze,{onClick:function(){return m(!d)},iconName:"plus"}),o.a.createElement(Ft,{show:d,onClose:function(){return m(!1)},onSave:r}))}),Object(s.a)(Jt,x.Profile,function(){var n=qn(),e=Object(a.useState)(""),t=Object(B.a)(e,2),r=t[0],c=t[1],i=Object(a.useState)(""),u=Object(B.a)(i,2),l=u[0],s=u[1],f=Cn("user"),d=Object(B.a)(f,1)[0];return n?o.a.createElement("div",null,o.a.createElement(ue,{title:"Settings",iconName:"profile"}),o.a.createElement("p",null,"Loading\u2026")):o.a.createElement("div",null,o.a.createElement(ue,{title:"Settings",iconName:"profile"}),d?o.a.createElement(ce,{type:"button",onClick:function(){Ln.auth().signOut()}},"Sign out"):o.a.createElement(He,null,o.a.createElement(Te,{name:"Login In"},o.a.createElement("form",{onSubmit:function(n){n.preventDefault(),Ln.auth().createUserWithEmailAndPassword(r,l).catch(function(n){return console.log(n)})}},o.a.createElement(Fe,null,o.a.createElement("h2",null,"Create an account"),o.a.createElement(me,{name:"email",value:r,onChange:c,placeholder:"email"}),o.a.createElement(me,{name:"password",type:"password",value:l,onChange:s,placeholder:"password"}),o.a.createElement(ce,null,"Sign up")))),o.a.createElement(Te,{name:"Sing in"},o.a.createElement("form",{onSubmit:function(n){n.preventDefault(),Ln.auth().signInWithEmailAndPassword(r,l).catch(function(n){return console.log(n)})}},o.a.createElement(Fe,null,o.a.createElement("h2",null,"I already have an account"),o.a.createElement(me,{name:"email",value:r,onChange:c,placeholder:"email"}),o.a.createElement(me,{name:"password",type:"password",value:l,onChange:s,placeholder:"password"}),o.a.createElement(ce,null,"Sign in"))))))}),Object(s.a)(Jt,x.Game,function(){var n=Sn().goBack,e=Rn(),t=e.words,r=e.randomWord,c=Object(a.useState)(0),i=Object(B.a)(c,2),u=i[0],l=i[1],s=Object(a.useState)(r()),f=Object(B.a)(s,2),d=f[0],m=f[1];if(Object(a.useEffect)(function(){m(r())},[t]),!d)return null;var b=d.name.substr(u),p=u===d.name.length,v=function(){m(r()),l(0)};return o.a.createElement(Mn,null,o.a.createElement(Bn,null,o.a.createElement("div",null,o.a.createElement("h1",null,d.translation),o.a.createElement("h5",null,p?d.example:"\xa0"))),o.a.createElement(Bn,null,o.a.createElement(fn,{word:d.name,progress:u,key:d.name}),o.a.createElement("button",{onClick:n},"Cancel")),o.a.createElement(Tn,null,o.a.createElement($,{word:b,onPress:function(n){n===d.name[u].toLocaleLowerCase()&&l(u+1)}}),p&&o.a.createElement(Pn,null,o.a.createElement("h2",null,"Done!"),o.a.createElement(Xn,{onClick:v},"Next word",o.a.createElement(C,{name:"play"})),o.a.createElement(T.b,{keyEventName:T.a,keyValue:"Enter",onKeyHandle:v}))))}),Jt),cr=f.b.main(ar(),60),ir=f.b.div(rr());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(136);var ur=t(13),lr=t(25),sr=t(18),fr=t(17),dr=t(19),mr=t(28),br=function(n){function e(){var n,t;Object(ur.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(sr.a)(this,(n=Object(fr.a)(e)).call.apply(n,[this].concat(a)))).state={error:null,eventId:null},t.handleReportDialog=function(){u.b({eventId:t.state.eventId})},t}return Object(dr.a)(e,n),Object(lr.a)(e,[{key:"componentDidCatch",value:function(n,e){var t=this;this.setState({error:n}),mr.b(function(r){r.setExtras(e),t.setState({eventId:mr.a(n)})})}},{key:"render",value:function(){return this.state.error?o.a.createElement("div",null,o.a.createElement("h1",null,"Error occurred ;("),o.a.createElement("a",{onClick:this.handleReportDialog},"Report feedback"),o.a.createElement("pre",null,JSON.stringify(this.state.error,null,2))):this.props.children}}]),e}(a.Component);u.a({dsn:"https://adf49e52f07d479098537009eb0044b0@sentry.io/1446350"}),Object(c.render)(o.a.createElement(br,null,o.a.createElement(xn,null,o.a.createElement(function(){!function(){var n=Cn("user"),e=Object(B.a)(n,1)[0],t=Cn("words"),r=Object(B.a)(t,1)[0];Object(a.useEffect)(function(){if(void 0!==e){if(null!==e)return Ln.firestore().collection("users").doc(e.id).collection("words").onSnapshot(function(n){var e=[];n.forEach(function(n){var t=n.data();e.push({id:n.id,name:t.name,translation:t.translation,example:t.example})}),kn({type:"WORDS/SET",payload:e})});kn({type:"WORDS/SET",payload:[]})}},[e]),Object(a.useEffect)(function(){if(r){var n=r.filter(function(n){return n.action===sn.Add}),t=r.filter(function(n){return n.action===sn.Delete});if((n||t)&&e){var a=Ln.firestore().collection("users").doc(e.id).collection("words");n.forEach(function(n){var e=Object(On.a)({},n);delete e.action,delete e.id,a.add(e)}),t.forEach(function(n){a.doc(n.id).delete()})}}},[r,e])}();var n=Sn(),e=n.route,t=n.setRoute,r=or[e];return Object(a.useEffect)(function(){Ln.auth().onAuthStateChanged(function(n){kn({type:"USER/CHANGE",payload:n?{email:n.email,id:n.uid,name:n.displayName}:null})})},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(cr,null,o.a.createElement(r,null)),o.a.createElement(ir,null,o.a.createElement(A,{active:e,onChange:t})))},null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},84:function(n,e,t){n.exports=t(137)}},[[84,1,2]]]);
//# sourceMappingURL=main.533a84e9.chunk.js.map