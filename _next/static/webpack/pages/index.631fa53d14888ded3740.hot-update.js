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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Wrapped Bitcoin ( WBTC ) Protocol"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
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
                  lineNumber: 55,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "text-base lg:text-2xl lg:ml-2",
                  children: "WBTC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "uppercase flex flex-wrap text-right text-base lg:text-2xl",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "",
                className: "w-full lg:w-auto lg:mr-8",
                children: "telegram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "",
                className: "w-full lg:w-auto lg:mr-8",
                children: "twitter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "",
                className: "w-full lg:w-auto",
                children: "Add token"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
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
              lineNumber: 80,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mb-16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_countdown__WEBPACK_IMPORTED_MODULE_4__.default, {
                time: Number("1629454099678")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-4xl font-bold mb-4 capitalize",
                children: ["Wrapped Bitcoin ( WBTC ) Protocol", " airdrop"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-xl",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "",
                  children: ["Listing Pancakeswap", " ", moment__WEBPACK_IMPORTED_MODULE_8___default()(Number("1629454099678") || Date.now()).format("MMMM Do YYYY, HH:mm"), " ", "(your time)"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "",
                  children: [(0,_libs_format_number__WEBPACK_IMPORTED_MODULE_5__.formatNumber)("5"), " ", "WBTC", "/Claim"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "",
                  children: ["Price sale:", " ", (0,_libs_format_number__WEBPACK_IMPORTED_MODULE_5__.formatNumber)("50"), " ", "WBTC", "", "/0.01 BNB"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "",
                  children: [" ", "The tokens will be automatically transferred to the participant's wallet immediately"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "",
                  children: "Max Supply : 980,000 WBTC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
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
                lineNumber: 124,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mb-4 text-xl",
                children: "Min Buy 0.01BNB - Max Buy 20BNB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
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
                  lineNumber: 129,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mb-8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "w-full px-4 py-4 bg-amber-900 text-xl",
                  onClick: handleBuy,
                  children: "Buy"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "w-full px-4 py-4 bg-amber-900 text-xl",
                  onClick: handleClaim,
                  children: "Claim airdrop"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
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
                lineNumber: 156,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mb-4 text-xl",
                children: ["Get ", "100", "% of all claims &", "100", "% when they buy!"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 157,
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
                      lineNumber: 165,
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
                        lineNumber: 174,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 166,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "invisible",
                      children: "0x0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mb-8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "w-full px-4 py-4 bg-amber-900 text-xl",
                  onClick: handleConnect,
                  children: "Get Referral Link"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
        className: "bg-black",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container mx-auto px-4 py-8 text-center",
          children: ["\xA9 2021 ", "Wrapped Bitcoin ( WBTC ) Protocol", ". All rights reserved."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvaW5kZXguanMiXSwibmFtZXMiOlsiTGF5b3V0Iiwid2ViMyIsImNvbm5lY3QiLCJ1c2VTdGF0ZSIsInByb2Nlc3MiLCJhbW91bnQiLCJzZXRCdXlBbW91bnQiLCJhZGRyZXNzIiwidXNlU2VsZWN0b3IiLCJhZGRyZXNzU2VsZWN0b3IiLCJ1c2VDb3B5VG9DbGlwYm9hcmQiLCJfIiwiY29weVRvQ2IiLCJyZWZlciIsInNldFJlZmVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQnV5IiwiYnV5U2FsZSIsImhhbmRsZUNsYWltIiwiY2xhaW1BaXJkcm9wIiwiaGFuZGxlQ29ubmVjdCIsImhhbmRsZUNvcHkiLCJ0ZXh0Iiwic3VjY2Vzc05vdGlmeSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJXZWIzIiwicXVlcnkiLCJORVhUX1BVQkxJQ19BUFBfTkFNRSIsIk51bWJlciIsIm1vbWVudCIsIkRhdGUiLCJub3ciLCJmb3JtYXQiLCJmb3JtYXROdW1iZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxJQUFJLEdBQUdDLDREQUFPLEVBQXBCOztBQURtQixrQkFFWUMsK0NBQVEsQ0FBQ0MsTUFBRCxDQUZwQjtBQUFBLE1BRVpDLE1BRlk7QUFBQSxNQUVKQyxZQUZJOztBQUduQixNQUFNQyxPQUFPLEdBQUdDLHdEQUFXLENBQUNDLGtFQUFELENBQTNCOztBQUhtQiw0QkFJR0MsOERBQWtCLEVBSnJCO0FBQUE7QUFBQSxNQUlaQyxDQUpZO0FBQUEsTUFJVEMsUUFKUzs7QUFB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QUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGO0FBQUEsa0NBRE0sZ0JBZU47QUFBSyw2QkFBUyxFQUFDLEVBQWY7QUFBQSwyQ0FDRTtBQUFLLCtCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkYsZUE2QkU7QUFBSyx5QkFBUyxFQUFDLE1BQWY7QUFBQSx1Q0FDRTtBQUNFLDJCQUFTLEVBQUMsdUNBRFo7QUFFRSx5QkFBTyxFQUFFYyxhQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZFRixlQW1KRTtBQUFRLGlCQUFTLEVBQUMsVUFBbEI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMseUNBQWY7QUFBQSxtQ0FDVWpCLHFCQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnS0QsQ0E1TEQ7O0dBQU1KLE07VUFHWVEsb0QsRUFDTUUsMEQsRUFJUE0sbUQ7OztLQVJYaEIsTTtBQThMTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MzFmYTUzZDE0ODg4ZGVkMzc0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvdW50IGZyb20gXCIuLi9jb21wb25lbnRzL2NvdW50ZG93blwiO1xuaW1wb3J0IHsgZm9ybWF0TnVtYmVyIH0gZnJvbSBcIi4uL2xpYnMvZm9ybWF0LW51bWJlclwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Nvbm5lY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBhZGRyZXNzU2VsZWN0b3IsIHNldEFjY291bnQgfSBmcm9tIFwiLi4vc3RvcmVzL2NvbW1vbi1zbGljZVwiO1xuaW1wb3J0IHsgdXNlQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuaW1wb3J0IHsgQWlUd290b25lQ29weSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHsgc3VjY2Vzc05vdGlmeSB9IGZyb20gXCIuLi9saWJzL25vdGlmeVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IExheW91dCA9ICgpID0+IHtcbiAgY29uc3Qgd2ViMyA9IGNvbm5lY3QoKTtcbiAgY29uc3QgW2Ftb3VudCwgc2V0QnV5QW1vdW50XSA9IHVzZVN0YXRlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01JTl9CVVkpO1xuICBjb25zdCBhZGRyZXNzID0gdXNlU2VsZWN0b3IoYWRkcmVzc1NlbGVjdG9yKTtcbiAgY29uc3QgW18sIGNvcHlUb0NiXSA9IHVzZUNvcHlUb0NsaXBib2FyZCgpO1xuICBjb25zdCBbcmVmZXIsIHNldFJlZmVyXSA9IHVzZVN0YXRlKFxuICAgIFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkRWFEXCJcbiAgKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGhhbmRsZUJ1eSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB3ZWIzLmJ1eVNhbGUocmVmZXIsIGFtb3VudCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNsYWltID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHdlYjMuY2xhaW1BaXJkcm9wKHJlZmVyKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB3ZWIzLmNvbm5lY3QoKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ29weSA9ICh0ZXh0KSA9PiB7XG4gICAgY29weVRvQ2IodGV4dCk7XG4gICAgc3VjY2Vzc05vdGlmeSgpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFdlYjMudXRpbHMuaXNBZGRyZXNzKHJvdXRlci5xdWVyeS5hZGRyZXNzKSk7XG4gICAgaWYgKHJvdXRlci5xdWVyeS5hZGRyZXNzICYmIFdlYjMudXRpbHMuaXNBZGRyZXNzKHJvdXRlci5xdWVyeS5hZGRyZXNzKSkge1xuICAgICAgc2V0UmVmZXIocm91dGVyLnF1ZXJ5LmFkZHJlc3MpO1xuICAgIH1cbiAgfSwgW3JvdXRlci5xdWVyeS5hZGRyZXNzXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13YXJtLWdyYXktOTAwIG1pbi1oLXNjcmVlblwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX05BTUV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMCBiZy13YXJtLWdyYXktOTAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13YXJtLWdyYXktODAwXCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktOCBmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LTJ4bCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLWZ1bGwgbXgtYXV0byBsZzpteC0wXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZSBsZzp0ZXh0LTJ4bCBsZzptbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIEV0aGVyZXVtc3YuY29tXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIGZsZXggZmxleC13cmFwIHRleHQtcmlnaHQgdGV4dC1iYXNlIGxnOnRleHQtMnhsXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LWF1dG8gbGc6bXItOFwiPlxuICAgICAgICAgICAgICAgICAgdGVsZWdyYW1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LWF1dG8gbGc6bXItOFwiPlxuICAgICAgICAgICAgICAgICAgdHdpdHRlclxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgQWRkIHRva2VuXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktMTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBsZzp0ZXh0LTR4bCB0ZXh0LWNlbnRlciBmb250LWJvbGQgbWItOFwiPlxuICAgICAgICAgICAgICAgIENPVU5URE9XTiBBaXJkcm9wIEVuZCAmIExpc3RpbmcgUGFuY2FrZXN3YXBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTZcIj5cbiAgICAgICAgICAgICAgICA8Q291bnQgdGltZT17TnVtYmVyKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPVU5URE9XTl9USU1FKX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi00IGNhcGl0YWxpemVcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfTkFNRX0gYWlyZHJvcFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgTGlzdGluZyBQYW5jYWtlc3dhcHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge21vbWVudChcbiAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09VTlRET1dOX1RJTUUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRlLm5vdygpXG4gICAgICAgICAgICAgICAgICAgICkuZm9ybWF0KFwiTU1NTSBEbyBZWVlZLCBISDptbVwiKX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICh5b3VyIHRpbWUpXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXROdW1iZXIocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUlSRFJPUF9SQVRFKX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05UUkFDVF9TWU19L0NsYWltXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIFByaWNlIHNhbGU6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0TnVtYmVyKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTEVfUkFURSl9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVFJBQ1RfU1lNfVxuICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVFJBQ1RfTkFNRX0vMC4wMSBCTkJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBUaGUgdG9rZW5zIHdpbGwgYmUgYXV0b21hdGljYWxseSB0cmFuc2ZlcnJlZCB0byB0aGVcbiAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQncyB3YWxsZXQgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5OZXR3b3JrIDogQmluYW5jZSBTbWFydCBDaGFpbjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LTE2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IC1teC00IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzIgcHgtNCBtYi04IGxnOm1iLTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13YXJtLWdyYXktNzAwIHAtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItNFwiPkFpcmRyb3AgJiBTYWxlPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHRleHQteGxcIj5cbiAgICAgICAgICAgICAgICAgIE1pbiBCdXkgMC4wMUJOQiAtIE1heCBCdXkgMjBCTkJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTQgYm9yZGVyIGJvcmRlci13YXJtLWdyYXktNjAwIGJnLXRyYW5zcGFyZW50IHRleHQtYW1iZXItNTAwIHRleHQteGxcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJ1eUFtb3VudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS00IGJnLWFtYmVyLTkwMCB0ZXh0LXhsXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQnV5fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBCdXlcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTQgYmctYW1iZXItOTAwIHRleHQteGxcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGFpbX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2xhaW0gYWlyZHJvcFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMiBweC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2FybS1ncmF5LTcwMCBwLThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIG1iLTRcIj5SZWZlciB0byB5b3VyIGZyaWVuZHMhPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHRleHQteGxcIj5cbiAgICAgICAgICAgICAgICAgIEdldCB7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUlSRFJPUF9QRVJDRU5UfSUgb2YgYWxsIGNsYWltcyAmXG4gICAgICAgICAgICAgICAgICB7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FMRV9QRVJDRU5UfSUgd2hlbiB0aGV5IGJ1eSFcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci13YXJtLWdyYXktNjAwIHB4LTQgcHktNCBicmVhay13b3Jkc1wiPlxuICAgICAgICAgICAgICAgICAgICB7YWRkcmVzcyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1yLTRcIj57YCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX0hPTUV9P2FkZHJlc3M9JHthZGRyZXNzfWB9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDb3B5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX0hPTUV9P2FkZHJlc3M9JHthZGRyZXNzfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZUNvcHkgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZpc2libGVcIj4weDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS00IGJnLWFtYmVyLTkwMCB0ZXh0LXhsXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29ubmVjdH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgR2V0IFJlZmVycmFsIExpbmtcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1ibGFja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICDCqSAyMDIxIHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfTkFNRX0uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9