!function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/dist",n(n.s=533)}({163:function(e,n){webpackJsonpmavon_editor([70],{367:function(e,n){e.exports=function(e){var n={className:"number",relevance:0,variants:[{begin:"[$][a-fA-F0-9]+"},e.NUMBER_MODE]};return{case_insensitive:!0,keywords:{keyword:"public private property continue exit extern new try catch eachin not abstract final select case default const local global field end if then else elseif endif while wend repeat until forever for to step next return module inline throw import",built_in:"DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI",literal:"true false null and or shl shr mod"},illegal:/\/\*/,contains:[e.COMMENT("#rem","#end"),e.COMMENT("'","$",{relevance:0}),{className:"function",beginKeywords:"function method",end:"[(=:]|$",illegal:/\n/,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"class",beginKeywords:"class interface",end:"$",contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{className:"built_in",begin:"\\b(self|super)\\b"},{className:"meta",begin:"\\s*#",end:"$",keywords:{"meta-keyword":"if else elseif endif end then"}},{className:"meta",begin:"^\\s*strict\\b"},{beginKeywords:"alias",end:"=",contains:[e.UNDERSCORE_TITLE_MODE]},e.QUOTE_STRING_MODE,n]}}}})},533:function(e,n,t){e.exports=t(163)}});