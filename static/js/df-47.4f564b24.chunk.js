"use strict";(self.webpackChunkherolo_weather_react2=self.webpackChunkherolo_weather_react2||[]).push([[1486],{35063:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}},e.exports=t.default},64028:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,u=r.width?String(r.width):i;n=e.formattingValues[u]||e.formattingValues[i]}else{var d=e.defaultWidth,o=r.width?String(r.width):e.defaultWidth;n=e.values[o]||e.values[d]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},27758:function(e,t){function a(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function n(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.width,u=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],d=t.match(u);if(!d)return null;var o,l=d[0],f=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(f)?n(f,(function(e){return e.test(l)})):a(f,(function(e){return e.test(l)}));o=e.valueCallback?e.valueCallback(s):s,o=r.valueCallback?r.valueCallback(o):o;var m=t.slice(l.length);return{value:o,rest:m}}},e.exports=t.default},35568:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],i=t.match(e.parsePattern);if(!i)return null;var u=e.valueCallback?e.valueCallback(i[0]):i[0];u=a.valueCallback?a.valueCallback(u):u;var d=t.slice(r.length);return{value:u,rest:d}}},e.exports=t.default},63213:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"minna en 1 sek\xfanda",other:"minna en {{count}} sek\xfandur"},xSeconds:{one:"1 sek\xfanda",other:"{{count}} sek\xfandur"},halfAMinute:"h\xe1lf m\xedn\xfata",lessThanXMinutes:{one:"minna en 1 m\xedn\xfata",other:"minna en {{count}} m\xedn\xfatur"},xMinutes:{one:"1 m\xedn\xfata",other:"{{count}} m\xedn\xfatur"},aboutXHours:{one:"u.\xfe.b. 1 klukkustund",other:"u.\xfe.b. {{count}} klukkustundir"},xHours:{one:"1 klukkustund",other:"{{count}} klukkustundir"},xDays:{one:"1 dagur",other:"{{count}} dagar"},aboutXWeeks:{one:"um viku",other:"um {{count}} vikur"},xWeeks:{one:"1 viku",other:"{{count}} vikur"},aboutXMonths:{one:"u.\xfe.b. 1 m\xe1nu\xf0ur",other:"u.\xfe.b. {{count}} m\xe1nu\xf0ir"},xMonths:{one:"1 m\xe1nu\xf0ur",other:"{{count}} m\xe1nu\xf0ir"},aboutXYears:{one:"u.\xfe.b. 1 \xe1r",other:"u.\xfe.b. {{count}} \xe1r"},xYears:{one:"1 \xe1r",other:"{{count}} \xe1r"},overXYears:{one:"meira en 1 \xe1r",other:"meira en {{count}} \xe1r"},almostXYears:{one:"n\xe6stum 1 \xe1r",other:"n\xe6stum {{count}} \xe1r"}},n=function(e,t,n){var r,i=a[e];return r="string"===typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"\xed "+r:r+" s\xed\xf0an":r};t.default=n,e.exports=t.default},91517:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(35063))&&n.__esModule?n:{default:n};var i={date:(0,r.default)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"d.MM.y"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},5819:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"'s\xed\xf0asta' dddd 'kl.' p",yesterday:"'\xed g\xe6r kl.' p",today:"'\xed dag kl.' p",tomorrow:"'\xe1 morgun kl.' p",nextWeek:"dddd 'kl.' p",other:"P"},n=function(e,t,n,r){return a[e]};t.default=n,e.exports=t.default},50456:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(64028))&&n.__esModule?n:{default:n};var i={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,r.default)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["fyrir Krist","eftir Krist"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["1F","2F","3F","4F"],wide:["1. fj\xf3r\xf0ungur","2. fj\xf3r\xf0ungur","3. fj\xf3r\xf0ungur","4. fj\xf3r\xf0ungur"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["J","F","M","A","M","J","J","\xc1","S","\xd3","N","D"],abbreviated:["jan.","feb.","mars","apr\xedl","ma\xed","j\xfan\xed","j\xfal\xed","\xe1g\xfast","sept.","okt.","n\xf3v.","des."],wide:["jan\xfaar","febr\xfaar","mars","apr\xedl","ma\xed","j\xfan\xed","j\xfal\xed","\xe1g\xfast","september","okt\xf3ber","n\xf3vember","desember"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["S","M","\xde","M","F","F","L"],short:["Su","M\xe1","\xder","Mi","Fi","F\xf6","La"],abbreviated:["sun.","m\xe1n.","\xferi.","mi\xf0.","fim.","f\xf6s.","lau"],wide:["sunnudagur","m\xe1nudagur","\xferi\xf0judagur","mi\xf0vikudagur","fimmtudagur","f\xf6studagur","laugardagur"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"f",pm:"e",midnight:"mi\xf0n\xe6tti",noon:"h\xe1degi",morning:"morgunn",afternoon:"s\xed\xf0degi",evening:"kv\xf6ld",night:"n\xf3tt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"mi\xf0n\xe6tti",noon:"h\xe1degi",morning:"morgunn",afternoon:"s\xed\xf0degi",evening:"kv\xf6ld",night:"n\xf3tt"},wide:{am:"fyrir h\xe1degi",pm:"eftir h\xe1degi",midnight:"mi\xf0n\xe6tti",noon:"h\xe1degi",morning:"morgunn",afternoon:"s\xed\xf0degi",evening:"kv\xf6ld",night:"n\xf3tt"}},defaultWidth:"wide",formattingValues:{narrow:{am:"f",pm:"e",midnight:"\xe1 mi\xf0n\xe6tti",noon:"\xe1 h\xe1degi",morning:"a\xf0 morgni",afternoon:"s\xed\xf0degis",evening:"um kv\xf6ld",night:"um n\xf3tt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"\xe1 mi\xf0n\xe6tti",noon:"\xe1 h\xe1degi",morning:"a\xf0 morgni",afternoon:"s\xed\xf0degis",evening:"um kv\xf6ld",night:"um n\xf3tt"},wide:{am:"fyrir h\xe1degi",pm:"eftir h\xe1degi",midnight:"\xe1 mi\xf0n\xe6tti",noon:"\xe1 h\xe1degi",morning:"a\xf0 morgni",afternoon:"s\xed\xf0degis",evening:"um kv\xf6ld",night:"um n\xf3tt"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},83813:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(27758));function r(e){return e&&e.__esModule?e:{default:e}}var i={ordinalNumber:(0,r(a(35568)).default)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+(\.)?/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(f\.Kr\.|e\.Kr\.)/i,abbreviated:/^(f\.Kr\.|e\.Kr\.)/i,wide:/^(fyrir Krist|eftir Krist)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(f\.Kr\.)/i,/^(e\.Kr\.)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]\.?/i,abbreviated:/^q[1234]\.?/i,wide:/^[1234]\.? fj\xf3r\xf0ungur/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1\.?/i,/2\.?/i,/3\.?/i,/4\.?/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfm\xe1s\xf3nd]/i,abbreviated:/^(jan\.|feb\.|mars\.|apr\xedl\.|ma\xed|j\xfan\xed|j\xfal\xed|\xe1gust|sep\.|oct\.|nov\.|dec\.)/i,wide:/^(januar|febr\xfaar|mars|apr\xedl|ma\xed|j\xfan\xed|j\xfal\xed|\xe1gust|september|okt\xf3ber|n\xf3vember|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^\xe1/i,/^s/i,/^\xf3/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^ma\xed/i,/^j\xfan/i,/^j\xfal/i,/^\xe1u/i,/^s/i,/^\xf3/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|m\xe1|\xfer|mi|fi|f\xf6|la)/i,abbreviated:/^(sun|m\xe1n|\xferi|mi\xf0|fim|f\xf6s|lau)\.?/i,wide:/^(sunnudagur|m\xe1nudagur|\xferi\xf0judagur|mi\xf0vikudagur|fimmtudagur|f\xf6studagur|laugardagur)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^\xfe/i,/^m/i,/^f/i,/^f/i,/^l/i],any:[/^su/i,/^m\xe1/i,/^\xfer/i,/^mi/i,/^fi/i,/^f\xf6/i,/^la/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(f|e|s\xed\xf0degis|(\xe1|a\xf0|um) (morgni|kv\xf6ld|n\xf3tt|mi\xf0n\xe6tti))/i,any:/^(fyrir h\xe1degi|eftir h\xe1degi|[ef]\.?h\.?|s\xed\xf0degis|morgunn|(\xe1|a\xf0|um) (morgni|kv\xf6ld|n\xf3tt|mi\xf0n\xe6tti))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^f/i,pm:/^e/i,midnight:/^mi/i,noon:/^h\xe1/i,morning:/morgunn/i,afternoon:/s\xed\xf0degi/i,evening:/kv\xf6ld/i,night:/n\xf3tt/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},69787:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(63213)),r=o(a(91517)),i=o(a(5819)),u=o(a(50456)),d=o(a(83813));function o(e){return e&&e.__esModule?e:{default:e}}var l={code:"is",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:u.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=df-47.4f564b24.chunk.js.map