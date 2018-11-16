"use strict";var _chalkExt=_interopRequireDefault(require("./chalkExt"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.chalkExt=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _templateObject2(){var a=_taggedTemplateLiteral(["{"," {bold "," ",":} {"," ","}}"]);return _templateObject2=function(){return a},a}function _templateObject(){var a=_taggedTemplateLiteral(["{bold ","} ",""]);return _templateObject=function(){return a},a}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var chalkExt=_chalkExt.default;exports.chalkExt=chalkExt;var _default=new(/*#__PURE__*/function(){function a(){var b=this;_classCallCheck(this,a),_defineProperty(this,"defaults",{prefix:"{yellow [StackR23]}"}),_defineProperty(this,"debug",function(a){return b.log(a,"DEBUG","cyanBright","cyan")}),_defineProperty(this,"error",function(a){return b.log(a,"ERROR","redBright.bgBlack","red")}),_defineProperty(this,"success",function(a){return b.log(a,"SUCCESS","greenBright","green")})}return _createClass(a,[{key:"logArgs",value:function b(){var a;(a=console).log.apply(a,arguments)}},{key:"log",value:function e(a,b,c,d){this.defaults.prefix;return 1===arguments.length?(console.log(chalkExt(_templateObject(),this.defaults.prefix,a)),!0):(console.log(chalkExt(_templateObject2(),c,this.defaults.prefix,b,d,a)),!0)}}]),a}());exports.default=_default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiYUFBQSw0RCw2akNBRU8sR0FBTSxDQUFBLFFBQVEsQ0FBRyxpQkFBakIsQyx1Q0FFUSw0QkFJWCxZQUFrQixvRUFGUCxDQUFDLE1BQU0sQ0FBRSxxQkFBVCxDQUVPLCtCQW9CUixTQUFDLENBQUQsUUFBUyxDQUFBLENBQUksQ0FBQyxHQUFMLENBQVMsQ0FBVCxDQUFjLE9BQWQsQ0FBeUIsWUFBekIsQ0FBaUQsTUFBakQsQ0FBVCxDQXBCUSwrQkFxQlIsU0FBQyxDQUFELFFBQVMsQ0FBQSxDQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsQ0FBYyxPQUFkLENBQXlCLG1CQUF6QixDQUFpRCxLQUFqRCxDQUFULENBckJRLGlDQXNCUixTQUFDLENBQUQsUUFBUyxDQUFBLENBQUksQ0FBQyxHQUFMLENBQVMsQ0FBVCxDQUFjLFNBQWQsQ0FBeUIsYUFBekIsQ0FBaUQsT0FBakQsQ0FBVCxDQXRCUSxDQUFFLENBSlQsd0RBTVMsT0FDaEIsR0FBQSxPQUFPLEVBQUMsR0FBUixtQkFDSCxDQVJVLDhCQVVOLENBVk0sQ0FVRCxDQVZDLENBVVcsQ0FWWCxDQVVzQixDQVZ0QixDQVVtQyxDQUMzQixLQUFLLFFBQUwsQ0FBYyxNQURhLE9BR2pCLEVBQXJCLEdBQUEsU0FBUyxDQUFDLE1BSDRCLEVBSXRDLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixtQkFBNkIsS0FBSyxRQUFMLENBQWMsTUFBM0MsQ0FBc0QsQ0FBdEQsRUFKc0MsTUFTMUMsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLG9CQUF3QixDQUF4QixDQUEyQyxLQUFLLFFBQUwsQ0FBYyxNQUF6RCxDQUFtRSxDQUFuRSxDQUFvRixDQUFwRixDQUFtRyxDQUFuRyxFQVQwQyxJQVk3QyxDQXRCVSxTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJy4vY2hhbGtFeHQnXG5cbmV4cG9ydCBjb25zdCBjaGFsa0V4dCA9IGNoYWxrXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBjbGFzcyBMb2dnZXIge1xuXG4gICAgZGVmYXVsdHMgPSB7cHJlZml4OiAne3llbGxvdyBbU3RhY2tSMjNdfSd9XG5cbiAgICBjb25zdHJ1Y3RvcihhcmdzKSB7fVxuXG4gICAgbG9nQXJncyAoLi4ub3V0cHV0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKC4uLm91dHB1dClcbiAgICB9XG5cbiAgICBsb2cgKHN0ciwgdHlwZVByZWZpeCwgc3R5bGVUeXBlLCBzdHlsZVN0cmluZykge1xuICAgICAgICBjb25zdCBwcmVmaXggPSB0aGlzLmRlZmF1bHRzLnByZWZpeFxuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFsa0V4dGB7Ym9sZCAke3RoaXMuZGVmYXVsdHMucHJlZml4fX0gJHtzdHJ9YClcblxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrRXh0YHske3N0eWxlVHlwZX0ge2JvbGQgJHt0aGlzLmRlZmF1bHRzLnByZWZpeH0gJHt0eXBlUHJlZml4fTp9IHske3N0eWxlU3RyaW5nfSAke3N0cn19fWApXG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBkZWJ1ZyAgID0gKHN0cikgPT4gdGhpcy5sb2coc3RyLCAnREVCVUcnLCAgICdjeWFuQnJpZ2h0JywgICAgICAgICAgICdjeWFuJylcbiAgICBlcnJvciAgID0gKHN0cikgPT4gdGhpcy5sb2coc3RyLCAnRVJST1InLCAgICdyZWRCcmlnaHQuYmdCbGFjaycsICAgICdyZWQnKVxuICAgIHN1Y2Nlc3MgPSAoc3RyKSA9PiB0aGlzLmxvZyhzdHIsICdTVUNDRVNTJywgJ2dyZWVuQnJpZ2h0JywgICAgICAgICAgJ2dyZWVuJylcblxufVxuIl19