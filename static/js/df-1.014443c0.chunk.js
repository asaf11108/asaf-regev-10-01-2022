"use strict";(self.webpackChunkherolo_weather_react2=self.webpackChunkherolo_weather_react2||[]).push([[6657],{35063:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,a=e.formats[n]||e.formats[e.defaultWidth];return a}},e.exports=t.default},64028:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a;if("formatting"===(null!==n&&void 0!==n&&n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=null!==n&&void 0!==n&&n.width?String(n.width):r;a=e.formattingValues[o]||e.formattingValues[r]}else{var i=e.defaultWidth,u=null!==n&&void 0!==n&&n.width?String(n.width):e.defaultWidth;a=e.values[u]||e.values[i]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},27758:function(e,t){function n(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function a(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],u=t.match(i);if(!u)return null;var d,l=u[0],f=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],h=Array.isArray(f)?a(f,(function(e){return e.test(l)})):n(f,(function(e){return e.test(l)}));d=e.valueCallback?e.valueCallback(h):h,d=r.valueCallback?r.valueCallback(d):d;var s=t.slice(l.length);return{value:d,rest:s}}},e.exports=t.default},35568:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.match(e.matchPattern);if(!a)return null;var r=a[0],o=t.match(e.parsePattern);if(!o)return null;var i=e.valueCallback?e.valueCallback(o[0]):o[0];i=n.valueCallback?n.valueCallback(i):i;var u=t.slice(r.length);return{value:i,rest:u}}},e.exports=t.default},6990:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lessThanXSeconds:{one:"\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",two:"\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u062a\u064a\u0646",threeToTen:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062b\u0648\u0627\u0646\u064a",other:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062b\u0627\u0646\u064a\u0629"},xSeconds:{one:"\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",two:"\u062b\u0627\u0646\u062a\u064a\u0646",threeToTen:"{{count}} \u062b\u0648\u0627\u0646\u064a",other:"{{count}} \u062b\u0627\u0646\u064a\u0629"},halfAMinute:"\u0646\u0635\u0641 \u062f\u0642\u064a\u0642\u0629",lessThanXMinutes:{one:"\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629",two:"\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u062a\u064a\u0646",threeToTen:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062f\u0642\u0627\u0626\u0642",other:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062f\u0642\u064a\u0642\u0629"},xMinutes:{one:"\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",two:"\u062f\u0642\u064a\u0642\u062a\u064a\u0646",threeToTen:"{{count}} \u062f\u0642\u0627\u0626\u0642",other:"{{count}} \u062f\u0642\u064a\u0642\u0629"},aboutXHours:{one:"\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",two:"\u0633\u0627\u0639\u062a\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",threeToTen:"{{count}} \u0633\u0627\u0639\u0627\u062a \u062a\u0642\u0631\u064a\u0628\u0627\u064b",other:"{{count}} \u0633\u0627\u0639\u0629 \u062a\u0642\u0631\u064a\u0628\u0627\u064b"},xHours:{one:"\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",two:"\u0633\u0627\u0639\u062a\u064a\u0646",threeToTen:"{{count}} \u0633\u0627\u0639\u0627\u062a",other:"{{count}} \u0633\u0627\u0639\u0629"},xDays:{one:"\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",two:"\u064a\u0648\u0645\u064a\u0646",threeToTen:"{{count}} \u0623\u064a\u0627\u0645",other:"{{count}} \u064a\u0648\u0645"},aboutXWeeks:{one:"\u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062d\u062f \u062a\u0642\u0631\u064a\u0628\u0627\u064b",two:"\u0623\u0633\u0628\u0648\u0639\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",threeToTen:"{{count}} \u0623\u0633\u0627\u0628\u064a\u0639 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",other:"{{count}} \u0623\u0633\u0628\u0648\u0639 \u062a\u0642\u0631\u064a\u0628\u0627\u064b"},xWeeks:{one:"\u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062d\u062f",two:"\u0623\u0633\u0628\u0648\u0639\u064a\u0646",threeToTen:"{{count}} \u0623\u0633\u0627\u0628\u064a\u0639",other:"{{count}} \u0623\u0633\u0628\u0648\u0639"},aboutXMonths:{one:"\u0634\u0647\u0631 \u0648\u0627\u062d\u062f \u062a\u0642\u0631\u064a\u0628\u0627\u064b",two:"\u0634\u0647\u0631\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",threeToTen:"{{count}} \u0623\u0634\u0647\u0631 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",other:"{{count}} \u0634\u0647\u0631 \u062a\u0642\u0631\u064a\u0628\u0627\u064b"},xMonths:{one:"\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",two:"\u0634\u0647\u0631\u064a\u0646",threeToTen:"{{count}} \u0623\u0634\u0647\u0631",other:"{{count}} \u0634\u0647\u0631"},aboutXYears:{one:"\u0639\u0627\u0645 \u0648\u0627\u062d\u062f \u062a\u0642\u0631\u064a\u0628\u0627\u064b",two:"\u0639\u0627\u0645\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",threeToTen:"{{count}} \u0623\u0639\u0648\u0627\u0645 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",other:"{{count}} \u0639\u0627\u0645 \u062a\u0642\u0631\u064a\u0628\u0627\u064b"},xYears:{one:"\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",two:"\u0639\u0627\u0645\u064a\u0646",threeToTen:"{{count}} \u0623\u0639\u0648\u0627\u0645",other:"{{count}} \u0639\u0627\u0645"},overXYears:{one:"\u0623\u0643\u062b\u0631 \u0645\u0646 \u0639\u0627\u0645",two:"\u0623\u0643\u062b\u0631 \u0645\u0646 \u0639\u0627\u0645\u064a\u0646",threeToTen:"\u0623\u0643\u062b\u0631 \u0645\u0646 {{count}} \u0623\u0639\u0648\u0627\u0645",other:"\u0623\u0643\u062b\u0631 \u0645\u0646 {{count}} \u0639\u0627\u0645"},almostXYears:{one:"\u0639\u0627\u0645 \u0648\u0627\u062d\u062f \u062a\u0642\u0631\u064a\u0628\u0627\u064b",two:"\u0639\u0627\u0645\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",threeToTen:"{{count}} \u0623\u0639\u0648\u0627\u0645 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",other:"{{count}} \u0639\u0627\u0645 \u062a\u0642\u0631\u064a\u0628\u0627\u064b"}},a=function(e,t,a){a=a||{};var r,o=n[e];return r="string"===typeof o?o:1===t?o.one:2===t?o.two:t<=10?o.threeToTen.replace("{{count}}",String(t)):o.other.replace("{{count}}",String(t)),a.addSuffix?a.comparison&&a.comparison>0?"\u0641\u064a \u062e\u0644\u0627\u0644 "+r:"\u0645\u0646\u0630 "+r:r};t.default=a,e.exports=t.default},16954:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(35063))&&a.__esModule?a:{default:a};var o={date:(0,r.default)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} '\u0639\u0646\u062f' {{time}}",long:"{{date}} '\u0639\u0646\u062f' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=o,e.exports=t.default},72970:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lastWeek:"'\u0623\u062e\u0631' eeee '\u0639\u0646\u062f' p",yesterday:"'\u0623\u0645\u0633 \u0639\u0646\u062f' p",today:"'\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f' p",tomorrow:"'\u063a\u062f\u0627\u064b \u0639\u0646\u062f' p",nextWeek:"eeee '\u0639\u0646\u062f' p",other:"P"},a=function(e,t,a,r){return n[e]};t.default=a,e.exports=t.default},63798:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(64028))&&a.__esModule?a:{default:a};var o={ordinalNumber:function(e){return String(e)},era:(0,r.default)({values:{narrow:["\u0642","\u0628"],abbreviated:["\u0642.\u0645.","\u0628.\u0645."],wide:["\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f","\u0628\u0639\u062f \u0627\u0644\u0645\u064a\u0644\u0627\u062f"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["\u06311","\u06312","\u06313","\u06314"],wide:["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0646\u064a","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0644\u062b","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["\u062c","\u0641","\u0645","\u0623","\u0645","\u062c","\u062c","\u0623","\u0633","\u0623","\u0646","\u062f"],abbreviated:["\u062c\u0627\u0646\u0640","\u0641\u064a\u0641\u0640","\u0645\u0627\u0631\u0633","\u0623\u0641\u0631\u064a\u0644","\u0645\u0627\u064a\u0640","\u062c\u0648\u0627\u0646\u0640","\u062c\u0648\u064a\u0640","\u0623\u0648\u062a","\u0633\u0628\u062a\u0640","\u0623\u0643\u062a\u0640","\u0646\u0648\u0641\u0640","\u062f\u064a\u0633\u0640"],wide:["\u062c\u0627\u0646\u0641\u064a","\u0641\u064a\u0641\u0631\u064a","\u0645\u0627\u0631\u0633","\u0623\u0641\u0631\u064a\u0644","\u0645\u0627\u064a","\u062c\u0648\u0627\u0646","\u062c\u0648\u064a\u0644\u064a\u0629","\u0623\u0648\u062a","\u0633\u0628\u062a\u0645\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062f\u064a\u0633\u0645\u0628\u0631"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["\u062d","\u0646","\u062b","\u0631","\u062e","\u062c","\u0633"],short:["\u0623\u062d\u062f","\u0627\u062b\u0646\u064a\u0646","\u062b\u0644\u0627\u062b\u0627\u0621","\u0623\u0631\u0628\u0639\u0627\u0621","\u062e\u0645\u064a\u0633","\u062c\u0645\u0639\u0629","\u0633\u0628\u062a"],abbreviated:["\u0623\u062d\u062f","\u0627\u062b\u0646\u0640","\u062b\u0644\u0627","\u0623\u0631\u0628\u0640","\u062e\u0645\u064a\u0640","\u062c\u0645\u0639\u0629","\u0633\u0628\u062a"],wide:["\u0627\u0644\u0623\u062d\u062f","\u0627\u0644\u0627\u062b\u0646\u064a\u0646","\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062e\u0645\u064a\u0633","\u0627\u0644\u062c\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062a"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"\u0635",pm:"\u0645",midnight:"\u0646",noon:"\u0638",morning:"\u0635\u0628\u0627\u062d\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0645\u0633\u0627\u0621\u0627\u064b",night:"\u0644\u064a\u0644\u0627\u064b"},abbreviated:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u0627\u062d\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0645\u0633\u0627\u0621\u0627\u064b",night:"\u0644\u064a\u0644\u0627\u064b"},wide:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u0627\u062d\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0645\u0633\u0627\u0621\u0627\u064b",night:"\u0644\u064a\u0644\u0627\u064b"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u0635",pm:"\u0645",midnight:"\u0646",noon:"\u0638",morning:"\u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0640\u0647\u0631",evening:"\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0621",night:"\u0641\u064a \u0627\u0644\u0644\u064a\u0644"},abbreviated:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",noon:"\u0638\u0647\u0631",morning:"\u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0621",night:"\u0641\u064a \u0627\u0644\u0644\u064a\u0644"},wide:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u0627\u062d\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0640\u0647\u0631",evening:"\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0621",night:"\u0641\u064a \u0627\u0644\u0644\u064a\u0644"}},defaultFormattingWidth:"wide"})};t.default=o,e.exports=t.default},10138:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(35568)),r=o(n(27758));function o(e){return e&&e.__esModule?e:{default:e}}var i={ordinalNumber:(0,a.default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(\u0642|\u0628)/i,abbreviated:/^(\u0642\.?\s?\u0645\.?|\u0642\.?\s?\u0645\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,wide:/^(\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f|\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f|\u0628\u0639\u062f \u0627\u0644\u0645\u064a\u0644\u0627\u062f|\u0628\u0639\u062f \u0627\u0644\u0645\u064a\u0644\u0627\u062f)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0642\u0628\u0644/i,/^\u0628\u0639\u062f/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0631[1234]/i,wide:/^\u0627\u0644\u0631\u0628\u0639 [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return Number(e)+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[\u062c\u0641\u0645\u0623\u0633\u0646\u062f]/i,abbreviated:/^(\u062c\u0627\u0646|\u0641\u064a\u0641|\u0645\u0627\u0631|\u0623\u0641\u0631|\u0645\u0627\u064a|\u062c\u0648\u0627|\u062c\u0648\u064a|\u0623\u0648\u062a|\u0633\u0628\u062a|\u0623\u0643\u062a|\u0646\u0648\u0641|\u062f\u064a\u0633)/i,wide:/^(\u062c\u0627\u0646\u0641\u064a|\u0641\u064a\u0641\u0631\u064a|\u0645\u0627\u0631\u0633|\u0623\u0641\u0631\u064a\u0644|\u0645\u0627\u064a|\u062c\u0648\u0627\u0646|\u062c\u0648\u064a\u0644\u064a\u0629|\u0623\u0648\u062a|\u0633\u0628\u062a\u0645\u0628\u0631|\u0623\u0643\u062a\u0648\u0628\u0631|\u0646\u0648\u0641\u0645\u0628\u0631|\u062f\u064a\u0633\u0645\u0628\u0631)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u062c/i,/^\u0641/i,/^\u0645/i,/^\u0623/i,/^\u0645/i,/^\u062c/i,/^\u062c/i,/^\u0623/i,/^\u0633/i,/^\u0623/i,/^\u0646/i,/^\u062f/i],any:[/^\u062c\u0627\u0646/i,/^\u0641\u064a\u0641/i,/^\u0645\u0627\u0631/i,/^\u0623\u0641\u0631/i,/^\u0645\u0627\u064a/i,/^\u062c\u0648\u0627/i,/^\u062c\u0648\u064a/i,/^\u0623\u0648\u062a/i,/^\u0633\u0628\u062a/i,/^\u0623\u0643\u062a/i,/^\u0646\u0648\u0641/i,/^\u062f\u064a\u0633/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[\u062d\u0646\u062b\u0631\u062e\u062c\u0633]/i,short:/^(\u0623\u062d\u062f|\u0627\u062b\u0646\u064a\u0646|\u062b\u0644\u0627\u062b\u0627\u0621|\u0623\u0631\u0628\u0639\u0627\u0621|\u062e\u0645\u064a\u0633|\u062c\u0645\u0639\u0629|\u0633\u0628\u062a)/i,abbreviated:/^(\u0623\u062d\u062f|\u0627\u062b\u0646|\u062b\u0644\u0627|\u0623\u0631\u0628|\u062e\u0645\u064a|\u062c\u0645\u0639\u0629|\u0633\u0628\u062a)/i,wide:/^(\u0627\u0644\u0623\u062d\u062f|\u0627\u0644\u0627\u062b\u0646\u064a\u0646|\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621|\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621|\u0627\u0644\u062e\u0645\u064a\u0633|\u0627\u0644\u062c\u0645\u0639\u0629|\u0627\u0644\u0633\u0628\u062a)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u062d/i,/^\u0646/i,/^\u062b/i,/^\u0631/i,/^\u062e/i,/^\u062c/i,/^\u0633/i],wide:[/^\u0627\u0644\u0623\u062d\u062f/i,/^\u0627\u0644\u0627\u062b\u0646\u064a\u0646/i,/^\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621/i,/^\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621/i,/^\u0627\u0644\u062e\u0645\u064a\u0633/i,/^\u0627\u0644\u062c\u0645\u0639\u0629/i,/^\u0627\u0644\u0633\u0628\u062a/i],any:[/^\u0623\u062d/i,/^\u0627\u062b/i,/^\u062b/i,/^\u0623\u0631/i,/^\u062e/i,/^\u062c/i,/^\u0633/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},80779:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(6990)),r=d(n(16954)),o=d(n(72970)),i=d(n(63798)),u=d(n(10138));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"ar-DZ",formatDistance:a.default,formatLong:r.default,formatRelative:o.default,localize:i.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=df-1.014443c0.chunk.js.map