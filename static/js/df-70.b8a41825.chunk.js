"use strict";(self.webpackChunkherolo_weather_react2=self.webpackChunkherolo_weather_react2||[]).push([[6124],{9295:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultOptions=function(){return n},t.setDefaultOptions=function(e){n=e};var n={}},91520:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){(0,a.default)(2,arguments);var i=(0,o.default)(e,n),r=(0,o.default)(t,n);return i.getTime()===r.getTime()};var a=i(n(99670)),o=i(n(75577));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},99670:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},75577:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n,u,l,d,s,c,f,p;(0,o.default)(1,arguments);var m=(0,r.getDefaultOptions)(),w=(0,i.default)(null!==(n=null!==(u=null!==(l=null!==(d=null===t||void 0===t?void 0:t.weekStartsOn)&&void 0!==d?d:null===t||void 0===t||null===(s=t.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==l?l:m.weekStartsOn)&&void 0!==u?u:null===(f=m.locale)||void 0===f||null===(p=f.options)||void 0===p?void 0:p.weekStartsOn)&&void 0!==n?n:0);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=(0,a.default)(e),h=v.getUTCDay(),g=(h<w?7:0)+h-w;return v.setUTCDate(v.getUTCDate()-g),v.setUTCHours(0,0,0,0),v};var a=u(n(20969)),o=u(n(99670)),i=u(n(74934)),r=n(9295);function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},74934:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},35063:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,a=e.formats[n]||e.formats[e.defaultWidth];return a}},e.exports=t.default},64028:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a;if("formatting"===(null!==n&&void 0!==n&&n.context?String(n.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=null!==n&&void 0!==n&&n.width?String(n.width):o;a=e.formattingValues[i]||e.formattingValues[o]}else{var r=e.defaultWidth,u=null!==n&&void 0!==n&&n.width?String(n.width):e.defaultWidth;a=e.values[u]||e.values[r]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},27758:function(e,t){function n(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function a(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.width,r=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=t.match(r);if(!u)return null;var l,d=u[0],s=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?a(s,(function(e){return e.test(d)})):n(s,(function(e){return e.test(d)}));l=e.valueCallback?e.valueCallback(c):c,l=o.valueCallback?o.valueCallback(l):l;var f=t.slice(d.length);return{value:l,rest:f}}},e.exports=t.default},35568:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.match(e.matchPattern);if(!a)return null;var o=a[0],i=t.match(e.parsePattern);if(!i)return null;var r=e.valueCallback?e.valueCallback(i[0]):i[0];r=n.valueCallback?n.valueCallback(r):r;var u=t.slice(o.length);return{value:r,rest:u}}},e.exports=t.default},84067:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lessThanXSeconds:{one:{regular:"mniej ni\u017c sekunda",past:"mniej ni\u017c sekund\u0119",future:"mniej ni\u017c sekund\u0119"},twoFour:"mniej ni\u017c {{count}} sekundy",other:"mniej ni\u017c {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekund\u0119",future:"sekund\u0119"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"p\xf3\u0142 minuty",twoFour:"p\xf3\u0142 minuty",other:"p\xf3\u0142 minuty"},lessThanXMinutes:{one:{regular:"mniej ni\u017c minuta",past:"mniej ni\u017c minut\u0119",future:"mniej ni\u017c minut\u0119"},twoFour:"mniej ni\u017c {{count}} minuty",other:"mniej ni\u017c {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minut\u0119",future:"minut\u0119"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"oko\u0142o godziny",past:"oko\u0142o godziny",future:"oko\u0142o godzin\u0119"},twoFour:"oko\u0142o {{count}} godziny",other:"oko\u0142o {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzin\u0119",future:"godzin\u0119"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzie\u0144",past:"dzie\u0144",future:"1 dzie\u0144"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXWeeks:{one:"oko\u0142o tygodnia",twoFour:"oko\u0142o {{count}} tygodni",other:"oko\u0142o {{count}} tygodni"},xWeeks:{one:"tydzie\u0144",twoFour:"{{count}} tygodnie",other:"{{count}} tygodni"},aboutXMonths:{one:"oko\u0142o miesi\u0105c",twoFour:"oko\u0142o {{count}} miesi\u0105ce",other:"oko\u0142o {{count}} miesi\u0119cy"},xMonths:{one:"miesi\u0105c",twoFour:"{{count}} miesi\u0105ce",other:"{{count}} miesi\u0119cy"},aboutXYears:{one:"oko\u0142o rok",twoFour:"oko\u0142o {{count}} lata",other:"oko\u0142o {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};function a(e,t,n){var a=function(e,t){if(1===t)return e.one;var n=t%100;if(n<=20&&n>10)return e.other;var a=n%10;return a>=2&&a<=4?e.twoFour:e.other}(e,t);return("string"===typeof a?a:a[n]).replace("{{count}}",String(t))}var o=function(e,t,o){var i=n[e];return null!==o&&void 0!==o&&o.addSuffix?o.comparison&&o.comparison>0?"za "+a(i,t,"future"):a(i,t,"past")+" temu":a(i,t,"regular")};t.default=o,e.exports=t.default},65918:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(35063))&&a.__esModule?a:{default:a};var i={date:(0,o.default)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,o.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,o.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},97608:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(91520))&&a.__esModule?a:{default:a};var i={masculine:"ostatni",feminine:"ostatnia"},r={masculine:"ten",feminine:"ta"},u={masculine:"nast\u0119pny",feminine:"nast\u0119pna"},l={0:"feminine",1:"masculine",2:"masculine",3:"feminine",4:"masculine",5:"masculine",6:"feminine"};function d(e,t,n,a){var d;if((0,o.default)(t,n,a))d=r;else if("lastWeek"===e)d=i;else{if("nextWeek"!==e)throw new Error("Cannot determine adjectives for token ".concat(e));d=u}var s=t.getUTCDay(),c=d[l[s]];return"'".concat(c,"' eeee 'o' p")}var s={lastWeek:d,yesterday:"'wczoraj o' p",today:"'dzisiaj o' p",tomorrow:"'jutro o' p",nextWeek:d,other:"P"},c=function(e,t,n,a){var o=s[e];return"function"===typeof o?o(e,t,n,a):o};t.default=c,e.exports=t.default},92513:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(64028))&&a.__esModule?a:{default:a};var i={ordinalNumber:function(e,t){return String(e)},era:(0,o.default)({values:{narrow:["p.n.e.","n.e."],abbreviated:["p.n.e.","n.e."],wide:["przed nasz\u0105 er\u0105","naszej ery"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["1","2","3","4"],abbreviated:["I kw.","II kw.","III kw.","IV kw."],wide:["I kwarta\u0142","II kwarta\u0142","III kwarta\u0142","IV kwarta\u0142"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,o.default)({values:{narrow:["S","L","M","K","M","C","L","S","W","P","L","G"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"],wide:["stycze\u0144","luty","marzec","kwiecie\u0144","maj","czerwiec","lipiec","sierpie\u0144","wrzesie\u0144","pa\u017adziernik","listopad","grudzie\u0144"]},defaultWidth:"wide",formattingValues:{narrow:["s","l","m","k","m","c","l","s","w","p","l","g"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"],wide:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","wrze\u015bnia","pa\u017adziernika","listopada","grudnia"]},defaultFormattingWidth:"wide"}),day:(0,o.default)({values:{narrow:["N","P","W","\u015a","C","P","S"],short:["nie","pon","wto","\u015bro","czw","pi\u0105","sob"],abbreviated:["niedz.","pon.","wt.","\u015br.","czw.","pt.","sob."],wide:["niedziela","poniedzia\u0142ek","wtorek","\u015broda","czwartek","pi\u0105tek","sobota"]},defaultWidth:"wide",formattingValues:{narrow:["n","p","w","\u015b","c","p","s"],short:["nie","pon","wto","\u015bro","czw","pi\u0105","sob"],abbreviated:["niedz.","pon.","wt.","\u015br.","czw.","pt.","sob."],wide:["niedziela","poniedzia\u0142ek","wtorek","\u015broda","czwartek","pi\u0105tek","sobota"]},defaultFormattingWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"a",pm:"p",midnight:"p\xf3\u0142n.",noon:"po\u0142",morning:"rano",afternoon:"popo\u0142.",evening:"wiecz.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"p\xf3\u0142noc",noon:"po\u0142udnie",morning:"rano",afternoon:"popo\u0142udnie",evening:"wiecz\xf3r",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"p\xf3\u0142noc",noon:"po\u0142udnie",morning:"rano",afternoon:"popo\u0142udnie",evening:"wiecz\xf3r",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"o p\xf3\u0142n.",noon:"w po\u0142.",morning:"rano",afternoon:"po po\u0142.",evening:"wiecz.",night:"w nocy"},abbreviated:{am:"AM",pm:"PM",midnight:"o p\xf3\u0142nocy",noon:"w po\u0142udnie",morning:"rano",afternoon:"po po\u0142udniu",evening:"wieczorem",night:"w nocy"},wide:{am:"AM",pm:"PM",midnight:"o p\xf3\u0142nocy",noon:"w po\u0142udnie",morning:"rano",afternoon:"po po\u0142udniu",evening:"wieczorem",night:"w nocy"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},81037:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(27758));function o(e){return e&&e.__esModule?e:{default:e}}var i={ordinalNumber:(0,o(n(35568)).default)({matchPattern:/^(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,a.default)({matchPatterns:{narrow:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,abbreviated:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,wide:/^(przed\s*nasz(\u0105|a)\s*er(\u0105|a)|naszej\s*ery)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^n/i]},defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^(I|II|III|IV)\s*kw\.?/i,wide:/^(I|II|III|IV)\s*kwarta(\u0142|l)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/1/i,/2/i,/3/i,/4/i],any:[/^I kw/i,/^II kw/i,/^III kw/i,/^IV kw/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,a.default)({matchPatterns:{narrow:/^[slmkcwpg]/i,abbreviated:/^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(\u017a|z)|lis|gru)/i,wide:/^(stycznia|stycze(\u0144|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(\u0144|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(\u0144|n)|wrze(\u015b|s)nia|wrzesie(\u0144|n)|pa(\u017a|z)dziernika|pa(\u017a|z)dziernik|listopada|listopad|grudnia|grudzie(\u0144|n))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^l/i,/^m/i,/^k/i,/^m/i,/^c/i,/^l/i,/^s/i,/^w/i,/^p/i,/^l/i,/^g/i],any:[/^st/i,/^lu/i,/^mar/i,/^k/i,/^maj/i,/^c/i,/^lip/i,/^si/i,/^w/i,/^p/i,/^lis/i,/^g/i]},defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:{narrow:/^[npw\u015bcs]/i,short:/^(nie|pon|wto|(\u015b|s)ro|czw|pi(\u0105|a)|sob)/i,abbreviated:/^(niedz|pon|wt|(\u015b|s)r|czw|pt|sob)\.?/i,wide:/^(niedziela|poniedzia(\u0142|l)ek|wtorek|(\u015b|s)roda|czwartek|pi(\u0105|a)tek|sobota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^w/i,/^\u015b/i,/^c/i,/^p/i,/^s/i],abbreviated:[/^n/i,/^po/i,/^w/i,/^(\u015b|s)r/i,/^c/i,/^pt/i,/^so/i],any:[/^n/i,/^po/i,/^w/i,/^(\u015b|s)r/i,/^c/i,/^pi/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:{narrow:/^(^a$|^p$|p\xf3(\u0142|l)n\.?|o\s*p\xf3(\u0142|l)n\.?|po(\u0142|l)\.?|w\s*po(\u0142|l)\.?|po\s*po(\u0142|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,any:/^(am|pm|p\xf3(\u0142|l)noc|o\s*p\xf3(\u0142|l)nocy|po(\u0142|l)udnie|w\s*po(\u0142|l)udnie|popo(\u0142|l)udnie|po\s*po(\u0142|l)udniu|rano|wiecz\xf3r|wieczorem|noc|w\s*nocy)/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^a$/i,pm:/^p$/i,midnight:/p\xf3(\u0142|l)n/i,noon:/po(\u0142|l)/i,morning:/rano/i,afternoon:/po\s*po(\u0142|l)/i,evening:/wiecz/i,night:/noc/i},any:{am:/^am/i,pm:/^pm/i,midnight:/p\xf3(\u0142|l)n/i,noon:/po(\u0142|l)/i,morning:/rano/i,afternoon:/po\s*po(\u0142|l)/i,evening:/wiecz/i,night:/noc/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},57237:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(84067)),o=l(n(65918)),i=l(n(97608)),r=l(n(92513)),u=l(n(81037));function l(e){return e&&e.__esModule?e:{default:e}}var d={code:"pl",formatDistance:a.default,formatLong:o.default,formatRelative:i.default,localize:r.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=d,e.exports=t.default},20969:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,o.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))};var a,o=(a=n(99670))&&a.__esModule?a:{default:a};e.exports=t.default}}]);
//# sourceMappingURL=df-70.b8a41825.chunk.js.map