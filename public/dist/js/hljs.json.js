!function(n){function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/dist",e(e.s=509)}({139:function(n,e){webpackJsonpmavon_editor([94],{343:function(n,e){n.exports=function(n){var e={literal:"true false null"},t=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],r={end:",",endsWithParent:!0,excludeEnd:!0,contains:t,keywords:e},i={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(r,{begin:/:/})],illegal:"\\S"},o={begin:"\\[",end:"\\]",contains:[n.inherit(r)],illegal:"\\S"};return t.splice(t.length,0,i,o),{contains:t,keywords:e,illegal:"\\S"}}}})},509:function(n,e,t){n.exports=t(139)}});