!function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/dist",n(n.s=573)}({203:function(e,n){webpackJsonpmavon_editor([30],{407:function(e,n){e.exports=function(e){var n={className:"string",begin:"\\$.{1}"},t={className:"symbol",begin:"#"+e.UNDERSCORE_IDENT_RE};return{aliases:["st"],keywords:"self super nil true false thisContext",contains:[e.COMMENT('"','"'),e.APOS_STRING_MODE,{className:"type",begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},{begin:"[a-z][a-zA-Z0-9_]*:",relevance:0},e.C_NUMBER_MODE,t,n,{begin:"\\|[ ]*[a-z][a-zA-Z0-9_]*([ ]+[a-z][a-zA-Z0-9_]*)*[ ]*\\|",returnBegin:!0,end:/\|/,illegal:/\S/,contains:[{begin:"(\\|[ ]*)?[a-z][a-zA-Z0-9_]*"}]},{begin:"\\#\\(",end:"\\)",contains:[e.APOS_STRING_MODE,n,e.C_NUMBER_MODE,t]}]}}}})},573:function(e,n,t){e.exports=t(203)}});