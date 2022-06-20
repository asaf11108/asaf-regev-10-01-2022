"use strict";(self.webpackChunkherolo_weather_react2=self.webpackChunkherolo_weather_react2||[]).push([[3601],{35063:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,u=e.formats[a]||e.formats[e.defaultWidth];return u}},e.exports=t.default},64028:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var u,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,r=i.width?String(i.width):n;u=e.formattingValues[r]||e.formattingValues[n]}else{var l=e.defaultWidth,o=i.width?String(i.width):e.defaultWidth;u=e.values[o]||e.values[l]}return u[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},27758:function(e,t){function a(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function u(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],l=t.match(r);if(!l)return null;var o,s=l[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],f=Array.isArray(d)?u(d,(function(e){return e.test(s)})):a(d,(function(e){return e.test(s)}));o=e.valueCallback?e.valueCallback(f):f,o=i.valueCallback?i.valueCallback(o):o;var k=t.slice(s.length);return{value:o,rest:k}}},e.exports=t.default},35568:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=t.match(e.matchPattern);if(!u)return null;var i=u[0],n=t.match(e.parsePattern);if(!n)return null;var r=e.valueCallback?e.valueCallback(n[0]):n[0];r=a.valueCallback?a.valueCallback(r):r;var l=t.slice(i.length);return{value:r,rest:l}}},e.exports=t.default},26136:function(e,t){function a(e){return e.replace(/sekuntia?/,"sekunnin")}function u(e){return e.replace(/minuuttia?/,"minuutin")}function i(e){return e.replace(/tuntia?/,"tunnin")}function n(e){return e.replace(/(viikko|viikkoa)/,"viikon")}function r(e){return e.replace(/(kuukausi|kuukautta)/,"kuukauden")}function l(e){return e.replace(/(vuosi|vuotta)/,"vuoden")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){a=a||{};var u=o[e],i=1===t?u.one:u.other.replace("{{count}}",t);if(a.addSuffix)return a.comparison>0?u.futureTense(i)+" kuluttua":i+" sitten";return i};var o={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:a},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:a},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(e){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:u},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:u},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:i},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:i},xDays:{one:"p\xe4iv\xe4",other:"{{count}} p\xe4iv\xe4\xe4",futureTense:function(e){return e.replace(/p\xe4iv\xe4\xe4?/,"p\xe4iv\xe4n")}},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:n},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:n},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:r},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:r},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:l},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:l},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:l},almostXYears:{one:"l\xe4hes vuosi",other:"l\xe4hes {{count}} vuotta",futureTense:l}};e.exports=t.default},20173:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i=(u=a(35063))&&u.__esModule?u:{default:u};var n={date:(0,i.default)({formats:{full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=n,e.exports=t.default},9370:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,u,i){return a[e]};var a={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'t\xe4n\xe4\xe4n klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"};e.exports=t.default},42885:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i=(u=a(64028))&&u.__esModule?u:{default:u};var n={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kes\xe4","hein\xe4","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kes\xe4kuu","hein\xe4kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},r={narrow:n.narrow,abbreviated:n.abbreviated,wide:n.wide.map((function(e){return e+"ta"}))},l={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},o={narrow:l.narrow,short:l.short,abbreviated:l.abbreviated,wide:l.wide.map((function(e){return e+"na"}))};var s={ordinalNumber:function(e){return Number(e)+"."},era:(0,i.default)({values:{narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","j\xe4lkeen ajanlaskun alun"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:n,formattingValues:r,defaultWidth:"wide"}),day:(0,i.default)({values:l,formattingValues:o,defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"ap",pm:"ip",midnight:"keskiy\xf6",noon:"keskip\xe4iv\xe4",morning:"ap",afternoon:"ip",evening:"illalla",night:"y\xf6ll\xe4"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiy\xf6",noon:"keskip\xe4iv\xe4",morning:"ap",afternoon:"ip",evening:"illalla",night:"y\xf6ll\xe4"},wide:{am:"ap",pm:"ip",midnight:"keskiy\xf6ll\xe4",noon:"keskip\xe4iv\xe4ll\xe4",morning:"aamup\xe4iv\xe4ll\xe4",afternoon:"iltap\xe4iv\xe4ll\xe4",evening:"illalla",night:"y\xf6ll\xe4"}},defaultWidth:"wide"})};t.default=s,e.exports=t.default},85266:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(35568)),i=n(a(27758));function n(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,u.default)({matchPattern:/^(\d+)(\.)/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|j\xe4lkeen ajanlaskun alun)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^j/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kes\xe4|hein\xe4|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kes\xe4kuu|hein\xe4kuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(ap|ip|keskiy\xf6|keskip\xe4iv\xe4|aamup\xe4iv\xe4ll\xe4|iltap\xe4iv\xe4ll\xe4|illalla|y\xf6ll\xe4)/i,any:/^(ap|ip|keskiy\xf6ll\xe4|keskip\xe4iv\xe4ll\xe4|aamup\xe4iv\xe4ll\xe4|iltap\xe4iv\xe4ll\xe4|illalla|y\xf6ll\xe4)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiy\xf6/i,noon:/^keskip\xe4iv\xe4/i,morning:/aamup\xe4iv\xe4ll\xe4/i,afternoon:/iltap\xe4iv\xe4ll\xe4/i,evening:/illalla/i,night:/y\xf6ll\xe4/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},80925:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(a(26136)),i=o(a(20173)),n=o(a(9370)),r=o(a(42885)),l=o(a(85266));function o(e){return e&&e.__esModule?e:{default:e}}var s={code:"fi",formatDistance:u.default,formatLong:i.default,formatRelative:n.default,localize:r.default,match:l.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=s,e.exports=t.default}}]);
//# sourceMappingURL=df-32.adfc824c.chunk.js.map