"use strict";(self.webpackChunkherolo_weather_react2=self.webpackChunkherolo_weather_react2||[]).push([[2115],{35063:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.width?String(t.width):e.defaultWidth,a=e.formats[i]||e.formats[e.defaultWidth];return a}},e.exports=t.default},64028:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,i){var a;if("formatting"===(null!==i&&void 0!==i&&i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,n=null!==i&&void 0!==i&&i.width?String(i.width):r;a=e.formattingValues[n]||e.formattingValues[r]}else{var o=e.defaultWidth,s=null!==i&&void 0!==i&&i.width?String(i.width):e.defaultWidth;a=e.values[s]||e.values[o]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},27758:function(e,t){function i(e,t){for(var i in e)if(e.hasOwnProperty(i)&&t(e[i]))return i}function a(e,t){for(var i=0;i<e.length;i++)if(t(e[i]))return i}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.width,o=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=t.match(o);if(!s)return null;var d,u=s[0],l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],p=Array.isArray(l)?a(l,(function(e){return e.test(u)})):i(l,(function(e){return e.test(u)}));d=e.valueCallback?e.valueCallback(p):p,d=r.valueCallback?r.valueCallback(d):d;var f=t.slice(u.length);return{value:d,rest:f}}},e.exports=t.default},35568:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.match(e.matchPattern);if(!a)return null;var r=a[0],n=t.match(e.parsePattern);if(!n)return null;var o=e.valueCallback?e.valueCallback(n[0]):n[0];o=i.valueCallback?i.valueCallback(o):o;var s=t.slice(r.length);return{value:o,rest:s}}},e.exports=t.default},81410:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={xseconds_other:"sekund\u0117_sekund\u017ei\u0173_sekundes",xminutes_one:"minut\u0117_minut\u0117s_minut\u0119",xminutes_other:"minut\u0117s_minu\u010di\u0173_minutes",xhours_one:"valanda_valandos_valand\u0105",xhours_other:"valandos_valand\u0173_valandas",xdays_one:"diena_dienos_dien\u0105",xdays_other:"dienos_dien\u0173_dienas",xweeks_one:"savait\u0117_savait\u0117s_savait\u0119",xweeks_other:"savait\u0117s_savai\u010di\u0173_savaites",xmonths_one:"m\u0117nuo_m\u0117nesio_m\u0117nes\u012f",xmonths_other:"m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",xyears_one:"metai_met\u0173_metus",xyears_other:"metai_met\u0173_metus",about:"apie",over:"daugiau nei",almost:"beveik",lessthan:"ma\u017eiau nei"},a=function(e,t,i,a){return t?a?"keli\u0173 sekund\u017ei\u0173":"kelias sekundes":"kelios sekund\u0117s"},r=function(e,t,i,a){return t?a?s(i)[1]:s(i)[2]:s(i)[0]},n=function(e,t,i,a){var n=e+" ";return 1===e?n+r(0,t,i,a):t?a?n+s(i)[1]:n+(o(e)?s(i)[1]:s(i)[2]):n+(o(e)?s(i)[1]:s(i)[0])};function o(e){return e%10===0||e>10&&e<20}function s(e){return i[e].split("_")}var d={lessThanXSeconds:{one:a,other:n},xSeconds:{one:a,other:n},halfAMinute:"pus\u0117 minut\u0117s",lessThanXMinutes:{one:r,other:n},xMinutes:{one:r,other:n},aboutXHours:{one:r,other:n},xHours:{one:r,other:n},xDays:{one:r,other:n},aboutXWeeks:{one:r,other:n},xWeeks:{one:r,other:n},aboutXMonths:{one:r,other:n},xMonths:{one:r,other:n},aboutXYears:{one:r,other:n},xYears:{one:r,other:n},overXYears:{one:r,other:n},almostXYears:{one:r,other:n}},u=function(e,t,a){var r,n=e.match(/about|over|almost|lessthan/i),o=n?e.replace(n[0],""):e,s=void 0!==(null===a||void 0===a?void 0:a.comparison)&&a.comparison>0,u=d[e];if(r="string"===typeof u?u:1===t?u.one(t,!0===(null===a||void 0===a?void 0:a.addSuffix),o.toLowerCase()+"_one",s):u.other(t,!0===(null===a||void 0===a?void 0:a.addSuffix),o.toLowerCase()+"_other",s),n){var l=n[0].toLowerCase();r=i[l]+" "+r}return null!==a&&void 0!==a&&a.addSuffix?a.comparison&&a.comparison>0?"po "+r:"prie\u0161 "+r:r};t.default=u,e.exports=t.default},68306:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=i(35063))&&a.__esModule?a:{default:a};var n={date:(0,r.default)({formats:{full:"y 'm'. MMMM d 'd'., EEEE",long:"y 'm'. MMMM d 'd'.",medium:"y-MM-dd",short:"y-MM-dd"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=n,e.exports=t.default},42974:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={lastWeek:"'Pra\u0117jus\u012f' eeee p",yesterday:"'Vakar' p",today:"'\u0160iandien' p",tomorrow:"'Rytoj' p",nextWeek:"eeee p",other:"P"},a=function(e,t,a,r){return i[e]};t.default=a,e.exports=t.default},46622:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=i(64028))&&a.__esModule?a:{default:a};var n={ordinalNumber:function(e,t){return Number(e)+"-oji"},era:(0,r.default)({values:{narrow:["pr. Kr.","po Kr."],abbreviated:["pr. Kr.","po Kr."],wide:["prie\u0161 Krist\u0173","po Kristaus"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["I ketv.","II ketv.","III ketv.","IV ketv."],wide:["I ketvirtis","II ketvirtis","III ketvirtis","IV ketvirtis"]},defaultWidth:"wide",formattingValues:{narrow:["1","2","3","4"],abbreviated:["I k.","II k.","III k.","IV k."],wide:["I ketvirtis","II ketvirtis","III ketvirtis","IV ketvirtis"]},defaultFormattingWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["S","V","K","B","G","B","L","R","R","S","L","G"],abbreviated:["saus.","vas.","kov.","bal.","geg.","bir\u017e.","liep.","rugp.","rugs.","spal.","lapkr.","gruod."],wide:["sausis","vasaris","kovas","balandis","gegu\u017e\u0117","bir\u017eelis","liepa","rugpj\u016btis","rugs\u0117jis","spalis","lapkritis","gruodis"]},defaultWidth:"wide",formattingValues:{narrow:["S","V","K","B","G","B","L","R","R","S","L","G"],abbreviated:["saus.","vas.","kov.","bal.","geg.","bir\u017e.","liep.","rugp.","rugs.","spal.","lapkr.","gruod."],wide:["sausio","vasario","kovo","baland\u017eio","gegu\u017e\u0117s","bir\u017eelio","liepos","rugpj\u016b\u010dio","rugs\u0117jo","spalio","lapkri\u010dio","gruod\u017eio"]},defaultFormattingWidth:"wide"}),day:(0,r.default)({values:{narrow:["S","P","A","T","K","P","\u0160"],short:["Sk","Pr","An","Tr","Kt","Pn","\u0160t"],abbreviated:["sk","pr","an","tr","kt","pn","\u0161t"],wide:["sekmadienis","pirmadienis","antradienis","tre\u010diadienis","ketvirtadienis","penktadienis","\u0161e\u0161tadienis"]},defaultWidth:"wide",formattingValues:{narrow:["S","P","A","T","K","P","\u0160"],short:["Sk","Pr","An","Tr","Kt","Pn","\u0160t"],abbreviated:["sk","pr","an","tr","kt","pn","\u0161t"],wide:["sekmadien\u012f","pirmadien\u012f","antradien\u012f","tre\u010diadien\u012f","ketvirtadien\u012f","penktadien\u012f","\u0161e\u0161tadien\u012f"]},defaultFormattingWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"pr. p.",pm:"pop.",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"},abbreviated:{am:"prie\u0161piet",pm:"popiet",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"},wide:{am:"prie\u0161piet",pm:"popiet",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"}},defaultWidth:"wide",formattingValues:{narrow:{am:"pr. p.",pm:"pop.",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popiet\u0117",evening:"vakaras",night:"naktis"},abbreviated:{am:"prie\u0161piet",pm:"popiet",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popiet\u0117",evening:"vakaras",night:"naktis"},wide:{am:"prie\u0161piet",pm:"popiet",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popiet\u0117",evening:"vakaras",night:"naktis"}},defaultFormattingWidth:"wide"})};t.default=n,e.exports=t.default},4854:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(i(27758));function r(e){return e&&e.__esModule?e:{default:e}}var n={ordinalNumber:(0,r(i(35568)).default)({matchPattern:/^(\d+)(-oji)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,a.default)({matchPatterns:{narrow:/^p(r|o)\.?\s?(kr\.?|me)/i,abbreviated:/^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|m\u016bs\u0173 eroje)/i,wide:/^(prie\u0161 Krist\u0173|prie\u0161 m\u016bs\u0173 er\u0105|po Kristaus|m\u016bs\u0173 eroje)/i},defaultMatchWidth:"wide",parsePatterns:{wide:[/prie\u0161/i,/(po|m\u016bs\u0173)/i],any:[/^pr/i,/^(po|m)/i]},defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:{narrow:/^([1234])/i,abbreviated:/^(I|II|III|IV)\s?ketv?\.?/i,wide:/^(I|II|III|IV)\s?ketvirtis/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/1/i,/2/i,/3/i,/4/i],any:[/I$/i,/II$/i,/III/i,/IV/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,a.default)({matchPatterns:{narrow:/^[svkbglr]/i,abbreviated:/^(saus\.|vas\.|kov\.|bal\.|geg\.|bir\u017e\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i,wide:/^(sausi(s|o)|vasari(s|o)|kov(a|o)s|baland\u017e?i(s|o)|gegu\u017e\u0117s?|bir\u017eeli(s|o)|liep(a|os)|rugpj\u016b(t|\u010d)i(s|o)|rugs\u0117j(is|o)|spali(s|o)|lapkri(t|\u010d)i(s|o)|gruod\u017e?i(s|o))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^v/i,/^k/i,/^b/i,/^g/i,/^b/i,/^l/i,/^r/i,/^r/i,/^s/i,/^l/i,/^g/i],any:[/^saus/i,/^vas/i,/^kov/i,/^bal/i,/^geg/i,/^bir\u017e/i,/^liep/i,/^rugp/i,/^rugs/i,/^spal/i,/^lapkr/i,/^gruod/i]},defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:{narrow:/^[spatk\u0161]/i,short:/^(sk|pr|an|tr|kt|pn|\u0161t)/i,abbreviated:/^(sk|pr|an|tr|kt|pn|\u0161t)/i,wide:/^(sekmadien(is|\u012f)|pirmadien(is|\u012f)|antradien(is|\u012f)|tre\u010diadien(is|\u012f)|ketvirtadien(is|\u012f)|penktadien(is|\u012f)|\u0161e\u0161tadien(is|\u012f))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^p/i,/^a/i,/^t/i,/^k/i,/^p/i,/^\u0161/i],wide:[/^se/i,/^pi/i,/^an/i,/^tr/i,/^ke/i,/^pe/i,/^\u0161e/i],any:[/^sk/i,/^pr/i,/^an/i,/^tr/i,/^kt/i,/^pn/i,/^\u0161t/i]},defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:{narrow:/^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popiet\u0117)|vakaras|naktis)/i,any:/^(prie\u0161piet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popiet\u0117)|vakaras|naktis)/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^pr/i,pm:/^pop./i,midnight:/^vidurnaktis/i,noon:/^(vidurdienis|perp)/i,morning:/rytas/i,afternoon:/(die|popiet\u0117)/i,evening:/vakaras/i,night:/naktis/i},any:{am:/^pr/i,pm:/^popiet$/i,midnight:/^vidurnaktis/i,noon:/^(vidurdienis|perp)/i,morning:/rytas/i,afternoon:/(die|popiet\u0117)/i,evening:/vakaras/i,night:/naktis/i}},defaultParseWidth:"any"})};t.default=n,e.exports=t.default},54677:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(i(81410)),r=d(i(68306)),n=d(i(42974)),o=d(i(46622)),s=d(i(4854));function d(e){return e&&e.__esModule?e:{default:e}}var u={code:"lt",formatDistance:a.default,formatLong:r.default,formatRelative:n.default,localize:o.default,match:s.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=u,e.exports=t.default}}]);
//# sourceMappingURL=df-59.7af052cc.chunk.js.map