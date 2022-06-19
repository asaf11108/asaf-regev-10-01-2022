"use strict";(self.webpackChunkherolo_weather_react2=self.webpackChunkherolo_weather_react2||[]).push([[3824],{91520:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){(0,n.default)(2,arguments);var r=(0,i.default)(e,a),d=(0,i.default)(t,a);return r.getTime()===d.getTime()};var n=r(a(99670)),i=r(a(75577));function r(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},99670:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},75577:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,i.default)(1,arguments);var a=t||{},d=a.locale,u=d&&d.options&&d.options.weekStartsOn,s=null==u?0:(0,r.default)(u),o=null==a.weekStartsOn?s:(0,r.default)(a.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=(0,n.default)(e),m=l.getUTCDay(),f=(m<o?7:0)+m-o;return l.setUTCDate(l.getUTCDate()-f),l.setUTCHours(0,0,0,0),l};var n=d(a(20969)),i=d(a(99670)),r=d(a(74934));function d(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},74934:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},35063:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}},e.exports=t.default},64028:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,d=i.width?String(i.width):r;n=e.formattingValues[d]||e.formattingValues[r]}else{var u=e.defaultWidth,s=i.width?String(i.width):e.defaultWidth;n=e.values[s]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},27758:function(e,t){function a(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function n(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.width,d=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],u=t.match(d);if(!u)return null;var s,o=u[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(l)?n(l,(function(e){return e.test(o)})):a(l,(function(e){return e.test(o)}));s=e.valueCallback?e.valueCallback(m):m,s=i.valueCallback?i.valueCallback(s):s;var f=t.slice(o.length);return{value:s,rest:f}}},e.exports=t.default},35568:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var i=n[0],r=t.match(e.parsePattern);if(!r)return null;var d=e.valueCallback?e.valueCallback(r[0]):r[0];d=a.valueCallback?a.valueCallback(d):d;var u=t.slice(i.length);return{value:d,rest:u}}},e.exports=t.default},39377:function(e,t){function a(e){return function(t,a){if(1===t)return a.addSuffix?e.one[0].replace("{{time}}",e.one[2]):e.one[0].replace("{{time}}",e.one[1]);var n=t%10===1&&t%100!==11;return a.addSuffix?e.other[0].replace("{{time}}",n?e.other[3]:e.other[4]).replace("{{count}}",t):e.other[0].replace("{{time}}",n?e.other[1]:e.other[2]).replace("{{count}}",t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){a=a||{};var i=n[e](t,a);if(a.addSuffix)return a.comparison>0?"p\u0113c "+i:"pirms "+i;return i};var n={lessThanXSeconds:a({one:["maz\u0101k par {{time}}","sekundi","sekundi"],other:["maz\u0101k nek\u0101 {{count}} {{time}}","sekunde","sekundes","sekundes","sekund\u0113m"]}),xSeconds:a({one:["1 {{time}}","sekunde","sekundes"],other:["{{count}} {{time}}","sekunde","sekundes","sekundes","sekund\u0113m"]}),halfAMinute:function(e,t){return t.addSuffix?"pusmin\u016btes":"pusmin\u016bte"},lessThanXMinutes:a({one:["maz\u0101k par {{time}}","min\u016bti","min\u016bti"],other:["maz\u0101k nek\u0101 {{count}} {{time}}","min\u016bte","min\u016btes","min\u016btes","min\u016bt\u0113m"]}),xMinutes:a({one:["1 {{time}}","min\u016bte","min\u016btes"],other:["{{count}} {{time}}","min\u016bte","min\u016btes","min\u016btes","min\u016bt\u0113m"]}),aboutXHours:a({one:["apm\u0113ram 1 {{time}}","stunda","stundas"],other:["apm\u0113ram {{count}} {{time}}","stunda","stundas","stundas","stund\u0101m"]}),xHours:a({one:["1 {{time}}","stunda","stundas"],other:["{{count}} {{time}}","stunda","stundas","stundas","stund\u0101m"]}),xDays:a({one:["1 {{time}}","diena","dienas"],other:["{{count}} {{time}}","diena","dienas","dienas","dien\u0101m"]}),aboutXWeeks:a({one:["apm\u0113ram 1 {{time}}","ned\u0113\u013ca","ned\u0113\u013cas"],other:["apm\u0113ram {{count}} {{time}}","ned\u0113\u013ca","ned\u0113\u013cu","ned\u0113\u013cas","ned\u0113\u013c\u0101m"]}),xWeeks:a({one:["1 {{time}}","ned\u0113\u013ca","ned\u0113\u013cas"],other:["{{count}} {{time}}","ned\u0113\u013ca","ned\u0113\u013cu","ned\u0113\u013cas","ned\u0113\u013c\u0101m"]}),aboutXMonths:a({one:["apm\u0113ram 1 {{time}}","m\u0113nesis","m\u0113ne\u0161a"],other:["apm\u0113ram {{count}} {{time}}","m\u0113nesis","m\u0113ne\u0161i","m\u0113ne\u0161a","m\u0113ne\u0161iem"]}),xMonths:a({one:["1 {{time}}","m\u0113nesis","m\u0113ne\u0161a"],other:["{{count}} {{time}}","m\u0113nesis","m\u0113ne\u0161i","m\u0113ne\u0161a","m\u0113ne\u0161iem"]}),aboutXYears:a({one:["apm\u0113ram 1 {{time}}","gads","gada"],other:["apm\u0113ram {{count}} {{time}}","gads","gadi","gada","gadiem"]}),xYears:a({one:["1 {{time}}","gads","gada"],other:["{{count}} {{time}}","gads","gadi","gada","gadiem"]}),overXYears:a({one:["ilg\u0101k par 1 {{time}}","gadu","gadu"],other:["vair\u0101k nek\u0101 {{count}} {{time}}","gads","gadi","gada","gadiem"]}),almostXYears:a({one:["gandr\u012bz 1 {{time}}","gads","gada"],other:["vair\u0101k nek\u0101 {{count}} {{time}}","gads","gadi","gada","gadiem"]})};e.exports=t.default},86766:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=a(35063))&&n.__esModule?n:{default:n};var r={date:(0,i.default)({formats:{full:"EEEE, y. 'gada' d. MMMM",long:"y. 'gada' d. MMMM",medium:"dd.MM.y.",short:"dd.MM.y."},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'plkst.' {{time}}",long:"{{date}} 'plkst.' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=r,e.exports=t.default},13829:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){var i=d[e];if("function"===typeof i)return i(t,a,n);return i};var n,i=(n=a(91520))&&n.__esModule?n:{default:n};var r=["sv\u0113tdien\u0101","pirmdien\u0101","otrdien\u0101","tre\u0161dien\u0101","ceturtdien\u0101","piektdien\u0101","sestdien\u0101"],d={lastWeek:function(e,t,a){return(0,i.default)(e,t,a)?"eeee 'plkst.' p":"'Pag\u0101ju\u0161\u0101 "+r[e.getUTCDay()]+" plkst.' p"},yesterday:"'Vakar plkst.' p",today:"'\u0160odien plkst.' p",tomorrow:"'R\u012bt plkst.' p",nextWeek:function(e,t,a){return(0,i.default)(e,t,a)?"eeee 'plkst.' p":"'N\u0101kamaj\u0101 "+r[e.getUTCDay()]+" plkst.' p"},other:"P"};e.exports=t.default},12325:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=a(64028))&&n.__esModule?n:{default:n};var r={ordinalNumber:function(e,t){return e+"."},era:(0,i.default)({values:{narrow:["p.m.\u0113","m.\u0113"],abbreviated:["p. m. \u0113.","m. \u0113."],wide:["pirms m\u016bsu \u0113ras","m\u016bsu \u0113r\u0101"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["1. cet.","2. cet.","3. cet.","4. cet."],wide:["pirmais ceturksnis","otrais ceturksnis","tre\u0161ais ceturksnis","ceturtais ceturksnis"]},defaultWidth:"wide",formattingValues:{narrow:["1","2","3","4"],abbreviated:["1. cet.","2. cet.","3. cet.","4. cet."],wide:["pirmaj\u0101 ceturksn\u012b","otraj\u0101 ceturksn\u012b","tre\u0161aj\u0101 ceturksn\u012b","ceturtaj\u0101 ceturksn\u012b"]},defaultFormattingWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","febr.","marts","apr.","maijs","j\u016bn.","j\u016bl.","aug.","sept.","okt.","nov.","dec."],wide:["janv\u0101ris","febru\u0101ris","marts","apr\u012blis","maijs","j\u016bnijs","j\u016blijs","augusts","septembris","oktobris","novembris","decembris"]},defaultWidth:"wide",formattingValues:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","febr.","mart\u0101","apr.","maijs","j\u016bn.","j\u016bl.","aug.","sept.","okt.","nov.","dec."],wide:["janv\u0101r\u012b","febru\u0101r\u012b","mart\u0101","apr\u012bl\u012b","maij\u0101","j\u016bnij\u0101","j\u016blij\u0101","august\u0101","septembr\u012b","oktobr\u012b","novembr\u012b","decembr\u012b"]},defaultFormattingWidth:"wide"}),day:(0,i.default)({values:{narrow:["S","P","O","T","C","P","S"],short:["Sv","P","O","T","C","Pk","S"],abbreviated:["sv\u0113td.","pirmd.","otrd.","tre\u0161d.","ceturtd.","piektd.","sestd."],wide:["sv\u0113tdiena","pirmdiena","otrdiena","tre\u0161diena","ceturtdiena","piektdiena","sestdiena"]},defaultWidth:"wide",formattingValues:{narrow:["S","P","O","T","C","P","S"],short:["Sv","P","O","T","C","Pk","S"],abbreviated:["sv\u0113td.","pirmd.","otrd.","tre\u0161d.","ceturtd.","piektd.","sestd."],wide:["sv\u0113tdien\u0101","pirmdien\u0101","otrdien\u0101","tre\u0161dien\u0101","ceturtdien\u0101","piektdien\u0101","sestdien\u0101"]},defaultFormattingWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"r\u012bts",afternoon:"diena",evening:"vakars",night:"nakts"},abbreviated:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"r\u012bts",afternoon:"p\u0113cpusd.",evening:"vakars",night:"nakts"},wide:{am:"am",pm:"pm",midnight:"pusnakts",noon:"pusdienlaiks",morning:"r\u012bts",afternoon:"p\u0113cpusdiena",evening:"vakars",night:"nakts"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"r\u012bt\u0101",afternoon:"dien\u0101",evening:"vakar\u0101",night:"nakt\u012b"},abbreviated:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"r\u012bt\u0101",afternoon:"p\u0113cpusd.",evening:"vakar\u0101",night:"nakt\u012b"},wide:{am:"am",pm:"pm",midnight:"pusnakt\u012b",noon:"pusdienlaik\u0101",morning:"r\u012bt\u0101",afternoon:"p\u0113cpusdien\u0101",evening:"vakar\u0101",night:"nakt\u012b"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},91408:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(35568)),i=r(a(27758));function r(e){return e&&e.__esModule?e:{default:e}}var d={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(p\.m\.\u0113|m\.\u0113)/i,abbreviated:/^(p\. m\. \u0113\.|m\. \u0113\.)/i,wide:/^(pirms m\u016bsu \u0113ras|m\u016bsu \u0113r\u0101)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^m/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](\. cet\.)/i,wide:/^(pirma(is|j\u0101)|otra(is|j\u0101)|tre\u0161a(is|j\u0101)|ceturta(is|j\u0101)) ceturksn(is|\u012b)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^1/i,/^2/i,/^3/i,/^4/i],abbreviated:[/^1/i,/^2/i,/^3/i,/^4/i],wide:[/^p/i,/^o/i,/^t/i,/^c/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(janv\.|febr\.|marts|apr\.|maijs|j\u016bn\.|j\u016bl\.|aug\.|sept\.|okt\.|nov\.|dec\.)/i,wide:/^(janv\u0101r(is|\u012b)|febru\u0101r(is|\u012b)|mart[s\u0101]|apr\u012bl(is|\u012b)|maij[s\u0101]|j\u016bnij[s\u0101]|j\u016blij[s\u0101]|august[s\u0101]|septembr(is|\u012b)|oktobr(is|\u012b)|novembr(is|\u012b)|decembr(is|\u012b))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^j\u016bn/i,/^j\u016bl/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[spotc]/i,short:/^(sv|pi|o|t|c|pk|s)/i,abbreviated:/^(sv\u0113td\.|pirmd\.|otrd.\|tre\u0161d\.|ceturtd\.|piektd\.|sestd\.)/i,wide:/^(sv\u0113tdien(a|\u0101)|pirmdien(a|\u0101)|otrdien(a|\u0101)|tre\u0161dien(a|\u0101)|ceturtdien(a|\u0101)|piektdien(a|\u0101)|sestdien(a|\u0101))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^p/i,/^o/i,/^t/i,/^c/i,/^p/i,/^s/i],any:[/^sv/i,/^pi/i,/^o/i,/^t/i,/^c/i,/^p/i,/^se/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(am|pm|pusn\.|pusd\.|r\u012bt(s|\u0101)|dien(a|\u0101)|vakar(s|\u0101)|nakt(s|\u012b))/,abbreviated:/^(am|pm|pusn\.|pusd\.|r\u012bt(s|\u0101)|p\u0113cpusd\.|vakar(s|\u0101)|nakt(s|\u012b))/,wide:/^(am|pm|pusnakt(s|\u012b)|pusdienlaik(s|\u0101)|r\u012bt(s|\u0101)|p\u0113cpusdien(a|\u0101)|vakar(s|\u0101)|nakt(s|\u012b))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/^pusn/i,noon:/^pusd/i,morning:/^r/i,afternoon:/^(d|p\u0113c)/i,evening:/^v/i,night:/^n/i}},defaultParseWidth:"any"})};t.default=d,e.exports=t.default},30037:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(39377)),i=s(a(86766)),r=s(a(13829)),d=s(a(12325)),u=s(a(91408));function s(e){return e&&e.__esModule?e:{default:e}}var o={code:"lv",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:d.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=o,e.exports=t.default},20969:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,i.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var n,i=(n=a(99670))&&n.__esModule?n:{default:n};e.exports=t.default}}]);
//# sourceMappingURL=df-58.f971abbf.chunk.js.map