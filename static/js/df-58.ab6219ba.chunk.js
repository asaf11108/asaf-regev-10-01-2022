"use strict";(self.webpackChunkherolo_weather_react2=self.webpackChunkherolo_weather_react2||[]).push([[3824],{35063:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,o=e.formats[n]||e.formats[e.defaultWidth];return o}},e.exports=t.default},64028:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var o;if("formatting"===(null!==n&&void 0!==n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,r=null!==n&&void 0!==n&&n.width?String(n.width):a;o=e.formattingValues[r]||e.formattingValues[a]}else{var i=e.defaultWidth,u=null!==n&&void 0!==n&&n.width?String(n.width):e.defaultWidth;o=e.values[u]||e.values[i]}return o[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},27758:function(e,t){function n(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function o(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],u=t.match(i);if(!u)return null;var d,l=u[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],f=Array.isArray(s)?o(s,(function(e){return e.test(l)})):n(s,(function(e){return e.test(l)}));d=e.valueCallback?e.valueCallback(f):f,d=a.valueCallback?a.valueCallback(d):d;var h=t.slice(l.length);return{value:d,rest:h}}},e.exports=t.default},35568:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.match(e.matchPattern);if(!o)return null;var a=o[0],r=t.match(e.parsePattern);if(!r)return null;var i=e.valueCallback?e.valueCallback(r[0]):r[0];i=n.valueCallback?n.valueCallback(i):i;var u=t.slice(a.length);return{value:i,rest:u}}},e.exports=t.default},10678:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lessThanXSeconds:{standalone:{one:"manner w\xe9i eng Sekonn",other:"manner w\xe9i {{count}} Sekonnen"},withPreposition:{one:"manner w\xe9i enger Sekonn",other:"manner w\xe9i {{count}} Sekonnen"}},xSeconds:{standalone:{one:"eng Sekonn",other:"{{count}} Sekonnen"},withPreposition:{one:"enger Sekonn",other:"{{count}} Sekonnen"}},halfAMinute:{standalone:"eng hallef Minutt",withPreposition:"enger hallwer Minutt"},lessThanXMinutes:{standalone:{one:"manner w\xe9i eng Minutt",other:"manner w\xe9i {{count}} Minutten"},withPreposition:{one:"manner w\xe9i enger Minutt",other:"manner w\xe9i {{count}} Minutten"}},xMinutes:{standalone:{one:"eng Minutt",other:"{{count}} Minutten"},withPreposition:{one:"enger Minutt",other:"{{count}} Minutten"}},aboutXHours:{standalone:{one:"ongef\xe9ier eng Stonn",other:"ongef\xe9ier {{count}} Stonnen"},withPreposition:{one:"ongef\xe9ier enger Stonn",other:"ongef\xe9ier {{count}} Stonnen"}},xHours:{standalone:{one:"eng Stonn",other:"{{count}} Stonnen"},withPreposition:{one:"enger Stonn",other:"{{count}} Stonnen"}},xDays:{standalone:{one:"een Dag",other:"{{count}} Deeg"},withPreposition:{one:"engem Dag",other:"{{count}} Deeg"}},aboutXWeeks:{standalone:{one:"ongef\xe9ier eng Woch",other:"ongef\xe9ier {{count}} Wochen"},withPreposition:{one:"ongef\xe9ier enger Woche",other:"ongef\xe9ier {{count}} Wochen"}},xWeeks:{standalone:{one:"eng Woch",other:"{{count}} Wochen"},withPreposition:{one:"enger Woch",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"ongef\xe9ier ee Mount",other:"ongef\xe9ier {{count}} M\xe9int"},withPreposition:{one:"ongef\xe9ier engem Mount",other:"ongef\xe9ier {{count}} M\xe9int"}},xMonths:{standalone:{one:"ee Mount",other:"{{count}} M\xe9int"},withPreposition:{one:"engem Mount",other:"{{count}} M\xe9int"}},aboutXYears:{standalone:{one:"ongef\xe9ier ee Joer",other:"ongef\xe9ier {{count}} Joer"},withPreposition:{one:"ongef\xe9ier engem Joer",other:"ongef\xe9ier {{count}} Joer"}},xYears:{standalone:{one:"ee Joer",other:"{{count}} Joer"},withPreposition:{one:"engem Joer",other:"{{count}} Joer"}},overXYears:{standalone:{one:"m\xe9i w\xe9i ee Joer",other:"m\xe9i w\xe9i {{count}} Joer"},withPreposition:{one:"m\xe9i w\xe9i engem Joer",other:"m\xe9i w\xe9i {{count}} Joer"}},almostXYears:{standalone:{one:"bal ee Joer",other:"bal {{count}} Joer"},withPreposition:{one:"bal engem Joer",other:"bal {{count}} Joer"}}},o=["d","h","n","t","z"],a=["a,","e","i","o","u"],r=[0,1,2,3,8,9],i=[40,50,60,70];function u(e){var t=e.charAt(0).toLowerCase();if(-1!=a.indexOf(t)||-1!=o.indexOf(t))return!0;var n=e.split(" ")[0],u=parseInt(n);return!isNaN(u)&&-1!=r.indexOf(u%10)&&-1==i.indexOf(parseInt(n.substring(0,2)))}var d=function(e,t,o){var a,r=n[e],i=null!==o&&void 0!==o&&o.addSuffix?r.withPreposition:r.standalone;return a="string"===typeof i?i:1===t?i.one:i.other.replace("{{count}}",String(t)),null!==o&&void 0!==o&&o.addSuffix?o.comparison&&o.comparison>0?"a"+(u(a)?"n":"")+" "+a:"viru"+(u(a)?"n":"")+" "+a:a};t.default=d,e.exports=t.default},45595:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(35063))&&o.__esModule?o:{default:o};var r={date:(0,a.default)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.yy"},defaultWidth:"full"}),time:(0,a.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,a.default)({formats:{full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=r,e.exports=t.default},89552:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lastWeek:function(e){var t=e.getUTCDay(),n="'l\xe4schte";return 2!==t&&4!==t||(n+="n"),n+="' eeee 'um' p"},yesterday:"'g\xebschter um' p",today:"'haut um' p",tomorrow:"'moien um' p",nextWeek:"eeee 'um' p",other:"P"},o=function(e,t,o,a){var r=n[e];return"function"===typeof r?r(t):r};t.default=o,e.exports=t.default},31048:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(64028))&&o.__esModule?o:{default:o};var r={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,a.default)({values:{narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["viru Christus","no Christus"]},defaultWidth:"wide"}),quarter:(0,a.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,a.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","M\xe4e","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","M\xe4erz","Abr\xebll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"]},defaultWidth:"wide"}),day:(0,a.default)({values:{narrow:["S","M","D","M","D","F","S"],short:["So","M\xe9","D\xeb","M\xeb","Do","Fr","Sa"],abbreviated:["So.","M\xe9.","D\xeb.","M\xeb.","Do.","Fr.","Sa."],wide:["Sonndeg","M\xe9indeg","D\xebnschdeg","M\xebttwoch","Donneschdeg","Freideg","Samschdeg"]},defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:{narrow:{am:"mo.",pm:"nom\xeb.",midnight:"M\xebtternuecht",noon:"M\xebtteg",morning:"Moien",afternoon:"Nom\xebtteg",evening:"Owend",night:"Nuecht"},abbreviated:{am:"moies",pm:"nom\xebttes",midnight:"M\xebtternuecht",noon:"M\xebtteg",morning:"Moien",afternoon:"Nom\xebtteg",evening:"Owend",night:"Nuecht"},wide:{am:"moies",pm:"nom\xebttes",midnight:"M\xebtternuecht",noon:"M\xebtteg",morning:"Moien",afternoon:"Nom\xebtteg",evening:"Owend",night:"Nuecht"}},defaultWidth:"wide",formattingValues:{narrow:{am:"mo.",pm:"nom.",midnight:"M\xebtternuecht",noon:"m\xebttes",morning:"moies",afternoon:"nom\xebttes",evening:"owes",night:"nuets"},abbreviated:{am:"moies",pm:"nom\xebttes",midnight:"M\xebtternuecht",noon:"m\xebttes",morning:"moies",afternoon:"nom\xebttes",evening:"owes",night:"nuets"},wide:{am:"moies",pm:"nom\xebttes",midnight:"M\xebtternuecht",noon:"m\xebttes",morning:"moies",afternoon:"nom\xebttes",evening:"owes",night:"nuets"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},24028:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(27758));function a(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,a(n(35568)).default)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,o.default)({matchPatterns:{narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(viru Christus|virun eiser Z\xe4itrechnung|no Christus|eiser Z\xe4itrechnung)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/i,/^n/i]},defaultParseWidth:"any"}),quarter:(0,o.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,o.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|m\xe4e|abr|mee|jun|jul|aug|sep|okt|nov|dez)/i,wide:/^(januar|februar|m\xe4erz|abr\xebll|mee|juni|juli|august|september|oktober|november|dezember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^m\xe4/i,/^ab/i,/^me/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,o.default)({matchPatterns:{narrow:/^[smdf]/i,short:/^(so|m\xe9|d\xeb|m\xeb|do|fr|sa)/i,abbreviated:/^(son?|m\xe9i?|d\xebn?|m\xebt?|don?|fre?|sam?)\.?/i,wide:/^(sonndeg|m\xe9indeg|d\xebnschdeg|m\xebttwoch|donneschdeg|freideg|samschdeg)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^so/i,/^m\xe9/i,/^d\xeb/i,/^m\xeb/i,/^do/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,o.default)({matchPatterns:{narrow:/^(mo\.?|nom\xeb\.?|M\xebtternuecht|m\xebttes|moies|nom\xebttes|owes|nuets)/i,abbreviated:/^(moi\.?|nom\xebt\.?|M\xebtternuecht|m\xebttes|moies|nom\xebttes|owes|nuets)/i,wide:/^(moies|nom\xebttes|M\xebtternuecht|m\xebttes|moies|nom\xebttes|owes|nuets)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^m/i,pm:/^n/i,midnight:/^M\xebtter/i,noon:/^m\xebttes/i,morning:/moies/i,afternoon:/nom\xebttes/i,evening:/owes/i,night:/nuets/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},71555:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(10678)),a=d(n(45595)),r=d(n(89552)),i=d(n(31048)),u=d(n(24028));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"lb",formatDistance:o.default,formatLong:a.default,formatRelative:r.default,localize:i.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=df-58.ab6219ba.chunk.js.map