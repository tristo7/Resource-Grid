(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{29:function(e,n,t){},30:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(9),i=t.n(r),c=t(8),l=(t(29),t(2)),s=(t(30),t(3)),u=t(11),d=t(13),p=t(4),v="resource_grid",m={resources:Array.from({length:81},(function(e){return{have:0,lastTime:null,progress:0,unlocked:!1}}))};m.resources[0].have=1;var f=function(){var e;return null!==(e=JSON.parse(localStorage.getItem(v)))&&void 0!==e?e:h({},m)}();function h(e,n){var t;for(var a in e=null!==(t=e)&&void 0!==t?t:{},n){var o;if(Array.isArray(n[a]))e[a]=null!==(o=e[a])&&void 0!==o?o:[],g(e[a],n[a]);else if(null===n[a]){var r;e[a]=null!==(r=e[a])&&void 0!==r?r:n[a]}else if("object"===typeof n[a])e[a]=h(e[a],n[a]);else{var i;e[a]=n[a].constructor(null!==(i=e[a])&&void 0!==i?i:n[a])}}return e}function g(e,n){for(var t=0,a=n.length;t<a;t++)if(Array.isArray(n[t]))g(e[t],n[t]);else if(null===n[t]){var o;e[t]=null!==(o=e[t])&&void 0!==o?o:n[t]}else if("object"===typeof n[t])e[t]=h(e[t],n[t]);else{var r;e[t]=n[t].constructor(null!==(r=e[t])&&void 0!==r?r:n[t])}return e}var b=t(16),A=t(17),w=function(){function e(n){var t;Object(b.a)(this,e),this.name=n.name,this.description=n.description,this.unlockAt=n.unlockAt,this._cost=n.cost,this.craftTime=n.craftTime,this.craftMultiply=n.craftMultiply||1,this._position=n.position,this.order=9*this._position[0]+this._position[1],this.randomGrantOnCraft=null!==(t=n.randomGrantOnCraft)&&void 0!==t?t:[],this._effectMultiply=n.effectMultiply,this.noCostIfAutomate=n.noCostIfAutomate||!1,this.automates=n.automates}return Object(A.a)(e,[{key:"position",get:function(){return{x:this._position[1],y:this._position[0]}}},{key:"effectMultiply",value:function(e){return"function"===typeof this._effectMultiply?this._effectMultiply(e):1}},{key:"cost",value:function(e,n){var t;if("undefined"===typeof this._cost||n&&this.noCostIfAutomate)return null;for(var a in t="function"===typeof this._cost?this._cost(e):this._cost,t)t[a]=Math.ceil(t[a]),t[a]<=0&&delete t[a];return t}}]),e}(),x={TreeSeed:new w({name:"TreeSeed",description:"Generate tree",automates:["Tree"],unlockAt:{},position:[0,0]}),Tree:new w({name:"Tree",craftTime:20,unlockAt:{},position:[0,1]}),Log:new w({name:"Log",cost:{Tree:1},craftTime:20,craftMultiply:2,randomGrantOnCraft:[[8e-4,"TreeSeed",0]],unlockAt:{Tree:1},position:[0,2]}),Plank:new w({name:"Plank",cost:{Log:1},craftTime:15,craftMultiply:3,unlockAt:{Log:1},position:[0,3]}),Charcoal:new w({name:"Charcoal",cost:{Plank:3},craftTime:3,craftMultiply:4,unlockAt:{CopperOre:1},noCostIfAutomate:!0,position:[0,4]}),Vine:new w({name:"Vine",position:[0,5]}),Mushroom:new w({name:"Mushroom",position:[0,6]}),Stone:new w({name:"Stone",craftTime:20,randomGrantOnCraft:[[.05,"CopperOre"],[.02,"IronOre"],[.01,"GoldOre"],[.001,"EmeraldStone"]],description:"Chance to grant some ore on craft.\nChance is based on Pickaxe",effectMultiply:function(e){return Math.pow(e[x.Pickaxe.order].have,1.3)},unlockAt:{Pickaxe:1},position:[2,0]}),CopperOre:new w({name:"CopperOre",unlockAt:{CopperOre:1},position:[2,1]}),IronOre:new w({name:"IronOre",unlockAt:{IronOre:1},position:[2,2]}),GoldOre:new w({name:"GoldOre",unlockAt:{GoldOre:1},position:[2,3]}),EmeraldStone:new w({name:"EmeraldStone",position:[2,5]}),AmethystStone:new w({name:"AmethystStone",position:[2,6]}),RubyStone:new w({name:"RubyStone",position:[2,7]}),SapphireStone:new w({name:"SapphireStone",position:[2,8]}),Copper:new w({name:"Copper",cost:{CopperOre:1,Charcoal:1},craftTime:10,unlockAt:{CopperOre:1},position:[3,1]}),Iron:new w({name:"Iron",cost:{IronOre:1,Charcoal:3},craftTime:15,unlockAt:{IronOre:1},position:[3,2]}),Gold:new w({name:"Gold",cost:{GoldOre:1,Charcoal:2},craftTime:10,unlockAt:{GoldOre:1},position:[3,3]}),Emerald:new w({name:"Emerald",cost:{EmeraldStone:10,Lava:1},craftTime:100,position:[3,5]}),Amethyst:new w({name:"Amethyst",cost:{AmethystStone:10,Lava:2},craftTime:150,position:[3,6]}),Ruby:new w({name:"Ruby",cost:{RubyStone:10,Lava:4},craftTime:200,position:[3,7]}),Sapphire:new w({name:"Sapphire",cost:{SapphireStone:10,Lava:8},craftTime:250,position:[3,8]}),Water:new w({name:"Water",craftTime:100,unlockAt:{Copper:1},position:[5,0]}),Lava:new w({name:"Lava",cost:function(e){return{Stone:100,Charcoal:50-45*(1-1/(e/7+1))}},unlockAt:{Stone:100,Charcoal:1},craftTime:200,position:[5,1]}),Steam:new w({name:"Steam",cost:{Water:10,Lava:5},craftTime:300,craftMultiply:15,unlockAt:{Water:1,Lava:1},position:[5,2]}),Axe:new w({name:"Axe",description:"Cuts tree",cost:function(e){return{Plank:3*Math.pow(e+1,2)}},craftTime:5,automates:["Log"],unlockAt:{Plank:1},position:[6,0]}),Saw:new w({name:"Saw",description:"Automates Plank",cost:function(e){return{Plank:10*Math.pow(e+1,2),Iron:3*Math.pow(e+1,1.2)}},craftTime:60,automates:["Plank"],unlockAt:{Iron:1},position:[6,1]}),Pickaxe:new w({name:"Pickaxe",description:"Automatically mines stone",cost:function(e){return{Plank:10*Math.pow(e+1,e/100+1),Stone:6*Math.pow(e,1.4),Copper:3*Math.pow(Math.max(0,e-4),2),Iron:5*Math.pow(Math.max(0,e-9),2),Gold:7*Math.pow(Math.max(0,e-14),2)}},craftTime:30,automates:["Stone"],unlockAt:{Plank:1},position:[6,2]}),GemstomePickaxe:new w({name:"GemstonePickaxe",craftTime:120,unlockAt:{EmeraldStone:1},position:[6,3]}),Pump:new w({name:"Pump",description:"Generates Water",cost:function(e){return{Copper:5*Math.pow(e+1,1.2),Iron:3*Math.pow(e+1,1.2),Gold:3*Math.pow(e+1,1.2)}},craftTime:80,automates:["Water"],unlockAt:{Copper:1},position:[6,4]}),Volcano:new w({name:"Volcano",description:"Automates Lava",cost:function(e){return{Stone:200,Lava:1*Math.pow(e+1,e/15+1)}},craftTime:50,automates:["Lava"],unlockAt:{Lava:1},position:[6,5]}),MetalworkFactory:new w({name:"MetalworkFactory",description:"Automates Copper, Iron and Gold",cost:function(e){return{Copper:10*Math.pow(e+1,1.15),Iron:10*Math.pow(e+1,1.15),Gold:10*Math.pow(e+1,1.15),Pump:2*(e+1),Volcano:e+1}},craftTime:200,automates:["Iron","Gold","Copper"],unlockAt:{Pump:1,Volcano:1},position:[6,6]}),CharcoalMiner:new w({name:"CharcoalMiner",description:"Mines Charcoal without any cost",cost:function(e){return{Steam:15*Math.pow(e+1,1.2),Pump:2+e,Iron:50*(e+1)*(1+e/20)}},craftTime:300,automates:["Charcoal"],unlockAt:{MetalworkFactory:1},position:[6,7]}),Forest:new w({name:"Forest",position:[7,0]}),Underground:new w({name:"Underground",position:[7,1]}),Ocean:new w({name:"Ocean",position:[7,2]}),City:new w({name:"City",position:[7,3]}),EarthEssence:new w({name:"EarthEssence",position:[7,4]}),DivineShard:new w({name:"DivineShard",position:[8,0]}),ReplicantiBoost:new w({name:"ReplicantiBoost",position:[8,7]}),Replicanti:new w({name:"Replicanti",cost:{Replicanti:1},craftMultiply:2,effectMultiply:function(e){var n=e[x.Replicanti.order].have,t=e[x.ReplicantiBoost.order].have,a=Math.min(.95,.5+.4/(1/(Math.pow(t,.9)/50)));return Math.pow(t+1,1.2)*Math.pow(n+1,a)/(n+1)},automates:["Replicanti"],craftTime:10,position:[8,8]})},y=new Array(81).fill(null);for(var O in x){var j=x[O],S=9*j.position.y+j.position.x;y[S]=j}var k=Array.from({length:81},(function(e,n){return y[n]?y.findIndex((function(e){return!(!e||!e.automates)&&e.automates.includes(y[n].name)})):null}));function M(e){return x[e]}function C(e,n){var t=M(e);if(null===n.resources[t.order].startTime){var a=t.cost(n.resources[t.order].have),o=1/0;if(null===a)return o;for(var r in a){var i=a[r],c=n.resources[M(r).order].have;if(i>c)return!1;o=Math.min(o,c/i)}return Math.floor(o)}}function R(e,n){var t=x[e],a=t.order,o=1e3*t.craftTime;return-1!==k[a]&&(o/=Math.max(1,n.resources[k[a]].have),o/=y[k[a]].effectMultiply(n.resources)),o}function T(e,n){var t=x[e];if(!t||!t.unlockAt)return!1;for(var a in t.unlockAt)if(n[x[a].order].have<t.unlockAt[a])return!1;return!0}var I="resource/CRAFT_START",P="resource/CRAFT_UPDATE",G="resource/RESOURCE_UNLOCK",z=function(e,n){return{type:I,order:e,isAuto:n}},E=function(e){var n=e.order,t=e.isAuto,a=e.progressIncrement;return{type:P,order:n,isAuto:t,progressIncrement:a}},L=function(e){return{type:G,order:e}};function B(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=t;for(var o in n){var r=n[o],i=x[o].order;a=Math.min(a,e[i].have/r)}if((a=Math.floor(a))<=0)return!1;for(var c in n){var l=n[c],s=x[c].order;e[s]=Object(p.a)(Object(p.a)({},e[s]),{},{have:e[s].have-l*a})}return a}var V,D,F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.resources,n=arguments.length>1?arguments[1]:void 0,t=y[n.order];if(!t)return e;var a=n.order,o=e[a].have,r=t.cost(o,n.isAuto);switch(n.type){case I:if(null!==(e=Object(d.a)(e))[a].lastTime)return e;var i=B(e,r,1);return i?(e[a]=Object(p.a)(Object(p.a)({},e[a]),{},{lastTime:(new Date).getTime(),progress:0}),e):e;case P:if((e=Object(d.a)(e))[a]=Object(p.a)(Object(p.a)({},e[a]),{},{lastTime:(new Date).getTime(),progress:e[a].progress+n.progressIncrement}),e[a].progress>=1){e[a].lastTime=null;var c=1;n.isAuto?(c+=B(e,r,Math.floor(e[a].progress)-1),e[a].have+=c*t.craftMultiply,e[a].progress%=1):(e[a].have+=t.craftMultiply,e[a].progress=0);for(var l=t.effectMultiply(e),s=0;s<t.randomGrantOnCraft.length;s++){var v=Object(u.a)(t.randomGrantOnCraft[s],2),m=v[0],h=v[1],g=m*l,b=1-Math.pow(1-g,c);Math.random()<b&&(e[x[h].order]=Object(p.a)(Object(p.a)({},e[x[h].order]),{},{have:e[x[h].order].have+1}))}}return e;case G:return(e=Object(d.a)(e))[a]=Object(p.a)(Object(p.a)({},e[a]),{},{unlocked:!0}),e;default:return e}},N="data:image/png;base64,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",U=t(1),Q=s.b.div(V||(V=Object(l.a)(["\n  --costCellWidth: calc(var(--cellWidth) / 2);\n  --costCellHeight: calc(var(--cellHeight) / 3);\n\n  display: grid;\n  grid-template-columns: repeat(2, minmax(calc(var(--cellWidth) / 2), 1fr));\n  grid-auto-rows: var(--costCellHeight);\n  grid-auto-columns: var(--costCellWidth);\n  place-items: center;\n"]))),K=s.b.div(D||(D=Object(l.a)(["\n  --imageSize: min(var(--costCellWidth), var(--costCellHeight));\n  --resourceGap: calc(var(--imageSize) * 9 / 8);\n  --imageScale: calc(81 / 8);\n\n  box-sizing: content-box;\n\n  width: var(--imageSize);\n  height: var(--imageSize);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n\n  color: var(--colReverse);\n  font-weight: 900;\n  text-shadow:\n    calc(var(--imageSize) / 60) calc(var(--imageSize) / 60) 0 var(--colMain1),\n    calc(var(--imageSize) / -60) calc(var(--imageSize) / -60) 0 var(--colMain1),\n    calc(var(--imageSize) / 60) calc(var(--imageSize) / -60) 0 var(--colMain1),\n    calc(var(--imageSize) / -60) calc(var(--imageSize) / 60) 0 var(--colMain1);\n  text-align: right;\n\n  border: calc(var(--imageSize) / 15) solid var(--colMain2);\n  border-radius: calc(var(--imageSize) / 2);\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: calc(100% * var(--imageScale));\n  image-rendering: pixelated;\n  filter: drop-shadow(calc(var(--min) / 500) calc(var(--min) / 500) 0 var(--colStrong));\n"])),N);var J,X,Z,H,W,Y,q=function(e){var n=e.cost;return Object(U.jsx)(Q,{children:n.map((function(e,n){var t=Object(u.a)(e,2),a=t[0],o=t[1],r=x[a];return Object(U.jsx)("div",{children:Object(U.jsx)(K,{style:{backgroundPosition:"calc(var(--resourceGap) * -".concat(r.position.x,") calc(var(--resourceGap) * -").concat(r.position.y,")")},children:o})},n)}))})},_=Object(s.c)(J||(J=Object(l.a)(["\n  from {\n    opacity: 0;\n    transform: translateY(100%) scale(0.2, 1);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1, 1);\n  }\n"]))),$=s.b.div(X||(X=Object(l.a)(["\n  --margin: calc(var(--cellSize) / 10);\n  --boxRatio: 1.3;\n  --boxSize: calc(var(--cellSize) - var(--margin));\n  --cellWidth: calc(var(--boxSize) / var(--boxRatio));\n  --cellHeight: var(--boxSize);\n  --borderRadius: calc(var(--boxSize) / 15);\n\n  margin: calc(var(--margin) / 2);\n\n  width: var(--cellWidth);\n  height: var(--cellHeight);\n  \n  background-color: var(--colMain3);\n  border-radius: var(--borderRadius);\n  box-shadow: var(--baseShadow);\n\n  transform: scale(1);\n  cursor: pointer;\n\n  transition: all 0.3s cubic-bezier(0,.79,.32,1);\n\n  &:hover {\n    width: calc(var(--boxSize) / var(--boxRatio) * 2);\n    background-color: var(--colMain4);\n    transform: scale(1.4);\n    z-index: 1;\n  }\n\n  &:hover::before {\n    content: attr(name);\n\n    padding: 1% 5%;\n    \n    min-width: 60%;\n    height: 15%;\n\n    position: absolute;\n    top: -15%;\n    left: 5%;\n\n    color: var(--colMainReverse);\n    word-spacing: -0.3em;\n    font-size: 0.9em;\n    text-align: center;\n\n    background-color: var(--colMain4);\n    border-radius: calc(var(--cellSize) / 30);\n\n    animation: "," 0.4s cubic-bezier(.12,.81,.31,.95);\n    \n    pointer-events: none;\n  }\n"])),_),ee=s.b.div(Z||(Z=Object(l.a)(["\n  display: flex;\n  overflow: hidden;\n  \n  & > span {\n    display: inline-block;\n\n    width: calc(var(--boxSize) / var(--boxRatio));\n    height: calc(var(--boxSize));\n  }\n"]))),ne=s.b.span(H||(H=Object(l.a)(["\n  position: absolute;\n  bottom: 0;\n\n  width: 100%;\n  height: 0%;\n  max-height: 100%;\n\n  background-color: var(--colOverlay);\n  border-radius: var(--borderRadius);\n\n  z-index: -1;\n"]))),te=s.b.div(W||(W=Object(l.a)(["\n  --imageSize: calc(var(--boxSize) / var(--boxRatio) - var(--margin));\n  --resourceGap: calc(var(--imageSize) * 9 / 8);\n  --imageScale: calc(81 / 8);\n\n  box-sizing: content-box;\n  margin: calc(var(--margin) / 2);\n\n  width: var(--imageSize);\n  height: var(--imageSize);\n\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: calc(100% * var(--imageScale));\n  image-rendering: pixelated;\n  filter: drop-shadow(var(--baseShadow));\n"])),N),ae=s.b.div(Y||(Y=Object(l.a)(["\n  padding-right: calc(var(--boxSize) / 20);\n\n  text-align: right;\n  font-weight: bolder;\n  color: var(--colReverse);\n"])));var oe,re,ie=Object(c.b)((function(){return{}}),{craftStart:z,craftUpdate:E})((function(e){var n,t=e.data,a=e.index,o=e.craftStart,r=(e.craftEnd,t?t.name.replace(/(.)([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t)})):""),i=Object(c.c)((function(e){return e.resources[a]})),l=t?Object.entries(null!==(n=t.cost(i.have))&&void 0!==n?n:{}):[];return i.unlocked?Object(U.jsx)($,{onClick:function(){var e;t&&0!==Object.keys(null!==(e=t.cost(i.have))&&void 0!==e?e:{}).length&&o(a)},name:r,children:t&&Object(U.jsxs)(ee,{children:[Object(U.jsxs)("span",{children:[Object(U.jsx)(te,{style:{backgroundPosition:"calc(var(--resourceGap) * -".concat(t.position.x,") calc(var(--resourceGap) * -").concat(t.position.y,")")}}),Object(U.jsx)(ae,{children:i.have}),Object(U.jsx)(ne,{style:{height:"".concat(100*i.progress,"%")}})]}),Object(U.jsx)(q,{cost:l})]})}):Object(U.jsx)($,{style:{opacity:.3,pointerEvents:"none"}})})),ce=s.b.div(oe||(oe=Object(l.a)(["\n  --cellSize: calc(var(--min) / 9);\n\n  flex: 9;\n\n  display: grid;\n  grid-template-columns: repeat(9, minmax(var(--cellSize), 1fr));\n  grid-auto-rows: var(--cellSize);\n  grid-auto-columns: var(--cellSize);\n  place-items: center;\n"]))),le=s.b.div(re||(re=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  color: var(--colReverseWeak);\n  font-weight: bold;\n  font-size: 2em;\n  opacity: 0.3;\n\n  flex: 7;\n"])));var se,ue,de=function(e){e.save;var n=e.craftStart;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(ce,{children:y.map((function(e,t){return Object(U.jsx)(ie,{data:e,index:t,craftStart:n},null!==e?e.name:"empty_".concat(t))}))}),Object(U.jsx)(le,{children:"- Nothing -"})]})},pe=Object(s.a)(se||(se=Object(l.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n  \n    /* font-family: 'Azeret Mono', monospace; */\n    white-space: nowrap;\n    \n    user-select: none;\n  }\n  \n  body {\n    width: 100vw;\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    color: var(--colReverse);\n\n    background-color: var(--colMain1);\n  }\n  body#theme-dark, body:not(#theme-light){\n    --colStrong: #000000;\n    --colMain1: #191919;\n    --colMain2: #2a2a2a;\n    --colMain3: #3a3a3a;\n    --colMain4: #4a4a4a;\n    --colReverse: #ffffff;\n    --colReverseWeak: #efefef;\n    --colReverseWeaker: #cdcdcd;\n    --colAlt1: #13d1f2;\n    --colOverlay: #fff3;\n  }\n  body#theme-light {\n    --colStrong: #ffffff;\n    --colMain1: #ffffff;\n    --colMain2: #efefef;\n    --colMain3: #dedede;\n    --colMain4: #cdcdcd;\n    --colReverse: #191919;\n    --colReverseWeak: #2a2a2a;\n    --colReverseWeaker: #4a4a4a;\n    --colAlt1: #f29913;\n    --colOverlay: #0003;\n  }\n"]))),ve=s.b.div(ue||(ue=Object(l.a)(["\n  --min: min(var(--w), var(--h));\n\n  --baseShadow: calc(var(--min) / 250) calc(var(--min) / 250) 0 var(--colStrong);\n\n  display: flex;\n\n  width: var(--w);\n  height: var(--h);\n\n  border-radius: calc(var(--min) / 50);\n\n  transition: \n    background-image 0.5s linear,\n    background-color 0.3s ease-out;\n  \n  @media only screen and (orientation: portrait) {\n    & {\n      --w: 100vw;\n      --h: calc(100vw * 9 / 16);\n      font-size: calc(var(--w) / 70);\n    }\n  }\n  @media only screen and (orientation: landscape) {\n    & {\n      --w: 100vh;\n      --h: calc(100vh * 9 / 16);\n      font-size: calc(var(--h) / 70);\n    }\n  }\n  @media only screen and (min-width: 1600px) and (min-height: 900px) {\n    & {\n      --w: 1600px;\n      --h: 900px;\n      font-size: calc(var(--h) / 70);\n    }\n  }\n"])));var me=function(){return Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(pe,{}),Object(U.jsx)(ve,{children:Object(U.jsx)(de,{})})]})},fe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(n){var t=n.getCLS,a=n.getFID,o=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),o(e),r(e),i(e)}))},he=t(12),ge=Object(he.a)({resources:F}),be=Object(he.b)(ge),Ae=(new Date).getTime();var we=function(){var e=be.getState(),n=(new Date).getTime();n-Ae>5e3&&function(e){localStorage.setItem(v,JSON.stringify(e))}(e);for(var t=0;t<y.length;t++){var a,o=y[t];if(null!==o){var r=t,i=e.resources[r],c=1<=(null===(a=e.resources[k[r]])||void 0===a?void 0:a.have);if(!i.unlocked&&T(o.name,e.resources)&&be.dispatch(L(r)),o.automates&&i.have>=1)for(var l=0;l<o.automates.length;l++){var s=x[o.automates[l]],u=s.order;null===e.resources[u].lastTime&&0!==C(s.name,e)&&be.dispatch(z(u,!0))}var d=i.lastTime;if(null!==d){var p=(n-d)/R(o.name,e);be.dispatch(E({order:t,isAuto:c,progressIncrement:p}))}}}};i.a.render(Object(U.jsx)(o.a.StrictMode,{children:Object(U.jsx)(c.a,{store:be,children:Object(U.jsx)(me,{})})}),document.getElementById("root")),setInterval((function(){return we(f)}),1e3/60),fe()}},[[33,1,2]]]);
//# sourceMappingURL=main.bebbe068.chunk.js.map