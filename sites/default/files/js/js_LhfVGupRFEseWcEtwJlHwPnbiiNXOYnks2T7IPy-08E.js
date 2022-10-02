/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n="undefined"!=typeof globalThis?globalThis:n||self,function(){var t=n._,e=n._=r();e.noConflict=function(){return n._=t,e}}())}(this,(function(){
//     Underscore.js 1.13.3
//     https://underscorejs.org
//     (c) 2009-2022 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
var n="1.13.3",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},t=Array.prototype,e=Object.prototype,u="undefined"!=typeof Symbol?Symbol.prototype:null,o=t.push,i=t.slice,a=e.toString,f=e.hasOwnProperty,c="undefined"!=typeof ArrayBuffer,l="undefined"!=typeof DataView,s=Array.isArray,p=Object.keys,v=Object.create,h=c&&ArrayBuffer.isView,y=isNaN,d=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),b=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function j(n,r){return r=null==r?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var o=Array(r+1);for(u=0;u<r;u++)o[u]=arguments[u];return o[r]=e,n.apply(this,o)}}function _(n){var r=typeof n;return"function"===r||"object"===r&&!!n}function w(n){return void 0===n}function A(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)}function x(n){var r="[object "+n+"]";return function(n){return a.call(n)===r}}var S=x("String"),O=x("Number"),M=x("Date"),E=x("RegExp"),B=x("Error"),N=x("Symbol"),I=x("ArrayBuffer"),T=x("Function"),k=r.document&&r.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof k&&(T=function(n){return"function"==typeof n||!1});var D=T,R=x("Object"),F=l&&R(new DataView(new ArrayBuffer(8))),V="undefined"!=typeof Map&&R(new Map),P=x("DataView");var q=F?function(n){return null!=n&&D(n.getInt8)&&I(n.buffer)}:P,U=s||x("Array");function W(n,r){return null!=n&&f.call(n,r)}var z=x("Arguments");!function(){z(arguments)||(z=function(n){return W(n,"callee")})}();var L=z;function $(n){return O(n)&&y(n)}function C(n){return function(){return n}}function K(n){return function(r){var t=n(r);return"number"==typeof t&&t>=0&&t<=m}}function J(n){return function(r){return null==r?void 0:r[n]}}var G=J("byteLength"),H=K(G),Q=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var X=c?function(n){return h?h(n)&&!q(n):H(n)&&Q.test(a.call(n))}:C(!1),Y=J("length");function Z(n,r){r=function(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(n){return!0===r[n]},push:function(t){return r[t]=!0,n.push(t)}}}(r);var t=b.length,u=n.constructor,o=D(u)&&u.prototype||e,i="constructor";for(W(n,i)&&!r.contains(i)&&r.push(i);t--;)(i=b[t])in n&&n[i]!==o[i]&&!r.contains(i)&&r.push(i)}function nn(n){if(!_(n))return[];if(p)return p(n);var r=[];for(var t in n)W(n,t)&&r.push(t);return g&&Z(n,r),r}function rn(n,r){var t=nn(r),e=t.length;if(null==n)return!e;for(var u=Object(n),o=0;o<e;o++){var i=t[o];if(r[i]!==u[i]||!(i in u))return!1}return!0}function tn(n){return n instanceof tn?n:this instanceof tn?void(this._wrapped=n):new tn(n)}function en(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,G(n))}tn.VERSION=n,tn.prototype.value=function(){return this._wrapped},tn.prototype.valueOf=tn.prototype.toJSON=tn.prototype.value,tn.prototype.toString=function(){return String(this._wrapped)};var un="[object DataView]";function on(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var o=typeof n;return("function"===o||"object"===o||"object"==typeof r)&&function n(r,t,e,o){r instanceof tn&&(r=r._wrapped);t instanceof tn&&(t=t._wrapped);var i=a.call(r);if(i!==a.call(t))return!1;if(F&&"[object Object]"==i&&q(r)){if(!q(t))return!1;i=un}switch(i){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return u.valueOf.call(r)===u.valueOf.call(t);case"[object ArrayBuffer]":case un:return n(en(r),en(t),e,o)}var f="[object Array]"===i;if(!f&&X(r)){if(G(r)!==G(t))return!1;if(r.buffer===t.buffer&&r.byteOffset===t.byteOffset)return!0;f=!0}if(!f){if("object"!=typeof r||"object"!=typeof t)return!1;var c=r.constructor,l=t.constructor;if(c!==l&&!(D(c)&&c instanceof c&&D(l)&&l instanceof l)&&"constructor"in r&&"constructor"in t)return!1}o=o||[];var s=(e=e||[]).length;for(;s--;)if(e[s]===r)return o[s]===t;if(e.push(r),o.push(t),f){if((s=r.length)!==t.length)return!1;for(;s--;)if(!on(r[s],t[s],e,o))return!1}else{var p,v=nn(r);if(s=v.length,nn(t).length!==s)return!1;for(;s--;)if(p=v[s],!W(t,p)||!on(r[p],t[p],e,o))return!1}return e.pop(),o.pop(),!0}(n,r,t,e)}function an(n){if(!_(n))return[];var r=[];for(var t in n)r.push(t);return g&&Z(n,r),r}function fn(n){var r=Y(n);return function(t){if(null==t)return!1;var e=an(t);if(Y(e))return!1;for(var u=0;u<r;u++)if(!D(t[n[u]]))return!1;return n!==hn||!D(t[cn])}}var cn="forEach",ln="has",sn=["clear","delete"],pn=["get",ln,"set"],vn=sn.concat(cn,pn),hn=sn.concat(pn),yn=["add"].concat(sn,cn,ln),dn=V?fn(vn):x("Map"),gn=V?fn(hn):x("WeakMap"),bn=V?fn(yn):x("Set"),mn=x("WeakSet");function jn(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function _n(n){for(var r={},t=nn(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function wn(n){var r=[];for(var t in n)D(n[t])&&r.push(t);return r.sort()}function An(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||null==t)return t;for(var u=1;u<e;u++)for(var o=arguments[u],i=n(o),a=i.length,f=0;f<a;f++){var c=i[f];r&&void 0!==t[c]||(t[c]=o[c])}return t}}var xn=An(an),Sn=An(nn),On=An(an,!0);function Mn(n){if(!_(n))return{};if(v)return v(n);var r=function(){};r.prototype=n;var t=new r;return r.prototype=null,t}function En(n){return U(n)?n:[n]}function Bn(n){return tn.toPath(n)}function Nn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function In(n,r,t){var e=Nn(n,Bn(r));return w(e)?t:e}function Tn(n){return n}function kn(n){return n=Sn({},n),function(r){return rn(r,n)}}function Dn(n){return n=Bn(n),function(r){return Nn(r,n)}}function Rn(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){return n.call(r,t,e,u,o)}}return function(){return n.apply(r,arguments)}}function Fn(n,r,t){return null==n?Tn:D(n)?Rn(n,r,t):_(n)&&!U(n)?kn(n):Dn(n)}function Vn(n,r){return Fn(n,r,1/0)}function Pn(n,r,t){return tn.iteratee!==Vn?tn.iteratee(n,r):Fn(n,r,t)}function qn(){}function Un(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}tn.toPath=En,tn.iteratee=Vn;var Wn=Date.now||function(){return(new Date).getTime()};function zn(n){var r=function(r){return n[r]},t="(?:"+nn(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}}var Ln={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},$n=zn(Ln),Cn=zn(_n(Ln)),Kn=tn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Jn=/(.)^/,Gn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Hn=/\\|'|\r|\n|\u2028|\u2029/g;function Qn(n){return"\\"+Gn[n]}var Xn=/^\s*(\w|\$)+\s*$/;var Yn=0;function Zn(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var o=Mn(n.prototype),i=n.apply(o,u);return _(i)?i:o}var nr=j((function(n,r){var t=nr.placeholder,e=function(){for(var u=0,o=r.length,i=Array(o),a=0;a<o;a++)i[a]=r[a]===t?arguments[u++]:r[a];for(;u<arguments.length;)i.push(arguments[u++]);return Zn(n,e,this,this,i)};return e}));nr.placeholder=tn;var rr=j((function(n,r,t){if(!D(n))throw new TypeError("Bind must be called on a function");var e=j((function(u){return Zn(n,e,r,this,t.concat(u))}));return e})),tr=K(Y);function er(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,o=0,i=Y(n);o<i;o++){var a=n[o];if(tr(a)&&(U(a)||L(a)))if(r>1)er(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var ur=j((function(n,r){var t=(r=er(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=rr(n[e],n)}return n}));var or=j((function(n,r,t){return setTimeout((function(){return n.apply(null,t)}),r)})),ir=nr(or,tn,1);function ar(n){return function(){return!n.apply(this,arguments)}}function fr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var cr=nr(fr,2);function lr(n,r,t){r=Pn(r,t);for(var e,u=nn(n),o=0,i=u.length;o<i;o++)if(r(n[e=u[o]],e,n))return e}function sr(n){return function(r,t,e){t=Pn(t,e);for(var u=Y(r),o=n>0?0:u-1;o>=0&&o<u;o+=n)if(t(r[o],o,r))return o;return-1}}var pr=sr(1),vr=sr(-1);function hr(n,r,t,e){for(var u=(t=Pn(t,e,1))(r),o=0,i=Y(n);o<i;){var a=Math.floor((o+i)/2);t(n[a])<u?o=a+1:i=a}return o}function yr(n,r,t){return function(e,u,o){var a=0,f=Y(e);if("number"==typeof o)n>0?a=o>=0?o:Math.max(o+f,a):f=o>=0?Math.min(o+1,f):o+f+1;else if(t&&o&&f)return e[o=t(e,u)]===u?o:-1;if(u!=u)return(o=r(i.call(e,a,f),$))>=0?o+a:-1;for(o=n>0?a:f-1;o>=0&&o<f;o+=n)if(e[o]===u)return o;return-1}}var dr=yr(1,pr,hr),gr=yr(-1,vr);function br(n,r,t){var e=(tr(n)?pr:lr)(n,r,t);if(void 0!==e&&-1!==e)return n[e]}function mr(n,r,t){var e,u;if(r=Rn(r,t),tr(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var o=nn(n);for(e=0,u=o.length;e<u;e++)r(n[o[e]],o[e],n)}return n}function jr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=Array(u),i=0;i<u;i++){var a=e?e[i]:i;o[i]=r(n[a],a,n)}return o}function _r(n){var r=function(r,t,e,u){var o=!tr(r)&&nn(r),i=(o||r).length,a=n>0?0:i-1;for(u||(e=r[o?o[a]:a],a+=n);a>=0&&a<i;a+=n){var f=o?o[a]:a;e=t(e,r[f],f,r)}return e};return function(n,t,e,u){var o=arguments.length>=3;return r(n,Rn(t,u,4),e,o)}}var wr=_r(1),Ar=_r(-1);function xr(n,r,t){var e=[];return r=Pn(r,t),mr(n,(function(n,t,u){r(n,t,u)&&e.push(n)})),e}function Sr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(!r(n[i],i,n))return!1}return!0}function Or(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(r(n[i],i,n))return!0}return!1}function Mr(n,r,t,e){return tr(n)||(n=jn(n)),("number"!=typeof t||e)&&(t=0),dr(n,r,t)>=0}var Er=j((function(n,r,t){var e,u;return D(r)?u=r:(r=Bn(r),e=r.slice(0,-1),r=r[r.length-1]),jr(n,(function(n){var o=u;if(!o){if(e&&e.length&&(n=Nn(n,e)),null==n)return;o=n[r]}return null==o?o:o.apply(n,t)}))}));function Br(n,r){return jr(n,Dn(r))}function Nr(n,r,t){var e,u,o=-1/0,i=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e>o&&(o=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))>i||u===-1/0&&o===-1/0)&&(o=n,i=u)}));return o}var Ir=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Tr(n){return n?U(n)?i.call(n):S(n)?n.match(Ir):tr(n)?jr(n,Tn):jn(n):[]}function kr(n,r,t){if(null==r||t)return tr(n)||(n=jn(n)),n[Un(n.length-1)];var e=Tr(n),u=Y(e);r=Math.max(Math.min(r,u),0);for(var o=u-1,i=0;i<r;i++){var a=Un(i,o),f=e[i];e[i]=e[a],e[a]=f}return e.slice(0,r)}function Dr(n,r){return function(t,e,u){var o=r?[[],[]]:{};return e=Pn(e,u),mr(t,(function(r,u){var i=e(r,u,t);n(o,r,i)})),o}}var Rr=Dr((function(n,r,t){W(n,t)?n[t].push(r):n[t]=[r]})),Fr=Dr((function(n,r,t){n[t]=r})),Vr=Dr((function(n,r,t){W(n,t)?n[t]++:n[t]=1})),Pr=Dr((function(n,r,t){n[t?0:1].push(r)}),!0);function qr(n,r,t){return r in t}var Ur=j((function(n,r){var t={},e=r[0];if(null==n)return t;D(e)?(r.length>1&&(e=Rn(e,r[1])),r=an(n)):(e=qr,r=er(r,!1,!1),n=Object(n));for(var u=0,o=r.length;u<o;u++){var i=r[u],a=n[i];e(a,i,n)&&(t[i]=a)}return t})),Wr=j((function(n,r){var t,e=r[0];return D(e)?(e=ar(e),r.length>1&&(t=r[1])):(r=jr(er(r,!1,!1),String),e=function(n,t){return!Mr(r,t)}),Ur(n,e,t)}));function zr(n,r,t){return i.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function Lr(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:zr(n,n.length-r)}function $r(n,r,t){return i.call(n,null==r||t?1:r)}var Cr=j((function(n,r){return r=er(r,!0,!0),xr(n,(function(n){return!Mr(r,n)}))})),Kr=j((function(n,r){return Cr(n,r)}));function Jr(n,r,t,e){A(r)||(e=t,t=r,r=!1),null!=t&&(t=Pn(t,e));for(var u=[],o=[],i=0,a=Y(n);i<a;i++){var f=n[i],c=t?t(f,i,n):f;r&&!t?(i&&o===c||u.push(f),o=c):t?Mr(o,c)||(o.push(c),u.push(f)):Mr(u,f)||u.push(f)}return u}var Gr=j((function(n){return Jr(er(n,!0,!0))}));function Hr(n){for(var r=n&&Nr(n,Y).length||0,t=Array(r),e=0;e<r;e++)t[e]=Br(n,e);return t}var Qr=j(Hr);function Xr(n,r){return n._chain?tn(r).chain():r}function Yr(n){return mr(wn(n),(function(r){var t=tn[r]=n[r];tn.prototype[r]=function(){var n=[this._wrapped];return o.apply(n,arguments),Xr(this,t.apply(tn,n))}})),tn}mr(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var r=t[n];tn.prototype[n]=function(){var t=this._wrapped;return null!=t&&(r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0]),Xr(this,t)}})),mr(["concat","join","slice"],(function(n){var r=t[n];tn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=r.apply(n,arguments)),Xr(this,n)}}));var Zr=Yr({__proto__:null,VERSION:n,restArguments:j,isObject:_,isNull:function(n){return null===n},isUndefined:w,isBoolean:A,isElement:function(n){return!(!n||1!==n.nodeType)},isString:S,isNumber:O,isDate:M,isRegExp:E,isError:B,isSymbol:N,isArrayBuffer:I,isDataView:q,isArray:U,isFunction:D,isArguments:L,isFinite:function(n){return!N(n)&&d(n)&&!isNaN(parseFloat(n))},isNaN:$,isTypedArray:X,isEmpty:function(n){if(null==n)return!0;var r=Y(n);return"number"==typeof r&&(U(n)||S(n)||L(n))?0===r:0===Y(nn(n))},isMatch:rn,isEqual:function(n,r){return on(n,r)},isMap:dn,isWeakMap:gn,isSet:bn,isWeakSet:mn,keys:nn,allKeys:an,values:jn,pairs:function(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:_n,functions:wn,methods:wn,extend:xn,extendOwn:Sn,assign:Sn,defaults:On,create:function(n,r){var t=Mn(n);return r&&Sn(t,r),t},clone:function(n){return _(n)?U(n)?n.slice():xn({},n):n},tap:function(n,r){return r(n),n},get:In,has:function(n,r){for(var t=(r=Bn(r)).length,e=0;e<t;e++){var u=r[e];if(!W(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=Pn(r,t);for(var e=nn(n),u=e.length,o={},i=0;i<u;i++){var a=e[i];o[a]=r(n[a],a,n)}return o},identity:Tn,constant:C,noop:qn,toPath:En,property:Dn,propertyOf:function(n){return null==n?qn:function(r){return In(n,r)}},matcher:kn,matches:kn,times:function(n,r,t){var e=Array(Math.max(0,n));r=Rn(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:Un,now:Wn,escape:$n,unescape:Cn,templateSettings:Kn,template:function(n,r,t){!r&&t&&(r=t),r=On({},r,tn.templateSettings);var e=RegExp([(r.escape||Jn).source,(r.interpolate||Jn).source,(r.evaluate||Jn).source].join("|")+"|$","g"),u=0,o="__p+='";n.replace(e,(function(r,t,e,i,a){return o+=n.slice(u,a).replace(Hn,Qn),u=a+r.length,t?o+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":i&&(o+="';\n"+i+"\n__p+='"),r})),o+="';\n";var i,a=r.variable;if(a){if(!Xn.test(a))throw new Error("variable is not a bare identifier: "+a)}else o="with(obj||{}){\n"+o+"}\n",a="obj";o="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{i=new Function(a,"_",o)}catch(n){throw n.source=o,n}var f=function(n){return i.call(this,n,tn)};return f.source="function("+a+"){\n"+o+"}",f},result:function(n,r,t){var e=(r=Bn(r)).length;if(!e)return D(t)?t.call(n):t;for(var u=0;u<e;u++){var o=null==n?void 0:n[r[u]];void 0===o&&(o=t,u=e),n=D(o)?o.call(n):o}return n},uniqueId:function(n){var r=++Yn+"";return n?n+r:r},chain:function(n){var r=tn(n);return r._chain=!0,r},iteratee:Vn,partial:nr,bind:rr,bindAll:ur,memoize:function(n,r){var t=function(e){var u=t.cache,o=""+(r?r.apply(this,arguments):e);return W(u,o)||(u[o]=n.apply(this,arguments)),u[o]};return t.cache={},t},delay:or,defer:ir,throttle:function(n,r,t){var e,u,o,i,a=0;t||(t={});var f=function(){a=!1===t.leading?0:Wn(),e=null,i=n.apply(u,o),e||(u=o=null)},c=function(){var c=Wn();a||!1!==t.leading||(a=c);var l=r-(c-a);return u=this,o=arguments,l<=0||l>r?(e&&(clearTimeout(e),e=null),a=c,i=n.apply(u,o),e||(u=o=null)):e||!1===t.trailing||(e=setTimeout(f,l)),i};return c.cancel=function(){clearTimeout(e),a=0,e=u=o=null},c},debounce:function(n,r,t){var e,u,o,i,a,f=function(){var c=Wn()-u;r>c?e=setTimeout(f,r-c):(e=null,t||(i=n.apply(a,o)),e||(o=a=null))},c=j((function(c){return a=this,o=c,u=Wn(),e||(e=setTimeout(f,r),t&&(i=n.apply(a,o))),i}));return c.cancel=function(){clearTimeout(e),e=o=a=null},c},wrap:function(n,r){return nr(r,n)},negate:ar,compose:function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:fr,once:cr,findKey:lr,findIndex:pr,findLastIndex:vr,sortedIndex:hr,indexOf:dr,lastIndexOf:gr,find:br,detect:br,findWhere:function(n,r){return br(n,kn(r))},each:mr,forEach:mr,map:jr,collect:jr,reduce:wr,foldl:wr,inject:wr,reduceRight:Ar,foldr:Ar,filter:xr,select:xr,reject:function(n,r,t){return xr(n,ar(Pn(r)),t)},every:Sr,all:Sr,some:Or,any:Or,contains:Mr,includes:Mr,include:Mr,invoke:Er,pluck:Br,where:function(n,r){return xr(n,kn(r))},max:Nr,min:function(n,r,t){var e,u,o=1/0,i=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e<o&&(o=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))<i||u===1/0&&o===1/0)&&(o=n,i=u)}));return o},shuffle:function(n){return kr(n,1/0)},sample:kr,sortBy:function(n,r,t){var e=0;return r=Pn(r,t),Br(jr(n,(function(n,t,u){return{value:n,index:e++,criteria:r(n,t,u)}})).sort((function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index})),"value")},groupBy:Rr,indexBy:Fr,countBy:Vr,partition:Pr,toArray:Tr,size:function(n){return null==n?0:tr(n)?n.length:nn(n).length},pick:Ur,omit:Wr,first:Lr,head:Lr,take:Lr,initial:zr,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:$r(n,Math.max(0,n.length-r))},rest:$r,tail:$r,drop:$r,compact:function(n){return xr(n,Boolean)},flatten:function(n,r){return er(n,r,!1)},without:Kr,uniq:Jr,unique:Jr,union:Gr,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=Y(n);e<u;e++){var o=n[e];if(!Mr(r,o)){var i;for(i=1;i<t&&Mr(arguments[i],o);i++);i===t&&r.push(o)}}return r},difference:Cr,unzip:Hr,transpose:Hr,zip:Qr,object:function(n,r){for(var t={},e=0,u=Y(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),o=0;o<e;o++,n+=t)u[o]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(i.call(n,e,e+=r));return t},mixin:Yr,default:tn});return Zr._=Zr,Zr}));;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      'use strict';

      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
};
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = {
  behaviors: {},
  locale: {}
};

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }

    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }

    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}

    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }

        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };

    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
(function ($, Drupal) {

  var show_new_design = $('header').hasClass('tfnsw-ui-kit');

  // Generate the body markup for alert
  var getAlertBody = function (alertContent, alertID, alertType, screenSize, alertTitle, alertURL) {

    if (show_new_design){

      if (alertType == 'alert-general' || alertType == 'alert-important' || alertType == 'alert-campaign'){

        var alertIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">';
            alertIcon += '  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1C1C1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>';
            alertIcon += '  <path d="M12 8V12" stroke="#1C1C1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>';
            alertIcon += '  <path d="M12 16H12.01" stroke="#1C1C1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>';
            alertIcon += '</svg>';

      }else{

        var alertIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">';
            alertIcon += '  <path d="M10.29 3.85996L1.81999 18C1.64536 18.3024 1.55296 18.6453 1.55198 18.9945C1.551 19.3437 1.64148 19.6871 1.81442 19.9905C1.98735 20.2939 2.23672 20.5467 2.5377 20.7238C2.83868 20.9009 3.18079 20.9961 3.52999 21H20.47C20.8192 20.9961 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0126 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.85996C13.5317 3.56607 13.2807 3.32308 12.9812 3.15444C12.6817 2.98581 12.3437 2.89722 12 2.89722C11.6563 2.89722 11.3183 2.98581 11.0188 3.15444C10.7193 3.32308 10.4683 3.56607 10.29 3.85996V3.85996Z" stroke="#C41F3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></path>';
            alertIcon += '  <path d="M12 9V13" stroke="#C41F3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></path>';
            alertIcon += '  <path d="M12 17H12.01" stroke="#C41F3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></path>';
            alertIcon += '</svg>';

      }

      var alertbody  = '<a href="' + alertURL + '" class="alert ' + alertType + ' alert-dismissible tfnsw-cr-msg ' + alertID + ' tfnsw-alert fade show" role="alert">';
          alertbody += '  <div class="row d-flex flex-md-row">';
          alertbody += '    <div class="col flex-grow-0 pr-0">';
          alertbody += '      ' + alertIcon;
          alertbody += '    </div>';
          alertbody += '    <div class="col">';
          // alertbody += '      <h2 class="h6 alert-title">' + alertTitle + '</h2>';
          alertbody += '      ' + alertContent;
          alertbody += '    </div>';
          alertbody += '  </div>';           
          alertbody += '  <button type="button" class="btn--icon close" data-dismiss="alert" aria-label="Close" name="' + alertID + '">';
          alertbody += '    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">';
          alertbody += '      <path d="M6.94004 6.00012L11.14 1.80679C11.2656 1.68125 11.3361 1.51099 11.3361 1.33346C11.3361 1.15592 11.2656 0.985659 11.14 0.860124C11.0145 0.734588 10.8442 0.664062 10.6667 0.664062C10.4892 0.664062 10.3189 0.734588 10.1934 0.860124L6.00004 5.06012L1.80671 0.860124C1.68117 0.734588 1.51091 0.664063 1.33337 0.664063C1.15584 0.664063 0.985576 0.734588 0.860041 0.860124C0.734505 0.985659 0.66398 1.15592 0.66398 1.33346C0.66398 1.51099 0.734505 1.68125 0.860041 1.80679L5.06004 6.00012L0.860041 10.1935C0.797555 10.2554 0.747959 10.3292 0.714113 10.4104C0.680267 10.4916 0.662842 10.5788 0.662842 10.6668C0.662842 10.7548 0.680267 10.8419 0.714113 10.9232C0.747959 11.0044 0.797555 11.0781 0.860041 11.1401C0.922016 11.2026 0.99575 11.2522 1.07699 11.2861C1.15823 11.3199 1.24537 11.3373 1.33337 11.3373C1.42138 11.3373 1.50852 11.3199 1.58976 11.2861C1.671 11.2522 1.74473 11.2026 1.80671 11.1401L6.00004 6.94012L10.1934 11.1401C10.2553 11.2026 10.3291 11.2522 10.4103 11.2861C10.4916 11.3199 10.5787 11.3373 10.6667 11.3373C10.7547 11.3373 10.8419 11.3199 10.9231 11.2861C11.0043 11.2522 11.0781 11.2026 11.14 11.1401C11.2025 11.0781 11.2521 11.0044 11.286 10.9232C11.3198 10.8419 11.3372 10.7548 11.3372 10.6668C11.3372 10.5788 11.3198 10.4916 11.286 10.4104C11.2521 10.3292 11.2025 10.2554 11.14 10.1935L6.94004 6.00012Z" fill="#000000"/>';
          alertbody += '    </svg>';
          alertbody += '  </button>';
          alertbody += '</a>';
      alertItem = alertbody;

    }else{

      var alertItem = '';

      var alertbodydesktop = '<div class="hidden tfnsw-cr-msg ' + alertID + ' hidden-xs hidden-sm ">' +
        ' <div class="alert alert-dismissable tfnsw-alert  '+ alertType + '" role="alert">';

      var alertbodymobile = '<div class="hidden tfnsw-cr-msg ' + alertID + ' hidden-md hidden-lg ">' +
        ' <div class="alert alert-dismissable tfnsw-alert tfnsw-alert-simple '+ alertType + '" role="alert">';

      var alertIcon = (alertType == 'alert-general' || alertType == 'alert-important' || alertType == 'alert-campaign') ? 'tp_alert_info' : 'tp_alert_warning';

      var alertbody  = '   <h2 class="sr-only">Alert</h2>';
        alertbody += '      <svg class="tp-icon tfnsw-icon xs-lg sm-md" aria-hidden="true" focusable="false">';
        alertbody += '       <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/themes/custom/tfnsw_bootstrap/assets/icons/icons.svg#' + alertIcon + '"></use>';
        alertbody += '      </svg>';
        alertbody += '      <div class="alert-body">';
        alertbody += '        ' + alertContent;
        alertbody += '      </div>';
        alertbody += '       <div class="alert-close-container">';
        alertbody += '         <button type="button" class="close" data-dismiss="alert" aria-label="Close alert" name="' + alertID + '">';
        alertbody += '             <svg class="tp-icon sm-md" aria-hidden="true" focusable="false">';
        alertbody += '                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/themes/custom/tfnsw_bootstrap/assets/icons/icons.svg#tp_alert_close"></use>';
        alertbody += '           </svg>';
        alertbody += '           <span class="sr-only">Close banner</span>';
        alertbody += '          </button>';
        alertbody += '       </div>';
        alertbody += ' </div>';
        alertbody += '</div>';

      if(screenSize == 'desktop') {

        alertItem = alertbodydesktop+alertbody;

      }else{

        alertItem = alertbodymobile+alertbody;
      }
    }

    return alertItem;
  }

  //Generate markup for an ICS alert item
  var alertICSItemMarkup = function(index, value, screenSize) {

    var alertItem = '';
    var alertTitle = '';
    var alertURL = '';
    var alertID = 'ca-' + value.id + "-" + value.version;
    var alertType = value.priority == 'veryHigh' ? 'alert-vhigh' : 'alert-high';
    
    if (show_new_design){
        alertContent = value.urlText;
        alertURL = '/alerts/details#/' + value.id;
    }else{
        var alertContent = '<a href="/alerts/details#/' + value.id + '" class="alert-link">' + value.urlText + '</a>';
    }

    if(alertContent !== "") {

      alertItem = getAlertBody(alertContent, alertID, alertType, screenSize, alertTitle, alertURL);
    }

    return alertItem;
  }

  //Generate markup for an alert banner item
  var alertBannerItemMarkup = function(index, value, screenSize) {
    var alertType = 'alert-important';
    var alertID = 'ca-' + value.nid + "-regional-alerts";

    if(typeof(value.field_priority) != "undefined" &&
      value.field_priority !== null) {
   
      switch(value.field_priority) {

        case 'general':
          alertType = 'alert-general';
          break;

        case 'campaign':
          alertType = 'alert-campaign';
          break;

        case 'high':
          alertType = 'alert-high';
          break;

        case 'very_high':
          alertType = 'alert-vhigh';
          break;

        default:
          alertType = 'alert-important';
          break;
      }

    }
    else if(typeof(value.field_alert_banner_type) &&
      value.field_alert_banner_type !== null &&
      value.field_alert_banner_type.toLowerCase() == 'campaign') {

      var alertID = 'ca-' + value.nid + "-banner-alerts";
      alertType = 'alert-campaign';
    }

    var alertMessage = typeof(value.field_message_text) != "undefined" &&
    value.field_message_text !== null &&
    value.field_message_text !== "" ? value.field_message_text : '';

    alertMessage !== "" ? alertMessage += " " : "";

    var alertTitle = typeof(value.title) != "undefined" &&
    value.title !== null &&
    value.title !== "" ? value.title : '';

    var alertURL = typeof(value.field_call_to_action_link) != "undefined" &&
    value.field_call_to_action_link !== null &&
    value.field_call_to_action_link !== "" ? value.field_call_to_action_link : '';
    
    if (show_new_design){

      var alertCallToAction = '';
      var regionalAlertCallToAction ='';

    }else{

      var alertCallToAction = typeof(value.alerts_call_to_action) != "undefined" &&
      value.alerts_call_to_action !== null &&
      value.alerts_call_to_action !== "" ? value.alerts_call_to_action : '';

      var regionalAlertCallToAction = typeof(value.regional_alerts_call_to_action) != "undefined" &&
      value.regional_alerts_call_to_action !== null &&
      value.regional_alerts_call_to_action !== "" ? value.regional_alerts_call_to_action : '';
    }

    var alertContent = alertMessage + (regionalAlertCallToAction ? regionalAlertCallToAction : alertCallToAction);
    var alertItem = '';

    if(alertContent !== "") {
      alertItem = getAlertBody(alertContent, alertID, alertType, screenSize, alertTitle, alertURL);
    }

    return alertItem;
  }

  //Remove previously closed alerts
  var removeClosedAlerts = function() {

    // Local storage check for closed alerts
    var removedCR = localStorage.getItem("removedCR");

    if(removedCR != null) {

      var rcr = removedCR.split('$');

      for(var i=0;i<rcr.length;i++){
        $('div[class~="'+rcr[i]+'"]').remove();
        $('a[class~="'+rcr[i]+'"]').remove();
      }
    }

    $('.tfnsw-cr-msg').removeClass('hidden');

  }

  // Process data received from ICS endpoint
  var processICSResponse = function (response) {

    //If the alerts are coming from ICS
    if (typeof(response.infos) != "undefined" && response.infos !== null) {

      //if alert exists
      if (typeof(response.infos.current) != "undefined" &&
        response.infos.current !== null &&
        response.infos.current.length > 0) {

        // JS Configurations for alert block
        $.each(response.infos.current, function(index, value) {

          // Only show 'high' and 'veryHigh' alerts.
          if (typeof(value.priority) != "undefined" &&
            value.priority !== null &&
            value.priority.length > 0 &&
            (value.priority == 'veryHigh' ||
              value.priority == 'high')) {

            var alertItemDesktop = alertICSItemMarkup(index, value, 'desktop');
            var alertItemMobile = alertICSItemMarkup(index, value, 'mobile');
            $(".cr-placeholder-desktop .ics-alerts").append(alertItemDesktop);
            $(".cr-placeholder-mobile .ics-alerts").append(alertItemMobile);
          }
        });
      }
    }
  }

  // Process data received from Alert Banner endpoint
  var processAlertBannerResponse = function (response) {
    //If the alerts are coming from NSW train link alert json endpoint
    if(response.length > 0) {

      $.each(response, function (index, value) {

        // If alert banner, value.alert_banner_path is available
        if(typeof(value.nid) != "undefined" &&
          value.nid !== null &&
          typeof(value.alert_banner_path) != "undefined" &&
          value.alert_banner_path !== null) {

          var currentPath = window.location.pathname;
          var allowedPaths = value.alert_banner_path.split(',');

          // Get the path list and check if wildcards are set
          var wildcardpath = allowedPaths.find(a =>a.includes("*"));
          if (typeof(wildcardpath) != "undefined" && wildcardpath !== null) {
              var cpath = allowedPaths.filter(function(item) {
                let dpath = item.includes("*");
                if (dpath) {
                  path = item.replace("/*","");
                  return currentPath.match(path) ? path : "";
                }
              });
          }

          //Check if current path is in the path list
          if($.inArray(currentPath, allowedPaths) >= 0 || (typeof(cpath) != "undefined" && cpath.length > 0)) {
            if (typeof(value.field_page_visibility) == "undefined" ||
                value.field_page_visibility === null ||  value.field_page_visibility == 0){
                var alertItemDesktop = alertBannerItemMarkup(index, value, 'desktop');
                var alertItemMobile = alertBannerItemMarkup(index, value, 'mobile');
                $(".cr-placeholder-desktop .alert-banners").append(alertItemDesktop);
                $(".cr-placeholder-mobile .alert-banners").append(alertItemMobile);
            }
          }else {
            if (typeof(value.field_page_visibility) != "undefined" &&
                value.field_page_visibility !== null && (value.field_page_visibility == 1 || allowedPaths == "")){
                var alertItemDesktop = alertBannerItemMarkup(index, value, 'desktop');
                var alertItemMobile = alertBannerItemMarkup(index, value, 'mobile');
                $(".cr-placeholder-desktop .alert-banners").append(alertItemDesktop);
                $(".cr-placeholder-mobile .alert-banners").append(alertItemMobile);
            }
          }
        }
      });
    }
  }

  // Process data received from Regional Alert endpoint
  var processRegionalAlertResponse = function (response) {

    //If the alerts are coming from NSW train link alert json endpoint
    if(response.length > 0) {

      $.each(response, function (index, value) {

        // If regional alerts, value.nothing is available
        if(typeof(value.nid) != "undefined" &&
          value.nid !== null &&
          typeof(value.nothing) != "undefined" &&
          value.nothing !== null) {

          var currentPath = window.location.pathname;
          var allowedPaths = value.nothing.split(',');

          //Check if current path is in the allowed path list
          if($.inArray(currentPath, allowedPaths) >= 0) {

            var alertItemDesktop = alertBannerItemMarkup(index, value, 'desktop');
            var alertItemMobile = alertBannerItemMarkup(index, value, 'mobile');
            $(".cr-placeholder-desktop .regional-alerts").append(alertItemDesktop);
            $(".cr-placeholder-mobile .regional-alerts").append(alertItemMobile);
          }
        }
      });
    }
  }

  // Process response based on type
  var processResponse = function(response, type) {

    switch(type) {

      case 'ics':

        processICSResponse(response);

        break;

      case 'alert-banner':

        processAlertBannerResponse(response);

        break;

      case 'regional-alert':

        processRegionalAlertResponse(response);

        break;
    }

    removeClosedAlerts();
  }

  //Load alerts from JSON endpoint
  var loadData = function(source, type) {

    $.ajax({
      method: 'GET',
      url: source,
      dataType: 'json'
    }).done(function(response) {
      processResponse(response, type);
    }).fail(function(e) {
      // Error
    });
  }

  //Trigger close alert for current and future alerts on the page
  $(document).on('click', '.tfnsw-alert .close' , function (e) {

    var name = $(this).attr("name");

    if(name!=null) {

      e.preventDefault();
      $('div[class~="'+name+'"]').remove();
      var removedCR = localStorage.getItem("removedCR");

      if(removedCR == null) {

        localStorage.setItem("removedCR", name);

      }else {

        localStorage.setItem("removedCR", removedCR+"$"+name);
      }
    }
  });

  // Only execute once when the page loads
  $(function() {

    // Clean the containers first
    $(".cr-placeholder-desktop .regional-alerts").empty();
    $(".cr-placeholder-mobile .regional-alerts").empty();
    $(".cr-placeholder-desktop .alert-banners").empty();
    $(".cr-placeholder-mobile .alert-banners").empty();
    $(".cr-placeholder-desktop .ics-alerts").empty();
    $(".cr-placeholder-mobile .ics-alerts").empty();

    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var validationDate = ((day < 10 ? '0' : '') + day) + "-" + ((month < 10 ? '0' : '') + month) + "-" + d.getFullYear();
    
    //Adds the alerts from ICS
    var sourceICS = "/api/trip/v1/add-info-request?outputFormat=rapidJSON&filterDateValid=" + validationDate + "&filterInfoType=bannerInfo";
    loadData(sourceICS, 'ics');

    //Adds alert from regional alert endpoint
    var sourceRegioanlAlerts = "/tfnsw-alerts/regional-alerts?_format=json";
    loadData(sourceRegioanlAlerts, 'regional-alert');

    //Adds alert from regional alert endpoint
    var sourceAlertBanners = "/tfnsw-alerts/alert-banners?_format=json";
    loadData(sourceAlertBanners, 'alert-banner');
  });
})(jQuery, Drupal);
;
/**
 * @file
 * Drupal Bootstrap object.
 */

/**
 * All Drupal Bootstrap JavaScript APIs are contained in this namespace.
 *
 * @param {underscore} _
 * @param {jQuery} $
 * @param {Drupal} Drupal
 * @param {drupalSettings} drupalSettings
 */
(function (_, $, Drupal, drupalSettings) {
  'use strict';

  /**
   * @typedef Drupal.bootstrap
   */
  var Bootstrap = {
    processedOnce: {},
    settings: drupalSettings.bootstrap || {}
  };

  /**
   * Wraps Drupal.checkPlain() to ensure value passed isn't empty.
   *
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Bootstrap.checkPlain = function (str) {
    return str && Drupal.checkPlain(str) || '';
  };

  /**
   * Creates a jQuery plugin.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} plugin
   *   A constructor function used to initialize the for the jQuery plugin.
   * @param {Boolean} [noConflict]
   *   Flag indicating whether or not to create a ".noConflict()" helper method
   *   for the plugin.
   */
  Bootstrap.createPlugin = function (id, plugin, noConflict) {
    // Immediately return if plugin doesn't exist.
    if ($.fn[id] !== void 0) {
      return this.fatal('Specified jQuery plugin identifier already exists: @id. Use Drupal.bootstrap.replacePlugin() instead.', {'@id': id});
    }

    // Immediately return if plugin isn't a function.
    if (typeof plugin !== 'function') {
      return this.fatal('You must provide a constructor function to create a jQuery plugin "@id": @plugin', {'@id': id, '@plugin':  plugin});
    }

    // Add a ".noConflict()" helper method.
    this.pluginNoConflict(id, plugin, noConflict);

    $.fn[id] = plugin;
  };

  /**
   * Diff object properties.
   *
   * @param {...Object} objects
   *   Two or more objects. The first object will be used to return properties
   *   values.
   *
   * @return {Object}
   *   Returns the properties of the first passed object that are not present
   *   in all other passed objects.
   */
  Bootstrap.diffObjects = function (objects) {
    var args = Array.prototype.slice.call(arguments);
    return _.pick(args[0], _.difference.apply(_, _.map(args, function (obj) {
      return Object.keys(obj);
    })));
  };

  /**
   * Map of supported events by regular expression.
   *
   * @type {Object<Event|MouseEvent|KeyboardEvent|TouchEvent,RegExp>}
   */
  Bootstrap.eventMap = {
    Event: /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    MouseEvent: /^(?:click|dblclick|mouse(?:down|enter|leave|up|over|move|out))$/,
    KeyboardEvent: /^(?:key(?:down|press|up))$/,
    TouchEvent: /^(?:touch(?:start|end|move|cancel))$/
  };

  /**
   * Extends a jQuery Plugin.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} callback
   *   A constructor function used to initialize the for the jQuery plugin.
   *
   * @return {Function|Boolean}
   *   The jQuery plugin constructor or FALSE if the plugin does not exist.
   */
  Bootstrap.extendPlugin = function (id, callback) {
    // Immediately return if plugin doesn't exist.
    if (typeof $.fn[id] !== 'function') {
      return this.fatal('Specified jQuery plugin identifier does not exist: @id', {'@id':  id});
    }

    // Immediately return if callback isn't a function.
    if (typeof callback !== 'function') {
      return this.fatal('You must provide a callback function to extend the jQuery plugin "@id": @callback', {'@id': id, '@callback':  callback});
    }

    // Determine existing plugin constructor.
    var constructor = $.fn[id] && $.fn[id].Constructor || $.fn[id];
    var plugin = callback.apply(constructor, [this.settings]);
    if (!$.isPlainObject(plugin)) {
      return this.fatal('Returned value from callback is not a plain object that can be used to extend the jQuery plugin "@id": @obj', {'@obj':  plugin});
    }

    this.wrapPluginConstructor(constructor, plugin, true);

    return $.fn[id];
  };

  Bootstrap.superWrapper = function (parent, fn) {
    return function () {
      var previousSuper = this.super;
      this.super = parent;
      var ret = fn.apply(this, arguments);
      if (previousSuper) {
        this.super = previousSuper;
      }
      else {
        delete this.super;
      }
      return ret;
    };
  };

  /**
   * Provide a helper method for displaying when something is went wrong.
   *
   * @param {String} message
   *   The message to display.
   * @param {Object} [args]
   *   An arguments to use in message.
   *
   * @return {Boolean}
   *   Always returns FALSE.
   */
  Bootstrap.fatal = function (message, args) {
    if (this.settings.dev && console.warn) {
      for (var name in args) {
        if (args.hasOwnProperty(name) && typeof args[name] === 'object') {
          args[name] = JSON.stringify(args[name]);
        }
      }
      Drupal.throwError(new Error(Drupal.formatString(message, args)));
    }
    return false;
  };

  /**
   * Intersects object properties.
   *
   * @param {...Object} objects
   *   Two or more objects. The first object will be used to return properties
   *   values.
   *
   * @return {Object}
   *   Returns the properties of first passed object that intersects with all
   *   other passed objects.
   */
  Bootstrap.intersectObjects = function (objects) {
    var args = Array.prototype.slice.call(arguments);
    return _.pick(args[0], _.intersection.apply(_, _.map(args, function (obj) {
      return Object.keys(obj);
    })));
  };

  /**
   * Normalizes an object's values.
   *
   * @param {Object} obj
   *   The object to normalize.
   *
   * @return {Object}
   *   The normalized object.
   */
  Bootstrap.normalizeObject = function (obj) {
    if (!$.isPlainObject(obj)) {
      return obj;
    }

    for (var k in obj) {
      if (typeof obj[k] === 'string') {
        if (obj[k] === 'true') {
          obj[k] = true;
        }
        else if (obj[k] === 'false') {
          obj[k] = false;
        }
        else if (obj[k].match(/^[\d-.]$/)) {
          obj[k] = parseFloat(obj[k]);
        }
      }
      else if ($.isPlainObject(obj[k])) {
        obj[k] = Bootstrap.normalizeObject(obj[k]);
      }
    }

    return obj;
  };

  /**
   * An object based once plugin (similar to jquery.once, but without the DOM).
   *
   * @param {String} id
   *   A unique identifier.
   * @param {Function} callback
   *   The callback to invoke if the identifier has not yet been seen.
   *
   * @return {Bootstrap}
   */
  Bootstrap.once = function (id, callback) {
    // Immediately return if identifier has already been processed.
    if (this.processedOnce[id]) {
      return this;
    }
    callback.call(this, this.settings);
    this.processedOnce[id] = true;
    return this;
  };

  /**
   * Provide jQuery UI like ability to get/set options for Bootstrap plugins.
   *
   * @param {string|object} key
   *   A string value of the option to set, can be dot like to a nested key.
   *   An object of key/value pairs.
   * @param {*} [value]
   *   (optional) A value to set for key.
   *
   * @returns {*}
   *   - Returns nothing if key is an object or both key and value parameters
   *   were provided to set an option.
   *   - Returns the a value for a specific setting if key was provided.
   *   - Returns an object of key/value pairs of all the options if no key or
   *   value parameter was provided.
   *
   * @see https://github.com/jquery/jquery-ui/blob/master/ui/widget.js
   */
  Bootstrap.option = function (key, value) {
    var options = $.isPlainObject(key) ? $.extend({}, key) : {};

    // Get all options (clone so it doesn't reference the internal object).
    if (arguments.length === 0) {
      return $.extend({}, this.options);
    }

    // Get/set single option.
    if (typeof key === "string") {
      // Handle nested keys in dot notation.
      // e.g., "foo.bar" => { foo: { bar: true } }
      var parts = key.split('.');
      key = parts.shift();
      var obj = options;
      if (parts.length) {
        for (var i = 0; i < parts.length - 1; i++) {
          obj[parts[i]] = obj[parts[i]] || {};
          obj = obj[parts[i]];
        }
        key = parts.pop();
      }

      // Get.
      if (arguments.length === 1) {
        return obj[key] === void 0 ? null : obj[key];
      }

      // Set.
      obj[key] = value;
    }

    // Set multiple options.
    $.extend(true, this.options, options);
  };

  /**
   * Adds a ".noConflict()" helper method if needed.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} plugin
   * @param {Function} plugin
   *   A constructor function used to initialize the for the jQuery plugin.
   * @param {Boolean} [noConflict]
   *   Flag indicating whether or not to create a ".noConflict()" helper method
   *   for the plugin.
   */
  Bootstrap.pluginNoConflict = function (id, plugin, noConflict) {
    if (plugin.noConflict === void 0 && (noConflict === void 0 || noConflict)) {
      var old = $.fn[id];
      plugin.noConflict = function () {
        $.fn[id] = old;
        return this;
      };
    }
  };

  /**
   * Creates a handler that relays to another event name.
   *
   * @param {HTMLElement|jQuery} target
   *   A target element.
   * @param {String} name
   *   The name of the event to trigger.
   * @param {Boolean} [stopPropagation=true]
   *   Flag indicating whether to stop the propagation of the event, defaults
   *   to true.
   *
   * @return {Function}
   *   An even handler callback function.
   */
  Bootstrap.relayEvent = function (target, name, stopPropagation) {
    return function (e) {
      if (stopPropagation === void 0 || stopPropagation) {
        e.stopPropagation();
      }
      var $target = $(target);
      var parts = name.split('.').filter(Boolean);
      var type = parts.shift();
      e.target = $target[0];
      e.currentTarget = $target[0];
      e.namespace = parts.join('.');
      e.type = type;
      $target.trigger(e);
    };
  };

  /**
   * Replaces a Bootstrap jQuery plugin definition.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} callback
   *   A callback function that is immediately invoked and must return a
   *   function that will be used as the plugin constructor.
   * @param {Boolean} [noConflict]
   *   Flag indicating whether or not to create a ".noConflict()" helper method
   *   for the plugin.
   */
  Bootstrap.replacePlugin = function (id, callback, noConflict) {
    // Immediately return if plugin doesn't exist.
    if (typeof $.fn[id] !== 'function') {
      return this.fatal('Specified jQuery plugin identifier does not exist: @id', {'@id':  id});
    }

    // Immediately return if callback isn't a function.
    if (typeof callback !== 'function') {
      return this.fatal('You must provide a valid callback function to replace a jQuery plugin: @callback', {'@callback': callback});
    }

    // Determine existing plugin constructor.
    var constructor = $.fn[id] && $.fn[id].Constructor || $.fn[id];
    var plugin = callback.apply(constructor, [this.settings]);

    // Immediately return if plugin isn't a function.
    if (typeof plugin !== 'function') {
      return this.fatal('Returned value from callback is not a usable function to replace a jQuery plugin "@id": @plugin', {'@id': id, '@plugin': plugin});
    }

    this.wrapPluginConstructor(constructor, plugin);

    // Add a ".noConflict()" helper method.
    this.pluginNoConflict(id, plugin, noConflict);

    $.fn[id] = plugin;
  };

  /**
   * Simulates a native event on an element in the browser.
   *
   * Note: This is a fairly complete modern implementation. If things aren't
   * working quite the way you intend (in older browsers), you may wish to use
   * the jQuery.simulate plugin. If it's available, this method will defer to
   * that plugin.
   *
   * @see https://github.com/jquery/jquery-simulate
   *
   * @param {HTMLElement|jQuery} element
   *   A DOM element to dispatch event on. Note: this may be a jQuery object,
   *   however be aware that this will trigger the same event for each element
   *   inside the jQuery collection; use with caution.
   * @param {String|String[]} type
   *   The type(s) of event to simulate.
   * @param {Object} [options]
   *   An object of options to pass to the event constructor. Typically, if
   *   an event is being proxied, you should just pass the original event
   *   object here. This allows, if the browser supports it, to be a truly
   *   simulated event.
   *
   * @return {Boolean}
   *   The return value is false if event is cancelable and at least one of the
   *   event handlers which handled this event called Event.preventDefault().
   *   Otherwise it returns true.
   */
  Bootstrap.simulate = function (element, type, options) {
    // Handle jQuery object wrappers so it triggers on each element.
    var ret = true;
    if (element instanceof $) {
      element.each(function () {
        if (!Bootstrap.simulate(this, type, options)) {
          ret = false;
        }
      });
      return ret;
    }

    if (!(element instanceof HTMLElement)) {
      this.fatal('Passed element must be an instance of HTMLElement, got "@type" instead.', {
        '@type': typeof element,
      });
    }

    // Defer to the jQuery.simulate plugin, if it's available.
    if (typeof $.simulate === 'function') {
      new $.simulate(element, type, options);
      return true;
    }

    var event;
    var ctor;
    var types = [].concat(type);
    for (var i = 0, l = types.length; i < l; i++) {
      type = types[i];
      for (var name in this.eventMap) {
        if (this.eventMap[name].test(type)) {
          ctor = name;
          break;
        }
      }
      if (!ctor) {
        throw new SyntaxError('Only rudimentary HTMLEvents, KeyboardEvents and MouseEvents are supported: ' + type);
      }
      var opts = {bubbles: true, cancelable: true};
      if (ctor === 'KeyboardEvent' || ctor === 'MouseEvent') {
        $.extend(opts, {ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1});
      }
      if (ctor === 'MouseEvent') {
        $.extend(opts, {button: 0, pointerX: 0, pointerY: 0, view: window});
      }
      if (options) {
        $.extend(opts, options);
      }
      if (typeof window[ctor] === 'function') {
        event = new window[ctor](type, opts);
        if (!element.dispatchEvent(event)) {
          ret = false;
        }
      }
      else if (document.createEvent) {
        event = document.createEvent(ctor);
        event.initEvent(type, opts.bubbles, opts.cancelable);
        if (!element.dispatchEvent(event)) {
          ret = false;
        }
      }
      else if (typeof element.fireEvent === 'function') {
        event = $.extend(document.createEventObject(), opts);
        if (!element.fireEvent('on' + type, event)) {
          ret = false;
        }
      }
      else if (typeof element[type]) {
        element[type]();
      }
    }
    return ret;
  };

  /**
   * Strips HTML and returns just text.
   *
   * @param {String|Element|jQuery} html
   *   A string of HTML content, an Element DOM object or a jQuery object.
   *
   * @return {String}
   *   The text without HTML tags.
   *
   * @todo Replace with http://locutus.io/php/strings/strip_tags/
   */
  Bootstrap.stripHtml = function (html) {
    if (html instanceof $) {
      html = html.html();
    }
    else if (html instanceof Element) {
      html = html.innerHTML;
    }
    var tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '').replace(/^[\s\n\t]*|[\s\n\t]*$/, '');
  };

  /**
   * Provide a helper method for displaying when something is unsupported.
   *
   * @param {String} type
   *   The type of unsupported object, e.g. method or option.
   * @param {String} name
   *   The name of the unsupported object.
   * @param {*} [value]
   *   The value of the unsupported object.
   */
  Bootstrap.unsupported = function (type, name, value) {
    Bootstrap.warn('Unsupported by Drupal Bootstrap: (@type) @name -> @value', {
      '@type': type,
      '@name': name,
      '@value': typeof value === 'object' ? JSON.stringify(value) : value
    });
  };

  /**
   * Provide a helper method to display a warning.
   *
   * @param {String} message
   *   The message to display.
   * @param {Object} [args]
   *   Arguments to use as replacements in Drupal.formatString.
   */
  Bootstrap.warn = function (message, args) {
    if (this.settings.dev && console.warn) {
      console.warn(Drupal.formatString(message, args));
    }
  };

  /**
   * Wraps a plugin with common functionality.
   *
   * @param {Function} constructor
   *   A plugin constructor being wrapped.
   * @param {Object|Function} plugin
   *   The plugin being wrapped.
   * @param {Boolean} [extend = false]
   *   Whether to add super extensibility.
   */
  Bootstrap.wrapPluginConstructor = function (constructor, plugin, extend) {
    var proto = constructor.prototype;

    // Add a jQuery UI like option getter/setter method.
    var option = this.option;
    if (proto.option === void(0)) {
      proto.option = function () {
        return option.apply(this, arguments);
      };
    }

    if (extend) {
      // Handle prototype properties separately.
      if (plugin.prototype !== void 0) {
        for (var key in plugin.prototype) {
          if (!plugin.prototype.hasOwnProperty(key)) continue;
          var value = plugin.prototype[key];
          if (typeof value === 'function') {
            proto[key] = this.superWrapper(proto[key] || function () {}, value);
          }
          else {
            proto[key] = $.isPlainObject(value) ? $.extend(true, {}, proto[key], value) : value;
          }
        }
      }
      delete plugin.prototype;

      // Handle static properties.
      for (key in plugin) {
        if (!plugin.hasOwnProperty(key)) continue;
        value = plugin[key];
        if (typeof value === 'function') {
          constructor[key] = this.superWrapper(constructor[key] || function () {}, value);
        }
        else {
          constructor[key] = $.isPlainObject(value) ? $.extend(true, {}, constructor[key], value) : value;
        }
      }
    }
  };

  // Add Bootstrap to the global Drupal object.
  Drupal.bootstrap = Drupal.bootstrap || Bootstrap;

})(window._, window.jQuery, window.Drupal, window.drupalSettings);
;
(function ($, _) {

  /**
   * @class Attributes
   *
   * Modifies attributes.
   *
   * @param {Object|Attributes} attributes
   *   An object to initialize attributes with.
   */
  var Attributes = function (attributes) {
    this.data = {};
    this.data['class'] = [];
    this.merge(attributes);
  };

  /**
   * Renders the attributes object as a string to inject into an HTML element.
   *
   * @return {String}
   *   A rendered string suitable for inclusion in HTML markup.
   */
  Attributes.prototype.toString = function () {
    var output = '';
    var name, value;
    var checkPlain = function (str) {
      return str && str.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') || '';
    };
    var data = this.getData();
    for (name in data) {
      if (!data.hasOwnProperty(name)) continue;
      value = data[name];
      if (_.isFunction(value)) value = value();
      if (_.isObject(value)) value = _.values(value);
      if (_.isArray(value)) value = value.join(' ');
      output += ' ' + checkPlain(name) + '="' + checkPlain(value) + '"';
    }
    return output;
  };

  /**
   * Renders the Attributes object as a plain object.
   *
   * @return {Object}
   *   A plain object suitable for inclusion in DOM elements.
   */
  Attributes.prototype.toPlainObject = function () {
    var object = {};
    var name, value;
    var data = this.getData();
    for (name in data) {
      if (!data.hasOwnProperty(name)) continue;
      value = data[name];
      if (_.isFunction(value)) value = value();
      if (_.isObject(value)) value = _.values(value);
      if (_.isArray(value)) value = value.join(' ');
      object[name] = value;
    }
    return object;
  };

  /**
   * Add class(es) to the array.
   *
   * @param {string|Array} value
   *   An individual class or an array of classes to add.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.addClass = function (value) {
    var args = Array.prototype.slice.call(arguments);
    this.data['class'] = this.sanitizeClasses(this.data['class'].concat(args));
    return this;
  };

  /**
   * Returns whether the requested attribute exists.
   *
   * @param {string} name
   *   An attribute name to check.
   *
   * @return {boolean}
   *   TRUE or FALSE
   */
  Attributes.prototype.exists = function (name) {
    return this.data[name] !== void(0) && this.data[name] !== null;
  };

  /**
   * Retrieve a specific attribute from the array.
   *
   * @param {string} name
   *   The specific attribute to retrieve.
   * @param {*} defaultValue
   *   (optional) The default value to set if the attribute does not exist.
   *
   * @return {*}
   *   A specific attribute value, passed by reference.
   */
  Attributes.prototype.get = function (name, defaultValue) {
    if (!this.exists(name)) this.data[name] = defaultValue;
    return this.data[name];
  };

  /**
   * Retrieves a cloned copy of the internal attributes data object.
   *
   * @return {Object}
   */
  Attributes.prototype.getData = function () {
    return _.extend({}, this.data);
  };

  /**
   * Retrieves classes from the array.
   *
   * @return {Array}
   *   The classes array.
   */
  Attributes.prototype.getClasses = function () {
    return this.get('class', []);
  };

  /**
   * Indicates whether a class is present in the array.
   *
   * @param {string|Array} className
   *   The class(es) to search for.
   *
   * @return {boolean}
   *   TRUE or FALSE
   */
  Attributes.prototype.hasClass = function (className) {
    className = this.sanitizeClasses(Array.prototype.slice.call(arguments));
    var classes = this.getClasses();
    for (var i = 0, l = className.length; i < l; i++) {
      // If one of the classes fails, immediately return false.
      if (_.indexOf(classes, className[i]) === -1) {
        return false;
      }
    }
    return true;
  };

  /**
   * Merges multiple values into the array.
   *
   * @param {Attributes|Node|jQuery|Object} object
   *   An Attributes object with existing data, a Node DOM element, a jQuery
   *   instance or a plain object where the key is the attribute name and the
   *   value is the attribute value.
   * @param {boolean} [recursive]
   *   Flag determining whether or not to recursively merge key/value pairs.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.merge = function (object, recursive) {
    // Immediately return if there is nothing to merge.
    if (!object) {
      return this;
    }

    // Get attributes from a jQuery element.
    if (object instanceof $) {
      object = object[0];
    }

    // Get attributes from a DOM element.
    if (object instanceof Node) {
      object = Array.prototype.slice.call(object.attributes).reduce(function (attributes, attribute) {
        attributes[attribute.name] = attribute.value;
        return attributes;
      }, {});
    }
    // Get attributes from an Attributes instance.
    else if (object instanceof Attributes) {
      object = object.getData();
    }
    // Otherwise, clone the object.
    else {
      object = _.extend({}, object);
    }

    // By this point, there should be a valid plain object.
    if (!$.isPlainObject(object)) {
      setTimeout(function () {
        throw new Error('Passed object is not supported: ' + object);
      });
      return this;
    }

    // Handle classes separately.
    if (object && object['class'] !== void 0) {
      this.addClass(object['class']);
      delete object['class'];
    }

    if (recursive === void 0 || recursive) {
      this.data = $.extend(true, {}, this.data, object);
    }
    else {
      this.data = $.extend({}, this.data, object);
    }

    return this;
  };

  /**
   * Removes an attribute from the array.
   *
   * @param {string} name
   *   The name of the attribute to remove.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.remove = function (name) {
    if (this.exists(name)) delete this.data[name];
    return this;
  };

  /**
   * Removes a class from the attributes array.
   *
   * @param {...string|Array} className
   *   An individual class or an array of classes to remove.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.removeClass = function (className) {
    var remove = this.sanitizeClasses(Array.prototype.slice.apply(arguments));
    this.data['class'] = _.without(this.getClasses(), remove);
    return this;
  };

  /**
   * Replaces a class in the attributes array.
   *
   * @param {string} oldValue
   *   The old class to remove.
   * @param {string} newValue
   *   The new class. It will not be added if the old class does not exist.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.replaceClass = function (oldValue, newValue) {
    var classes = this.getClasses();
    var i = _.indexOf(this.sanitizeClasses(oldValue), classes);
    if (i >= 0) {
      classes[i] = newValue;
      this.set('class', classes);
    }
    return this;
  };

  /**
   * Ensures classes are flattened into a single is an array and sanitized.
   *
   * @param {...String|Array} classes
   *   The class or classes to sanitize.
   *
   * @return {Array}
   *   A sanitized array of classes.
   */
  Attributes.prototype.sanitizeClasses = function (classes) {
    return _.chain(Array.prototype.slice.call(arguments))
      // Flatten in case there's a mix of strings and arrays.
      .flatten()

      // Split classes that may have been added with a space as a separator.
      .map(function (string) {
        return string.split(' ');
      })

      // Flatten again since it was just split into arrays.
      .flatten()

      // Filter out empty items.
      .filter()

      // Clean the class to ensure it's a valid class name.
      .map(function (value) {
        return Attributes.cleanClass(value);
      })

      // Ensure classes are unique.
      .uniq()

      // Retrieve the final value.
      .value();
  };

  /**
   * Sets an attribute on the array.
   *
   * @param {string} name
   *   The name of the attribute to set.
   * @param {*} value
   *   The value of the attribute to set.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.set = function (name, value) {
    var obj = $.isPlainObject(name) ? name : {};
    if (typeof name === 'string') {
      obj[name] = value;
    }
    return this.merge(obj);
  };

  /**
   * Prepares a string for use as a CSS identifier (element, class, or ID name).
   *
   * Note: this is essentially a direct copy from
   * \Drupal\Component\Utility\Html::cleanCssIdentifier
   *
   * @param {string} identifier
   *   The identifier to clean.
   * @param {Object} [filter]
   *   An object of string replacements to use on the identifier.
   *
   * @return {string}
   *   The cleaned identifier.
   */
  Attributes.cleanClass = function (identifier, filter) {
    filter = filter || {
      ' ': '-',
      '_': '-',
      '/': '-',
      '[': '-',
      ']': ''
    };

    identifier = identifier.toLowerCase();

    if (filter['__'] === void 0) {
      identifier = identifier.replace('__', '#DOUBLE_UNDERSCORE#');
    }

    identifier = identifier.replace(Object.keys(filter), Object.keys(filter).map(function(key) { return filter[key]; }));

    if (filter['__'] === void 0) {
      identifier = identifier.replace('#DOUBLE_UNDERSCORE#', '__');
    }

    identifier = identifier.replace(/[^\u002D\u0030-\u0039\u0041-\u005A\u005F\u0061-\u007A\u00A1-\uFFFF]/g, '');
    identifier = identifier.replace(['/^[0-9]/', '/^(-[0-9])|^(--)/'], ['_', '__']);

    return identifier;
  };

  /**
   * Creates an Attributes instance.
   *
   * @param {object|Attributes} [attributes]
   *   An object to initialize attributes with.
   *
   * @return {Attributes}
   *   An Attributes instance.
   *
   * @constructor
   */
  Attributes.create = function (attributes) {
    return new Attributes(attributes);
  };

  window.Attributes = Attributes;

})(window.jQuery, window._);
;
/**
 * @file
 * Theme hooks for the Drupal Bootstrap base theme.
 */
(function ($, Drupal, Bootstrap, Attributes) {

  /**
   * Fallback for theming an icon if the Icon API module is not installed.
   */
  if (!Drupal.icon) Drupal.icon = { bundles: {} };
  if (!Drupal.theme.icon || Drupal.theme.prototype.icon) {
    $.extend(Drupal.theme, /** @lends Drupal.theme */ {
      /**
       * Renders an icon.
       *
       * @param {string} bundle
       *   The bundle which the icon belongs to.
       * @param {string} icon
       *   The name of the icon to render.
       * @param {object|Attributes} [attributes]
       *   An object of attributes to also apply to the icon.
       *
       * @returns {string}
       */
      icon: function (bundle, icon, attributes) {
        if (!Drupal.icon.bundles[bundle]) return '';
        attributes = Attributes.create(attributes).addClass('icon').set('aria-hidden', 'true');
        icon = Drupal.icon.bundles[bundle](icon, attributes);
        return '<span' + attributes + '></span>';
      }
    });
  }

  /**
   * Callback for modifying an icon in the "bootstrap" icon bundle.
   *
   * @param {string} icon
   *   The icon being rendered.
   * @param {Attributes} attributes
   *   Attributes object for the icon.
   */
  Drupal.icon.bundles.bootstrap = function (icon, attributes) {
    attributes.addClass(['glyphicon', 'glyphicon-' + icon]);
  };

  /**
   * Add necessary theming hooks.
   */
  $.extend(Drupal.theme, /** @lends Drupal.theme */ {

    /**
     * Renders a Bootstrap AJAX glyphicon throbber.
     *
     * @returns {string}
     */
    ajaxThrobber: function () {
      return Drupal.theme('bootstrapIcon', 'refresh', {'class': ['ajax-throbber', 'glyphicon-spin'] });
    },

    /**
     * Renders a button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button. If it contains one of:
     *   - value: The label of the button.
     *   - context: The context type of Bootstrap button, can be one of:
     *     - default
     *     - primary
     *     - success
     *     - info
     *     - warning
     *     - danger
     *     - link
     *
     * @returns {string}
     */
    button: function (attributes) {
      attributes = Attributes.create(attributes).addClass('btn');
      var context = attributes.get('context', 'default');
      var label = attributes.get('value', '');
      attributes.remove('context').remove('value');
      if (!attributes.hasClass(['btn-default', 'btn-primary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger', 'btn-link'])) {
        attributes.addClass('btn-' + Bootstrap.checkPlain(context));
      }

      // Attempt to, intelligently, provide a default button "type".
      if (!attributes.exists('type')) {
        attributes.set('type', attributes.hasClass('form-submit') ? 'submit' : 'button');
      }

      return '<button' + attributes + '>' + label + '</button>';
    },

    /**
     * Alias for "button" theme hook.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    btn: function (attributes) {
      return Drupal.theme('button', attributes);
    },

    /**
     * Renders a button block element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-block': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-block'));
    },

    /**
     * Renders a large button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-lg': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-lg'));
    },

    /**
     * Renders a small button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-sm': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-sm'));
    },

    /**
     * Renders an extra small button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-xs': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-xs'));
    },

    /**
     * Renders a glyphicon.
     *
     * @param {string} name
     *   The name of the glyphicon.
     * @param {object|Attributes} [attributes]
     *   An object of attributes to apply to the icon.
     *
     * @returns {string}
     */
    bootstrapIcon: function (name, attributes) {
      return Drupal.theme('icon', 'bootstrap', name, attributes);
    }

  });

})(window.jQuery, window.Drupal, window.Drupal.bootstrap, window.Attributes);
;
/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);
;
/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);
;
/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);
;
/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);
;
/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);
;
/*!
 * @copyright Copyright (c) 2016 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.1.23
 */
/*jslint browser: true */
/*global XDomainRequest, MutationObserver, window */
(function () {
    'use strict';
    if (window && window.addEventListener) {
        var cache = Object.create(null); // holds xhr objects to prevent multiple requests
        var checkUseElems;
        var tid; // timeout id
        var debouncedCheck = function () {
            clearTimeout(tid);
            tid = setTimeout(checkUseElems, 100);
        };
        var unobserveChanges = function () {
            return;
        };
        var observeChanges = function () {
            var observer;
            window.addEventListener('resize', debouncedCheck, false);
            window.addEventListener('orientationchange', debouncedCheck, false);
            if (window.MutationObserver) {
                observer = new MutationObserver(debouncedCheck);
                observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true,
                    attributes: true
                });
                unobserveChanges = function () {
                    try {
                        observer.disconnect();
                        window.removeEventListener('resize', debouncedCheck, false);
                        window.removeEventListener('orientationchange', debouncedCheck, false);
                    } catch (ignore) {}
                };
            } else {
                document.documentElement.addEventListener('DOMSubtreeModified', debouncedCheck, false);
                unobserveChanges = function () {
                    document.documentElement.removeEventListener('DOMSubtreeModified', debouncedCheck, false);
                    window.removeEventListener('resize', debouncedCheck, false);
                    window.removeEventListener('orientationchange', debouncedCheck, false);
                };
            }
        };
        var createRequest = function (url) {
            // In IE 9, cross origin requests can only be sent using XDomainRequest.
            // XDomainRequest would fail if CORS headers are not set.
            // Therefore, XDomainRequest should only be used with cross origin requests.
            function getOrigin(loc) {
                var a;
                if (loc.protocol !== undefined) {
                    a = loc;
                } else {
                    a = document.createElement('a');
                    a.href = loc;
                }
                return a.protocol.replace(/:/g, '') + a.host;
            }
            var Request;
            var origin;
            var origin2;
            if (window.XMLHttpRequest) {
                Request = new XMLHttpRequest();
                origin = getOrigin(location);
                origin2 = getOrigin(url);
                if (Request.withCredentials === undefined && origin2 !== '' && origin2 !== origin) {
                    Request = XDomainRequest || undefined;
                } else {
                    Request = XMLHttpRequest;
                }
            }
            return Request;
        };
        var xlinkNS = 'http://www.w3.org/1999/xlink';
        checkUseElems = function () {
            var base;
            var bcr;
            var fallback = ''; // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
            var hash;
            var href;
            var i;
            var inProgressCount = 0;
            var isHidden;
            var Request;
            var url;
            var uses;
            var xhr;
            function observeIfDone() {
                // If done with making changes, start watching for chagnes in DOM again
                inProgressCount -= 1;
                if (inProgressCount === 0) { // if all xhrs were resolved
                    unobserveChanges(); // make sure to remove old handlers
                    observeChanges(); // watch for changes to DOM
                }
            }
            function attrUpdateFunc(spec) {
                return function () {
                    if (cache[spec.base] !== true) {
                        spec.useEl.setAttributeNS(xlinkNS, 'xlink:href', '#' + spec.hash);
                    }
                };
            }
            function onloadFunc(xhr) {
                return function () {
                    var body = document.body;
                    var x = document.createElement('x');
                    var svg;
                    xhr.onload = null;
                    x.innerHTML = xhr.responseText;
                    svg = x.getElementsByTagName('svg')[0];
                    if (svg) {
                        svg.setAttribute('aria-hidden', 'true');
                        svg.style.position = 'absolute';
                        svg.style.width = 0;
                        svg.style.height = 0;
                        svg.style.overflow = 'hidden';
                        body.insertBefore(svg, body.firstChild);
                    }
                    observeIfDone();
                };
            }
            function onErrorTimeout(xhr) {
                return function () {
                    xhr.onerror = null;
                    xhr.ontimeout = null;
                    observeIfDone();
                };
            }
            unobserveChanges(); // stop watching for changes to DOM
            // find all use elements
            uses = document.getElementsByTagName('use');
            for (i = 0; i < uses.length; i += 1) {
                try {
                    bcr = uses[i].getBoundingClientRect();
                } catch (ignore) {
                    // failed to get bounding rectangle of the use element
                    bcr = false;
                }
                href = uses[i].getAttributeNS(xlinkNS, 'href');
                if (href && href.split) {
                    url = href.split('#');
                } else {
                    url = ["", ""];
                }
                base = url[0];
                hash = url[1];
                isHidden = bcr && bcr.left === 0 && bcr.right === 0 && bcr.top === 0 && bcr.bottom === 0;
                if (bcr && bcr.width === 0 && bcr.height === 0 && !isHidden) {
                    // the use element is empty
                    // if there is a reference to an external SVG, try to fetch it
                    // use the optional fallback URL if there is no reference to an external SVG
                    if (fallback && !base.length && hash && !document.getElementById(hash)) {
                        base = fallback;
                    }
                    if (base.length) {
                        // schedule updating xlink:href
                        xhr = cache[base];
                        if (xhr !== true) {
                            // true signifies that prepending the SVG was not required
                            setTimeout(attrUpdateFunc({
                                useEl: uses[i],
                                base: base,
                                hash: hash
                            }), 0);
                        }
                        if (xhr === undefined) {
                            Request = createRequest(base);
                            if (Request !== undefined) {
                                xhr = new Request();
                                cache[base] = xhr;
                                xhr.onload = onloadFunc(xhr);
                                xhr.onerror = onErrorTimeout(xhr);
                                xhr.ontimeout = onErrorTimeout(xhr);
                                xhr.open('GET', base);
                                xhr.send();
                                inProgressCount += 1;
                            }
                        }
                    }
                } else {
                    if (!isHidden) {
                        if (cache[base] === undefined) {
                            // remember this URL if the use element was not empty and no request was sent
                            cache[base] = true;
                        } else if (cache[base].onload) {
                            // if it turns out that prepending the SVG is not necessary,
                            // abort the in-progress xhr.
                            cache[base].abort();
                            delete cache[base].onload;
                            cache[base] = true;
                        }
                    } else if (base.length && cache[base]) {
                        attrUpdateFunc({
                            useEl: uses[i],
                            base: base,
                            hash: hash
                        })();
                    }
                }
            }
            uses = '';
            inProgressCount += 1;
            observeIfDone();
        };
        // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.
        window.addEventListener('load', function winLoad() {
            window.removeEventListener('load', winLoad, false); // to prevent memory leaks
            tid = setTimeout(checkUseElems, 0);
        }, false);
    }
}());
;
/*! Tablesaw - v2.0.3 - 2016-05-02
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2016 Filament Group; Licensed MIT */
/*
* tablesaw: A set of plugins for responsive tables
* Stack and Column Toggle tables
* Copyright (c) 2013 Filament Group, Inc.
* MIT License
*/

if( typeof Tablesaw === "undefined" ) {
	var Tablesaw = {
		i18n: {
			modes: [ 'Stack', 'Swipe', 'Toggle' ],
			columns: 'Col<span class=\"a11y-sm\">umn</span>s',
			columnBtnText: 'Columns',
			columnsDialogError: 'No eligible columns.',
			sort: 'Sort'
		},
		// cut the mustard
		mustard: 'querySelector' in document &&
			( !window.blackberry || window.WebKitPoint ) &&
			!window.operamini
	};
}
if( !Tablesaw.config ) {
	Tablesaw.config = {};
}
if( Tablesaw.mustard ) {
	jQuery( document.documentElement ).addClass( 'tablesaw-enhanced' );
}

if (typeof window === 'object' && typeof window.document === 'object') {
	window.Tablesaw = Tablesaw;
}

;(function( $ ) {
	var pluginName = "table",
		classes = {
			toolbar: "tablesaw-bar"
		},
		events = {
			create: "tablesawcreate",
			destroy: "tablesawdestroy",
			refresh: "tablesawrefresh"
		},
		defaultMode = "stack",
		initSelector = "table[data-tablesaw-mode],table[data-tablesaw-sortable]";

	var Table = function( element ) {
		if( !element ) {
			throw new Error( "Tablesaw requires an element." );
		}

		this.table = element;
		this.$table = $( element );

		this.mode = this.$table.attr( "data-tablesaw-mode" ) || defaultMode;

		this.init();
	};

	Table.prototype.init = function() {
		// assign an id if there is none
		if ( !this.$table.attr( "id" ) ) {
			this.$table.attr( "id", pluginName + "-" + Math.round( Math.random() * 10000 ) );
		}

		this.createToolbar();

		var colstart = this._initCells();

		this.$table.trigger( events.create, [ this, colstart ] );
	};

	Table.prototype._initCells = function() {
		var colstart,
			thrs = this.table.querySelectorAll( "thead tr" ),
			self = this;

		$( thrs ).each( function(){
			var coltally = 0;

			$( this ).children().each( function(){
				var span = parseInt( this.getAttribute( "colspan" ), 10 ),
					sel = ":nth-child(" + ( coltally + 1 ) + ")";

				colstart = coltally + 1;

				if( span ){
					for( var k = 0; k < span - 1; k++ ){
						coltally++;
						sel += ", :nth-child(" + ( coltally + 1 ) + ")";
					}
				}

				// Store "cells" data on header as a reference to all cells in the same column as this TH
				this.cells = self.$table.find("tr").not( thrs[0] ).not( this ).children().filter( sel );
				coltally++;
			});
		});

		return colstart;
	};

	Table.prototype.refresh = function() {
		this._initCells();

		this.$table.trigger( events.refresh );
	};

	Table.prototype.createToolbar = function() {
		// Insert the toolbar
		// TODO move this into a separate component
		var $toolbar = this.$table.prev().filter( '.' + classes.toolbar );
		if( !$toolbar.length ) {
			$toolbar = $( '<div>' )
				.addClass( classes.toolbar )
				.insertBefore( this.$table );
		}
		this.$toolbar = $toolbar;

		if( this.mode ) {
			this.$toolbar.addClass( 'mode-' + this.mode );
		}
	};

	Table.prototype.destroy = function() {
		// Don’t remove the toolbar. Some of the table features are not yet destroy-friendly.
		this.$table.prev().filter( '.' + classes.toolbar ).each(function() {
			this.className = this.className.replace( /\bmode\-\w*\b/gi, '' );
		});

		var tableId = this.$table.attr( 'id' );
		$( document ).unbind( "." + tableId );
		$( window ).unbind( "." + tableId );

		// other plugins
		this.$table.trigger( events.destroy, [ this ] );

		this.$table.removeData( pluginName );
	};

	// Collection method.
	$.fn[ pluginName ] = function() {
		return this.each( function() {
			var $t = $( this );

			if( $t.data( pluginName ) ){
				return;
			}

			var table = new Table( this );
			$t.data( pluginName, table );
		});
	};

	$( document ).on( "enhance.tablesaw", function( e ) {
		// Cut the mustard
		if( Tablesaw.mustard ) {
			$( e.target ).find( initSelector )[ pluginName ]();
		}
	});

}( jQuery ));

;(function( win, $, undefined ){

	var classes = {
		stackTable: 'tablesaw-stack',
		cellLabels: 'tablesaw-cell-label',
		cellContentLabels: 'tablesaw-cell-content'
	};

	var data = {
		obj: 'tablesaw-stack'
	};

	var attrs = {
		labelless: 'data-tablesaw-no-labels',
		hideempty: 'data-tablesaw-hide-empty'
	};

	var Stack = function( element ) {

		this.$table = $( element );

		this.labelless = this.$table.is( '[' + attrs.labelless + ']' );
		this.hideempty = this.$table.is( '[' + attrs.hideempty + ']' );

		if( !this.labelless ) {
			// allHeaders references headers, plus all THs in the thead, which may include several rows, or not
			this.allHeaders = this.$table.find( "th" );
		}

		this.$table.data( data.obj, this );
	};

	Stack.prototype.init = function( colstart ) {
		this.$table.addClass( classes.stackTable );

		if( this.labelless ) {
			return;
		}

		// get headers in reverse order so that top-level headers are appended last
		var reverseHeaders = $( this.allHeaders );
		var hideempty = this.hideempty;

		// create the hide/show toggles
		reverseHeaders.each(function(){
			var $t = $( this ),
				$cells = $( this.cells ).filter(function() {
					return !$( this ).parent().is( "[" + attrs.labelless + "]" ) && ( !hideempty || !$( this ).is( ":empty" ) );
				}),
				hierarchyClass = $cells.not( this ).filter( "thead th" ).length && " tablesaw-cell-label-top",
				// TODO reduce coupling with sortable
				$sortableButton = $t.find( ".tablesaw-sortable-btn" ),
				html = $sortableButton.length ? $sortableButton.html() : $t.html();

			if( html !== "" ){
				if( hierarchyClass ){
					var iteration = parseInt( $( this ).attr( "colspan" ), 10 ),
						filter = "";

					if( iteration ){
						filter = "td:nth-child("+ iteration +"n + " + ( colstart ) +")";
					}
					$cells.filter( filter ).prepend( "<b class='" + classes.cellLabels + hierarchyClass + "'>" + html + "</b>"  );
				} else {
					$cells.wrapInner( "<span class='" + classes.cellContentLabels + "'></span>" );
					$cells.prepend( "<b class='" + classes.cellLabels + "'>" + html + "</b>"  );
				}
			}
		});
	};

	Stack.prototype.destroy = function() {
		this.$table.removeClass( classes.stackTable );
		this.$table.find( '.' + classes.cellLabels ).remove();
		this.$table.find( '.' + classes.cellContentLabels ).each(function() {
			$( this ).replaceWith( this.childNodes );
		});
	};

	// on tablecreate, init
	$( document ).on( "tablesawcreate", function( e, Tablesaw, colstart ){
		if( Tablesaw.mode === 'stack' ){
			var table = new Stack( Tablesaw.table );
			table.init( colstart );
		}

	} );

	$( document ).on( "tablesawdestroy", function( e, Tablesaw ){

		if( Tablesaw.mode === 'stack' ){
			$( Tablesaw.table ).data( data.obj ).destroy();
		}

	} );

}( window, jQuery ));
;(function( $ ) {
	var pluginName = "tablesawbtn",
		methods = {
			_create: function(){
				return $( this ).each(function() {
					$( this )
						.trigger( "beforecreate." + pluginName )
						[ pluginName ]( "_init" )
						.trigger( "create." + pluginName );
				});
			},
			_init: function(){
				var oEl = $( this ),
					sel = this.getElementsByTagName( "select" )[ 0 ];

				if( sel ) {
					$( this )
						.addClass( "btn-select" )
						[ pluginName ]( "_select", sel );
				}
				return oEl;
			},
			_select: function( sel ) {
				var update = function( oEl, sel ) {
					var opts = $( sel ).find( "option" ),
						label, el, children;

					opts.each(function() {
						var opt = this;
						if( opt.selected ) {
							label = document.createTextNode( opt.text );
						}
					});

					children = oEl.childNodes;
					if( opts.length > 0 ){
						for( var i = 0, l = children.length; i < l; i++ ) {
							el = children[ i ];

							if( el && el.nodeType === 3 ) {
								oEl.replaceChild( label, el );
							}
						}
					}
				};

				update( this, sel );
				$( this ).bind( "change refresh", function() {
					update( this, sel );
				});
			}
		};

	// Collection method.
	$.fn[ pluginName ] = function( arrg, a, b, c ) {
		return this.each(function() {

		// if it's a method
		if( arrg && typeof( arrg ) === "string" ){
			return $.fn[ pluginName ].prototype[ arrg ].call( this, a, b, c );
		}

		// don't re-init
		if( $( this ).data( pluginName + "active" ) ){
			return $( this );
		}

		// otherwise, init

		$( this ).data( pluginName + "active", true );
			$.fn[ pluginName ].prototype._create.call( this );
		});
	};

	// add methods
	$.extend( $.fn[ pluginName ].prototype, methods );

}( jQuery ));
;(function( win, $, undefined ){

	var ColumnToggle = function( element ) {

		this.$table = $( element );

		this.classes = {
			columnToggleTable: 'tablesaw-columntoggle',
			columnBtnContain: 'tablesaw-columntoggle-btnwrap tablesaw-advance',
			columnBtn: 'tablesaw-columntoggle-btn tablesaw-nav-btn down',
			popup: 'tablesaw-columntoggle-popup',
			priorityPrefix: 'tablesaw-priority-',
			// TODO duplicate class, also in tables.js
			toolbar: 'tablesaw-bar'
		};

		// Expose headers and allHeaders properties on the widget
		// headers references the THs within the first TR in the table
		this.headers = this.$table.find( 'tr:first > th' );

		this.$table.data( 'tablesaw-coltoggle', this );
	};

	ColumnToggle.prototype.init = function() {

		var tableId,
			id,
			$menuButton,
			$popup,
			$menu,
			$btnContain,
			self = this;

		this.$table.addClass( this.classes.columnToggleTable );

		tableId = this.$table.attr( "id" );
		id = tableId + "-popup";
		$btnContain = $( "<div class='" + this.classes.columnBtnContain + "'></div>" );
		$menuButton = $( "<a href='#" + id + "' class='btn btn-micro " + this.classes.columnBtn +"' data-popup-link>" +
										"<span>" + Tablesaw.i18n.columnBtnText + "</span></a>" );
		$popup = $( "<div class='dialog-table-coltoggle " + this.classes.popup + "' id='" + id + "'></div>" );
		$menu = $( "<div class='btn-group'></div>" );

		var hasNonPersistentHeaders = false;
		$( this.headers ).not( "td" ).each( function() {
			var $this = $( this ),
				priority = $this.attr("data-tablesaw-priority"),
				$cells = self.$getCells( this );

			if( priority && priority !== "persist" ) {
				$cells.addClass( self.classes.priorityPrefix + priority );

				$("<label><input type='checkbox' checked>" + $this.text() + "</label>" )
					.appendTo( $menu )
					.children( 0 )
					.data( "tablesaw-header", this );

				hasNonPersistentHeaders = true;
			}
		});

		if( !hasNonPersistentHeaders ) {
			$menu.append( '<label>' + Tablesaw.i18n.columnsDialogError + '</label>' );
		}

		$menu.appendTo( $popup );

		// bind change event listeners to inputs - TODO: move to a private method?
		$menu.find( 'input[type="checkbox"]' ).on( "change", function(e) {
			var checked = e.target.checked;

			self.$getCellsFromCheckbox( e.target )
				.toggleClass( "tablesaw-cell-hidden", !checked )
				.toggleClass( "tablesaw-cell-visible", checked );

			self.$table.trigger( 'tablesawcolumns' );
		});

		$menuButton.appendTo( $btnContain );
		$btnContain.appendTo( this.$table.prev().filter( '.' + this.classes.toolbar ) );


		function closePopup( event ) {
			// Click came from inside the popup, ignore.
			if( event && $( event.target ).closest( "." + self.classes.popup ).length ) {
				return;
			}

			$( document ).unbind( 'click.' + tableId );
			$menuButton.removeClass( 'up' ).addClass( 'down' );
			$btnContain.removeClass( 'visible' );
		}

		var closeTimeout;
		function openPopup() {
			$btnContain.addClass( 'visible' );
			$menuButton.removeClass( 'down' ).addClass( 'up' );

			$( document ).unbind( 'click.' + tableId, closePopup );

			window.clearTimeout( closeTimeout );
			closeTimeout = window.setTimeout(function() {
				$( document ).one( 'click.' + tableId, closePopup );
			}, 15 );
		}

		$menuButton.on( "click.tablesaw", function( event ) {
			event.preventDefault();

			if( !$btnContain.is( ".visible" ) ) {
				openPopup();
			} else {
				closePopup();
			}
		});

		$popup.appendTo( $btnContain );

		this.$menu = $menu;

		$(window).on( "resize." + tableId, function(){
			self.refreshToggle();
		});

		this.refreshToggle();
	};

	ColumnToggle.prototype.$getCells = function( th ) {
		return $( th ).add( th.cells );
	};

	ColumnToggle.prototype.$getCellsFromCheckbox = function( checkbox ) {
		var th = $( checkbox ).data( "tablesaw-header" );
		return this.$getCells( th );
	};

	ColumnToggle.prototype.refreshToggle = function() {
		var self = this;
		this.$menu.find( "input" ).each( function() {
			this.checked = self.$getCellsFromCheckbox( this ).eq( 0 ).css( "display" ) === "table-cell";
		});
	};

	ColumnToggle.prototype.refreshPriority = function(){
		var self = this;
		$(this.headers).not( "td" ).each( function() {
			var $this = $( this ),
				priority = $this.attr("data-tablesaw-priority"),
				$cells = $this.add( this.cells );

			if( priority && priority !== "persist" ) {
				$cells.addClass( self.classes.priorityPrefix + priority );
			}
		});
	};

	ColumnToggle.prototype.destroy = function() {
		// table toolbars, document and window .tableId events
		// removed in parent tables.js destroy method

		this.$table.removeClass( this.classes.columnToggleTable );
		this.$table.find( 'th, td' ).each(function() {
			var $cell = $( this );
			$cell.removeClass( 'tablesaw-cell-hidden' )
				.removeClass( 'tablesaw-cell-visible' );

			this.className = this.className.replace( /\bui\-table\-priority\-\d\b/g, '' );
		});
	};

	// on tablecreate, init
	$( document ).on( "tablesawcreate", function( e, Tablesaw ){

		if( Tablesaw.mode === 'columntoggle' ){
			var table = new ColumnToggle( Tablesaw.table );
			table.init();
		}

	} );

	$( document ).on( "tablesawdestroy", function( e, Tablesaw ){
		if( Tablesaw.mode === 'columntoggle' ){
			$( Tablesaw.table ).data( 'tablesaw-coltoggle' ).destroy();
		}
	} );

}( window, jQuery ));
;(function( win, $, undefined ){

	$.extend( Tablesaw.config, {
		swipe: {
			horizontalThreshold: 15,
			verticalThreshold: 30
		}
	});

	function isIE8() {
		var div = document.createElement('div'),
			all = div.getElementsByTagName('i');

		div.innerHTML = '<!--[if lte IE 8]><i></i><![endif]-->';

		return !!all.length;
	}

	var classes = {
		// TODO duplicate class, also in tables.js
		toolbar: "tablesaw-bar",
		hideBtn: "disabled",
		persistWidths: "tablesaw-fix-persist",
		allColumnsVisible: 'tablesaw-all-cols-visible'
	};

	function createSwipeTable( $table ){

		var $btns = $( "<div class='tablesaw-advance'></div>" ),
			$prevBtn = $( "<a href='#' class='tablesaw-nav-btn btn btn-micro left' title='Previous Column'></a>" ).appendTo( $btns ),
			$nextBtn = $( "<a href='#' class='tablesaw-nav-btn btn btn-micro right' title='Next Column'></a>" ).appendTo( $btns ),
			$headerCells = $table.find( "thead th" ),
			$headerCellsNoPersist = $headerCells.not( '[data-tablesaw-priority="persist"]' ),
			headerWidths = [],
			$head = $( document.head || 'head' ),
			tableId = $table.attr( 'id' ),
			// TODO switch this to an nth-child feature test
			supportsNthChild = !isIE8();

		if( !$headerCells.length ) {
			throw new Error( "tablesaw swipe: no header cells found. Are you using <th> inside of <thead>?" );
		}

		// Calculate initial widths
		$table.css('width', 'auto');
		$headerCells.each(function() {
			headerWidths.push( $( this ).outerWidth() );
		});
		$table.css( 'width', '' );

		$btns.appendTo( $table.prev().filter( '.tablesaw-bar' ) );

		$table.addClass( "tablesaw-swipe" );

		if( !tableId ) {
			tableId = 'tableswipe-' + Math.round( Math.random() * 10000 );
			$table.attr( 'id', tableId );
		}

		function $getCells( headerCell ) {
			return $( headerCell.cells ).add( headerCell );
		}

		function showColumn( headerCell ) {
			$getCells( headerCell ).removeClass( 'tablesaw-cell-hidden' );
		}

		function hideColumn( headerCell ) {
			$getCells( headerCell ).addClass( 'tablesaw-cell-hidden' );
		}

		function persistColumn( headerCell ) {
			$getCells( headerCell ).addClass( 'tablesaw-cell-persist' );
		}

		function isPersistent( headerCell ) {
			return $( headerCell ).is( '[data-tablesaw-priority="persist"]' );
		}

		function unmaintainWidths() {
			$table.removeClass( classes.persistWidths );
			$( '#' + tableId + '-persist' ).remove();
		}

		function maintainWidths() {
			var prefix = '#' + tableId + '.tablesaw-swipe ',
				styles = [],
				tableWidth = $table.width(),
				hash = [],
				newHash;

			$headerCells.each(function( index ) {
				var width;
				if( isPersistent( this ) ) {
					width = $( this ).outerWidth();

					// Only save width on non-greedy columns (take up less than 75% of table width)
					if( width < tableWidth * 0.75 ) {
						hash.push( index + '-' + width );
						styles.push( prefix + ' .tablesaw-cell-persist:nth-child(' + ( index + 1 ) + ') { width: ' + width + 'px; }' );
					}
				}
			});
			newHash = hash.join( '_' );

			$table.addClass( classes.persistWidths );

			var $style = $( '#' + tableId + '-persist' );
			// If style element not yet added OR if the widths have changed
			if( !$style.length || $style.data( 'hash' ) !== newHash ) {
				// Remove existing
				$style.remove();

				if( styles.length ) {
					$( '<style>' + styles.join( "\n" ) + '</style>' )
						.attr( 'id', tableId + '-persist' )
						.data( 'hash', newHash )
						.appendTo( $head );
				}
			}
		}

		function getNext(){
			var next = [],
				checkFound;

			$headerCellsNoPersist.each(function( i ) {
				var $t = $( this ),
					isHidden = $t.css( "display" ) === "none" || $t.is( ".tablesaw-cell-hidden" );

				if( !isHidden && !checkFound ) {
					checkFound = true;
					next[ 0 ] = i;
				} else if( isHidden && checkFound ) {
					next[ 1 ] = i;

					return false;
				}
			});

			return next;
		}

		function getPrev(){
			var next = getNext();
			return [ next[ 1 ] - 1 , next[ 0 ] - 1 ];
		}

		function nextpair( fwd ){
			return fwd ? getNext() : getPrev();
		}

		function canAdvance( pair ){
			return pair[ 1 ] > -1 && pair[ 1 ] < $headerCellsNoPersist.length;
		}

		function matchesMedia() {
			var matchMedia = $table.attr( "data-tablesaw-swipe-media" );
			return !matchMedia || ( "matchMedia" in win ) && win.matchMedia( matchMedia ).matches;
		}

		function fakeBreakpoints() {
			if( !matchesMedia() ) {
				return;
			}

			var extraPaddingPixels = 20,
				containerWidth = $table.parent().width(),
				persist = [],
				sum = 0,
				sums = [],
				visibleNonPersistantCount = $headerCells.length;

			$headerCells.each(function( index ) {
				var $t = $( this ),
					isPersist = $t.is( '[data-tablesaw-priority="persist"]' );

				persist.push( isPersist );

				sum += headerWidths[ index ] + ( isPersist ? 0 : extraPaddingPixels );
				sums.push( sum );

				// is persistent or is hidden
				if( isPersist || sum > containerWidth ) {
					visibleNonPersistantCount--;
				}
			});

			var needsNonPersistentColumn = visibleNonPersistantCount === 0;

			$headerCells.each(function( index ) {
				if( persist[ index ] ) {

					// for visual box-shadow
					persistColumn( this );
					return;
				}

				if( sums[ index ] <= containerWidth || needsNonPersistentColumn ) {
					needsNonPersistentColumn = false;
					showColumn( this );
				} else {
					hideColumn( this );
				}
			});

			if( supportsNthChild ) {
				unmaintainWidths();
			}
			$table.trigger( 'tablesawcolumns' );
		}

		function advance( fwd ){
			var pair = nextpair( fwd );
			if( canAdvance( pair ) ){
				if( isNaN( pair[ 0 ] ) ){
					if( fwd ){
						pair[0] = 0;
					}
					else {
						pair[0] = $headerCellsNoPersist.length - 1;
					}
				}

				if( supportsNthChild ) {
					maintainWidths();
				}

				hideColumn( $headerCellsNoPersist.get( pair[ 0 ] ) );
				showColumn( $headerCellsNoPersist.get( pair[ 1 ] ) );

				$table.trigger( 'tablesawcolumns' );
			}
		}

		$prevBtn.add( $nextBtn ).click(function( e ){
			advance( !!$( e.target ).closest( $nextBtn ).length );
			e.preventDefault();
		});

		function getCoord( event, key ) {
			return ( event.touches || event.originalEvent.touches )[ 0 ][ key ];
		}

		$table
			.bind( "touchstart.swipetoggle", function( e ){
				var originX = getCoord( e, 'pageX' ),
					originY = getCoord( e, 'pageY' ),
					x,
					y;

				$( win ).off( "resize", fakeBreakpoints );

				$( this )
					.bind( "touchmove", function( e ){
						x = getCoord( e, 'pageX' );
						y = getCoord( e, 'pageY' );
						var cfg = Tablesaw.config.swipe;
						if( Math.abs( x - originX ) > cfg.horizontalThreshold && Math.abs( y - originY ) < cfg.verticalThreshold ) {
							e.preventDefault();
						}
					})
					.bind( "touchend.swipetoggle", function(){
						var cfg = Tablesaw.config.swipe;
						if( Math.abs( y - originY ) < cfg.verticalThreshold ) {
							if( x - originX < -1 * cfg.horizontalThreshold ){
								advance( true );
							}
							if( x - originX > cfg.horizontalThreshold ){
								advance( false );
							}
						}

						window.setTimeout(function() {
							$( win ).on( "resize", fakeBreakpoints );
						}, 300);
						$( this ).unbind( "touchmove touchend" );
					});

			})
			.bind( "tablesawcolumns.swipetoggle", function(){
				var canGoPrev = canAdvance( getPrev() );
				var canGoNext = canAdvance( getNext() );
				$prevBtn[ canGoPrev ? "removeClass" : "addClass" ]( classes.hideBtn );
				$nextBtn[ canGoNext ? "removeClass" : "addClass" ]( classes.hideBtn );

				$prevBtn.closest( "." + classes.toolbar )[ !canGoPrev && !canGoNext ? 'addClass' : 'removeClass' ]( classes.allColumnsVisible );
			})
			.bind( "tablesawnext.swipetoggle", function(){
				advance( true );
			} )
			.bind( "tablesawprev.swipetoggle", function(){
				advance( false );
			} )
			.bind( "tablesawdestroy.swipetoggle", function(){
				var $t = $( this );

				$t.removeClass( 'tablesaw-swipe' );
				$t.prev().filter( '.tablesaw-bar' ).find( '.tablesaw-advance' ).remove();
				$( win ).off( "resize", fakeBreakpoints );

				$t.unbind( ".swipetoggle" );
			});

		fakeBreakpoints();
		$( win ).on( "resize", fakeBreakpoints );
	}



	// on tablecreate, init
	$( document ).on( "tablesawcreate", function( e, Tablesaw ){

		if( Tablesaw.mode === 'swipe' ){
			createSwipeTable( Tablesaw.$table );
		}

	} );

}( window, jQuery ));

;(function( $ ) {
	function getSortValue( cell ) {
		return $.map( cell.childNodes, function( el ) {
				var $el = $( el );
				if( $el.is( 'input, select' ) ) {
					return $el.val();
				} else if( $el.hasClass( 'tablesaw-cell-label' ) ) {
					return;
				}
				return $.trim( $el.text() );
			}).join( '' );
	}

	var pluginName = "tablesaw-sortable",
		initSelector = "table[data-" + pluginName + "]",
		sortableSwitchSelector = "[data-" + pluginName + "-switch]",
		attrs = {
			defaultCol: "data-tablesaw-sortable-default-col",
			numericCol: "data-tablesaw-sortable-numeric"
		},
		classes = {
			head: pluginName + "-head",
			ascend: pluginName + "-ascending",
			descend: pluginName + "-descending",
			switcher: pluginName + "-switch",
			tableToolbar: 'tablesaw-toolbar',
			sortButton: pluginName + "-btn"
		},
		methods = {
			_create: function( o ){
				return $( this ).each(function() {
					var init = $( this ).data( "init" + pluginName );
					if( init ) {
						return false;
					}
					$( this )
						.data( "init"+ pluginName, true )
						.trigger( "beforecreate." + pluginName )
						[ pluginName ]( "_init" , o )
						.trigger( "create." + pluginName );
				});
			},
			_init: function(){
				var el = $( this ),
					heads,
					$switcher;

				var addClassToTable = function(){
						el.addClass( pluginName );
					},
					addClassToHeads = function( h ){
						$.each( h , function( i , v ){
							$( v ).addClass( classes.head );
						});
					},
					makeHeadsActionable = function( h , fn ){
						$.each( h , function( i , v ){
							var b = $( "<button class='" + classes.sortButton + "'/>" );
							b.bind( "click" , { col: v } , fn );
							$( v ).wrapInner( b );
						});
					},
					clearOthers = function( sibs ){
						$.each( sibs , function( i , v ){
							var col = $( v );
							col.removeAttr( attrs.defaultCol );
							col.removeClass( classes.ascend );
							col.removeClass( classes.descend );
						});
					},
					headsOnAction = function( e ){
						if( $( e.target ).is( 'a[href]' ) ) {
							return;
						}

						e.stopPropagation();
						var head = $( this ).parent(),
							v = e.data.col,
							newSortValue = heads.index( head );

						clearOthers( head.siblings() );
						if( head.hasClass( classes.descend ) ){
							el[ pluginName ]( "sortBy" , v , true);
							newSortValue += '_asc';
						} else {
							el[ pluginName ]( "sortBy" , v );
							newSortValue += '_desc';
						}
						if( $switcher ) {
							$switcher.find( 'select' ).val( newSortValue ).trigger( 'refresh' );
						}

						e.preventDefault();
					},
					handleDefault = function( heads ){
						$.each( heads , function( idx , el ){
							var $el = $( el );
							if( $el.is( "[" + attrs.defaultCol + "]" ) ){
								if( !$el.hasClass( classes.descend ) ) {
									$el.addClass( classes.ascend );
								}
							}
						});
					},
					addSwitcher = function( heads ){
						$switcher = $( '<div>' ).addClass( classes.switcher ).addClass( classes.tableToolbar ).html(function() {
							var html = [ '<label>' + Tablesaw.i18n.sort + ':' ];

							html.push( '<span class="btn btn-small">&#160;<select>' );
							heads.each(function( j ) {
								var $t = $( this );
								var isDefaultCol = $t.is( "[" + attrs.defaultCol + "]" );
								var isDescending = $t.hasClass( classes.descend );

								var hasNumericAttribute = $t.is( '[data-sortable-numeric]' );
								var numericCount = 0;
								// Check only the first four rows to see if the column is numbers.
								var numericCountMax = 5;

								$( this.cells ).slice( 0, numericCountMax ).each(function() {
									if( !isNaN( parseInt( getSortValue( this ), 10 ) ) ) {
										numericCount++;
									}
								});
								var isNumeric = numericCount === numericCountMax;
								if( !hasNumericAttribute ) {
									$t.attr( "data-sortable-numeric", isNumeric ? "" : "false" );
								}

								html.push( '<option' + ( isDefaultCol && !isDescending ? ' selected' : '' ) + ' value="' + j + '_asc">' + $t.text() + ' ' + ( isNumeric ? '&#x2191;' : '(A-Z)' ) + '</option>' );
								html.push( '<option' + ( isDefaultCol && isDescending ? ' selected' : '' ) + ' value="' + j + '_desc">' + $t.text() + ' ' + ( isNumeric ? '&#x2193;' : '(Z-A)' ) + '</option>' );
							});
							html.push( '</select></span></label>' );

							return html.join('');
						});

						var $toolbar = el.prev().filter( '.tablesaw-bar' ),
							$firstChild = $toolbar.children().eq( 0 );

						if( $firstChild.length ) {
							$switcher.insertBefore( $firstChild );
						} else {
							$switcher.appendTo( $toolbar );
						}
						$switcher.find( '.btn' ).tablesawbtn();
						$switcher.find( 'select' ).on( 'change', function() {
							var val = $( this ).val().split( '_' ),
								head = heads.eq( val[ 0 ] );

							clearOthers( head.siblings() );
							el[ pluginName ]( 'sortBy', head.get( 0 ), val[ 1 ] === 'asc' );
						});
					};

					addClassToTable();
					heads = el.find( "thead th[data-" + pluginName + "-col]" );
					addClassToHeads( heads );
					makeHeadsActionable( heads , headsOnAction );
					handleDefault( heads );

					if( el.is( sortableSwitchSelector ) ) {
						addSwitcher( heads, el.find('tbody tr:nth-child(-n+3)') );
					}
			},
			getColumnNumber: function( col ){
				return $( col ).prevAll().length;
			},
			getTableRows: function(){
				return $( this ).find( "tbody tr" );
			},
			sortRows: function( rows , colNum , ascending, col ){
				var cells, fn, sorted;
				var getCells = function( rows ){
						var cells = [];
						$.each( rows , function( i , r ){
							var element = $( r ).children().get( colNum );
							cells.push({
								element: element,
								cell: getSortValue( element ),
								rowNum: i
							});
						});
						return cells;
					},
					getSortFxn = function( ascending, forceNumeric ){
						var fn,
							regex = /[^\-\+\d\.]/g;
						if( ascending ){
							fn = function( a , b ){
								if( forceNumeric ) {
									return parseFloat( a.cell.replace( regex, '' ) ) - parseFloat( b.cell.replace( regex, '' ) );
								} else {
									return a.cell.toLowerCase() > b.cell.toLowerCase() ? 1 : -1;
								}
							};
						} else {
							fn = function( a , b ){
								if( forceNumeric ) {
									return parseFloat( b.cell.replace( regex, '' ) ) - parseFloat( a.cell.replace( regex, '' ) );
								} else {
									return a.cell.toLowerCase() < b.cell.toLowerCase() ? 1 : -1;
								}
							};
						}
						return fn;
					},
					applyToRows = function( sorted , rows ){
						var newRows = [], i, l, cur;
						for( i = 0, l = sorted.length ; i < l ; i++ ){
							cur = sorted[ i ].rowNum;
							newRows.push( rows[cur] );
						}
						return newRows;
					};

				cells = getCells( rows );
				var customFn = $( col ).data( 'tablesaw-sort' );
				fn = ( customFn && typeof customFn === "function" ? customFn( ascending ) : false ) ||
					getSortFxn( ascending, $( col ).is( '[data-sortable-numeric]' ) && !$( col ).is( '[data-sortable-numeric="false"]' ) );
				sorted = cells.sort( fn );
				rows = applyToRows( sorted , rows );
				return rows;
			},
			replaceTableRows: function( rows ){
				var el = $( this ),
					body = el.find( "tbody" );
				body.html( rows );
			},
			makeColDefault: function( col , a ){
				var c = $( col );
				c.attr( attrs.defaultCol , "true" );
				if( a ){
					c.removeClass( classes.descend );
					c.addClass( classes.ascend );
				} else {
					c.removeClass( classes.ascend );
					c.addClass( classes.descend );
				}
			},
			sortBy: function( col , ascending ){
				var el = $( this ), colNum, rows;

				colNum = el[ pluginName ]( "getColumnNumber" , col );
				rows = el[ pluginName ]( "getTableRows" );
				rows = el[ pluginName ]( "sortRows" , rows , colNum , ascending, col );
				el[ pluginName ]( "replaceTableRows" , rows );
				el[ pluginName ]( "makeColDefault" , col , ascending );
			}
		};

	// Collection method.
	$.fn[ pluginName ] = function( arrg ) {
		var args = Array.prototype.slice.call( arguments , 1),
			returnVal;

		// if it's a method
		if( arrg && typeof( arrg ) === "string" ){
			returnVal = $.fn[ pluginName ].prototype[ arrg ].apply( this[0], args );
			return (typeof returnVal !== "undefined")? returnVal:$(this);
		}
		// check init
		if( !$( this ).data( pluginName + "data" ) ){
			$( this ).data( pluginName + "active", true );
			$.fn[ pluginName ].prototype._create.call( this , arrg );
		}
		return $(this);
	};
	// add methods
	$.extend( $.fn[ pluginName ].prototype, methods );

	$( document ).on( "tablesawcreate", function( e, Tablesaw ) {
		if( Tablesaw.$table.is( initSelector ) ) {
			Tablesaw.$table[ pluginName ]();
		}
	});

}( jQuery ));

;(function( win, $, undefined ){

	var MM = {
		attr: {
			init: 'data-tablesaw-minimap'
		}
	};

	function createMiniMap( $table ){

		var $btns = $( '<div class="tablesaw-advance minimap">' ),
			$dotNav = $( '<ul class="tablesaw-advance-dots">' ).appendTo( $btns ),
			hideDot = 'tablesaw-advance-dots-hide',
			$headerCells = $table.find( 'thead th' );

		// populate dots
		$headerCells.each(function(){
			$dotNav.append( '<li><i></i></li>' );
		});

		$btns.appendTo( $table.prev().filter( '.tablesaw-bar' ) );

		function showMinimap( $table ) {
			var mq = $table.attr( MM.attr.init );
			return !mq || win.matchMedia && win.matchMedia( mq ).matches;
		}

		function showHideNav(){
			if( !showMinimap( $table ) ) {
				$btns.hide();
				return;
			}
			$btns.show();

			// show/hide dots
			var dots = $dotNav.find( "li" ).removeClass( hideDot );
			$table.find( "thead th" ).each(function(i){
				if( $( this ).css( "display" ) === "none" ){
					dots.eq( i ).addClass( hideDot );
				}
			});
		}

		// run on init and resize
		showHideNav();
		$( win ).on( "resize", showHideNav );


		$table
			.bind( "tablesawcolumns.minimap", function(){
				showHideNav();
			})
			.bind( "tablesawdestroy.minimap", function(){
				var $t = $( this );

				$t.prev().filter( '.tablesaw-bar' ).find( '.tablesaw-advance' ).remove();
				$( win ).off( "resize", showHideNav );

				$t.unbind( ".minimap" );
			});
	}



	// on tablecreate, init
	$( document ).on( "tablesawcreate", function( e, Tablesaw ){

		if( ( Tablesaw.mode === 'swipe' || Tablesaw.mode === 'columntoggle' ) && Tablesaw.$table.is( '[ ' + MM.attr.init + ']' ) ){
			createMiniMap( Tablesaw.$table );
		}

	} );

}( window, jQuery ));

;(function( win, $ ) {

	var S = {
		selectors: {
			init: 'table[data-tablesaw-mode-switch]'
		},
		attributes: {
			excludeMode: 'data-tablesaw-mode-exclude'
		},
		classes: {
			main: 'tablesaw-modeswitch',
			toolbar: 'tablesaw-toolbar'
		},
		modes: [ 'stack', 'swipe', 'columntoggle' ],
		init: function( table ) {
			var $table = $( table ),
				ignoreMode = $table.attr( S.attributes.excludeMode ),
				$toolbar = $table.prev().filter( '.tablesaw-bar' ),
				modeVal = '',
				$switcher = $( '<div>' ).addClass( S.classes.main + ' ' + S.classes.toolbar ).html(function() {
					var html = [ '<label>' + Tablesaw.i18n.columns + ':' ],
						dataMode = $table.attr( 'data-tablesaw-mode' ),
						isSelected;

					html.push( '<span class="btn btn-small">&#160;<select>' );
					for( var j=0, k = S.modes.length; j<k; j++ ) {
						if( ignoreMode && ignoreMode.toLowerCase() === S.modes[ j ] ) {
							continue;
						}

						isSelected = dataMode === S.modes[ j ];

						if( isSelected ) {
							modeVal = S.modes[ j ];
						}

						html.push( '<option' +
							( isSelected ? ' selected' : '' ) +
							' value="' + S.modes[ j ] + '">' + Tablesaw.i18n.modes[ j ] + '</option>' );
					}
					html.push( '</select></span></label>' );

					return html.join('');
				});

			var $otherToolbarItems = $toolbar.find( '.tablesaw-advance' ).eq( 0 );
			if( $otherToolbarItems.length ) {
				$switcher.insertBefore( $otherToolbarItems );
			} else {
				$switcher.appendTo( $toolbar );
			}

			$switcher.find( '.btn' ).tablesawbtn();
			$switcher.find( 'select' ).bind( 'change', S.onModeChange );
		},
		onModeChange: function() {
			var $t = $( this ),
				$switcher = $t.closest( '.' + S.classes.main ),
				$table = $t.closest( '.tablesaw-bar' ).nextUntil( $table ).eq( 0 ),
				val = $t.val();

			$switcher.remove();
			$table.data( 'table' ).destroy();

			$table.attr( 'data-tablesaw-mode', val );
			$table.table();
		}
	};

	$( win.document ).on( "tablesawcreate", function( e, Tablesaw ) {
		if( Tablesaw.$table.is( S.selectors.init ) ) {
			S.init( Tablesaw.table );
		}
	});

})( window, jQuery );
;
/*! Tablesaw - v2.0.3 - 2016-05-02
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2016 Filament Group; Licensed MIT */
;(function( $ ) {

	// DOM-ready auto-init of plugins.
	// Many plugins bind to an "enhance" event to init themselves on dom ready, or when new markup is inserted into the DOM
	$( function(){
		$( document ).trigger( "enhance.tablesaw" );
	});

})( jQuery );;
this.Element&&Element.prototype.attachEvent&&!Element.prototype.addEventListener&&function(){function t(t,e){Window.prototype[t]=HTMLDocument.prototype[t]=Element.prototype[t]=e}function e(){e.interval&&document.body&&(e.interval=clearInterval(e.interval),document.dispatchEvent(new CustomEvent("DOMContentLoaded")))}t("addEventListener",function(t,e){var n=this,i=n.addEventListener.listeners=n.addEventListener.listeners||{},o=i[t]=i[t]||[];o.length||n.attachEvent("on"+t,o.event=function(t){var e=n.document&&n.document.documentElement||n.documentElement||{scrollLeft:0,scrollTop:0};t.currentTarget=n,t.pageX=t.clientX+e.scrollLeft,t.pageY=t.clientY+e.scrollTop,t.preventDefault=function(){t.returnValue=!1},t.relatedTarget=t.fromElement||null,t.stopImmediatePropagation=function(){c=!1,t.cancelBubble=!0},t.stopPropagation=function(){t.cancelBubble=!0},t.target=t.srcElement||n,t.timeStamp=+new Date;for(var i,r=0,a=[].concat(o),c=!0;c&&(i=a[r]);++r)for(var s,l=0;s=o[l];++l)if(s==i){s.call(n,t);break}}),o.push(e)}),t("removeEventListener",function(t,e){for(var n,i=this,o=i.addEventListener.listeners=i.addEventListener.listeners||{},r=o[t]=o[t]||[],a=r.length-1;n=r[a];--a)if(n==e){r.splice(a,1);break}!r.length&&r.event&&i.detachEvent("on"+t,r.event)}),t("dispatchEvent",function(t){var e=this,n=t.type,i=e.addEventListener.listeners=e.addEventListener.listeners||{},o=i[n]=i[n]||[];try{return e.fireEvent("on"+n,t)}catch(r){return void(o.event&&o.event(t))}}),Object.defineProperty(Window.prototype,"CustomEvent",{get:function(){var t=this;return function(e,n){var i,o=t.document.createEventObject();o.type=e;for(i in n)"cancelable"==i?o.returnValue=!n.cancelable:"bubbles"==i?o.cancelBubble=!n.bubbles:"detail"==i&&(o.detail=n.detail);return o}}}),e.interval=setInterval(e,1),window.addEventListener("load",e)}(),!this.CustomEvent&&function(){window.CustomEvent=function(t,e){var n;e=e||{bubbles:!1,cancelable:!1,detail:void 0};try{n=document.createEvent("CustomEvent"),n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail)}catch(i){n=document.createEvent("Event"),n.initEvent(t,e.bubbles,e.cancelable),n.detail=e.detail}return n}}(),function(){function t(t){this.el=t;for(var e=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),n=0;n<e.length;n++)i.call(this,e[n])}function e(t,e,n){Object.defineProperty?Object.defineProperty(t,e,{get:n}):t.__defineGetter__(e,n)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var n=Array.prototype,i=n.push,o=n.splice,r=n.join;t.prototype={add:function(t){this.contains(t)||(i.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var e=0;e<this.length&&this[e]!=t;e++);o.call(this,e,1),this.el.className=this.toString()}},toString:function(){return r.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,e(Element.prototype,"classList",function(){return new t(this)})}}(),function(){"use strict";function t(t){var e=document.createEvent("Event");e.initEvent("focus"===t.type?"focusin":"focusout",!0,!1),n=!0,t.target.dispatchEvent(e)}function e(t){n||t.stopPropagation(),n=!1}var n=!1;document.addEventListener&&(document.addEventListener("focus",t,!0),document.addEventListener("blur",t,!0),document.addEventListener("focusin",e,!0),document.addEventListener("focusout",e,!0))}();;
/*! track-focus v 1.0.0 | Author: Jeremy Fields [jeremy.fields@vget.com], 2015 | License: MIT */
!function(e){var n,t=function(e){n="mousedown"===e.type},o=function(e){n&&e.target.classList.add("focus--mouse")},s=function(e){e.target.classList.remove("focus--mouse")},d=function(){e.addEventListener("keydown",t),e.addEventListener("mousedown",t),e.addEventListener("focusin",o),e.addEventListener("focusout",s)};d()}(document.body);;
/*
 * jQuery offscreen plugin
 *
 * Copyright Cory LaViska for A Beautiful Site, LLC
 *
 * @license: http://opensource.org/licenses/MIT
 *
 */
(function($) {
  $.extend($.expr[':'], {
    'off-top': function(el) {
      return $(el).offset().top < $(window).scrollTop();
    },
    'off-right': function(el) {
      return $(el).offset().left + $(el).outerWidth() - $(window).scrollLeft() > $(window).width();
    },
    'off-bottom': function(el) {
      return $(el).offset().top + $(el).outerHeight() - $(window).scrollTop() > $(window).height();
    },
    'off-left': function(el) {
      return $(el).offset().left < $(window).scrollLeft();
    },
    'off-screen': function(el) {
      return $(el).is(':off-top, :off-right, :off-bottom, :off-left');
    }
  });
})(jQuery);;
/**
 * @file
 * Attaches sitewide alert behavior.
 */

(function ($, Drupal, window) {

  "use strict";

  // Site wide alert widget.
  Drupal.behaviors.site_wide_alert = {
    attach: function (context, settings) {
      var newSWAId = $('.swa-body').attr('id'); // Site Wide Alert Identifier
      if (newSWAId) {
        $('.tfnsw-site-wide-alert').addClass(newSWAId);
        $('.alert-info .alert-close-container button').attr("name", newSWAId);

        // Local storage check for closed sitewide alerts
        var removedSWA = localStorage.getItem("removedSWA")
        var show_active_swa = true;
        if(removedSWA != null) {
          if ( $('.tfnsw-site-wide-alert').hasClass( removedSWA ) ) {
            show_active_swa = false;
          }
        }
        if (show_active_swa == true) {
          $('.tfnsw-site-wide-alert').removeClass('hidden');
          $('.tfnsw-site-wide-alert').show();
        }

        $(function () {
          $('.alert-info .alert-close-container button').on('click', function (e) {
            var swa_name = $('.alert-info .alert-close-container button').attr("name");
            var removedSWA = localStorage.getItem("removedSWA");
            localStorage.setItem("removedSWA", swa_name);
          });
        });
      }
    }
  };
})(jQuery, Drupal, window);
;
/**
 * @file
 * Attaches breakpoint behaviors.
 */

(function ($, Drupal, window) {

  "use strict";

  $(window).on('load', function(){
    if ( !$('[data-current-breakpoint]').length ){
      $('html').attr('data-current-breakpoint', Drupal.tfnsw_bootstrap.tfnsw_breakpoint.call());
    }
  });

  $(window).on('resize', _.debounce(function(){
    var previous = $('body').attr('data-current-breakpoint');
    var current = Drupal.tfnsw_bootstrap.tfnsw_breakpoint.call();

    if ( !previous || current !== previous ){
      $('html').attr('data-current-breakpoint', current);

      var event = new CustomEvent('tfnswBreakpointChange', {
        detail: {
          breakpoint: current
        }
      });
      window.dispatchEvent(event);
    }
  }, 200));

  /**
   * tfnsw_bootstrap theme.
   * tfnsw_breakpoint function.
   * @namespace
   */
  Drupal.tfnsw_bootstrap = {

    tfnsw_breakpoint: function () {

      if ( window.matchMedia("(max-width: 767px)").matches ) {
        var breakpoint = 'xs';
      }

      if ( window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches ) {
        var breakpoint = 'sm';
      }

      if ( window.matchMedia("(min-width: 992px) and (max-width: 1199px)").matches ) {
        var breakpoint = 'md';
      }

      if ( window.matchMedia("(min-width: 1200px)").matches ) {
        var breakpoint = 'lg';
      }

      return breakpoint;
    }
  };
})(jQuery, Drupal, window);
;
/**
 * @file
 * Attaches sticky header behavior.
 */

(function ($, Drupal, window) {

  "use strict";

  /**
   * TFNSW_bootstrap Sticky header .
   *
   */
  Drupal.behaviors.tfnsw_sticky_header = {
    attach: function (context, settings) {

      /**
       * detect IE
       * returns version of IE or false, if browser is not Internet Explorer
       */
      function detectIE() {
        var ua = window.navigator.userAgent;

        // Test values; Uncomment to check result …

        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

        // Edge 12 (Spartan)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

        // Edge 13
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
          // IE 10 or older => return version number
          return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
          // IE 11 => return version number
          var rv = ua.indexOf('rv:');
          return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
          // Edge (IE 12+) => return version number
          return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
      }

      initHeader();

      function initHeader(){
        var version = detectIE();
        var browseHappyHeight = 0;
        if(version && version == 11) {
          var $browseHappy = $("#browsehappy");
          $browseHappy.show();
          browseHappyHeight = $browseHappy.outerHeight();
        }

        var $header = $(context).find('.tfnsw-sticky-header');
        var $alert = $header.prevAll('[id*="block-alerts"]');
        var loadState = true;
        var startHeight = browseHappyHeight + $alert.outerHeight() + $header.outerHeight();

        setSpacer();

        // listen for breakpoint change and reset offset
        $(window).on('tfnswBreakpointChange', function(event){
          adjustHeader();
        });

        $alert.find('div.alert').on('closed.bs.alert', function() {
          adjustHeader();
        });

        function adjustHeader() {
          startHeight = $alert.outerHeight() + $header.outerHeight();
          setSpacer();
        };

        function setSpacer(){
          var height = 0;

          $header.css({
            'top': $alert.outerHeight() + browseHappyHeight
          });

          if ( Drupal.tfnsw_bootstrap.tfnsw_breakpoint.call() === 'xs' ){
            height = $header.find('header').outerHeight();
          } else {
            height = $header.outerHeight();
          }

          $(context).find('.tfnsw-sticky-header-spacer').css({
            'height': height
          });
        }

        function checkAlert(){
          if ( $alert.length && $alert.find('> div.alert').length ){
            return true;
          }
          return false;
        }
      }
    }
  };
})(jQuery, Drupal, window);
;
/**
 * @file
 * Attaches main menu behaviors.
 */

(function ($, Drupal, window) {

  "use strict";

  /**
   * TFNSW_bootstrap menu.
   *
   */
  Drupal.behaviors.tfnsw_menu = {
    attach: function (context, settings) {
      var $navs = $('[data-nav]');
      var $mobileNav = $('[data-mobile-menu]');
      var $mobileNavToggles = $('[data-mobile-menu-toggle]');
      var $mobileNavClear = $('[data-mobile-menu-clear]');
      var $breakpoint = Drupal.tfnsw_bootstrap.tfnsw_breakpoint.call();
      var $navTimer;

      init();


      function init() {
        // Check browser width
        $(window).on('tfnswBreakpointChange', function (e) {
          $breakpoint = e.detail.breakpoint;
        });

        // Initialise menus
        $navs.each(function () {
          initNavs($(this));
        });

        // Mobile menu toggle
        if ($mobileNav.length && $mobileNavToggles.length) {
          mobileMenuToggle();
        }
      }

      function initNavs($this) {
        var $navDropdowns = $this.find('[data-dropdown]');
        var $lastNavItem = $this.children().last();

        // Enable dropdowns
        if ($navDropdowns.length) {
          $navDropdowns.each(function () {
            enableDropdown($(this));
          });
        }

        if ($lastNavItem[0] && $lastNavItem[0].hasAttribute("data-dropdown")) {
          $lastNavItem.attr('data-dropdown-flipped', '');
        }

        function enableDropdown($this) {
          $this.find('> [data-dropdown-nav-link]').on('keydown', function (e) {
            if ($breakpoint !== 'xs') {
              manageInteraction(e, $this);
              $this.find('[data-dropdown-container] a:first').focus();
            }
          }).on('focus', function () {
            if ($breakpoint !== 'xs') {
              $navDropdowns.removeAttr('data-dropdown-focused');
              $this.attr('data-dropdown-focused', '');
            }
          }).on('blur', function () {
            if ($breakpoint !== 'xs') {
              setTimeout(function () {
                if ($this.find(':focus').length === 0) {
                  $this.removeAttr('data-dropdown-focused data-dropdown-active');
                }
              }, 10);
            }
          });

          $this.find('> a[data-dropdown-mobile-toggle]').on('click keydown touchstart', function (e) {
            if ($breakpoint === 'xs') {
              manageInteraction(e, $this);
            }
          });

          $this.on('mouseenter mouseleave', function (e) {
            if ($breakpoint !== 'xs') {
              manageInteraction(e, $this);
            }
          });

          $this.find('> a[data-dropdown-mobile-toggle]').on('click keydown touchstart', function (e) {
            if ($breakpoint === 'xs') {

              $('[data-dropdown-mobile-toggle]').attr('aria-expanded', false);

              manageInteraction(e, $this);
            }
          });

          $this.find('> [data-dropdown-nav-link]').on('touchstart', function (e) {
            manageInteraction(e, $this);
          });
          $this.find('> [data-dropdown-nav-link]').on('touchstart click', function (e) {
            manageInteraction(e, $this);
          });

          $this.find('> [data-dropdown-container] a').on('keydown', function (e) {
            if ($breakpoint !== 'xs') {
              manageInteraction(e, $this);
            } else if ($breakpoint === 'xs') {
              if (e.keyCode === 27) {
                clearMenus();
              }
            }
          });

          $this.find('> div[data-dropdown-tab-start]').on('focus', function () {
            $this.find('a:last').focus();
          });

          $this.find('> div[data-dropdown-tab-end]').on('focus', function () {
            if ($breakpoint === 'xs') {
              $this.find('> div[data-dropdown-tab-start]').next('a').focus();
            } else {
              $this.find('div[data-dropdown-container] a:first').focus();
            }
          });


        }

        function manageInteraction(e, $this) {
          e.stopImmediatePropagation();

          if (e.type === 'keydown') {

            if ($('.is-touch').length)
              $navDropdowns.find('a').removeClass('is-touch');

            // Handle Open Key Presses
            if (e.keyCode === 27 || e.keyCode === 9) {
              // Close - Esc and Arrow Up
              if ($this.is('[data-dropdown-active]')) {
                e.preventDefault();
                hideMenu($this);
                $this.find('> *:first').focus();
              }
            } else if (e.keyCode === 13) {
              // Toggle - Space and Enter
              if (!$this.is('[data-dropdown-active]')) {
                e.preventDefault();
                showMenu($this);
              }
            } else if (e.keyCode === 40) {
              if ($this.is('[data-dropdown-active]')) {
                e.preventDefault();

                var current = $this.find('a:focus');
                if (current.is('[data-nav-title]') && current.parent().find('[data-dropdown-container]').length) {
                  current.parent().find('[data-dropdown-container] a').first().focus();
                  return;
                }

                var next = current.parent().next('[data-nav-item]');
                if (next.length) {
                  next.find('a').first().focus();
                  return;
                }

                next = current.parents('[data-nav-item]').eq(1).next('[data-nav-item]');
                if (next.length) {
                  next.find('a').first().focus();
                }
              }
            } else if (e.keyCode === 38) {
              if ($this.is('[data-dropdown-active]')) {
                e.preventDefault();

                var current = $this.find('a:focus');
                if (current.is('[data-nav-title]') && current.parent().prev('[data-nav-item]').find('[data-dropdown-container]').length) {
                  current.parent().prev('[data-nav-item]').find('[data-dropdown-container] a').last().focus();
                  return;
                }

                var prev = current.parent().prev();
                if (prev.length) {
                  prev.find('a').first().focus();
                  return;
                }

                prev = current.parents('[data-nav-item]').eq(1).find('[data-nav-title]');
                if (prev.length) {
                  prev.first().focus();
                }
              }
            } else if (e.keyCode === 9) {
              if ($this.is('[data-dropdown-active]')) {
                e.preventDefault();
                $this.find('[data-dropdown-container] a:first').focus();
              }
            }
          } else if (e.type === 'mouseenter') {
            if ($navTimer) {
              clearTimeout($navTimer);
            }
            $navTimer = setTimeout(function () {
              showMenu($this);
              $this.attr('data-dropdown-hover', '');
              $this.removeAttr('data-dropdown-focused');
            }, 300);
          } else if (e.type === 'mouseleave') {
            if ($navTimer) {
              clearTimeout($navTimer);
            }
            $navTimer = setTimeout(function () {
              if (typeof $(e.currentTarget).attr('data-nav-item') !== 'undefined') {
                hideMenu($this.closest('[data-dropdown-active]'));
              }
              hideMenu($this);
              $this.removeAttr('data-dropdown-hover data-dropdown-focused');
            }, 300);
          } else if (e.type === 'touchstart') {
            e.preventDefault();

            if ($('.is-touch').length == 0)
              $navDropdowns.find('a').addClass('is-touch');

            if ($this.is('[data-dropdown-active]')) {
              hideMenu($this);
            } else {
              showMenu($this);
            }
          } else if (e.type === 'click') {

            e.preventDefault();

            if ($breakpoint === 'xs') {
              if ($('.is-touch').length)
                $navDropdowns.find('a').removeClass('is-touch');
            }

            if ($this.is('[data-dropdown-active]')) {
              hideMenu($this);
            } else {
              showMenu($this);
            }

            $this.attr('data-dropdown-hover', '');
            $this.removeAttr('data-dropdown-focused');
          }
        }

        function hideMenu($this) {
          $this.closest('[data-nav]').removeAttr('data-nav-open');
          $this.closest('[data-dropdown]').removeAttr('data-dropdown-hover data-dropdown-active data-dropdown-tabbable');
          $this.find('[data-dropdown]').removeAttr('data-dropdown-hover data-dropdown-active data-dropdown-tabbable');
          $this.parent().removeAttr('data-dropdown-nav-active').find('[data-dropdown-nav-active]').removeAttr('data-dropdown-nav-active');
          $this.find('[data-dropdown-container]').attr('aria-hidden', true);
          $this.find('[data-dropdown-mobile-toggle]').attr('aria-expanded', false);
        }

        function showMenu($this) {
          $this.closest('[data-nav]').attr('data-nav-open', '');
          $navDropdowns.removeAttr('data-dropdown-hover data-dropdown-active');
          $this.attr({
            'data-dropdown-active': '',
            'data-dropdown-tabbable': ''
          });
          $this.parents('[data-dropdown]').attr('data-dropdown-active', '');
          $this.parents('[data-dropdown-nav]').attr('data-dropdown-nav-active', '');
          $this.find('[data-dropdown-container]').attr('aria-hidden', false);
          $this.find('> [data-dropdown-mobile-toggle]').attr('aria-expanded', true);
        }
      }

      function mobileMenuToggle() {
        $mobileNavToggles.on('click keydown', function (e) {
          if ($breakpoint === 'xs') {
            if (e.type === 'click' || e.keyCode === 13) {
              e.preventDefault();

              if ($mobileNav.attr('aria-expanded') === 'false') {
                $('body').attr('data-mobile-menu-active', '');
                $mobileNav.addClass('in').attr('aria-expanded', true);
                $mobileNavToggles.removeClass('collapsed').attr('aria-expanded', true);
                $mobileNav.find('a:first').focus();
              } else {
                $('body').removeAttr('data-mobile-menu-active');
                $mobileNav.removeClass('in').attr('aria-expanded', false);
                $mobileNavToggles.addClass('collapsed').attr('aria-expanded', false);
                clearMenus();
                $mobileNavToggles.focus();
              }
            }
          }
        });

        $mobileNav.find('> div[data-mobile-dropdown-tab-start]').on('focus', function () {
          if ($breakpoint === 'xs') {
            $(this).parent().find('a:last-of-type').focus();
          }
        });

        $mobileNav.find('> div[data-mobile-dropdown-tab-end]').on('focus', function () {
          if ($breakpoint == 'xs') {
            $(this).parent().find('a:first').focus();
          }
        });

        $mobileNavClear.on('click', function () {
          if ($breakpoint === 'xs') {
            clearMenus();
          }
        });
      }

      function clearMenus() {
        $('[data-nav]').removeAttr('data-nav-open');
        $('[data-dropdown]').removeAttr('data-dropdown-hover data-dropdown-active data-dropdown-tabbable');
        $('[data-dropdown-nav]').removeAttr('data-dropdown-nav-active');
        $('[data-dropdown-container]').attr('aria-hidden', true);
        $('[data-dropdown-mobile-toggle]').attr('aria-expanded', false);
      }
    }
  };

  /**
   * Adjust the content area position from top based on menu height
   */
  Drupal.behaviors.tfnsw_main_navigation = {
    attach: function (context, settings) {

      var fixedHeader = document.getElementById('fixedHeader');
      var $stickyWidget = $('.tfnsw-sticky-side-widget');
      var stickyWidgetBorder = 0;

      if($stickyWidget.length){
        stickyWidgetBorder = parseInt($stickyWidget.css('border-top-width'));
      }

      var adjustStickyHeader = function(offset){

        //Height of the menu
        var totalHeight = fixedHeader ? fixedHeader.clientHeight - stickyWidgetBorder : 0;
        //Get the height of preview nav bar if present
        var previewNavBarHeight = $('.user-logged-in .node-preview-container').length > 0 ?
          parseInt($('.user-logged-in .node-preview-container').height()) : 0;
        //Start the content area after the sticky menu
        $('.tfnsw-sticky-header-spacer-new').css({'height' : totalHeight + previewNavBarHeight});
        //Start the site menu after the admin menu if present
        $('#fixedHeader').css({'top' : offset + previewNavBarHeight});
      };

      $(function(){
        var offset = parseInt($('body').css('padding-top'));
        //Adjust the position on page load
        adjustStickyHeader(offset);
      });

      new ResizeSensor(fixedHeader, function() {

        //Adjust the position when menu size changes
        adjustStickyHeader();
      });
    }
  };

  /**
   * Adjust mega nav columns based on curated nav parameters
   */
  Drupal.behaviors.tfnsw_mega_nav_curated = {
    attach: function (context, settings) {

      var $megaMenuList = $('.mega-menu--list'),
        $breakpoint = Drupal.tfnsw_bootstrap.tfnsw_breakpoint.call(),
        $primaryNav = $('#primary-nav');

      var $megaContainer = $('li.mega-menu>[data-dropdown-container]');

      assignTopMegaContainer();

      //initialise style if it is not mobile
      if ( $megaMenuList.length && $breakpoint !== 'xs')
        styleEachMegaMenu();
      else
        $primaryNav.attr('data-previous-bp', $breakpoint);

      function assignTopMegaContainer(){
        if ( !$megaContainer.length)
          return false;

        var top,
          $fixedHeader = $('#fixedHeader');

        if($breakpoint !== 'xs' && $fixedHeader.length)
          top = $fixedHeader[0].getBoundingClientRect().height - 2;
        else
          top = '';

        $megaContainer.css('top', top);
      }

      /* For each second level Nav Items :
      ** - assign class to define number of columns and width
      ** - rearrange items in the DOM
      ** @ maxItemsPerCol = max number of items that can be displayed in each column. Value is Content Manageable
      */
      function styleEachMegaMenu(){

        var nColsPerRow = setNumColsPerRow();

        $primaryNav.attr('data-previous-bp', $breakpoint);

        $megaMenuList.each( function(){

          var $this = $(this),
            $secondaryNav = $this.find('.second-nav'),
            $secondaryNavItems = $secondaryNav.find('li[data-dropdown]'),
            maxItemsPerCol = $this.data('rows-per-column'),
            _items = [];

          //assign class to each second level navigation to identify in how many columns the content will be displayed
          $secondaryNavItems.each(function(index){

            var $this = $(this),
              numberItems = $this.find('li').length,
              numberColumns = Math.ceil(numberItems /maxItemsPerCol),
              columnClass ="",
              _itemIndexAndColumns={
                "index": "",
                "numberColumns":""
              };

            switch (numberColumns){
              case 1: columnClass = 'column-count--1';
                break;
              case 2: columnClass = 'column-count--2';
                break;
              case 3: columnClass = 'column-count--3';
                break;
              default: if(numberColumns >= nColsPerRow)
                columnClass = 'column-count--' + nColsPerRow;
              else
                columnClass = 'column-count--1';
                break;
            }

            //if more classes are added, conside turning this into a function
            $this.removeClass('column-count--1 column-count--2 column-count--3 column-count--4');

            $this.addClass(columnClass);

            _itemIndexAndColumns.index = index;
            _itemIndexAndColumns.numberColumns = numberColumns;

            _items.push(_itemIndexAndColumns);
          });

          //arrange Items in optimal space
          var _arrangedItems = arrangeItems(_items);

          //arrange items in the DOM
          $.each(_arrangedItems, function(index, el){

            var $el = $secondaryNavItems.eq(el.index);
            var $prev = $secondaryNav.find('li[data-dropdown]').last();

            $el.insertAfter($prev);
          });
        });

      }

      /* Place elements in optimal position based on available horizontal space.
      ** Each second level has a different width depending on the columns to display
      ** - Desktop: max 4 columns
      ** - Tablet: max 3 columns
      */
      function arrangeItems(_items){
        var _sortedItems = [],
          _arrangedItems =  [],
          complimentary,
          nColsPerRow = setNumColsPerRow();

        //sort items by number of columns, from highest to 1
        _sortedItems = _items.sort(function (a, b){
          return (a.numberColumns < b.numberColumns) ? 1 : ((a.numberColumns > b.numberColumns) ? -1 : 0);
        });

        while(_sortedItems.length > 0){

          var item = _sortedItems[0],
            numberColumns = item.numberColumns,
            complimentary= nColsPerRow - numberColumns;


          if(complimentary === 0){
            _arrangedItems.push(item);
            _sortedItems.splice(0, 1);
          }
          else{
            _arrangedItems.push(item);
            _sortedItems.splice(0, 1);

            for( var i = 0, l = _sortedItems.length; i < l; i++ ) {

              var el = _sortedItems[i];

              if (el.numberColumns == complimentary){
                _arrangedItems.push(el);
                _sortedItems.splice(i, 1);
                break;
              }
            }

          }
        }

        return _arrangedItems;
      };

      // grid layout depends on device width
      function setNumColsPerRow(){
        var nColsPerRow;

        $breakpoint = $('html').attr('data-current-breakpoint');

        switch($breakpoint){
          case 'sm' : nColsPerRow = 3;
            break;
          default   : nColsPerRow = 4;
            break;
        }

        return nColsPerRow;
      }

      //initialise style again if needed on resize
      $(window).on('tfnswBreakpointChange', function(event){
        var $previousBp = $primaryNav.attr('data-previous-bp'),
          $currentbreakpoint = event.detail.breakpoint;

        if ( event.detail.breakpoint !== 'xs' || ($currentbreakpoint !== $previousBp) ){
          styleEachMegaMenu();
        }

        assignTopMegaContainer();
      });
    }
  };
})(jQuery, Drupal, window);
;
/**
 * @file
 * Attaches search behaviors.
 */

(function ($, Drupal, window) {

  "use strict";

  /**
   * TFNSW_bootstrap Search Label .
   *
   */
  Drupal.behaviors.tfnsw_search_label = {
    attach: function (context, settings) {
      var $searchForms = $(context).find('.search-form');

      if ( $searchForms.length > 0 ){
        init();
      }

      function init() {
        $searchForms.each(function(){
          var $form = $(this).find('form');
          var $input = $(this).find('input');

          if ( $input.val() !== '' ){
            $form.attr('data-search-focused', '');
          }

          $input.on('blur', function(){
            if ( $input.val() === '' ){
              $form.removeAttr('data-search-focused');
            }
          }).on('focus', function(){
            $form.attr('data-search-focused', '');
          });
        });
      }
    }
  };

  /**
   * Client side behaviors for the search dropdown
   */
  Drupal.behaviors.tfnsw_search_dropdown = {
    attach: function (context, settings) {

      var searchPlaceholder = '';

      //Place the focus on the search text box when search form expanded
      $('#searchCollapse').on('shown.bs.collapse', function () {
        $('#edit-keys', $(this)).focus();
      });

      //Remove placeholder from search text box to avoid screen reader reading it
      $('#edit-keys').on('focus', function () {
        searchPlaceholder = $(this).attr('placeholder');
        $(this).attr('placeholder', '');
      });

      //Adding the back the placeholder when focus is out
      $('#edit-keys').on('focusout', function () {
        $(this).attr('placeholder', searchPlaceholder);
      });
    }
  };
})(jQuery, Drupal, window);
;
/**
 * @file
 * Attaches opal logo svg behavior.
 */

(function ($, Drupal, window) {

  "use strict";

  /**
   * Dynamically apply width and height to opal logo.
   *
   */
  Drupal.behaviors.opal_logo_svg = {
    attach: function (context, settings) {
      $(context).find('.opal-logo-svg').once('opal-logo-svg').each(function (index, entityElement) {
        var parentElement = $(this).parent();
        if (parentElement.length > 0) {
          var width = parentElement.outerWidth();
          var height = parentElement.outerHeight();
          $(this).attr('width', width);
          $(this).attr('height', height);
        }
      });
    }
  };
})(jQuery, Drupal, window);
;
/**
 * @file
 * Attaches responsive table behavior.
 */

(function ($, Drupal, window) {

  "use strict";

  /**
   * Responsive table width.
   */
  Drupal.behaviors.tfnsw_responsive_table_width = {
    attach: function (context, settings) {
      var $tableCells = $(context).find('td[data-tablesaw-width], th[data-tablesaw-width]');

      if ( $tableCells.length > 0 ){
        init();
      }

      function init() {
        $tableCells.each(function(){
          $(this).css('width', $(this).attr('data-tablesaw-width') + '%');
        });
      }
    }
  };
})(jQuery, Drupal, window);
;
/**
 * @file
 * Attaches behaviors for side widget tab hover state.
 */

(function ($, Drupal, window) {

  "use strict";

  /**
   * Side widget tab hover state removal in touch devices
   */
  Drupal.behaviors.tfnsw_side_widget_tab_hover = {
    attach: function (context, settings) {

      $(function(){
        /**
         * Removing any hover state class
         * in case this is a touch screen
         * device.
         *
         */
        var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

        if (touch) { // remove all :hover stylesheets
          try { // prevent exception on browsers not supporting DOM styleSheets properly
            for (var styleSheetFiles in document.styleSheets) {
              var styleSheet = document.styleSheets[styleSheetFiles];
              if (!styleSheet.rules || !Array.isArray(styleSheet.rules) || (Array.isArray(styleSheet.rules) && styleSheet.rules.length === 0) ) continue;

              for (var rulesInStyleSheets = styleSheet.rules.length - 1; rulesInStyleSheets >= 0; rulesInStyleSheets--) {
                if (!styleSheet.rules[rulesInStyleSheets] ||  !styleSheet.rules[rulesInStyleSheets].selectorText) continue;

                if (styleSheet.rules[rulesInStyleSheets].selectorText.match('.tab-button:hover') ||
                  styleSheet.rules[rulesInStyleSheets].selectorText.match('.widget-button__button:hover')) {
                  styleSheet.deleteRule(rulesInStyleSheets);
                }
              }
            }

            $('.tp-main #tp-tabs .tfnsw-nav-tabs li>a').addClass('touch-tab-hover');
          } catch (ex) {
            console.error(ex);
          }
        }
      });
    }
  };
})(jQuery, Drupal, window);
;
/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.ResizeSensor = factory();
    }
}(typeof window !== 'undefined' ? window : this, function () {

    // Make sure it does not throw in a SSR (Server Side Rendering) situation
    if (typeof window === "undefined") {
        return null;
    }
    // Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
    // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
    // would generate too many unnecessary events.
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (fn) {
            return window.setTimeout(fn, 20);
        };

    /**
     * Iterate over each of the provided element(s).
     *
     * @param {HTMLElement|HTMLElement[]} elements
     * @param {Function}                  callback
     */
    function forEachElement(elements, callback){
        var elementsType = Object.prototype.toString.call(elements);
        var isCollectionTyped = ('[object Array]' === elementsType
            || ('[object NodeList]' === elementsType)
            || ('[object HTMLCollection]' === elementsType)
            || ('[object Object]' === elementsType)
            || ('undefined' !== typeof jQuery && elements instanceof jQuery) //jquery
            || ('undefined' !== typeof Elements && elements instanceof Elements) //mootools
        );
        var i = 0, j = elements ? elements.length : 0;
        if (isCollectionTyped) {
            for (; i < j; i++) {
                callback(elements[i]);
            }
        } else {
            callback(elements);
        }
    }

    /**
     * Class for dimension change detection.
     *
     * @param {Element|Element[]|Elements|jQuery} element
     * @param {Function} callback
     *
     * @constructor
     */
    var ResizeSensor = function(element, callback) {
        /**
         *
         * @constructor
         */
        function EventQueue() {
            var q = [];
            this.add = function(ev) {
                q.push(ev);
            };

            var i, j;
            this.call = function() {
                for (i = 0, j = q.length; i < j; i++) {
                    q[i].call();
                }
            };

            this.remove = function(ev) {
                var newQueue = [];
                for(i = 0, j = q.length; i < j; i++) {
                    if(q[i] !== ev) newQueue.push(q[i]);
                }
                q = newQueue;
            }

            this.length = function() {
                return q.length;
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {Function}    resized
         */
        function attachResizeEvent(element, resized) {
            if (!element) return;
            if (element.resizedAttached) {
                element.resizedAttached.add(resized);
                return;
            }

            element.resizedAttached = new EventQueue();
            element.resizedAttached.add(resized);

            element.resizeSensor = document.createElement('div');
            element.resizeSensor.className = 'resize-sensor';
            var style = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
            var styleChild = 'position: absolute; left: 0; top: 0; transition: 0s;';

            element.resizeSensor.style.cssText = style;
            element.resizeSensor.innerHTML =
                '<div class="resize-sensor-expand" style="' + style + '">' +
                    '<div style="' + styleChild + '"></div>' +
                '</div>' +
                '<div class="resize-sensor-shrink" style="' + style + '">' +
                    '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' +
                '</div>';
            element.appendChild(element.resizeSensor);

            if (element.resizeSensor.offsetParent !== element) {
                element.style.position = 'relative';
            }

            var expand = element.resizeSensor.childNodes[0];
            var expandChild = expand.childNodes[0];
            var shrink = element.resizeSensor.childNodes[1];
            var dirty, rafId, newWidth, newHeight;
            var lastWidth = element.offsetWidth;
            var lastHeight = element.offsetHeight;

            var reset = function() {
                expandChild.style.width = '100000px';
                expandChild.style.height = '100000px';

                expand.scrollLeft = 100000;
                expand.scrollTop = 100000;

                shrink.scrollLeft = 100000;
                shrink.scrollTop = 100000;
            };

            reset();

            var onResized = function() {
                rafId = 0;

                if (!dirty) return;

                lastWidth = newWidth;
                lastHeight = newHeight;

                if (element.resizedAttached) {
                    element.resizedAttached.call();
                }
            };

            var onScroll = function() {
                newWidth = element.offsetWidth;
                newHeight = element.offsetHeight;
                dirty = newWidth != lastWidth || newHeight != lastHeight;

                if (dirty && !rafId) {
                    rafId = requestAnimationFrame(onResized);
                }

                reset();
            };

            var addEvent = function(el, name, cb) {
                if (el.attachEvent) {
                    el.attachEvent('on' + name, cb);
                } else {
                    el.addEventListener(name, cb);
                }
            };

            addEvent(expand, 'scroll', onScroll);
            addEvent(shrink, 'scroll', onScroll);
        }

        forEachElement(element, function(elem){
            attachResizeEvent(elem, callback);
        });

        this.detach = function(ev) {
            ResizeSensor.detach(element, ev);
        };
    };

    ResizeSensor.detach = function(element, ev) {
        forEachElement(element, function(elem){
            if (!elem) return
            if(elem.resizedAttached && typeof ev == "function"){
                elem.resizedAttached.remove(ev);
                if(elem.resizedAttached.length()) return;
            }
            if (elem.resizeSensor) {
                if (elem.contains(elem.resizeSensor)) {
                    elem.removeChild(elem.resizeSensor);
                }
                delete elem.resizeSensor;
                delete elem.resizedAttached;
            }
        });
    };

    return ResizeSensor;

}));
;
/**
 * @file
 * Attaches main menu behaviors.
 */

(function ($, Drupal, window) {

  "use strict";

  /**
   * TFNSW_bootstrap menu.
   *
   */
  Drupal.behaviors.tfnsw_footer_menu = {
    attach: function (context, settings) {
      var $breakpoint = Drupal.tfnsw_bootstrap.tfnsw_breakpoint.call(),
        $footerRibbonBottomXs = $('.footer-ribbon--bottom-xs'),
        $footerRibbonTopXs = $('.footer-ribbon--top-xs');

      swapRibbonList();

      $(window).on('tfnswBreakpointChange', function(e){
        $breakpoint = e.detail.breakpoint;

        swapRibbonList();
      });

      function swapRibbonList(){
        if ( $breakpoint === 'xs' )
          $footerRibbonTopXs.insertBefore($footerRibbonBottomXs);
        else
          $footerRibbonBottomXs.insertBefore($footerRibbonTopXs);
      }
    }
  };
})(jQuery, Drupal, window);;
/**
 * @file
 * Attaches show/hide functionality to checkboxes in the "Processor" tab.
 */

(function ($, Drupal, window) {

  "use strict";

  /**
   * TFNSW_bootstrap Carousel .
   *
   */
  Drupal.behaviors.tfnsw_carousel = {
    attach: function (context, settings) {

      var $activated = false;
      var $carousels = $('.tfnsw-carousel-deluxe');
      var $breakpoint = $('html').data('current-breakpoint');
      var slidesNum = $carousels.find('.carousel-inner .item').length;

      $carousels.find('.carousel-inner .item:first-child').addClass('active');

      if($carousels)
        init($carousels);

      function init(carousels) {
        $activated = true;
        carousels.each(function(){
          var $carousel = $(this);
          var $carouselItem = $carousel.find('.carousel-inner .item');
          var $carouselPlay = $carousel.find('[data-carousel-play]');
          var $carouselPause = $carousel.find('[data-carousel-pause]');
          var $carouselNext = $carousel.find('[data-carousel-next]');
          var $carouselPrev = $carousel.find('[data-carousel-prev]');
          var $carouselPager = $carousel.find('[data-carousel-pager]');

          $.each($carouselItem, function(index, value){
            $carouselPager.append(carouselPagerItem(index, index, value, slidesNum, $(this)));
          });

          $carouselPlay.on('click', function() {
            $carousel.carousel('cycle');
            $carousel.removeAttr('data-carousel-paused');
            $carouselPause.focus();
          });

          $carouselPause.on('click', function() {
            $carousel.carousel('pause');
            $carousel.attr('data-carousel-paused', '');
            $carouselPlay.focus();
          });

          $carouselNext.on('click', function(e) {
            e.preventDefault();
            $carousel.carousel('next');
          });

          $carouselPrev.on('click', function(e) {
            e.preventDefault();
            $carousel.carousel('prev');
          });

          $carouselPager.find('a[data-carousel-pager-item]').on('click', function(e) {
            e.preventDefault();

            var index = $(this).data('slide-to');

            slideOnPagerItemClick(index, $carousel);
          });

          $carousel.carousel().attr('data-carousel-active', '');

          $('.carousel-inner div.item-image').hover( function () {
            $carousel.carousel('pause');
            $carousel.attr('data-carousel-paused', '');
          });

          $('.carousel-inner div.item-image').mouseleave( function () {
            $carousel.carousel('cycle');
            $carousel.removeAttr('data-carousel-paused');
          });

          /* Accessibility for carousel */
          $('.js-carousel-click').keypress(function (e) {
            $(this).find('a')[0].click();
          });

          $('.js-carousel-click a').keypress(function (e) {
            e.stopPropagation();
          });

          $('.js-carousel-click a').focus(function () {
            $carousel.carousel('pause');
            $carousel.attr('data-carousel-paused', '');
          });


          $('.js-carousel-click a').blur(function () {
            $carousel.carousel('cycle');
            $carousel.removeAttr('data-carousel-paused');
          });

          $('a[data-carousel-pager-item]').keypress(function (e) {
            e.preventDefault();
            $(this).click();
          });
        });
      }

      function carouselPagerItem(target, index, item, dataLength, context) {
        var active = index == 0 ? 'active' : '';
        var targetReal = parseInt(target)+1;

        return '<li class="' + active + '">' +
          '<a href="#" data-carousel-pager-item data-slide-to="' + target + '"  tabindex="0" role="button">' +
          '<span class="sr-only">slide '+targetReal+' of '+dataLength+' </span>' +
          '<span class="sr-only carousel-pager--sr-only"> (Current Item) </span>' +
          '</a>' +
          '</li>';
      }

      function slideOnPagerItemClick(index, $carousel){
        $carousel.carousel(index);

        $carousel.carousel('pause');
        $carousel.attr('data-carousel-paused', '');

        $carousel
          .find('.item-caption')
          .eq(index)
          .focus();
      }
    }
  };
})(jQuery, Drupal, window);
;
/**
 * @file
 * Attaches ajax loading functionality.
 */

(function ($, Drupal, window) {

  "use strict";

  // Sets the progress indicator at the bottom of event view.
  Drupal.behaviors.ajaxloadinMessage = {
    attach: function (context, settings) {

      // Add loadnig ajax-progress text to load move events.
      if (typeof Drupal.Ajax != "undefined" && typeof Drupal.Ajax.prototype != "undefined") {
        if (settings.path.currentPath == '/apps' ||
          settings.path.currentPath == '/operators' ||
          settings.path.currentPath == '/transport-operators') {

          Drupal.Ajax.prototype.beforeSubmit = function (form_values, element, options) {

            $(".view-id-transport_apps.view-display-id-block_1 .view-content, .view-id-transport_operators_view.view-display-id-block_1 .view-content").html('<div class="list-group" role="alert" aria-live="assertive" aria-atomic="true"><div class="list-group-item text-center" data-search-suggestions-searching="">Searching…</div></div>').focus();
            element.find('input[type="checkbox"]').closest('.checkbox-inline-custom').addClass('disabled').attr('disabled');
            element.find('input[type="checkbox"]').addClass('disabled').attr('disabled', 'true');
            element.find('input[type="radio"]').closest('.btn-default').addClass('disabled').attr('disabled');
            element.find('input[type="radio"]').addClass('disabled').attr('disabled', 'true');
          };

          // Add loadnig ajax-progress text to load move events.
          Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
            this.progress.element = $('<div class="ajax-progress text-center h3">Loading…</div>');
            $('.js-pager__items .pager__item').before(this.progress.element);
          };

        }

      }
    }
  };
})(jQuery, Drupal, window);
;
/**
 * @file
 * Attaches operator functionality.
 */

(function ($, Drupal, window) {

  "use strict";

  Drupal.behaviors.transport_operators_autosubmit = {
    attach: function(context, settings){

      // The change event bubbles so we only need to bind it to the outer form.
      $(".view-id-transport_operators_view.view-display-id-block_1 .form-checkbox").on('change',function(e){
        $(e.target.form).find('#transport-operator-filter-submit').trigger('click');
        e.preventDefault();
      });
    }
  };
})(jQuery, Drupal, window);
;
/**
 * @file
 * Attaches show/hide functionality to checkboxes in the "Processor" tab.
 */

(function ($, Drupal, window) {

  "use strict";

  //Keeps track of last checkbox or radio button pressed.
  var lastChanged = '';
  //Keeps track if enter key was pressed before ajax request.
  var enterKeyPressed = false;

  // Add active class in radio button label when they are grouped.
  Drupal.behaviors.radioButtonState = {
    attach: function (context, settings) {
      $(context).find('.btn-default [type="radio"]').change(function() {
        $(this).closest('.btn-group').find('.btn-default.active').removeClass('active');
        $(this).parent().toggleClass('active');
      });
    }
  };

  Drupal.behaviors.checkbox_radio_space_key = {
    attach: function(context, settings){
      //This will trigger check/uncheck event if spacebar is pressed
      $(document).on('keydown', ".tfnsw-styled-checkbox" , function(e){
        if(e.keyCode === 32){
          e.preventDefault();
          $("#" + $(this).find('label').attr('for')).prop('checked', !$("#" + $(this).find('label').attr('for')).prop('checked')).trigger('change');
        }
      });
      $(document).on('keydown', ".tfnsw-styled-radio" , function(e){
        if(e.keyCode === 32){
          e.preventDefault();
          $("#" + $(this).parents('label').attr('for')).prop('checked', !$("#" + $(this).parents('label').attr('for')).prop('checked')).trigger('change');
        }
      });

      //Save the last interacted checkbox to re focus after ajax load.
      $(document).on('change', "input[type='checkbox']" , function(e){
        lastChanged = $(this).attr('data-drupal-selector');
      });

      //Save the last interacted radio to re focus after ajax load.
      $(document).on('change', "input[type='radio']" , function(e){
        lastChanged = 'edit-field-app-os-target-id-' + $(this).attr('value');
      });

      $(document).on('keydown', '.transport-operator-filter-input', function (e) {
        if(e.keyCode === 13){
          e.preventDefault();
          enterKeyPressed = true;
          $("#transport-operator-filter-submit").trigger('click');
        }
      });

      $( document ).ajaxComplete(function( event, xhr, settings ) {

        if(lastChanged !== '') {

          //Re-focus based on saved last input.
          var checkBoxId = $("input[data-drupal-selector^='" + lastChanged + "']").attr('id');

          if(checkBoxId !== undefined && checkBoxId !== '') {

            $("#" + checkBoxId + "-label").parents('.tfnsw-styled-checkbox').trigger('focus');
            $("#" + checkBoxId + "-label").find('.tfnsw-styled-radio').trigger('focus');
            lastChanged = '';
          }
        } else if(enterKeyPressed) {

          $('#transport-operator-filter-submit').trigger('focus');
          enterKeyPressed = false;
        }
      });
    }
  };
})(jQuery, Drupal, window);
;
/**
 * @file
 * Attaches accordion functionality.
 */

(function ($, Drupal, window) {

  "use strict";

  Drupal.behaviors.tfnsw_accordion_url_expand = {
    attach: function (context, settings) {
      if(typeof context.URL != "undefined" && typeof context.URL.match != "undefined"){
        if ( context.URL.match('#') && !context.URL.match('#/')) {
          $('#' + context.URL.split('#')[1]).addClass('in').removeClass('collapsed');
        }
      }
    }
  };

  //Opens and hide accordions based on # on the url.
  Drupal.behaviors.accordion_anchor = {
    attach: function (context, settings){

      $(function () {
        showAccordion(location.hash);
        $('a[href*=\'#accordion-\']:not([data-toggle])').on('click', function (e){

          var href = $(this).attr('href');
          var startVhash = href.substring(0, 2);

          if(startVhash.indexOf('#/') === -1) {

            var hrefParts = href.split('#');

            if(hrefParts.length > 1 &&
              hrefParts[1] !== '' &&
              hrefParts[1] !== undefined) {
              if($('#' + hrefParts[1]).length > 0) {
                showAccordion('#' + hrefParts[1]);
                e.preventDefault();
              }
            }
          }
        });
      });

      function showAccordion(vhash){

        if(vhash && vhash.length > 1){

          var startVhash = vhash.substring(0, 2);
          var accordionBodyId = vhash;

          if(startVhash.indexOf('#/') === -1){

            var anchor = vhash.substring(1, vhash.length);

            if($(accordionBodyId).hasClass('panel-collapse') &&
              vhash.indexOf('-content') !== -1){

              $(accordionBodyId).collapse('show');
              anchor += '-header';
            }

            if($('#' + anchor).length > 0) {

              //Wait for ajax to complete
              setTimeout(function () {
                //@todo: create a global function to calculate the header offset
                // and update top nav to use that global function
                var fixedHeader = document.getElementById('fixedHeader');
                var $stickyWidget = $('.tfnsw-sticky-side-widget');
                var stickyWidgetBorder = 0;

                if($stickyWidget.length){
                  stickyWidgetBorder = parseInt($stickyWidget.css('border-top-width'));
                }

                //Height of the menu
                var totalHeight = fixedHeader ? fixedHeader.clientHeight - stickyWidgetBorder : 0;
                //Get the height of preview nav bar if present
                var previewNavBarHeight = $('.user-logged-in .node-preview-container').length > 0 ?
                  parseInt($('.user-logged-in .node-preview-container').height()) : 0;
                var topOffset = $('#' + anchor).offset().top;
                //Calculate top offset by removing the sticky nav
                topOffset -= (totalHeight + previewNavBarHeight);

                $('html, body').animate({
                  scrollTop: topOffset + 'px'
                });
              }, 500);
            }
          }
        }
      }
    }
  };
})(jQuery, Drupal, window);
;
FeedbackAssist = (function () {
    // Instance stores a reference to the Singleton
    var instance;
    var top = 100;
    var feedbackUrl = 'http://www.transportnsw.info/contact-us/feedback';
    var feedbackType;
    var mode = {
        train: true,
        bus: true,
        ferry: true,
        lightRail: true,
        nswTC: true,
        ticketsAndFares: true
    };

    function init() {
        var unselectedAllTypes = function () {
            var types = document.getElementsByClassName('feedback-type');
            for (var i = 0; i < types.length; i++) {
                types[i].className = 'feedback-type button';
            }
        };

        var selectType = function (event) {
            unselectedAllTypes();
            event.currentTarget.className = 'feedback-type button selected';
            feedbackType = event.currentTarget.attributes["feedback-type"].nodeValue;
            document.getElementById('feedback-container').style.right = '230px';
            document.getElementsByClassName('fba-mode-wrapper')[0].className = 'fba-mode-wrapper fba-show';
        };

        var getFeedbackTypeString = function(feedbackType) {
            var typeString = '';
            switch(feedbackType) {
                case "1":
                    typeString = 'suggestion';
                    break;
                case "2":
                    typeString = 'complaint';
                    break;
                case "3":
                    typeString = 'compliment';
                    break;
                default:
                    break;
            }
            return typeString;
        }

        var redirectUrl = function(event) {
            var transportMode = event.currentTarget.attributes["transport-mode"].nodeValue;
            var feedbackTypeString = '';

            if (feedbackType) {
                feedbackTypeString = getFeedbackTypeString(feedbackType);
            }

            if (transportMode === 'train') {
                window.location  = feedbackUrl + '/train-feedback/' + feedbackType;
            } else if (transportMode === 'bus') {
                window.location  = feedbackUrl + '/bus-feedback/' + feedbackType;
            } else if (transportMode === 'ferry') {
                window.location  = feedbackUrl + '/ferry-feedback/' + feedbackType;
            } else if (transportMode === 'light rail') {
                window.location  = feedbackUrl + '/light-rail-feedback/' + feedbackType;
            } else if (transportMode === 'NSWTrain') {
                window.location  = feedbackUrl + '/regional-trains-coaches-feedback/' + feedbackType;
            } else if (transportMode === 'Non-modal') {
                window.location  = feedbackUrl + '/tickets-fares-feedback#/?type=' + feedbackTypeString;
            }
        };

        var selectTransportMode = function (event) {
            redirectUrl(event);
        };

        var enterTransportMode = function (event) {
            if (event.keyCode === 13) {
                redirectUrl(event);
            }
        };

        var touchYourFeedback = function (e) {
            //show emotion
            var typeWrapper = document.getElementsByClassName('fba-type-wrapper')[0];
            typeWrapper.className = 'fba-type-wrapper fba-type-show';
            e.preventDefault();
        };

        var closePanel = function () {
            unselectedAllTypes();
            document.getElementById('feedback-container').style.right = '0px';

            var typeWrapper = document.getElementsByClassName('fba-type-wrapper')[0];
            typeWrapper.className = 'fba-type-wrapper';

            setTimeout( function() {
                document.getElementsByClassName('fba-mode-wrapper')[0].className = 'fba-mode-wrapper';
            }, 200);
        };


        var getModeClass = function(mode) {
            return mode ? '' : ' fba-hide';
        };

        var loadFeedbackAssist = function () {
            var s = '<div id="feedback-container" class="feedback-container" style="top:' + top + ';" aria-labelledby="fba-title">' +
                                '<div class="fba-title-wrapper">' +
                                    '<h1 class="fba-title">Your Feedback</h1>' +
                                '</div>' +
                                '<div class="fba-type-wrapper" role="tablist">' +
                                    '<div class="fba-type-title">Your Feedback' +
                                        '<button class="close-type">' +
                                            '<svg class="svg-inline--fa fa-times fa-w-11" aria-hidden="true" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg="">' +
                                                '<title>Close</title>' +
                                                '<!-- -->' +
                                                '<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>' +
                                                '<!-- -->' +
                                            '</svg>' +
                                        '</button>' +
                                    '</div>' +
                                    '<div class="fba-type-button">' +
                                        '<span role="tab" aria-controls="fba-panel-feedback-compliment" feedback-type="3" id="fba-nav-btn-compliment" class="feedback-type button" aria-selected="false" tabindex="0">' +
                                            '<span class="btn__content" tabindex="-1">' +
                                            '<svg focusable="false" class="svg-inline--fa fa-smile fa-w-16" aria-hidden="true" data-prefix="far" data-icon="smile" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg="">' +
                                                '<title>Happy face</title>' +
                                                '<!-- -->' +
                                                '<path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm84-143.4c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.6-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.2-8.4-25.3-7.1-33.8 3.1zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"></path>' +
                                                '<!-- -->' +
                                            '</svg>' +
                                            '</span>' +
                                        '</span>' +
                                        '<p>Give us a compliment</p>' +
                                    '</div>' +
                                    '<div class="fba-type-button">' +
                                        '<span role="tab" aria-controls="fba-panel-feedback-complaint" feedback-type="2" id="fba-nav-btn-complaint" class="feedback-type button" aria-selected="false" tabindex="0">' +
                                            '<span class="btn__content" tabindex="-1">' +
                                            '<svg focusable="false" class="svg-inline--fa fa-frown fa-w-16" aria-hidden="true" data-prefix="far" data-icon="frown" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg="">' +
                                                '<title>Sad face</title>' +
                                                '<!-- -->' +
                                                '<path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.5 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c4.8 5.7 11.6 8.6 18.5 8.6 5.4 0 10.9-1.8 15.4-5.6 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z"></path>' +
                                                '<!-- -->' +
                                            '</svg>' +
                                            '</span>' +
                                        '</span>' +
                                        '<p>Tell us about your complaint</p>' +
                                    '</div>' +
                                    '<div class="fba-type-button">' +
                                        '<span role="tab" aria-controls="fba-panel-feedback-suggestion" feedback-type="1" id="fba-nav-btn-suggestion" class="feedback-type button" aria-selected="false" tabindex="0">' +
                                            '<span class="btn__content" tabindex="-1">' +
                                            '<svg focusable="false" class="svg-inline--fa fa-lightbulb fa-w-12" aria-hidden="true" data-prefix="far" data-icon="lightbulb" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg="">' +
                                                '<title>Light bulb</title>' +
                                                '<!-- -->' +
                                                '<path fill="currentColor" d="M272 428v28c0 10.449-6.68 19.334-16 22.629V488c0 13.255-10.745 24-24 24h-80c-13.255 0-24-10.745-24-24v-9.371c-9.32-3.295-16-12.18-16-22.629v-28c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12zM128 176c0-35.29 28.71-64 64-64 8.837 0 16-7.164 16-16s-7.163-16-16-16c-52.935 0-96 43.065-96 96 0 8.836 7.164 16 16 16s16-7.164 16-16zm64-128c70.734 0 128 57.254 128 128 0 77.602-37.383 60.477-80.98 160h-94.04C101.318 236.33 64 253.869 64 176c0-70.735 57.254-128 128-128m0-48C94.805 0 16 78.803 16 176c0 101.731 51.697 91.541 90.516 192.674 3.55 9.249 12.47 15.326 22.376 15.326h126.215c9.906 0 18.826-6.078 22.376-15.326C316.303 267.541 368 277.731 368 176 368 78.803 289.195 0 192 0z"></path>' +
                                                '<!-- -->' +
                                            '</svg>' +
                                            '</span>' +
                                        '</span>' +
                                        '<p>Make a suggestion</p>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="fba-mode-wrapper" role="tablist">' +
                                    '<div class="fba-mode-title">Please select' +
                                        '<button class="close-mode">' +
                                            '<svg class="svg-inline--fa fa-times fa-w-11" aria-hidden="true" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg="">' +
                                                '<title>Close</title>' +
                                                '<!-- -->' +
                                                '<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>' +
                                                '<!-- -->' +
                                            '</svg>' +
                                        '</button>' +
                                    '</div>' +
                                    '<div class="fba-mode-item' + getModeClass(mode.train) + '">' +
                                        '<div class="tab transport-mode" transport-mode="train" role="tab" tabindex="0">' +
                                            '<div class="icon">' +
                                                '<svg id="tp_train" viewBox="0 0 30 30" width="100%" height="100%">' +
                                                    '<title>Train mode</title>' +
                                                    '<!-- -->' +
                                                    '<path fill="#f18500" stroke="#ccc" stroke-width="3" d="M15 28.58A13.58 13.58 0 1 1 28.58 15 13.6 13.6 0 0 1 15 28.58"></path>' +
                                                    '<path fill="#fff" d="M15 .26A14.74 14.74 0 1 0 29.74 15 14.76 14.76 0 0 0 15 .26m0 2.32A12.42 12.42 0 1 1 2.58 15 12.44 12.44 0 0 1 15 2.58"></path>' +
                                                    '<path fill="#fff" d="M13.76 23.52a.3.3 0 0 1-.27-.29V10.88h-4a.3.3 0 0 1-.27-.31v-2a.28.28 0 0 1 .27-.29h11.04a.28.28 0 0 1 .27.29v2a.3.3 0 0 1-.27.31h-4v12.35a.29.29 0 0 1-.29.29h-2.48z"></path>' +
                                                    '<!-- -->' +
                                                '</svg>' +
                                            '</div>' +
                                            '<div class="title">Train</div>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="fba-mode-item' + getModeClass(mode.bus) + '">' +
                                        '<div class="tab transport-mode" transport-mode="bus" role="tab" tabindex="0">' +
                                            '<div class="icon">' +
                                                '<svg id="tp_bus" viewBox="0 0 30 30" width="100%" height="100%">' +
                                                    '<title>Bus mode</title>' +
                                                    '<!-- -->' +
                                                    '<path fill="#00ade9" stroke="#ccc" stroke-width="3" d="M15 28.58A13.58 13.58 0 1 1 28.58 15 13.6 13.6 0 0 1 15 28.58"></path>' +
                                                    '<path fill="#fff" d="M15 .26A14.74 14.74 0 1 0 29.74 15 14.76 14.76 0 0 0 15 .26m0 2.32A12.42 12.42 0 1 1 2.58 15 12.44 12.44 0 0 1 15 2.58"></path>' +
                                                    '<path fill="#fff" d="M15.1 20.16c1.92 0 2.82-.46 2.82-2s-.94-2-2.42-2h-2.36v4h2zm2.42-8.34c0-1.35-.94-1.73-2.59-1.73h-1.79v3.69h2c1.73 0 2.4-.71 2.4-1.73v-.23zm-7.38 11V7.55h5.73c3 0 4.59 1.52 4.59 3.78v.33a3.26 3.26 0 0 1-2.17 3.21 3.28 3.28 0 0 1 2.63 3.46v.27c0 2.46-1.83 4.21-5.06 4.21h-5.72z"></path>' +
                                                    '<!-- -->' +
                                                '</svg>' +
                                            '</div>' +
                                            '<div class="title">Bus</div>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="fba-mode-item' + getModeClass(mode.ferry) + '">' +
                                        '<div class="tab transport-mode" transport-mode="ferry" role="tab" tabindex="0">' +
                                            '<div class="icon">' +
                                                '<svg id="tp_ferry" viewBox="0 0 30 30" width="100%" height="100%">' +
                                                    '<title>Ferry mode</title>' +
                                                    '<!-- -->' +
                                                    '<path fill="#5ab031" stroke="#ccc" stroke-width="3" d="M15 28.58A13.58 13.58 0 1 1 28.58 15 13.6 13.6 0 0 1 15 28.58"></path>' +
                                                    '<path fill="#fff" d="M15 .26A14.74 14.74 0 1 0 29.74 15 14.76 14.76 0 0 0 15 .26m0 2.32A12.42 12.42 0 1 1 2.58 15 12.44 12.44 0 0 1 15 2.58"></path>' +
                                                    '<path fill="#fff" d="M11.42 23.07a.27.27 0 0 1-.29-.29v-15h8.23a.29.29 0 0 1 .31.29v2a.29.29 0 0 1-.29.33h-5.25v4h4.82a.28.28 0 0 1 .27.31v2a.27.27 0 0 1-.27.29h-4.82v5.75a.28.28 0 0 1-.27.29h-2.44z"></path>' +
                                                    '<!-- -->' +
                                                '</svg>' +
                                            '</div>' +
                                            '<div class="title">Ferry</div>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="fba-mode-item' + getModeClass(mode.lightRail) + '">' +
                                        '<div class="tab transport-mode" transport-mode="light rail" role="tab" tabindex="0">' +
                                            '<div class="icon">' +
                                                '<svg id="tp_lightrail" viewBox="0 0 30 30" width="100%" height="100%">' +
                                                    '<title>Light rail mode</title>' +
                                                    '<!-- -->' +
                                                    '<path fill="#e62a32" stroke="#ccc" stroke-width="3" d="M15 28.58A13.58 13.58 0 1 1 28.58 15 13.6 13.6 0 0 1 15 28.58"></path>' +
                                                    '<path fill="#fff" d="M15 .26A14.74 14.74 0 1 0 29.74 15 14.76 14.76 0 0 0 15 .26m0 2.32A12.42 12.42 0 1 1 2.58 15 12.44 12.44 0 0 1 15 2.58"></path>' +
                                                    '<path fill="#fff" d="M10.95 22.14v-15a.28.28 0 0 1 .27-.27h2.46a.28.28 0 0 1 .27.27V19.5h6a.29.29 0 0 1 .29.36v2a.28.28 0 0 1-.27.29h-9z"></path>' +
                                                    '<!-- -->' +
                                                '</svg>' +
                                            '</div>' +
                                            '<div class="title">Light rail</div>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="fba-mode-item regional' + getModeClass(mode.nswTC) + '">' +
                                        '<div class="tab transport-mode" transport-mode="NSWTrain" role="tab" tabindex="0">' +
                                            '<div class="icon">' +
                                                '<svg id="tp_regional-train" viewBox="0 0 30 30" height="100%">' +
                                                    '<title>Regional Train and Regional Coach network icon</title>' +
                                                    '<!-- -->' +
                                                    '<path fill="#E26D23" stroke="#ccc" stroke-width="3" d="M15 28.58A13.58 13.58 0 1 1 28.58 15 13.6 13.6 0 0 1 15 28.58"></path>' +
                                                    '<path fill="#fff" d="M15 .26A14.74 14.74 0 1 0 29.74 15 14.76 14.76 0 0 0 15 .26m0 2.32A12.42 12.42 0 1 1 2.58 15 12.44 12.44 0 0 1 15 2.58"></path>' +
                                                    '<path fill="#fff" d="M13.76 23.52a.3.3 0 0 1-.27-.29V10.88h-4a.3.3 0 0 1-.27-.31v-2a.28.28 0 0 1 .27-.29h11.04a.28.28 0 0 1 .27.29v2a.3.3 0 0 1-.27.31h-4v12.35a.29.29 0 0 1-.29.29h-2.48z"></path>' +
                                                    '<!-- -->' +
                                                    '</svg>' +
                                                    '<svg id="tp_coach" viewBox="0 0 30 30" height="100%">' +
                                                    '<title>Coach</title>' +
                                                    '<!-- -->' +
                                                    '<path fill="#742283" stroke="#ccc" stroke-width="3" d="M15 28.41A13.41 13.41 0 1 1 28.41 15 13.43 13.43 0 0 1 15 28.41"></path>' +
                                                    '<path fill="#fff" d="M19.9 18.51c.34.12.28.38.16.76a5 5 0 0 1-4.85 3.27c-3.63 0-5.41-1.87-5.41-5.21V12.8c0-3.09 1.74-5.35 5.45-5.35 3.06 0 4.43 1.66 4.91 3.47a.46.46 0 0 1-.26.64l-1.7.52a.43.43 0 0 1-.62-.34A2.18 2.18 0 0 0 15.21 10c-1.68 0-2.53 1.21-2.53 3.11V17c0 1.9.9 3.05 2.55 3.05a2.23 2.23 0 0 0 2.35-1.86.46.46 0 0 1 .64-.32z"></path>' +
                                                    '<path fill="#fff" d="M15 2.58A12.42 12.42 0 1 1 2.58 15 12.44 12.44 0 0 1 15 2.58m0-2.32A14.74 14.74 0 1 0 29.74 15 14.76 14.76 0 0 0 15 .26"></path>' +
                                                    '<!-- -->' +
                                                '</svg>' +
                                            '</div>' +
                                            '<div class="title">NSW TrainLink</div>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="fba-mode-item' + getModeClass(mode.ticketsAndFares) + '">' +
                                        '<div class="tab transport-mode" transport-mode="Non-modal" role="tab" tabindex="0">' +
                                            '<div class="icon">' +
                                                '<svg id="tp_vendor" viewBox="0 0 60 52" height="100%">' +
                                                    '<title>Ticketing icon</title>' +
                                                        '<!-- -->' +
                                                        '<g fill="currentColor" fill-rule="evenodd">' +
                                                        '<path d="M9.818 28.13c-.7.702-.7 1.87 0 2.65.468.468 1.013.623 1.559.546.39-.078.78-.234 1.013-.546.312-.312.468-.623.545-1.013.078-.545-.077-1.169-.545-1.558-.623-.78-1.792-.78-2.572-.078"></path>' +
                                                        '<path d="M21.585 50.34l1.714-1.715-1.48-1.559-1.715 1.715c-.155.155-.39.39-.779 0L3.04 32.494c-.156-.155-.39-.39 0-.779L32.183 2.572c.156-.156.39-.39.779 0l4.13 4.13 1.48-1.481-4.13-4.13c-.779-.78-2.337-1.325-3.74 0L1.558 30.313c-.779.779-1.402 2.337 0 3.74l16.365 16.286c.7.701 2.337 1.325 3.662 0"></path>' +
                                                        '<path d="M18.624 33.118c.701-.702 1.87-.702 2.65 0 .467.467.623 1.013.545 1.558-.078.39-.234.78-.546 1.013a1.862 1.862 0 0 1-1.013.546c-.545.078-1.169-.078-1.558-.546-.857-.701-.857-1.87-.078-2.571m4.987 4.987c.701-.701 1.87-.701 2.65 0 .467.468.623 1.013.545 1.558-.078.39-.234.78-.546 1.013a1.862 1.862 0 0 1-1.013.546c-.545.078-1.168-.078-1.558-.546-.78-.623-.78-1.87-.078-2.571m4.987 4.987c.702-.701 1.87-.701 2.65 0 .467.468.623 1.013.545 1.559-.078.39-.234.779-.545 1.013a1.862 1.862 0 0 1-1.013.545c-.546.078-1.17-.078-1.559-.545-.78-.624-.78-1.793-.078-2.572m15.118-18.935l4.207-4.208.702-.702H45.196c-.078 0-.156-.078-.234-.078l-.078-.078c-.078-.077-.078-.155-.078-.233v-.935c.078-.156.156-.234.312-.234H50.806c.234 0 .39.156.39.39v5.766c0 .234-.156.39-.39.39h-.779c-.233 0-.39-.156-.39-.39v-3.429l-4.83 4.831c-.078.078-.234.078-.39.078-.078 0-.156 0-.156-.078l-.545-.545c-.156-.234-.156-.468 0-.545M14.338 36.702l8.961 8.962 1.48 1.48 2.884 2.883c.701.702 2.572 1.637 4.208 0l27.196-27.195c.7-.702 1.636-2.572 0-4.208L45.742 5.299c-.702-.701-2.572-1.637-4.208 0l-1.48 1.48-1.481 1.481-24.235 24.234c-.701.702-1.636 2.494 0 4.208"></path>' +
                                                    '</g>' +
                                                    '<!-- -->' +
                                                '</svg>' +
                                            '</div>' +
                                            '<div class="title">Tickets and fares</div>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="fba-mode-other"><a href="' + feedbackUrl + '">Other</a></div>' +
                                '</div>' +
                            '</div>';

            // incase the load() is inside <head>
            setTimeout( function() {
                var div = document.createElement("div");
                div.innerHTML = s;
                document.getElementsByTagName('body')[0].appendChild(div);

                var types = document.getElementsByClassName('feedback-type');
                for (var i = 0; i < types.length; i++) {
                    types[i].onclick = selectType;
                    types[i].onkeypress = selectType;
                }

                var transportModes = document.getElementsByClassName('transport-mode');
                for (var i = 0; i < transportModes.length; i++) {
                    transportModes[i].onclick = selectTransportMode;
                    transportModes[i].onkeypress = enterTransportMode;
                }

                var yourFeedback = document.getElementsByClassName('fba-title-wrapper')[0];
                yourFeedback.onclick = touchYourFeedback;
                yourFeedback.addEventListener("touchend", touchYourFeedback, false);

                var closeType = document.getElementsByClassName('close-type')[0];
                closeType.onclick = closePanel;
                var closeMode = document.getElementsByClassName('close-mode')[0];
                closeMode.onclick = closePanel;
            }, 200);
        };

        return {
            load: loadFeedbackAssist,
        };
    }

    return {
        // Get the Singleton instance if one exists
        getInstance: function (args) {
            if (!instance) {
                instance = init();
            }
            if (args && args.top !== undefined) {
                top = args.top;
            }
            if (args && args.train !== undefined) {
                mode.train = args.train;
            }
            if (args && args.bus !== undefined) {
                mode.bus = args.bus;
            }
            if (args && args.ferry !== undefined) {
                mode.ferry = args.ferry;
            }
            if (args && args.lightRail !== undefined) {
                mode.lightRail = args.lightRail;
            }
            if (args && args.nswTC !== undefined) {
                mode.nswTC = args.nswTC;
            }
            if (args && args.ticketsAndFares !== undefined) {
                mode.ticketsAndFares = args.ticketsAndFares;
            }
            if (args && args.feedbackUrl !== undefined) {
                feedbackUrl = args.feedbackUrl;
            }
            return instance;
        }
    };
})();;
!function(e){function r(r){for(var n,f,i=r[0],l=r[1],a=r[2],c=0,s=[];c<i.length;c++)o[f=i[c]]&&s.push(o[f][0]),o[f]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(p&&p(r);s.length;)s.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,i=1;i<t.length;i++)0!==o[t[i]]&&(n=!1);n&&(u.splice(r--,1),e=f(f.s=t[0]))}return e}var n={},o={0:0},u=[];function f(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.m=e,f.c=n,f.d=function(e,r,t){f.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,r){if(1&r&&(e=f(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)f.d(t,n,(function(r){return e[r]}).bind(null,n));return t},f.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(r,"a",r),r},f.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},f.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=r,i=i.slice();for(var a=0;a<i.length;a++)r(i[a]);var p=l;t()}([]);;
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+auO":function(e,t,n){var r=n("XKFU"),o=n("lvtm");r(r.S,"Math",{cbrt:function(e){return o(e=+e)*Math.pow(Math.abs(e),1/3)}})},"+oPb":function(e,t,n){"use strict";n("OGtf")("blink",function(e){return function(){return e(this,"blink","","")}})},"+rLv":function(e,t,n){var r=n("dyZX").document;e.exports=r&&r.documentElement},"/KAi":function(e,t,n){var r=n("XKFU"),o=n("dyZX").isFinite;r(r.S,"Number",{isFinite:function(e){return"number"==typeof e&&o(e)}})},"/SS/":function(e,t,n){var r=n("XKFU");r(r.S,"Object",{setPrototypeOf:n("i5dc").set})},"/e88":function(e,t){e.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"0/R4":function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},"0E+W":function(e,t,n){n("elZq")("Array")},"0LDn":function(e,t,n){"use strict";n("OGtf")("italics",function(e){return function(){return e(this,"i","","")}})},"0TWp":function(e,t,n){!function(){"use strict";!function(e){var t=e.performance;function n(e){t&&t.mark&&t.mark(e)}function r(e,n){t&&t.measure&&t.measure(e,n)}if(n("Zone"),e.Zone)throw new Error("Zone already loaded.");var o,i=function(){function t(e,t){this._properties=null,this._parent=e,this._name=t?t.name||"unnamed":"<root>",this._properties=t&&t.properties||{},this._zoneDelegate=new u(this,this._parent&&this._parent._zoneDelegate,t)}return t.assertZonePatched=function(){if(e.Promise!==x.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")},Object.defineProperty(t,"root",{get:function(){for(var e=t.current;e.parent;)e=e.parent;return e},enumerable:!0,configurable:!0}),Object.defineProperty(t,"current",{get:function(){return F.zone},enumerable:!0,configurable:!0}),Object.defineProperty(t,"currentTask",{get:function(){return j},enumerable:!0,configurable:!0}),t.__load_patch=function(o,i){if(x.hasOwnProperty(o))throw Error("Already loaded patch: "+o);if(!e["__Zone_disable_"+o]){var a="Zone:"+o;n(a),x[o]=i(e,t,_),r(a,a)}},Object.defineProperty(t.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),t.prototype.get=function(e){var t=this.getZoneWith(e);if(t)return t._properties[e]},t.prototype.getZoneWith=function(e){for(var t=this;t;){if(t._properties.hasOwnProperty(e))return t;t=t._parent}return null},t.prototype.fork=function(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)},t.prototype.wrap=function(e,t){if("function"!=typeof e)throw new Error("Expecting function got: "+e);var n=this._zoneDelegate.intercept(this,e,t),r=this;return function(){return r.runGuarded(n,this,arguments,t)}},t.prototype.run=function(e,t,n,r){void 0===t&&(t=void 0),void 0===n&&(n=null),void 0===r&&(r=null),F={parent:F,zone:this};try{return this._zoneDelegate.invoke(this,e,t,n,r)}finally{F=F.parent}},t.prototype.runGuarded=function(e,t,n,r){void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=null),F={parent:F,zone:this};try{try{return this._zoneDelegate.invoke(this,e,t,n,r)}catch(o){if(this._zoneDelegate.handleError(this,o))throw o}}finally{F=F.parent}},t.prototype.runTask=function(e,t,n){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||v).name+"; Execution: "+this.name+")");if(e.state!==y||e.type!==E){var r=e.state!=k;r&&e._transitionTo(k,b),e.runCount++;var o=j;j=e,F={parent:F,zone:this};try{e.type==T&&e.data&&!e.data.isPeriodic&&(e.cancelFn=null);try{return this._zoneDelegate.invokeTask(this,e,t,n)}catch(i){if(this._zoneDelegate.handleError(this,i))throw i}}finally{e.state!==y&&e.state!==S&&(e.type==E||e.data&&e.data.isPeriodic?r&&e._transitionTo(b,k):(e.runCount=0,this._updateTaskCount(e,-1),r&&e._transitionTo(y,k,y))),F=F.parent,j=o}}},t.prototype.scheduleTask=function(e){if(e.zone&&e.zone!==this)for(var t=this;t;){if(t===e.zone)throw Error("can not reschedule task to "+this.name+" which is descendants of the original zone "+e.zone.name);t=t.parent}e._transitionTo(m,y);var n=[];e._zoneDelegates=n,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(r){throw e._transitionTo(S,m,y),this._zoneDelegate.handleError(this,r),r}return e._zoneDelegates===n&&this._updateTaskCount(e,1),e.state==m&&e._transitionTo(b,m),e},t.prototype.scheduleMicroTask=function(e,t,n,r){return this.scheduleTask(new s(M,e,t,n,r,null))},t.prototype.scheduleMacroTask=function(e,t,n,r,o){return this.scheduleTask(new s(T,e,t,n,r,o))},t.prototype.scheduleEventTask=function(e,t,n,r,o){return this.scheduleTask(new s(E,e,t,n,r,o))},t.prototype.cancelTask=function(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||v).name+"; Execution: "+this.name+")");e._transitionTo(w,b,k);try{this._zoneDelegate.cancelTask(this,e)}catch(t){throw e._transitionTo(S,w),this._zoneDelegate.handleError(this,t),t}return this._updateTaskCount(e,-1),e._transitionTo(y,w),e.runCount=0,e},t.prototype._updateTaskCount=function(e,t){var n=e._zoneDelegates;-1==t&&(e._zoneDelegates=null);for(var r=0;r<n.length;r++)n[r]._updateTaskCount(e.type,t)},t.__symbol__=P,t}(),a={name:"",onHasTask:function(e,t,n,r){return e.hasTask(n,r)},onScheduleTask:function(e,t,n,r){return e.scheduleTask(n,r)},onInvokeTask:function(e,t,n,r,o,i){return e.invokeTask(n,r,o,i)},onCancelTask:function(e,t,n,r){return e.cancelTask(n,r)}},u=function(){function e(e,t,n){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=e,this._parentDelegate=t,this._forkZS=n&&(n&&n.onFork?n:t._forkZS),this._forkDlgt=n&&(n.onFork?t:t._forkDlgt),this._forkCurrZone=n&&(n.onFork?this.zone:t.zone),this._interceptZS=n&&(n.onIntercept?n:t._interceptZS),this._interceptDlgt=n&&(n.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=n&&(n.onIntercept?this.zone:t.zone),this._invokeZS=n&&(n.onInvoke?n:t._invokeZS),this._invokeDlgt=n&&(n.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=n&&(n.onInvoke?this.zone:t.zone),this._handleErrorZS=n&&(n.onHandleError?n:t._handleErrorZS),this._handleErrorDlgt=n&&(n.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=n&&(n.onHandleError?this.zone:t.zone),this._scheduleTaskZS=n&&(n.onScheduleTask?n:t._scheduleTaskZS),this._scheduleTaskDlgt=n&&(n.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=n&&(n.onScheduleTask?this.zone:t.zone),this._invokeTaskZS=n&&(n.onInvokeTask?n:t._invokeTaskZS),this._invokeTaskDlgt=n&&(n.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=n&&(n.onInvokeTask?this.zone:t.zone),this._cancelTaskZS=n&&(n.onCancelTask?n:t._cancelTaskZS),this._cancelTaskDlgt=n&&(n.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=n&&(n.onCancelTask?this.zone:t.zone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;var r=n&&n.onHasTask;(r||t&&t._hasTaskZS)&&(this._hasTaskZS=r?n:a,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=e,n.onScheduleTask||(this._scheduleTaskZS=a,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),n.onInvokeTask||(this._invokeTaskZS=a,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),n.onCancelTask||(this._cancelTaskZS=a,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}return e.prototype.fork=function(e,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,e,t):new i(e,t)},e.prototype.intercept=function(e,t,n){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,e,t,n):t},e.prototype.invoke=function(e,t,n,r,o){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,e,t,n,r,o):t.apply(n,r)},e.prototype.handleError=function(e,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,e,t)},e.prototype.scheduleTask=function(e,t){var n=t;if(this._scheduleTaskZS)this._hasTaskZS&&n._zoneDelegates.push(this._hasTaskDlgtOwner),(n=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,e,t))||(n=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=M)throw new Error("Task is missing scheduleFn.");g(t)}return n},e.prototype.invokeTask=function(e,t,n,r){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,e,t,n,r):t.callback.apply(n,r)},e.prototype.cancelTask=function(e,t){var n;if(this._cancelTaskZS)n=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,e,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");n=t.cancelFn(t)}return n},e.prototype.hasTask=function(e,t){try{return this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,e,t)}catch(n){this.handleError(e,n)}},e.prototype._updateTaskCount=function(e,t){var n=this._taskCounts,r=n[e],o=n[e]=r+t;if(o<0)throw new Error("More tasks executed then were scheduled.");0!=r&&0!=o||this.hasTask(this.zone,{microTask:n.microTask>0,macroTask:n.macroTask>0,eventTask:n.eventTask>0,change:e})},e}(),s=function(){function t(n,r,o,i,a,u){this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=n,this.source=r,this.data=i,this.scheduleFn=a,this.cancelFn=u,this.callback=o;var s=this;this.invoke=n===E&&i&&i.useG?t.invokeTask:function(){return t.invokeTask.call(e,s,this,arguments)}}return t.invokeTask=function(e,t,n){e||(e=this),O++;try{return e.runCount++,e.zone.runTask(e,t,n)}finally{1==O&&d(),O--}},Object.defineProperty(t.prototype,"zone",{get:function(){return this._zone},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),t.prototype.cancelScheduleRequest=function(){this._transitionTo(y,m)},t.prototype._transitionTo=function(e,t,n){if(this._state!==t&&this._state!==n)throw new Error(this.type+" '"+this.source+"': can not transition to '"+e+"', expecting state '"+t+"'"+(n?" or '"+n+"'":"")+", was '"+this._state+"'.");this._state=e,e==y&&(this._zoneDelegates=null)},t.prototype.toString=function(){return this.data&&void 0!==this.data.handleId?this.data.handleId:Object.prototype.toString.call(this)},t.prototype.toJSON=function(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}},t}(),c=P("setTimeout"),l=P("Promise"),f=P("then"),h=[],p=!1;function g(t){0===O&&0===h.length&&(o||e[l]&&(o=e[l].resolve(0)),o?o[f](d):e[c](d,0)),t&&h.push(t)}function d(){if(!p){for(p=!0;h.length;){var e=h;h=[];for(var t=0;t<e.length;t++){var n=e[t];try{n.zone.runTask(n,null,null)}catch(r){_.onUnhandledError(r)}}}_.microtaskDrainDone(),p=!1}}var v={name:"NO ZONE"},y="notScheduled",m="scheduling",b="scheduled",k="running",w="canceling",S="unknown",M="microTask",T="macroTask",E="eventTask",x={},_={symbol:P,currentZoneFrame:function(){return F},onUnhandledError:K,microtaskDrainDone:K,scheduleMicroTask:g,showUncaughtError:function(){return!i[P("ignoreConsoleErrorUncaughtError")]},patchEventTarget:function(){return[]},patchOnProperties:K,patchMethod:function(){return K},bindArguments:function(){return null},setNativePromise:function(e){e&&"function"==typeof e.resolve&&(o=e.resolve(0))}},F={parent:null,zone:new i(null,null)},j=null,O=0;function K(){}function P(e){return"__zone_symbol__"+e}r("Zone","Zone"),e.Zone=i}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global),Zone.__load_patch("ZoneAwarePromise",function(e,t,n){var r=Object.getOwnPropertyDescriptor,o=Object.defineProperty,i=n.symbol,a=[],u=i("Promise"),s=i("then"),c="__creationTrace__";n.onUnhandledError=function(e){if(n.showUncaughtError()){var t=e&&e.rejection;t?console.error("Unhandled Promise rejection:",t instanceof Error?t.message:t,"; Zone:",e.zone.name,"; Task:",e.task&&e.task.source,"; Value:",t,t instanceof Error?t.stack:void 0):console.error(e)}},n.microtaskDrainDone=function(){for(;a.length;)for(var e=function(){var e=a.shift();try{e.zone.runGuarded(function(){throw e})}catch(t){f(t)}};a.length;)e()};var l=i("unhandledPromiseRejectionHandler");function f(e){n.onUnhandledError(e);try{var r=t[l];r&&"function"==typeof r&&r.call(this,e)}catch(o){}}function h(e){return e&&e.then}function p(e){return e}function g(e){return D.reject(e)}var d=i("state"),v=i("value"),y=i("finally"),m=i("parentPromiseValue"),b=i("parentPromiseState"),k="Promise.then",w=null,S=!0,M=!1,T=0;function E(e,t){return function(n){try{j(e,t,n)}catch(r){j(e,!1,r)}}}var x=function(){var e=!1;return function(t){return function(){e||(e=!0,t.apply(null,arguments))}}},_="Promise resolved with itself",F=i("currentTaskTrace");function j(e,r,i){var u,s=x();if(e===i)throw new TypeError(_);if(e[d]===w){var l=null;try{"object"!=typeof i&&"function"!=typeof i||(l=i&&i.then)}catch(k){return s(function(){j(e,!1,k)})(),e}if(r!==M&&i instanceof D&&i.hasOwnProperty(d)&&i.hasOwnProperty(v)&&i[d]!==w)K(i),j(e,i[d],i[v]);else if(r!==M&&"function"==typeof l)try{l.call(i,s(E(e,r)),s(E(e,!1)))}catch(k){s(function(){j(e,!1,k)})()}else{e[d]=r;var f=e[v];if(e[v]=i,e[y]===y&&r===S&&(e[d]=e[b],e[v]=e[m]),r===M&&i instanceof Error){var h=t.currentTask&&t.currentTask.data&&t.currentTask.data[c];h&&o(i,F,{configurable:!0,enumerable:!1,writable:!0,value:h})}for(var p=0;p<f.length;)P(e,f[p++],f[p++],f[p++],f[p++]);if(0==f.length&&r==M){e[d]=T;try{throw new Error("Uncaught (in promise): "+((u=i)&&u.toString===Object.prototype.toString?(u.constructor&&u.constructor.name||"")+": "+JSON.stringify(u):u?u.toString():Object.prototype.toString.call(u))+(i&&i.stack?"\n"+i.stack:""))}catch(k){var g=k;g.rejection=i,g.promise=e,g.zone=t.current,g.task=t.currentTask,a.push(g),n.scheduleMicroTask()}}}}return e}var O=i("rejectionHandledHandler");function K(e){if(e[d]===T){try{var n=t[O];n&&"function"==typeof n&&n.call(this,{rejection:e[v],promise:e})}catch(o){}e[d]=M;for(var r=0;r<a.length;r++)e===a[r].promise&&a.splice(r,1)}}function P(e,t,n,r,o){K(e);var i=e[d],a=i?"function"==typeof r?r:p:"function"==typeof o?o:g;t.scheduleMicroTask(k,function(){try{var r=e[v],o=n&&y===n[y];o&&(n[m]=r,n[b]=i);var u=t.run(a,void 0,o&&a!==g&&a!==p?[]:[r]);j(n,!0,u)}catch(s){j(n,!1,s)}},n)}var D=function(){function e(t){if(!(this instanceof e))throw new Error("Must be an instanceof Promise.");this[d]=w,this[v]=[];try{t&&t(E(this,S),E(this,M))}catch(n){j(this,!1,n)}}return e.toString=function(){return"function ZoneAwarePromise() { [native code] }"},e.resolve=function(e){return j(new this(null),S,e)},e.reject=function(e){return j(new this(null),M,e)},e.race=function(e){var t,n,r=new this(function(e,r){t=e,n=r});function o(e){r&&(r=t(e))}function i(e){r&&(r=n(e))}for(var a=0,u=e;a<u.length;a++){var s=u[a];h(s)||(s=this.resolve(s)),s.then(o,i)}return r},e.all=function(e){for(var t,n,r=new this(function(e,r){t=e,n=r}),o=0,i=[],a=0,u=e;a<u.length;a++){var s=u[a];h(s)||(s=this.resolve(s)),s.then(function(e){return function(n){i[e]=n,--o||t(i)}}(o),n),o++}return o||t(i),r},e.prototype.then=function(e,n){var r=new this.constructor(null),o=t.current;return this[d]==w?this[v].push(o,r,e,n):P(this,o,r,e,n),r},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.finally=function(e){var n=new this.constructor(null);n[y]=y;var r=t.current;return this[d]==w?this[v].push(r,n,e,e):P(this,r,n,e,e),n},e}();D.resolve=D.resolve,D.reject=D.reject,D.race=D.race,D.all=D.all;var A=e[u]=e.Promise,z=t.__symbol__("ZoneAwarePromise"),N=r(e,"Promise");N&&!N.configurable||(N&&delete N.writable,N&&delete N.value,N||(N={configurable:!0,enumerable:!0}),N.get=function(){return e[z]?e[z]:e[u]},N.set=function(t){t===D?e[z]=t:(e[u]=t,t.prototype[s]||L(t),n.setNativePromise(t))},o(e,"Promise",N)),e.Promise=D;var R,I=i("thenPatched");function L(e){var t=e.prototype,n=r(t,"then");if(!n||!1!==n.writable&&n.configurable){var o=t.then;t[s]=o,e.prototype.then=function(e,t){var n=this;return new D(function(e,t){o.call(n,e,t)}).then(e,t)},e[I]=!0}}if(A){L(A);var C=e.fetch;"function"==typeof C&&(e.fetch=(R=C,function(){var e=R.apply(this,arguments);if(e instanceof D)return e;var t=e.constructor;return t[I]||L(t),e}))}return Promise[t.__symbol__("uncaughtPromiseErrors")]=a,D});var e=Object.getOwnPropertyDescriptor,t=Object.defineProperty,n=Object.getPrototypeOf,r=Object.create,o=Array.prototype.slice,i="addEventListener",a="removeEventListener",u=Zone.__symbol__(i),s=Zone.__symbol__(a),c="true",l="false",f="__zone_symbol__";function h(e,t){return Zone.current.wrap(e,t)}function p(e,t,n,r,o){return Zone.current.scheduleMacroTask(e,t,n,r,o)}var g=Zone.__symbol__,d="undefined"!=typeof window,v=d?window:void 0,y=d&&v||"object"==typeof self&&self||global,m="removeAttribute",b=[null];function k(e,t){for(var n=e.length-1;n>=0;n--)"function"==typeof e[n]&&(e[n]=h(e[n],t+"_"+n));return e}function w(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&void 0===e.set)}var S="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,M=!("nw"in y)&&void 0!==y.process&&"[object process]"==={}.toString.call(y.process),T=!M&&!S&&!(!d||!v.HTMLElement),E=void 0!==y.process&&"[object process]"==={}.toString.call(y.process)&&!S&&!(!d||!v.HTMLElement),x={},_=function(e){if(e=e||y.event){var t=x[e.type];t||(t=x[e.type]=g("ON_PROPERTY"+e.type));var n=(this||e.target||y)[t],r=n&&n.apply(this,arguments);return null==r||r||e.preventDefault(),r}};function F(n,r,o){var i=e(n,r);if(!i&&o&&e(o,r)&&(i={enumerable:!0,configurable:!0}),i&&i.configurable){delete i.writable,delete i.value;var a=i.get,u=i.set,s=r.substr(2),c=x[s];c||(c=x[s]=g("ON_PROPERTY"+s)),i.set=function(e){var t=this;t||n!==y||(t=y),t&&(t[c]&&t.removeEventListener(s,_),u&&u.apply(t,b),"function"==typeof e?(t[c]=e,t.addEventListener(s,_,!1)):t[c]=null)},i.get=function(){var e=this;if(e||n!==y||(e=y),!e)return null;var t=e[c];if(t)return t;if(a){var o=a&&a.call(this);if(o)return i.set.call(this,o),"function"==typeof e[m]&&e.removeAttribute(r),o}return null},t(n,r,i)}}function j(e,t,n){if(t)for(var r=0;r<t.length;r++)F(e,"on"+t[r],n);else{var o=[];for(var i in e)"on"==i.substr(0,2)&&o.push(i);for(var a=0;a<o.length;a++)F(e,o[a],n)}}var O=g("originalInstance");function K(e){var n=y[e];if(n){y[g(e)]=n,y[e]=function(){var t=k(arguments,e);switch(t.length){case 0:this[O]=new n;break;case 1:this[O]=new n(t[0]);break;case 2:this[O]=new n(t[0],t[1]);break;case 3:this[O]=new n(t[0],t[1],t[2]);break;case 4:this[O]=new n(t[0],t[1],t[2],t[3]);break;default:throw new Error("Arg list too long.")}},D(y[e],n);var r,o=new n(function(){});for(r in o)"XMLHttpRequest"===e&&"responseBlob"===r||function(n){"function"==typeof o[n]?y[e].prototype[n]=function(){return this[O][n].apply(this[O],arguments)}:t(y[e].prototype,n,{set:function(t){"function"==typeof t?(this[O][n]=h(t,e+"."+n),D(this[O][n],t)):this[O][n]=t},get:function(){return this[O][n]}})}(r);for(r in n)"prototype"!==r&&n.hasOwnProperty(r)&&(y[e][r]=n[r])}}function P(t,r,o){for(var i=t;i&&!i.hasOwnProperty(r);)i=n(i);!i&&t[r]&&(i=t);var a,u=g(r);if(i&&!(a=i[u])&&(a=i[u]=i[r],w(i&&e(i,r)))){var s=o(a,u,r);i[r]=function(){return s(this,arguments)},D(i[r],a)}return a}function D(e,t){e[g("OriginalDelegate")]=t}var A=!1,z=!1;function N(){if(A)return z;A=!0;try{var e=v.navigator.userAgent;return-1===e.indexOf("MSIE ")&&-1===e.indexOf("Trident/")&&-1===e.indexOf("Edge/")||(z=!0),z}catch(t){}}Zone.__load_patch("toString",function(e){var t=Function.prototype.toString,n=g("OriginalDelegate"),r=g("Promise"),o=g("Error"),i=function(){if("function"==typeof this){var i=this[n];if(i)return"function"==typeof i?t.apply(this[n],arguments):Object.prototype.toString.call(i);if(this===Promise){var a=e[r];if(a)return t.apply(a,arguments)}if(this===Error){var u=e[o];if(u)return t.apply(u,arguments)}}return t.apply(this,arguments)};i[n]=t,Function.prototype.toString=i;var a=Object.prototype.toString;Object.prototype.toString=function(){return this instanceof Promise?"[object Promise]":a.apply(this,arguments)}});var R={useG:!0},I={},L={},C=/^__zone_symbol__(\w+)(true|false)$/,U="__zone_symbol__propagationStopped";function X(e,t,r){var o=r&&r.add||i,u=r&&r.rm||a,s=r&&r.listeners||"eventListeners",h=r&&r.rmAll||"removeAllListeners",p=g(o),d="."+o+":",v="prependListener",y="."+v+":",m=function(e,t,n){if(!e.isRemoved){var r=e.callback;"object"==typeof r&&r.handleEvent&&(e.callback=function(e){return r.handleEvent(e)},e.originalDelegate=r),e.invoke(e,t,[n]);var o=e.options;o&&"object"==typeof o&&o.once&&t[u].call(t,n.type,e.originalDelegate?e.originalDelegate:e.callback,o)}},b=function(t){if(t=t||e.event){var n=this||t.target||e,r=n[I[t.type][l]];if(r)if(1===r.length)m(r[0],n,t);else for(var o=r.slice(),i=0;i<o.length&&(!t||!0!==t[U]);i++)m(o[i],n,t)}},k=function(t){if(t=t||e.event){var n=this||t.target||e,r=n[I[t.type][c]];if(r)if(1===r.length)m(r[0],n,t);else for(var o=r.slice(),i=0;i<o.length&&(!t||!0!==t[U]);i++)m(o[i],n,t)}};function w(t,r){if(!t)return!1;var i=!0;r&&void 0!==r.useG&&(i=r.useG);var a=r&&r.vh,m=!0;r&&void 0!==r.chkDup&&(m=r.chkDup);var w=!1;r&&void 0!==r.rt&&(w=r.rt);for(var S=t;S&&!S.hasOwnProperty(o);)S=n(S);if(!S&&t[o]&&(S=t),!S)return!1;if(S[p])return!1;var M,T={},E=S[p]=S[o],x=S[g(u)]=S[u],_=S[g(s)]=S[s],F=S[g(h)]=S[h];r&&r.prepend&&(M=S[g(r.prepend)]=S[r.prepend]);var j=i?function(){if(!T.isExisting)return E.call(T.target,T.eventName,T.capture?k:b,T.options)}:function(e){return E.call(T.target,T.eventName,e.invoke,T.options)},O=i?function(e){if(!e.isRemoved){var t=I[e.eventName],n=void 0;t&&(n=t[e.capture?c:l]);var r=n&&e.target[n];if(r)for(var o=0;o<r.length;o++)if(r[o]===e){r.splice(o,1),e.isRemoved=!0,0===r.length&&(e.allRemoved=!0,e.target[n]=null);break}}if(e.allRemoved)return x.call(e.target,e.eventName,e.capture?k:b,e.options)}:function(e){return x.call(e.target,e.eventName,e.invoke,e.options)},K=r&&r.diff?r.diff:function(e,t){var n=typeof t;return"function"===n&&e.callback===t||"object"===n&&e.originalDelegate===t},P=Zone[Zone.__symbol__("BLACK_LISTED_EVENTS")],A=function(t,n,r,o,u,s){return void 0===u&&(u=!1),void 0===s&&(s=!1),function(){var h=this||e,p=arguments[1];if(!p)return t.apply(this,arguments);var g=!1;if("function"!=typeof p){if(!p.handleEvent)return t.apply(this,arguments);g=!0}if(!a||a(t,p,h,arguments)){var d,v=arguments[0],y=arguments[2];if(P)for(var b=0;b<P.length;b++)if(v===P[b])return t.apply(this,arguments);var k=!1;void 0===y?d=!1:!0===y?d=!0:!1===y?d=!1:(d=!!y&&!!y.capture,k=!!y&&!!y.once);var w,S=Zone.current,M=I[v];if(M)w=M[d?c:l];else{var E=f+(v+l),x=f+(v+c);I[v]={},I[v][l]=E,I[v][c]=x,w=d?x:E}var _,F=h[w],j=!1;if(F){if(j=!0,m)for(b=0;b<F.length;b++)if(K(F[b],p))return}else F=h[w]=[];var O=h.constructor.name,D=L[O];D&&(_=D[v]),_||(_=O+n+v),T.options=y,k&&(T.options.once=!1),T.target=h,T.capture=d,T.eventName=v,T.isExisting=j;var A=i?R:null;A&&(A.taskData=T);var z=S.scheduleEventTask(_,p,A,r,o);return T.target=null,A&&(A.taskData=null),k&&(y.once=!0),z.options=y,z.target=h,z.capture=d,z.eventName=v,g&&(z.originalDelegate=p),s?F.unshift(z):F.push(z),u?h:void 0}}};return S[o]=A(E,d,j,O,w),M&&(S[v]=A(M,y,function(e){return M.call(T.target,T.eventName,e.invoke,T.options)},O,w,!0)),S[u]=function(){var t,n=this||e,r=arguments[0],o=arguments[2];t=void 0!==o&&(!0===o||!1!==o&&!!o&&!!o.capture);var i=arguments[1];if(!i)return x.apply(this,arguments);if(!a||a(x,i,n,arguments)){var u,s=I[r];s&&(u=s[t?c:l]);var f=u&&n[u];if(f)for(var h=0;h<f.length;h++){var p=f[h];if(K(p,i))return f.splice(h,1),p.isRemoved=!0,0===f.length&&(p.allRemoved=!0,n[u]=null),p.zone.cancelTask(p),w?n:void 0}return x.apply(this,arguments)}},S[s]=function(){for(var t=[],n=Z(this||e,arguments[0]),r=0;r<n.length;r++){var o=n[r];t.push(o.originalDelegate?o.originalDelegate:o.callback)}return t},S[h]=function(){var t=this||e,n=arguments[0];if(n){var r=I[n];if(r){var o=t[r[l]],i=t[r[c]];if(o){var a=o.slice();for(p=0;p<a.length;p++)this[u].call(this,n,(s=a[p]).originalDelegate?s.originalDelegate:s.callback,s.options)}if(i)for(a=i.slice(),p=0;p<a.length;p++){var s;this[u].call(this,n,(s=a[p]).originalDelegate?s.originalDelegate:s.callback,s.options)}}}else{for(var f=Object.keys(t),p=0;p<f.length;p++){var g=C.exec(f[p]),d=g&&g[1];d&&"removeListener"!==d&&this[h].call(this,d)}this[h].call(this,"removeListener")}if(w)return this},D(S[o],E),D(S[u],x),F&&D(S[h],F),_&&D(S[s],_),!0}for(var S=[],M=0;M<t.length;M++)S[M]=w(t[M],r);return S}function Z(e,t){var n=[];for(var r in e){var o=C.exec(r),i=o&&o[1];if(i&&(!t||i===t)){var a=e[r];if(a)for(var u=0;u<a.length;u++)n.push(a[u])}}return n}var H=g("zoneTask");function J(e,t,n,r){var o=null,i=null;n+=r;var a={};function u(t){var n=t.data;return n.args[0]=function(){try{t.invoke.apply(this,arguments)}finally{t.data&&t.data.isPeriodic||("number"==typeof n.handleId?delete a[n.handleId]:n.handleId&&(n.handleId[H]=null))}},n.handleId=o.apply(e,n.args),t}function s(e){return i(e.data.handleId)}o=P(e,t+=r,function(n){return function(o,i){if("function"==typeof i[0]){var c=p(t,i[0],{handleId:null,isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?i[1]||0:null,args:i},u,s);if(!c)return c;var l=c.data.handleId;return"number"==typeof l?a[l]=c:l&&(l[H]=c),l&&l.ref&&l.unref&&"function"==typeof l.ref&&"function"==typeof l.unref&&(c.ref=l.ref.bind(l),c.unref=l.unref.bind(l)),"number"==typeof l||l?l:c}return n.apply(e,i)}}),i=P(e,n,function(t){return function(n,r){var o,i=r[0];"number"==typeof i?o=a[i]:(o=i&&i[H])||(o=i),o&&"string"==typeof o.type?"notScheduled"!==o.state&&(o.cancelFn&&o.data.isPeriodic||0===o.runCount)&&("number"==typeof i?delete a[i]:i&&(i[H]=null),o.zone.cancelTask(o)):t.apply(e,r)}})}var G=Object[g("defineProperty")]=Object.defineProperty,q=Object[g("getOwnPropertyDescriptor")]=Object.getOwnPropertyDescriptor,B=Object.create,W=g("unconfigurables");function V(e,t){return e&&e[W]&&e[W][t]}function Y(e,t,n){return Object.isFrozen(n)||(n.configurable=!0),n.configurable||(e[W]||Object.isFrozen(e)||G(e,W,{writable:!0,value:{}}),e[W]&&(e[W][t]=!0)),n}function Q(e,t,n,r){try{return G(e,t,n)}catch(i){if(!n.configurable)throw i;void 0===r?delete n.configurable:n.configurable=r;try{return G(e,t,n)}catch(i){var o=null;try{o=JSON.stringify(n)}catch(i){o=n.toString()}console.log("Attempting to configure '"+t+"' with descriptor '"+o+"' on object '"+e+"' and got error, giving up: "+i)}}}var $=["absolutedeviceorientation","afterinput","afterprint","appinstalled","beforeinstallprompt","beforeprint","beforeunload","devicelight","devicemotion","deviceorientation","deviceorientationabsolute","deviceproximity","hashchange","languagechange","message","mozbeforepaint","offline","online","paint","pageshow","pagehide","popstate","rejectionhandled","storage","unhandledrejection","unload","userproximity","vrdisplyconnected","vrdisplaydisconnected","vrdisplaypresentchange"],ee=["encrypted","waitingforkey","msneedkey","mozinterruptbegin","mozinterruptend"],te=["load"],ne=["blur","error","focus","load","resize","scroll","messageerror"],re=["bounce","finish","start"],oe=["loadstart","progress","abort","error","load","progress","timeout","loadend","readystatechange"],ie=["upgradeneeded","complete","abort","success","error","blocked","versionchange","close"],ae=["close","error","open","message"],ue=["error","message"],se=["abort","animationcancel","animationend","animationiteration","auxclick","beforeinput","blur","cancel","canplay","canplaythrough","change","compositionstart","compositionupdate","compositionend","cuechange","click","close","contextmenu","curechange","dblclick","drag","dragend","dragenter","dragexit","dragleave","dragover","drop","durationchange","emptied","ended","error","focus","focusin","focusout","gotpointercapture","input","invalid","keydown","keypress","keyup","load","loadstart","loadeddata","loadedmetadata","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","orientationchange","pause","play","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointerlockchange","mozpointerlockchange","webkitpointerlockerchange","pointerlockerror","mozpointerlockerror","webkitpointerlockerror","pointermove","pointout","pointerover","pointerup","progress","ratechange","reset","resize","scroll","seeked","seeking","select","selectionchange","selectstart","show","sort","stalled","submit","suspend","timeupdate","volumechange","touchcancel","touchmove","touchstart","touchend","transitioncancel","transitionend","waiting","wheel"].concat(["webglcontextrestored","webglcontextlost","webglcontextcreationerror"],["autocomplete","autocompleteerror"],["toggle"],["afterscriptexecute","beforescriptexecute","DOMContentLoaded","fullscreenchange","mozfullscreenchange","webkitfullscreenchange","msfullscreenchange","fullscreenerror","mozfullscreenerror","webkitfullscreenerror","msfullscreenerror","readystatechange","visibilitychange"],$,["beforecopy","beforecut","beforepaste","copy","cut","paste","dragstart","loadend","animationstart","search","transitionrun","transitionstart","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkittransitionend"],["activate","afterupdate","ariarequest","beforeactivate","beforedeactivate","beforeeditfocus","beforeupdate","cellchange","controlselect","dataavailable","datasetchanged","datasetcomplete","errorupdate","filterchange","layoutcomplete","losecapture","move","moveend","movestart","propertychange","resizeend","resizestart","rowenter","rowexit","rowsdelete","rowsinserted","command","compassneedscalibration","deactivate","help","mscontentzoom","msmanipulationstatechanged","msgesturechange","msgesturedoubletap","msgestureend","msgesturehold","msgesturestart","msgesturetap","msgotpointercapture","msinertiastart","mslostpointercapture","mspointercancel","mspointerdown","mspointerenter","mspointerhover","mspointerleave","mspointermove","mspointerout","mspointerover","mspointerup","pointerout","mssitemodejumplistitemremoved","msthumbnailclick","stop","storagecommit"]);function ce(e,t,n,r){e&&j(e,function(e,t,n){if(!n)return t;var r=n.filter(function(t){return t.target===e});if(!r||0===r.length)return t;var o=r[0].ignoreProperties;return t.filter(function(e){return-1===o.indexOf(e)})}(e,t,n),r)}function le(u,s){if(!M||E){var c="undefined"!=typeof WebSocket;if(function(){if((T||E)&&!e(HTMLElement.prototype,"onclick")&&"undefined"!=typeof Element){var n=e(Element.prototype,"onclick");if(n&&!n.configurable)return!1}var r=XMLHttpRequest.prototype,o=e(r,"onreadystatechange");if(o){t(r,"onreadystatechange",{enumerable:!0,configurable:!0,get:function(){return!0}});var i=!!(u=new XMLHttpRequest).onreadystatechange;return t(r,"onreadystatechange",o||{}),i}var a=g("fake");t(r,"onreadystatechange",{enumerable:!0,configurable:!0,get:function(){return this[a]},set:function(e){this[a]=e}});var u,s=function(){};return(u=new XMLHttpRequest).onreadystatechange=s,i=u[a]===s,u.onreadystatechange=null,i}()){var l=s.__Zone_ignore_on_properties;if(T){var f=window;ce(f,se.concat(["messageerror"]),l,n(f)),ce(Document.prototype,se,l),void 0!==f.SVGElement&&ce(f.SVGElement.prototype,se,l),ce(Element.prototype,se,l),ce(HTMLElement.prototype,se,l),ce(HTMLMediaElement.prototype,ee,l),ce(HTMLFrameSetElement.prototype,$.concat(ne),l),ce(HTMLBodyElement.prototype,$.concat(ne),l),ce(HTMLFrameElement.prototype,te,l),ce(HTMLIFrameElement.prototype,te,l);var p=f.HTMLMarqueeElement;p&&ce(p.prototype,re,l);var d=f.Worker;d&&ce(d.prototype,ue,l)}ce(XMLHttpRequest.prototype,oe,l);var v=s.XMLHttpRequestEventTarget;v&&ce(v&&v.prototype,oe,l),"undefined"!=typeof IDBIndex&&(ce(IDBIndex.prototype,ie,l),ce(IDBRequest.prototype,ie,l),ce(IDBOpenDBRequest.prototype,ie,l),ce(IDBDatabase.prototype,ie,l),ce(IDBTransaction.prototype,ie,l),ce(IDBCursor.prototype,ie,l)),c&&ce(WebSocket.prototype,ae,l)}else!function(){for(var e=function(e){var t=se[e],n="on"+t;self.addEventListener(t,function(e){var t,r,o=e.target;for(r=o?o.constructor.name+"."+n:"unknown."+n;o;)o[n]&&!o[n][fe]&&((t=h(o[n],r))[fe]=o[n],o[n]=t),o=o.parentElement},!0)},t=0;t<se.length;t++)e(t)}(),K("XMLHttpRequest"),c&&function(t,n){var u=n.WebSocket;n.EventTarget||X(n,[u.prototype]),n.WebSocket=function(t,n){var s,c,l=arguments.length>1?new u(t,n):new u(t),f=e(l,"onmessage");return f&&!1===f.configurable?(s=r(l),c=l,[i,a,"send","close"].forEach(function(e){s[e]=function(){var t=o.call(arguments);if(e===i||e===a){var n=t.length>0?t[0]:void 0;if(n){var r=Zone.__symbol__("ON_PROPERTY"+n);l[r]=s[r]}}return l[e].apply(l,t)}})):s=l,j(s,["close","error","message","open"],c),s};var s=n.WebSocket;for(var c in u)s[c]=u[c]}(0,s)}}var fe=g("unbound");Zone.__load_patch("util",function(e,t,n){n.patchOnProperties=j,n.patchMethod=P,n.bindArguments=k}),Zone.__load_patch("timers",function(e){J(e,"set","clear","Timeout"),J(e,"set","clear","Interval"),J(e,"set","clear","Immediate")}),Zone.__load_patch("requestAnimationFrame",function(e){J(e,"request","cancel","AnimationFrame"),J(e,"mozRequest","mozCancel","AnimationFrame"),J(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",function(e,t){for(var n=["alert","prompt","confirm"],r=0;r<n.length;r++)P(e,n[r],function(n,r,o){return function(r,i){return t.current.run(n,e,i,o)}})}),Zone.__load_patch("EventTarget",function(e,t,n){var r=t.__symbol__("BLACK_LISTED_EVENTS");e[r]&&(t[r]=e[r]),function(e,t){!function(e,t){var n=e.Event;n&&n.prototype&&t.patchMethod(n.prototype,"stopImmediatePropagation",function(e){return function(t,n){t[U]=!0,e&&e.apply(t,n)}})}(e,t)}(e,n),function(e,t){var n="Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video",r="ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket".split(","),o=[],i=e.wtf,a=n.split(",");i?o=a.map(function(e){return"HTML"+e+"Element"}).concat(r):e.EventTarget?o.push("EventTarget"):o=r;for(var u=e.__Zone_disable_IE_check||!1,s=e.__Zone_enable_cross_context_check||!1,h=N(),p="function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }",g=0;g<se.length;g++){var d=f+((k=se[g])+l),v=f+(k+c);I[k]={},I[k][l]=d,I[k][c]=v}for(g=0;g<n.length;g++)for(var y=a[g],m=L[y]={},b=0;b<se.length;b++){var k;m[k=se[b]]=y+".addEventListener:"+k}var w=[];for(g=0;g<o.length;g++){var S=e[o[g]];w.push(S&&S.prototype)}X(e,w,{vh:function(e,t,n,r){if(!u&&h){if(s)try{var o;if("[object FunctionWrapper]"===(o=t.toString())||o==p)return e.apply(n,r),!1}catch(i){return e.apply(n,r),!1}else if("[object FunctionWrapper]"===(o=t.toString())||o==p)return e.apply(n,r),!1}else if(s)try{t.toString()}catch(i){return e.apply(n,r),!1}return!0}}),t.patchEventTarget=X}(e,n);var o=e.XMLHttpRequestEventTarget;o&&o.prototype&&n.patchEventTarget(e,[o.prototype]),K("MutationObserver"),K("WebKitMutationObserver"),K("IntersectionObserver"),K("FileReader")}),Zone.__load_patch("on_property",function(t,n,r){le(0,t),Object.defineProperty=function(e,t,n){if(V(e,t))throw new TypeError("Cannot assign to read only property '"+t+"' of "+e);var r=n.configurable;return"prototype"!==t&&(n=Y(e,t,n)),Q(e,t,n,r)},Object.defineProperties=function(e,t){return Object.keys(t).forEach(function(n){Object.defineProperty(e,n,t[n])}),e},Object.create=function(e,t){return"object"!=typeof t||Object.isFrozen(t)||Object.keys(t).forEach(function(n){t[n]=Y(e,n,t[n])}),B(e,t)},Object.getOwnPropertyDescriptor=function(e,t){var n=q(e,t);return V(e,t)&&(n.configurable=!1),n},function(n){if((T||E)&&"registerElement"in t.document){var r=document.registerElement,o=["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"];document.registerElement=function(t,n){return n&&n.prototype&&o.forEach(function(t){var r,o,i,a,u="Document.registerElement::"+t,s=n.prototype;if(s.hasOwnProperty(t)){var c=e(s,t);c&&c.value?(c.value=h(c.value,u),a=(i=c).configurable,Q(r=n.prototype,o=t,i=Y(r,o,i),a)):s[t]=h(s[t],u)}else s[t]&&(s[t]=h(s[t],u))}),r.call(document,t,n)},D(document.registerElement,r)}}()}),Zone.__load_patch("canvas",function(e){var t=e.HTMLCanvasElement;void 0!==t&&t.prototype&&t.prototype.toBlob&&function(e,n,r){var o=null;function i(e){var t=e.data;return t.args[t.cbIdx]=function(){e.invoke.apply(this,arguments)},o.apply(t.target,t.args),e}o=P(t.prototype,"toBlob",function(e){return function(t,n){var r=function(e,t){return{name:"HTMLCanvasElement.toBlob",target:e,cbIdx:0,args:t}}(t,n);return r.cbIdx>=0&&"function"==typeof n[r.cbIdx]?p(r.name,n[r.cbIdx],r,i,null):e.apply(t,n)}})}()}),Zone.__load_patch("XHR",function(e,t){!function(t){var c=XMLHttpRequest.prototype,l=c[u],f=c[s];if(!l){var h=e.XMLHttpRequestEventTarget;if(h){var g=h.prototype;l=g[u],f=g[s]}}var d="readystatechange",v="scheduled";function y(e){XMLHttpRequest[i]=!1;var t=e.data,r=t.target,a=r[o];l||(l=r[u],f=r[s]),a&&f.call(r,d,a);var c=r[o]=function(){r.readyState===r.DONE&&!t.aborted&&XMLHttpRequest[i]&&e.state===v&&e.invoke()};return l.call(r,d,c),r[n]||(r[n]=e),w.apply(r,t.args),XMLHttpRequest[i]=!0,e}function m(){}function b(e){var t=e.data;return t.aborted=!0,S.apply(t.target,t.args)}var k=P(c,"open",function(){return function(e,t){return e[r]=0==t[2],e[a]=t[1],k.apply(e,t)}}),w=P(c,"send",function(){return function(e,t){return e[r]?w.apply(e,t):p("XMLHttpRequest.send",m,{target:e,url:e[a],isPeriodic:!1,delay:null,args:t,aborted:!1},y,b)}}),S=P(c,"abort",function(){return function(e){var t=e[n];if(t&&"string"==typeof t.type){if(null==t.cancelFn||t.data&&t.data.aborted)return;t.zone.cancelTask(t)}}})}();var n=g("xhrTask"),r=g("xhrSync"),o=g("xhrListener"),i=g("xhrScheduled"),a=g("xhrURL")}),Zone.__load_patch("geolocation",function(t){t.navigator&&t.navigator.geolocation&&function(t,n){for(var r=t.constructor.name,o=function(o){var i=n[o],a=t[i];if(a){if(!w(e(t,i)))return"continue";t[i]=function(e){var t=function(){return e.apply(this,k(arguments,r+"."+i))};return D(t,e),t}(a)}},i=0;i<n.length;i++)o(i)}(t.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",function(e,t){function n(t){return function(n){Z(e,t).forEach(function(r){var o=e.PromiseRejectionEvent;if(o){var i=new o(t,{promise:n.promise,reason:n.rejection});r.invoke(i)}})}}e.PromiseRejectionEvent&&(t[g("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),t[g("rejectionHandledHandler")]=n("rejectionhandled"))})}()},"0YWM":function(e,t,n){var r=n("EemH"),o=n("OP3Y"),i=n("aagx"),a=n("XKFU"),u=n("0/R4"),s=n("y3w9");a(a.S,"Reflect",{get:function e(t,n){var a,c,l=arguments.length<3?t:arguments[2];return s(t)===l?t[n]:(a=r.f(t,n))?i(a,"value")?a.value:void 0!==a.get?a.get.call(l):void 0:u(c=o(t))?e(c,n,l):void 0}})},"0l/t":function(e,t,n){"use strict";var r=n("XKFU"),o=n("CkkT")(2);r(r.P+r.F*!n("LyE8")([].filter,!0),"Array",{filter:function(e){return o(this,e,arguments[1])}})},"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",function(e){return function(){return e(this,"tt","","")}})},"0sh+":function(e,t,n){var r=n("quPj"),o=n("vhPU");e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},1:function(e,t,n){e.exports=n("hN/g")},"11IZ":function(e,t,n){var r=n("dyZX").parseFloat,o=n("qncB").trim;e.exports=1/r(n("/e88")+"-0")!=-1/0?function(e){var t=o(String(e),3),n=r(t);return 0===n&&"-"==t.charAt(0)?-0:n}:r},"1MBn":function(e,t,n){var r=n("DVgA"),o=n("JiEa"),i=n("UqcF");e.exports=function(e){var t=r(e),n=o.f;if(n)for(var a,u=n(e),s=i.f,c=0;u.length>c;)s.call(e,a=u[c++])&&t.push(a);return t}},"1TsA":function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},"1sa7":function(e,t){e.exports=Math.log1p||function(e){return(e=+e)>-1e-8&&e<1e-8?e-e*e/2:Math.log(1+e)}},2:function(e,t){},"25dN":function(e,t,n){var r=n("XKFU");r(r.S,"Object",{is:n("g6HL")})},"2OiF":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"2Spj":function(e,t,n){var r=n("XKFU");r(r.P,"Function",{bind:n("8MEG")})},"2atp":function(e,t,n){var r=n("XKFU"),o=Math.atanh;r(r.S+r.F*!(o&&1/o(-0)<0),"Math",{atanh:function(e){return 0==(e=+e)?e:Math.log((1+e)/(1-e))/2}})},"3Lyj":function(e,t,n){var r=n("KroJ");e.exports=function(e,t,n){for(var o in t)r(e,o,t[o],n);return e}},"3xty":function(e,t,n){var r=n("XKFU"),o=n("2OiF"),i=n("y3w9"),a=(n("dyZX").Reflect||{}).apply,u=Function.apply;r(r.S+r.F*!n("eeVq")(function(){a(function(){})}),"Reflect",{apply:function(e,t,n){var r=o(e),s=i(n);return a?a(r,t,s):u.call(r,t,s)}})},"45Tv":function(e,t,n){var r=n("N6cJ"),o=n("y3w9"),i=n("OP3Y"),a=r.has,u=r.get,s=r.key,c=function(e,t,n){if(a(e,t,n))return u(e,t,n);var r=i(t);return null!==r?c(e,r,n):void 0};r.exp({getMetadata:function(e,t){return c(e,o(t),arguments.length<3?void 0:s(arguments[2]))}})},"49D4":function(e,t,n){var r=n("N6cJ"),o=n("y3w9"),i=r.key,a=r.set;r.exp({defineMetadata:function(e,t,n,r){a(e,t,o(n),i(r))}})},"4A4+":function(e,t,n){n("2Spj"),n("f3/d"),n("IXt9"),e.exports=n("g3g5").Function},"4LiD":function(e,t,n){"use strict";var r=n("dyZX"),o=n("XKFU"),i=n("KroJ"),a=n("3Lyj"),u=n("Z6vF"),s=n("SlkY"),c=n("9gX7"),l=n("0/R4"),f=n("eeVq"),h=n("XMVh"),p=n("fyDq"),g=n("Xbzi");e.exports=function(e,t,n,d,v,y){var m=r[e],b=m,k=v?"set":"add",w=b&&b.prototype,S={},M=function(e){var t=w[e];i(w,e,"delete"==e?function(e){return!(y&&!l(e))&&t.call(this,0===e?0:e)}:"has"==e?function(e){return!(y&&!l(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return y&&!l(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof b&&(y||w.forEach&&!f(function(){(new b).entries().next()}))){var T=new b,E=T[k](y?{}:-0,1)!=T,x=f(function(){T.has(1)}),_=h(function(e){new b(e)}),F=!y&&f(function(){for(var e=new b,t=5;t--;)e[k](t,t);return!e.has(-0)});_||((b=t(function(t,n){c(t,b,e);var r=g(new m,t,b);return null!=n&&s(n,v,r[k],r),r})).prototype=w,w.constructor=b),(x||F)&&(M("delete"),M("has"),v&&M("get")),(F||E)&&M(k),y&&w.clear&&delete w.clear}else b=d.getConstructor(t,e,v,k),a(b.prototype,n),u.NEED=!0;return p(b,e),S[e]=b,o(o.G+o.W+o.F*(b!=m),S),y||d.setStrong(b,e,v),b}},"4R4u":function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"5Pf0":function(e,t,n){var r=n("S/j/"),o=n("OP3Y");n("Xtr8")("getPrototypeOf",function(){return function(e){return o(r(e))}})},"5yqK":function(e,t){"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?function(){"use strict";var e=document.createElement("_");if(e.classList.add("c1","c2"),!e.classList.contains("c2")){var t=function(e){var t=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){var n,r=arguments.length;for(n=0;n<r;n++)t.call(this,e=arguments[n])}};t("add"),t("remove")}if(e.classList.toggle("c3",!1),e.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:n.call(this,e)}}e=null}():function(e){"use strict";if("Element"in e){var t=e.Element.prototype,n=Object,r=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},i=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},a=function(e,t){if(""===t)throw new i("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new i("INVALID_CHARACTER_ERR","String contains an invalid character");return o.call(e,t)},u=function(e){for(var t=r.call(e.getAttribute("class")||""),n=t?t.split(/\s+/):[],o=0,i=n.length;o<i;o++)this.push(n[o]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},s=u.prototype=[],c=function(){return new u(this)};if(i.prototype=Error.prototype,s.item=function(e){return this[e]||null},s.contains=function(e){return-1!==a(this,e+="")},s.add=function(){var e,t=arguments,n=0,r=t.length,o=!1;do{-1===a(this,e=t[n]+"")&&(this.push(e),o=!0)}while(++n<r);o&&this._updateClassName()},s.remove=function(){var e,t,n=arguments,r=0,o=n.length,i=!1;do{for(t=a(this,e=n[r]+"");-1!==t;)this.splice(t,1),i=!0,t=a(this,e)}while(++r<o);i&&this._updateClassName()},s.toggle=function(e,t){var n=this.contains(e+=""),r=n?!0!==t&&"remove":!1!==t&&"add";return r&&this[r](e),!0===t||!1===t?t:!n},s.toString=function(){return this.join(" ")},n.defineProperty){var l={get:c,enumerable:!0,configurable:!0};try{n.defineProperty(t,"classList",l)}catch(f){-2146823252===f.number&&(l.enumerable=!1,n.defineProperty(t,"classList",l))}}else n.prototype.__defineGetter__&&t.__defineGetter__("classList",c)}}(self))},"694e":function(e,t,n){var r=n("EemH"),o=n("XKFU"),i=n("y3w9");o(o.S,"Reflect",{getOwnPropertyDescriptor:function(e,t){return r.f(i(e),t)}})},"69bn":function(e,t,n){var r=n("y3w9"),o=n("2OiF"),i=n("K0xU")("species");e.exports=function(e,t){var n,a=r(e).constructor;return void 0===a||null==(n=r(a)[i])?t:o(n)}},"6AQ9":function(e,t,n){"use strict";var r=n("XKFU"),o=n("8a7r");r(r.S+r.F*n("eeVq")(function(){function e(){}return!(Array.of.call(e)instanceof e)}),"Array",{of:function(){for(var e=0,t=arguments.length,n=new("function"==typeof this?this:Array)(t);t>e;)o(n,e,arguments[e++]);return n.length=t,n}})},"6FMO":function(e,t,n){var r=n("0/R4"),o=n("EWmC"),i=n("K0xU")("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),r(t)&&null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}},"7Dlh":function(e,t,n){var r=n("N6cJ"),o=n("y3w9"),i=r.has,a=r.key;r.exp({hasOwnMetadata:function(e,t){return i(e,o(t),arguments.length<3?void 0:a(arguments[2]))}})},"7h0T":function(e,t,n){var r=n("XKFU");r(r.S,"Number",{isNaN:function(e){return e!=e}})},"8+KV":function(e,t,n){"use strict";var r=n("XKFU"),o=n("CkkT")(0),i=n("LyE8")([].forEach,!0);r(r.P+r.F*!i,"Array",{forEach:function(e){return o(this,e,arguments[1])}})},"84bF":function(e,t,n){"use strict";n("OGtf")("small",function(e){return function(){return e(this,"small","","")}})},"8MEG":function(e,t,n){"use strict";var r=n("2OiF"),o=n("0/R4"),i=n("MfQN"),a=[].slice,u={};e.exports=Function.bind||function(e){var t=r(this),n=a.call(arguments,1),s=function(){var r=n.concat(a.call(arguments));return this instanceof s?function(e,t,n){if(!(t in u)){for(var r=[],o=0;o<t;o++)r[o]="a["+o+"]";u[t]=Function("F,a","return new F("+r.join(",")+")")}return u[t](e,n)}(t,r.length,r):i(t,r,e)};return o(t.prototype)&&(s.prototype=t.prototype),s}},"8a7r":function(e,t,n){"use strict";var r=n("hswa"),o=n("RjD/");e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},"91GP":function(e,t,n){var r=n("XKFU");r(r.S+r.F,"Object",{assign:n("czNK")})},"99sg":function(e,t,n){n("ioFf"),n("hHhE"),n("HAE/"),n("WLL4"),n("mYba"),n("5Pf0"),n("RW0V"),n("JduL"),n("DW2E"),n("z2o2"),n("mura"),n("Zshi"),n("V/DX"),n("FlsD"),n("91GP"),n("25dN"),n("/SS/"),n("Btvt"),e.exports=n("g3g5").Object},"9AAn":function(e,t,n){"use strict";var r=n("wmvG"),o=n("s5qY");e.exports=n("4LiD")("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=r.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(o(this,"Map"),0===e?0:e,t)}},r,!0)},"9P93":function(e,t,n){var r=n("XKFU"),o=Math.imul;r(r.S+r.F*n("eeVq")(function(){return-5!=o(4294967295,5)||2!=o.length}),"Math",{imul:function(e,t){var n=+e,r=+t,o=65535&n,i=65535&r;return 0|o*i+((65535&n>>>16)*i+o*(65535&r>>>16)<<16>>>0)}})},"9VmF":function(e,t,n){"use strict";var r=n("XKFU"),o=n("ne8i"),i=n("0sh+"),a="".startsWith;r(r.P+r.F*n("UUeW")("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return a?a.call(t,r,n):t.slice(n,n+r.length)===r}})},"9gX7":function(e,t){e.exports=function(e,t,n,r){if(!(e instanceof t)||void 0!==r&&r in e)throw TypeError(n+": incorrect invocation!");return e}},"9rMk":function(e,t,n){var r=n("XKFU");r(r.S,"Reflect",{has:function(e,t){return t in e}})},A2zW:function(e,t,n){"use strict";var r=n("XKFU"),o=n("RYi7"),i=n("vvmO"),a=n("l0Rn"),u=1..toFixed,s=Math.floor,c=[0,0,0,0,0,0],l="Number.toFixed: incorrect invocation!",f=function(e,t){for(var n=-1,r=t;++n<6;)c[n]=(r+=e*c[n])%1e7,r=s(r/1e7)},h=function(e){for(var t=6,n=0;--t>=0;)c[t]=s((n+=c[t])/e),n=n%e*1e7},p=function(){for(var e=6,t="";--e>=0;)if(""!==t||0===e||0!==c[e]){var n=String(c[e]);t=""===t?n:t+a.call("0",7-n.length)+n}return t},g=function(e,t,n){return 0===t?n:t%2==1?g(e,t-1,n*e):g(e*e,t/2,n)};r(r.P+r.F*(!!u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n("eeVq")(function(){u.call({})})),"Number",{toFixed:function(e){var t,n,r,u,s=i(this,l),c=o(e),d="",v="0";if(c<0||c>20)throw RangeError(l);if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(d="-",s=-s),s>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(s*g(2,69,1))-69)<0?s*g(2,-t,1):s/g(2,t,1),n*=4503599627370496,(t=52-t)>0){for(f(0,n),r=c;r>=7;)f(1e7,0),r-=7;for(f(g(10,r,1),0),r=t-1;r>=23;)h(1<<23),r-=23;h(1<<r),f(1,1),h(2),v=p()}else f(0,n),f(1<<-t,0),v=p()+a.call("0",c);return c>0?d+((u=v.length)<=c?"0."+a.call("0",c-u)+v:v.slice(0,u-c)+"."+v.slice(u-c)):d+v}})},A5AN:function(e,t,n){"use strict";var r=n("AvRE")(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},Afnz:function(e,t,n){"use strict";var r=n("LQAc"),o=n("XKFU"),i=n("KroJ"),a=n("Mukb"),u=n("hPIQ"),s=n("QaDb"),c=n("fyDq"),l=n("OP3Y"),f=n("K0xU")("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};e.exports=function(e,t,n,g,d,v,y){s(n,t,g);var m,b,k,w=function(e){if(!h&&e in E)return E[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},S=t+" Iterator",M="values"==d,T=!1,E=e.prototype,x=E[f]||E["@@iterator"]||d&&E[d],_=x||w(d),F=d?M?w("entries"):_:void 0,j="Array"==t&&E.entries||x;if(j&&(k=l(j.call(new e)))!==Object.prototype&&k.next&&(c(k,S,!0),r||"function"==typeof k[f]||a(k,f,p)),M&&x&&"values"!==x.name&&(T=!0,_=function(){return x.call(this)}),r&&!y||!h&&!T&&E[f]||a(E,f,_),u[t]=_,u[S]=p,d)if(m={values:M?_:w("values"),keys:v?_:w("keys"),entries:F},y)for(b in m)b in E||i(E,b,m[b]);else o(o.P+o.F*(h||T),t,m);return m}},AphP:function(e,t,n){"use strict";var r=n("XKFU"),o=n("S/j/"),i=n("apmT");r(r.P+r.F*n("eeVq")(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(e){var t=o(this),n=i(t);return"number"!=typeof n||isFinite(n)?t.toISOString():null}})},AvRE:function(e,t,n){var r=n("RYi7"),o=n("vhPU");e.exports=function(e){return function(t,n){var i,a,u=String(o(t)),s=r(n),c=u.length;return s<0||s>=c?e?"":void 0:(i=u.charCodeAt(s))<55296||i>56319||s+1===c||(a=u.charCodeAt(s+1))<56320||a>57343?e?u.charAt(s):i:e?u.slice(s,s+2):a-56320+(i-55296<<10)+65536}}},BC7C:function(e,t,n){var r=n("XKFU");r(r.S,"Math",{fround:n("kcoS")})},"BJ/l":function(e,t,n){var r=n("XKFU");r(r.S,"Math",{log1p:n("1sa7")})},BP8U:function(e,t,n){var r=n("XKFU"),o=n("PKUr");r(r.S+r.F*(Number.parseInt!=o),"Number",{parseInt:o})},BqfV:function(e,t,n){var r=n("N6cJ"),o=n("y3w9"),i=r.get,a=r.key;r.exp({getOwnMetadata:function(e,t){return i(e,o(t),arguments.length<3?void 0:a(arguments[2]))}})},Btvt:function(e,t,n){"use strict";var r=n("I8a+"),o={};o[n("K0xU")("toStringTag")]="z",o+""!="[object z]"&&n("KroJ")(Object.prototype,"toString",function(){return"[object "+r(this)+"]"},!0)},"C/va":function(e,t,n){"use strict";var r=n("y3w9");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},CkkT:function(e,t,n){var r=n("m0Pp"),o=n("Ymqv"),i=n("S/j/"),a=n("ne8i"),u=n("zRwo");e.exports=function(e,t){var n=1==e,s=2==e,c=3==e,l=4==e,f=6==e,h=5==e||f,p=t||u;return function(t,u,g){for(var d,v,y=i(t),m=o(y),b=r(u,g,3),k=a(m.length),w=0,S=n?p(t,k):s?p(t,0):void 0;k>w;w++)if((h||w in m)&&(v=b(d=m[w],w,y),e))if(n)S[w]=v;else if(v)switch(e){case 3:return!0;case 5:return d;case 6:return w;case 2:S.push(d)}else if(l)return!1;return f?-1:c||l?l:S}}},CuTL:function(e,t,n){n("fyVe"),n("U2t9"),n("2atp"),n("+auO"),n("MtdB"),n("Jcmo"),n("nzyx"),n("BC7C"),n("x8ZO"),n("9P93"),n("eHKK"),n("BJ/l"),n("pp/T"),n("CyHz"),n("bBoP"),n("x8Yj"),n("hLT2"),e.exports=n("g3g5").Math},CyHz:function(e,t,n){var r=n("XKFU");r(r.S,"Math",{sign:n("lvtm")})},DNiP:function(e,t,n){"use strict";var r=n("XKFU"),o=n("eyMr");r(r.P+r.F*!n("LyE8")([].reduce,!0),"Array",{reduce:function(e){return o(this,e,arguments.length,arguments[1],!1)}})},DVgA:function(e,t,n){var r=n("zhAb"),o=n("4R4u");e.exports=Object.keys||function(e){return r(e,o)}},DW2E:function(e,t,n){var r=n("0/R4"),o=n("Z6vF").onFreeze;n("Xtr8")("freeze",function(e){return function(t){return e&&r(t)?e(o(t)):t}})},EK0E:function(e,t,n){"use strict";var r,o=n("CkkT")(0),i=n("KroJ"),a=n("Z6vF"),u=n("czNK"),s=n("ZD67"),c=n("0/R4"),l=n("eeVq"),f=n("s5qY"),h=a.getWeak,p=Object.isExtensible,g=s.ufstore,d={},v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(c(e)){var t=h(e);return!0===t?g(f(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return s.def(f(this,"WeakMap"),e,t)}},m=e.exports=n("4LiD")("WeakMap",v,y,s,!0,!0);l(function(){return 7!=(new m).set((Object.freeze||Object)(d),7).get(d)})&&(u((r=s.getConstructor(v,"WeakMap")).prototype,y),a.NEED=!0,o(["delete","has","get","set"],function(e){var t=m.prototype,n=t[e];i(t,e,function(t,o){if(c(t)&&!p(t)){this._f||(this._f=new r);var i=this._f[e](t,o);return"set"==e?this:i}return n.call(this,t,o)})}))},EWmC:function(e,t,n){var r=n("LZWt");e.exports=Array.isArray||function(e){return"Array"==r(e)}},EemH:function(e,t,n){var r=n("UqcF"),o=n("RjD/"),i=n("aCFj"),a=n("apmT"),u=n("aagx"),s=n("xpql"),c=Object.getOwnPropertyDescriptor;t.f=n("nh4g")?c:function(e,t){if(e=i(e),t=a(t,!0),s)try{return c(e,t)}catch(n){}if(u(e,t))return o(!r.f.call(e,t),e[t])}},FEjr:function(e,t,n){"use strict";n("OGtf")("strike",function(e){return function(){return e(this,"strike","","")}})},FJW5:function(e,t,n){var r=n("hswa"),o=n("y3w9"),i=n("DVgA");e.exports=n("nh4g")?Object.defineProperties:function(e,t){o(e);for(var n,a=i(t),u=a.length,s=0;u>s;)r.f(e,n=a[s++],t[n]);return e}},FLlr:function(e,t,n){var r=n("XKFU");r(r.P,"String",{repeat:n("l0Rn")})},FZcq:function(e,t,n){n("49D4"),n("zq+C"),n("45Tv"),n("uAtd"),n("BqfV"),n("fN/3"),n("iW+S"),n("7Dlh"),n("Opxb"),e.exports=n("g3g5").Reflect},FlsD:function(e,t,n){var r=n("0/R4");n("Xtr8")("isExtensible",function(e){return function(t){return!!r(t)&&(!e||e(t))}})},FoZm:function(e,t,n){global.IntlPolyfill=n("fL0r"),n(2),global.Intl||(global.Intl=global.IntlPolyfill,global.IntlPolyfill.__applyLocaleSensitivePrototypes()),e.exports=global.IntlPolyfill},GNAe:function(e,t,n){var r=n("XKFU"),o=n("PKUr");r(r.G+r.F*(parseInt!=o),{parseInt:o})},H6hf:function(e,t,n){var r=n("y3w9");e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(a){var i=e.return;throw void 0!==i&&r(i.call(e)),a}}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},HEwt:function(e,t,n){"use strict";var r=n("m0Pp"),o=n("XKFU"),i=n("S/j/"),a=n("H6hf"),u=n("M6Qj"),s=n("ne8i"),c=n("8a7r"),l=n("J+6e");o(o.S+o.F*!n("XMVh")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,f,h=i(e),p="function"==typeof this?this:Array,g=arguments.length,d=g>1?arguments[1]:void 0,v=void 0!==d,y=0,m=l(h);if(v&&(d=r(d,g>2?arguments[2]:void 0,2)),null==m||p==Array&&u(m))for(n=new p(t=s(h.length));t>y;y++)c(n,y,v?d(h[y],y):h[y]);else for(f=m.call(h),n=new p;!(o=f.next()).done;y++)c(n,y,v?a(f,d,[o.value,y],!0):o.value);return n.length=y,n}})},I5cv:function(e,t,n){var r=n("XKFU"),o=n("Kuth"),i=n("2OiF"),a=n("y3w9"),u=n("0/R4"),s=n("eeVq"),c=n("8MEG"),l=(n("dyZX").Reflect||{}).construct,f=s(function(){function e(){}return!(l(function(){},[],e)instanceof e)}),h=!s(function(){l(function(){})});r(r.S+r.F*(f||h),"Reflect",{construct:function(e,t){i(e),a(t);var n=arguments.length<3?e:i(arguments[2]);if(h&&!f)return l(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(c.apply(e,r))}var s=n.prototype,p=o(u(s)?s:Object.prototype),g=Function.apply.call(e,p,t);return u(g)?g:p}})},I78e:function(e,t,n){"use strict";var r=n("XKFU"),o=n("+rLv"),i=n("LZWt"),a=n("d/Gc"),u=n("ne8i"),s=[].slice;r(r.P+r.F*n("eeVq")(function(){o&&s.call(o)}),"Array",{slice:function(e,t){var n=u(this.length),r=i(this);if(t=void 0===t?n:t,"Array"==r)return s.call(this,e,t);for(var o=a(e,n),c=a(t,n),l=u(c-o),f=new Array(l),h=0;h<l;h++)f[h]="String"==r?this.charAt(o+h):this[o+h];return f}})},"I8a+":function(e,t,n){var r=n("LZWt"),o=n("K0xU")("toStringTag"),i="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),o))?n:i?r(t):"Object"==(a=r(t))&&"function"==typeof t.callee?"Arguments":a}},INYr:function(e,t,n){"use strict";var r=n("XKFU"),o=n("CkkT")(6),i="findIndex",a=!0;i in[]&&Array(1)[i](function(){a=!1}),r(r.P+r.F*a,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(i)},"IU+Z":function(e,t,n){"use strict";n("sMXx");var r=n("KroJ"),o=n("Mukb"),i=n("eeVq"),a=n("vhPU"),u=n("K0xU"),s=n("Ugos"),c=u("species"),l=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var h=u(e),p=!i(function(){var t={};return t[h]=function(){return 7},7!=""[e](t)}),g=p?!i(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[c]=function(){return n}),n[h](""),!t}):void 0;if(!p||!g||"replace"===e&&!l||"split"===e&&!f){var d=/./[h],v=n(a,h,""[e],function(e,t,n,r,o){return t.exec===s?p&&!o?{done:!0,value:d.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),y=v[1];r(String.prototype,e,v[0]),o(RegExp.prototype,h,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}}},IXt9:function(e,t,n){"use strict";var r=n("0/R4"),o=n("OP3Y"),i=n("K0xU")("hasInstance"),a=Function.prototype;i in a||n("hswa").f(a,i,{value:function(e){if("function"!=typeof this||!r(e))return!1;if(!r(this.prototype))return e instanceof this;for(;e=o(e);)if(this.prototype===e)return!0;return!1}})},IlFx:function(e,t,n){var r=n("XKFU"),o=n("y3w9"),i=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(e){return o(e),!i||i(e)}})},Iw71:function(e,t,n){var r=n("0/R4"),o=n("dyZX").document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},"J+6e":function(e,t,n){var r=n("I8a+"),o=n("K0xU")("iterator"),i=n("hPIQ");e.exports=n("g3g5").getIteratorMethod=function(e){if(null!=e)return e[o]||e["@@iterator"]||i[r(e)]}},JCqj:function(e,t,n){"use strict";n("OGtf")("sup",function(e){return function(){return e(this,"sup","","")}})},Jcmo:function(e,t,n){var r=n("XKFU"),o=Math.exp;r(r.S,"Math",{cosh:function(e){return(o(e=+e)+o(-e))/2}})},JduL:function(e,t,n){n("Xtr8")("getOwnPropertyNames",function(){return n("e7yV").f})},JiEa:function(e,t){t.f=Object.getOwnPropertySymbols},K0xU:function(e,t,n){var r=n("VTer")("wks"),o=n("ylqs"),i=n("dyZX").Symbol,a="function"==typeof i;(e.exports=function(e){return r[e]||(r[e]=a&&i[e]||(a?i:o)("Symbol."+e))}).store=r},KKXr:function(e,t,n){"use strict";var r=n("quPj"),o=n("y3w9"),i=n("69bn"),a=n("A5AN"),u=n("ne8i"),s=n("Xxuz"),c=n("Ugos"),l=Math.min,f=[].push,h=!!function(){try{return new RegExp("x","y")}catch(e){}}();n("IU+Z")("split",2,function(e,t,n,p){var g=n;return"c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?g=function(e,t){var o=String(this);if(void 0===e&&0===t)return[];if(!r(e))return n.call(o,e,t);for(var i,a,u,s=[],l=0,h=void 0===t?4294967295:t>>>0,p=new RegExp(e.source,(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":"")+"g");(i=c.call(p,o))&&!((a=p.lastIndex)>l&&(s.push(o.slice(l,i.index)),i.length>1&&i.index<o.length&&f.apply(s,i.slice(1)),u=i[0].length,l=a,s.length>=h));)p.lastIndex===i.index&&p.lastIndex++;return l===o.length?!u&&p.test("")||s.push(""):s.push(o.slice(l)),s.length>h?s.slice(0,h):s}:"0".split(void 0,0).length&&(g=function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}),[function(n,r){var o=e(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):g.call(String(o),n,r)},function(e,t){var r=p(g,e,this,t,g!==n);if(r.done)return r.value;var c=o(e),f=String(this),d=i(c,RegExp),v=c.unicode,y=new d(h?c:"^(?:"+c.source+")",(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(h?"y":"g")),m=void 0===t?4294967295:t>>>0;if(0===m)return[];if(0===f.length)return null===s(y,f)?[f]:[];for(var b=0,k=0,w=[];k<f.length;){y.lastIndex=h?k:0;var S,M=s(y,h?f:f.slice(k));if(null===M||(S=l(u(y.lastIndex+(h?0:k)),f.length))===b)k=a(f,k,v);else{if(w.push(f.slice(b,k)),w.length===m)return w;for(var T=1;T<=M.length-1;T++)if(w.push(M[T]),w.length===m)return w;k=b=S}}return w.push(f.slice(b)),w}]})},KroJ:function(e,t,n){var r=n("dyZX"),o=n("Mukb"),i=n("aagx"),a=n("ylqs")("src"),u=Function.toString,s=(""+u).split("toString");n("g3g5").inspectSource=function(e){return u.call(e)},(e.exports=function(e,t,n,u){var c="function"==typeof n;c&&(i(n,"name")||o(n,"name",t)),e[t]!==n&&(c&&(i(n,a)||o(n,a,e[t]?""+e[t]:s.join(String(t)))),e===r?e[t]=n:u?e[t]?e[t]=n:o(e,t,n):(delete e[t],o(e,t,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[a]||u.call(this)})},Kuth:function(e,t,n){var r=n("y3w9"),o=n("FJW5"),i=n("4R4u"),a=n("YTvA")("IE_PROTO"),u=function(){},s=function(){var e,t=n("Iw71")("iframe"),r=i.length;for(t.style.display="none",n("+rLv").appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),s=e.F;r--;)delete s.prototype[i[r]];return s()};e.exports=Object.create||function(e,t){var n;return null!==e?(u.prototype=r(e),n=new u,u.prototype=null,n[a]=e):n=s(),void 0===t?n:o(n,t)}},L9s1:function(e,t,n){"use strict";var r=n("XKFU"),o=n("0sh+");r(r.P+r.F*n("UUeW")("includes"),"String",{includes:function(e){return!!~o(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},LK8F:function(e,t,n){var r=n("XKFU");r(r.S,"Array",{isArray:n("EWmC")})},LQAc:function(e,t){e.exports=!1},LTTk:function(e,t,n){var r=n("XKFU"),o=n("OP3Y"),i=n("y3w9");r(r.S,"Reflect",{getPrototypeOf:function(e){return o(i(e))}})},LVwc:function(e,t){var n=Math.expm1;e.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(e){return 0==(e=+e)?e:e>-1e-6&&e<1e-6?e+e*e/2:Math.exp(e)-1}:n},LZWt:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},Ljet:function(e,t,n){var r=n("XKFU");r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},Lmuc:function(e,t,n){n("xfY5"),n("A2zW"),n("VKir"),n("Ljet"),n("/KAi"),n("fN96"),n("7h0T"),n("sbF8"),n("h/M4"),n("knhD"),n("XfKG"),n("BP8U"),e.exports=n("g3g5").Number},LyE8:function(e,t,n){"use strict";var r=n("eeVq");e.exports=function(e,t){return!!e&&r(function(){t?e.call(null,function(){},1):e.call(null)})}},M6Qj:function(e,t,n){var r=n("hPIQ"),o=n("K0xU")("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||i[o]===e)}},MfQN:function(e,t){e.exports=function(e,t,n){var r=void 0===n;switch(t.length){case 0:return r?e():e.call(n);case 1:return r?e(t[0]):e.call(n,t[0]);case 2:return r?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return r?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return r?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)}},MtdB:function(e,t,n){var r=n("XKFU");r(r.S,"Math",{clz32:function(e){return(e>>>=0)?31-Math.floor(Math.log(e+.5)*Math.LOG2E):32}})},Mukb:function(e,t,n){var r=n("hswa"),o=n("RjD/");e.exports=n("nh4g")?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},N6cJ:function(e,t,n){var r=n("9AAn"),o=n("XKFU"),i=n("VTer")("metadata"),a=i.store||(i.store=new(n("EK0E"))),u=function(e,t,n){var o=a.get(e);if(!o){if(!n)return;a.set(e,o=new r)}var i=o.get(t);if(!i){if(!n)return;o.set(t,i=new r)}return i};e.exports={store:a,map:u,has:function(e,t,n){var r=u(t,n,!1);return void 0!==r&&r.has(e)},get:function(e,t,n){var r=u(t,n,!1);return void 0===r?void 0:r.get(e)},set:function(e,t,n,r){u(n,r,!0).set(e,t)},keys:function(e,t){var n=u(e,t,!1),r=[];return n&&n.forEach(function(e,t){r.push(t)}),r},key:function(e){return void 0===e||"symbol"==typeof e?e:String(e)},exp:function(e){o(o.S,"Reflect",e)}}},N8g3:function(e,t,n){t.f=n("K0xU")},Nr18:function(e,t,n){"use strict";var r=n("S/j/"),o=n("d/Gc"),i=n("ne8i");e.exports=function(e){for(var t=r(this),n=i(t.length),a=arguments.length,u=o(a>1?arguments[1]:void 0,n),s=a>2?arguments[2]:void 0,c=void 0===s?n:o(s,n);c>u;)t[u++]=e;return t}},Nz9U:function(e,t,n){"use strict";var r=n("XKFU"),o=n("aCFj"),i=[].join;r(r.P+r.F*(n("Ymqv")!=Object||!n("LyE8")(i)),"Array",{join:function(e){return i.call(o(this),void 0===e?",":e)}})},OEbY:function(e,t,n){n("nh4g")&&"g"!=/./g.flags&&n("hswa").f(RegExp.prototype,"flags",{configurable:!0,get:n("C/va")})},OG14:function(e,t,n){"use strict";var r=n("y3w9"),o=n("g6HL"),i=n("Xxuz");n("IU+Z")("search",1,function(e,t,n,a){return[function(n){var r=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=a(n,e,this);if(t.done)return t.value;var u=r(e),s=String(this),c=u.lastIndex;o(c,0)||(u.lastIndex=0);var l=i(u,s);return o(u.lastIndex,c)||(u.lastIndex=c),null===l?-1:l.index}]})},OGtf:function(e,t,n){var r=n("XKFU"),o=n("eeVq"),i=n("vhPU"),a=/"/g,u=function(e,t,n,r){var o=String(i(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),u+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),r(r.P+r.F*o(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},OP3Y:function(e,t,n){var r=n("aagx"),o=n("S/j/"),i=n("YTvA")("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),r(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},OnI7:function(e,t,n){var r=n("dyZX"),o=n("g3g5"),i=n("LQAc"),a=n("N8g3"),u=n("hswa").f;e.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||u(t,e,{value:a.f(e)})}},Opxb:function(e,t,n){var r=n("N6cJ"),o=n("y3w9"),i=n("2OiF"),a=r.key,u=r.set;r.exp({metadata:function(e,t){return function(n,r){u(e,t,(void 0!==r?o:i)(n),a(r))}}})},Oyvg:function(e,t,n){var r=n("dyZX"),o=n("Xbzi"),i=n("hswa").f,a=n("kJMx").f,u=n("quPj"),s=n("C/va"),c=r.RegExp,l=c,f=c.prototype,h=/a/g,p=/a/g,g=new c(h)!==h;if(n("nh4g")&&(!g||n("eeVq")(function(){return p[n("K0xU")("match")]=!1,c(h)!=h||c(p)==p||"/a/i"!=c(h,"i")}))){c=function(e,t){var n=this instanceof c,r=u(e),i=void 0===t;return!n&&r&&e.constructor===c&&i?e:o(g?new l(r&&!i?e.source:e,t):l((r=e instanceof c)?e.source:e,r&&i?s.call(e):t),n?this:f,c)};for(var d=function(e){e in c||i(c,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},v=a(l),y=0;v.length>y;)d(v[y++]);f.constructor=c,c.prototype=f,n("KroJ")(r,"RegExp",c)}n("elZq")("RegExp")},PKUr:function(e,t,n){var r=n("dyZX").parseInt,o=n("qncB").trim,i=n("/e88"),a=/^[-+]?0[xX]/;e.exports=8!==r(i+"08")||22!==r(i+"0x16")?function(e,t){var n=o(String(e),3);return r(n,t>>>0||(a.test(n)?16:10))}:r},Q3ne:function(e,t,n){var r=n("SlkY");e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},QaDb:function(e,t,n){"use strict";var r=n("Kuth"),o=n("RjD/"),i=n("fyDq"),a={};n("Mukb")(a,n("K0xU")("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(a,{next:o(1,n)}),i(e,t+" Iterator")}},RW0V:function(e,t,n){var r=n("S/j/"),o=n("DVgA");n("Xtr8")("keys",function(){return function(e){return o(r(e))}})},RYi7:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},"RjD/":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"S/j/":function(e,t,n){var r=n("vhPU");e.exports=function(e){return Object(r(e))}},SMB2:function(e,t,n){"use strict";n("OGtf")("bold",function(e){return function(){return e(this,"b","","")}})},SPin:function(e,t,n){"use strict";var r=n("XKFU"),o=n("eyMr");r(r.P+r.F*!n("LyE8")([].reduceRight,!0),"Array",{reduceRight:function(e){return o(this,e,arguments.length,arguments[1],!0)}})},SRfc:function(e,t,n){"use strict";var r=n("y3w9"),o=n("ne8i"),i=n("A5AN"),a=n("Xxuz");n("IU+Z")("match",1,function(e,t,n,u){return[function(n){var r=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=u(n,e,this);if(t.done)return t.value;var s=r(e),c=String(this);if(!s.global)return a(s,c);var l=s.unicode;s.lastIndex=0;for(var f,h=[],p=0;null!==(f=a(s,c));){var g=String(f[0]);h[p]=g,""===g&&(s.lastIndex=i(c,o(s.lastIndex),l)),p++}return 0===p?null:h}]})},SlkY:function(e,t,n){var r=n("m0Pp"),o=n("H6hf"),i=n("M6Qj"),a=n("y3w9"),u=n("ne8i"),s=n("J+6e"),c={},l={};(t=e.exports=function(e,t,n,f,h){var p,g,d,v,y=h?function(){return e}:s(e),m=r(n,f,t?2:1),b=0;if("function"!=typeof y)throw TypeError(e+" is not iterable!");if(i(y)){for(p=u(e.length);p>b;b++)if((v=t?m(a(g=e[b])[0],g[1]):m(e[b]))===c||v===l)return v}else for(d=y.call(e);!(g=d.next()).done;)if((v=o(d,m,g.value,t))===c||v===l)return v}).BREAK=c,t.RETURN=l},T39b:function(e,t,n){"use strict";var r=n("wmvG"),o=n("s5qY");e.exports=n("4LiD")("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return r.def(o(this,"Set"),e=0===e?0:e,e)}},r)},Tze0:function(e,t,n){"use strict";n("qncB")("trim",function(e){return function(){return e(this,3)}})},U2t9:function(e,t,n){var r=n("XKFU"),o=Math.asinh;r(r.S+r.F*!(o&&1/o(0)>0),"Math",{asinh:function e(t){return isFinite(t=+t)&&0!=t?t<0?-e(-t):Math.log(t+Math.sqrt(t*t+1)):t}})},UUeW:function(e,t,n){var r=n("K0xU")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}},Ugos:function(e,t,n){"use strict";var r,o,i=n("C/va"),a=RegExp.prototype.exec,u=String.prototype.replace,s=a,c=(o=/b*/g,a.call(r=/a/,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(c||l)&&(s=function(e){var t,n,r,o,s=this;return l&&(n=new RegExp("^"+s.source+"$(?!\\s)",i.call(s))),c&&(t=s.lastIndex),r=a.call(s,e),c&&r&&(s.lastIndex=s.global?r.index+r[0].length:t),l&&r&&r.length>1&&u.call(r[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r}),e.exports=s},UqcF:function(e,t){t.f={}.propertyIsEnumerable},"V+eJ":function(e,t,n){"use strict";var r=n("XKFU"),o=n("w2a5")(!1),i=[].indexOf,a=!!i&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(a||!n("LyE8")(i)),"Array",{indexOf:function(e){return a?i.apply(this,arguments)||0:o(this,e,arguments[1])}})},"V/DX":function(e,t,n){var r=n("0/R4");n("Xtr8")("isSealed",function(e){return function(t){return!r(t)||!!e&&e(t)}})},"V5/Y":function(e,t,n){n("VpUO"),n("eI33"),n("Tze0"),n("XfO3"),n("oDIu"),n("rvZc"),n("L9s1"),n("FLlr"),n("9VmF"),n("hEkN"),n("nIY7"),n("+oPb"),n("SMB2"),n("0mN4"),n("bDcW"),n("nsiH"),n("0LDn"),n("tUrg"),n("84bF"),n("FEjr"),n("Zz4T"),n("JCqj"),n("SRfc"),n("pIFo"),n("OG14"),n("KKXr"),e.exports=n("g3g5").String},VKir:function(e,t,n){"use strict";var r=n("XKFU"),o=n("eeVq"),i=n("vvmO"),a=1..toPrecision;r(r.P+r.F*(o(function(){return"1"!==a.call(1,void 0)})||!o(function(){a.call({})})),"Number",{toPrecision:function(e){var t=i(this,"Number#toPrecision: incorrect invocation!");return void 0===e?a.call(t):a.call(t,e)}})},VTer:function(e,t,n){var r=n("g3g5"),o=n("dyZX"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n("LQAc")?"pure":"global",copyright:"\xa9 2018 Denis Pushkarev (zloirock.ru)"})},VXxg:function(e,t,n){n("Btvt"),n("XfO3"),n("rGqo"),n("T39b"),e.exports=n("g3g5").Set},VbrY:function(e,t,n){n("3xty"),n("I5cv"),n("iMoV"),n("uhZd"),n("f/aN"),n("0YWM"),n("694e"),n("LTTk"),n("9rMk"),n("IlFx"),n("xpiv"),n("oZ/O"),n("klPD"),n("knU9"),e.exports=n("g3g5").Reflect},Vd3H:function(e,t,n){"use strict";var r=n("XKFU"),o=n("2OiF"),i=n("S/j/"),a=n("eeVq"),u=[].sort,s=[1,2,3];r(r.P+r.F*(a(function(){s.sort(void 0)})||!a(function(){s.sort(null)})||!n("LyE8")(u)),"Array",{sort:function(e){return void 0===e?u.call(i(this)):u.call(i(this),o(e))}})},VpUO:function(e,t,n){var r=n("XKFU"),o=n("d/Gc"),i=String.fromCharCode,a=String.fromCodePoint;r(r.S+r.F*(!!a&&1!=a.length),"String",{fromCodePoint:function(e){for(var t,n=[],r=arguments.length,a=0;r>a;){if(t=+arguments[a++],o(t,1114111)!==t)throw RangeError(t+" is not a valid code point");n.push(t<65536?i(t):i(55296+((t-=65536)>>10),t%1024+56320))}return n.join("")}})},WLL4:function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},XKFU:function(e,t,n){var r=n("dyZX"),o=n("g3g5"),i=n("Mukb"),a=n("KroJ"),u=n("m0Pp"),s=function(e,t,n){var c,l,f,h,p=e&s.F,g=e&s.G,d=e&s.P,v=e&s.B,y=g?r:e&s.S?r[t]||(r[t]={}):(r[t]||{}).prototype,m=g?o:o[t]||(o[t]={}),b=m.prototype||(m.prototype={});for(c in g&&(n=t),n)f=((l=!p&&y&&void 0!==y[c])?y:n)[c],h=v&&l?u(f,r):d&&"function"==typeof f?u(Function.call,f):f,y&&a(y,c,f,e&s.U),m[c]!=f&&i(m,c,h),d&&b[c]!=f&&(b[c]=f)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},XMVh:function(e,t,n){var r=n("K0xU")("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(a){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},e(i)}catch(a){}return n}},Xbzi:function(e,t,n){var r=n("0/R4"),o=n("i5dc").set;e.exports=function(e,t,n){var i,a=t.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&r(i)&&o&&o(e,i),e}},XfKG:function(e,t,n){var r=n("XKFU"),o=n("11IZ");r(r.S+r.F*(Number.parseFloat!=o),"Number",{parseFloat:o})},XfO3:function(e,t,n){"use strict";var r=n("AvRE")(!0);n("Afnz")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},Xtr8:function(e,t,n){var r=n("XKFU"),o=n("g3g5"),i=n("eeVq");e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},Xxuz:function(e,t,n){"use strict";var r=n("I8a+"),o=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},YJVH:function(e,t,n){"use strict";var r=n("XKFU"),o=n("CkkT")(4);r(r.P+r.F*!n("LyE8")([].every,!0),"Array",{every:function(e){return o(this,e,arguments[1])}})},YTvA:function(e,t,n){var r=n("VTer")("keys"),o=n("ylqs");e.exports=function(e){return r[e]||(r[e]=o(e))}},Ymqv:function(e,t,n){var r=n("LZWt");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},Z6vF:function(e,t,n){var r=n("ylqs")("meta"),o=n("0/R4"),i=n("aagx"),a=n("hswa").f,u=0,s=Object.isExtensible||function(){return!0},c=!n("eeVq")(function(){return s(Object.preventExtensions({}))}),l=function(e){a(e,r,{value:{i:"O"+ ++u,w:{}}})},f=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,r)){if(!s(e))return"F";if(!t)return"E";l(e)}return e[r].i},getWeak:function(e,t){if(!i(e,r)){if(!s(e))return!0;if(!t)return!1;l(e)}return e[r].w},onFreeze:function(e){return c&&f.NEED&&s(e)&&!i(e,r)&&l(e),e}}},ZD67:function(e,t,n){"use strict";var r=n("3Lyj"),o=n("Z6vF").getWeak,i=n("y3w9"),a=n("0/R4"),u=n("9gX7"),s=n("SlkY"),c=n("CkkT"),l=n("aagx"),f=n("s5qY"),h=c(5),p=c(6),g=0,d=function(e){return e._l||(e._l=new v)},v=function(){this.a=[]},y=function(e,t){return h(e.a,function(e){return e[0]===t})};v.prototype={get:function(e){var t=y(this,e);if(t)return t[1]},has:function(e){return!!y(this,e)},set:function(e,t){var n=y(this,e);n?n[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,function(t){return t[0]===e});return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,n,i){var c=e(function(e,r){u(e,c,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=r&&s(r,n,e[i],e)});return r(c.prototype,{delete:function(e){if(!a(e))return!1;var n=o(e);return!0===n?d(f(this,t)).delete(e):n&&l(n,this._i)&&delete n[this._i]},has:function(e){if(!a(e))return!1;var n=o(e);return!0===n?d(f(this,t)).has(e):n&&l(n,this._i)}}),c},def:function(e,t,n){var r=o(i(t),!0);return!0===r?d(e).set(t,n):r[e._i]=n,e},ufstore:d}},Zshi:function(e,t,n){var r=n("0/R4");n("Xtr8")("isFrozen",function(e){return function(t){return!r(t)||!!e&&e(t)}})},Zz4T:function(e,t,n){"use strict";n("OGtf")("sub",function(e){return function(){return e(this,"sub","","")}})},a1Th:function(e,t,n){"use strict";n("OEbY");var r=n("y3w9"),o=n("C/va"),i=n("nh4g"),a=/./.toString,u=function(e){n("KroJ")(RegExp.prototype,"toString",e,!0)};n("eeVq")(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?u(function(){var e=r(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?o.call(e):void 0)}):"toString"!=a.name&&u(function(){return a.call(this)})},aCFj:function(e,t,n){var r=n("Ymqv"),o=n("vhPU");e.exports=function(e){return r(o(e))}},aagx:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},apmT:function(e,t,n){var r=n("0/R4");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},bBoP:function(e,t,n){var r=n("XKFU"),o=n("LVwc"),i=Math.exp;r(r.S+r.F*n("eeVq")(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(e){return Math.abs(e=+e)<1?(o(e)-o(-e))/2:(i(e-1)-i(-e-1))*(Math.E/2)}})},bDcW:function(e,t,n){"use strict";n("OGtf")("fontcolor",function(e){return function(t){return e(this,"font","color",t)}})},bHtr:function(e,t,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},bWfx:function(e,t,n){"use strict";var r=n("XKFU"),o=n("CkkT")(1);r(r.P+r.F*!n("LyE8")([].map,!0),"Array",{map:function(e){return o(this,e,arguments[1])}})},czNK:function(e,t,n){"use strict";var r=n("DVgA"),o=n("JiEa"),i=n("UqcF"),a=n("S/j/"),u=n("Ymqv"),s=Object.assign;e.exports=!s||n("eeVq")(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=s({},e)[n]||Object.keys(s({},t)).join("")!=r})?function(e,t){for(var n=a(e),s=arguments.length,c=1,l=o.f,f=i.f;s>c;)for(var h,p=u(arguments[c++]),g=l?r(p).concat(l(p)):r(p),d=g.length,v=0;d>v;)f.call(p,h=g[v++])&&(n[h]=p[h]);return n}:s},"d/Gc":function(e,t,n){var r=n("RYi7"),o=Math.max,i=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):i(e,t)}},"dE+T":function(e,t,n){var r=n("XKFU");r(r.P,"Array",{copyWithin:n("upKx")}),n("nGyu")("copyWithin")},dQfE:function(e,t,n){n("XfO3"),n("LK8F"),n("HEwt"),n("6AQ9"),n("Nz9U"),n("I78e"),n("Vd3H"),n("8+KV"),n("bWfx"),n("0l/t"),n("dZ+Y"),n("YJVH"),n("DNiP"),n("SPin"),n("V+eJ"),n("mGWK"),n("dE+T"),n("bHtr"),n("dRSK"),n("INYr"),n("0E+W"),n("yt8O"),e.exports=n("g3g5").Array},dRSK:function(e,t,n){"use strict";var r=n("XKFU"),o=n("CkkT")(5),i=!0;"find"in[]&&Array(1).find(function(){i=!1}),r(r.P+r.F*i,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")("find")},"dZ+Y":function(e,t,n){"use strict";var r=n("XKFU"),o=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(e){return o(this,e,arguments[1])}})},dyZX:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e7yV:function(e,t,n){var r=n("aCFj"),o=n("kJMx").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(t){return a.slice()}}(e):o(r(e))}},eHKK:function(e,t,n){var r=n("XKFU");r(r.S,"Math",{log10:function(e){return Math.log(e)*Math.LOG10E}})},eI33:function(e,t,n){var r=n("XKFU"),o=n("aCFj"),i=n("ne8i");r(r.S,"String",{raw:function(e){for(var t=o(e.raw),n=i(t.length),r=arguments.length,a=[],u=0;n>u;)a.push(String(t[u++])),u<r&&a.push(String(arguments[u]));return a.join("")}})},eM6i:function(e,t,n){var r=n("XKFU");r(r.S,"Date",{now:function(){return(new Date).getTime()}})},eeVq:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},elZq:function(e,t,n){"use strict";var r=n("dyZX"),o=n("hswa"),i=n("nh4g"),a=n("K0xU")("species");e.exports=function(e){var t=r[e];i&&t&&!t[a]&&o.f(t,a,{configurable:!0,get:function(){return this}})}},eyMr:function(e,t,n){var r=n("2OiF"),o=n("S/j/"),i=n("Ymqv"),a=n("ne8i");e.exports=function(e,t,n,u,s){r(t);var c=o(e),l=i(c),f=a(c.length),h=s?f-1:0,p=s?-1:1;if(n<2)for(;;){if(h in l){u=l[h],h+=p;break}if(h+=p,s?h<0:f<=h)throw TypeError("Reduce of empty array with no initial value")}for(;s?h>=0:f>h;h+=p)h in l&&(u=t(u,l[h],h,c));return u}},"f/aN":function(e,t,n){"use strict";var r=n("XKFU"),o=n("y3w9"),i=function(e){this._t=o(e),this._i=0;var t,n=this._k=[];for(t in e)n.push(t)};n("QaDb")(i,"Object",function(){var e,t=this._k;do{if(this._i>=t.length)return{value:void 0,done:!0}}while(!((e=t[this._i++])in this._t));return{value:e,done:!1}}),r(r.S,"Reflect",{enumerate:function(e){return new i(e)}})},"f3/d":function(e,t,n){var r=n("hswa").f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n("nh4g")&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},fL0r:function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},i=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var u in i)void 0===t[u]&&(t[u]=i[u]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c="undefined"==typeof global?self:global,l=Object.freeze({jsx:i,asyncToGenerator:function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,i){try{var a=t[o](i),u=a.value}catch(s){return void n(s)}if(!a.done)return Promise.resolve(u).then(function(e){return r("next",e)},function(e){return r("throw",e)});e(u)}("next")})}},classCallCheck:function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass:a,defineEnumerableProperties:function(e,t){for(var n in t){var r=t[n];r.configurable=r.enumerable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n,r)}return e},defaults:function(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e},defineProperty:u,get:function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},inherits:function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},interopRequireDefault:function(e){return e&&e.__esModule?e:{default:e}},interopRequireWildcard:function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},newArrowCheck:function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")},objectDestructuringEmpty:function(e){if(null==e)throw new TypeError("Cannot destructure undefined")},objectWithoutProperties:function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},possibleConstructorReturn:function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},selfGlobal:c,set:function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var u=i.set;void 0!==u&&u.call(o,r)}return r},slicedToArray:function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},slicedToArrayLoose:function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e)){for(var n,r=[],o=e[Symbol.iterator]();!(n=o.next()).done&&(r.push(n.value),!t||r.length!==t););return r}throw new TypeError("Invalid attempt to destructure non-iterable instance")},taggedTemplateLiteral:function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},taggedTemplateLiteralLoose:function(e,t){return e.raw=t,e},temporalRef:function(e,t,n){if(e===n)throw new ReferenceError(t+" is not defined - temporal dead zone");return e},temporalUndefined:{},toArray:function(e){return Array.isArray(e)?e:Array.from(e)},toConsumableArray:function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},typeof:o,extends:s,instanceof:function(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}}),f=function(){var e=function(){};try{return Object.defineProperty(e,"a",{get:function(){return 1}}),Object.defineProperty(e,"prototype",{writable:!1}),1===e.a&&e.prototype instanceof Object}catch(t){return!1}}(),h=!f&&!Object.prototype.__defineGetter__,p=Object.prototype.hasOwnProperty,g=f?Object.defineProperty:function(e,t,n){"get"in n&&e.__defineGetter__?e.__defineGetter__(t,n.get):(!p.call(e,t)||"value"in n)&&(e[t]=n.value)},d=Array.prototype.indexOf||function(e){var t=this;if(!t.length)return-1;for(var n=arguments[1]||0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},v=Object.create||function(e,t){var n;function r(){}for(var o in r.prototype=e,n=new r,t)p.call(t,o)&&g(n,o,t[o]);return n},y=Array.prototype.slice,m=Array.prototype.concat,b=Array.prototype.push,k=Array.prototype.join,w=Array.prototype.shift,S=Function.prototype.bind||function(e){var t=this,n=y.call(arguments,1);return function(){return t.apply(e,m.call(n,y.call(arguments)))}},M=v(null),T=Math.random();function E(e){for(var t in e)(e instanceof E||p.call(e,t))&&g(this,t,{value:e[t],enumerable:!0,writable:!0,configurable:!0})}function x(){g(this,"length",{writable:!0,value:0}),arguments.length&&b.apply(this,y.call(arguments))}function _(){if(M.disableRegExpRestore)return function(){};for(var e={lastMatch:RegExp.lastMatch||"",leftContext:RegExp.leftContext,multiline:RegExp.multiline,input:RegExp.input},t=!1,n=1;n<=9;n++)t=(e["$"+n]=RegExp["$"+n])||t;return function(){var n=/[.?*+^$[\]\\(){}|-]/g,r=e.lastMatch.replace(n,"\\$&"),o=new x;if(t)for(var i=1;i<=9;i++){var a=e["$"+i];a?(a=a.replace(n,"\\$&"),r=r.replace(a,"("+a+")")):r="()"+r,b.call(o,r.slice(0,r.indexOf("(")+1)),r=r.slice(r.indexOf("(")+1)}var u=k.call(o,"")+r;u=u.replace(/(\\\(|\\\)|[^()])+/g,function(e){return"[\\s\\S]{"+e.replace("\\","").length+"}"});var s=new RegExp(u,e.multiline?"gm":"g");s.lastIndex=e.leftContext.length,s.exec(e.input)}}function F(e){if(null===e)throw new TypeError("Cannot convert null or undefined to object");return"object"===(void 0===e?"undefined":l.typeof(e))?e:Object(e)}function j(e){return"number"==typeof e?e:Number(e)}function O(e){return p.call(e,"__getInternalProperties")?e.__getInternalProperties(T):v(null)}E.prototype=v(null),x.prototype=v(null);var K=RegExp("^(?:(?:[a-z]{2,3}(?:-[a-z]{3}(?:-[a-z]{3}){0,2})?|[a-z]{4}|[a-z]{5,8})(?:-[a-z]{4})?(?:-(?:[a-z]{2}|\\d{3}))?(?:-(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3}))*(?:-[0-9a-wy-z](?:-[a-z0-9]{2,8})+)*(?:-x(?:-[a-z0-9]{1,8})+)?|x(?:-[a-z0-9]{1,8})+|(?:(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))))$","i"),P=RegExp("^(?!x).*?-((?:[a-z0-9]{5,8}|\\d[a-z0-9]{3}))-(?:\\w{4,8}-(?!x-))*\\1\\b","i"),D=RegExp("^(?!x).*?-([0-9a-wy-z])-(?:\\w+-(?!x-))*\\1\\b","i"),A=RegExp("-[0-9a-wy-z](?:-[a-z0-9]{2,8})+","ig"),z=void 0,N={tags:{"art-lojban":"jbo","i-ami":"ami","i-bnn":"bnn","i-hak":"hak","i-klingon":"tlh","i-lux":"lb","i-navajo":"nv","i-pwn":"pwn","i-tao":"tao","i-tay":"tay","i-tsu":"tsu","no-bok":"nb","no-nyn":"nn","sgn-BE-FR":"sfb","sgn-BE-NL":"vgt","sgn-CH-DE":"sgg","zh-guoyu":"cmn","zh-hakka":"hak","zh-min-nan":"nan","zh-xiang":"hsn","sgn-BR":"bzs","sgn-CO":"csn","sgn-DE":"gsg","sgn-DK":"dsl","sgn-ES":"ssp","sgn-FR":"fsl","sgn-GB":"bfi","sgn-GR":"gss","sgn-IE":"isg","sgn-IT":"ise","sgn-JP":"jsl","sgn-MX":"mfs","sgn-NI":"ncs","sgn-NL":"dse","sgn-NO":"nsl","sgn-PT":"psr","sgn-SE":"swl","sgn-US":"ase","sgn-ZA":"sfs","zh-cmn":"cmn","zh-cmn-Hans":"cmn-Hans","zh-cmn-Hant":"cmn-Hant","zh-gan":"gan","zh-wuu":"wuu","zh-yue":"yue"},subtags:{BU:"MM",DD:"DE",FX:"FR",TP:"TL",YD:"YE",ZR:"CD",heploc:"alalc97",in:"id",iw:"he",ji:"yi",jw:"jv",mo:"ro",ayx:"nun",bjd:"drl",ccq:"rki",cjr:"mom",cka:"cmr",cmk:"xch",drh:"khk",drw:"prs",gav:"dev",hrr:"jal",ibi:"opa",kgh:"kml",lcq:"ppr",mst:"mry",myt:"mry",sca:"hle",tie:"ras",tkk:"twm",tlw:"weo",tnf:"prs",ybd:"rki",yma:"lrr"},extLang:{aao:["aao","ar"],abh:["abh","ar"],abv:["abv","ar"],acm:["acm","ar"],acq:["acq","ar"],acw:["acw","ar"],acx:["acx","ar"],acy:["acy","ar"],adf:["adf","ar"],ads:["ads","sgn"],aeb:["aeb","ar"],aec:["aec","ar"],aed:["aed","sgn"],aen:["aen","sgn"],afb:["afb","ar"],afg:["afg","sgn"],ajp:["ajp","ar"],apc:["apc","ar"],apd:["apd","ar"],arb:["arb","ar"],arq:["arq","ar"],ars:["ars","ar"],ary:["ary","ar"],arz:["arz","ar"],ase:["ase","sgn"],asf:["asf","sgn"],asp:["asp","sgn"],asq:["asq","sgn"],asw:["asw","sgn"],auz:["auz","ar"],avl:["avl","ar"],ayh:["ayh","ar"],ayl:["ayl","ar"],ayn:["ayn","ar"],ayp:["ayp","ar"],bbz:["bbz","ar"],bfi:["bfi","sgn"],bfk:["bfk","sgn"],bjn:["bjn","ms"],bog:["bog","sgn"],bqn:["bqn","sgn"],bqy:["bqy","sgn"],btj:["btj","ms"],bve:["bve","ms"],bvl:["bvl","sgn"],bvu:["bvu","ms"],bzs:["bzs","sgn"],cdo:["cdo","zh"],cds:["cds","sgn"],cjy:["cjy","zh"],cmn:["cmn","zh"],coa:["coa","ms"],cpx:["cpx","zh"],csc:["csc","sgn"],csd:["csd","sgn"],cse:["cse","sgn"],csf:["csf","sgn"],csg:["csg","sgn"],csl:["csl","sgn"],csn:["csn","sgn"],csq:["csq","sgn"],csr:["csr","sgn"],czh:["czh","zh"],czo:["czo","zh"],doq:["doq","sgn"],dse:["dse","sgn"],dsl:["dsl","sgn"],dup:["dup","ms"],ecs:["ecs","sgn"],esl:["esl","sgn"],esn:["esn","sgn"],eso:["eso","sgn"],eth:["eth","sgn"],fcs:["fcs","sgn"],fse:["fse","sgn"],fsl:["fsl","sgn"],fss:["fss","sgn"],gan:["gan","zh"],gds:["gds","sgn"],gom:["gom","kok"],gse:["gse","sgn"],gsg:["gsg","sgn"],gsm:["gsm","sgn"],gss:["gss","sgn"],gus:["gus","sgn"],hab:["hab","sgn"],haf:["haf","sgn"],hak:["hak","zh"],hds:["hds","sgn"],hji:["hji","ms"],hks:["hks","sgn"],hos:["hos","sgn"],hps:["hps","sgn"],hsh:["hsh","sgn"],hsl:["hsl","sgn"],hsn:["hsn","zh"],icl:["icl","sgn"],ils:["ils","sgn"],inl:["inl","sgn"],ins:["ins","sgn"],ise:["ise","sgn"],isg:["isg","sgn"],isr:["isr","sgn"],jak:["jak","ms"],jax:["jax","ms"],jcs:["jcs","sgn"],jhs:["jhs","sgn"],jls:["jls","sgn"],jos:["jos","sgn"],jsl:["jsl","sgn"],jus:["jus","sgn"],kgi:["kgi","sgn"],knn:["knn","kok"],kvb:["kvb","ms"],kvk:["kvk","sgn"],kvr:["kvr","ms"],kxd:["kxd","ms"],lbs:["lbs","sgn"],lce:["lce","ms"],lcf:["lcf","ms"],liw:["liw","ms"],lls:["lls","sgn"],lsg:["lsg","sgn"],lsl:["lsl","sgn"],lso:["lso","sgn"],lsp:["lsp","sgn"],lst:["lst","sgn"],lsy:["lsy","sgn"],ltg:["ltg","lv"],lvs:["lvs","lv"],lzh:["lzh","zh"],max:["max","ms"],mdl:["mdl","sgn"],meo:["meo","ms"],mfa:["mfa","ms"],mfb:["mfb","ms"],mfs:["mfs","sgn"],min:["min","ms"],mnp:["mnp","zh"],mqg:["mqg","ms"],mre:["mre","sgn"],msd:["msd","sgn"],msi:["msi","ms"],msr:["msr","sgn"],mui:["mui","ms"],mzc:["mzc","sgn"],mzg:["mzg","sgn"],mzy:["mzy","sgn"],nan:["nan","zh"],nbs:["nbs","sgn"],ncs:["ncs","sgn"],nsi:["nsi","sgn"],nsl:["nsl","sgn"],nsp:["nsp","sgn"],nsr:["nsr","sgn"],nzs:["nzs","sgn"],okl:["okl","sgn"],orn:["orn","ms"],ors:["ors","ms"],pel:["pel","ms"],pga:["pga","ar"],pks:["pks","sgn"],prl:["prl","sgn"],prz:["prz","sgn"],psc:["psc","sgn"],psd:["psd","sgn"],pse:["pse","ms"],psg:["psg","sgn"],psl:["psl","sgn"],pso:["pso","sgn"],psp:["psp","sgn"],psr:["psr","sgn"],pys:["pys","sgn"],rms:["rms","sgn"],rsi:["rsi","sgn"],rsl:["rsl","sgn"],sdl:["sdl","sgn"],sfb:["sfb","sgn"],sfs:["sfs","sgn"],sgg:["sgg","sgn"],sgx:["sgx","sgn"],shu:["shu","ar"],slf:["slf","sgn"],sls:["sls","sgn"],sqk:["sqk","sgn"],sqs:["sqs","sgn"],ssh:["ssh","ar"],ssp:["ssp","sgn"],ssr:["ssr","sgn"],svk:["svk","sgn"],swc:["swc","sw"],swh:["swh","sw"],swl:["swl","sgn"],syy:["syy","sgn"],tmw:["tmw","ms"],tse:["tse","sgn"],tsm:["tsm","sgn"],tsq:["tsq","sgn"],tss:["tss","sgn"],tsy:["tsy","sgn"],tza:["tza","sgn"],ugn:["ugn","sgn"],ugy:["ugy","sgn"],ukl:["ukl","sgn"],uks:["uks","sgn"],urk:["urk","ms"],uzn:["uzn","uz"],uzs:["uzs","uz"],vgt:["vgt","sgn"],vkk:["vkk","ms"],vkt:["vkt","ms"],vsi:["vsi","sgn"],vsl:["vsl","sgn"],vsv:["vsv","sgn"],wuu:["wuu","zh"],xki:["xki","sgn"],xml:["xml","sgn"],xmm:["xmm","ms"],xms:["xms","sgn"],yds:["yds","sgn"],ysl:["ysl","sgn"],yue:["yue","zh"],zib:["zib","sgn"],zlm:["zlm","ms"],zmi:["zmi","ms"],zsl:["zsl","sgn"],zsm:["zsm","ms"]}};function R(e){for(var t=e.length;t--;){var n=e.charAt(t);n>="a"&&n<="z"&&(e=e.slice(0,t)+n.toUpperCase()+e.slice(t+1))}return e}function I(e){return!!K.test(e)&&!P.test(e)&&!D.test(e)}function L(e){for(var t=void 0,n=void 0,r=1,o=(n=(e=e.toLowerCase()).split("-")).length;r<o;r++)if(2===n[r].length)n[r]=n[r].toUpperCase();else if(4===n[r].length)n[r]=n[r].charAt(0).toUpperCase()+n[r].slice(1);else if(1===n[r].length&&"x"!==n[r])break;(t=(e=k.call(n,"-")).match(A))&&t.length>1&&(t.sort(),e=e.replace(RegExp("(?:"+A.source+")+","i"),k.call(t,""))),p.call(N.tags,e)&&(e=N.tags[e]);for(var i=1,a=(n=e.split("-")).length;i<a;i++)p.call(N.subtags,n[i])?n[i]=N.subtags[n[i]]:p.call(N.extLang,n[i])&&(n[i]=N.extLang[n[i]][0],1===i&&N.extLang[n[1]][1]===n[0]&&(n=y.call(n,i++),a-=1));return k.call(n,"-")}var C=/^[A-Z]{3}$/,U=/-u(?:-[0-9a-z]{2,8})+/gi;function X(e){if(void 0===e)return new x;for(var t=new x,n=F(e="string"==typeof e?[e]:e),r=function(e){var t=function(e){var t=j(e);return isNaN(t)?0:0===t||-0===t||t===1/0||t===-1/0?t:t<0?-1*Math.floor(Math.abs(t)):Math.floor(Math.abs(t))}(n.length);return t<=0?0:t===1/0?Math.pow(2,53)-1:Math.min(t,Math.pow(2,53)-1)}(),o=0;o<r;){var i=String(o);if(i in n){var a=n[i];if(null===a||"string"!=typeof a&&"object"!==(void 0===a?"undefined":l.typeof(a)))throw new TypeError("String or Object type expected");var u=String(a);if(!I(u))throw new RangeError("'"+u+"' is not a structurally valid language tag");u=L(u),-1===d.call(t,u)&&b.call(t,u)}o++}return t}function Z(e,t){for(var n=t;n;){if(d.call(e,n)>-1)return n;var r=n.lastIndexOf("-");if(r<0)return;r>=2&&"-"===n.charAt(r-2)&&(r-=2),n=n.substring(0,r)}}function H(e,t){for(var n=0,r=t.length,o=void 0,i=void 0,a=void 0;n<r&&!o;)i=t[n],o=Z(e,a=String(i).replace(U,"")),n++;var u=new E;if(void 0!==o){if(u["[[locale]]"]=o,String(i)!==String(a)){var s=i.match(U)[0],c=i.indexOf("-u-");u["[[extension]]"]=s,u["[[extensionIndex]]"]=c}}else u["[[locale]]"]=z;return u}function J(e,t,n,r,o){if(0===e.length)throw new ReferenceError("No locale data has been provided for this object yet.");var i,a=(i="lookup"===n["[[localeMatcher]]"]?H(e,t):function(e,t){return H(e,t)}(e,t))["[[locale]]"],u=void 0,s=void 0;p.call(i,"[[extension]]")&&(s=(u=String.prototype.split.call(i["[[extension]]"],"-")).length);var c=new E;c["[[dataLocale]]"]=a;for(var l="-u",f=0,h=r.length;f<h;){var g=r[f],v=o[a][g],y=v[0],m="",b=d;if(void 0!==u){var k=b.call(u,g);if(-1!==k)if(k+1<s&&u[k+1].length>2){var w=u[k+1];-1!==b.call(v,w)&&(m="-"+g+"-"+(y=w))}else-1!==b(v,"true")&&(y="true")}if(p.call(n,"[["+g+"]]")){var S=n["[["+g+"]]"];-1!==b.call(v,S)&&S!==y&&(y=S,m="")}c["[["+g+"]]"]=y,l+=m,f++}if(l.length>2){var M=a.indexOf("-x-");if(-1===M)a+=l;else{var T=a.substring(0,M),x=a.substring(M);a=T+l+x}a=L(a)}return c["[[locale]]"]=a,c}function G(e,t){for(var n=t.length,r=new x,o=0;o<n;){var i=t[o];void 0!==Z(e,String(i).replace(U,""))&&b.call(r,i),o++}return y.call(r)}function q(e,t,n){var r,o=void 0;if(void 0!==n&&void 0!==(o=(n=new E(F(n))).localeMatcher)&&"lookup"!==(o=String(o))&&"best fit"!==o)throw new RangeError('matcher should be "lookup" or "best fit"');for(var i in r=void 0===o||"best fit"===o?function(e,t){return G(e,t)}(e,t):G(e,t))p.call(r,i)&&g(r,i,{writable:!1,configurable:!1,value:r[i]});return g(r,"length",{writable:!1}),r}function B(e,t,n,r,o){var i=e[t];if(void 0!==i){if(i="boolean"===n?Boolean(i):"string"===n?String(i):i,void 0!==r&&-1===d.call(r,i))throw new RangeError("'"+i+"' is not an allowed value for `"+t+"`");return i}return o}function W(e,t,n,r,o){var i=e[t];if(void 0!==i){if(i=Number(i),isNaN(i)||i<n||i>r)throw new RangeError("Value is not a number or outside accepted range");return Math.floor(i)}return o}var V={};Object.defineProperty(V,"getCanonicalLocales",{enumerable:!1,configurable:!0,writable:!0,value:function(e){for(var t=X(e),n=[],r=t.length,o=0;o<r;)n[o]=t[o],o++;return n}});var Y={BHD:3,BYR:0,XOF:0,BIF:0,XAF:0,CLF:4,CLP:0,KMF:0,DJF:0,XPF:0,GNF:0,ISK:0,IQD:3,JPY:0,JOD:3,KRW:0,KWD:3,LYD:3,OMR:3,PYG:0,RWF:0,TND:3,UGX:0,UYI:0,VUV:0,VND:0};function Q(){var e=arguments[0],t=arguments[1];return this&&this!==V?function(e,t,n){var r=O(e),o=_();if(!0===r["[[initializedIntlObject]]"])throw new TypeError("`this` object has already been initialized as an Intl object");g(e,"__getInternalProperties",{value:function(){if(arguments[0]===T)return r}}),r["[[initializedIntlObject]]"]=!0;var i=X(t);n=void 0===n?{}:F(n);var a=new E,u=B(n,"localeMatcher","string",new x("lookup","best fit"),"best fit");a["[[localeMatcher]]"]=u;var s=M.NumberFormat["[[localeData]]"],c=J(M.NumberFormat["[[availableLocales]]"],i,a,M.NumberFormat["[[relevantExtensionKeys]]"],s);r["[[locale]]"]=c["[[locale]]"],r["[[numberingSystem]]"]=c["[[nu]]"],r["[[dataLocale]]"]=c["[[dataLocale]]"];var l=c["[[dataLocale]]"],f=B(n,"style","string",new x("decimal","percent","currency"),"decimal");r["[[style]]"]=f;var p,d=B(n,"currency","string");if(void 0!==d&&(p=R(String(d)),!1===C.test(p)))throw new RangeError("'"+d+"' is not a valid currency code");if("currency"===f&&void 0===d)throw new TypeError("Currency code is required when style is currency");var v=void 0;"currency"===f&&(d=d.toUpperCase(),r["[[currency]]"]=d,v=void 0!==Y[d]?Y[d]:2);var y=B(n,"currencyDisplay","string",new x("code","symbol","name"),"symbol");"currency"===f&&(r["[[currencyDisplay]]"]=y);var m=W(n,"minimumIntegerDigits",1,21,1);r["[[minimumIntegerDigits]]"]=m;var b=W(n,"minimumFractionDigits",0,20,"currency"===f?v:0);r["[[minimumFractionDigits]]"]=b;var k=W(n,"maximumFractionDigits",b,20,"currency"===f?Math.max(b,v):"percent"===f?Math.max(b,0):Math.max(b,3));r["[[maximumFractionDigits]]"]=k;var w=n.minimumSignificantDigits,S=n.maximumSignificantDigits;void 0===w&&void 0===S||(w=W(n,"minimumSignificantDigits",1,21,1),S=W(n,"maximumSignificantDigits",w,21,21),r["[[minimumSignificantDigits]]"]=w,r["[[maximumSignificantDigits]]"]=S);var j=B(n,"useGrouping","boolean",void 0,!0);r["[[useGrouping]]"]=j;var K=s[l].patterns[f];return r["[[positivePattern]]"]=K.positivePattern,r["[[negativePattern]]"]=K.negativePattern,r["[[boundFormat]]"]=void 0,r["[[initializedNumberFormat]]"]=!0,h&&(e.format=$.call(e)),o(),e}(F(this),e,t):new V.NumberFormat(e,t)}function $(){var e=null!==this&&"object"===l.typeof(this)&&O(this);if(!e||!e["[[initializedNumberFormat]]"])throw new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");if(void 0===e["[[boundFormat]]"]){var t=S.call(function(e){return te(this,Number(e))},this);e["[[boundFormat]]"]=t}return e["[[boundFormat]]"]}function ee(e,t){var n=O(e),r=n["[[numberingSystem]]"],o=M.NumberFormat["[[localeData]]"][n["[[dataLocale]]"]],i=o.symbols[r]||o.symbols.latn,a=void 0;!isNaN(t)&&t<0?(t=-t,a=n["[[negativePattern]]"]):a=n["[[positivePattern]]"];for(var u=new x,s=a.indexOf("{",0),c=0,l=0,f=a.length;s>-1&&s<f;){if(-1===(c=a.indexOf("}",s)))throw new Error;if(s>l){var h=a.substring(l,s);b.call(u,{"[[type]]":"literal","[[value]]":h})}var g=a.substring(s+1,c);if("number"===g)if(isNaN(t))b.call(u,{"[[type]]":"nan","[[value]]":i.nan});else if(isFinite(t)){"percent"===n["[[style]]"]&&isFinite(t)&&(t*=100);var d=void 0;d=p.call(n,"[[minimumSignificantDigits]]")&&p.call(n,"[[maximumSignificantDigits]]")?ne(t,n["[[minimumSignificantDigits]]"],n["[[maximumSignificantDigits]]"]):re(t,n["[[minimumIntegerDigits]]"],n["[[minimumFractionDigits]]"],n["[[maximumFractionDigits]]"]),oe[r]?function(){var e=oe[r];d=String(d).replace(/\d/g,function(t){return e[t]})}():d=String(d);var v=void 0,y=void 0,m=d.indexOf(".",0);if(m>0?(v=d.substring(0,m),y=d.substring(m+1,m.length)):(v=d,y=void 0),!0===n["[[useGrouping]]"]){var k=i.group,S=[],T=o.patterns.primaryGroupSize||3,E=o.patterns.secondaryGroupSize||T;if(v.length>T){var _=v.length-T,F=_%E,j=v.slice(0,F);for(j.length&&b.call(S,j);F<_;)b.call(S,v.slice(F,F+E)),F+=E;b.call(S,v.slice(_))}else b.call(S,v);if(0===S.length)throw new Error;for(;S.length;){var K=w.call(S);b.call(u,{"[[type]]":"integer","[[value]]":K}),S.length&&b.call(u,{"[[type]]":"group","[[value]]":k})}}else b.call(u,{"[[type]]":"integer","[[value]]":v});void 0!==y&&(b.call(u,{"[[type]]":"decimal","[[value]]":i.decimal}),b.call(u,{"[[type]]":"fraction","[[value]]":y}))}else b.call(u,{"[[type]]":"infinity","[[value]]":i.infinity});else if("plusSign"===g)b.call(u,{"[[type]]":"plusSign","[[value]]":i.plusSign});else if("minusSign"===g)b.call(u,{"[[type]]":"minusSign","[[value]]":i.minusSign});else if("percentSign"===g&&"percent"===n["[[style]]"])b.call(u,{"[[type]]":"literal","[[value]]":i.percentSign});else if("currency"===g&&"currency"===n["[[style]]"]){var P=n["[[currency]]"],D=void 0;"code"===n["[[currencyDisplay]]"]?D=P:"symbol"===n["[[currencyDisplay]]"]?D=o.currencies[P]||P:"name"===n["[[currencyDisplay]]"]&&(D=P),b.call(u,{"[[type]]":"currency","[[value]]":D})}else{var A=a.substring(s,c);b.call(u,{"[[type]]":"literal","[[value]]":A})}s=a.indexOf("{",l=c+1)}if(l<f){var z=a.substring(l,f);b.call(u,{"[[type]]":"literal","[[value]]":z})}return u}function te(e,t){for(var n=ee(e,t),r="",o=0;n.length>o;o++)r+=n[o]["[[value]]"];return r}function ne(e,t,n){var r=n,o=void 0,i=void 0;if(0===e)o=k.call(Array(r+1),"0"),i=0;else{i=function(e){if("function"==typeof Math.log10)return Math.floor(Math.log10(e));var t=Math.round(Math.log(e)*Math.LOG10E);return t-(Number("1e"+t)>e)}(Math.abs(e));var a=Math.round(Math.exp(Math.abs(i-r+1)*Math.LN10));o=String(Math.round(i-r+1<0?e*a:e/a))}if(i>=r)return o+k.call(Array(i-r+1+1),"0");if(i===r-1)return o;if(i>=0?o=o.slice(0,i+1)+"."+o.slice(i+1):i<0&&(o="0."+k.call(Array(1-(i+1)),"0")+o),o.indexOf(".")>=0&&n>t){for(var u=n-t;u>0&&"0"===o.charAt(o.length-1);)o=o.slice(0,-1),u--;"."===o.charAt(o.length-1)&&(o=o.slice(0,-1))}return o}function re(e,t,n,r){var o,i=r,a=Math.pow(10,i)*e,u=0===a?"0":a.toFixed(0),s=(o=u.indexOf("e"))>-1?u.slice(o+1):0;s&&(u=u.slice(0,o).replace(".",""),u+=k.call(Array(s-(u.length-1)+1),"0"));var c=void 0;if(0!==i){var l=u.length;l<=i&&(u=k.call(Array(i+1-l+1),"0")+u,l=i+1);var f=u.substring(0,l-i),h=u.substring(l-i,u.length);u=f+"."+h,c=f.length}else c=u.length;for(var p=r-n;p>0&&"0"===u.slice(-1);)u=u.slice(0,-1),p--;return"."===u.slice(-1)&&(u=u.slice(0,-1)),c<t&&(u=k.call(Array(t-c+1),"0")+u),u}g(V,"NumberFormat",{configurable:!0,writable:!0,value:Q}),g(V.NumberFormat,"prototype",{writable:!1}),M.NumberFormat={"[[availableLocales]]":[],"[[relevantExtensionKeys]]":["nu"],"[[localeData]]":{}},g(V.NumberFormat,"supportedLocalesOf",{configurable:!0,writable:!0,value:S.call(function(e){if(!p.call(this,"[[availableLocales]]"))throw new TypeError("supportedLocalesOf() is not a constructor");var t=_(),n=arguments[1],r=this["[[availableLocales]]"],o=X(e);return t(),q(r,o,n)},M.NumberFormat)}),g(V.NumberFormat.prototype,"format",{configurable:!0,get:$}),Object.defineProperty(V.NumberFormat.prototype,"formatToParts",{configurable:!0,enumerable:!1,writable:!0,value:function(){var e=arguments.length<=0||void 0===arguments[0]?void 0:arguments[0],t=null!==this&&"object"===l.typeof(this)&&O(this);if(!t||!t["[[initializedNumberFormat]]"])throw new TypeError("`this` value for formatToParts() is not an initialized Intl.NumberFormat object.");return function(t,n){for(var r=ee(t,Number(e)),o=[],i=0,a=0;r.length>a;a++){var u=r[a],s={};s.type=u["[[type]]"],s.value=u["[[value]]"],o[i]=s,i+=1}return o}(this)}});var oe={arab:["\u0660","\u0661","\u0662","\u0663","\u0664","\u0665","\u0666","\u0667","\u0668","\u0669"],arabext:["\u06f0","\u06f1","\u06f2","\u06f3","\u06f4","\u06f5","\u06f6","\u06f7","\u06f8","\u06f9"],bali:["\u1b50","\u1b51","\u1b52","\u1b53","\u1b54","\u1b55","\u1b56","\u1b57","\u1b58","\u1b59"],beng:["\u09e6","\u09e7","\u09e8","\u09e9","\u09ea","\u09eb","\u09ec","\u09ed","\u09ee","\u09ef"],deva:["\u0966","\u0967","\u0968","\u0969","\u096a","\u096b","\u096c","\u096d","\u096e","\u096f"],fullwide:["\uff10","\uff11","\uff12","\uff13","\uff14","\uff15","\uff16","\uff17","\uff18","\uff19"],gujr:["\u0ae6","\u0ae7","\u0ae8","\u0ae9","\u0aea","\u0aeb","\u0aec","\u0aed","\u0aee","\u0aef"],guru:["\u0a66","\u0a67","\u0a68","\u0a69","\u0a6a","\u0a6b","\u0a6c","\u0a6d","\u0a6e","\u0a6f"],hanidec:["\u3007","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d"],khmr:["\u17e0","\u17e1","\u17e2","\u17e3","\u17e4","\u17e5","\u17e6","\u17e7","\u17e8","\u17e9"],knda:["\u0ce6","\u0ce7","\u0ce8","\u0ce9","\u0cea","\u0ceb","\u0cec","\u0ced","\u0cee","\u0cef"],laoo:["\u0ed0","\u0ed1","\u0ed2","\u0ed3","\u0ed4","\u0ed5","\u0ed6","\u0ed7","\u0ed8","\u0ed9"],latn:["0","1","2","3","4","5","6","7","8","9"],limb:["\u1946","\u1947","\u1948","\u1949","\u194a","\u194b","\u194c","\u194d","\u194e","\u194f"],mlym:["\u0d66","\u0d67","\u0d68","\u0d69","\u0d6a","\u0d6b","\u0d6c","\u0d6d","\u0d6e","\u0d6f"],mong:["\u1810","\u1811","\u1812","\u1813","\u1814","\u1815","\u1816","\u1817","\u1818","\u1819"],mymr:["\u1040","\u1041","\u1042","\u1043","\u1044","\u1045","\u1046","\u1047","\u1048","\u1049"],orya:["\u0b66","\u0b67","\u0b68","\u0b69","\u0b6a","\u0b6b","\u0b6c","\u0b6d","\u0b6e","\u0b6f"],tamldec:["\u0be6","\u0be7","\u0be8","\u0be9","\u0bea","\u0beb","\u0bec","\u0bed","\u0bee","\u0bef"],telu:["\u0c66","\u0c67","\u0c68","\u0c69","\u0c6a","\u0c6b","\u0c6c","\u0c6d","\u0c6e","\u0c6f"],thai:["\u0e50","\u0e51","\u0e52","\u0e53","\u0e54","\u0e55","\u0e56","\u0e57","\u0e58","\u0e59"],tibt:["\u0f20","\u0f21","\u0f22","\u0f23","\u0f24","\u0f25","\u0f26","\u0f27","\u0f28","\u0f29"]};g(V.NumberFormat.prototype,"resolvedOptions",{configurable:!0,writable:!0,value:function(){var e=void 0,t=new E,n=["locale","numberingSystem","style","currency","currencyDisplay","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","useGrouping"],r=null!==this&&"object"===l.typeof(this)&&O(this);if(!r||!r["[[initializedNumberFormat]]"])throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");for(var o=0,i=n.length;o<i;o++)p.call(r,e="[["+n[o]+"]]")&&(t[n[o]]={value:r[e],writable:!0,configurable:!0,enumerable:!0});return v({},t)}});var ie=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,ae=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ue=/[rqQASjJgwWIQq]/,se=["era","year","month","day","weekday","quarter"],ce=["hour","minute","second","hour12","timeZoneName"];function le(e){for(var t=0;t<ce.length;t+=1)if(e.hasOwnProperty(ce[t]))return!1;return!0}function fe(e){for(var t=0;t<se.length;t+=1)if(e.hasOwnProperty(se[t]))return!1;return!0}function he(e,t){for(var n={_:{}},r=0;r<se.length;r+=1)e[se[r]]&&(n[se[r]]=e[se[r]]),e._[se[r]]&&(n._[se[r]]=e._[se[r]]);for(var o=0;o<ce.length;o+=1)t[ce[o]]&&(n[ce[o]]=t[ce[o]]),t._[ce[o]]&&(n._[ce[o]]=t._[ce[o]]);return n}function pe(e){return e.pattern12=e.extendedPattern.replace(/'([^']*)'/g,function(e,t){return t||"'"}),e.pattern=e.pattern12.replace("{ampm}","").replace(ae,""),e}function ge(e,t){switch(e.charAt(0)){case"G":return t.era=["short","short","short","long","narrow"][e.length-1],"{era}";case"y":case"Y":case"u":case"U":case"r":return t.year=2===e.length?"2-digit":"numeric","{year}";case"Q":case"q":return t.quarter=["numeric","2-digit","short","long","narrow"][e.length-1],"{quarter}";case"M":case"L":return t.month=["numeric","2-digit","short","long","narrow"][e.length-1],"{month}";case"w":return t.week=2===e.length?"2-digit":"numeric","{weekday}";case"W":return t.week="numeric","{weekday}";case"d":return t.day=2===e.length?"2-digit":"numeric","{day}";case"D":case"F":case"g":return t.day="numeric","{day}";case"E":return t.weekday=["short","short","short","long","narrow","short"][e.length-1],"{weekday}";case"e":return t.weekday=["numeric","2-digit","short","long","narrow","short"][e.length-1],"{weekday}";case"c":return t.weekday=["numeric",void 0,"short","long","narrow","short"][e.length-1],"{weekday}";case"a":case"b":case"B":return t.hour12=!0,"{ampm}";case"h":case"H":return t.hour=2===e.length?"2-digit":"numeric","{hour}";case"k":case"K":return t.hour12=!0,t.hour=2===e.length?"2-digit":"numeric","{hour}";case"m":return t.minute=2===e.length?"2-digit":"numeric","{minute}";case"s":return t.second=2===e.length?"2-digit":"numeric","{second}";case"S":case"A":return t.second="numeric","{second}";case"z":case"Z":case"O":case"v":case"V":case"X":case"x":return t.timeZoneName=e.length<4?"short":"long","{timeZoneName}"}}function de(e,t){if(!ue.test(t)){var n={originalPattern:t,_:{}};return n.extendedPattern=t.replace(ie,function(e){return ge(e,n._)}),e.replace(ie,function(e){return ge(e,n)}),pe(n)}}var ve={second:{numeric:"s","2-digit":"ss"},minute:{numeric:"m","2-digit":"mm"},year:{numeric:"y","2-digit":"yy"},day:{numeric:"d","2-digit":"dd"},month:{numeric:"L","2-digit":"LL",narrow:"LLLLL",short:"LLL",long:"LLLL"},weekday:{narrow:"ccccc",short:"ccc",long:"cccc"}},ye=v(null,{narrow:{},short:{},long:{}});function me(e,t,n,r,o){var i=e[t]&&e[t][n]?e[t][n]:e.gregory[n],a={narrow:["short","long"],short:["long","narrow"],long:["short","narrow"]},u=p.call(i,r)?i[r]:p.call(i,a[r][0])?i[a[r][0]]:i[a[r][1]];return null!==o?u[o]:u}function be(){var e=arguments[0],t=arguments[1];return this&&this!==V?function(e,t,n){var r=O(e),o=_();if(!0===r["[[initializedIntlObject]]"])throw new TypeError("`this` object has already been initialized as an Intl object");g(e,"__getInternalProperties",{value:function(){if(arguments[0]===T)return r}}),r["[[initializedIntlObject]]"]=!0;var i=X(t);n=we(n,"any","date");var a=new E,s=B(n,"localeMatcher","string",new x("lookup","best fit"),"best fit");a["[[localeMatcher]]"]=s;var c=M.DateTimeFormat,l=c["[[localeData]]"],f=J(c["[[availableLocales]]"],i,a,c["[[relevantExtensionKeys]]"],l);r["[[locale]]"]=f["[[locale]]"],r["[[calendar]]"]=f["[[ca]]"],r["[[numberingSystem]]"]=f["[[nu]]"],r["[[dataLocale]]"]=f["[[dataLocale]]"];var v=f["[[dataLocale]]"],y=n.timeZone;if(void 0!==y&&"UTC"!==(y=R(y)))throw new RangeError("timeZone is not supported.");for(var m in r["[[timeZone]]"]=y,a=new E,ke)if(p.call(ke,m)){var b=B(n,m,"string",ke[m]);a["[["+m+"]]"]=b}var k=void 0,w=l[v],S=function(e){return"[object Array]"===Object.prototype.toString.call(e)?e:function(e){var t=e.availableFormats,n=e.timeFormats,r=e.dateFormats,o=[],i=void 0,a=void 0,u=void 0,s=void 0,c=void 0,l=[],f=[];for(i in t)t.hasOwnProperty(i)&&(u=de(i,a=t[i]))&&(o.push(u),le(u)?f.push(u):fe(u)&&l.push(u));for(i in n)n.hasOwnProperty(i)&&(u=de(i,a=n[i]))&&(o.push(u),l.push(u));for(i in r)r.hasOwnProperty(i)&&(u=de(i,a=r[i]))&&(o.push(u),f.push(u));for(s=0;s<l.length;s+=1)for(c=0;c<f.length;c+=1)a="long"===f[c].month?f[c].weekday?e.full:e.long:"short"===f[c].month?e.medium:e.short,(u=he(f[c],l[s])).originalPattern=a,u.extendedPattern=a.replace("{0}",l[s].extendedPattern).replace("{1}",f[c].extendedPattern).replace(/^[,\s]+|[,\s]+$/gi,""),o.push(pe(u));return o}(e)}(w.formats);if(s=B(n,"formatMatcher","string",new x("basic","best fit"),"best fit"),w.formats=S,"basic"===s)k=function(e,t){for(var n=-1/0,r=void 0,o=0,i=t.length;o<i;){var a=t[o],u=0;for(var s in ke)if(p.call(ke,s)){var c=e["[["+s+"]]"],l=p.call(a,s)?a[s]:void 0;if(void 0===c&&void 0!==l)u-=20;else if(void 0!==c&&void 0===l)u-=120;else{var f=["2-digit","numeric","narrow","short","long"],h=d.call(f,c),g=d.call(f,l),v=Math.max(Math.min(g-h,2),-2);2===v?u-=6:1===v?u-=3:-1===v?u-=6:-2===v&&(u-=8)}}u>n&&(n=u,r=a),o++}return r}(a,S);else{var F=B(n,"hour12","boolean");a.hour12=void 0===F?w.hour12:F,k=function(e,t){var n=[];for(var r in ke)p.call(ke,r)&&void 0!==e["[["+r+"]]"]&&n.push(r);if(1===n.length){var o=function(e,t){var n;if(ve[e]&&ve[e][t])return n={originalPattern:ve[e][t],_:u({},e,t),extendedPattern:"{"+e+"}"},u(n,e,t),u(n,"pattern12","{"+e+"}"),u(n,"pattern","{"+e+"}"),n}(n[0],e["[["+n[0]+"]]"]);if(o)return o}for(var i=-1/0,a=void 0,s=0,c=t.length;s<c;){var l=t[s],f=0;for(var h in ke)if(p.call(ke,h)){var g=e["[["+h+"]]"],v=p.call(l,h)?l[h]:void 0;if(g!==(p.call(l._,h)?l._[h]:void 0)&&(f-=2),void 0===g&&void 0!==v)f-=20;else if(void 0!==g&&void 0===v)f-=120;else{var y=["2-digit","numeric","narrow","short","long"],m=d.call(y,g),b=d.call(y,v),k=Math.max(Math.min(b-m,2),-2);b<=1&&m>=2||b>=2&&m<=1?k>0?f-=6:k<0&&(f-=8):k>1?f-=3:k<-1&&(f-=6)}}l._.hour12!==e.hour12&&(f-=1),f>i&&(i=f,a=l),s++}return a}(a,S)}for(var j in ke)if(p.call(ke,j)&&p.call(k,j)){var K=k[j];K=k._&&p.call(k._,j)?k._[j]:K,r["[["+j+"]]"]=K}var P=void 0,D=B(n,"hour12","boolean");return r["[[hour]]"]?(r["[[hour12]]"]=D=void 0===D?w.hour12:D,!0===D?(r["[[hourNo0]]"]=w.hourNo0,P=k.pattern12):P=k.pattern):P=k.pattern,r["[[pattern]]"]=P,r["[[boundFormat]]"]=void 0,r["[[initializedDateTimeFormat]]"]=!0,h&&(e.format=Se.call(e)),o(),e}(F(this),e,t):new V.DateTimeFormat(e,t)}g(V,"DateTimeFormat",{configurable:!0,writable:!0,value:be}),g(be,"prototype",{writable:!1});var ke={weekday:["narrow","short","long"],era:["narrow","short","long"],year:["2-digit","numeric"],month:["2-digit","numeric","narrow","short","long"],day:["2-digit","numeric"],hour:["2-digit","numeric"],minute:["2-digit","numeric"],second:["2-digit","numeric"],timeZoneName:["short","long"]};function we(e,t,n){if(void 0===e)e=null;else{var r=F(e);for(var o in e=new E,r)e[o]=r[o]}e=v(e);var i=!0;return"date"!==t&&"any"!==t||void 0===e.weekday&&void 0===e.year&&void 0===e.month&&void 0===e.day||(i=!1),"time"!==t&&"any"!==t||void 0===e.hour&&void 0===e.minute&&void 0===e.second||(i=!1),!i||"date"!==n&&"all"!==n||(e.year=e.month=e.day="numeric"),!i||"time"!==n&&"all"!==n||(e.hour=e.minute=e.second="numeric"),e}function Se(){var e=null!==this&&"object"===l.typeof(this)&&O(this);if(!e||!e["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");if(void 0===e["[[boundFormat]]"]){var t=S.call(function(){var e=arguments.length<=0||void 0===arguments[0]?void 0:arguments[0];return Te(this,void 0===e?Date.now():j(e))},this);e["[[boundFormat]]"]=t}return e["[[boundFormat]]"]}function Me(e,t){if(!isFinite(t))throw new RangeError("Invalid valid date passed to format");var n=e.__getInternalProperties(T);_();for(var r,o,i,a=n["[[locale]]"],u=new V.NumberFormat([a],{useGrouping:!1}),s=new V.NumberFormat([a],{minimumIntegerDigits:2,useGrouping:!1}),c=(r=n["[[timeZone]]"],new E({"[[weekday]]":(o=new Date(t))[(i="get"+(r||""))+"Day"](),"[[era]]":+(o[i+"FullYear"]()>=0),"[[year]]":o[i+"FullYear"](),"[[month]]":o[i+"Month"](),"[[day]]":o[i+"Date"](),"[[hour]]":o[i+"Hours"](),"[[minute]]":o[i+"Minutes"](),"[[second]]":o[i+"Seconds"](),"[[inDST]]":!1})),l=n["[[pattern]]"],f=new x,h=0,p=l.indexOf("{"),g=0,d=M.DateTimeFormat["[[localeData]]"][n["[[dataLocale]]"]].calendars,v=n["[[calendar]]"];-1!==p;){var y=void 0;if(-1===(g=l.indexOf("}",p)))throw new Error("Unclosed pattern");p>h&&b.call(f,{type:"literal",value:l.substring(h,p)});var m=l.substring(p+1,g);if(ke.hasOwnProperty(m)){var k=n["[["+m+"]]"],w=c["[["+m+"]]"];if("year"===m&&w<=0?w=1-w:"month"===m?w++:"hour"===m&&!0===n["[[hour12]]"]&&0==(w%=12)&&!0===n["[[hourNo0]]"]&&(w=12),"numeric"===k)y=te(u,w);else if("2-digit"===k)(y=te(s,w)).length>2&&(y=y.slice(-2));else if(k in ye)switch(m){case"month":y=me(d,v,"months",k,c["[["+m+"]]"]);break;case"weekday":try{y=me(d,v,"days",k,c["[["+m+"]]"])}catch(S){throw new Error("Could not find weekday data for locale "+a)}break;case"timeZoneName":y="";break;case"era":try{y=me(d,v,"eras",k,c["[["+m+"]]"])}catch(S){throw new Error("Could not find era data for locale "+a)}break;default:y=c["[["+m+"]]"]}b.call(f,{type:m,value:y})}else"ampm"===m?(y=me(d,v,"dayPeriods",c["[[hour]]"]>11?"pm":"am",null),b.call(f,{type:"dayPeriod",value:y})):b.call(f,{type:"literal",value:l.substring(p,g+1)});p=l.indexOf("{",h=g+1)}return g<l.length-1&&b.call(f,{type:"literal",value:l.substr(g+1)}),f}function Te(e,t){for(var n=Me(e,t),r="",o=0;n.length>o;o++)r+=n[o].value;return r}M.DateTimeFormat={"[[availableLocales]]":[],"[[relevantExtensionKeys]]":["ca","nu"],"[[localeData]]":{}},g(V.DateTimeFormat,"supportedLocalesOf",{configurable:!0,writable:!0,value:S.call(function(e){if(!p.call(this,"[[availableLocales]]"))throw new TypeError("supportedLocalesOf() is not a constructor");var t=_(),n=arguments[1],r=this["[[availableLocales]]"],o=X(e);return t(),q(r,o,n)},M.NumberFormat)}),g(V.DateTimeFormat.prototype,"format",{configurable:!0,get:Se}),Object.defineProperty(V.DateTimeFormat.prototype,"formatToParts",{enumerable:!1,writable:!0,configurable:!0,value:function(){var e=arguments.length<=0||void 0===arguments[0]?void 0:arguments[0],t=null!==this&&"object"===l.typeof(this)&&O(this);if(!t||!t["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for formatToParts() is not an initialized Intl.DateTimeFormat object.");return function(t,n){for(var r=Me(t,void 0===e?Date.now():j(e)),o=[],i=0;r.length>i;i++){var a=r[i];o.push({type:a.type,value:a.value})}return o}(this)}}),g(V.DateTimeFormat.prototype,"resolvedOptions",{writable:!0,configurable:!0,value:function(){var e=void 0,t=new E,n=["locale","calendar","numberingSystem","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"],r=null!==this&&"object"===l.typeof(this)&&O(this);if(!r||!r["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");for(var o=0,i=n.length;o<i;o++)p.call(r,e="[["+n[o]+"]]")&&(t[n[o]]={value:r[e],writable:!0,configurable:!0,enumerable:!0});return v({},t)}});var Ee=V.__localeSensitiveProtos={Number:{},Date:{}};Ee.Number.toLocaleString=function(){if("[object Number]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a number for Number.prototype.toLocaleString()");return te(new Q(arguments[0],arguments[1]),this)},Ee.Date.toLocaleString=function(){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");var e=+this;if(isNaN(e))return"Invalid Date";var t=arguments[1];return Te(new be(arguments[0],t=we(t,"any","all")),e)},Ee.Date.toLocaleDateString=function(){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");var e=+this;if(isNaN(e))return"Invalid Date";var t=arguments[1];return Te(new be(arguments[0],t=we(t,"date","date")),e)},Ee.Date.toLocaleTimeString=function(){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");var e=+this;if(isNaN(e))return"Invalid Date";var t=arguments[1];return Te(new be(arguments[0],t=we(t,"time","time")),e)},g(V,"__applyLocaleSensitivePrototypes",{writable:!0,configurable:!0,value:function(){for(var e in g(Number.prototype,"toLocaleString",{writable:!0,configurable:!0,value:Ee.Number.toLocaleString}),g(Date.prototype,"toLocaleString",{writable:!0,configurable:!0,value:Ee.Date.toLocaleString}),Ee.Date)p.call(Ee.Date,e)&&g(Date.prototype,e,{writable:!0,configurable:!0,value:Ee.Date[e]})}}),g(V,"__addLocaleData",{value:function(e){if(!I(e.locale))throw new Error("Object passed doesn't identify itself with a valid language tag");!function(e,t){if(!e.number)throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");var n=void 0,r=[t],o=t.split("-");for(o.length>2&&4===o[1].length&&b.call(r,o[0]+"-"+o[2]);n=w.call(r);)b.call(M.NumberFormat["[[availableLocales]]"],n),M.NumberFormat["[[localeData]]"][n]=e.number,e.date&&(e.date.nu=e.number.nu,b.call(M.DateTimeFormat["[[availableLocales]]"],n),M.DateTimeFormat["[[localeData]]"][n]=e.date);void 0===z&&(z=t)}(e,e.locale)}}),g(V,"__disableRegExpRestore",{value:function(){M.disableRegExpRestore=!0}}),e.exports=V},"fN/3":function(e,t,n){var r=n("N6cJ"),o=n("y3w9"),i=r.keys,a=r.key;r.exp({getOwnMetadataKeys:function(e){return i(o(e),arguments.length<2?void 0:a(arguments[1]))}})},fN96:function(e,t,n){var r=n("XKFU");r(r.S,"Number",{isInteger:n("nBIS")})},fyDq:function(e,t,n){var r=n("hswa").f,o=n("aagx"),i=n("K0xU")("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},fyVe:function(e,t,n){var r=n("XKFU"),o=n("1sa7"),i=Math.sqrt,a=Math.acosh;r(r.S+r.F*!(a&&710==Math.floor(a(Number.MAX_VALUE))&&a(1/0)==1/0),"Math",{acosh:function(e){return(e=+e)<1?NaN:e>94906265.62425156?Math.log(e)+Math.LN2:o(e-1+i(e-1)*i(e+1))}})},g3g5:function(e,t){var n=e.exports={version:"2.6.0"};"number"==typeof __e&&(__e=n)},g4EE:function(e,t,n){"use strict";var r=n("y3w9"),o=n("apmT");e.exports=function(e){if("string"!==e&&"number"!==e&&"default"!==e)throw TypeError("Incorrect hint");return o(r(this),"number"!=e)}},g6HL:function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},"h/M4":function(e,t,n){var r=n("XKFU");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},h7Nl:function(e,t,n){var r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",function(){var e=i.call(this);return e==e?o.call(this):"Invalid Date"})},hEkN:function(e,t,n){"use strict";n("OGtf")("anchor",function(e){return function(t){return e(this,"a","name",t)}})},hHhE:function(e,t,n){var r=n("XKFU");r(r.S,"Object",{create:n("Kuth")})},hLT2:function(e,t,n){var r=n("XKFU");r(r.S,"Math",{trunc:function(e){return(e>0?Math.floor:Math.ceil)(e)}})},"hN/g":function(e,t,n){"use strict";n.r(t),n("scky"),n("vqGA"),n("99sg"),n("4A4+"),n("oka+"),n("ifmr"),n("Lmuc"),n("CuTL"),n("V5/Y"),n("nx1v"),n("dQfE"),n("rfyP"),n("qKs0"),n("hYbK"),n("VXxg"),n("5yqK"),n("VbrY"),n("FZcq"),n("0TWp"),n("FoZm"),n("x+wt")},hPIQ:function(e,t){e.exports={}},hYbK:function(e,t,n){n("Btvt"),n("yt8O"),n("EK0E"),e.exports=n("g3g5").WeakMap},hswa:function(e,t,n){var r=n("y3w9"),o=n("xpql"),i=n("apmT"),a=Object.defineProperty;t.f=n("nh4g")?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return a(e,t,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},i5dc:function(e,t,n){var r=n("0/R4"),o=n("y3w9"),i=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=n("m0Pp")(Function.call,n("EemH").f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}},iMoV:function(e,t,n){var r=n("hswa"),o=n("XKFU"),i=n("y3w9"),a=n("apmT");o(o.S+o.F*n("eeVq")(function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(e,t,n){i(e),t=a(t,!0),i(n);try{return r.f(e,t,n),!0}catch(o){return!1}}})},"iW+S":function(e,t,n){var r=n("N6cJ"),o=n("y3w9"),i=n("OP3Y"),a=r.has,u=r.key,s=function(e,t,n){if(a(e,t,n))return!0;var r=i(t);return null!==r&&s(e,r,n)};r.exp({hasMetadata:function(e,t){return s(e,o(t),arguments.length<3?void 0:u(arguments[2]))}})},ifmr:function(e,t,n){n("tyy+"),e.exports=n("g3g5").parseFloat},ioFf:function(e,t,n){"use strict";var r=n("dyZX"),o=n("aagx"),i=n("nh4g"),a=n("XKFU"),u=n("KroJ"),s=n("Z6vF").KEY,c=n("eeVq"),l=n("VTer"),f=n("fyDq"),h=n("ylqs"),p=n("K0xU"),g=n("N8g3"),d=n("OnI7"),v=n("1MBn"),y=n("EWmC"),m=n("y3w9"),b=n("0/R4"),k=n("aCFj"),w=n("apmT"),S=n("RjD/"),M=n("Kuth"),T=n("e7yV"),E=n("EemH"),x=n("hswa"),_=n("DVgA"),F=E.f,j=x.f,O=T.f,K=r.Symbol,P=r.JSON,D=P&&P.stringify,A=p("_hidden"),z=p("toPrimitive"),N={}.propertyIsEnumerable,R=l("symbol-registry"),I=l("symbols"),L=l("op-symbols"),C=Object.prototype,U="function"==typeof K,X=r.QObject,Z=!X||!X.prototype||!X.prototype.findChild,H=i&&c(function(){return 7!=M(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=F(C,t);r&&delete C[t],j(e,t,n),r&&e!==C&&j(C,t,r)}:j,J=function(e){var t=I[e]=M(K.prototype);return t._k=e,t},G=U&&"symbol"==typeof K.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof K},q=function(e,t,n){return e===C&&q(L,t,n),m(e),t=w(t,!0),m(n),o(I,t)?(n.enumerable?(o(e,A)&&e[A][t]&&(e[A][t]=!1),n=M(n,{enumerable:S(0,!1)})):(o(e,A)||j(e,A,S(1,{})),e[A][t]=!0),H(e,t,n)):j(e,t,n)},B=function(e,t){m(e);for(var n,r=v(t=k(t)),o=0,i=r.length;i>o;)q(e,n=r[o++],t[n]);return e},W=function(e){var t=N.call(this,e=w(e,!0));return!(this===C&&o(I,e)&&!o(L,e))&&(!(t||!o(this,e)||!o(I,e)||o(this,A)&&this[A][e])||t)},V=function(e,t){if(e=k(e),t=w(t,!0),e!==C||!o(I,t)||o(L,t)){var n=F(e,t);return!n||!o(I,t)||o(e,A)&&e[A][t]||(n.enumerable=!0),n}},Y=function(e){for(var t,n=O(k(e)),r=[],i=0;n.length>i;)o(I,t=n[i++])||t==A||t==s||r.push(t);return r},Q=function(e){for(var t,n=e===C,r=O(n?L:k(e)),i=[],a=0;r.length>a;)!o(I,t=r[a++])||n&&!o(C,t)||i.push(I[t]);return i};U||(u((K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor!");var e=h(arguments.length>0?arguments[0]:void 0),t=function(n){this===C&&t.call(L,n),o(this,A)&&o(this[A],e)&&(this[A][e]=!1),H(this,e,S(1,n))};return i&&Z&&H(C,e,{configurable:!0,set:t}),J(e)}).prototype,"toString",function(){return this._k}),E.f=V,x.f=q,n("kJMx").f=T.f=Y,n("UqcF").f=W,n("JiEa").f=Q,i&&!n("LQAc")&&u(C,"propertyIsEnumerable",W,!0),g.f=function(e){return J(p(e))}),a(a.G+a.W+a.F*!U,{Symbol:K});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)p($[ee++]);for(var te=_(p.store),ne=0;te.length>ne;)d(te[ne++]);a(a.S+a.F*!U,"Symbol",{for:function(e){return o(R,e+="")?R[e]:R[e]=K(e)},keyFor:function(e){if(!G(e))throw TypeError(e+" is not a symbol!");for(var t in R)if(R[t]===e)return t},useSetter:function(){Z=!0},useSimple:function(){Z=!1}}),a(a.S+a.F*!U,"Object",{create:function(e,t){return void 0===t?M(e):B(M(e),t)},defineProperty:q,defineProperties:B,getOwnPropertyDescriptor:V,getOwnPropertyNames:Y,getOwnPropertySymbols:Q}),P&&a(a.S+a.F*(!U||c(function(){var e=K();return"[null]"!=D([e])||"{}"!=D({a:e})||"{}"!=D(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=t=r[1],(b(t)||void 0!==e)&&!G(e))return y(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!G(t))return t}),r[1]=t,D.apply(P,r)}}),K.prototype[z]||n("Mukb")(K.prototype,z,K.prototype.valueOf),f(K,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},jqX0:function(e,t,n){var r=n("XKFU"),o=n("jtBr");r(r.P+r.F*(Date.prototype.toISOString!==o),"Date",{toISOString:o})},jtBr:function(e,t,n){"use strict";var r=n("eeVq"),o=Date.prototype.getTime,i=Date.prototype.toISOString,a=function(e){return e>9?e:"0"+e};e.exports=r(function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-5e13-1))})||!r(function(){i.call(new Date(NaN))})?function(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),n=e.getUTCMilliseconds(),r=t<0?"-":t>9999?"+":"";return r+("00000"+Math.abs(t)).slice(r?-6:-4)+"-"+a(e.getUTCMonth()+1)+"-"+a(e.getUTCDate())+"T"+a(e.getUTCHours())+":"+a(e.getUTCMinutes())+":"+a(e.getUTCSeconds())+"."+(n>99?n:"0"+a(n))+"Z"}:i},kJMx:function(e,t,n){var r=n("zhAb"),o=n("4R4u").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},kcoS:function(e,t,n){var r=n("lvtm"),o=Math.pow,i=o(2,-52),a=o(2,-23),u=o(2,127)*(2-a),s=o(2,-126);e.exports=Math.fround||function(e){var t,n,o=Math.abs(e),c=r(e);return o<s?c*(o/s/a+1/i-1/i)*s*a:(n=(t=(1+a/i)*o)-(t-o))>u||n!=n?c*(1/0):c*n}},klPD:function(e,t,n){var r=n("hswa"),o=n("EemH"),i=n("OP3Y"),a=n("aagx"),u=n("XKFU"),s=n("RjD/"),c=n("y3w9"),l=n("0/R4");u(u.S,"Reflect",{set:function e(t,n,u){var f,h,p=arguments.length<4?t:arguments[3],g=o.f(c(t),n);if(!g){if(l(h=i(t)))return e(h,n,u,p);g=s(0)}if(a(g,"value")){if(!1===g.writable||!l(p))return!1;if(f=o.f(p,n)){if(f.get||f.set||!1===f.writable)return!1;f.value=u,r.f(p,n,f)}else r.f(p,n,s(0,u));return!0}return void 0!==g.set&&(g.set.call(p,u),!0)}})},knU9:function(e,t,n){var r=n("XKFU"),o=n("i5dc");o&&r(r.S,"Reflect",{setPrototypeOf:function(e,t){o.check(e,t);try{return o.set(e,t),!0}catch(n){return!1}}})},knhD:function(e,t,n){var r=n("XKFU");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},l0Rn:function(e,t,n){"use strict";var r=n("RYi7"),o=n("vhPU");e.exports=function(e){var t=String(o(this)),n="",i=r(e);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}},lvtm:function(e,t){e.exports=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1}},m0Pp:function(e,t,n){var r=n("2OiF");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},mGWK:function(e,t,n){"use strict";var r=n("XKFU"),o=n("aCFj"),i=n("RYi7"),a=n("ne8i"),u=[].lastIndexOf,s=!!u&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(s||!n("LyE8")(u)),"Array",{lastIndexOf:function(e){if(s)return u.apply(this,arguments)||0;var t=o(this),n=a(t.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in t&&t[r]===e)return r||0;return-1}})},mQtv:function(e,t,n){var r=n("kJMx"),o=n("JiEa"),i=n("y3w9"),a=n("dyZX").Reflect;e.exports=a&&a.ownKeys||function(e){var t=r.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},mYba:function(e,t,n){var r=n("aCFj"),o=n("EemH").f;n("Xtr8")("getOwnPropertyDescriptor",function(){return function(e,t){return o(r(e),t)}})},mura:function(e,t,n){var r=n("0/R4"),o=n("Z6vF").onFreeze;n("Xtr8")("preventExtensions",function(e){return function(t){return e&&r(t)?e(o(t)):t}})},nBIS:function(e,t,n){var r=n("0/R4"),o=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&o(e)===e}},nGyu:function(e,t,n){var r=n("K0xU")("unscopables"),o=Array.prototype;null==o[r]&&n("Mukb")(o,r,{}),e.exports=function(e){o[r][e]=!0}},nIY7:function(e,t,n){"use strict";n("OGtf")("big",function(e){return function(){return e(this,"big","","")}})},ne8i:function(e,t,n){var r=n("RYi7"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},nh4g:function(e,t,n){e.exports=!n("eeVq")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},nsiH:function(e,t,n){"use strict";n("OGtf")("fontsize",function(e){return function(t){return e(this,"font","size",t)}})},nx1v:function(e,t,n){n("eM6i"),n("AphP"),n("jqX0"),n("h7Nl"),n("yM4b"),e.exports=Date},nzyx:function(e,t,n){var r=n("XKFU"),o=n("LVwc");r(r.S+r.F*(o!=Math.expm1),"Math",{expm1:o})},oDIu:function(e,t,n){"use strict";var r=n("XKFU"),o=n("AvRE")(!1);r(r.P,"String",{codePointAt:function(e){return o(this,e)}})},"oZ/O":function(e,t,n){var r=n("XKFU"),o=n("y3w9"),i=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(e){o(e);try{return i&&i(e),!0}catch(t){return!1}}})},"oka+":function(e,t,n){n("GNAe"),e.exports=n("g3g5").parseInt},pIFo:function(e,t,n){"use strict";var r=n("y3w9"),o=n("S/j/"),i=n("ne8i"),a=n("RYi7"),u=n("A5AN"),s=n("Xxuz"),c=Math.max,l=Math.min,f=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n("IU+Z")("replace",2,function(e,t,n,g){return[function(r,o){var i=e(this),a=null==r?void 0:r[t];return void 0!==a?a.call(r,i,o):n.call(String(i),r,o)},function(e,t){var o=g(n,e,this,t);if(o.done)return o.value;var f=r(e),h=String(this),p="function"==typeof t;p||(t=String(t));var v=f.global;if(v){var y=f.unicode;f.lastIndex=0}for(var m=[];;){var b=s(f,h);if(null===b)break;if(m.push(b),!v)break;""===String(b[0])&&(f.lastIndex=u(h,i(f.lastIndex),y))}for(var k,w="",S=0,M=0;M<m.length;M++){b=m[M];for(var T=String(b[0]),E=c(l(a(b.index),h.length),0),x=[],_=1;_<b.length;_++)x.push(void 0===(k=b[_])?k:String(k));var F=b.groups;if(p){var j=[T].concat(x,E,h);void 0!==F&&j.push(F);var O=String(t.apply(void 0,j))}else O=d(T,h,E,x,F,t);E>=S&&(w+=h.slice(S,E)+O,S=E+T.length)}return w+h.slice(S)}];function d(e,t,r,i,a,u){var s=r+e.length,c=i.length,l=p;return void 0!==a&&(a=o(a),l=h),n.call(u,l,function(n,o){var u;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(s);case"<":u=a[o.slice(1,-1)];break;default:var l=+o;if(0===l)return o;if(l>c){var h=f(l/10);return 0===h?o:h<=c?void 0===i[h-1]?o.charAt(1):i[h-1]+o.charAt(1):o}u=i[l-1]}return void 0===u?"":u})}})},"pp/T":function(e,t,n){var r=n("XKFU");r(r.S,"Math",{log2:function(e){return Math.log(e)/Math.LN2}})},qKs0:function(e,t,n){n("Btvt"),n("XfO3"),n("rGqo"),n("9AAn"),e.exports=n("g3g5").Map},qncB:function(e,t,n){var r=n("XKFU"),o=n("vhPU"),i=n("eeVq"),a=n("/e88"),u="["+a+"]",s=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),l=function(e,t,n){var o={},u=i(function(){return!!a[e]()||"\u200b\x85"!="\u200b\x85"[e]()}),s=o[e]=u?t(f):a[e];n&&(o[n]=s),r(r.P+r.F*u,"String",o)},f=l.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(c,"")),e};e.exports=l},quPj:function(e,t,n){var r=n("0/R4"),o=n("LZWt"),i=n("K0xU")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},rGqo:function(e,t,n){for(var r=n("yt8O"),o=n("DVgA"),i=n("KroJ"),a=n("dyZX"),u=n("Mukb"),s=n("hPIQ"),c=n("K0xU"),l=c("iterator"),f=c("toStringTag"),h=s.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=o(p),d=0;d<g.length;d++){var v,y=g[d],m=p[y],b=a[y],k=b&&b.prototype;if(k&&(k[l]||u(k,l,h),k[f]||u(k,f,y),s[y]=h,m))for(v in r)k[v]||i(k,v,r[v],!0)}},rfyP:function(e,t,n){n("Oyvg"),n("sMXx"),n("a1Th"),n("OEbY"),n("SRfc"),n("pIFo"),n("OG14"),n("KKXr"),e.exports=n("g3g5").RegExp},rvZc:function(e,t,n){"use strict";var r=n("XKFU"),o=n("ne8i"),i=n("0sh+"),a="".endsWith;r(r.P+r.F*n("UUeW")("endsWith"),"String",{endsWith:function(e){var t=i(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=o(t.length),u=void 0===n?r:Math.min(o(n),r),s=String(e);return a?a.call(t,s,u):t.slice(u-s.length,u)===s}})},s5qY:function(e,t,n){var r=n("0/R4");e.exports=function(e,t){if(!r(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},sMXx:function(e,t,n){"use strict";var r=n("Ugos");n("XKFU")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},sbF8:function(e,t,n){var r=n("XKFU"),o=n("nBIS"),i=Math.abs;r(r.S,"Number",{isSafeInteger:function(e){return o(e)&&i(e)<=9007199254740991}})},scky:function(e,t){window.global=window},tUrg:function(e,t,n){"use strict";n("OGtf")("link",function(e){return function(t){return e(this,"a","href",t)}})},"tyy+":function(e,t,n){var r=n("XKFU"),o=n("11IZ");r(r.G+r.F*(parseFloat!=o),{parseFloat:o})},uAtd:function(e,t,n){var r=n("T39b"),o=n("Q3ne"),i=n("N6cJ"),a=n("y3w9"),u=n("OP3Y"),s=i.keys,c=i.key,l=function(e,t){var n=s(e,t),i=u(e);if(null===i)return n;var a=l(i,t);return a.length?n.length?o(new r(n.concat(a))):a:n};i.exp({getMetadataKeys:function(e){return l(a(e),arguments.length<2?void 0:c(arguments[1]))}})},uhZd:function(e,t,n){var r=n("XKFU"),o=n("EemH").f,i=n("y3w9");r(r.S,"Reflect",{deleteProperty:function(e,t){var n=o(i(e),t);return!(n&&!n.configurable)&&delete e[t]}})},upKx:function(e,t,n){"use strict";var r=n("S/j/"),o=n("d/Gc"),i=n("ne8i");e.exports=[].copyWithin||function(e,t){var n=r(this),a=i(n.length),u=o(e,a),s=o(t,a),c=arguments.length>2?arguments[2]:void 0,l=Math.min((void 0===c?a:o(c,a))-s,a-u),f=1;for(s<u&&u<s+l&&(f=-1,s+=l-1,u+=l-1);l-- >0;)s in n?n[u]=n[s]:delete n[u],u+=f,s+=f;return n}},vhPU:function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},vqGA:function(e,t,n){n("ioFf"),n("Btvt"),e.exports=n("g3g5").Symbol},vvmO:function(e,t,n){var r=n("LZWt");e.exports=function(e,t){if("number"!=typeof e&&"Number"!=r(e))throw TypeError(t);return+e}},w2a5:function(e,t,n){var r=n("aCFj"),o=n("ne8i"),i=n("d/Gc");e.exports=function(e){return function(t,n,a){var u,s=r(t),c=o(s.length),l=i(a,c);if(e&&n!=n){for(;c>l;)if((u=s[l++])!=u)return!0}else for(;c>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}}},wmvG:function(e,t,n){"use strict";var r=n("hswa").f,o=n("Kuth"),i=n("3Lyj"),a=n("m0Pp"),u=n("9gX7"),s=n("SlkY"),c=n("Afnz"),l=n("1TsA"),f=n("elZq"),h=n("nh4g"),p=n("Z6vF").fastKey,g=n("s5qY"),d=h?"_s":"size",v=function(e,t){var n,r=p(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var l=e(function(e,r){u(e,l,t,"_i"),e._t=t,e._i=o(null),e._f=void 0,e._l=void 0,e[d]=0,null!=r&&s(r,n,e[c],e)});return i(l.prototype,{clear:function(){for(var e=g(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[d]=0},delete:function(e){var n=g(this,t),r=v(n,e);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[d]--}return!!r},forEach:function(e){g(this,t);for(var n,r=a(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!v(g(this,t),e)}}),h&&r(l.prototype,"size",{get:function(){return g(this,t)[d]}}),l},def:function(e,t,n){var r,o,i=v(e,t);return i?i.v=n:(e._l=i={i:o=p(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=i),r&&(r.n=i),e[d]++,"F"!==o&&(e._i[o]=i)),e},getEntry:v,setStrong:function(e,t,n){c(e,t,function(e,n){this._t=g(e,t),this._k=n,this._l=void 0},function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?l(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,l(1))},n?"entries":"values",!n,!0),f(t)}}},"x+wt":function(e,t){IntlPolyfill.__addLocaleData({locale:"en",date:{ca:["gregory","buddhist","chinese","coptic","dangi","ethioaa","ethiopic","generic","hebrew","indian","islamic","islamicc","japanese","persian","roc"],hourNo0:!0,hour12:!0,formats:{short:"{1}, {0}",medium:"{1}, {0}",full:"{1} 'at' {0}",long:"{1} 'at' {0}",availableFormats:{d:"d",E:"ccc",Ed:"d E",Ehm:"E h:mm a",EHm:"E HH:mm",Ehms:"E h:mm:ss a",EHms:"E HH:mm:ss",Gy:"y G",GyMMM:"MMM y G",GyMMMd:"MMM d, y G",GyMMMEd:"E, MMM d, y G",h:"h a",H:"HH",hm:"h:mm a",Hm:"HH:mm",hms:"h:mm:ss a",Hms:"HH:mm:ss",hmsv:"h:mm:ss a v",Hmsv:"HH:mm:ss v",hmv:"h:mm a v",Hmv:"HH:mm v",M:"L",Md:"M/d",MEd:"E, M/d",MMM:"LLL",MMMd:"MMM d",MMMEd:"E, MMM d",MMMMd:"MMMM d",ms:"mm:ss",y:"y",yM:"M/y",yMd:"M/d/y",yMEd:"E, M/d/y",yMMM:"MMM y",yMMMd:"MMM d, y",yMMMEd:"E, MMM d, y",yMMMM:"MMMM y",yQQQ:"QQQ y",yQQQQ:"QQQQ y"},dateFormats:{yMMMMEEEEd:"EEEE, MMMM d, y",yMMMMd:"MMMM d, y",yMMMd:"MMM d, y",yMd:"M/d/yy"},timeFormats:{hmmsszzzz:"h:mm:ss a zzzz",hmsz:"h:mm:ss a z",hms:"h:mm:ss a",hm:"h:mm a"}},calendars:{buddhist:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["BE"],short:["BE"],long:["BE"]},dayPeriods:{am:"AM",pm:"PM"}},chinese:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Mo1","Mo2","Mo3","Mo4","Mo5","Mo6","Mo7","Mo8","Mo9","Mo10","Mo11","Mo12"],long:["Month1","Month2","Month3","Month4","Month5","Month6","Month7","Month8","Month9","Month10","Month11","Month12"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dayPeriods:{am:"AM",pm:"PM"}},coptic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Tout","Baba","Hator","Kiahk","Toba","Amshir","Baramhat","Baramouda","Bashans","Paona","Epep","Mesra","Nasie"],long:["Tout","Baba","Hator","Kiahk","Toba","Amshir","Baramhat","Baramouda","Bashans","Paona","Epep","Mesra","Nasie"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"AM",pm:"PM"}},dangi:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Mo1","Mo2","Mo3","Mo4","Mo5","Mo6","Mo7","Mo8","Mo9","Mo10","Mo11","Mo12"],long:["Month1","Month2","Month3","Month4","Month5","Month6","Month7","Month8","Month9","Month10","Month11","Month12"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dayPeriods:{am:"AM",pm:"PM"}},ethiopic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"],long:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"AM",pm:"PM"}},ethioaa:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"],long:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0"],short:["ERA0"],long:["ERA0"]},dayPeriods:{am:"AM",pm:"PM"}},generic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"],long:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"AM",pm:"PM"}},gregory:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["B","A","BCE","CE"],short:["BC","AD","BCE","CE"],long:["Before Christ","Anno Domini","Before Common Era","Common Era"]},dayPeriods:{am:"AM",pm:"PM"}},hebrew:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13","7"],short:["Tishri","Heshvan","Kislev","Tevet","Shevat","Adar I","Adar","Nisan","Iyar","Sivan","Tamuz","Av","Elul","Adar II"],long:["Tishri","Heshvan","Kislev","Tevet","Shevat","Adar I","Adar","Nisan","Iyar","Sivan","Tamuz","Av","Elul","Adar II"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AM"],short:["AM"],long:["AM"]},dayPeriods:{am:"AM",pm:"PM"}},indian:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Chaitra","Vaisakha","Jyaistha","Asadha","Sravana","Bhadra","Asvina","Kartika","Agrahayana","Pausa","Magha","Phalguna"],long:["Chaitra","Vaisakha","Jyaistha","Asadha","Sravana","Bhadra","Asvina","Kartika","Agrahayana","Pausa","Magha","Phalguna"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["Saka"],short:["Saka"],long:["Saka"]},dayPeriods:{am:"AM",pm:"PM"}},islamic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Muh.","Saf.","Rab. I","Rab. II","Jum. I","Jum. II","Raj.","Sha.","Ram.","Shaw.","Dhu\u02bbl-Q.","Dhu\u02bbl-H."],long:["Muharram","Safar","Rabi\u02bb I","Rabi\u02bb II","Jumada I","Jumada II","Rajab","Sha\u02bbban","Ramadan","Shawwal","Dhu\u02bbl-Qi\u02bbdah","Dhu\u02bbl-Hijjah"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AH"],short:["AH"],long:["AH"]},dayPeriods:{am:"AM",pm:"PM"}},islamicc:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Muh.","Saf.","Rab. I","Rab. II","Jum. I","Jum. II","Raj.","Sha.","Ram.","Shaw.","Dhu\u02bbl-Q.","Dhu\u02bbl-H."],long:["Muharram","Safar","Rabi\u02bb I","Rabi\u02bb II","Jumada I","Jumada II","Rajab","Sha\u02bbban","Ramadan","Shawwal","Dhu\u02bbl-Qi\u02bbdah","Dhu\u02bbl-Hijjah"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AH"],short:["AH"],long:["AH"]},dayPeriods:{am:"AM",pm:"PM"}},japanese:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["Taika (645\u2013650)","Hakuchi (650\u2013671)","Hakuh\u014d (672\u2013686)","Shuch\u014d (686\u2013701)","Taih\u014d (701\u2013704)","Keiun (704\u2013708)","Wad\u014d (708\u2013715)","Reiki (715\u2013717)","Y\u014dr\u014d (717\u2013724)","Jinki (724\u2013729)","Tenpy\u014d (729\u2013749)","Tenpy\u014d-kamp\u014d (749-749)","Tenpy\u014d-sh\u014dh\u014d (749-757)","Tenpy\u014d-h\u014dji (757-765)","Tenpy\u014d-jingo (765-767)","Jingo-keiun (767-770)","H\u014dki (770\u2013780)","Ten-\u014d (781-782)","Enryaku (782\u2013806)","Daid\u014d (806\u2013810)","K\u014dnin (810\u2013824)","Tench\u014d (824\u2013834)","J\u014dwa (834\u2013848)","Kaj\u014d (848\u2013851)","Ninju (851\u2013854)","Saik\u014d (854\u2013857)","Ten-an (857-859)","J\u014dgan (859\u2013877)","Gangy\u014d (877\u2013885)","Ninna (885\u2013889)","Kanpy\u014d (889\u2013898)","Sh\u014dtai (898\u2013901)","Engi (901\u2013923)","Ench\u014d (923\u2013931)","J\u014dhei (931\u2013938)","Tengy\u014d (938\u2013947)","Tenryaku (947\u2013957)","Tentoku (957\u2013961)","\u014cwa (961\u2013964)","K\u014dh\u014d (964\u2013968)","Anna (968\u2013970)","Tenroku (970\u2013973)","Ten\u2019en (973\u2013976)","J\u014dgen (976\u2013978)","Tengen (978\u2013983)","Eikan (983\u2013985)","Kanna (985\u2013987)","Eien (987\u2013989)","Eiso (989\u2013990)","Sh\u014dryaku (990\u2013995)","Ch\u014dtoku (995\u2013999)","Ch\u014dh\u014d (999\u20131004)","Kank\u014d (1004\u20131012)","Ch\u014dwa (1012\u20131017)","Kannin (1017\u20131021)","Jian (1021\u20131024)","Manju (1024\u20131028)","Ch\u014dgen (1028\u20131037)","Ch\u014dryaku (1037\u20131040)","Ch\u014dky\u016b (1040\u20131044)","Kantoku (1044\u20131046)","Eish\u014d (1046\u20131053)","Tengi (1053\u20131058)","K\u014dhei (1058\u20131065)","Jiryaku (1065\u20131069)","Enky\u016b (1069\u20131074)","Sh\u014dho (1074\u20131077)","Sh\u014dryaku (1077\u20131081)","Eih\u014d (1081\u20131084)","\u014ctoku (1084\u20131087)","Kanji (1087\u20131094)","Kah\u014d (1094\u20131096)","Eich\u014d (1096\u20131097)","J\u014dtoku (1097\u20131099)","K\u014dwa (1099\u20131104)","Ch\u014dji (1104\u20131106)","Kash\u014d (1106\u20131108)","Tennin (1108\u20131110)","Ten-ei (1110-1113)","Eiky\u016b (1113\u20131118)","Gen\u2019ei (1118\u20131120)","H\u014dan (1120\u20131124)","Tenji (1124\u20131126)","Daiji (1126\u20131131)","Tensh\u014d (1131\u20131132)","Ch\u014dsh\u014d (1132\u20131135)","H\u014den (1135\u20131141)","Eiji (1141\u20131142)","K\u014dji (1142\u20131144)","Ten\u2019y\u014d (1144\u20131145)","Ky\u016ban (1145\u20131151)","Ninpei (1151\u20131154)","Ky\u016bju (1154\u20131156)","H\u014dgen (1156\u20131159)","Heiji (1159\u20131160)","Eiryaku (1160\u20131161)","\u014cho (1161\u20131163)","Ch\u014dkan (1163\u20131165)","Eiman (1165\u20131166)","Nin\u2019an (1166\u20131169)","Ka\u014d (1169\u20131171)","Sh\u014dan (1171\u20131175)","Angen (1175\u20131177)","Jish\u014d (1177\u20131181)","Y\u014dwa (1181\u20131182)","Juei (1182\u20131184)","Genryaku (1184\u20131185)","Bunji (1185\u20131190)","Kenky\u016b (1190\u20131199)","Sh\u014dji (1199\u20131201)","Kennin (1201\u20131204)","Genky\u016b (1204\u20131206)","Ken\u2019ei (1206\u20131207)","J\u014dgen (1207\u20131211)","Kenryaku (1211\u20131213)","Kenp\u014d (1213\u20131219)","J\u014dky\u016b (1219\u20131222)","J\u014d\u014d (1222\u20131224)","Gennin (1224\u20131225)","Karoku (1225\u20131227)","Antei (1227\u20131229)","Kanki (1229\u20131232)","J\u014dei (1232\u20131233)","Tenpuku (1233\u20131234)","Bunryaku (1234\u20131235)","Katei (1235\u20131238)","Ryakunin (1238\u20131239)","En\u2019\u014d (1239\u20131240)","Ninji (1240\u20131243)","Kangen (1243\u20131247)","H\u014dji (1247\u20131249)","Kench\u014d (1249\u20131256)","K\u014dgen (1256\u20131257)","Sh\u014dka (1257\u20131259)","Sh\u014dgen (1259\u20131260)","Bun\u2019\u014d (1260\u20131261)","K\u014dch\u014d (1261\u20131264)","Bun\u2019ei (1264\u20131275)","Kenji (1275\u20131278)","K\u014dan (1278\u20131288)","Sh\u014d\u014d (1288\u20131293)","Einin (1293\u20131299)","Sh\u014dan (1299\u20131302)","Kengen (1302\u20131303)","Kagen (1303\u20131306)","Tokuji (1306\u20131308)","Enky\u014d (1308\u20131311)","\u014cch\u014d (1311\u20131312)","Sh\u014dwa (1312\u20131317)","Bunp\u014d (1317\u20131319)","Gen\u014d (1319\u20131321)","Genk\u014d (1321\u20131324)","Sh\u014dch\u016b (1324\u20131326)","Karyaku (1326\u20131329)","Gentoku (1329\u20131331)","Genk\u014d (1331\u20131334)","Kenmu (1334\u20131336)","Engen (1336\u20131340)","K\u014dkoku (1340\u20131346)","Sh\u014dhei (1346\u20131370)","Kentoku (1370\u20131372)","Bunch\u016b (1372\u20131375)","Tenju (1375\u20131379)","K\u014dryaku (1379\u20131381)","K\u014dwa (1381\u20131384)","Gench\u016b (1384\u20131392)","Meitoku (1384\u20131387)","Kakei (1387\u20131389)","K\u014d\u014d (1389\u20131390)","Meitoku (1390\u20131394)","\u014cei (1394\u20131428)","Sh\u014dch\u014d (1428\u20131429)","Eiky\u014d (1429\u20131441)","Kakitsu (1441\u20131444)","Bun\u2019an (1444\u20131449)","H\u014dtoku (1449\u20131452)","Ky\u014dtoku (1452\u20131455)","K\u014dsh\u014d (1455\u20131457)","Ch\u014droku (1457\u20131460)","Kansh\u014d (1460\u20131466)","Bunsh\u014d (1466\u20131467)","\u014cnin (1467\u20131469)","Bunmei (1469\u20131487)","Ch\u014dky\u014d (1487\u20131489)","Entoku (1489\u20131492)","Mei\u014d (1492\u20131501)","Bunki (1501\u20131504)","Eish\u014d (1504\u20131521)","Taiei (1521\u20131528)","Ky\u014droku (1528\u20131532)","Tenbun (1532\u20131555)","K\u014dji (1555\u20131558)","Eiroku (1558\u20131570)","Genki (1570\u20131573)","Tensh\u014d (1573\u20131592)","Bunroku (1592\u20131596)","Keich\u014d (1596\u20131615)","Genna (1615\u20131624)","Kan\u2019ei (1624\u20131644)","Sh\u014dho (1644\u20131648)","Keian (1648\u20131652)","J\u014d\u014d (1652\u20131655)","Meireki (1655\u20131658)","Manji (1658\u20131661)","Kanbun (1661\u20131673)","Enp\u014d (1673\u20131681)","Tenna (1681\u20131684)","J\u014dky\u014d (1684\u20131688)","Genroku (1688\u20131704)","H\u014dei (1704\u20131711)","Sh\u014dtoku (1711\u20131716)","Ky\u014dh\u014d (1716\u20131736)","Genbun (1736\u20131741)","Kanp\u014d (1741\u20131744)","Enky\u014d (1744\u20131748)","Kan\u2019en (1748\u20131751)","H\u014dreki (1751\u20131764)","Meiwa (1764\u20131772)","An\u2019ei (1772\u20131781)","Tenmei (1781\u20131789)","Kansei (1789\u20131801)","Ky\u014dwa (1801\u20131804)","Bunka (1804\u20131818)","Bunsei (1818\u20131830)","Tenp\u014d (1830\u20131844)","K\u014dka (1844\u20131848)","Kaei (1848\u20131854)","Ansei (1854\u20131860)","Man\u2019en (1860\u20131861)","Bunky\u016b (1861\u20131864)","Genji (1864\u20131865)","Kei\u014d (1865\u20131868)","M","T","S","H"],short:["Taika (645\u2013650)","Hakuchi (650\u2013671)","Hakuh\u014d (672\u2013686)","Shuch\u014d (686\u2013701)","Taih\u014d (701\u2013704)","Keiun (704\u2013708)","Wad\u014d (708\u2013715)","Reiki (715\u2013717)","Y\u014dr\u014d (717\u2013724)","Jinki (724\u2013729)","Tenpy\u014d (729\u2013749)","Tenpy\u014d-kamp\u014d (749-749)","Tenpy\u014d-sh\u014dh\u014d (749-757)","Tenpy\u014d-h\u014dji (757-765)","Tenpy\u014d-jingo (765-767)","Jingo-keiun (767-770)","H\u014dki (770\u2013780)","Ten-\u014d (781-782)","Enryaku (782\u2013806)","Daid\u014d (806\u2013810)","K\u014dnin (810\u2013824)","Tench\u014d (824\u2013834)","J\u014dwa (834\u2013848)","Kaj\u014d (848\u2013851)","Ninju (851\u2013854)","Saik\u014d (854\u2013857)","Ten-an (857-859)","J\u014dgan (859\u2013877)","Gangy\u014d (877\u2013885)","Ninna (885\u2013889)","Kanpy\u014d (889\u2013898)","Sh\u014dtai (898\u2013901)","Engi (901\u2013923)","Ench\u014d (923\u2013931)","J\u014dhei (931\u2013938)","Tengy\u014d (938\u2013947)","Tenryaku (947\u2013957)","Tentoku (957\u2013961)","\u014cwa (961\u2013964)","K\u014dh\u014d (964\u2013968)","Anna (968\u2013970)","Tenroku (970\u2013973)","Ten\u2019en (973\u2013976)","J\u014dgen (976\u2013978)","Tengen (978\u2013983)","Eikan (983\u2013985)","Kanna (985\u2013987)","Eien (987\u2013989)","Eiso (989\u2013990)","Sh\u014dryaku (990\u2013995)","Ch\u014dtoku (995\u2013999)","Ch\u014dh\u014d (999\u20131004)","Kank\u014d (1004\u20131012)","Ch\u014dwa (1012\u20131017)","Kannin (1017\u20131021)","Jian (1021\u20131024)","Manju (1024\u20131028)","Ch\u014dgen (1028\u20131037)","Ch\u014dryaku (1037\u20131040)","Ch\u014dky\u016b (1040\u20131044)","Kantoku (1044\u20131046)","Eish\u014d (1046\u20131053)","Tengi (1053\u20131058)","K\u014dhei (1058\u20131065)","Jiryaku (1065\u20131069)","Enky\u016b (1069\u20131074)","Sh\u014dho (1074\u20131077)","Sh\u014dryaku (1077\u20131081)","Eih\u014d (1081\u20131084)","\u014ctoku (1084\u20131087)","Kanji (1087\u20131094)","Kah\u014d (1094\u20131096)","Eich\u014d (1096\u20131097)","J\u014dtoku (1097\u20131099)","K\u014dwa (1099\u20131104)","Ch\u014dji (1104\u20131106)","Kash\u014d (1106\u20131108)","Tennin (1108\u20131110)","Ten-ei (1110-1113)","Eiky\u016b (1113\u20131118)","Gen\u2019ei (1118\u20131120)","H\u014dan (1120\u20131124)","Tenji (1124\u20131126)","Daiji (1126\u20131131)","Tensh\u014d (1131\u20131132)","Ch\u014dsh\u014d (1132\u20131135)","H\u014den (1135\u20131141)","Eiji (1141\u20131142)","K\u014dji (1142\u20131144)","Ten\u2019y\u014d (1144\u20131145)","Ky\u016ban (1145\u20131151)","Ninpei (1151\u20131154)","Ky\u016bju (1154\u20131156)","H\u014dgen (1156\u20131159)","Heiji (1159\u20131160)","Eiryaku (1160\u20131161)","\u014cho (1161\u20131163)","Ch\u014dkan (1163\u20131165)","Eiman (1165\u20131166)","Nin\u2019an (1166\u20131169)","Ka\u014d (1169\u20131171)","Sh\u014dan (1171\u20131175)","Angen (1175\u20131177)","Jish\u014d (1177\u20131181)","Y\u014dwa (1181\u20131182)","Juei (1182\u20131184)","Genryaku (1184\u20131185)","Bunji (1185\u20131190)","Kenky\u016b (1190\u20131199)","Sh\u014dji (1199\u20131201)","Kennin (1201\u20131204)","Genky\u016b (1204\u20131206)","Ken\u2019ei (1206\u20131207)","J\u014dgen (1207\u20131211)","Kenryaku (1211\u20131213)","Kenp\u014d (1213\u20131219)","J\u014dky\u016b (1219\u20131222)","J\u014d\u014d (1222\u20131224)","Gennin (1224\u20131225)","Karoku (1225\u20131227)","Antei (1227\u20131229)","Kanki (1229\u20131232)","J\u014dei (1232\u20131233)","Tenpuku (1233\u20131234)","Bunryaku (1234\u20131235)","Katei (1235\u20131238)","Ryakunin (1238\u20131239)","En\u2019\u014d (1239\u20131240)","Ninji (1240\u20131243)","Kangen (1243\u20131247)","H\u014dji (1247\u20131249)","Kench\u014d (1249\u20131256)","K\u014dgen (1256\u20131257)","Sh\u014dka (1257\u20131259)","Sh\u014dgen (1259\u20131260)","Bun\u2019\u014d (1260\u20131261)","K\u014dch\u014d (1261\u20131264)","Bun\u2019ei (1264\u20131275)","Kenji (1275\u20131278)","K\u014dan (1278\u20131288)","Sh\u014d\u014d (1288\u20131293)","Einin (1293\u20131299)","Sh\u014dan (1299\u20131302)","Kengen (1302\u20131303)","Kagen (1303\u20131306)","Tokuji (1306\u20131308)","Enky\u014d (1308\u20131311)","\u014cch\u014d (1311\u20131312)","Sh\u014dwa (1312\u20131317)","Bunp\u014d (1317\u20131319)","Gen\u014d (1319\u20131321)","Genk\u014d (1321\u20131324)","Sh\u014dch\u016b (1324\u20131326)","Karyaku (1326\u20131329)","Gentoku (1329\u20131331)","Genk\u014d (1331\u20131334)","Kenmu (1334\u20131336)","Engen (1336\u20131340)","K\u014dkoku (1340\u20131346)","Sh\u014dhei (1346\u20131370)","Kentoku (1370\u20131372)","Bunch\u016b (1372\u20131375)","Tenju (1375\u20131379)","K\u014dryaku (1379\u20131381)","K\u014dwa (1381\u20131384)","Gench\u016b (1384\u20131392)","Meitoku (1384\u20131387)","Kakei (1387\u20131389)","K\u014d\u014d (1389\u20131390)","Meitoku (1390\u20131394)","\u014cei (1394\u20131428)","Sh\u014dch\u014d (1428\u20131429)","Eiky\u014d (1429\u20131441)","Kakitsu (1441\u20131444)","Bun\u2019an (1444\u20131449)","H\u014dtoku (1449\u20131452)","Ky\u014dtoku (1452\u20131455)","K\u014dsh\u014d (1455\u20131457)","Ch\u014droku (1457\u20131460)","Kansh\u014d (1460\u20131466)","Bunsh\u014d (1466\u20131467)","\u014cnin (1467\u20131469)","Bunmei (1469\u20131487)","Ch\u014dky\u014d (1487\u20131489)","Entoku (1489\u20131492)","Mei\u014d (1492\u20131501)","Bunki (1501\u20131504)","Eish\u014d (1504\u20131521)","Taiei (1521\u20131528)","Ky\u014droku (1528\u20131532)","Tenbun (1532\u20131555)","K\u014dji (1555\u20131558)","Eiroku (1558\u20131570)","Genki (1570\u20131573)","Tensh\u014d (1573\u20131592)","Bunroku (1592\u20131596)","Keich\u014d (1596\u20131615)","Genna (1615\u20131624)","Kan\u2019ei (1624\u20131644)","Sh\u014dho (1644\u20131648)","Keian (1648\u20131652)","J\u014d\u014d (1652\u20131655)","Meireki (1655\u20131658)","Manji (1658\u20131661)","Kanbun (1661\u20131673)","Enp\u014d (1673\u20131681)","Tenna (1681\u20131684)","J\u014dky\u014d (1684\u20131688)","Genroku (1688\u20131704)","H\u014dei (1704\u20131711)","Sh\u014dtoku (1711\u20131716)","Ky\u014dh\u014d (1716\u20131736)","Genbun (1736\u20131741)","Kanp\u014d (1741\u20131744)","Enky\u014d (1744\u20131748)","Kan\u2019en (1748\u20131751)","H\u014dreki (1751\u20131764)","Meiwa (1764\u20131772)","An\u2019ei (1772\u20131781)","Tenmei (1781\u20131789)","Kansei (1789\u20131801)","Ky\u014dwa (1801\u20131804)","Bunka (1804\u20131818)","Bunsei (1818\u20131830)","Tenp\u014d (1830\u20131844)","K\u014dka (1844\u20131848)","Kaei (1848\u20131854)","Ansei (1854\u20131860)","Man\u2019en (1860\u20131861)","Bunky\u016b (1861\u20131864)","Genji (1864\u20131865)","Kei\u014d (1865\u20131868)","Meiji","Taish\u014d","Sh\u014dwa","Heisei"],long:["Taika (645\u2013650)","Hakuchi (650\u2013671)","Hakuh\u014d (672\u2013686)","Shuch\u014d (686\u2013701)","Taih\u014d (701\u2013704)","Keiun (704\u2013708)","Wad\u014d (708\u2013715)","Reiki (715\u2013717)","Y\u014dr\u014d (717\u2013724)","Jinki (724\u2013729)","Tenpy\u014d (729\u2013749)","Tenpy\u014d-kamp\u014d (749-749)","Tenpy\u014d-sh\u014dh\u014d (749-757)","Tenpy\u014d-h\u014dji (757-765)","Tenpy\u014d-jingo (765-767)","Jingo-keiun (767-770)","H\u014dki (770\u2013780)","Ten-\u014d (781-782)","Enryaku (782\u2013806)","Daid\u014d (806\u2013810)","K\u014dnin (810\u2013824)","Tench\u014d (824\u2013834)","J\u014dwa (834\u2013848)","Kaj\u014d (848\u2013851)","Ninju (851\u2013854)","Saik\u014d (854\u2013857)","Ten-an (857-859)","J\u014dgan (859\u2013877)","Gangy\u014d (877\u2013885)","Ninna (885\u2013889)","Kanpy\u014d (889\u2013898)","Sh\u014dtai (898\u2013901)","Engi (901\u2013923)","Ench\u014d (923\u2013931)","J\u014dhei (931\u2013938)","Tengy\u014d (938\u2013947)","Tenryaku (947\u2013957)","Tentoku (957\u2013961)","\u014cwa (961\u2013964)","K\u014dh\u014d (964\u2013968)","Anna (968\u2013970)","Tenroku (970\u2013973)","Ten\u2019en (973\u2013976)","J\u014dgen (976\u2013978)","Tengen (978\u2013983)","Eikan (983\u2013985)","Kanna (985\u2013987)","Eien (987\u2013989)","Eiso (989\u2013990)","Sh\u014dryaku (990\u2013995)","Ch\u014dtoku (995\u2013999)","Ch\u014dh\u014d (999\u20131004)","Kank\u014d (1004\u20131012)","Ch\u014dwa (1012\u20131017)","Kannin (1017\u20131021)","Jian (1021\u20131024)","Manju (1024\u20131028)","Ch\u014dgen (1028\u20131037)","Ch\u014dryaku (1037\u20131040)","Ch\u014dky\u016b (1040\u20131044)","Kantoku (1044\u20131046)","Eish\u014d (1046\u20131053)","Tengi (1053\u20131058)","K\u014dhei (1058\u20131065)","Jiryaku (1065\u20131069)","Enky\u016b (1069\u20131074)","Sh\u014dho (1074\u20131077)","Sh\u014dryaku (1077\u20131081)","Eih\u014d (1081\u20131084)","\u014ctoku (1084\u20131087)","Kanji (1087\u20131094)","Kah\u014d (1094\u20131096)","Eich\u014d (1096\u20131097)","J\u014dtoku (1097\u20131099)","K\u014dwa (1099\u20131104)","Ch\u014dji (1104\u20131106)","Kash\u014d (1106\u20131108)","Tennin (1108\u20131110)","Ten-ei (1110-1113)","Eiky\u016b (1113\u20131118)","Gen\u2019ei (1118\u20131120)","H\u014dan (1120\u20131124)","Tenji (1124\u20131126)","Daiji (1126\u20131131)","Tensh\u014d (1131\u20131132)","Ch\u014dsh\u014d (1132\u20131135)","H\u014den (1135\u20131141)","Eiji (1141\u20131142)","K\u014dji (1142\u20131144)","Ten\u2019y\u014d (1144\u20131145)","Ky\u016ban (1145\u20131151)","Ninpei (1151\u20131154)","Ky\u016bju (1154\u20131156)","H\u014dgen (1156\u20131159)","Heiji (1159\u20131160)","Eiryaku (1160\u20131161)","\u014cho (1161\u20131163)","Ch\u014dkan (1163\u20131165)","Eiman (1165\u20131166)","Nin\u2019an (1166\u20131169)","Ka\u014d (1169\u20131171)","Sh\u014dan (1171\u20131175)","Angen (1175\u20131177)","Jish\u014d (1177\u20131181)","Y\u014dwa (1181\u20131182)","Juei (1182\u20131184)","Genryaku (1184\u20131185)","Bunji (1185\u20131190)","Kenky\u016b (1190\u20131199)","Sh\u014dji (1199\u20131201)","Kennin (1201\u20131204)","Genky\u016b (1204\u20131206)","Ken\u2019ei (1206\u20131207)","J\u014dgen (1207\u20131211)","Kenryaku (1211\u20131213)","Kenp\u014d (1213\u20131219)","J\u014dky\u016b (1219\u20131222)","J\u014d\u014d (1222\u20131224)","Gennin (1224\u20131225)","Karoku (1225\u20131227)","Antei (1227\u20131229)","Kanki (1229\u20131232)","J\u014dei (1232\u20131233)","Tenpuku (1233\u20131234)","Bunryaku (1234\u20131235)","Katei (1235\u20131238)","Ryakunin (1238\u20131239)","En\u2019\u014d (1239\u20131240)","Ninji (1240\u20131243)","Kangen (1243\u20131247)","H\u014dji (1247\u20131249)","Kench\u014d (1249\u20131256)","K\u014dgen (1256\u20131257)","Sh\u014dka (1257\u20131259)","Sh\u014dgen (1259\u20131260)","Bun\u2019\u014d (1260\u20131261)","K\u014dch\u014d (1261\u20131264)","Bun\u2019ei (1264\u20131275)","Kenji (1275\u20131278)","K\u014dan (1278\u20131288)","Sh\u014d\u014d (1288\u20131293)","Einin (1293\u20131299)","Sh\u014dan (1299\u20131302)","Kengen (1302\u20131303)","Kagen (1303\u20131306)","Tokuji (1306\u20131308)","Enky\u014d (1308\u20131311)","\u014cch\u014d (1311\u20131312)","Sh\u014dwa (1312\u20131317)","Bunp\u014d (1317\u20131319)","Gen\u014d (1319\u20131321)","Genk\u014d (1321\u20131324)","Sh\u014dch\u016b (1324\u20131326)","Karyaku (1326\u20131329)","Gentoku (1329\u20131331)","Genk\u014d (1331\u20131334)","Kenmu (1334\u20131336)","Engen (1336\u20131340)","K\u014dkoku (1340\u20131346)","Sh\u014dhei (1346\u20131370)","Kentoku (1370\u20131372)","Bunch\u016b (1372\u20131375)","Tenju (1375\u20131379)","K\u014dryaku (1379\u20131381)","K\u014dwa (1381\u20131384)","Gench\u016b (1384\u20131392)","Meitoku (1384\u20131387)","Kakei (1387\u20131389)","K\u014d\u014d (1389\u20131390)","Meitoku (1390\u20131394)","\u014cei (1394\u20131428)","Sh\u014dch\u014d (1428\u20131429)","Eiky\u014d (1429\u20131441)","Kakitsu (1441\u20131444)","Bun\u2019an (1444\u20131449)","H\u014dtoku (1449\u20131452)","Ky\u014dtoku (1452\u20131455)","K\u014dsh\u014d (1455\u20131457)","Ch\u014droku (1457\u20131460)","Kansh\u014d (1460\u20131466)","Bunsh\u014d (1466\u20131467)","\u014cnin (1467\u20131469)","Bunmei (1469\u20131487)","Ch\u014dky\u014d (1487\u20131489)","Entoku (1489\u20131492)","Mei\u014d (1492\u20131501)","Bunki (1501\u20131504)","Eish\u014d (1504\u20131521)","Taiei (1521\u20131528)","Ky\u014droku (1528\u20131532)","Tenbun (1532\u20131555)","K\u014dji (1555\u20131558)","Eiroku (1558\u20131570)","Genki (1570\u20131573)","Tensh\u014d (1573\u20131592)","Bunroku (1592\u20131596)","Keich\u014d (1596\u20131615)","Genna (1615\u20131624)","Kan\u2019ei (1624\u20131644)","Sh\u014dho (1644\u20131648)","Keian (1648\u20131652)","J\u014d\u014d (1652\u20131655)","Meireki (1655\u20131658)","Manji (1658\u20131661)","Kanbun (1661\u20131673)","Enp\u014d (1673\u20131681)","Tenna (1681\u20131684)","J\u014dky\u014d (1684\u20131688)","Genroku (1688\u20131704)","H\u014dei (1704\u20131711)","Sh\u014dtoku (1711\u20131716)","Ky\u014dh\u014d (1716\u20131736)","Genbun (1736\u20131741)","Kanp\u014d (1741\u20131744)","Enky\u014d (1744\u20131748)","Kan\u2019en (1748\u20131751)","H\u014dreki (1751\u20131764)","Meiwa (1764\u20131772)","An\u2019ei (1772\u20131781)","Tenmei (1781\u20131789)","Kansei (1789\u20131801)","Ky\u014dwa (1801\u20131804)","Bunka (1804\u20131818)","Bunsei (1818\u20131830)","Tenp\u014d (1830\u20131844)","K\u014dka (1844\u20131848)","Kaei (1848\u20131854)","Ansei (1854\u20131860)","Man\u2019en (1860\u20131861)","Bunky\u016b (1861\u20131864)","Genji (1864\u20131865)","Kei\u014d (1865\u20131868)","Meiji","Taish\u014d","Sh\u014dwa","Heisei"]},dayPeriods:{am:"AM",pm:"PM"}},persian:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Farvardin","Ordibehesht","Khordad","Tir","Mordad","Shahrivar","Mehr","Aban","Azar","Dey","Bahman","Esfand"],long:["Farvardin","Ordibehesht","Khordad","Tir","Mordad","Shahrivar","Mehr","Aban","Azar","Dey","Bahman","Esfand"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AP"],short:["AP"],long:["AP"]},dayPeriods:{am:"AM",pm:"PM"}},roc:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["Before R.O.C.","Minguo"],short:["Before R.O.C.","Minguo"],long:["Before R.O.C.","Minguo"]},dayPeriods:{am:"AM",pm:"PM"}}}},number:{nu:["latn"],patterns:{decimal:{positivePattern:"{number}",negativePattern:"{minusSign}{number}"},currency:{positivePattern:"{currency}{number}",negativePattern:"{minusSign}{currency}{number}"},percent:{positivePattern:"{number}{percentSign}",negativePattern:"{minusSign}{number}{percentSign}"}},symbols:{latn:{decimal:".",group:",",nan:"NaN",plusSign:"+",minusSign:"-",percentSign:"%",infinity:"\u221e"}},currencies:{AUD:"A$",BRL:"R$",CAD:"CA$",CNY:"CN\xa5",EUR:"\u20ac",GBP:"\xa3",HKD:"HK$",ILS:"\u20aa",INR:"\u20b9",JPY:"\xa5",KRW:"\u20a9",MXN:"MX$",NZD:"NZ$",TWD:"NT$",USD:"$",VND:"\u20ab",XAF:"FCFA",XCD:"EC$",XOF:"CFA",XPF:"CFPF"}}})},x8Yj:function(e,t,n){var r=n("XKFU"),o=n("LVwc"),i=Math.exp;r(r.S,"Math",{tanh:function(e){var t=o(e=+e),n=o(-e);return t==1/0?1:n==1/0?-1:(t-n)/(i(e)+i(-e))}})},x8ZO:function(e,t,n){var r=n("XKFU"),o=Math.abs;r(r.S,"Math",{hypot:function(e,t){for(var n,r,i=0,a=0,u=arguments.length,s=0;a<u;)s<(n=o(arguments[a++]))?(i=i*(r=s/n)*r+1,s=n):i+=n>0?(r=n/s)*r:n;return s===1/0?1/0:s*Math.sqrt(i)}})},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),o=n("aagx"),i=n("LZWt"),a=n("Xbzi"),u=n("apmT"),s=n("eeVq"),c=n("kJMx").f,l=n("EemH").f,f=n("hswa").f,h=n("qncB").trim,p=r.Number,g=p,d=p.prototype,v="Number"==i(n("Kuth")(d)),y="trim"in String.prototype,m=function(e){var t=u(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,i=(t=y?t.trim():h(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var a,s=t.slice(2),c=0,l=s.length;c<l;c++)if((a=s.charCodeAt(c))<48||a>o)return NaN;return parseInt(s,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(v?s(function(){d.valueOf.call(n)}):"Number"!=i(n))?a(new g(m(t)),n,p):m(t)};for(var b,k=n("nh4g")?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;k.length>w;w++)o(g,b=k[w])&&!o(p,b)&&f(p,b,l(g,b));p.prototype=d,d.constructor=p,n("KroJ")(r,"Number",p)}},xpiv:function(e,t,n){var r=n("XKFU");r(r.S,"Reflect",{ownKeys:n("mQtv")})},xpql:function(e,t,n){e.exports=!n("nh4g")&&!n("eeVq")(function(){return 7!=Object.defineProperty(n("Iw71")("div"),"a",{get:function(){return 7}}).a})},y3w9:function(e,t,n){var r=n("0/R4");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},yM4b:function(e,t,n){var r=n("K0xU")("toPrimitive"),o=Date.prototype;r in o||n("Mukb")(o,r,n("g4EE"))},ylqs:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},yt8O:function(e,t,n){"use strict";var r=n("nGyu"),o=n("1TsA"),i=n("hPIQ"),a=n("aCFj");e.exports=n("Afnz")(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,o(1)):o(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},z2o2:function(e,t,n){var r=n("0/R4"),o=n("Z6vF").onFreeze;n("Xtr8")("seal",function(e){return function(t){return e&&r(t)?e(o(t)):t}})},zRwo:function(e,t,n){var r=n("6FMO");e.exports=function(e,t){return new(r(e))(t)}},zhAb:function(e,t,n){var r=n("aagx"),o=n("aCFj"),i=n("w2a5")(!1),a=n("YTvA")("IE_PROTO");e.exports=function(e,t){var n,u=o(e),s=0,c=[];for(n in u)n!=a&&r(u,n)&&c.push(n);for(;t.length>s;)r(u,n=t[s++])&&(~i(c,n)||c.push(n));return c}},"zq+C":function(e,t,n){var r=n("N6cJ"),o=n("y3w9"),i=r.key,a=r.map,u=r.store;r.exp({deleteMetadata:function(e,t){var n=arguments.length<3?void 0:i(arguments[2]),r=a(o(t),n,!1);if(void 0===r||!r.delete(e))return!1;if(r.size)return!0;var s=u.get(t);return s.delete(n),!!s.size||u.delete(t)}})}},[[1,0]]]);;
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(a,s,b){a.exports=b("zUnb")},RnhZ:function(a,s,b){var n={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function t(a){var s=j(a);return b(s)}function j(a){var s=n[a];if(!(s+1)){var b=new Error("Cannot find module '"+a+"'");throw b.code="MODULE_NOT_FOUND",b}return s}t.keys=function(){return Object.keys(n)},t.resolve=j,a.exports=t,t.id="RnhZ"},crnd:function(a,s){function b(a){return Promise.resolve().then(function(){var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s})}b.keys=function(){return[]},b.resolve=b,a.exports=b,b.id="crnd"},zUnb:function(a,s,b){"use strict";b.r(s);var n=b("CcnG"),t=b("Ifgn"),j=b("Eslu"),e=b("/hO8"),r=b("5WcC"),q=b("3fdv"),o=b("N467"),l=b("qi76"),i=b("srE5"),c=function(){function a(){this.tagComponentMapping={"tni-booking":t.a,"tni-plan":j.a,"tni-alerts-widget":e.a,"tni-trip-planner-tridget":o.a,"stationlink-main":r.a,"metro-main":q.a,"station-facilities":i.c,"stop-accessibility":i.b,"app-twitter-handle-search":l.a,"stop-routes-list":i.a}}return a.prototype.ngDoBootstrap=function(a){for(var s=0,b=Object.keys(this.tagComponentMapping);s<b.length;s++){var n=b[s];document.getElementsByTagName(n).length>0&&a.bootstrap(this.tagComponentMapping[n])}},a}(),u=b("+eoq"),d=b("2La6"),p=b("tuOl"),m=b("X2CI"),k=b("xEz5"),g=b("Y3k6"),h=b("Ex5S"),f=b("Aiio"),y=b("y4GE"),v=b("mpbb"),z=b("Ip0R"),O=b("ZYjt"),x=b("t/Na"),D=b("3ZaB"),w=b("9lgY"),E=b("T1BI"),U=b("kLtR"),C=b("dEht"),R=b("tUW/"),Y=b("4ATH"),B=b("w7Xv"),M=b("Uecl"),T=b("p7CD"),V=b("kz5P"),Z=b("E4Jq"),X=b("mr1O"),F=b("5IX/"),Q=b("lR7y"),I=b("UxfY"),N=b("+9V0"),J=b("UcfC"),L=b("gIcY"),W=b("GooZ"),P=b("nfFZ"),A=b("/Vdu"),S=b("J5xx"),K=b("/y3m"),G=b("lepT"),H=b("UTGZ"),_=b("gTB4"),$=b("DHEB"),aa=b("QJOd"),sa=b("lUqE"),ba=b("AfO8"),na=b("MCcF"),ta=b("oLF2"),ja=b("CLdD"),ea=b("d8H3"),ra=b("zOFj"),qa=b("Q6bz"),oa=b("N+V4"),la=b("nyDe"),ia=b("LZq5"),ca=b("OxXP"),ua=b("TY4Q"),da=b("dtn5"),pa=b("Yl2j"),ma=b("2On9"),ka=b("HrGG"),ga=b("EFUZ"),ha=b("gcOl"),fa=b("Fz3W"),ya=b("RyFW"),va=b("WERl"),za=b("3pWC"),Oa=b("LFOM"),xa=b("yM9K"),Da=b("BvNR"),wa=b("/JXh"),Ea=b("VTi8"),Ua=b("XAl4"),Ca=b("ND1Z"),Ra=b("8a0D"),Ya=b("lZPT"),Ba=b("n0B/"),Ma=b("+ZEM"),Ta=b("b5LC"),Va=b("GUKT"),Za=b("+TZ1"),Xa=b("PT6g"),Fa=b("RkwM"),Qa=b("0Nn5"),Ia=b("/8xC"),Na=b("ZxUa"),Ja=n.fb(c,[],function(a){return n.pb([n.qb(512,n.h,n.T,[[8,[u.a,d.a,p.a,m.a,k.a,g.a,h.a,f.a,y.a,v.a]],[3,n.h],n.r]),n.qb(5120,n.q,n.db,[[3,n.q]]),n.qb(4608,z.i,z.h,[n.q,[2,z.p]]),n.qb(4608,n.g,n.g,[]),n.qb(5120,n.a,n.ab,[]),n.qb(5120,n.o,n.bb,[]),n.qb(5120,n.p,n.cb,[]),n.qb(4608,O.b,O.k,[z.c]),n.qb(6144,n.B,null,[O.b]),n.qb(4608,O.e,O.g,[]),n.qb(5120,O.c,function(a,s,b,n,t,j,e,r){return[new O.i(a,s,b),new O.n(n),new O.m(t,j,e,r)]},[z.c,n.t,n.v,z.c,z.c,O.e,n.U,[2,O.f]]),n.qb(4608,O.d,O.d,[O.c,n.t]),n.qb(135680,O.l,O.l,[z.c]),n.qb(4608,O.j,O.j,[O.d,O.l]),n.qb(6144,n.z,null,[O.j]),n.qb(6144,O.o,null,[O.l]),n.qb(4608,n.E,n.E,[n.t]),n.qb(4608,x.j,x.p,[z.c,n.v,x.n]),n.qb(4608,x.q,x.q,[x.j,x.o]),n.qb(5120,x.a,function(a){return[a]},[x.q]),n.qb(4608,x.m,x.m,[]),n.qb(6144,x.k,null,[x.m]),n.qb(4608,x.i,x.i,[x.k]),n.qb(6144,x.b,null,[x.i]),n.qb(4608,x.g,x.l,[x.b,n.n]),n.qb(4608,x.c,x.c,[x.g]),n.qb(4608,D.a,D.a,[]),n.qb(4608,w.a,w.a,[x.c]),n.qb(4608,E.a,E.a,[]),n.qb(4608,U.a,U.a,[]),n.qb(4608,C.a,C.a,[x.c]),n.qb(4608,R.a,R.a,[]),n.qb(4608,Y.a,Y.a,[D.a]),n.qb(4608,B.a,B.a,[Y.a]),n.qb(4608,M.a,M.a,[Y.a]),n.qb(4608,T.a,T.a,[Y.a]),n.qb(4608,V.a,V.a,[Y.a]),n.qb(4608,Z.a,Z.a,[Y.a]),n.qb(4608,X.a,X.a,[Y.a]),n.qb(4608,F.a,F.a,[]),n.qb(4608,Q.a,Q.a,[]),n.qb(4608,I.a,I.a,[]),n.qb(4608,N.a,N.a,[]),n.qb(4608,J.a,J.a,[Y.a]),n.qb(4608,L.q,L.q,[]),n.qb(4608,W.a,W.a,[x.c]),n.qb(4608,P.a,P.a,[A.a]),n.qb(4608,S.a,S.a,[x.c]),n.qb(4608,K.a,K.a,[x.c]),n.qb(4608,G.a,G.a,[]),n.qb(4608,H.a,H.a,[Y.a]),n.qb(4608,_.a,_.a,[]),n.qb(4608,$.a,$.a,[x.c]),n.qb(4608,aa.a,aa.a,[D.a]),n.qb(4608,sa.a,sa.a,[x.c]),n.qb(4608,ba.a,ba.a,[]),n.qb(4608,na.a,na.a,[]),n.qb(4608,ta.a,ta.a,[Y.a]),n.qb(4608,ja.a,ja.a,[x.c]),n.qb(4608,ea.a,ea.a,[]),n.qb(4608,ra.a,ra.a,[]),n.qb(4608,qa.a,qa.a,[Y.a]),n.qb(4608,oa.a,oa.a,[x.c]),n.qb(4608,la.a,la.a,[x.c]),n.qb(4608,ia.a,ia.a,[x.c,la.a]),n.qb(4608,ca.a,ca.a,[]),n.qb(4608,ua.a,ua.a,[]),n.qb(4608,da.a,da.a,[]),n.qb(4608,pa.a,pa.a,[x.c]),n.qb(4608,ma.a,ma.a,[Y.a]),n.qb(4608,ka.a,ka.a,[]),n.qb(1073742336,z.b,z.b,[]),n.qb(1024,n.j,O.p,[]),n.qb(1024,n.b,function(a){return[O.q(a)]},[[2,n.s]]),n.qb(512,n.c,n.c,[[2,n.b]]),n.qb(131584,n.e,n.e,[n.t,n.U,n.n,n.j,n.h,n.c]),n.qb(1073742336,n.d,n.d,[n.e]),n.qb(1073742336,O.a,O.a,[[3,O.a]]),n.qb(1073742336,x.e,x.e,[]),n.qb(1073742336,x.d,x.d,[]),n.qb(1073742336,ga.a,ga.a,[]),n.qb(1073742336,ha.a,ha.a,[]),n.qb(1073742336,fa.a,fa.a,[]),n.qb(1073742336,ya.a,ya.a,[]),n.qb(1073742336,va.a,va.a,[]),n.qb(1073742336,za.a,za.a,[]),n.qb(1073742336,Oa.a,Oa.a,[]),n.qb(1073742336,L.o,L.o,[]),n.qb(1073742336,L.d,L.d,[]),n.qb(1073742336,xa.a,xa.a,[]),n.qb(1073742336,Da.a,Da.a,[]),n.qb(1073742336,wa.a,wa.a,[]),n.qb(1073742336,Ea.a,Ea.a,[]),n.qb(1073742336,Ua.a,Ua.a,[]),n.qb(1073742336,Ca.a,Ca.a,[]),n.qb(1073742336,Ra.a,Ra.a,[]),n.qb(1073742336,Ya.a,Ya.a,[]),n.qb(1073742336,Ba.a,Ba.a,[]),n.qb(1073742336,Ma.a,Ma.a,[]),n.qb(1073742336,Ta.a,Ta.a,[]),n.qb(1073742336,Va.a,Va.a,[]),n.qb(1073742336,Za.a,Za.a,[]),n.qb(1073742336,Xa.a,Xa.a,[]),n.qb(1073742336,Fa.a,Fa.a,[]),n.qb(1073742336,Qa.a,Qa.a,[]),n.qb(1073742336,Ia.a,Ia.a,[]),n.qb(1073742336,Na.a,Na.a,[]),n.qb(1073742336,c,c,[]),n.qb(256,n.S,!0,[]),n.qb(256,x.n,"XSRF-TOKEN",[]),n.qb(256,x.o,"X-XSRF-TOKEN",[]),n.qb(256,z.a,"/",[])])});Object(n.L)(),O.h().bootstrapModuleFactory(Ja)}},[[0,0,3]]]);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, once) {
  var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
  var originalJQOnce = $.fn.once;
  var originalJQRemoveOnce = $.fn.removeOnce;

  $.fn.once = function jQueryOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.once() ".concat(deprecatedMessageSuffix)
    });
    return originalJQOnce.apply(this, [id]);
  };

  $.fn.removeOnce = function jQueryRemoveOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
    });
    return originalJQRemoveOnce.apply(this, [id]);
  };

  var drupalOnce = once;

  function augmentedOnce(id, selector, context) {
    originalJQOnce.apply($(selector, context), [id]);
    return drupalOnce(id, selector, context);
  }

  function remove(id, selector, context) {
    originalJQRemoveOnce.apply($(selector, context), [id]);
    return drupalOnce.remove(id, selector, context);
  }

  window.once = Object.assign(augmentedOnce, drupalOnce, {
    remove: remove
  });
})(jQuery, once);;
// %LEAVE_UNMINIFIED% %REMOVE_LINE%
var hljs=new function(){function k(v){return v.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(v){return v.nodeName.toLowerCase()}function i(w,x){var v=w&&w.exec(x);return v&&v.index==0}function d(v){return Array.prototype.map.call(v.childNodes,function(w){if(w.nodeType==3){return b.useBR?w.nodeValue.replace(/\n/g,""):w.nodeValue}if(t(w)=="br"){return"\n"}return d(w)}).join("")}function r(w){var v=(w.className+" "+(w.parentNode?w.parentNode.className:"")).split(/\s+/);v=v.map(function(x){return x.replace(/^language-/,"")});return v.filter(function(x){return j(x)||x=="no-highlight"})[0]}function o(x,y){var v={};for(var w in x){v[w]=x[w]}if(y){for(var w in y){v[w]=y[w]}}return v}function u(x){var v=[];(function w(y,z){for(var A=y.firstChild;A;A=A.nextSibling){if(A.nodeType==3){z+=A.nodeValue.length}else{if(t(A)=="br"){z+=1}else{if(A.nodeType==1){v.push({event:"start",offset:z,node:A});z=w(A,z);v.push({event:"stop",offset:z,node:A})}}}}return z})(x,0);return v}function q(w,y,C){var x=0;var F="";var z=[];function B(){if(!w.length||!y.length){return w.length?w:y}if(w[0].offset!=y[0].offset){return(w[0].offset<y[0].offset)?w:y}return y[0].event=="start"?w:y}function A(H){function G(I){return" "+I.nodeName+'="'+k(I.value)+'"'}F+="<"+t(H)+Array.prototype.map.call(H.attributes,G).join("")+">"}function E(G){F+="</"+t(G)+">"}function v(G){(G.event=="start"?A:E)(G.node)}while(w.length||y.length){var D=B();F+=k(C.substr(x,D[0].offset-x));x=D[0].offset;if(D==w){z.reverse().forEach(E);do{v(D.splice(0,1)[0]);D=B()}while(D==w&&D.length&&D[0].offset==x);z.reverse().forEach(A)}else{if(D[0].event=="start"){z.push(D[0].node)}else{z.pop()}v(D.splice(0,1)[0])}}return F+k(C.substr(x))}function m(y){function v(z){return(z&&z.source)||z}function w(A,z){return RegExp(v(A),"m"+(y.cI?"i":"")+(z?"g":""))}function x(D,C){if(D.compiled){return}D.compiled=true;D.k=D.k||D.bK;if(D.k){var z={};function E(G,F){if(y.cI){F=F.toLowerCase()}F.split(" ").forEach(function(H){var I=H.split("|");z[I[0]]=[G,I[1]?Number(I[1]):1]})}if(typeof D.k=="string"){E("keyword",D.k)}else{Object.keys(D.k).forEach(function(F){E(F,D.k[F])})}D.k=z}D.lR=w(D.l||/\b[A-Za-z0-9_]+\b/,true);if(C){if(D.bK){D.b=D.bK.split(" ").join("|")}if(!D.b){D.b=/\B|\b/}D.bR=w(D.b);if(!D.e&&!D.eW){D.e=/\B|\b/}if(D.e){D.eR=w(D.e)}D.tE=v(D.e)||"";if(D.eW&&C.tE){D.tE+=(D.e?"|":"")+C.tE}}if(D.i){D.iR=w(D.i)}if(D.r===undefined){D.r=1}if(!D.c){D.c=[]}var B=[];D.c.forEach(function(F){if(F.v){F.v.forEach(function(G){B.push(o(F,G))})}else{B.push(F=="self"?D:F)}});D.c=B;D.c.forEach(function(F){x(F,D)});if(D.starts){x(D.starts,C)}var A=D.c.map(function(F){return F.bK?"\\.?\\b("+F.b+")\\b\\.?":F.b}).concat([D.tE]).concat([D.i]).map(v).filter(Boolean);D.t=A.length?w(A.join("|"),true):{exec:function(F){return null}};D.continuation={}}x(y)}function c(S,L,J,R){function v(U,V){for(var T=0;T<V.c.length;T++){if(i(V.c[T].bR,U)){return V.c[T]}}}function z(U,T){if(i(U.eR,T)){return U}if(U.eW){return z(U.parent,T)}}function A(T,U){return !J&&i(U.iR,T)}function E(V,T){var U=M.cI?T[0].toLowerCase():T[0];return V.k.hasOwnProperty(U)&&V.k[U]}function w(Z,X,W,V){var T=V?"":b.classPrefix,U='<span class="'+T,Y=W?"":"</span>";U+=Z+'">';return U+X+Y}function N(){var U=k(C);if(!I.k){return U}var T="";var X=0;I.lR.lastIndex=0;var V=I.lR.exec(U);while(V){T+=U.substr(X,V.index-X);var W=E(I,V);if(W){H+=W[1];T+=w(W[0],V[0])}else{T+=V[0]}X=I.lR.lastIndex;V=I.lR.exec(U)}return T+U.substr(X)}function F(){if(I.sL&&!f[I.sL]){return k(C)}var T=I.sL?c(I.sL,C,true,I.continuation.top):g(C);if(I.r>0){H+=T.r}if(I.subLanguageMode=="continuous"){I.continuation.top=T.top}return w(T.language,T.value,false,true)}function Q(){return I.sL!==undefined?F():N()}function P(V,U){var T=V.cN?w(V.cN,"",true):"";if(V.rB){D+=T;C=""}else{if(V.eB){D+=k(U)+T;C=""}else{D+=T;C=U}}I=Object.create(V,{parent:{value:I}})}function G(T,X){C+=T;if(X===undefined){D+=Q();return 0}var V=v(X,I);if(V){D+=Q();P(V,X);return V.rB?0:X.length}var W=z(I,X);if(W){var U=I;if(!(U.rE||U.eE)){C+=X}D+=Q();do{if(I.cN){D+="</span>"}H+=I.r;I=I.parent}while(I!=W.parent);if(U.eE){D+=k(X)}C="";if(W.starts){P(W.starts,"")}return U.rE?0:X.length}if(A(X,I)){throw new Error('Illegal lexeme "'+X+'" for mode "'+(I.cN||"<unnamed>")+'"')}C+=X;return X.length||1}var M=j(S);if(!M){throw new Error('Unknown language: "'+S+'"')}m(M);var I=R||M;var D="";for(var K=I;K!=M;K=K.parent){if(K.cN){D=w(K.cN,D,true)}}var C="";var H=0;try{var B,y,x=0;while(true){I.t.lastIndex=x;B=I.t.exec(L);if(!B){break}y=G(L.substr(x,B.index-x),B[0]);x=B.index+y}G(L.substr(x));for(var K=I;K.parent;K=K.parent){if(K.cN){D+="</span>"}}return{r:H,value:D,language:S,top:I}}catch(O){if(O.message.indexOf("Illegal")!=-1){return{r:0,value:k(L)}}else{throw O}}}function g(y,x){x=x||b.languages||Object.keys(f);var v={r:0,value:k(y)};var w=v;x.forEach(function(z){if(!j(z)){return}var A=c(z,y,false);A.language=z;if(A.r>w.r){w=A}if(A.r>v.r){w=v;v=A}});if(w.language){v.second_best=w}return v}function h(v){if(b.tabReplace){v=v.replace(/^((<[^>]+>|\t)+)/gm,function(w,z,y,x){return z.replace(/\t/g,b.tabReplace)})}if(b.useBR){v=v.replace(/\n/g,"<br>")}return v}function p(z){var y=d(z);var A=r(z);if(A=="no-highlight"){return}var v=A?c(A,y,true):g(y);var w=u(z);if(w.length){var x=document.createElementNS("http://www.w3.org/1999/xhtml","pre");x.innerHTML=v.value;v.value=q(w,u(x),y)}v.value=h(v.value);z.innerHTML=v.value;z.className+=" hljs "+(!A&&v.language||"");z.result={language:v.language,re:v.r};if(v.second_best){z.second_best={language:v.second_best.language,re:v.second_best.r}}}var b={classPrefix:"hljs-",tabReplace:null,useBR:false,languages:undefined};function s(v){b=o(b,v)}function l(){if(l.called){return}l.called=true;var v=document.querySelectorAll("pre code");Array.prototype.forEach.call(v,p)}function a(){addEventListener("DOMContentLoaded",l,false);addEventListener("load",l,false)}var f={};var n={};function e(v,x){var w=f[v]=x(this);if(w.aliases){w.aliases.forEach(function(y){n[y]=v})}}function j(v){return f[v]||f[n[v]]}this.highlight=c;this.highlightAuto=g;this.fixMarkup=h;this.highlightBlock=p;this.configure=s;this.initHighlighting=l;this.initHighlightingOnLoad=a;this.registerLanguage=e;this.getLanguage=j;this.inherit=o;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE]};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE]};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gim]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]};this.TM={cN:"title",b:this.IR,r:0};this.UTM={cN:"title",b:this.UIR,r:0}}();hljs.registerLanguage("bash",function(b){var a={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)\}/}]};var d={cN:"string",b:/"/,e:/"/,c:[b.BE,a,{cN:"variable",b:/\$\(/,e:/\)/,c:[b.BE]}]};var c={cN:"string",b:/'/,e:/'/};return{l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for break continue while in do done exit return set declare case esac export exec",literal:"true false",built_in:"printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:true,c:[b.inherit(b.TM,{b:/\w[\w\d_]*/})],r:0},b.HCM,b.NM,d,c,a]}});hljs.registerLanguage("cs",function(b){var a="abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield";return{k:a,c:[{cN:"comment",b:"///",e:"$",rB:true,c:[{cN:"xmlDocTag",b:"///|<!--|-->"},{cN:"xmlDocTag",b:"</?",e:">"}]},b.CLCM,b.CBLCLM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},b.ASM,b.QSM,b.CNM,{bK:"protected public private internal",e:/[{;=]/,k:a,c:[{bK:"class namespace interface",starts:{c:[b.TM]}},{b:b.IR+"\\s*\\(",rB:true,c:[b.TM]}]}]}});hljs.registerLanguage("ruby",function(e){var h="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";var g="and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor";var a={cN:"yardoctag",b:"@[A-Za-z]+"};var i={cN:"comment",v:[{b:"#",e:"$",c:[a]},{b:"^\\=begin",e:"^\\=end",c:[a],r:10},{b:"^__END__",e:"\\n$"}]};var c={cN:"subst",b:"#\\{",e:"}",k:g};var d={cN:"string",c:[e.BE,c],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:"%[qw]?\\(",e:"\\)"},{b:"%[qw]?\\[",e:"\\]"},{b:"%[qw]?{",e:"}"},{b:"%[qw]?<",e:">",r:10},{b:"%[qw]?/",e:"/",r:10},{b:"%[qw]?%",e:"%",r:10},{b:"%[qw]?-",e:"-",r:10},{b:"%[qw]?\\|",e:"\\|",r:10},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]};var b={cN:"params",b:"\\(",e:"\\)",k:g};var f=[d,i,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]},i]},{cN:"function",bK:"def",e:" |$|;",r:0,c:[e.inherit(e.TM,{b:h}),b,i]},{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:[d,{b:h}],r:0},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:[i,{cN:"regexp",c:[e.BE,c],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}],r:0}];c.c=f;b.c=f;return{k:g,c:f}});hljs.registerLanguage("diff",function(a){return{c:[{cN:"chunk",r:10,v:[{b:/^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:"header",v:[{b:/Index: /,e:/$/},{b:/=====/,e:/=====$/},{b:/^\-\-\-/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+\+\+/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}});hljs.registerLanguage("javascript",function(a){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"},c:[{cN:"pi",b:/^\s*('|")use strict('|")/,r:10},a.ASM,a.QSM,a.CLCM,a.CBLCLM,a.CNM,{b:"("+a.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[a.CLCM,a.CBLCLM,a.REGEXP_MODE,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,c:[a.inherit(a.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[a.CLCM,a.CBLCLM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+a.IR,r:0}]}});hljs.registerLanguage("xml",function(a){var c="[A-Za-z0-9\\._:-]+";var d={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"};var b={eW:true,i:/</,r:0,c:[d,{cN:"attribute",b:c,r:0},{b:"=",r:0,c:[{cN:"value",v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html"],cI:true,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[b],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[b],starts:{e:"<\/script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},d,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ /><]+",r:0},b]}]}});hljs.registerLanguage("markdown",function(a){return{c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|\t)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].+?[\\)\\]]",rB:true,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:true,rE:true,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:true,eE:true},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:true,eE:true,}],r:10},{b:"^\\[.+\\]:",e:"$",rB:true,c:[{cN:"link_reference",b:"\\[",e:"\\]",eB:true,eE:true},{cN:"link_url",b:"\\s",e:"$"}]}]}});hljs.registerLanguage("css",function(a){var b="[a-zA-Z-][a-zA-Z0-9_-]*";var c={cN:"function",b:b+"\\(",e:"\\)",c:["self",a.NM,a.ASM,a.QSM]};return{cI:true,i:"[=/|']",c:[a.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:true,eE:true,r:0,c:[c,a.ASM,a.QSM,a.NM]}]},{cN:"tag",b:b,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[a.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[c,a.NM,a.QSM,a.ASM,a.CBLCLM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}});hljs.registerLanguage("http",function(a){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:true,e:"$",c:[{cN:"string",b:" ",e:" ",eB:true,eE:true}]},{cN:"attribute",b:"^\\w",e:": ",eE:true,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:true}}]}});hljs.registerLanguage("java",function(b){var a="false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws";return{k:a,i:/<\//,c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"(^|\\s)@[A-Za-z]+"}],r:10},b.CLCM,b.CBLCLM,b.ASM,b.QSM,{bK:"protected public private",e:/[{;=]/,k:a,c:[{cN:"class",bK:"class interface",eW:true,i:/[:"<>]/,c:[{bK:"extends implements",r:10},b.UTM]},{b:b.UIR+"\\s*\\(",rB:true,c:[b.UTM]}]},b.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}});hljs.registerLanguage("php",function(b){var e={cN:"variable",b:"\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"};var a={cN:"preprocessor",b:/<\?(php)?|\?>/};var c={cN:"string",c:[b.BE,a],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},b.inherit(b.ASM,{i:null}),b.inherit(b.QSM,{i:null})]};var d={v:[b.BNM,b.CNM]};return{cI:true,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[b.CLCM,b.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"},a]},{cN:"comment",b:"__halt_compiler.+?;",eW:true,k:"__halt_compiler",l:b.UIR},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[b.BE]},a,e,{cN:"function",bK:"function",e:/[;{]/,i:"\\$|\\[|%",c:[b.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",e,b.CBLCLM,c,d]}]},{cN:"class",bK:"class interface",e:"{",i:/[:\(\$"]/,c:[{bK:"extends implements",r:10},b.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[b.UTM]},{bK:"use",e:";",c:[b.UTM]},{b:"=>"},c,d]}});hljs.registerLanguage("python",function(a){var f={cN:"prompt",b:/^(>>>|\.\.\.) /};var b={cN:"string",c:[a.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[f],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[f],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/,},{b:/(b|br)"/,e:/"/,},a.ASM,a.QSM]};var d={cN:"number",r:0,v:[{b:a.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:a.CNR+"[lLjJ]?"}]};var e={cN:"params",b:/\(/,e:/\)/,c:["self",f,d,b]};var c={e:/:/,i:/[${=;\n]/,c:[a.UTM,e]};return{k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:[f,d,b,a.HCM,a.inherit(c,{cN:"function",bK:"def",r:10}),a.inherit(c,{cN:"class",bK:"class"}),{cN:"decorator",b:/@/,e:/$/},{b:/\b(print|exec)\(/}]}});hljs.registerLanguage("sql",function(a){return{cI:true,i:/[<>]/,c:[{cN:"operator",b:"\\b(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant|merge)\\b(?!:)",e:";",eW:true,k:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number trigger if before after each row merge matched database",aggregate:"count sum min max avg"},c:[{cN:"string",b:"'",e:"'",c:[a.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[a.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[a.BE]},a.CNM]},a.CBLCLM,{cN:"comment",b:"--",e:"$"}]}});hljs.registerLanguage("ini",function(a){return{cI:true,i:/\S/,c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:true,k:"on off true false yes no",c:[a.QSM,a.NM],r:0}]}]}});hljs.registerLanguage("perl",function(c){var d="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";var f={cN:"subst",b:"[$@]\\{",e:"\\}",k:d};var g={b:"->{",e:"}"};var a={cN:"variable",v:[{b:/\$\d/},{b:/[\$\%\@\*](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/},{b:/[\$\%\@\*][^\s\w{]/,r:0}]};var e={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5};var h=[c.BE,f,a];var b=[a,c.HCM,e,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:true},g,{cN:"string",c:h,v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\<",e:"\\>",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",c:[c.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[c.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\=\\>",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+c.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[c.HCM,e,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[c.BE],r:0}]},{cN:"sub",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",r:5},{cN:"operator",b:"-\\w\\b",r:0}];f.c=b;g.c=b;return{k:d,c:b}});hljs.registerLanguage("objectivec",function(a){var d={keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign self synchronized id nonatomic super unichar IBOutlet IBAction strong weak @private @protected @public @try @property @end @throw @catch @finally @synthesize @dynamic @selector @optional @required",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"};var c=/[a-zA-Z@][a-zA-Z0-9_]*/;var b="@interface @class @protocol @implementation";return{k:d,l:c,i:"</",c:[a.CLCM,a.CBLCLM,a.CNM,a.QSM,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},{cN:"preprocessor",b:"#import",e:"$",c:[{cN:"title",b:'"',e:'"'},{cN:"title",b:"<",e:">"}]},{cN:"preprocessor",b:"#",e:"$"},{cN:"class",b:"("+b.split(" ").join("|")+")\\b",e:"({|$)",k:b,l:c,c:[a.UTM]},{cN:"variable",b:"\\."+a.UIR,r:0}]}});hljs.registerLanguage("coffeescript",function(c){var b={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module exports global window document"};var a="[A-Za-z$_][0-9A-Za-z$_]*";var f=c.inherit(c.TM,{b:a});var e={cN:"subst",b:/#\{/,e:/}/,k:b};var d=[c.BNM,c.inherit(c.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[c.BE]},{b:/'/,e:/'/,c:[c.BE]},{b:/"""/,e:/"""/,c:[c.BE,e]},{b:/"/,e:/"/,c:[c.BE,e]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[e,c.HCM]},{b:"//[gim]*",r:0},{b:"/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"}]},{cN:"property",b:"@"+a},{b:"`",e:"`",eB:true,eE:true,sL:"javascript"}];e.c=d;return{k:b,c:d.concat([{cN:"comment",b:"###",e:"###"},c.HCM,{cN:"function",b:"("+a+"\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",e:"[-=]>",rB:true,c:[f,{cN:"params",b:"\\(",rB:true,c:[{b:/\(/,e:/\)/,k:b,c:["self"].concat(d)}]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:true,i:/[:="\[\]]/,c:[f]},f]},{cN:"attribute",b:a+":",e:":",rB:true,eE:true,r:0}])}});hljs.registerLanguage("nginx",function(c){var b={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+c.UIR}]};var a={eW:true,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[c.HCM,{cN:"string",c:[c.BE,b],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:true,eE:true},{cN:"regexp",c:[c.BE,b],v:[{b:"\\s\\^",e:"\\s|{|;",rE:true},{b:"~\\*?\\s+",e:"\\s|{|;",rE:true},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},b]};return{c:[c.HCM,{b:c.UIR+"\\s",e:";|{",rB:true,c:[c.inherit(c.UTM,{starts:a})],r:0}],i:"[^\\s\\}]"}});hljs.registerLanguage("json",function(a){var e={literal:"true false null"};var d=[a.QSM,a.CNM];var c={cN:"value",e:",",eW:true,eE:true,c:d,k:e};var b={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:true,eE:true,c:[a.BE],i:"\\n",starts:c}],i:"\\S"};var f={b:"\\[",e:"\\]",c:[a.inherit(c,{cN:null})],i:"\\S"};d.splice(d.length,0,b,f);return{c:d,k:e,i:"\\S"}});hljs.registerLanguage("apache",function(a){var b={cN:"number",b:"[\\$%]\\d+"};return{cI:true,c:[a.HCM,{cN:"tag",b:"</?",e:">"},{cN:"keyword",b:/\w+/,r:0,k:{common:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},{cN:"cbracket",b:"[\\$%]\\{",e:"\\}",c:["self",b]},b,a.QSM]}}],i:/\S/}});hljs.registerLanguage("cpp",function(a){var b={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"};return{aliases:["c"],k:b,i:"</",c:[a.CLCM,a.CBLCLM,a.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},a.CNM,{cN:"preprocessor",b:"#",e:"$",c:[{b:"include\\s*<",e:">",i:"\\n"},a.CLCM]},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:b,r:10,c:["self"]}]}});hljs.registerLanguage("makefile",function(a){var b={cN:"variable",b:/\$\(/,e:/\)/,c:[a.BE]};return{c:[a.HCM,{b:/^\w+\s*\W*=/,rB:true,r:0,starts:{cN:"constant",e:/\s*\W*=/,eE:true,starts:{e:/$/,r:0,c:[b],}}},{cN:"title",b:/^[\w]+:\s*$/},{cN:"phony",b:/^\.PHONY:/,e:/$/,k:".PHONY",l:/[\.\w]+/},{b:/^\t+/,e:/$/,c:[a.QSM,b]}]}});;
/**
 * @file
 * Enables syntax highlighting via HighlightJS on the HTML code tag.
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.codesnippet = {
    attach: function (context, settings) {
      hljs.initHighlightingOnLoad();
      $("pre code").css('overflow-x', 'auto');
    }
  };

})(jQuery, Drupal);
;
jQuery(document).ready(function (e) {
	jQuery(document).click(function(event) {
		if(jQuery(event.target).parents(".navbar--main").length <= 0) {
			jQuery('.nav-link').not(this).next(".collapse").collapse('hide');
			jQuery('body').find('.navigation--main').removeClass('open');
		}
	});

	jQuery('.navbar-collapse .nav-link').on("click", function (e) {
		jQuery('.nav-link').not(this).next(".collapse").collapse('hide');
		if(jQuery('.navbar-collapse .collapse.in').length > 0) {
			jQuery('body').find('.navigation--main').removeClass('open');
		} else {
			jQuery('body').find('.navigation--main').addClass('open');
		}
	});
	
	jQuery('.navbar-toggler').on("click", function (e) {
		jQuery('#searchPanel').collapse('hide');		
		let buttonIsExpanded = (e.currentTarget.getAttribute('aria-expanded') === 'true')
		jQuery('.tfnsw-ui-kit').toggleClass('nav-mobile-expanded', !buttonIsExpanded);
		jQuery('.tfnsw-ui-kit').removeClass("search-expanded")
		window.scroll(0, 0)
	});

	jQuery('.nav-link__children .container .row > div ul li').on("click", function (e) {
		jQuery("#mainNavbar").collapse('hide');
		jQuery("#mainNavbar").find('.collapse').collapse('hide');
		jQuery(this).closest('.nav-link').addClass('collapsed');
		jQuery('body').find('.navigation--main').removeClass('open').removeClass('nav-mobile-expanded');
	})

	jQuery('#search-btn').on("click", function (e) {
		let buttonIsExpanded = (e.currentTarget.getAttribute('aria-expanded') === 'true')
		jQuery('.tfnsw-ui-kit').toggleClass('search-expanded', !buttonIsExpanded);
		jQuery('.tfnsw-ui-kit').toggleClass('nav-mobile-expanded', !buttonIsExpanded);
		window.scrollTo(0, 0);

		setTimeout(function() { jQuery('.form-search').focus() }, 20);

		jQuery('#mainNavbar').collapse('hide');
	});

	jQuery(document).on("click",'[data-dismiss="alert"]', function (e) {
		e.preventDefault();
		e.stopPropagation();
		let parent = jQuery(this).parent();
		parent.removeClass("show");
		setTimeout(function() {
			parent.remove();
		}, 200);
	});

	jQuery(document).on("click",'.play-pause', function (e) {
		e.preventDefault();
		e.stopPropagation();
		
		jQuery(this).toggleClass("playing");
		let isplaying = jQuery(this).hasClass("playing");
		let thisCarousel = jQuery(this).parents(".carousel");
		thisCarousel.carousel(isplaying ? "cycle" : 'pause');
	});

	/* Accessibility for carousel */
	jQuery('.callout').on("focus", function (e) {
	  	jQuery(this).parents('.carousel').find('play-pause').toggle();
	  	let isplaying = jQuery(this).hasClass("playing");
		let thisCarousel = jQuery(this).parents(".carousel");
		thisCarousel.carousel(isplaying ? "cycle" : 'pause');
		jQuery(this).parents('.carousel').find('.play-pause').removeClass('playing');
	});

});