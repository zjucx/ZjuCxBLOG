!function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/dist",n(n.s=543)}({173:function(e,n){webpackJsonpmavon_editor([60],{377:function(e,n){e.exports=function(e){var n="abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained",t=e.COMMENT("{","}",{relevance:0}),r=e.COMMENT("\\(\\*","\\*\\)",{relevance:10}),a={className:"string",begin:"'",end:"'",contains:[{begin:"''"}]},o={className:"string",begin:"(#\\d+)+"},i={className:"function",beginKeywords:"function constructor destructor procedure method",end:"[:;]",keywords:"function constructor|10 destructor|10 procedure|10 method|10",contains:[e.TITLE_MODE,{className:"params",begin:"\\(",end:"\\)",keywords:n,contains:[a,o]},t,r]};return{case_insensitive:!0,lexemes:/\.?\w+/,keywords:n,illegal:'("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',contains:[t,r,e.C_LINE_COMMENT_MODE,a,o,e.NUMBER_MODE,i,{className:"class",begin:"=\\bclass\\b",end:"end;",keywords:n,contains:[a,o,t,r,e.C_LINE_COMMENT_MODE,i]}]}}}})},543:function(e,n,t){e.exports=t(173)}});