self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layouts/index.js":
/*!******************************!*\
  !*** ./src/layouts/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kaliz_dev_tantranlee_Wrapped Bitcoin ( WBTC )_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_Wrapped Bitcoin ( WBTC )_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kaliz_dev_tantranlee_Wrapped Bitcoin ( WBTC )_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_kaliz_dev_tantranlee_Wrapped Bitcoin ( WBTC )_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_Wrapped Bitcoin ( WBTC )_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/countdown */ "./src/components/countdown.js");
/* harmony import */ var _libs_format_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../libs/format-number */ "./src/libs/format-number.js");
/* harmony import */ var _components_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/connect */ "./src/components/connect.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _stores_common_slice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../stores/common-slice */ "./src/stores/common-slice.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _libs_notify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../libs/notify */ "./src/libs/notify.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "/home/kaliz/dev/tantranlee/Wrapped Bitcoin ( WBTC )/src/layouts/index.js",
    _this = undefined,
    _s = $RefreshSig$();
















var Layout = function Layout() {
  _s();

  var web3 = (0,_components_connect__WEBPACK_IMPORTED_MODULE_6__.connect)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("0.01"),
      amount = _useState[0],
      setBuyAmount = _useState[1];

  var address = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(_stores_common_slice__WEBPACK_IMPORTED_MODULE_10__.addressSelector);

  var _useCopyToClipboard = (0,react_use__WEBPACK_IMPORTED_MODULE_15__.useCopyToClipboard)(),
      _useCopyToClipboard2 = (0,_home_kaliz_dev_tantranlee_Wrapped Bitcoin ( WBTC )_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useCopyToClipboard, 2),
      _ = _useCopyToClipboard2[0],
      copyToCb = _useCopyToClipboard2[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("0x000000000000000000000000000000000000dEaD"),
      refer = _useState2[0],
      setRefer = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();

  var handleBuy = /*#__PURE__*/function () {
    var _ref = (0,_home_kaliz_dev_tantranlee_Wrapped Bitcoin ( WBTC )_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_Wrapped Bitcoin ( WBTC )_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return _home_kaliz_dev_tantranlee_Wrapped Bitcoin ( WBTC )_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return web3.buySale(refer, amount);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleBuy() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClaim = /*#__PURE__*/function () {
    var _ref2 = (0,_home_kaliz_dev_tantranlee_Wrapped Bitcoin ( WBTC )_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_Wrapped Bitcoin ( WBTC )_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      return _home_kaliz_dev_tantranlee_Wrapped Bitcoin ( WBTC )_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return web3.claimAirdrop(refer);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClaim() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleConnect = /*#__PURE__*/function () {
    var _ref3 = (0,_home_kaliz_dev_tantranlee_Wrapped Bitcoin ( WBTC )_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_Wrapped Bitcoin ( WBTC )_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      return _home_kaliz_dev_tantranlee_Wrapped Bitcoin ( WBTC )_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return web3.connect();

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleConnect() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleCopy = function handleCopy(text) {
    copyToCb(text);
    (0,_libs_notify__WEBPACK_IMPORTED_MODULE_11__.successNotify)();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    console.log(web3__WEBPACK_IMPORTED_MODULE_12___default().utils.isAddress(router.query.address));

    if (router.query.address && web3__WEBPACK_IMPORTED_MODULE_12___default().utils.isAddress(router.query.address)) {
      setRefer(router.query.address);
    }
  }, [router.query.address]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-warm-gray-900 min-h-screen",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_14___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Wrapped Bitcoin ( WBTC ) Protocol"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "/favicon.ico",
        type: "image/x-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico",
        type: "image/x-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "WBTC protocol"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-gray-200 bg-warm-gray-900",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "bg-warm-gray-800",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
            className: "container mx-auto px-4 py-8 flex justify-between text-2xl items-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "lg:flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "/logo.png",
                  alt: "",
                  className: "w-12 h-12 rounded-full mx-auto lg:mx-0"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "text-base lg:text-2xl lg:ml-2",
                  children: "WBTC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "uppercase flex flex-wrap text-right text-base lg:text-2xl",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "",
                className: "w-full lg:w-auto lg:mr-8",
                children: "telegram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "",
                className: "w-full lg:w-auto lg:mr-8",
                children: "twitter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "",
                className: "w-full lg:w-auto",
                children: "Add token"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "container mx-auto px-4 py-16",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-3xl lg:text-4xl text-center font-bold mb-8",
              children: "COUNTDOWN Airdrop End & Listing Pancakeswap"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mb-16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_countdown__WEBPACK_IMPORTED_MODULE_4__.default, {
                time: Number("1629454099678")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-4xl font-bold mb-4 capitalize",
                children: ["Wrapped Bitcoin ( WBTC ) Protocol", " airdrop"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-xl",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "",
                  children: ["Listing Pancakeswap", " ", moment__WEBPACK_IMPORTED_MODULE_8___default()(Number("1629454099678") || Date.now()).format("MMMM Do YYYY, HH:mm"), " ", "(your time)"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "",
                  children: [(0,_libs_format_number__WEBPACK_IMPORTED_MODULE_5__.formatNumber)("5"), " ", "WBTC", "/Claim"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "",
                  children: ["Price sale:", " ", (0,_libs_format_number__WEBPACK_IMPORTED_MODULE_5__.formatNumber)("50"), " ", "WBTC", "", "/0.01 BNB"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "",
                  children: [" ", "The tokens will be automatically transferred to the participant's wallet immediately"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "",
                  children: "Max Supply : 980,000 WBTC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container mx-auto px-4 py-16",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex -mx-4 flex-wrap",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-full lg:w-1/2 px-4 mb-8 lg:mb-0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "bg-warm-gray-700 p-8",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-4xl mb-4",
                children: "Airdrop & Sale"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mb-4 text-xl",
                children: "Min Buy 0.01BNB - Max Buy 20BNB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mb-8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  className: "w-full px-4 py-4 border border-warm-gray-600 bg-transparent text-amber-500 text-xl",
                  value: amount,
                  onChange: function onChange(e) {
                    return setBuyAmount(e.target.value);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mb-8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "w-full px-4 py-4 bg-amber-900 text-xl",
                  onClick: handleBuy,
                  children: "Buy"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "w-full px-4 py-4 bg-amber-900 text-xl",
                  onClick: handleClaim,
                  children: "Claim airdrop"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-full lg:w-1/2 px-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "bg-warm-gray-700 p-8",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-4xl mb-4",
                children: "Refer to your friends!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mb-4 text-xl",
                children: ["Get ", "100", "% of all claims &", "100", "% when they buy!"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mb-8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "border border-warm-gray-600 px-4 py-4 break-words",
                  children: address ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "text-xl mr-4",
                      children: "".concat("https://wbtc.to", "?address=").concat(address)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "inline-flex cursor-pointer",
                      onClick: function onClick() {
                        return handleCopy("".concat("https://wbtc.to", "?address=").concat(address));
                      },
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_16__.AiTwotoneCopy, {
                        className: "w-6 h-6"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 177,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "invisible",
                      children: "0x0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mb-8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "w-full px-4 py-4 bg-amber-900 text-xl",
                  onClick: handleConnect,
                  children: "Get Referral Link"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
        className: "bg-black",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container mx-auto px-4 py-8 text-center",
          children: ["\xA9 2021 ", "Wrapped Bitcoin ( WBTC ) Protocol", ". All rights reserved."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, _this);
};

_s(Layout, "JvmoFll6vsX6or7y9tv2sD29ldQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_use__WEBPACK_IMPORTED_MODULE_15__.useCopyToClipboard, next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvaW5kZXguanMiXSwibmFtZXMiOlsiTGF5b3V0Iiwid2ViMyIsImNvbm5lY3QiLCJ1c2VTdGF0ZSIsInByb2Nlc3MiLCJhbW91bnQiLCJzZXRCdXlBbW91bnQiLCJhZGRyZXNzIiwidXNlU2VsZWN0b3IiLCJhZGRyZXNzU2VsZWN0b3IiLCJ1c2VDb3B5VG9DbGlwYm9hcmQiLCJfIiwiY29weVRvQ2IiLCJyZWZlciIsInNldFJlZmVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQnV5IiwiYnV5U2FsZSIsImhhbmRsZUNsYWltIiwiY2xhaW1BaXJkcm9wIiwiaGFuZGxlQ29ubmVjdCIsImhhbmRsZUNvcHkiLCJ0ZXh0Iiwic3VjY2Vzc05vdGlmeSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJXZWIzIiwicXVlcnkiLCJORVhUX1BVQkxJQ19BUFBfTkFNRSIsIk51bWJlciIsIm1vbWVudCIsIkRhdGUiLCJub3ciLCJmb3JtYXQiLCJmb3JtYXROdW1iZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxJQUFJLEdBQUdDLDREQUFPLEVBQXBCOztBQURtQixrQkFFWUMsK0NBQVEsQ0FBQ0MsTUFBRCxDQUZwQjtBQUFBLE1BRVpDLE1BRlk7QUFBQSxNQUVKQyxZQUZJOztBQUduQixNQUFNQyxPQUFPLEdBQUdDLHdEQUFXLENBQUNDLGtFQUFELENBQTNCOztBQUhtQiw0QkFJR0MsOERBQWtCLEVBSnJCO0FBQUE7QUFBQSxNQUlaQyxDQUpZO0FBQUEsTUFJVEMsUUFKUzs7QUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUtELENBL0xEOztHQUFNSixNO1VBR1lRLG9ELEVBQ01FLDBELEVBSVBNLG1EOzs7S0FSWGhCLE07QUFpTU4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjJjODFhYzc3ZTRkNTY1ZmVlZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3VudCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb3VudGRvd25cIjtcbmltcG9ydCB7IGZvcm1hdE51bWJlciB9IGZyb20gXCIuLi9saWJzL2Zvcm1hdC1udW1iZXJcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb25uZWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYWRkcmVzc1NlbGVjdG9yLCBzZXRBY2NvdW50IH0gZnJvbSBcIi4uL3N0b3Jlcy9jb21tb24tc2xpY2VcIjtcbmltcG9ydCB7IHVzZUNvcHlUb0NsaXBib2FyZCB9IGZyb20gXCJyZWFjdC11c2VcIjtcbmltcG9ydCB7IEFpVHdvdG9uZUNvcHkgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IHN1Y2Nlc3NOb3RpZnkgfSBmcm9tIFwiLi4vbGlicy9ub3RpZnlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IHdlYjMgPSBjb25uZWN0KCk7XG4gIGNvbnN0IFthbW91bnQsIHNldEJ1eUFtb3VudF0gPSB1c2VTdGF0ZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NSU5fQlVZKTtcbiAgY29uc3QgYWRkcmVzcyA9IHVzZVNlbGVjdG9yKGFkZHJlc3NTZWxlY3Rvcik7XG4gIGNvbnN0IFtfLCBjb3B5VG9DYl0gPSB1c2VDb3B5VG9DbGlwYm9hcmQoKTtcbiAgY29uc3QgW3JlZmVyLCBzZXRSZWZlcl0gPSB1c2VTdGF0ZShcbiAgICBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZEVhRFwiXG4gICk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBoYW5kbGVCdXkgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgd2ViMy5idXlTYWxlKHJlZmVyLCBhbW91bnQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDbGFpbSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB3ZWIzLmNsYWltQWlyZHJvcChyZWZlcik7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgd2ViMy5jb25uZWN0KCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNvcHkgPSAodGV4dCkgPT4ge1xuICAgIGNvcHlUb0NiKHRleHQpO1xuICAgIHN1Y2Nlc3NOb3RpZnkoKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhXZWIzLnV0aWxzLmlzQWRkcmVzcyhyb3V0ZXIucXVlcnkuYWRkcmVzcykpO1xuICAgIGlmIChyb3V0ZXIucXVlcnkuYWRkcmVzcyAmJiBXZWIzLnV0aWxzLmlzQWRkcmVzcyhyb3V0ZXIucXVlcnkuYWRkcmVzcykpIHtcbiAgICAgIHNldFJlZmVyKHJvdXRlci5xdWVyeS5hZGRyZXNzKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIucXVlcnkuYWRkcmVzc10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2FybS1ncmF5LTkwMCBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9OQU1FfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJFdGhlcmV1bXN2LmNvbSBwcm90b2NvbFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDAgYmctd2FybS1ncmF5LTkwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2FybS1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LTggZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC0yeGwgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nby5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIG14LWF1dG8gbGc6bXgtMFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbGc6dGV4dC0yeGwgbGc6bWwtMlwiPlxuICAgICAgICAgICAgICAgICAgICBFdGhlcmV1bXN2LmNvbVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSBmbGV4IGZsZXgtd3JhcCB0ZXh0LXJpZ2h0IHRleHQtYmFzZSBsZzp0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy1hdXRvIGxnOm1yLThcIj5cbiAgICAgICAgICAgICAgICAgIHRlbGVncmFtXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy1hdXRvIGxnOm1yLThcIj5cbiAgICAgICAgICAgICAgICAgIHR3aXR0ZXJcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgIEFkZCB0b2tlblxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LTE2XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGc6dGV4dC00eGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkIG1iLThcIj5cbiAgICAgICAgICAgICAgICBDT1VOVERPV04gQWlyZHJvcCBFbmQgJiBMaXN0aW5nIFBhbmNha2Vzd2FwXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTE2XCI+XG4gICAgICAgICAgICAgICAgPENvdW50IHRpbWU9e051bWJlcihwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT1VOVERPV05fVElNRSl9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNCBjYXBpdGFsaXplXCI+XG4gICAgICAgICAgICAgICAgICB7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX05BTUV9IGFpcmRyb3BcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGxcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIExpc3RpbmcgUGFuY2FrZXN3YXB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHttb21lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPVU5URE9XTl9USU1FKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZS5ub3coKVxuICAgICAgICAgICAgICAgICAgICApLmZvcm1hdChcIk1NTU0gRG8gWVlZWSwgSEg6bW1cIil9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAoeW91ciB0aW1lKVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0TnVtYmVyKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FJUkRST1BfUkFURSl9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVFJBQ1RfU1lNfS9DbGFpbVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICBQcmljZSBzYWxlOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdE51bWJlcihwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQUxFX1JBVEUpfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRSQUNUX1NZTX1cbiAgICAgICAgICAgICAgICAgICAge3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRSQUNUX05BTUV9LzAuMDEgQk5CXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgVGhlIHRva2VucyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgdHJhbnNmZXJyZWQgdG8gdGhlXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50J3Mgd2FsbGV0IGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+TmV0d29yayA6IEJpbmFuY2UgU21hcnQgQ2hhaW48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS0xNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAtbXgtNCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8yIHB4LTQgbWItOCBsZzptYi0wXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2FybS1ncmF5LTcwMCBwLThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIG1iLTRcIj5BaXJkcm9wICYgU2FsZTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXhsXCI+XG4gICAgICAgICAgICAgICAgICBNaW4gQnV5IDAuMDFCTkIgLSBNYXggQnV5IDIwQk5CXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS00IGJvcmRlciBib3JkZXItd2FybS1ncmF5LTYwMCBiZy10cmFuc3BhcmVudCB0ZXh0LWFtYmVyLTUwMCB0ZXh0LXhsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCdXlBbW91bnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktNCBiZy1hbWJlci05MDAgdGV4dC14bFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJ1eX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQnV5XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS00IGJnLWFtYmVyLTkwMCB0ZXh0LXhsXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xhaW19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENsYWltIGFpcmRyb3BcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzIgcHgtNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdhcm0tZ3JheS03MDAgcC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtYi00XCI+UmVmZXIgdG8geW91ciBmcmllbmRzITwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXhsXCI+XG4gICAgICAgICAgICAgICAgICBHZXQge3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FJUkRST1BfUEVSQ0VOVH0lIG9mIGFsbCBjbGFpbXMgJlxuICAgICAgICAgICAgICAgICAge3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTEVfUEVSQ0VOVH0lIHdoZW4gdGhleSBidXkhXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItd2FybS1ncmF5LTYwMCBweC00IHB5LTQgYnJlYWstd29yZHNcIj5cbiAgICAgICAgICAgICAgICAgICAge2FkZHJlc3MgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBtci00XCI+e2Ake3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9IT01FfT9hZGRyZXNzPSR7YWRkcmVzc31gfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ29weShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9IT01FfT9hZGRyZXNzPSR7YWRkcmVzc31gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVDb3B5IGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52aXNpYmxlXCI+MHgwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktNCBiZy1hbWJlci05MDAgdGV4dC14bFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3R9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEdldCBSZWZlcnJhbCBMaW5rXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctYmxhY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktOCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgwqkgMjAyMSB7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX05BTUV9LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==