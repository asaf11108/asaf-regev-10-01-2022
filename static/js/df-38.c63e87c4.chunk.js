"use strict";(self.webpackChunkherolo_weather_react2=self.webpackChunkherolo_weather_react2||[]).push([[1574],{35063:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width?String(e.width):a.defaultWidth,n=a.formats[t]||a.formats[a.defaultWidth];return n}},a.exports=e.default},64028:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var n;if("formatting"===(null!==t&&void 0!==t&&t.context?String(t.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,r=null!==t&&void 0!==t&&t.width?String(t.width):i;n=a.formattingValues[r]||a.formattingValues[i]}else{var d=a.defaultWidth,o=null!==t&&void 0!==t&&t.width?String(t.width):a.defaultWidth;n=a.values[o]||a.values[d]}return n[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},27758:function(a,e){function t(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}function n(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.width,d=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],o=e.match(d);if(!o)return null;var u,l=o[0],h=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(h)?n(h,(function(a){return a.test(l)})):t(h,(function(a){return a.test(l)}));u=a.valueCallback?a.valueCallback(s):s,u=i.valueCallback?i.valueCallback(u):u;var f=e.slice(l.length);return{value:u,rest:f}}},a.exports=e.default},35568:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(a.matchPattern);if(!n)return null;var i=n[0],r=e.match(a.parsePattern);if(!r)return null;var d=a.valueCallback?a.valueCallback(r[0]):r[0];d=t.valueCallback?t.valueCallback(d):d;var o=e.slice(i.length);return{value:d,rest:o}}},a.exports=e.default},63931:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lessThanXSeconds:{one:"nas lugha na diog",other:"nas lugha na {{count}} diogan"},xSeconds:{one:"1 diog",two:"2 dhiog",twenty:"20 diog",other:"{{count}} diogan"},halfAMinute:"leth mhionaid",lessThanXMinutes:{one:"nas lugha na mionaid",other:"nas lugha na {{count}} mionaidean"},xMinutes:{one:"1 mionaid",two:"2 mhionaid",twenty:"20 mionaid",other:"{{count}} mionaidean"},aboutXHours:{one:"mu uair de th\xecde",other:"mu {{count}} uairean de th\xecde"},xHours:{one:"1 uair de th\xecde",two:"2 uair de th\xecde",twenty:"20 uair de th\xecde",other:"{{count}} uairean de th\xecde"},xDays:{one:"1 l\xe0",other:"{{count}} l\xe0"},aboutXWeeks:{one:"mu 1 seachdain",other:"mu {{count}} seachdainean"},xWeeks:{one:"1 seachdain",other:"{{count}} seachdainean"},aboutXMonths:{one:"mu mh\xecos",other:"mu {{count}} m\xecosan"},xMonths:{one:"1 m\xecos",other:"{{count}} m\xecosan"},aboutXYears:{one:"mu bhliadhna",other:"mu {{count}} bliadhnaichean"},xYears:{one:"1 bhliadhna",other:"{{count}} bliadhna"},overXYears:{one:"c\xf2rr is bliadhna",other:"c\xf2rr is {{count}} bliadhnaichean"},almostXYears:{one:"cha mh\xf2r bliadhna",other:"cha mh\xf2r {{count}} bliadhnaichean"}},n=function(a,e,n){var i,r=t[a];return i="string"===typeof r?r:1===e?r.one:2===e&&r.two?r.two:20===e&&r.twenty?r.twenty:r.other.replace("{{count}}",String(e)),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"ann an "+i:"o chionn "+i:i};e.default=n,a.exports=e.default},61123:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t(35063))&&n.__esModule?n:{default:n};var r={date:(0,i.default)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'aig' {{time}}",long:"{{date}} 'aig' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=r,a.exports=e.default},86033:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lastWeek:"'mu dheireadh' eeee 'aig' p",yesterday:"'an-d\xe8 aig' p",today:"'an-diugh aig' p",tomorrow:"'a-m\xe0ireach aig' p",nextWeek:"eeee 'aig' p",other:"P"},n=function(a,e,n,i){return t[a]};e.default=n,a.exports=e.default},3863:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t(64028))&&n.__esModule?n:{default:n};var r={ordinalNumber:function(a){var e=Number(a),t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"d";case 2:return e+"na"}return 12===t?e+"na":e+"mh"},era:(0,i.default)({values:{narrow:["R","A"],abbreviated:["RC","AD"],wide:["ro Chr\xecosta","anno domini"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["C1","C2","C3","C4"],wide:["a' chiad chairteal","an d\xe0rna cairteal","an treas cairteal","an ceathramh cairteal"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,i.default)({values:{narrow:["F","G","M","G","C","\xd2","I","L","S","D","S","D"],abbreviated:["Faoi","Gear","M\xe0rt","Gibl","C\xe8it","\xd2gmh","Iuch","L\xf9n","Sult","D\xe0mh","Samh","D\xf9bh"],wide:["Am Faoilleach","An Gearran","Am M\xe0rt","An Giblean","An C\xe8itean","An t-\xd2gmhios","An t-Iuchar","An L\xf9nastal","An t-Sultain","An D\xe0mhair","An t-Samhain","An D\xf9bhlachd"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["D","L","M","C","A","H","S"],short:["D\xf2","Lu","M\xe0","Ci","Ar","Ha","Sa"],abbreviated:["Did","Dil","Dim","Dic","Dia","Dih","Dis"],wide:["Did\xf2mhnaich","Diluain","Dim\xe0irt","Diciadain","Diardaoin","Dihaoine","Disathairne"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan l\xe0",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan l\xe0",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"}},defaultWidth:"wide",formattingValues:{narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan l\xe0",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan l\xe0",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"}},defaultFormattingWidth:"wide"})};e.default=r,a.exports=e.default},91534:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(t(27758));function i(a){return a&&a.__esModule?a:{default:a}}var r={ordinalNumber:(0,i(t(35568)).default)({matchPattern:/^(\d+)(d|na|tr|mh)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(r|a)/i,abbreviated:/^(r\.?\s?c\.?|r\.?\s?a\.?\s?c\.?|a\.?\s?d\.?|a\.?\s?c\.?)/i,wide:/^(ro Chr\xecosta|ron aois choitchinn|anno domini|aois choitcheann)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^c[1234]/i,wide:/^[1234](cd|na|tr|mh)? cairteal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[fgmc\xf2ilsd]/i,abbreviated:/^(faoi|gear|m\xe0rt|gibl|c\xe8it|\xf2gmh|iuch|l\xf9n|sult|d\xe0mh|samh|d\xf9bh)/i,wide:/^(am faoilleach|an gearran|am m\xe0rt|an giblean|an c\xe8itean|an t-\xd2gmhios|an t-Iuchar|an l\xf9nastal|an t-Sultain|an d\xe0mhair|an t-Samhain|an d\xf9bhlachd)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^f/i,/^g/i,/^m/i,/^g/i,/^c/i,/^\xf2/i,/^i/i,/^l/i,/^s/i,/^d/i,/^s/i,/^d/i],any:[/^fa/i,/^ge/i,/^m\xe0/i,/^gi/i,/^c/i,/^\xf2/i,/^i/i,/^l/i,/^su/i,/^d/i,/^sa/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[dlmcahs]/i,short:/^(d\xf2|lu|m\xe0|ci|ar|ha|sa)/i,abbreviated:/^(did|dil|dim|dic|dia|dih|dis)/i,wide:/^(did\xf2mhnaich|diluain|dim\xe0irt|diciadain|diardaoin|dihaoine|disathairne)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^c/i,/^a/i,/^h/i,/^s/i],any:[/^d/i,/^l/i,/^m/i,/^c/i,/^a/i,/^h/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(a|p|mi|n|(san|aig) (madainn|feasgar|feasgar|oidhche))/i,any:/^([ap]\.?\s?m\.?|meadhan oidhche|meadhan l\xe0|(san|aig) (madainn|feasgar|feasgar|oidhche))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^m/i,pm:/^f/i,midnight:/^meadhan oidhche/i,noon:/^meadhan l\xe0/i,morning:/sa mhadainn/i,afternoon:/feasgar/i,evening:/feasgar/i,night:/air an oidhche/i}},defaultParseWidth:"any"})};e.default=r,a.exports=e.default},56382:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=u(t(63931)),i=u(t(61123)),r=u(t(86033)),d=u(t(3863)),o=u(t(91534));function u(a){return a&&a.__esModule?a:{default:a}}var l={code:"gd",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:d.default,match:o.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};e.default=l,a.exports=e.default}}]);
//# sourceMappingURL=df-38.c63e87c4.chunk.js.map