!function(e){function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/dist",n(n.s=494)}({124:function(e,n){webpackJsonpmavon_editor([109],{328:function(e,n){e.exports=function(e){return{keywords:{literal:"true false null",keyword:"byte short char int long boolean float double void def as in assert trait super this abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"},contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",begin:'"""',end:'"""'},{className:"string",begin:"'''",end:"'''"},{className:"string",begin:"\\$/",end:"/\\$",relevance:10},e.APOS_STRING_MODE,{className:"regexp",begin:/~?\/[^\/\n]+\//,contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:"\n"},e.BINARY_NUMBER_MODE,{className:"class",beginKeywords:"class interface trait enum",end:"{",illegal:":",contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},e.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"},{className:"string",begin:/[^\?]{0}[A-Za-z0-9_$]+ *:/},{begin:/\?/,end:/\:/},{className:"symbol",begin:"^\\s*[A-Za-z0-9_$]+:",relevance:0}],illegal:/#|<\//}}}})},494:function(e,n,t){e.exports=t(124)}});