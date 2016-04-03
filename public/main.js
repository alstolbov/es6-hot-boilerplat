/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _BuilDom = __webpack_require__(5);
	
	var _BuilDom2 = _interopRequireDefault(_BuilDom);
	
	var _options = __webpack_require__(6);
	
	var _options2 = _interopRequireDefault(_options);
	
	var _store = __webpack_require__(7);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _mainGameScreen = __webpack_require__(8);
	
	var _mainGameScreen2 = _interopRequireDefault(_mainGameScreen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rootNode = _BuilDom2.default.$(_options2.default.rootNode);
	rootNode.style.width = _options2.default.gameSize.w + 'px';
	rootNode.style.height = _options2.default.gameSize.h + 'px';
	
	_store2.default.level = 0;
	
	var app = new _mainGameScreen2.default();
	app.create();

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _arguments = arguments;
	var BuilDom = {};
	BuilDom.createElement = function (tag, _options, _content) {
	  var node = document.createElement(tag);
	  var options = undefined;
	  var content = undefined;
	  var tmp = undefined;
	
	  if (_arguments[2]) {
	    options = _options;
	    content = _content;
	  } else {
	    options = {};
	    content = _options;
	  }
	
	  if (options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) == 'object') {
	    for (var ind in options) {
	      switch (ind) {
	        case 'onclick':
	          node.onclick = options[ind];
	          break;
	        default:
	          switch (_typeof(options[ind])) {
	            case 'string':
	              node.setAttribute(ind, options[ind]);
	              break;
	            case 'object':
	              if (!options[ind].length) {
	                tmp = '';
	                for (var stls in options[ind]) {
	                  tmp += stls + ':' + options[ind][stls] + ';';
	                }
	              }
	              node.setAttribute(ind, tmp);
	              break;
	            default:
	              break;
	          }
	      }
	    }
	  }
	
	  if (content) {
	    switch (typeof content === 'undefined' ? 'undefined' : _typeof(content)) {
	      case 'string':
	        node.innerHTML = content;
	        break;
	      case 'object':
	        if (content.length !== 0) {
	          if (!content.length) {
	            node.appendChild(content);
	          } else {
	            content.forEach(function (item) {
	              node.appendChild(item);
	            });
	          }
	        }
	        break;
	      default:
	        break;
	    }
	  }
	  return node;
	};
	
	BuilDom.mountElement = function (rootNode, node) {
	  rootNode.appendChild(node);
	};
	
	BuilDom.$ = function (selector) {
	  var key = selector[0];
	  var OBJ = undefined;
	  switch (key) {
	    case '#':
	      OBJ = document.getElementById(selector.slice(1));break;
	    case '.':
	      OBJ = document.querySelector(selector);break;
	    case '@':
	      OBJ = document.getElementsByName(selector.slice(1));break;
	    case '=':
	      OBJ = document.getElementsByTagName(selector.slice(1));break;
	    case '?':
	      OBJ = document.querySelectorAll(selector);break;
	  }
	  return OBJ;
	};
	
	exports.default = BuilDom;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var markerY = 340;
	
	exports.default = {
	  rootNode: '#game',
	  gameSize: {
	    w: 800,
	    h: 600
	  },
	  markers: [{
	    name: 'red',
	    x: 10,
	    y: markerY,
	    bgPos: 0
	  }, {
	    name: 'orange',
	    x: 40,
	    y: markerY,
	    bgPos: 50
	  }, {
	    name: 'yellow',
	    x: 70,
	    y: markerY,
	    bgPos: 100
	  }, {
	    name: 'green',
	    x: 70,
	    y: markerY,
	    bgPos: 150
	  }, {
	    name: 'blue',
	    x: 70,
	    y: markerY,
	    bgPos: 200
	  }, {
	    name: 'purtle',
	    x: 70,
	    y: markerY,
	    bgPos: 150
	  }, {
	    name: 'black',
	    x: 70,
	    y: markerY,
	    bgPos: 300
	  }],
	  mixRules: [{
	    need: ['red', 'green'],
	    res: 'blue'
	  }],
	  speed: 20
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  objects: {},
	  click: {
	    activeFirst: false,
	    activeSecond: false
	  },
	  paused: false
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BuilDom = __webpack_require__(5);
	
	var _BuilDom2 = _interopRequireDefault(_BuilDom);
	
	var _options = __webpack_require__(6);
	
	var _options2 = _interopRequireDefault(_options);
	
	var _Levels = __webpack_require__(9);
	
	var _Levels2 = _interopRequireDefault(_Levels);
	
	var _store = __webpack_require__(7);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _Place = __webpack_require__(11);
	
	var _Place2 = _interopRequireDefault(_Place);
	
	var _Marker = __webpack_require__(14);
	
	var _Marker2 = _interopRequireDefault(_Marker);
	
	var _utils = __webpack_require__(12);
	
	var Utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var rootNode = _BuilDom2.default.$(_options2.default.rootNode);
	var Offset = Utils.offset(rootNode);
	
	var MainGameScreen = function () {
	  function MainGameScreen() {
	    _classCallCheck(this, MainGameScreen);
	  }
	
	  _createClass(MainGameScreen, [{
	    key: 'create',
	    value: function create() {
	      var Level = _Levels2.default[_store2.default.level];
	      var DOMFragm = document.createDocumentFragment();
	
	      _BuilDom2.default.mountElement(rootNode, _BuilDom2.default.createElement('div', {
	        class: 'ramka area',
	        style: {
	          width: _options2.default.gameSize.w + 'px',
	          height: _options2.default.gameSize.h + 'px',
	          'margin': '-4px 0 0 -4px',
	          // 'background-image': 'url("img/bg-paper.png")'
	          border: '4px solid #444',
	          'border-radius': '10px',
	          'background-image': 'url("img/bg-paper.png")'
	        }
	      }));
	
	      _BuilDom2.default.mountElement(rootNode, _BuilDom2.default.createElement('style', {
	        type: "text/css"
	      }, Utils.addLevelStyles(Level.classes || {})));
	
	      _store2.default.objects.Place = {};
	      Level.objects.places.forEach(function (item, iter) {
	        var place = new _Place2.default({
	          data: item,
	          id: iter
	        });
	        DOMFragm.appendChild(place.create());
	        _store2.default.objects.Place[place.name || 'Place_' + iter] = place;
	      });
	
	      _store2.default.objects.Marker = {};
	      _options2.default.markers.forEach(function (item, iter) {
	        var marker = new _Marker2.default({
	          data: item,
	          id: iter,
	          isVisible: Level.objects.markers.indexOf(item.name) + 1
	        });
	        DOMFragm.appendChild(marker.create());
	        _store2.default.objects.Marker[marker.name] = marker;
	      });
	
	      var ItemArea = _BuilDom2.default.createElement('div', {
	        class: 'itemArea area',
	        style: {
	          width: _options2.default.gameSize.w + 'px',
	          height: _options2.default.gameSize.h + 'px'
	        }
	      }, DOMFragm);
	      _BuilDom2.default.mountElement(rootNode, ItemArea);
	    }
	  }]);
	
	  return MainGameScreen;
	}();
	
	exports.default = MainGameScreen;
	;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _level = __webpack_require__(10);
	
	var _level2 = _interopRequireDefault(_level);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = [_level2.default];

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function checkClouds(Store) {
	  var countCloud = 0;
	  var countColorizedCloud = 0;
	  Object.keys(Store.objects.Place).forEach(function (key) {
	    var item = Store.objects.Place[key];
	    var itemProps = item.getParams();
	    if (itemProps.group == "clouds") {
	      countCloud++;
	      if (itemProps.isUsed) {
	        countColorizedCloud++;
	      }
	    }
	  });
	  if (countCloud == countColorizedCloud) {
	    // const ship = Store.objects.Place.ship;
	    // ship.node.className = "animatedShip";
	  }
	}
	
	function animateClouds(Store) {
	  Object.keys(Store.objects.Place).forEach(function (key) {
	    var item = Store.objects.Place[key];
	    var itemProps = item.getParams();
	    if (itemProps.group == "clouds") {
	      item.node.className = "animatedShip";
	    }
	  });
	}
	
	exports.default = {
	  id: 1,
	  needColorize: 3,
	  classes: {
	    ".animatedShip": {
	      animation: "moveclouds 8s linear infinite;",
	      "-webkit-animation": "moveclouds 8s linear infinite;"
	    },
	    "@keyframes moveclouds": {
	      "0%": "{margin-left: 300px;}",
	      "100%": "{margin-left: 0px;}"
	    },
	    "@-webkit-keyframes moveclouds": {
	      "0%": "{margin-left: 300px;}",
	      "100%": "{margin-left: 0px;}"
	    }
	  },
	  objects: {
	    markers: ['red', 'green'],
	    places: [{
	      name: 'oval',
	      x: 30,
	      y: 150,
	      w: 150,
	      h: 50,
	      needMarker: 'red',
	      img: 'oval.png',
	      clickArea: '0, 0, 150, 0, 150, 40, 0, 40',
	      onColorize: animateClouds
	    }, {
	      x: 30,
	      y: 80,
	      w: 80,
	      h: 50,
	      group: 'clouds',
	      needMarker: 'blue',
	      img: 'clouds.png',
	      clickArea: '10, 5, 75, 5, 75, 45, 10, 45',
	      onColorize: checkClouds
	    }, {
	      x: 160,
	      y: 50,
	      w: 80,
	      h: 50,
	      group: 'clouds',
	      needMarker: 'blue',
	      img: 'clouds.png',
	      clickArea: '10, 5, 75, 5, 75, 45, 10, 45',
	      onColorize: checkClouds
	    }]
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BuilDom = __webpack_require__(5);
	
	var _BuilDom2 = _interopRequireDefault(_BuilDom);
	
	var _options = __webpack_require__(6);
	
	var _options2 = _interopRequireDefault(_options);
	
	var _store = __webpack_require__(7);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _utils = __webpack_require__(12);
	
	var Utils = _interopRequireWildcard(_utils);
	
	var _common = __webpack_require__(13);
	
	var Common = _interopRequireWildcard(_common);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Type = "Place";
	
	var Place = function () {
	  function Place(props) {
	    _classCallCheck(this, Place);
	
	    this.x = props.data.x;
	    this.y = props.data.y;
	    this.id = props.id;
	    this.w = props.data.w;
	    this.h = props.data.h;
	    this.name = props.data.name || Type + "_" + props.id;
	    this.needMarker = props.data.needMarker;
	    this.onColorize = props.data.onColorize || false;
	    this.group = props.data.group || false;
	    this.clickArea = props.data.clickArea;
	    this.img = props.data.img;
	
	    this.isActive = false;
	    this.isVisible = props.data.isVisible || true;
	    this.isUsed = props.data.isUsed || false;
	  }
	
	  _createClass(Place, [{
	    key: 'create',
	    value: function create() {
	      var _this = this;
	      this.clickAreaItem = _BuilDom2.default.createElement('area', {
	        shape: "poly",
	        coords: this.clickArea
	      });
	
	      this.node = _BuilDom2.default.createElement('div', {
	        style: {
	          display: this.isVisible ? 'block' : 'none',
	
	          position: 'absolute',
	          width: this.w + 'px',
	          height: this.h + 'px',
	          // 'background-color': '#666',
	          'background-image': 'url("img/' + this.img + '")',
	          top: this.y + 'px',
	          left: this.x + 'px'
	        }
	      }, [_BuilDom2.default.createElement('img', {
	        usemap: "#place_" + this.id,
	        src: 'img/placeholder.png',
	        width: this.w + 'px',
	        height: this.h + 'px',
	        style: {
	          opacity: 0
	        }
	      }), _BuilDom2.default.createElement('map', {
	        name: "#place_" + this.id
	      }, this.clickAreaItem)]);
	
	      this.clickAreaItem.onclick = function (e) {
	        e.preventDefault;
	        _this.setActivity();
	      };
	
	      return this.node;
	    }
	  }, {
	    key: 'setActivity',
	    value: function setActivity() {
	      if (this.isVisible) {
	        var _this = this;
	
	        if (this.isActive) {
	          this.setUnactive();
	          _store2.default.click = Utils.clearClickStore();
	        } else {
	          this.setActive();
	          if (_store2.default.click.activeFirst.type == Type) {
	            _store2.default.objects[_store2.default.click.activeFirst.type][_store2.default.click.activeFirst.name].setUnactive();
	          }
	          if (!_store2.default.click.activeFirst || _store2.default.click.activeFirst.type == Type) {
	            _store2.default.click.activeFirst = {};
	            _store2.default.click.activeFirst = _this.getParams();
	          } else {
	            _store2.default.click.activeSecond = {};
	            _store2.default.click.activeSecond = _this.getParams();
	            Common.onSecondClick();
	          }
	        }
	      }
	    }
	  }, {
	    key: 'setActive',
	    value: function setActive() {
	      if (!this.isUsed) {
	        this.node.style.backgroundPosition = '0 ' + -this.h + 'px';
	      } else {
	        this.node.style.backgroundPosition = '0 ' + -this.h * 3 + 'px';
	      }
	      this.isActive = true;
	    }
	  }, {
	    key: 'setUnactive',
	    value: function setUnactive() {
	      if (!this.isUsed) {
	        this.node.style.backgroundPosition = '0 0';
	      } else {
	        this.node.style.backgroundPosition = '0 ' + -this.h * 2 + 'px';
	      }
	      this.isActive = false;
	    }
	  }, {
	    key: 'colorize',
	    value: function colorize() {
	      this.isUsed = true;
	      this.node.style.backgroundPosition = '0 ' + -this.h * 2 + 'px';
	      // this.clickAreaItem.style.cursor = "default";
	      if (this.onColorize) {
	        this.onColorize(_store2.default);
	      }
	    }
	  }, {
	    key: 'getParams',
	    value: function getParams() {
	      return {
	        type: Type,
	        id: this.id,
	        x: this.x,
	        y: this.y,
	        width: this.w,
	        height: this.h,
	        name: this.name,
	        group: this.group,
	        isActive: this.isActive,
	        isVisible: this.isVisible,
	        needMarker: this.needMarker,
	        isUsed: this.isUsed
	      };
	    }
	  }]);
	
	  return Place;
	}();
	
	exports.default = Place;
	;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getItemUnderClick = getItemUnderClick;
	exports.isCollide = isCollide;
	exports.getDirection = getDirection;
	exports.clearClickStore = clearClickStore;
	exports.offset = offset;
	exports.addLevelStyles = addLevelStyles;
	function _isCollide(rect1, rect2) {
	  var res = false;
	  if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.height + rect1.y > rect2.y) {
	    res = true;
	  }
	
	  return res;
	}
	
	function _Collider(rect1, items, exeption) {
	  var res = {};
	  Object.keys(items).forEach(function (type) {
	    Array.from(items[type]).forEach(function (item, iter) {
	      var itemParams = item.getParams();
	      var isCompare = true;
	
	      if (exeption && itemParams.id == rect1.id) {
	        isCompare = false;
	      }
	      if (isCompare && _isCollide(rect1, itemParams)) {
	        res.isCollide = true;
	        res.itemType = type;
	        res.itemId = iter;
	      }
	    });
	  });
	
	  return res;
	}
	
	function getItemUnderClick(params) {
	  var virtObj = {
	    x: params.x,
	    y: params.y,
	    width: 0,
	    height: 0
	  };
	
	  return _Collider(virtObj, params.items);
	};
	
	function isCollide(rect1, items) {
	  return _Collider(rect1, items, true);
	}
	
	function getDirection(start, end) {
	  var direct = false;
	  if (Math.abs(end.x - start.x) > Math.abs(end.y - start.y)) {
	    if (end.x - start.x > 0) {
	      direct = 'right';
	    } else {
	      direct = 'left';
	    }
	  } else {
	    if (end.y - start.y > 0) {
	      direct = 'down';
	    } else {
	      direct = 'up';
	    }
	  }
	
	  return direct;
	};
	
	function clearClickStore() {
	  return {
	    activeFirst: false,
	    activeSecond: false
	  };
	};
	
	function offset(elt) {
	  var rect = elt.getBoundingClientRect(),
	      bodyElt = document.body;
	  return {
	    top: rect.top + bodyElt.scrollTop,
	    left: rect.left + bodyElt.scrollLeft
	  };
	}
	
	function addLevelStyles(stlsObj) {
	  var resStr = "";
	  Object.keys(stlsObj).forEach(function (className) {
	    var classRules = className + "{";
	    Object.keys(stlsObj[className]).forEach(function (prop) {
	      var delim = className.indexOf("@") + 1 ? " " : ":";
	      classRules += prop + delim + stlsObj[className][prop];
	    });
	    resStr += classRules + "}";
	  });
	
	  return resStr;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.onSecondClick = onSecondClick;
	
	var _utils = __webpack_require__(12);
	
	var Utils = _interopRequireWildcard(_utils);
	
	var _options = __webpack_require__(6);
	
	var _options2 = _interopRequireDefault(_options);
	
	var _store = __webpack_require__(7);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function onTwoMarkerSelection() {
	  console.log('two markers');
	  var firstMarker = _store2.default.click.activeFirst;
	  var secMarker = _store2.default.click.activeSecond;
	  var resMarker = false;
	  _options2.default.mixRules.forEach(function (rule) {
	    if (rule.need.indexOf(firstMarker.name) + 1 && rule.need.indexOf(secMarker.name) + 1) {
	      resMarker = rule.res;
	    }
	  });
	
	  if (resMarker) {
	    var nextMarker = _store2.default.objects[firstMarker.type][resMarker];
	    var nextMarkerProps = nextMarker.getParams();
	    if (!nextMarkerProps.isVisible) {
	      nextMarker.setVisible();
	    }
	  }
	}
	
	function onMarkerAndPlaceSelection() {
	  console.log('marker+place');
	  var marker = _store2.default.click.activeFirst.type == "Marker" ? _store2.default.click.activeFirst : _store2.default.click.activeSecond;
	  var place = _store2.default.click.activeFirst.type == "Place" ? _store2.default.click.activeFirst : _store2.default.click.activeSecond;
	
	  if (marker.name == place.needMarker && !place.isUsed) {
	    _store2.default.objects[place.type][place.name].colorize();
	  }
	}
	
	function onSecondClick() {
	  setTimeout(function () {
	    var firstObj = _store2.default.objects[_store2.default.click.activeFirst.type][_store2.default.click.activeFirst.name];
	    firstObj.setUnactive();
	    var secObj = _store2.default.objects[_store2.default.click.activeSecond.type][_store2.default.click.activeSecond.name];
	    secObj.setUnactive();
	
	    if (_store2.default.click.activeFirst.type != _store2.default.click.activeSecond.type) {
	      onMarkerAndPlaceSelection();
	      _store2.default.click = Utils.clearClickStore();
	    }
	
	    if (_store2.default.click.activeFirst.type == _store2.default.click.activeSecond.type && _store2.default.click.activeFirst.type == "Marker") {
	      onTwoMarkerSelection();
	      _store2.default.click = Utils.clearClickStore();
	    }
	  }, 150);
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BuilDom = __webpack_require__(5);
	
	var _BuilDom2 = _interopRequireDefault(_BuilDom);
	
	var _options = __webpack_require__(6);
	
	var _options2 = _interopRequireDefault(_options);
	
	var _store = __webpack_require__(7);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _utils = __webpack_require__(12);
	
	var Utils = _interopRequireWildcard(_utils);
	
	var _common = __webpack_require__(13);
	
	var Common = _interopRequireWildcard(_common);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var size = {
	  w: 50,
	  h: 50
	};
	
	var Marker = function () {
	  function Marker(props) {
	    _classCallCheck(this, Marker);
	
	    this.x = props.data.x;
	    this.y = props.data.y;
	    this.id = props.id;
	    // this.color = props.data.color;
	    this.isVisible = props.isVisible ? true : false;
	    this.name = props.data.name;
	    this.isActive = false;
	  }
	
	  _createClass(Marker, [{
	    key: 'create',
	    value: function create() {
	      var _this = this;
	      this.node = _BuilDom2.default.createElement('div', {
	        style: {
	          // display: this.isVisible ? "block" : "none",
	          position: 'absolute',
	          width: size.w + 'px',
	          height: size.h + 'px',
	          'background-image': 'url("img/colors_7x3.png")',
	          'background-position': this.isVisible ? -(this.id * size.w) + 'px 0' : -(this.id * size.w) + 'px ' + -size.w * 2 + 'px',
	
	          // top: this.y + 'px',
	          // left: this.x + 'px',
	          top: 540 + 'px',
	          left: this.id * size.w + 'px',
	          // opacity: 1,
	          cursor: this.isVisible ? 'pointer' : 'default'
	        }
	      });
	
	      this.node.onclick = function () {
	        _this.setActivity();
	      };
	
	      return this.node;
	    }
	  }, {
	    key: 'setActivity',
	    value: function setActivity() {
	      if (this.isVisible) {
	        var _this = this;
	
	        if (this.isActive) {
	          this.setUnactive();
	          _store2.default.click = Utils.clearClickStore();
	        } else {
	          this.setActive();
	          if (!_store2.default.click.activeFirst) {
	            _store2.default.click.activeFirst = {};
	            _store2.default.click.activeFirst = _this.getParams();
	          } else {
	            _store2.default.click.activeSecond = {};
	            _store2.default.click.activeSecond = _this.getParams();
	            Common.onSecondClick();
	          }
	        }
	      }
	    }
	  }, {
	    key: 'setActive',
	    value: function setActive() {
	      // this.node.style.opacity = 0.5;
	      this.node.style.backgroundPosition = -(this.id * size.w) + 'px ' + -size.w + 'px';
	      this.isActive = true;
	    }
	  }, {
	    key: 'setUnactive',
	    value: function setUnactive() {
	      // this.node.style.opacity = 1;
	      this.node.style.backgroundPosition = -(this.id * size.w) + 'px 0';
	      this.isActive = false;
	    }
	  }, {
	    key: 'setVisible',
	    value: function setVisible() {
	      // this.node.style.display = "block";
	      this.node.style.backgroundPosition = -(this.id * size.w) + 'px 0';
	      this.node.style.cursor = 'pointer';
	      this.isVisible = true;
	    }
	  }, {
	    key: 'getParams',
	    value: function getParams() {
	      return {
	        type: 'Marker',
	        id: this.id,
	        name: this.name,
	        x: this.x,
	        y: this.y,
	        width: size.w,
	        height: size.h,
	        isVisible: this.isVisible,
	        isActive: this.isActive
	      };
	    }
	  }]);
	
	  return Marker;
	}();
	
	exports.default = Marker;
	;

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map