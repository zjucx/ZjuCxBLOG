!function(e){function n(s){if(a[s])return a[s].exports;var i=a[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var a={};n.m=e,n.c=a,n.i=function(e){return e},n.d=function(e,a,s){n.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:s})},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/dist",n(n.s=526)}({156:function(e,n){webpackJsonpmavon_editor([77],{360:function(e,n){e.exports=function(e){var n=[e.C_NUMBER_MODE,{className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE,{begin:"''"}]}],a={relevance:0,contains:[{begin:/'['\.]*/}]};return{keywords:{keyword:"break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while",built_in:"sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson"},illegal:'(//|"|#|/\\*|\\s+/\\w+)',contains:[{className:"function",beginKeywords:"function",end:"$",contains:[e.UNDERSCORE_TITLE_MODE,{className:"params",variants:[{begin:"\\(",end:"\\)"},{begin:"\\[",end:"\\]"}]}]},{begin:/[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,returnBegin:!0,relevance:0,contains:[{begin:/[a-zA-Z_][a-zA-Z_0-9]*/,relevance:0},a.contains[0]]},{begin:"\\[",end:"\\]",contains:n,relevance:0,starts:a},{begin:"\\{",end:/}/,contains:n,relevance:0,starts:a},{begin:/\)/,relevance:0,starts:a},e.COMMENT("^\\s*\\%\\{\\s*$","^\\s*\\%\\}\\s*$"),e.COMMENT("\\%","$")].concat(n)}}}})},526:function(e,n,a){e.exports=a(156)}});