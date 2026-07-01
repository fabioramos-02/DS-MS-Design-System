var J=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ee(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var q={exports:{}},X;function ae(){return X||(X=1,(function(g){var h=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var r=(function(l){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,m=0,A={},i={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof y?new y(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++m}),a.__id},clone:function a(e,t){t=t||{};var n,s;switch(i.util.type(e)){case"Object":if(s=i.util.objId(e),t[s])return t[s];n={},t[s]=n;for(var u in e)e.hasOwnProperty(u)&&(n[u]=a(e[u],t));return n;case"Array":return s=i.util.objId(e),t[s]?t[s]:(n=[],t[s]=n,e.forEach(function(d,o){n[o]=a(d,t)}),n);default:return e}},getLanguage:function(a){for(;a;){var e=c.exec(a.className);if(e)return e[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,e){a.className=a.className.replace(RegExp(c,"gi"),""),a.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(n){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var t in e)if(e[t].src==a)return e[t]}return null}},isActive:function(a,e,t){for(var n="no-"+e;a;){var s=a.classList;if(s.contains(e))return!0;if(s.contains(n))return!1;a=a.parentElement}return!!t}},languages:{plain:A,plaintext:A,text:A,txt:A,extend:function(a,e){var t=i.util.clone(i.languages[a]);for(var n in e)t[n]=e[n];return t},insertBefore:function(a,e,t,n){n=n||i.languages;var s=n[a],u={};for(var d in s)if(s.hasOwnProperty(d)){if(d==e)for(var o in t)t.hasOwnProperty(o)&&(u[o]=t[o]);t.hasOwnProperty(d)||(u[d]=s[d])}var f=n[a];return n[a]=u,i.languages.DFS(i.languages,function(x,P){P===f&&x!=a&&(this[x]=u)}),u},DFS:function a(e,t,n,s){s=s||{};var u=i.util.objId;for(var d in e)if(e.hasOwnProperty(d)){t.call(e,d,e[d],n||d);var o=e[d],f=i.util.type(o);f==="Object"&&!s[u(o)]?(s[u(o)]=!0,a(o,t,null,s)):f==="Array"&&!s[u(o)]&&(s[u(o)]=!0,a(o,t,d,s))}}},plugins:{},highlightAll:function(a,e){i.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,t){var n={callback:t,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),i.hooks.run("before-all-elements-highlight",n);for(var s=0,u;u=n.elements[s++];)i.highlightElement(u,e===!0,n.callback)},highlightElement:function(a,e,t){var n=i.util.getLanguage(a),s=i.languages[n];i.util.setLanguage(a,n);var u=a.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(u,n);var d=a.textContent,o={element:a,language:n,grammar:s,code:d};function f(P){o.highlightedCode=P,i.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,i.hooks.run("after-highlight",o),i.hooks.run("complete",o),t&&t.call(o.element)}if(i.hooks.run("before-sanity-check",o),u=o.element.parentElement,u&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!o.code){i.hooks.run("complete",o),t&&t.call(o.element);return}if(i.hooks.run("before-highlight",o),!o.grammar){f(i.util.encode(o.code));return}if(e&&l.Worker){var x=new Worker(i.filename);x.onmessage=function(P){f(P.data)},x.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else f(i.highlight(o.code,o.grammar,o.language))},highlight:function(a,e,t){var n={code:a,grammar:e,language:t};if(i.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=i.tokenize(n.code,n.grammar),i.hooks.run("after-tokenize",n),y.stringify(i.util.encode(n.tokens),n.language)},tokenize:function(a,e){var t=e.rest;if(t){for(var n in t)e[n]=t[n];delete e.rest}var s=new z;return S(s,s.head,a),C(a,s,e,s.head,0),D(s)},hooks:{all:{},add:function(a,e){var t=i.hooks.all;t[a]=t[a]||[],t[a].push(e)},run:function(a,e){var t=i.hooks.all[a];if(!(!t||!t.length))for(var n=0,s;s=t[n++];)s(e)}},Token:y};l.Prism=i;function y(a,e,t,n){this.type=a,this.content=e,this.alias=t,this.length=(n||"").length|0}y.stringify=function a(e,t){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(f){n+=a(f,t)}),n}var s={type:e.type,content:a(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},u=e.alias;u&&(Array.isArray(u)?Array.prototype.push.apply(s.classes,u):s.classes.push(u)),i.hooks.run("wrap",s);var d="";for(var o in s.attributes)d+=" "+o+'="'+(s.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+d+">"+s.content+"</"+s.tag+">"};function _(a,e,t,n){a.lastIndex=e;var s=a.exec(t);if(s&&n&&s[1]){var u=s[1].length;s.index+=u,s[0]=s[0].slice(u)}return s}function C(a,e,t,n,s,u){for(var d in t)if(!(!t.hasOwnProperty(d)||!t[d])){var o=t[d];o=Array.isArray(o)?o:[o];for(var f=0;f<o.length;++f){if(u&&u.cause==d+","+f)return;var x=o[f],P=x.inside,G=!!x.lookbehind,U=!!x.greedy,N=x.alias;if(U&&!x.pattern.global){var V=x.pattern.toString().match(/[imsuy]*$/)[0];x.pattern=RegExp(x.pattern.source,V+"g")}for(var W=x.pattern||x,F=n.next,k=s;F!==e.tail&&!(u&&k>=u.reach);k+=F.value.length,F=F.next){var T=F.value;if(e.length>a.length)return;if(!(T instanceof y)){var I=1,w;if(U){if(w=_(W,k,a,G),!w||w.index>=a.length)break;var L=w.index,K=w.index+w[0].length,E=k;for(E+=F.value.length;L>=E;)F=F.next,E+=F.value.length;if(E-=F.value.length,k=E,F.value instanceof y)continue;for(var j=F;j!==e.tail&&(E<K||typeof j.value=="string");j=j.next)I++,E+=j.value.length;I--,T=a.slice(k,E),w.index-=k}else if(w=_(W,0,T,G),!w)continue;var L=w.index,R=w[0],O=T.slice(0,L),Y=T.slice(L+R.length),H=k+T.length;u&&H>u.reach&&(u.reach=H);var M=F.prev;O&&(M=S(e,M,O),k+=O.length),$(e,M,I);var Q=new y(d,P?i.tokenize(R,P):R,N,R);if(F=S(e,M,Q),Y&&S(e,F,Y),I>1){var Z={cause:d+","+f,reach:H};C(a,e,t,F.prev,k,Z),u&&Z.reach>u.reach&&(u.reach=Z.reach)}}}}}}function z(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function S(a,e,t){var n=e.next,s={value:t,prev:e,next:n};return e.next=s,n.prev=s,a.length++,s}function $(a,e,t){for(var n=e.next,s=0;s<t&&n!==a.tail;s++)n=n.next;e.next=n,n.prev=e,a.length-=s}function D(a){for(var e=[],t=a.head.next;t!==a.tail;)e.push(t.value),t=t.next;return e}if(!l.document)return l.addEventListener&&(i.disableWorkerMessageHandler||l.addEventListener("message",function(a){var e=JSON.parse(a.data),t=e.language,n=e.code,s=e.immediateClose;l.postMessage(i.highlight(n,i.languages[t],t)),s&&l.close()},!1)),i;var v=i.util.currentScript();v&&(i.filename=v.src,v.hasAttribute("data-manual")&&(i.manual=!0));function p(){i.manual||i.highlightAll()}if(!i.manual){var b=document.readyState;b==="loading"||b==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return i})(h);g.exports&&(g.exports=r),typeof J<"u"&&(J.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(c,m){var A={};A["language-"+m]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[m]},A.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:A}};i["language-"+m]={pattern:/[\s\S]+/,inside:r.languages[m]};var y={};y[c]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:i},r.languages.insertBefore("markup","cdata",y)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(l,c){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+l+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:r.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,(function(l){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+c.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css;var m=l.languages.markup;m&&(m.tag.addInlined("style","css"),m.tag.addAttribute("style","css"))})(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,(function(){if(typeof r>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var l="Loading…",c=function(v,p){return"✖ Error "+v+" while fetching file: "+p},m="✖ Error: File does not exist or is empty",A={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",y="loading",_="loaded",C="failed",z="pre[data-src]:not(["+i+'="'+_+'"]):not(['+i+'="'+y+'"])';function S(v,p,b){var a=new XMLHttpRequest;a.open("GET",v,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?p(a.responseText):a.status>=400?b(c(a.status,a.statusText)):b(m))},a.send(null)}function $(v){var p=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(p){var b=Number(p[1]),a=p[2],e=p[3];return a?e?[b,Number(e)]:[b,void 0]:[b,b]}}r.hooks.add("before-highlightall",function(v){v.selector+=", "+z}),r.hooks.add("before-sanity-check",function(v){var p=v.element;if(p.matches(z)){v.code="",p.setAttribute(i,y);var b=p.appendChild(document.createElement("CODE"));b.textContent=l;var a=p.getAttribute("data-src"),e=v.language;if(e==="none"){var t=(/\.(\w+)$/.exec(a)||[,"none"])[1];e=A[t]||t}r.util.setLanguage(b,e),r.util.setLanguage(p,e);var n=r.plugins.autoloader;n&&n.loadLanguages(e),S(a,function(s){p.setAttribute(i,_);var u=$(p.getAttribute("data-range"));if(u){var d=s.split(/\r\n?|\n/g),o=u[0],f=u[1]==null?d.length:u[1];o<0&&(o+=d.length),o=Math.max(0,Math.min(o-1,d.length)),f<0&&(f+=d.length),f=Math.max(0,Math.min(f,d.length)),s=d.slice(o,f).join(`
`),p.hasAttribute("data-start")||p.setAttribute("data-start",String(o+1))}b.textContent=s,r.highlightElement(b)},function(s){p.setAttribute(i,C),b.textContent=s})}}),r.plugins.fileHighlight={highlight:function(p){for(var b=(p||document).querySelectorAll(z),a=0,e;e=b[a++];)r.highlightElement(e)}};var D=!1;r.fileHighlight=function(){D||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),D=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(q)),q.exports}var te=ae();const B=ee(te);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(g){g.type==="entity"&&(g.attributes.title=g.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(h,r){var l={};l["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[r]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var c={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};c["language-"+r]={pattern:/[\s\S]+/,inside:Prism.languages[r]};var m={};m[h]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return h}),"i"),lookbehind:!0,greedy:!0,inside:c},Prism.languages.insertBefore("markup","cdata",m)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(g,h){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+g+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[h,"language-"+h],inside:Prism.languages[h]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(g){var h=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;g.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+h.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+h.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+h.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+h.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:h,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},g.languages.css.atrule.inside.rest=g.languages.css;var r=g.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(Prism);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;function re({id:g="",status:h="Não informado",version:r="1.0.0",category:l="Components",updated:c=""}={}){return g?`
        <div style="
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 16px;
        ">
            <span style="padding: 6px 10px; border-radius: 999px; background: var(--ds-color-background-muted);">
                ID: <code>${g}</code>
            </span>

            <span style="padding: 6px 10px; border-radius: 999px; background: var(--ds-color-background-muted);">
                Status: ${h}
            </span>

            <span style="padding: 6px 10px; border-radius: 999px; background: var(--ds-color-background-muted);">
                Versão: ${r}
            </span>

            <span style="padding: 6px 10px; border-radius: 999px; background: var(--ds-color-background-muted);">
                Categoria: ${l}
            </span>

            ${c?`
                <span style="padding: 6px 10px; border-radius: 999px; background: var(--ds-color-background-muted);">
                    Atualizado: ${c}
                </span>
            `:""}
        </div>
    `:""}function ne(g="",h="markup"){const r=B.languages[h]||B.languages.markup;return B.highlight(g,r,h)}function se(g=""){return g.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ie({title:g="HTML",description:h="Exemplo de marcação HTML para uso do componente.",preview:r="",code:l="",language:c="markup",cssDependencies:m=[],jsDependencies:A=[],notes:i=[],meta:y={}}={}){const _=m.length?m.map($=>`<li><code>${$}</code></li>`).join(""):"<li>Sem dependência CSS específica.</li>",C=A.length?A.map($=>`<li><code>${$}</code></li>`).join(""):"<li>Sem dependência JavaScript.</li>",z=i.length?i.map($=>`<li>${$}</li>`).join(""):"<li>Use as classes indicadas no HTML para manter o padrão visual do Design System.</li>",S=l?ne(l.trim(),c):"";return`
        <section style="
            max-width: 1040px;
            padding: 32px;
            font-family: var(--ds-font-family-body);
            color: var(--ds-color-text-primary);
        ">
            <header style="margin-bottom: 32px;">
                <h1 style="
                    margin: 0 0 12px;
                    font-family: var(--ds-font-family-heading);
                    font-size: var(--ds-heading-2-font-size);
                    line-height: var(--ds-heading-2-line-height);
                ">
                    ${g}
                </h1>

                <p style="
                    margin: 0;
                    max-width: 760px;
                    color: var(--ds-color-text-secondary);
                    font-size: var(--ds-body-md-font-size);
                    line-height: var(--ds-body-md-line-height);
                ">
                    ${h}
                </p>

                ${re(y)}
            </header>

            <div
                onclick="
                    const link = event.target.closest('a');

                    if (link && link.getAttribute('href') === '#') {
                        event.preventDefault();
                    }
                "
                style="
                    margin-bottom: 32px;
                    padding: 32px;
                    border: 1px solid var(--ds-color-border);
                    border-radius: var(--ds-radius-md);
                    background: var(--ds-color-background);
                "
            >
                ${r}
            </div>

            ${l?`
                <div
                    data-code-preview
                    style="
                        position: relative;
                        margin-bottom: 32px;
                        border-radius: var(--ds-radius-md);
                        overflow: hidden;
                        background: #282a36;
                    "
                >
                    <div style="
                        display: flex;
                        justify-content: flex-end;
                        gap: 8px;
                        padding: 8px;
                        background: #1f2029;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    ">
                        <button
                            type="button"
                            onclick="
                                const wrapper = this.closest('[data-code-preview]');
                                const pre = wrapper.querySelector('pre');
                                const isHidden = pre.style.display === 'none';

                                pre.style.display = isHidden ? 'block' : 'none';
                                this.textContent = isHidden ? 'Hide code' : 'Show code';
                            "
                            style="
                                min-height: 32px;
                                padding: 0 12px;
                                border: 1px solid rgba(255, 255, 255, 0.2);
                                border-radius: 4px;
                                background: #ffffff;
                                color: #1d1d1b;
                                font-size: 12px;
                                font-weight: 700;
                                cursor: pointer;
                            "
                        >
                            Hide code
                        </button>

                        <button
                            type="button"
                            onclick="
                                const wrapper = this.closest('[data-code-preview]');
                                const textarea = wrapper.querySelector('textarea');

                                navigator.clipboard.writeText(textarea.value);

                                const originalText = this.textContent;
                                this.textContent = 'Copied';

                                setTimeout(() => {
                                    this.textContent = originalText;
                                }, 1500);
                            "
                            style="
                                min-height: 32px;
                                padding: 0 12px;
                                border: 1px solid rgba(255, 255, 255, 0.2);
                                border-radius: 4px;
                                background: #000000;
                                color: #ffffff;
                                font-size: 12px;
                                font-weight: 700;
                                cursor: pointer;
                            "
                        >
                            Copy
                        </button>
                    </div>

                    <textarea style="display: none;">${se(l.trim())}</textarea>

                    <pre class="language-${c}" style="
                        margin: 0;
                        padding: 24px;
                        overflow: auto;
                        border-radius: 0;
                        font-size: 14px;
                        line-height: 1.6;
                    "><code class="language-${c}">${S}</code></pre>
                </div>
            `:""}

            <div style="
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                gap: 24px;
                margin-bottom: 32px;
            ">
                <article style="
                    padding: 20px;
                    border: 1px solid var(--ds-color-border);
                    border-radius: var(--ds-radius-md);
                    background: var(--ds-color-background-muted);
                ">
                    <h2 style="
                        margin: 0 0 12px;
                        font-family: var(--ds-font-family-heading);
                        font-size: var(--ds-heading-5-font-size);
                        line-height: var(--ds-heading-5-line-height);
                    ">
                        CSS necessário
                    </h2>

                    <ul style="
                        margin: 0;
                        padding-left: 20px;
                        color: var(--ds-color-text-secondary);
                        font-size: var(--ds-body-sm-font-size);
                        line-height: var(--ds-body-sm-line-height);
                    ">
                        ${_}
                    </ul>
                </article>

                <article style="
                    padding: 20px;
                    border: 1px solid var(--ds-color-border);
                    border-radius: var(--ds-radius-md);
                    background: var(--ds-color-background-muted);
                ">
                    <h2 style="
                        margin: 0 0 12px;
                        font-family: var(--ds-font-family-heading);
                        font-size: var(--ds-heading-5-font-size);
                        line-height: var(--ds-heading-5-line-height);
                    ">
                        JavaScript necessário
                    </h2>

                    <ul style="
                        margin: 0;
                        padding-left: 20px;
                        color: var(--ds-color-text-secondary);
                        font-size: var(--ds-body-sm-font-size);
                        line-height: var(--ds-body-sm-line-height);
                    ">
                        ${C}
                    </ul>
                </article>
            </div>

            <article style="
                margin-bottom: 32px;
                padding: 20px;
                border-left: 4px solid var(--ds-color-primary-600);
                border-radius: var(--ds-radius-sm);
                background: var(--ds-color-background-muted);
            ">
                <h2 style="
                    margin: 0 0 12px;
                    font-family: var(--ds-font-family-heading);
                    font-size: var(--ds-heading-5-font-size);
                    line-height: var(--ds-heading-5-line-height);
                ">
                    Observações
                </h2>

                <ul style="
                    margin: 0;
                    padding-left: 20px;
                    color: var(--ds-color-text-secondary);
                    font-size: var(--ds-body-sm-font-size);
                    line-height: var(--ds-body-sm-line-height);
                ">
                    ${z}
                </ul>
            </article>
        </section>
    `}export{ie as C};
