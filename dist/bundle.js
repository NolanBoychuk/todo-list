(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(81),o=n.n(a),i=n(645),r=n.n(i)()(o());r.push([e.id,"* {\n    margin:0px;\n    padding:0px;\n    color:white;\n}\n#content {\n    display:grid;\n    grid-template-columns:2fr 8fr;\n    grid-template-rows:1fr 9fr;\n    height:100vh;\n}\n#mainHeader {\n    display:flex;\n    justify-content:center;\n    padding:20px;\n    font-size:30px;\n    grid-column:1/3;\n    grid-row:1/2;\n    background-color:blue;\n}\n#sideBar {\n    grid-column:1/2;\n    grid-row:2/3;\n    background-color:rgb(41, 41, 41);\n    padding:15px;\n    display:flex;\n    flex-direction:column;\n    justify-content:start;\n    gap:15px;\n}\n.centerContainer{\n    grid-column:2/3;\n    grid-row:2/3;\n    background-color:yellow;\n}\nul {\n    list-style-type: none;\n}\n#homeHeader {\n    border-bottom: solid white;\n}\n#addProjectDiv{\n    display:flex;\n    justify-content:start;\n    gap:15px;\n    padding:15px;\n}\n#projectsHeader {\n    border-bottom:solid white;\n}\n#addButton {\n    background-color:rgb(41, 41, 41);\n    border-radius:50px;\n    padding:2px;\n    border: 1px solid white;\n}\n#addRemoveDiv {\n    display:flex;\n    justify-content:start;\n    gap:7px;\n}\n#addProject {\n    border-radius:30px;\n    background-color:green;\n    padding:5px;\n    border:none;\n}\n#removeProject {\n    border-radius:30px;\n    background-color:red;\n    padding:5px;\n    border:none;\n}\nli {\n    margin-top:7px;\n}\n#addingDiv {\n    display:flex;\n    flex-direction:column;\n    gap:10px;\n    padding:15px;\n    margin-left:-15px;\n}\n#addingDiv:hover {\n    background-color:rgb(61, 60, 60);\n}\n#addProjectDiv:hover {\n    background-color:rgb(61, 60, 60);\n}\n.homeTasks{\n    padding:5px 0px 5px 15px; \n}\n.input {\n    color:black;\n}\n.homeTasks:hover {\n    background-color:rgb(61, 60, 60);\n}\n#projectList {\n    margin-top:-15px;\n}\n#projectList {\n    margin-left:15px;\n}\n.listItem {\n    display:flex;\n    justify-content:space-between;\n    padding-right:15px;\n    position:relative;\n}\n.editButton {\n    height:13px;\n    width:auto;\n    color:white;\n    padding:3px;\n}\n.editTaskButton {\n    height:16px;\n    width:auto;\n    padding:3px;\n}\n.editTaskButton:hover {\n    background-color: rgb(210, 210, 4);\n}\n.starButton {\n    height:17px;\n    width:auto;\n    padding:3px;\n}\n.starButton:hover {\n    background-color: rgb(210, 210, 4);\n}\n.editButton:hover {\n    background-color:rgb(61, 60, 60);\n}\n.addOrRemove{\n    display:flex;\n    flex-direction:column;\n    gap:10px;\n    justify-content:center;\n    position:absolute;\n    top:-70px;\n    left:100%;\n    margin-right:50px;\n    background-color:rgb(61, 60, 60);\n    padding:10px;\n}\n.addOrRemoveTask{\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    position:absolute;\n    background-color: white;\n    left:100%;\n    border:solid black;\n    border-radius:10px;\n    margin-right:10px;\n}\n.editTask {\n    background-color:white;\n    color:black;\n    border:none;\n    padding:10px 10px 10px 10px;\n    border-radius:10px;\n}\n.editTask:hover{\n    background-color:rgb(175, 172, 172);\n}\n.deletingTask{\n    background-color:white;\n    color:black;\n    border:none;\n    padding:10px 10px 10px 10px;\n    border-radius:10px;\n}\n.deletingTask:hover{\n    background-color:rgb(175, 172, 172);\n}\n.renaming {\n    background-color:rgb(61, 60, 60);\n    border:none;\n}\n.renaming:hover{\n    background-color: rgb(87, 86, 86);\n}\n.deleting{\n    background-color:rgb(61, 60, 60);\n    border:none;\n}\n.deleting:hover{\n    background-color: rgb(87, 86, 86);\n}\n#project {\n    text-align:center;\n    color:black;\n    background-color:white;\n    margin:15px;\n    padding:15px;\n}\n#addTaskDiv {\n    display:flex;\n    justify-content:center;\n    gap:15px;\n    padding:15px;\n    margin-right:95px;\n    margin-left:95px;\n}\n#addTaskDiv:hover {\n    background-color: rgb(210, 210, 4);\n}\n#addTaskButton{\n    background-color:yellow;\n    border-radius:50px;\n    padding:2px;\n    border: 1px solid black;\n    color:black;\n}\n#addTaskButtonText {\n    color:black;\n}\n.titleDiv{\n    display:flex;\n    flex-direction:column;\n}\n.titleInput{\n    color:black;\n}\n.titleInputLabel{\n    color:black;\n}\n.descriptionDiv{\n    display:flex;\n    flex-direction:column;\n}\n.descriptionInput{\n    color:black;\n}\n.descriptionInputLabel{\n    color:black;\n}\n.dateDiv{\n    display:flex;\n    flex-direction:column;\n}\n.dateInput{\n    color:black\n}\n.dateInputLabel{\n    color:black;\n}\n.formDiv {\n    padding:20px 50px 20px 50px;\n}\n.submitRemoveForm {\n    display:flex;\n    justify-content: center;\n    gap:30px;\n    margin-top:10px;\n}\n.submitTaskButton{\n    background-color: green;\n    color:white;\n    padding:5px;\n    border-radius:30px;\n}\n.removeTaskButton{\n    background-color: red;\n    color:white;\n    padding:5px;\n    border-radius:30px;\n}\n.theName {\n    background-color: rgb(41, 41, 41);\n    color:white;\n    border:none;\n    padding-right:5px;\n    padding-left:5px;\n}\n.theName:hover{\n    background-color: (61, 60, 60);\n}\n.titleDescription{\n    display:flex;\n    flex-direction:column;\n    justify-content: center;\n}\n.taskListItem {\n    display:flex;\n    justify-content:space-between;\n    padding:20px;\n    border: solid black;\n    border-radius: 30px;\n    margin-left:50px;\n    margin-right:50px; \n}\n.titleDescription > div{\n    color:black;\n}\n.titleDescription > h3 {\n    color:black;\n}\n.dateDivText {\n    color:black;\n}\n.dateEditDiv{\n    display:flex;\n    justify-content:center;\n    gap:20px;\n    position:relative;\n}\n.taskListItem {\n    position:relative\n}\n.noTasks {\n    display:flex;\n    justify-content:center;\n    margin-top:30px;\n    color:black;\n}",""]);const d=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(r[l]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);a&&r[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},r=[],d=0;d<e.length;d++){var l=e[d],s=a.base?l[0]+a.base:l[0],c=i[s]||0,u="".concat(s," ").concat(c);i[s]=c+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=o(m,a);a.byIndex=d,t.splice(d,0,{identifier:u,updater:h,references:1})}r.push(u)}return r}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=a(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var d=n(i[r]);t[d].references--}for(var l=a(e,o),s=0;s<i.length;s++){var c=n(i[s]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),i=n(569),r=n.n(i),d=n(565),l=n.n(d),s=n(216),c=n.n(s),u=n(589),p=n.n(u),m=n(426),h={};function f(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):"number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?new Date(e):new Date(NaN)}h.styleTagTransform=p(),h.setAttributes=l(),h.insert=r().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=c(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,Math.pow(10,8);const g=6e4,v=525600,b=43200,x=1440,y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function k(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const C={date:k({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:k({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:k({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},E={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function L(e){return(t,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,o=n?.width?String(n.width):t;a=e.formattingValues[o]||e.formattingValues[t]}else{const t=e.defaultWidth,o=n?.width?String(n.width):e.defaultWidth;a=e.values[o]||e.values[t]}return a[e.argumentCallback?e.argumentCallback(t):t]}}const T={ordinalNumber:(e,t)=>{const n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:L({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:L({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:L({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:L({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:L({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function w(e){return(t,n={})=>{const a=n.width,o=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const r=i[0],d=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(let t=0;t<e.length;t++)if(e[t].test(r))return t}(d):function(e,t){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t].test(r))return t}(d);let s;return s=e.valueCallback?e.valueCallback(l):l,s=n.valueCallback?n.valueCallback(s):s,{value:s,rest:t.slice(r.length)}}}const S={ordinalNumber:(D={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{const n=e.match(D.matchPattern);if(!n)return null;const a=n[0],o=e.match(D.parsePattern);if(!o)return null;let i=D.valueCallback?D.valueCallback(o[0]):o[0];return i=t.valueCallback?t.valueCallback(i):i,{value:i,rest:e.slice(a.length)}}),era:w({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:w({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:w({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:w({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:w({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var D;const j={code:"en-US",formatDistance:(e,t,n)=>{let a;const o=y[e];return a="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:C,formatRelative:(e,t,n,a)=>E[e],localize:T,match:S,options:{weekStartsOn:0,firstWeekContainsDate:1}};let M={};function A(){return M}function I(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function P(e,t,n){const a=A(),o=n?.locale??a.locale??j,i=function(e,t){const n=f(e),a=f(t),o=n.getTime()-a.getTime();return o<0?-1:o>0?1:o}(e,t);if(isNaN(i))throw new RangeError("Invalid time value");const r=Object.assign({},n,{addSuffix:n?.addSuffix,comparison:i});let d,l;i>0?(d=f(t),l=f(e)):(d=f(e),l=f(t));const s=(c=n?.roundingMethod??"round")?Math[c]:Math.trunc;var c;const u=l.getTime()-d.getTime(),p=u/g,m=(u-(I(l)-I(d)))/g,h=n?.unit;let y;if(y=h||(p<1?"second":p<60?"minute":p<x?"hour":m<b?"day":m<v?"month":"year"),"second"===y){const e=s(u/1e3);return o.formatDistance("xSeconds",e,r)}if("minute"===y){const e=s(p);return o.formatDistance("xMinutes",e,r)}if("hour"===y){const e=s(p/60);return o.formatDistance("xHours",e,r)}if("day"===y){const e=s(m/x);return o.formatDistance("xDays",e,r)}if("month"===y){const e=s(m/b);return 12===e&&"month"!==h?o.formatDistance("xYears",1,r):o.formatDistance("xMonths",e,r)}{const e=s(m/v);return o.formatDistance("xYears",e,r)}}function q(e,t){return P(e,Date.now(),t)}let W=[],B=(new Date).toDateString(),N=B.indexOf(" "),O=B.indexOf(" ",N+1),F=B.indexOf(" ",O+1),R=B.slice(N+1,O),J=B.slice(O+1,F),H=B.slice(F+1);const{sideBar:Y,allTask:X,today:z,next7:U,important:Z,addButton:Q,projectList:V,addProjectDiv:_}=function(){const e=document.createElement("div");e.id="sideBar";const t=document.createElement("h1");t.textContent="Home",t.id="homeHeader";const n=document.createElement("ul");n.id="homeContainer";const a=document.createElement("li");a.id="allTask",a.classList.add("homeTasks"),a.textContent="All tasks";const o=document.createElement("li");o.id="today",o.classList.add("homeTasks"),o.textContent="Today";const i=document.createElement("li");i.id="next7",i.classList.add("homeTasks"),i.textContent="This week";const r=document.createElement("li");r.id="important",r.classList.add("homeTasks"),r.textContent="Important",n.appendChild(a),n.appendChild(o),n.appendChild(i),n.appendChild(r);const d=document.createElement("h1");d.textContent="Projects",d.id="projectsHeader";const l=document.createElement("div");l.id="addProjectDiv";const s=document.createElement("button");s.id="addButton";const c=document.createElement("span");c.id="addButtonText";const u=document.createElement("ul");return u.id="projectList",s.textContent="+",c.textContent="Add Project",l.appendChild(s),l.appendChild(c),e.appendChild(t),e.appendChild(n),e.appendChild(d),e.appendChild(u),e.appendChild(l),{sideBar:e,allTask:a,today:o,next7:i,important:r,addButton:s,projectList:u,addProjectDiv:l}}(),G=document.querySelector("#content"),K=document.createElement("div");K.id="mainHeader",K.textContent="What to do";const $=document.createElement("div");function ee(){let e=[];for(let t=0;t<W.length;t++)for(let n=0;n<W[t].taskList.length;n++)e.push(W[t].taskList[n]);return e}function te(){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(R)+1}$.classList.add("centerContainer"),G.appendChild(K),G.appendChild(Y),G.appendChild($),X.addEventListener("click",(function(){let e=ee();if($.textContent="",$.id="allTask",0!==e.length){let t=document.createElement("ul");re(e,t),$.appendChild(t)}else{let e=document.createElement("h1");e.classList.add("noTasks"),e.textContent="No tasks!",$.appendChild(e)}})),z.addEventListener("click",(function(){$.id="today",$.textContent="";let e=ee(),t=[],n=te();for(let a=0;a<e.length;a++){let o=e[a].dateText.slice(0,4),i=e[a].dateText.slice(5,7),r=e[a].dateText.slice(8);o==H&&i==n&&r==J&&t.push(e[a])}if(0!==t.length){let e=document.createElement("ul");$.appendChild(e),re(t,e)}else{let e=document.createElement("h1");e.classList.add("noTasks"),e.textContent="No tasks today!",$.appendChild(e)}})),U.addEventListener("click",(function(){$.id="next7",$.textContent="";let e=ee(),t=[];for(let n=0;n<e.length;n++){let a=e[n].dateText.slice(0,4),o=e[n].dateText.slice(5,7),i=e[n].dateText.slice(8),r=q(new Date(a,o-1,i));if(r.includes("day")){let a=r.indexOf(" "),o=r.slice(0,a);o<=7&&o>=0&&t.push(e[n])}else(r.includes("hour")||r.includes("second"))&&t.push(e[n])}if(0!==t.length){let e=document.createElement("ul");$.appendChild(e),re(t,e)}else{let e=document.createElement("h1");e.classList.add("noTasks"),e.textContent="No tasks this week!",$.appendChild(e)}})),Z.addEventListener("click",(function(){$.id="important",$.textContent="";let e=ee(),t=[];for(let n=0;n<e.length;n++)!0===e[n].starred&&t.push(e[n]);if(0!==t.length){let e=document.createElement("ul");$.appendChild(e),re(t,e)}else{let e=document.createElement("h1");e.classList.add("noTasks"),e.textContent="No important tasks!",$.appendChild(e)}})),_.addEventListener("click",(function(){const e=document.createElement("li");e.classList.add("listItemEdit"),ae(e),V.appendChild(e),oe()}));const ne=function(e){return{projectName:e,taskList:[]}};function ae(e){let t=document.createElement("div");t.id="addingDiv";let n=document.createElement("input");n.classList.add("input");let a=document.createElement("div");a.id="addRemoveDiv";let o=document.createElement("button");o.id="addProject",o.classList.add("inputConfirmButtons");let i=document.createElement("button");i.id="removeProject",i.classList.add("inputRemoveButtons"),o.textContent="Add",i.textContent="Remove",a.appendChild(o),a.appendChild(i),n.type="text",n.maxLength="20",n.placeholder="Project Name",t.appendChild(n),n.focus(),t.appendChild(a),e.appendChild(t),oe(),function(e){let t=Y.querySelector("#projectList");e.querySelector(".inputRemoveButtons").addEventListener("click",(function(){e.hasAttribute("id")&&(W.splice(e.id,1),ce()),t.removeChild(e),console.log(JSON.parse(JSON.stringify(W)))}))}(e)}function oe(){document.querySelectorAll(".inputConfirmButtons").forEach((function(e){e.addEventListener("click",(function(){let t=e.parentElement.parentElement.querySelector(".input").value,n=e.parentElement.parentElement.parentElement;n.removeChild(n.querySelector("#addingDiv"));const a=document.createElement("button");a.classList.add("theName"),a.textContent=t,n.appendChild(a);const o=document.createElement("img");o.src="../img/dots-vertical.png",o.classList.add("editButton"),n.appendChild(o),n.classList.remove("listItemEdit"),n.classList.add("listItem"),document.querySelectorAll(".editButton").forEach((function(e){e.addEventListener("click",(function(){const t=e.parentElement,n=t.querySelector(".addOrRemove");n&&t.removeChild(n);const a=document.createElement("div");a.classList.add("addOrRemove");const o=document.createElement("button");o.textContent="Rename",o.classList.add("renaming");const i=document.createElement("button");i.textContent="Delete",i.classList.add("deleting"),a.appendChild(o),a.appendChild(i),t.appendChild(a);let r=document.querySelector("body");r.addEventListener("click",(function n(o){let i=a.contains(o.target),d=e.contains(o.target);i||d||o.target===e||t.contains(a)&&t.removeChild(a),r.addEventListener("click",(function(){r.removeEventListener("click",n)}))})),function(e){e.querySelectorAll(".renaming").forEach((function(t){t.addEventListener("click",(function(){$.id===t.parentElement.parentElement.id&&($.textContent="");const n=e.querySelector(".editButton"),a=e.querySelector(".theName");a.value,e.querySelector(".addOrRemove"),e.removeChild(t.parentElement),e.removeChild(a),e.removeChild(n),e.classList.remove("listItem"),e.classList.add("listItemEdit"),ae(e)}))}))}(t),function(e){e.querySelectorAll(".deleting").forEach((function(t){t.addEventListener("click",(function(){if(V.removeChild(e),$.id===t.parentElement.parentElement.id&&($.textContent=""),$.querySelector("ul")){let e=$.querySelector("ul");e.querySelectorAll(".taskListItem").forEach((function(n){n.getAttribute("parent")===t.parentElement.parentElement.id&&e.removeChild(n)}))}W.splice(e.id,1),ce()}))}))}(t)}))})),document.querySelectorAll(".theName").forEach((function(e){e.addEventListener("click",(function(){$.textContent="";const t=document.createElement("h1");t.id="project",t.textContent=e.textContent,$.appendChild(t),$.id=e.parentElement.id;const n=document.createElement("div");n.id="addTaskDiv",n.classList.add("addTaskDiv");const a=document.createElement("button");a.id="addTaskButton";const o=document.createElement("span");o.id="addTaskButtonText",a.textContent="+",o.textContent="Add Task",n.appendChild(a),n.appendChild(o);const i=document.createElement("ul");i.classList.add("taskList"),$.appendChild(i),$.appendChild(n);let r=W[$.id].taskList;0!==r.length&&(re(r,i),se(i,$.id)),n.addEventListener("click",(function(){const e=document.createElement("li");e.classList.add("taskListItemForm"),i.appendChild(e),ie(e)}))}))})),W.push(ne(t)),ce()}))}))}function ie(e){e.parentElement,$.querySelector(".addTaskDiv");let t=document.createElement("form");t.classList.add("form");const n=document.createElement("div");n.classList.add("formDiv");const a=document.createElement("div");a.classList.add("titleDiv");const o=document.createElement("input");o.classList.add("titleInput"),o.type="text",o.placeholder="What to do?...";const i=document.createElement("label");i.classList.add("titleInputLabel"),i.setAttribute("for","titleInput"),i.textContent="Title:",a.appendChild(i),a.appendChild(o);const r=document.createElement("div");r.classList.add("descriptionDiv");const d=document.createElement("textarea");d.classList.add("descriptionInput"),d.placeholder="eg.. I'm just gonna procrastinate aren't I?";const l=document.createElement("label");l.classList.add("descriptionInputLabel"),l.setAttribute("for","descriptionInput"),l.textContent="Description:",r.appendChild(l),r.appendChild(d);const s=document.createElement("div");s.classList.add("dateDiv");const c=document.createElement("input");c.classList.add("dateInput"),c.type="date";const u=document.createElement("label");u.classList.add("dateInputLabel"),u.textContent="Date:",s.appendChild(u),s.appendChild(c);const p=document.createElement("div");p.classList.add("submitRemoveForm");const m=document.createElement("button");m.classList.add("submitTaskButton"),m.textContent="Add",m.type="submit";const h=document.createElement("button");h.textContent="Delete",h.classList.add("removeTaskButton"),h.type="button",p.appendChild(m),p.appendChild(h),n.appendChild(a),n.appendChild(r),n.appendChild(s),n.appendChild(p),t.appendChild(n),e.appendChild(t),function(e,t){e.querySelector(".submitTaskButton").addEventListener("click",(function(n){t.removeChild(t.querySelector(".form"));let a=e.querySelector(".titleInput").value,o=e.querySelector(".descriptionInput").value,i=e.querySelector(".dateInput").value;if("a"===$.id[0]||"t"===$.id[0]||"n"===$.id[0]||"i"===$.id[0]){let e=t.getAttribute("parent"),n=t.parentElement;if(W[t.getAttribute("parent")].taskList.push({titleText:a,descriptionText:o,dateText:i,starred:false,parent:e}),"a"===$.id[0]){let t=ee();0!==t.length&&(re(t,n),se(n,e))}else if("t"===$.id[0]){let t=ee(),a=[],o=te();for(let e=0;e<t.length;e++){let n=t[e].dateText.slice(0,4),i=t[e].dateText.slice(5,7),r=t[e].dateText.slice(8);n==H&&i==o&&r==J&&a.push(t[e])}0!==a.length&&(re(a,n),se(n,e))}else if("n"===$.id[0]){let t=ee(),a=[];for(let e=0;e<t.length;e++){let n=t[e].dateText.slice(0,4),o=t[e].dateText.slice(5,7),i=t[e].dateText.slice(8),r=q(new Date(n,o-1,i));if(r.includes("day")){let n=r.indexOf(" "),o=r.slice(0,n);o<=7&&o>=0&&a.push(t[e])}else(r.includes("hour")||r.includes("second"))&&a.push(t[e])}0!==a.length&&(re(a,n),se(n,e))}else if("i"===$.id[0]){let t=ee(),a=[];for(let e=0;e<t.length;e++)!0===t[e].starred&&a.push(t[e]);0!==a.length&&(re(a,n),se(n,e))}}else{let e=$.id;W[$.id].taskList.push({titleText:a,descriptionText:o,dateText:i,starred:false,parent:e});let r=W[$.id].taskList,d=t.parentElement;0!==r.length&&(re(r,d),se(d,$.id)),n.preventDefault()}}))}(n,e),function(e){let t=e.parentElement;e.querySelector(".removeTaskButton").addEventListener("click",(function(){t.removeChild(e)}))}(e)}function re(e,t){t.textContent="";for(let n=0;n<e.length;n++){let a=document.createElement("img");!1===e[n].starred?a.src="../img/star-light.svg":a.src="../img/star-dark.svg",a.classList.add("starButton");let o=document.createElement("img");o.src="../img/dots-vertical.svg",o.classList.add("editTaskButton");let i=document.createElement("h3");i.textContent=e[n].titleText;let r=document.createElement("div");r.textContent=e[n].descriptionText;let d=document.createElement("div");d.classList.add("dateEditDiv");let l=document.createElement("div");l.textContent=e[n].dateText,l.classList.add("dateDivText"),""===l.textContent&&(l.textContent="No due date");let s=document.createElement("div"),c=document.createElement("li");c.classList.add("taskListItem"),c.id=e[n].index,s.classList.add("titleDescription"),s.appendChild(i),s.appendChild(r),d.appendChild(l),d.appendChild(a),d.appendChild(o),c.appendChild(s),c.appendChild(d),c.setAttribute("parent",e[n].parent),le(c,o),de(a,e[n]),t.appendChild(c)}}function de(e,t){e.addEventListener("click",(function(){!1===t.starred?(t.starred=!0,e.src="../img/star-dark.svg"):!0===t.starred&&(t.starred=!1,e.src="../img/star-light.svg")}))}function le(e,t){t.addEventListener("click",(function(){let n=e.querySelector(".dateEditDiv");const a=document.createElement("div");a.classList.add("addOrRemoveTask");const o=document.createElement("button");o.textContent="Edit",o.classList.add("editTask");const i=document.createElement("button");i.textContent="Delete",i.classList.add("deletingTask"),a.appendChild(o),a.appendChild(i),n.appendChild(a);let r=document.querySelector("body");r.addEventListener("click",(function e(o){let i=a.contains(o.target),d=t.contains(o.target);i||d||o.target===t||n.contains(a)&&n.removeChild(a),r.addEventListener("click",(function(){r.removeEventListener("click",e)}))})),function(e,t){e.addEventListener("click",(function(){W[Number(t.getAttribute("parent"))].taskList.splice(t.id,1);let e=t.parentElement,n=t.getAttribute("parent");e.removeChild(t),se(e,n)}))}(i,e),function(e,t){e.addEventListener("click",(function(){let e=W[t.getAttribute("parent")].taskList[t.id].titleText,n=W[t.getAttribute("parent")].taskList[t.id].descriptionText,a=W[t.getAttribute("parent")].taskList[t.id].dateText;W[t.getAttribute("parent")].taskList.splice(t.id,1),t.textContent="",t.classList.remove("taskListItem"),t.classList.add("taskListItemForm"),ie(t);let o=t.querySelector(".formDiv");o.querySelector(".titleInput").value=e,o.querySelector(".descriptionInput").value=n,o.querySelector(".dateInput").value=a}))}(o,e)}))}function se(e,t){let n=[];e.querySelectorAll(".taskListItem").forEach((function(e){e.getAttribute("parent")===t&&n.push(e)}));for(let e=0;e<n.length;e++)n[e].id=e,W[t].taskList[e].index=e}function ce(){let e=Y.querySelectorAll(".listItem"),t=0;e.forEach((function(e){e.id=t,W[t].index=t,t+=1}))}})()})();