!function(e){function n(a){if(i[a])return i[a].exports;var t=i[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var i={};n.m=e,n.c=i,n.i=function(e){return e},n.d=function(e,i,a){n.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(i,"a",i),i},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/dist",n(n.s=461)}({461:function(e,n,i){e.exports=i(91)},91:function(e,n){webpackJsonpmavon_editor([142],{295:function(e,n){e.exports=function(e){var n={keyword:"abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",literal:"null false true"},i={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},a=e.inherit(i,{illegal:/\n/}),t={className:"subst",begin:"{",end:"}",keywords:n},r=e.inherit(t,{illegal:/\n/}),s={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:"{{"},{begin:"}}"},e.BACKSLASH_ESCAPE,r]},o={className:"string",begin:/\$@"/,end:'"',contains:[{begin:"{{"},{begin:"}}"},{begin:'""'},t]},l=e.inherit(o,{illegal:/\n/,contains:[{begin:"{{"},{begin:"}}"},{begin:'""'},r]});t.contains=[o,s,i,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE],r.contains=[l,s,a,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,e.inherit(e.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];var c={variants:[o,s,i,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},E=e.IDENT_RE+"(<"+e.IDENT_RE+"(\\s*,\\s*"+e.IDENT_RE+")*>)?(\\[\\])?";return{aliases:["csharp"],keywords:n,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"\x3c!--|--\x3e"},{begin:"</?",end:">"}]}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"}},c,e.C_NUMBER_MODE,{beginKeywords:"class interface",end:/[{;=]/,illegal:/[^\s:]/,contains:[e.TITLE_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",end:/[{;=]/,illegal:/[^\s:]/,contains:[e.inherit(e.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"meta-string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+E+"\\s+)+"+e.IDENT_RE+"\\s*\\(",returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:n,contains:[{begin:e.IDENT_RE+"\\s*\\(",returnBegin:!0,contains:[e.TITLE_MODE],relevance:0},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,relevance:0,contains:[c,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}]}}}})}});