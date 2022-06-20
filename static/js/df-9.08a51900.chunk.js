"use strict";(self.webpackChunkherolo_weather_react2=self.webpackChunkherolo_weather_react2||[]).push([[1375],{91520:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){(0,r.default)(2,arguments);var u=(0,n.default)(e,a),o=(0,n.default)(t,a);return u.getTime()===o.getTime()};var r=u(a(99670)),n=u(a(75577));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},99670:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},75577:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(1,arguments);var a=t||{},o=a.locale,i=o&&o.options&&o.options.weekStartsOn,l=null==i?0:(0,u.default)(i),d=null==a.weekStartsOn?l:(0,u.default)(a.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=(0,r.default)(e),s=f.getUTCDay(),c=(s<d?7:0)+s-d;return f.setUTCDate(f.getUTCDate()-c),f.setUTCHours(0,0,0,0),f};var r=o(a(20969)),n=o(a(99670)),u=o(a(74934));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},74934:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},35063:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,r=e.formats[a]||e.formats[e.defaultWidth];return r}},e.exports=t.default},64028:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,o=n.width?String(n.width):u;r=e.formattingValues[o]||e.formattingValues[u]}else{var i=e.defaultWidth,l=n.width?String(n.width):e.defaultWidth;r=e.values[l]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},27758:function(e,t){function a(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function r(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=n.width,o=u&&e.matchPatterns[u]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;var l,d=i[0],f=u&&e.parsePatterns[u]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(f)?r(f,(function(e){return e.test(d)})):a(f,(function(e){return e.test(d)}));l=e.valueCallback?e.valueCallback(s):s,l=n.valueCallback?n.valueCallback(l):l;var c=t.slice(d.length);return{value:l,rest:c}}},e.exports=t.default},35568:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var n=r[0],u=t.match(e.parsePattern);if(!u)return null;var o=e.valueCallback?e.valueCallback(u[0]):u[0];o=a.valueCallback?a.valueCallback(o):o;var i=t.slice(n.length);return{value:o,rest:i}}},e.exports=t.default},42697:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"\u043f\u043e-\u043c\u0430\u043b\u043a\u043e \u043e\u0442 \u0441\u0435\u043a\u0443\u043d\u0434\u0430",other:"\u043f\u043e-\u043c\u0430\u043b\u043a\u043e \u043e\u0442 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},xSeconds:{one:"1 \u0441\u0435\u043a\u0443\u043d\u0434\u0430",other:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},halfAMinute:"\u043f\u043e\u043b\u043e\u0432\u0438\u043d \u043c\u0438\u043d\u0443\u0442\u0430",lessThanXMinutes:{one:"\u043f\u043e-\u043c\u0430\u043b\u043a\u043e \u043e\u0442 \u043c\u0438\u043d\u0443\u0442\u0430",other:"\u043f\u043e-\u043c\u0430\u043b\u043a\u043e \u043e\u0442 {{count}} \u043c\u0438\u043d\u0443\u0442\u0438"},xMinutes:{one:"1 \u043c\u0438\u043d\u0443\u0442\u0430",other:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0438"},aboutXHours:{one:"\u043e\u043a\u043e\u043b\u043e \u0447\u0430\u0441",other:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0447\u0430\u0441\u0430"},xHours:{one:"1 \u0447\u0430\u0441",other:"{{count}} \u0447\u0430\u0441\u0430"},xDays:{one:"1 \u0434\u0435\u043d",other:"{{count}} \u0434\u043d\u0438"},aboutXWeeks:{one:"\u043e\u043a\u043e\u043b\u043e \u0441\u0435\u0434\u043c\u0438\u0446\u0430",other:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0441\u0435\u0434\u043c\u0438\u0446\u0438"},xWeeks:{one:"1 \u0441\u0435\u0434\u043c\u0438\u0446\u0430",other:"{{count}} \u0441\u0435\u0434\u043c\u0438\u0446\u0438"},aboutXMonths:{one:"\u043e\u043a\u043e\u043b\u043e \u043c\u0435\u0441\u0435\u0446",other:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043c\u0435\u0441\u0435\u0446\u0430"},xMonths:{one:"1 \u043c\u0435\u0441\u0435\u0446",other:"{{count}} \u043c\u0435\u0441\u0435\u0446\u0430"},aboutXYears:{one:"\u043e\u043a\u043e\u043b\u043e \u0433\u043e\u0434\u0438\u043d\u0430",other:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0438"},xYears:{one:"1 \u0433\u043e\u0434\u0438\u043d\u0430",other:"{{count}} \u0433\u043e\u0434\u0438\u043d\u0438"},overXYears:{one:"\u043d\u0430\u0434 \u0433\u043e\u0434\u0438\u043d\u0430",other:"\u043d\u0430\u0434 {{count}} \u0433\u043e\u0434\u0438\u043d\u0438"},almostXYears:{one:"\u043f\u043e\u0447\u0442\u0438 \u0433\u043e\u0434\u0438\u043d\u0430",other:"\u043f\u043e\u0447\u0442\u0438 {{count}} \u0433\u043e\u0434\u0438\u043d\u0438"}},r=function(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=a[e];return r="string"===typeof u?u:1===t?u.one:u.other.replace("{{count}}",String(t)),n.addSuffix?n.comparison&&n.comparison>0?"\u0441\u043b\u0435\u0434 "+r:"\u043f\u0440\u0435\u0434\u0438 "+r:r};t.default=r,e.exports=t.default},60725:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(35063))&&r.__esModule?r:{default:r};var u={date:(0,n.default)({formats:{full:"EEEE, dd MMMM yyyy",long:"dd MMMM yyyy",medium:"dd MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{any:"{{date}} {{time}}"},defaultWidth:"any"})};t.default=u,e.exports=t.default},34985:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(a(20969)),n=u(a(91520));function u(e){return e&&e.__esModule?e:{default:e}}var o=["\u043d\u0435\u0434\u0435\u043b\u044f","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u044f\u0434\u0430","\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a","\u043f\u0435\u0442\u044a\u043a","\u0441\u044a\u0431\u043e\u0442\u0430"];function i(e){var t=o[e];return 2===e?"'\u0432\u044a\u0432 "+t+" \u0432' p":"'\u0432 "+t+" \u0432' p"}var l={lastWeek:function(e,t,a){var u=(0,r.default)(e),l=u.getUTCDay();return(0,n.default)(u,t,a)?i(l):function(e){var t=o[e];switch(e){case 0:case 3:case 6:return"'\u043c\u0438\u043d\u0430\u043b\u0430\u0442\u0430 "+t+" \u0432' p";case 1:case 2:case 4:case 5:return"'\u043c\u0438\u043d\u0430\u043b\u0438\u044f "+t+" \u0432' p"}}(l)},yesterday:"'\u0432\u0447\u0435\u0440\u0430 \u0432' p",today:"'\u0434\u043d\u0435\u0441 \u0432' p",tomorrow:"'\u0443\u0442\u0440\u0435 \u0432' p",nextWeek:function(e,t,a){var u=(0,r.default)(e),l=u.getUTCDay();return(0,n.default)(u,t,a)?i(l):function(e){var t=o[e];switch(e){case 0:case 3:case 6:return"'\u0441\u043b\u0435\u0434\u0432\u0430\u0449\u0430\u0442\u0430 "+t+" \u0432' p";case 1:case 2:case 4:case 5:return"'\u0441\u043b\u0435\u0434\u0432\u0430\u0449\u0438\u044f "+t+" \u0432' p"}}(l)},other:"P"},d=function(e,t,a,r){var n=l[e];return"function"===typeof n?n(t,a,r):n};t.default=d,e.exports=t.default},14145:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(64028))&&r.__esModule?r:{default:r};function u(e,t,a,r,n){var u=function(e){return"quarter"===e}(t)?n:function(e){return"year"===e||"week"===e||"minute"===e||"second"===e}(t)?r:a;return e+"-"+u}var o={ordinalNumber:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=String(t.unit),r=Number(e);if(0===r)return u(0,a,"\u0435\u0432","\u0435\u0432\u0430","\u0435\u0432\u043e");if(r%1e3===0)return u(r,a,"\u0435\u043d","\u043d\u0430","\u043d\u043e");if(r%100===0)return u(r,a,"\u0442\u0435\u043d","\u0442\u043d\u0430","\u0442\u043d\u043e");var n=r%100;if(n>20||n<10)switch(n%10){case 1:return u(r,a,"\u0432\u0438","\u0432\u0430","\u0432\u043e");case 2:return u(r,a,"\u0440\u0438","\u0440\u0430","\u0440\u043e");case 7:case 8:return u(r,a,"\u043c\u0438","\u043c\u0430","\u043c\u043e")}return u(r,a,"\u0442\u0438","\u0442\u0430","\u0442\u043e")},era:(0,n.default)({values:{narrow:["\u043f\u0440.\u043d.\u0435.","\u043d.\u0435."],abbreviated:["\u043f\u0440\u0435\u0434\u0438 \u043d. \u0435.","\u043d. \u0435."],wide:["\u043f\u0440\u0435\u0434\u0438 \u043d\u043e\u0432\u0430\u0442\u0430 \u0435\u0440\u0430","\u043d\u043e\u0432\u0430\u0442\u0430 \u0435\u0440\u0430"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u0432\u043e \u0442\u0440\u0438\u043c\u0435\u0441.","2-\u0440\u043e \u0442\u0440\u0438\u043c\u0435\u0441.","3-\u0442\u043e \u0442\u0440\u0438\u043c\u0435\u0441.","4-\u0442\u043e \u0442\u0440\u0438\u043c\u0435\u0441."],wide:["1-\u0432\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435","2-\u0440\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435","3-\u0442\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435","4-\u0442\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:{abbreviated:["\u044f\u043d\u0443","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u044e\u043d\u0438","\u044e\u043b\u0438","\u0430\u0432\u0433","\u0441\u0435\u043f","\u043e\u043a\u0442","\u043d\u043e\u0435","\u0434\u0435\u043a"],wide:["\u044f\u043d\u0443\u0430\u0440\u0438","\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0438\u043b","\u043c\u0430\u0439","\u044e\u043d\u0438","\u044e\u043b\u0438","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438","\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438","\u043d\u043e\u0435\u043c\u0432\u0440\u0438","\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["\u041d","\u041f","\u0412","\u0421","\u0427","\u041f","\u0421"],short:["\u043d\u0434","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"],abbreviated:["\u043d\u0435\u0434","\u043f\u043e\u043d","\u0432\u0442\u043e","\u0441\u0440\u044f","\u0447\u0435\u0442","\u043f\u0435\u0442","\u0441\u044a\u0431"],wide:["\u043d\u0435\u0434\u0435\u043b\u044f","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u044f\u0434\u0430","\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a","\u043f\u0435\u0442\u044a\u043a","\u0441\u044a\u0431\u043e\u0442\u0430"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{wide:{am:"\u043f\u0440\u0435\u0434\u0438 \u043e\u0431\u044f\u0434",pm:"\u0441\u043b\u0435\u0434 \u043e\u0431\u044f\u0434",midnight:"\u0432 \u043f\u043e\u043b\u0443\u043d\u043e\u0449",noon:"\u043d\u0430 \u043e\u0431\u044f\u0434",morning:"\u0441\u0443\u0442\u0440\u0438\u043d\u0442\u0430",afternoon:"\u0441\u043b\u0435\u0434\u043e\u0431\u0435\u0434",evening:"\u0432\u0435\u0447\u0435\u0440\u0442\u0430",night:"\u043f\u0440\u0435\u0437 \u043d\u043e\u0449\u0442\u0430"}},defaultWidth:"wide"})},i=o;t.default=i,e.exports=t.default},93429:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(27758));function n(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,n(a(35568)).default)({matchPattern:/^(\d+)(-?[\u0432\u0440\u043c\u0442][\u0430\u0438]|-?\u0442?(\u0435\u043d|\u043d\u0430)|-?(\u0435\u0432|\u0435\u0432\u0430))?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^((\u043f\u0440)?\u043d\.?\s?\u0435\.?)/i,abbreviated:/^((\u043f\u0440)?\u043d\.?\s?\u0435\.?)/i,wide:/^(\u043f\u0440\u0435\u0434\u0438 \u043d\u043e\u0432\u0430\u0442\u0430 \u0435\u0440\u0430|\u043d\u043e\u0432\u0430\u0442\u0430 \u0435\u0440\u0430|\u043d\u043e\u0432\u0430 \u0435\u0440\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u043f/i,/^\u043d/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[\u0432\u0440\u0442]?o?)? \u0442\u0440\u0438\u043c\u0435\u0441.?/i,wide:/^[1234](-?[\u0432\u0440\u0442]?\u043e?)? \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return Number(e)+1}}),month:(0,r.default)({matchPatterns:{abbreviated:/^(\u044f\u043d\u0443|\u0444\u0435\u0432|\u043c\u0430\u0440|\u0430\u043f\u0440|\u043c\u0430\u0439|\u044e\u043d\u0438|\u044e\u043b\u0438|\u0430\u0432\u0433|\u0441\u0435\u043f|\u043e\u043a\u0442|\u043d\u043e\u0435|\u0434\u0435\u043a)/i,wide:/^(\u044f\u043d\u0443\u0430\u0440\u0438|\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438|\u043c\u0430\u0440\u0442|\u0430\u043f\u0440\u0438\u043b|\u043c\u0430\u0439|\u044e\u043d\u0438|\u044e\u043b\u0438|\u0430\u0432\u0433\u0443\u0441\u0442|\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438|\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438|\u043d\u043e\u0435\u043c\u0432\u0440\u0438|\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u044f/i,/^\u0444/i,/^\u043c\u0430\u0440/i,/^\u0430\u043f/i,/^\u043c\u0430\u0439/i,/^\u044e\u043d/i,/^\u044e\u043b/i,/^\u0430\u0432/i,/^\u0441\u0435/i,/^\u043e\u043a\u0442/i,/^\u043d\u043e/i,/^\u0434\u0435/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[\u043d\u043f\u0432\u0441\u0447]/i,short:/^(\u043d\u0434|\u043f\u043d|\u0432\u0442|\u0441\u0440|\u0447\u0442|\u043f\u0442|\u0441\u0431)/i,abbreviated:/^(\u043d\u0435\u0434|\u043f\u043e\u043d|\u0432\u0442\u043e|\u0441\u0440\u044f|\u0447\u0435\u0442|\u043f\u0435\u0442|\u0441\u044a\u0431)/i,wide:/^(\u043d\u0435\u0434\u0435\u043b\u044f|\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a|\u0432\u0442\u043e\u0440\u043d\u0438\u043a|\u0441\u0440\u044f\u0434\u0430|\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a|\u043f\u0435\u0442\u044a\u043a|\u0441\u044a\u0431\u043e\u0442\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u043d/i,/^\u043f/i,/^\u0432/i,/^\u0441/i,/^\u0447/i,/^\u043f/i,/^\u0441/i],any:[/^\u043d[\u0435\u0434]/i,/^\u043f[\u043e\u043d]/i,/^\u0432\u0442/i,/^\u0441\u0440/i,/^\u0447[\u0435\u0442]/i,/^\u043f[\u0435\u0442]/i,/^\u0441[\u044a\u0431]/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^(\u043f\u0440\u0435\u0434\u0438 \u043e|\u0441\u043b\u0435\u0434 \u043e|\u0432 \u043f\u043e|\u043d\u0430 \u043e|\u043f\u0440\u0435\u0437|\u0432\u0435\u0447|\u0441\u0443\u0442|\u0441\u043b\u0435\u0434\u043e)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u043f\u0440\u0435\u0434\u0438 \u043e/i,pm:/^\u0441\u043b\u0435\u0434 \u043e/i,midnight:/^\u0432 \u043f\u043e\u043b/i,noon:/^\u043d\u0430 \u043e\u0431/i,morning:/^\u0441\u0443\u0442/i,afternoon:/^\u0441\u043b\u0435\u0434\u043e/i,evening:/^\u0432\u0435\u0447/i,night:/^\u043f\u0440\u0435\u0437 \u043d/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},21614:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(42697)),n=l(a(60725)),u=l(a(34985)),o=l(a(14145)),i=l(a(93429));function l(e){return e&&e.__esModule?e:{default:e}}var d={code:"bg",formatDistance:r.default,formatLong:n.default,formatRelative:u.default,localize:o.default,match:i.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=d,e.exports=t.default},20969:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var r,n=(r=a(99670))&&r.__esModule?r:{default:r};e.exports=t.default}}]);
//# sourceMappingURL=df-9.08a51900.chunk.js.map