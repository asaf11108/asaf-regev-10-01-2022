"use strict";(self.webpackChunkherolo_weather_react2=self.webpackChunkherolo_weather_react2||[]).push([[8453],{9295:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultOptions=function(){return a},t.setDefaultOptions=function(e){a=e};var a={}},91520:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){(0,n.default)(2,arguments);var u=(0,r.default)(e,a),o=(0,r.default)(t,a);return u.getTime()===o.getTime()};var n=u(a(99670)),r=u(a(75577));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},99670:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},75577:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a,i,l,d,f,s,c,v;(0,r.default)(1,arguments);var h=(0,o.getDefaultOptions)(),p=(0,u.default)(null!==(a=null!==(i=null!==(l=null!==(d=null===t||void 0===t?void 0:t.weekStartsOn)&&void 0!==d?d:null===t||void 0===t||null===(f=t.locale)||void 0===f||null===(s=f.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==l?l:h.weekStartsOn)&&void 0!==i?i:null===(c=h.locale)||void 0===c||null===(v=c.options)||void 0===v?void 0:v.weekStartsOn)&&void 0!==a?a:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=(0,n.default)(e),y=m.getUTCDay(),b=(y<p?7:0)+y-p;return m.setUTCDate(m.getUTCDate()-b),m.setUTCHours(0,0,0,0),m};var n=i(a(20969)),r=i(a(99670)),u=i(a(74934)),o=a(9295);function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},74934:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},35063:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}},e.exports=t.default},64028:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!==a&&void 0!==a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,u=null!==a&&void 0!==a&&a.width?String(a.width):r;n=e.formattingValues[u]||e.formattingValues[r]}else{var o=e.defaultWidth,i=null!==a&&void 0!==a&&a.width?String(a.width):e.defaultWidth;n=e.values[i]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},27758:function(e,t){function a(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function n(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=r.width,o=u&&e.matchPatterns[u]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;var l,d=i[0],f=u&&e.parsePatterns[u]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(f)?n(f,(function(e){return e.test(d)})):a(f,(function(e){return e.test(d)}));l=e.valueCallback?e.valueCallback(s):s,l=r.valueCallback?r.valueCallback(l):l;var c=t.slice(d.length);return{value:l,rest:c}}},e.exports=t.default},35568:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],u=t.match(e.parsePattern);if(!u)return null;var o=e.valueCallback?e.valueCallback(u[0]):u[0];o=a.valueCallback?a.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}},e.exports=t.default},9695:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"\u043f\u043e\u043c\u0430\u043b\u043a\u0443 \u043e\u0434 \u0441\u0435\u043a\u0443\u043d\u0434\u0430",other:"\u043f\u043e\u043c\u0430\u043b\u043a\u0443 \u043e\u0434 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},xSeconds:{one:"1 \u0441\u0435\u043a\u0443\u043d\u0434\u0430",other:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},halfAMinute:"\u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0430 \u043c\u0438\u043d\u0443\u0442\u0430",lessThanXMinutes:{one:"\u043f\u043e\u043c\u0430\u043b\u043a\u0443 \u043e\u0434 \u043c\u0438\u043d\u0443\u0442\u0430",other:"\u043f\u043e\u043c\u0430\u043b\u043a\u0443 \u043e\u0434 {{count}} \u043c\u0438\u043d\u0443\u0442\u0438"},xMinutes:{one:"1 \u043c\u0438\u043d\u0443\u0442\u0430",other:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0438"},aboutXHours:{one:"\u043e\u043a\u043e\u043b\u0443 1 \u0447\u0430\u0441",other:"\u043e\u043a\u043e\u043b\u0443 {{count}} \u0447\u0430\u0441\u0430"},xHours:{one:"1 \u0447\u0430\u0441",other:"{{count}} \u0447\u0430\u0441\u0430"},xDays:{one:"1 \u0434\u0435\u043d",other:"{{count}} \u0434\u0435\u043d\u0430"},aboutXWeeks:{one:"\u043e\u043a\u043e\u043b\u0443 1 \u043d\u0435\u0434\u0435\u043b\u0430",other:"\u043e\u043a\u043e\u043b\u0443 {{count}} \u043c\u0435\u0441\u0435\u0446\u0438"},xWeeks:{one:"1 \u043d\u0435\u0434\u0435\u043b\u0430",other:"{{count}} \u043d\u0435\u0434\u0435\u043b\u0438"},aboutXMonths:{one:"\u043e\u043a\u043e\u043b\u0443 1 \u043c\u0435\u0441\u0435\u0446",other:"\u043e\u043a\u043e\u043b\u0443 {{count}} \u043d\u0435\u0434\u0435\u043b\u0438"},xMonths:{one:"1 \u043c\u0435\u0441\u0435\u0446",other:"{{count}} \u043c\u0435\u0441\u0435\u0446\u0438"},aboutXYears:{one:"\u043e\u043a\u043e\u043b\u0443 1 \u0433\u043e\u0434\u0438\u043d\u0430",other:"\u043e\u043a\u043e\u043b\u0443 {{count}} \u0433\u043e\u0434\u0438\u043d\u0438"},xYears:{one:"1 \u0433\u043e\u0434\u0438\u043d\u0430",other:"{{count}} \u0433\u043e\u0434\u0438\u043d\u0438"},overXYears:{one:"\u043f\u043e\u0432\u0435\u045c\u0435 \u043e\u0434 1 \u0433\u043e\u0434\u0438\u043d\u0430",other:"\u043f\u043e\u0432\u0435\u045c\u0435 \u043e\u0434 {{count}} \u0433\u043e\u0434\u0438\u043d\u0438"},almostXYears:{one:"\u0431\u0435\u0437\u043c\u0430\u043b\u043a\u0443 1 \u0433\u043e\u0434\u0438\u043d\u0430",other:"\u0431\u0435\u0437\u043c\u0430\u043b\u043a\u0443 {{count}} \u0433\u043e\u0434\u0438\u043d\u0438"}},n=function(e,t,n){var r,u=a[e];return r="string"===typeof u?u:1===t?u.one:u.other.replace("{{count}}",String(t)),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"\u0437\u0430 "+r:"\u043f\u0440\u0435\u0434 "+r:r};t.default=n,e.exports=t.default},55109:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(35063))&&n.__esModule?n:{default:n};var u={date:(0,r.default)({formats:{full:"EEEE, dd MMMM yyyy",long:"dd MMMM yyyy",medium:"dd MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{any:"{{date}} {{time}}"},defaultWidth:"any"})};t.default=u,e.exports=t.default},80269:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(91520))&&n.__esModule?n:{default:n};var u=["\u043d\u0435\u0434\u0435\u043b\u0430","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a","\u043f\u0435\u0442\u043e\u043a","\u0441\u0430\u0431\u043e\u0442\u0430"];function o(e){var t=u[e];switch(e){case 0:case 3:case 6:return"'\u043e\u0432\u0430 "+t+" \u0432o' p";case 1:case 2:case 4:case 5:return"'\u043e\u0432\u043e\u0458 "+t+" \u0432o' p"}}var i={lastWeek:function(e,t,a){var n=e.getUTCDay();return(0,r.default)(e,t,a)?o(n):function(e){var t=u[e];switch(e){case 0:case 3:case 6:return"'\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430 "+t+" \u0432\u043e' p";case 1:case 2:case 4:case 5:return"'\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442 "+t+" \u0432\u043e' p"}}(n)},yesterday:"'\u0432\u0447\u0435\u0440\u0430 \u0432\u043e' p",today:"'\u0434\u0435\u043d\u0435\u0441 \u0432\u043e' p",tomorrow:"'\u0443\u0442\u0440\u0435 \u0432\u043e' p",nextWeek:function(e,t,a){var n=e.getUTCDay();return(0,r.default)(e,t,a)?o(n):function(e){var t=u[e];switch(e){case 0:case 3:case 6:return"'\u0441\u043b\u0435\u0434\u043d\u0430\u0442\u0430 "+t+" \u0432o' p";case 1:case 2:case 4:case 5:return"'\u0441\u043b\u0435\u0434\u043d\u0438\u043e\u0442 "+t+" \u0432o' p"}}(n)},other:"P"},l=function(e,t,a,n){var r=i[e];return"function"===typeof r?r(t,a,n):r};t.default=l,e.exports=t.default},11003:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(64028))&&n.__esModule?n:{default:n};var u={ordinalNumber:function(e,t){var a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"-\u0432\u0438";case 2:return a+"-\u0440\u0438";case 7:case 8:return a+"-\u043c\u0438"}return a+"-\u0442\u0438"},era:(0,r.default)({values:{narrow:["\u043f\u0440.\u043d.\u0435.","\u043d.\u0435."],abbreviated:["\u043f\u0440\u0435\u0434 \u043d. \u0435.","\u043d. \u0435."],wide:["\u043f\u0440\u0435\u0434 \u043d\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430","\u043d\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u0432\u0438 \u043a\u0432.","2-\u0440\u0438 \u043a\u0432.","3-\u0442\u0438 \u043a\u0432.","4-\u0442\u0438 \u043a\u0432."],wide:["1-\u0432\u0438 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0440\u0438 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0442\u0438 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u0442\u0438 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{abbreviated:["\u0458\u0430\u043d","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0458","\u0458\u0443\u043d","\u0458\u0443\u043b","\u0430\u0432\u0433","\u0441\u0435\u043f\u0442","\u043e\u043a\u0442","\u043d\u043e\u0435\u043c","\u0434\u0435\u043a"],wide:["\u0458\u0430\u043d\u0443\u0430\u0440\u0438","\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0438\u043b","\u043c\u0430\u0458","\u0458\u0443\u043d\u0438","\u0458\u0443\u043b\u0438","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438","\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438","\u043d\u043e\u0435\u043c\u0432\u0440\u0438","\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["\u041d","\u041f","\u0412","\u0421","\u0427","\u041f","\u0421"],short:["\u043d\u0435","\u043f\u043e","\u0432\u0442","\u0441\u0440","\u0447\u0435","\u043f\u0435","\u0441\u0430"],abbreviated:["\u043d\u0435\u0434","\u043f\u043e\u043d","\u0432\u0442\u043e","\u0441\u0440\u0435","\u0447\u0435\u0442","\u043f\u0435\u0442","\u0441\u0430\u0431"],wide:["\u043d\u0435\u0434\u0435\u043b\u0430","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a","\u043f\u0435\u0442\u043e\u043a","\u0441\u0430\u0431\u043e\u0442\u0430"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{wide:{am:"\u043f\u0440\u0435\u0442\u043f\u043b\u0430\u0434\u043d\u0435",pm:"\u043f\u043e\u043f\u043b\u0430\u0434\u043d\u0435",midnight:"\u043f\u043e\u043b\u043d\u043e\u045c",noon:"\u043d\u0430\u043f\u043b\u0430\u0434\u043d\u0435",morning:"\u043d\u0430\u0443\u0442\u0440\u043e",afternoon:"\u043f\u043e\u043f\u043b\u0430\u0434\u043d\u0435",evening:"\u043d\u0430\u0432\u0435\u0447\u0435\u0440",night:"\u043d\u043e\u045c\u0435"}},defaultWidth:"wide"})};t.default=u,e.exports=t.default},16739:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(27758));function r(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,r(a(35568)).default)({matchPattern:/^(\d+)(-?[\u0432\u0440\u043c\u0442][\u0438])?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^((\u043f\u0440)?\u043d\.?\s?\u0435\.?)/i,abbreviated:/^((\u043f\u0440)?\u043d\.?\s?\u0435\.?)/i,wide:/^(\u043f\u0440\u0435\u0434 \u043d\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430|\u043d\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u043f/i,/^\u043d/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[\u0432\u0440\u0442]?\u0438?)? \u043a\u0432.?/i,wide:/^[1234](-?[\u0432\u0440\u0442]?\u0438?)? \u043a\u0432\u0430\u0440\u0442\u0430\u043b/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{abbreviated:/^(\u0458\u0430\u043d|\u0444\u0435\u0432|\u043c\u0430\u0440|\u0430\u043f\u0440|\u043c\u0430\u0458|\u0458\u0443\u043d|\u0458\u0443\u043b|\u0430\u0432\u0433|\u0441\u0435\u043f|\u043e\u043a\u0442|\u043d\u043e\u0435\u043c|\u0434\u0435\u043a)/i,wide:/^(\u0458\u0430\u043d\u0443\u0430\u0440\u0438|\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438|\u043c\u0430\u0440\u0442|\u0430\u043f\u0440\u0438\u043b|\u043c\u0430\u0458|\u0458\u0443\u043d\u0438|\u0458\u0443\u043b\u0438|\u0430\u0432\u0433\u0443\u0441\u0442|\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438|\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438|\u043d\u043e\u0435\u043c\u0432\u0440\u0438|\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0458\u0430/i,/^\u0424/i,/^\u043c\u0430\u0440/i,/^\u0430\u043f/i,/^\u043c\u0430\u0458/i,/^\u0458\u0443\u043d/i,/^\u0458\u0443\u043b/i,/^\u0430\u0432/i,/^\u0441\u0435/i,/^\u043e\u043a\u0442/i,/^\u043d\u043e/i,/^\u0434\u0435/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[\u043d\u043f\u0432\u0441\u0447]/i,short:/^(\u043d\u0435|\u043f\u043e|\u0432\u0442|\u0441\u0440|\u0447\u0435|\u043f\u0435|\u0441\u0430)/i,abbreviated:/^(\u043d\u0435\u0434|\u043f\u043e\u043d|\u0432\u0442\u043e|\u0441\u0440\u0435|\u0447\u0435\u0442|\u043f\u0435\u0442|\u0441\u0430\u0431)/i,wide:/^(\u043d\u0435\u0434\u0435\u043b\u0430|\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a|\u0432\u0442\u043e\u0440\u043d\u0438\u043a|\u0441\u0440\u0435\u0434\u0430|\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a|\u043f\u0435\u0442\u043e\u043a|\u0441\u0430\u0431\u043e\u0442\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u043d/i,/^\u043f/i,/^\u0432/i,/^\u0441/i,/^\u0447/i,/^\u043f/i,/^\u0441/i],any:[/^\u043d[\u0435\u0434]/i,/^\u043f[\u043e\u043d]/i,/^\u0432\u0442/i,/^\u0441\u0440/i,/^\u0447[\u0435\u0442]/i,/^\u043f[\u0435\u0442]/i,/^\u0441[\u0430\u0431]/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{any:/^(\u043f\u0440\u0435\u0442\u043f|\u043f\u043e\u043f\u043b|\u043f\u043e\u043b\u043d\u043e\u045c|\u0443\u0442\u0440\u043e|\u043f\u043b\u0430\u0434\u043d\u0435|\u0432\u0435\u0447\u0435\u0440|\u043d\u043e\u045c)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/\u043f\u0440\u0435\u0442\u043f\u043b\u0430\u0434\u043d\u0435/i,pm:/\u043f\u043e\u043f\u043b\u0430\u0434\u043d\u0435/i,midnight:/\u043f\u043e\u043b\u043d\u043e\u045c/i,noon:/\u043d\u0430\u043f\u043b\u0430\u0434\u043d\u0435/i,morning:/\u043d\u0430\u0443\u0442\u0440\u043e/i,afternoon:/\u043f\u043e\u043f\u043b\u0430\u0434\u043d\u0435/i,evening:/\u043d\u0430\u0432\u0435\u0447\u0435\u0440/i,night:/\u043d\u043e\u045c\u0435/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},76751:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(9695)),r=l(a(55109)),u=l(a(80269)),o=l(a(11003)),i=l(a(16739));function l(e){return e&&e.__esModule?e:{default:e}}var d={code:"mk",formatDistance:n.default,formatLong:r.default,formatRelative:u.default,localize:o.default,match:i.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=d,e.exports=t.default},20969:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,r.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))};var n,r=(n=a(99670))&&n.__esModule?n:{default:n};e.exports=t.default}}]);
//# sourceMappingURL=df-61.a5cade29.chunk.js.map