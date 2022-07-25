"use strict";(self.webpackChunkherolo_weather_react2=self.webpackChunkherolo_weather_react2||[]).push([[1096],{35063:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth,n=t.formats[a]||t.formats[t.defaultWidth];return n}},t.exports=e.default},64028:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var n;if("formatting"===(null!==a&&void 0!==a&&a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=null!==a&&void 0!==a&&a.width?String(a.width):i;n=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,r=null!==a&&void 0!==a&&a.width?String(a.width):t.defaultWidth;n=t.values[r]||t.values[u]}return n[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},27758:function(t,e){function a(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}function n(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.width,u=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],r=e.match(u);if(!r)return null;var d,l=r[0],f=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(f)?n(f,(function(t){return t.test(l)})):a(f,(function(t){return t.test(l)}));d=t.valueCallback?t.valueCallback(c):c,d=i.valueCallback?i.valueCallback(d):d;var s=e.slice(l.length);return{value:d,rest:s}}},t.exports=e.default},35568:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(t.matchPattern);if(!n)return null;var i=n[0],o=e.match(t.parsePattern);if(!o)return null;var u=t.valueCallback?t.valueCallback(o[0]):o[0];u=a.valueCallback?a.valueCallback(u):u;var r=e.slice(i.length);return{value:u,rest:r}}},t.exports=e.default},80825:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lessThanXSeconds:{one:{default:"\u0b92\u0bb0\u0bc1 \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0bc1 \u0b95\u0bc1\u0bb1\u0bc8\u0bb5\u0bbe\u0b95",in:"\u0b92\u0bb0\u0bc1 \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bb3\u0bcd",ago:"\u0b92\u0bb0\u0bc1 \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0b95\u0bc1\u0bb1\u0bc8\u0bb5\u0bbe\u0b95",in:"{{count}} \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0bb3\u0bcd",ago:"{{count}} \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},xSeconds:{one:{default:"1 \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf",in:"1 \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0baf\u0bbf\u0bb2\u0bcd",ago:"1 \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",in:"{{count}} \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},halfAMinute:{default:"\u0b85\u0bb0\u0bc8 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd",in:"\u0b85\u0bb0\u0bc8 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"\u0b85\u0bb0\u0bc8 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},lessThanXMinutes:{one:{default:"\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bc8\u0bb5\u0bbe\u0b95",in:"\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1\u0bb3\u0bcd",ago:"\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bc8\u0bb5\u0bbe\u0b95",in:"{{count}} \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0bb3\u0bcd",ago:"{{count}} \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},xMinutes:{one:{default:"1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd",in:"1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd",in:"{{count}} \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},aboutXHours:{one:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd"}},xHours:{one:{default:"1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",in:"1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",in:"{{count}} \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},xDays:{one:{default:"1 \u0ba8\u0bbe\u0bb3\u0bcd",in:"1 \u0ba8\u0bbe\u0bb3\u0bbf\u0bb2\u0bcd",ago:"1 \u0ba8\u0bbe\u0bb3\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd",in:"{{count}} \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},aboutXWeeks:{one:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bb5\u0bbe\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bb5\u0bbe\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bb5\u0bbe\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bb5\u0bbe\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},xWeeks:{one:{default:"1 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd",in:"1 \u0bb5\u0bbe\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"1 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0bb5\u0bbe\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bcd",in:"{{count}} \u0bb5\u0bbe\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0bb5\u0bbe\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},aboutXMonths:{one:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bae\u0bbe\u0ba4\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bae\u0bbe\u0ba4\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},xMonths:{one:{default:"1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd",in:"1 \u0bae\u0bbe\u0ba4\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd",in:"{{count}} \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},aboutXYears:{one:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0b86\u0ba3\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},xYears:{one:{default:"1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",in:"1 \u0b86\u0ba3\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd",ago:"1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd",in:"{{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},overXYears:{one:{default:"1 \u0bb5\u0bb0\u0bc1\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc7\u0bb2\u0bcd",in:"1 \u0bb5\u0bb0\u0bc1\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0bc7\u0bb2\u0bbe\u0b95",ago:"1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0bc7\u0bb2\u0bbe\u0b95",in:"{{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},almostXYears:{one:{default:"\u0b95\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bcd\u0ba4\u0b9f\u0bcd\u0b9f 1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",in:"\u0b95\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bcd\u0ba4\u0b9f\u0bcd\u0b9f 1 \u0b86\u0ba3\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd",ago:"\u0b95\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bcd\u0ba4\u0b9f\u0bcd\u0b9f 1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"\u0b95\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bcd\u0ba4\u0b9f\u0bcd\u0b9f {{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd",in:"\u0b95\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bcd\u0ba4\u0b9f\u0bcd\u0b9f {{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"\u0b95\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bcd\u0ba4\u0b9f\u0bcd\u0b9f {{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}}},n=function(t,e,n){var i=null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in":"ago":"default",o=a[t];return void 0===o.one?o[i]:1===e?o.one[i]:o.other[i].replace("{{count}}",String(e))};e.default=n,t.exports=e.default},4433:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=a(35063))&&n.__esModule?n:{default:n};var o={date:(0,i.default)({formats:{full:"EEEE, d MMMM, y",long:"d MMMM, y",medium:"d MMM, y",short:"d/M/yy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"a h:mm:ss zzzz",long:"a h:mm:ss z",medium:"a h:mm:ss",short:"a h:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=o,t.exports=e.default},95694:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lastWeek:"'\u0b95\u0b9f\u0ba8\u0bcd\u0ba4' eeee p '\u0bae\u0ba3\u0bbf\u0b95\u0bcd\u0b95\u0bc1'",yesterday:"'\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1 ' p '\u0bae\u0ba3\u0bbf\u0b95\u0bcd\u0b95\u0bc1'",today:"'\u0b87\u0ba9\u0bcd\u0bb1\u0bc1 ' p '\u0bae\u0ba3\u0bbf\u0b95\u0bcd\u0b95\u0bc1'",tomorrow:"'\u0ba8\u0bbe\u0bb3\u0bc8 ' p '\u0bae\u0ba3\u0bbf\u0b95\u0bcd\u0b95\u0bc1'",nextWeek:"eeee p '\u0bae\u0ba3\u0bbf\u0b95\u0bcd\u0b95\u0bc1'",other:"P"},n=function(t,e,n,i){return a[t]};e.default=n,t.exports=e.default},96828:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=a(64028))&&n.__esModule?n:{default:n};var o={ordinalNumber:function(t,e){return String(t)},era:(0,i.default)({values:{narrow:["\u0b95\u0bbf.\u0bae\u0bc1.","\u0b95\u0bbf.\u0baa\u0bbf."],abbreviated:["\u0b95\u0bbf.\u0bae\u0bc1.","\u0b95\u0bbf.\u0baa\u0bbf."],wide:["\u0b95\u0bbf\u0bb1\u0bbf\u0bb8\u0bcd\u0ba4\u0bc1\u0bb5\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd","\u0b85\u0ba9\u0bcd\u0ba9\u0bcb \u0b9f\u0bcb\u0bae\u0bbf\u0ba9\u0bbf"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["\u0b95\u0bbe\u0bb2\u0bbe.1","\u0b95\u0bbe\u0bb2\u0bbe.2","\u0b95\u0bbe\u0bb2\u0bbe.3","\u0b95\u0bbe\u0bb2\u0bbe.4"],wide:["\u0b92\u0ba9\u0bcd\u0bb1\u0bbe\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1","\u0b87\u0bb0\u0ba3\u0bcd\u0b9f\u0bbe\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1","\u0bae\u0bc2\u0ba9\u0bcd\u0bb1\u0bbe\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1","\u0ba8\u0bbe\u0ba9\u0bcd\u0b95\u0bbe\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:(0,i.default)({values:{narrow:["\u0b9c","\u0baa\u0bbf","\u0bae\u0bbe","\u0b8f","\u0bae\u0bc7","\u0b9c\u0bc2","\u0b9c\u0bc2","\u0b86","\u0b9a\u0bc6","\u0b85","\u0ba8","\u0b9f\u0bbf"],abbreviated:["\u0b9c\u0ba9.","\u0baa\u0bbf\u0baa\u0bcd.","\u0bae\u0bbe\u0bb0\u0bcd.","\u0b8f\u0baa\u0bcd.","\u0bae\u0bc7","\u0b9c\u0bc2\u0ba9\u0bcd","\u0b9c\u0bc2\u0bb2\u0bc8","\u0b86\u0b95.","\u0b9a\u0bc6\u0baa\u0bcd.","\u0b85\u0b95\u0bcd.","\u0ba8\u0bb5.","\u0b9f\u0bbf\u0b9a."],wide:["\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf","\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf","\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd","\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd","\u0bae\u0bc7","\u0b9c\u0bc2\u0ba9\u0bcd","\u0b9c\u0bc2\u0bb2\u0bc8","\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd","\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bcd","\u0b85\u0b95\u0bcd\u0b9f\u0bcb\u0baa\u0bb0\u0bcd","\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd","\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["\u0b9e\u0bbe","\u0ba4\u0bbf","\u0b9a\u0bc6","\u0baa\u0bc1","\u0bb5\u0bbf","\u0bb5\u0bc6","\u0b9a"],short:["\u0b9e\u0bbe","\u0ba4\u0bbf","\u0b9a\u0bc6","\u0baa\u0bc1","\u0bb5\u0bbf","\u0bb5\u0bc6","\u0b9a"],abbreviated:["\u0b9e\u0bbe\u0baf\u0bbf.","\u0ba4\u0bbf\u0b99\u0bcd.","\u0b9a\u0bc6\u0bb5\u0bcd.","\u0baa\u0bc1\u0ba4.","\u0bb5\u0bbf\u0baf\u0bbe.","\u0bb5\u0bc6\u0bb3\u0bcd.","\u0b9a\u0ba9\u0bbf"],wide:["\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1","\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd","\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd","\u0baa\u0bc1\u0ba4\u0ba9\u0bcd","\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd","\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf","\u0b9a\u0ba9\u0bbf"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"\u0bae\u0bc1.\u0baa",pm:"\u0baa\u0bbf.\u0baa",midnight:"\u0ba8\u0bb3\u0bcd.",noon:"\u0ba8\u0ba3\u0bcd.",morning:"\u0b95\u0bbe.",afternoon:"\u0bae\u0ba4\u0bbf.",evening:"\u0bae\u0bbe.",night:"\u0b87\u0bb0."},abbreviated:{am:"\u0bae\u0bc1\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",pm:"\u0baa\u0bbf\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",midnight:"\u0ba8\u0bb3\u0bcd\u0bb3\u0bbf\u0bb0\u0bb5\u0bc1",noon:"\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd",morning:"\u0b95\u0bbe\u0bb2\u0bc8",afternoon:"\u0bae\u0ba4\u0bbf\u0baf\u0bae\u0bcd",evening:"\u0bae\u0bbe\u0bb2\u0bc8",night:"\u0b87\u0bb0\u0bb5\u0bc1"},wide:{am:"\u0bae\u0bc1\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",pm:"\u0baa\u0bbf\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",midnight:"\u0ba8\u0bb3\u0bcd\u0bb3\u0bbf\u0bb0\u0bb5\u0bc1",noon:"\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd",morning:"\u0b95\u0bbe\u0bb2\u0bc8",afternoon:"\u0bae\u0ba4\u0bbf\u0baf\u0bae\u0bcd",evening:"\u0bae\u0bbe\u0bb2\u0bc8",night:"\u0b87\u0bb0\u0bb5\u0bc1"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u0bae\u0bc1.\u0baa",pm:"\u0baa\u0bbf.\u0baa",midnight:"\u0ba8\u0bb3\u0bcd.",noon:"\u0ba8\u0ba3\u0bcd.",morning:"\u0b95\u0bbe.",afternoon:"\u0bae\u0ba4\u0bbf.",evening:"\u0bae\u0bbe.",night:"\u0b87\u0bb0."},abbreviated:{am:"\u0bae\u0bc1\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",pm:"\u0baa\u0bbf\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",midnight:"\u0ba8\u0bb3\u0bcd\u0bb3\u0bbf\u0bb0\u0bb5\u0bc1",noon:"\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd",morning:"\u0b95\u0bbe\u0bb2\u0bc8",afternoon:"\u0bae\u0ba4\u0bbf\u0baf\u0bae\u0bcd",evening:"\u0bae\u0bbe\u0bb2\u0bc8",night:"\u0b87\u0bb0\u0bb5\u0bc1"},wide:{am:"\u0bae\u0bc1\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",pm:"\u0baa\u0bbf\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd",midnight:"\u0ba8\u0bb3\u0bcd\u0bb3\u0bbf\u0bb0\u0bb5\u0bc1",noon:"\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd",morning:"\u0b95\u0bbe\u0bb2\u0bc8",afternoon:"\u0bae\u0ba4\u0bbf\u0baf\u0bae\u0bcd",evening:"\u0bae\u0bbe\u0bb2\u0bc8",night:"\u0b87\u0bb0\u0bb5\u0bc1"}},defaultFormattingWidth:"wide"})};e.default=o,t.exports=e.default},43903:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a(27758));function i(t){return t&&t.__esModule?t:{default:t}}var o={ordinalNumber:(0,i(a(35568)).default)({matchPattern:/^(\d+)(\u0bb5\u0ba4\u0bc1)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(\u0b95\u0bbf.\u0bae\u0bc1.|\u0b95\u0bbf.\u0baa\u0bbf.)/i,abbreviated:/^(\u0b95\u0bbf\.?\s?\u0bae\u0bc1\.?|\u0b95\u0bbf\.?\s?\u0baa\u0bbf\.?)/,wide:/^(\u0b95\u0bbf\u0bb1\u0bbf\u0bb8\u0bcd\u0ba4\u0bc1\u0bb5\u0bc1\u0b95\u0bcd\u0b95\u0bc1\s\u0bae\u0bc1\u0ba9\u0bcd|\u0b85\u0ba9\u0bcd\u0ba9\u0bcb\s\u0b9f\u0bcb\u0bae\u0bbf\u0ba9\u0bbf)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/\u0b95\u0bbf\.?\s?\u0bae\u0bc1\.?/,/\u0b95\u0bbf\.?\s?\u0baa\u0bbf\.?/]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0b95\u0bbe\u0bb2\u0bbe.[1234]/i,wide:/^(\u0b92\u0ba9\u0bcd\u0bb1\u0bbe\u0bae\u0bcd|\u0b87\u0bb0\u0ba3\u0bcd\u0b9f\u0bbe\u0bae\u0bcd|\u0bae\u0bc2\u0ba9\u0bcd\u0bb1\u0bbe\u0bae\u0bcd|\u0ba8\u0bbe\u0ba9\u0bcd\u0b95\u0bbe\u0bae\u0bcd) \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/1/i,/2/i,/3/i,/4/i],any:[/(1|\u0b95\u0bbe\u0bb2\u0bbe.1|\u0b92\u0ba9\u0bcd\u0bb1\u0bbe\u0bae\u0bcd)/i,/(2|\u0b95\u0bbe\u0bb2\u0bbe.2|\u0b87\u0bb0\u0ba3\u0bcd\u0b9f\u0bbe\u0bae\u0bcd)/i,/(3|\u0b95\u0bbe\u0bb2\u0bbe.3|\u0bae\u0bc2\u0ba9\u0bcd\u0bb1\u0bbe\u0bae\u0bcd)/i,/(4|\u0b95\u0bbe\u0bb2\u0bbe.4|\u0ba8\u0bbe\u0ba9\u0bcd\u0b95\u0bbe\u0bae\u0bcd)/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,n.default)({matchPatterns:{narrow:/^(\u0b9c|\u0baa\u0bbf|\u0bae\u0bbe|\u0b8f|\u0bae\u0bc7|\u0b9c\u0bc2|\u0b86|\u0b9a\u0bc6|\u0b85|\u0ba8|\u0b9f\u0bbf)$/i,abbreviated:/^(\u0b9c\u0ba9.|\u0baa\u0bbf\u0baa\u0bcd.|\u0bae\u0bbe\u0bb0\u0bcd.|\u0b8f\u0baa\u0bcd.|\u0bae\u0bc7|\u0b9c\u0bc2\u0ba9\u0bcd|\u0b9c\u0bc2\u0bb2\u0bc8|\u0b86\u0b95.|\u0b9a\u0bc6\u0baa\u0bcd.|\u0b85\u0b95\u0bcd.|\u0ba8\u0bb5.|\u0b9f\u0bbf\u0b9a.)/i,wide:/^(\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf|\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf|\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd|\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd|\u0bae\u0bc7|\u0b9c\u0bc2\u0ba9\u0bcd|\u0b9c\u0bc2\u0bb2\u0bc8|\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd|\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bcd|\u0b85\u0b95\u0bcd\u0b9f\u0bcb\u0baa\u0bb0\u0bcd|\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd|\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0b9c$/i,/^\u0baa\u0bbf/i,/^\u0bae\u0bbe/i,/^\u0b8f/i,/^\u0bae\u0bc7/i,/^\u0b9c\u0bc2/i,/^\u0b9c\u0bc2/i,/^\u0b86/i,/^\u0b9a\u0bc6/i,/^\u0b85/i,/^\u0ba8/i,/^\u0b9f\u0bbf/i],any:[/^\u0b9c\u0ba9/i,/^\u0baa\u0bbf/i,/^\u0bae\u0bbe/i,/^\u0b8f/i,/^\u0bae\u0bc7/i,/^\u0b9c\u0bc2\u0ba9\u0bcd/i,/^\u0b9c\u0bc2\u0bb2\u0bc8/i,/^\u0b86/i,/^\u0b9a\u0bc6/i,/^\u0b85/i,/^\u0ba8/i,/^\u0b9f\u0bbf/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^(\u0b9e\u0bbe|\u0ba4\u0bbf|\u0b9a\u0bc6|\u0baa\u0bc1|\u0bb5\u0bbf|\u0bb5\u0bc6|\u0b9a)/i,short:/^(\u0b9e\u0bbe|\u0ba4\u0bbf|\u0b9a\u0bc6|\u0baa\u0bc1|\u0bb5\u0bbf|\u0bb5\u0bc6|\u0b9a)/i,abbreviated:/^(\u0b9e\u0bbe\u0baf\u0bbf.|\u0ba4\u0bbf\u0b99\u0bcd.|\u0b9a\u0bc6\u0bb5\u0bcd.|\u0baa\u0bc1\u0ba4.|\u0bb5\u0bbf\u0baf\u0bbe.|\u0bb5\u0bc6\u0bb3\u0bcd.|\u0b9a\u0ba9\u0bbf)/i,wide:/^(\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1|\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd|\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd|\u0baa\u0bc1\u0ba4\u0ba9\u0bcd|\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd|\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf|\u0b9a\u0ba9\u0bbf)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0b9e\u0bbe/i,/^\u0ba4\u0bbf/i,/^\u0b9a\u0bc6/i,/^\u0baa\u0bc1/i,/^\u0bb5\u0bbf/i,/^\u0bb5\u0bc6/i,/^\u0b9a/i],any:[/^\u0b9e\u0bbe/i,/^\u0ba4\u0bbf/i,/^\u0b9a\u0bc6/i,/^\u0baa\u0bc1/i,/^\u0bb5\u0bbf/i,/^\u0bb5\u0bc6/i,/^\u0b9a/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(\u0bae\u0bc1.\u0baa|\u0baa\u0bbf.\u0baa|\u0ba8\u0bb3\u0bcd|\u0ba8\u0ba3\u0bcd|\u0b95\u0bbe\u0bb2\u0bc8|\u0bae\u0ba4\u0bbf\u0baf\u0bae\u0bcd|\u0bae\u0bbe\u0bb2\u0bc8|\u0b87\u0bb0\u0bb5\u0bc1)/i,any:/^(\u0bae\u0bc1.\u0baa|\u0baa\u0bbf.\u0baa|\u0bae\u0bc1\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0baa\u0bbf\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0ba8\u0bb3\u0bcd\u0bb3\u0bbf\u0bb0\u0bb5\u0bc1|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b95\u0bbe\u0bb2\u0bc8|\u0bae\u0ba4\u0bbf\u0baf\u0bae\u0bcd|\u0bae\u0bbe\u0bb2\u0bc8|\u0b87\u0bb0\u0bb5\u0bc1)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u0bae\u0bc1/i,pm:/^\u0baa\u0bbf/i,midnight:/^\u0ba8\u0bb3\u0bcd/i,noon:/^\u0ba8\u0ba3\u0bcd/i,morning:/\u0b95\u0bbe\u0bb2\u0bc8/i,afternoon:/\u0bae\u0ba4\u0bbf\u0baf\u0bae\u0bcd/i,evening:/\u0bae\u0bbe\u0bb2\u0bc8/i,night:/\u0b87\u0bb0\u0bb5\u0bc1/i}},defaultParseWidth:"any"})};e.default=o,t.exports=e.default},84588:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=d(a(80825)),i=d(a(4433)),o=d(a(95694)),u=d(a(96828)),r=d(a(43903));function d(t){return t&&t.__esModule?t:{default:t}}var l={code:"ta",formatDistance:n.default,formatLong:i.default,formatRelative:o.default,localize:u.default,match:r.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};e.default=l,t.exports=e.default}}]);
//# sourceMappingURL=df-81.7c64a045.chunk.js.map