"use strict";(self.webpackChunkherolo_weather_react2=self.webpackChunkherolo_weather_react2||[]).push([[9750],{35063:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth,n=t.formats[a]||t.formats[t.defaultWidth];return n}},t.exports=e.default},64028:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var n;if("formatting"===(null!==a&&void 0!==a&&a.context?String(a.context):"standalone")&&t.formattingValues){var u=t.defaultFormattingWidth||t.defaultWidth,r=null!==a&&void 0!==a&&a.width?String(a.width):u;n=t.formattingValues[r]||t.formattingValues[u]}else{var i=t.defaultWidth,o=null!==a&&void 0!==a&&a.width?String(a.width):t.defaultWidth;n=t.values[o]||t.values[i]}return n[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},27758:function(t,e){function a(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}function n(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=u.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var d,l=o[0],f=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(f)?n(f,(function(t){return t.test(l)})):a(f,(function(t){return t.test(l)}));d=t.valueCallback?t.valueCallback(s):s,d=u.valueCallback?u.valueCallback(d):d;var c=e.slice(l.length);return{value:d,rest:c}}},t.exports=e.default},35568:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(t.matchPattern);if(!n)return null;var u=n[0],r=e.match(t.parsePattern);if(!r)return null;var i=t.valueCallback?t.valueCallback(r[0]):r[0];i=a.valueCallback?a.valueCallback(i):i;var o=e.slice(u.length);return{value:i,rest:o}}},t.exports=e.default},35693:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lessThanXSeconds:{past:"{{count}} \u10ec\u10d0\u10db\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d0\u10db\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8",future:"{{count}} \u10ec\u10d0\u10db\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10e8\u10d8"},xSeconds:{past:"{{count}} \u10ec\u10d0\u10db\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d0\u10db\u10d8",future:"{{count}} \u10ec\u10d0\u10db\u10e8\u10d8"},halfAMinute:{past:"\u10dc\u10d0\u10ee\u10d4\u10d5\u10d0\u10e0\u10d8 \u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10dc\u10d0\u10ee\u10d4\u10d5\u10d0\u10e0\u10d8 \u10ec\u10e3\u10d7\u10d8",future:"\u10dc\u10d0\u10ee\u10d4\u10d5\u10d0\u10e0\u10d8 \u10ec\u10e3\u10d7\u10e8\u10d8"},lessThanXMinutes:{past:"{{count}} \u10ec\u10e3\u10d7\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10e3\u10d7\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8",future:"{{count}} \u10ec\u10e3\u10d7\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10e8\u10d8"},xMinutes:{past:"{{count}} \u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10e3\u10d7\u10d8",future:"{{count}} \u10ec\u10e3\u10d7\u10e8\u10d8"},aboutXHours:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10e1\u10d0\u10d0\u10d7\u10d8",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10e1\u10d0\u10d0\u10d7\u10e8\u10d8"},xHours:{past:"{{count}} \u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10e1\u10d0\u10d0\u10d7\u10d8",future:"{{count}} \u10e1\u10d0\u10d0\u10d7\u10e8\u10d8"},xDays:{past:"{{count}} \u10d3\u10e6\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10d3\u10e6\u10d4",future:"{{count}} \u10d3\u10e6\u10d4\u10e8\u10d8"},aboutXWeeks:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d9\u10d5\u10d8\u10e0\u10d0",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8"},xWeeks:{past:"{{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e1 \u10d9\u10d5\u10d8\u10e0\u10d0",present:"{{count}} \u10d9\u10d5\u10d8\u10e0\u10d0",future:"{{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8"},aboutXMonths:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d7\u10d5\u10d4",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d7\u10d5\u10d4\u10e8\u10d8"},xMonths:{past:"{{count}} \u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10d7\u10d5\u10d4",future:"{{count}} \u10d7\u10d5\u10d4\u10e8\u10d8"},aboutXYears:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10ec\u10d4\u10da\u10d8",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10ec\u10d4\u10da\u10e8\u10d8"},xYears:{past:"{{count}} \u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d4\u10da\u10d8",future:"{{count}} \u10ec\u10d4\u10da\u10e8\u10d8"},overXYears:{past:"{{count}} \u10ec\u10d4\u10da\u10d6\u10d4 \u10db\u10d4\u10e2\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d4\u10da\u10d6\u10d4 \u10db\u10d4\u10e2\u10d8",future:"{{count}} \u10ec\u10d4\u10da\u10d6\u10d4 \u10db\u10d4\u10e2\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10e8\u10d4\u10db\u10d3\u10d4\u10d2"},almostXYears:{past:"\u10d7\u10d8\u10d7\u10e5\u10db\u10d8\u10e1 {{count}} \u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d7\u10d8\u10d7\u10e5\u10db\u10d8\u10e1 {{count}} \u10ec\u10d4\u10da\u10d8",future:"\u10d7\u10d8\u10d7\u10e5\u10db\u10d8\u10e1 {{count}} \u10ec\u10d4\u10da\u10e8\u10d8"}},n=function(t,e,n){var u=a[t];return"string"===typeof u?u:null!==n&&void 0!==n&&n.addSuffix&&n.comparison&&n.comparison>0?u.future.replace("{{count}}",String(e)):null!==n&&void 0!==n&&n.addSuffix?u.past.replace("{{count}}",String(e)):u.present.replace("{{count}}",String(e))};e.default=n,t.exports=e.default},51422:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,u=(n=a(35063))&&n.__esModule?n:{default:n};var r={date:(0,u.default)({formats:{full:"EEEE, do MMMM, y",long:"do, MMMM, y",medium:"d, MMM, y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,u.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,u.default)({formats:{full:"{{date}} {{time}}'-\u10d6\u10d4'",long:"{{date}} {{time}}'-\u10d6\u10d4'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=r,t.exports=e.default},334:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lastWeek:"'\u10ec\u10d8\u10dc\u10d0' eeee p'-\u10d6\u10d4'",yesterday:"'\u10d2\u10e3\u10e8\u10d8\u10dc' p'-\u10d6\u10d4'",today:"'\u10d3\u10e6\u10d4\u10e1' p'-\u10d6\u10d4'",tomorrow:"'\u10ee\u10d5\u10d0\u10da' p'-\u10d6\u10d4'",nextWeek:"'\u10e8\u10d4\u10db\u10d3\u10d4\u10d2\u10d8' eeee p'-\u10d6\u10d4'",other:"P"},n=function(t,e,n,u){return a[t]};e.default=n,t.exports=e.default},52430:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,u=(n=a(64028))&&n.__esModule?n:{default:n};var r={ordinalNumber:function(t){var e=Number(t);return 1===e?e+"-\u10da\u10d8":e+"-\u10d4"},era:(0,u.default)({values:{narrow:["\u10e9.\u10ec-\u10db\u10d3\u10d4","\u10e9.\u10ec"],abbreviated:["\u10e9\u10d5.\u10ec-\u10db\u10d3\u10d4","\u10e9\u10d5.\u10ec"],wide:["\u10e9\u10d5\u10d4\u10dc\u10e1 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d0\u10db\u10d3\u10d4","\u10e9\u10d5\u10d4\u10dc\u10d8 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d8\u10d7"]},defaultWidth:"wide"}),quarter:(0,u.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u10da\u10d8 \u10d9\u10d5","2-\u10d4 \u10d9\u10d5","3-\u10d4 \u10d9\u10d5","4-\u10d4 \u10d9\u10d5"],wide:["1-\u10da\u10d8 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8","2-\u10d4 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8","3-\u10d4 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8","4-\u10d4 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:(0,u.default)({values:{narrow:["\u10d8\u10d0","\u10d7\u10d4","\u10db\u10d0","\u10d0\u10de","\u10db\u10e1","\u10d5\u10dc","\u10d5\u10da","\u10d0\u10d2","\u10e1\u10d4","\u10dd\u10e5","\u10dc\u10dd","\u10d3\u10d4"],abbreviated:["\u10d8\u10d0\u10dc","\u10d7\u10d4\u10d1","\u10db\u10d0\u10e0","\u10d0\u10de\u10e0","\u10db\u10d0\u10d8","\u10d8\u10d5\u10dc","\u10d8\u10d5\u10da","\u10d0\u10d2\u10d5","\u10e1\u10d4\u10e5","\u10dd\u10e5\u10e2","\u10dc\u10dd\u10d4","\u10d3\u10d4\u10d9"],wide:["\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8","\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8","\u10db\u10d0\u10e0\u10e2\u10d8","\u10d0\u10de\u10e0\u10d8\u10da\u10d8","\u10db\u10d0\u10d8\u10e1\u10d8","\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8","\u10d8\u10d5\u10da\u10d8\u10e1\u10d8","\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd","\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8","\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8","\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8","\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8"]},defaultWidth:"wide"}),day:(0,u.default)({values:{narrow:["\u10d9\u10d5","\u10dd\u10e0","\u10e1\u10d0","\u10dd\u10d7","\u10ee\u10e3","\u10de\u10d0","\u10e8\u10d0"],short:["\u10d9\u10d5\u10d8","\u10dd\u10e0\u10e8","\u10e1\u10d0\u10db","\u10dd\u10d7\u10ee","\u10ee\u10e3\u10d7","\u10de\u10d0\u10e0","\u10e8\u10d0\u10d1"],abbreviated:["\u10d9\u10d5\u10d8","\u10dd\u10e0\u10e8","\u10e1\u10d0\u10db","\u10dd\u10d7\u10ee","\u10ee\u10e3\u10d7","\u10de\u10d0\u10e0","\u10e8\u10d0\u10d1"],wide:["\u10d9\u10d5\u10d8\u10e0\u10d0","\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8","\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8"]},defaultWidth:"wide"}),dayPeriod:(0,u.default)({values:{narrow:{am:"a",pm:"p",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d4",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4",morning:"\u10d3\u10d8\u10da\u10d0",afternoon:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",night:"\u10e6\u10d0\u10db\u10d4"},abbreviated:{am:"AM",pm:"PM",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d4",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4",morning:"\u10d3\u10d8\u10da\u10d0",afternoon:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",night:"\u10e6\u10d0\u10db\u10d4"},wide:{am:"a.m.",pm:"p.m.",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d4",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4",morning:"\u10d3\u10d8\u10da\u10d0",afternoon:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",night:"\u10e6\u10d0\u10db\u10d4"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d8\u10d7",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d8\u10e1\u10d0\u10e1",morning:"\u10d3\u10d8\u10da\u10d8\u10d7",afternoon:"\u10dc\u10d0\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4\u10d5\u10e1",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd\u10e1",night:"\u10e6\u10d0\u10db\u10d8\u10d7"},abbreviated:{am:"AM",pm:"PM",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d8\u10d7",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d8\u10e1\u10d0\u10e1",morning:"\u10d3\u10d8\u10da\u10d8\u10d7",afternoon:"\u10dc\u10d0\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4\u10d5\u10e1",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd\u10e1",night:"\u10e6\u10d0\u10db\u10d8\u10d7"},wide:{am:"a.m.",pm:"p.m.",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d8\u10d7",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d8\u10e1\u10d0\u10e1",morning:"\u10d3\u10d8\u10da\u10d8\u10d7",afternoon:"\u10dc\u10d0\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4\u10d5\u10e1",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd\u10e1",night:"\u10e6\u10d0\u10db\u10d8\u10d7"}},defaultFormattingWidth:"wide"})};e.default=r,t.exports=e.default},98566:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=u(a(27758));function u(t){return t&&t.__esModule?t:{default:t}}var r={ordinalNumber:(0,u(a(35568)).default)({matchPattern:/^(\d+)(-\u10da\u10d8|-\u10d4)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(\u10e9\u10d5?\.\u10ec)/i,abbreviated:/^(\u10e9\u10d5?\.\u10ec)/i,wide:/^(\u10e9\u10d5\u10d4\u10dc\u10e1 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d0\u10db\u10d3\u10d4|\u10e5\u10e0\u10d8\u10e1\u10e2\u10d4\u10e8\u10dd\u10d1\u10d0\u10db\u10d3\u10d4|\u10e9\u10d5\u10d4\u10dc\u10d8 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d8\u10d7|\u10e5\u10e0\u10d8\u10e1\u10e2\u10d4\u10e8\u10dd\u10d1\u10d8\u10d3\u10d0\u10dc)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(\u10e9\u10d5\u10d4\u10dc\u10e1 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d0\u10db\u10d3\u10d4|\u10e5\u10e0\u10d8\u10e1\u10e2\u10d4\u10e8\u10dd\u10d1\u10d0\u10db\u10d3\u10d4)/i,/^(\u10e9\u10d5\u10d4\u10dc\u10d8 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d8\u10d7|\u10e5\u10e0\u10d8\u10e1\u10e2\u10d4\u10e8\u10dd\u10d1\u10d8\u10d3\u10d0\u10dc)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]-(\u10da\u10d8|\u10d4)? \u10d9\u10d5/i,wide:/^[1234]-(\u10da\u10d8|\u10d4)? \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,n.default)({matchPatterns:{any:/^(\u10d8\u10d0|\u10d7\u10d4|\u10db\u10d0|\u10d0\u10de|\u10db\u10e1|\u10d5\u10dc|\u10d5\u10da|\u10d0\u10d2|\u10e1\u10d4|\u10dd\u10e5|\u10dc\u10dd|\u10d3\u10d4)/i},defaultMatchWidth:"any",parsePatterns:{any:[/^\u10d8\u10d0/i,/^\u10d7/i,/^\u10db\u10d0\u10e0/i,/^\u10d0\u10de/i,/^\u10db\u10d0\u10d8/i,/^\u10d8?\u10d5\u10dc/i,/^\u10d8?\u10d5\u10da/i,/^\u10d0\u10d2/i,/^\u10e1/i,/^\u10dd/i,/^\u10dc/i,/^\u10d3/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^(\u10d9\u10d5|\u10dd\u10e0|\u10e1\u10d0|\u10dd\u10d7|\u10ee\u10e3|\u10de\u10d0|\u10e8\u10d0)/i,short:/^(\u10d9\u10d5\u10d8|\u10dd\u10e0\u10e8|\u10e1\u10d0\u10db|\u10dd\u10d7\u10ee|\u10ee\u10e3\u10d7|\u10de\u10d0\u10e0|\u10e8\u10d0\u10d1)/i,wide:/^(\u10d9\u10d5\u10d8\u10e0\u10d0|\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8|\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8|\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8|\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8|\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8|\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u10d9\u10d5/i,/^\u10dd\u10e0/i,/^\u10e1\u10d0/i,/^\u10dd\u10d7/i,/^\u10ee\u10e3/i,/^\u10de\u10d0/i,/^\u10e8\u10d0/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{any:/^([ap]\.?\s?m\.?|\u10e8\u10e3\u10d0\u10e6|\u10d3\u10d8\u10da)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^\u10e8\u10e3\u10d0\u10e6/i,noon:/^\u10e8\u10e3\u10d0\u10d3\u10e6/i,morning:/^\u10d3\u10d8\u10da/i,afternoon:/\u10dc\u10d0\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4\u10d5\u10e1/i,evening:/\u10e1\u10d0\u10e6\u10d0\u10db\u10dd/i,night:/\u10e6\u10d0\u10db/i}},defaultParseWidth:"any"})};e.default=r,t.exports=e.default},32436:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=d(a(35693)),u=d(a(51422)),r=d(a(334)),i=d(a(52430)),o=d(a(98566));function d(t){return t&&t.__esModule?t:{default:t}}var l={code:"ka",formatDistance:n.default,formatLong:u.default,formatRelative:r.default,localize:i.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=l,t.exports=e.default}}]);
//# sourceMappingURL=df-53.9b686505.chunk.js.map