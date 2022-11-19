webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "C:\\WorkSpace\\NextJS\\meet-up\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



var DUMMY_MEETUPS = [{
  id: 'm1',
  tite: 'First Annual Conference',
  image: 'https://en.wikipedia.org/wiki/United_Nations_Climate_Change_conference#/media/File:COP21_participants_-_30_Nov_2015_(23430273715).jpg',
  address: '342 UN Hall rd, Magic City, UN 11111',
  description: 'The First Annual Conference of People'
}, {
  id: 'm2',
  tite: 'National Pet Conference',
  image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/The_hedgehog_named_%22Sunao%22.jpg',
  address: '4532 Companion st, Halo, NJ 23277',
  description: 'All pets welcome domestic and exotic!'
}, {
  id: 'm3',
  tite: 'The Big Tech Gathering',
  image: 'https://en.wikipedia.org/wiki/Big_Tech#/media/File:AAAMM_Big_Tech.svg',
  address: '10110 Hard Drive blvd, Testor, CA 90101',
  description: 'The biggest tech gathering of the decade.'
}, {
  id: 'm4',
  tite: 'National Food Lover Committee',
  image: 'https://en.wikipedia.org/wiki/Food#/media/File:Good_Food_Display_-_NCI_Visuals_Online.jpg',
  address: '554 MLK blvd, Candid, PA 43255',
  description: 'The Great Feast!'
}];

var HomePage = function HomePage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      loadedMeets = _useState[0],
      setLoadedMeets = _useState[1]; // useEffect(() => {
  // 	//send http request to fetch data
  // 	const data = DUMMY_MEETUPS;
  // 	setLoadedMeets(data);
  // }, []);


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 3
  }, _this);
}; //page prerendering during build with getStaticProps


_s(HomePage, "byxGgB6tevyjtSY/P4h6PU5Ns9w=");

_c = HomePage;
// //page prerendering on server
// export async function getServerSideProps(context) {
// 	const req = context.req
// 	const res = context.res
// 	//fetch data from DB or api
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0ZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9hZGVkTWVldHMiLCJzZXRMb2FkZWRNZWV0cyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBLElBQU1BLGFBQWEsR0FBRyxDQUNyQjtBQUNDQyxJQUFFLEVBQUUsSUFETDtBQUVDQyxNQUFJLEVBQUUseUJBRlA7QUFHQ0MsT0FBSyxFQUNKLHVJQUpGO0FBS0NDLFNBQU8sRUFBRSxzQ0FMVjtBQU1DQyxhQUFXLEVBQUU7QUFOZCxDQURxQixFQVNyQjtBQUNDSixJQUFFLEVBQUUsSUFETDtBQUVDQyxNQUFJLEVBQUUseUJBRlA7QUFHQ0MsT0FBSyxFQUNKLHdGQUpGO0FBS0NDLFNBQU8sRUFBRSxtQ0FMVjtBQU1DQyxhQUFXLEVBQUU7QUFOZCxDQVRxQixFQWlCckI7QUFDQ0osSUFBRSxFQUFFLElBREw7QUFFQ0MsTUFBSSxFQUFFLHdCQUZQO0FBR0NDLE9BQUssRUFDSix1RUFKRjtBQUtDQyxTQUFPLEVBQUUseUNBTFY7QUFNQ0MsYUFBVyxFQUFFO0FBTmQsQ0FqQnFCLEVBeUJyQjtBQUNDSixJQUFFLEVBQUUsSUFETDtBQUVDQyxNQUFJLEVBQUUsK0JBRlA7QUFHQ0MsT0FBSyxFQUNKLDJGQUpGO0FBS0NDLFNBQU8sRUFBRSxnQ0FMVjtBQU1DQyxhQUFXLEVBQUU7QUFOZCxDQXpCcUIsQ0FBdEI7O0FBbUNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLEVBQUQsQ0FEbkI7QUFBQSxNQUNwQkMsV0FEb0I7QUFBQSxNQUNQQyxjQURPLGlCQUUzQjtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxzQkFDQztBQUFBLDJCQUNDLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFSCxLQUFLLENBQUNJO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFLQSxDQWRELEMsQ0FnQkE7OztHQWhCTUwsUTs7S0FBQUEsUTtBQW9DTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYmVkNjk3Y2U5NTdkMzEyMTRkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuaW1wb3J0IGhhbmRsZXIgZnJvbSAnLi9hcGkvbWVldHVwcyc7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG5cdHtcclxuXHRcdGlkOiAnbTEnLFxyXG5cdFx0dGl0ZTogJ0ZpcnN0IEFubnVhbCBDb25mZXJlbmNlJyxcclxuXHRcdGltYWdlOlxyXG5cdFx0XHQnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pdGVkX05hdGlvbnNfQ2xpbWF0ZV9DaGFuZ2VfY29uZmVyZW5jZSMvbWVkaWEvRmlsZTpDT1AyMV9wYXJ0aWNpcGFudHNfLV8zMF9Ob3ZfMjAxNV8oMjM0MzAyNzM3MTUpLmpwZycsXHJcblx0XHRhZGRyZXNzOiAnMzQyIFVOIEhhbGwgcmQsIE1hZ2ljIENpdHksIFVOIDExMTExJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnVGhlIEZpcnN0IEFubnVhbCBDb25mZXJlbmNlIG9mIFBlb3BsZScsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogJ20yJyxcclxuXHRcdHRpdGU6ICdOYXRpb25hbCBQZXQgQ29uZmVyZW5jZScsXHJcblx0XHRpbWFnZTpcclxuXHRcdFx0J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYS9hOC9UaGVfaGVkZ2Vob2dfbmFtZWRfJTIyU3VuYW8lMjIuanBnJyxcclxuXHRcdGFkZHJlc3M6ICc0NTMyIENvbXBhbmlvbiBzdCwgSGFsbywgTkogMjMyNzcnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdBbGwgcGV0cyB3ZWxjb21lIGRvbWVzdGljIGFuZCBleG90aWMhJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnbTMnLFxyXG5cdFx0dGl0ZTogJ1RoZSBCaWcgVGVjaCBHYXRoZXJpbmcnLFxyXG5cdFx0aW1hZ2U6XHJcblx0XHRcdCdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CaWdfVGVjaCMvbWVkaWEvRmlsZTpBQUFNTV9CaWdfVGVjaC5zdmcnLFxyXG5cdFx0YWRkcmVzczogJzEwMTEwIEhhcmQgRHJpdmUgYmx2ZCwgVGVzdG9yLCBDQSA5MDEwMScsXHJcblx0XHRkZXNjcmlwdGlvbjogJ1RoZSBiaWdnZXN0IHRlY2ggZ2F0aGVyaW5nIG9mIHRoZSBkZWNhZGUuJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnbTQnLFxyXG5cdFx0dGl0ZTogJ05hdGlvbmFsIEZvb2QgTG92ZXIgQ29tbWl0dGVlJyxcclxuXHRcdGltYWdlOlxyXG5cdFx0XHQnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRm9vZCMvbWVkaWEvRmlsZTpHb29kX0Zvb2RfRGlzcGxheV8tX05DSV9WaXN1YWxzX09ubGluZS5qcGcnLFxyXG5cdFx0YWRkcmVzczogJzU1NCBNTEsgYmx2ZCwgQ2FuZGlkLCBQQSA0MzI1NScsXHJcblx0XHRkZXNjcmlwdGlvbjogJ1RoZSBHcmVhdCBGZWFzdCEnLFxyXG5cdH0sXHJcbl07XHJcblxyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IFtsb2FkZWRNZWV0cywgc2V0TG9hZGVkTWVldHNdID0gdXNlU3RhdGUoW10pO1xyXG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0Ly8gXHQvL3NlbmQgaHR0cCByZXF1ZXN0IHRvIGZldGNoIGRhdGFcclxuXHQvLyBcdGNvbnN0IGRhdGEgPSBEVU1NWV9NRUVUVVBTO1xyXG5cclxuXHQvLyBcdHNldExvYWRlZE1lZXRzKGRhdGEpO1xyXG5cdC8vIH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuLy9wYWdlIHByZXJlbmRlcmluZyBkdXJpbmcgYnVpbGQgd2l0aCBnZXRTdGF0aWNQcm9wc1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcblx0Ly8gZmV0Y2ggZGF0YSBmcm9tIGFwaSBvciBkYXRhYmFzZVxyXG5cdGRlYnVnZ2VyO1xyXG5cdGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBoYW5kbGVyKCk7XHJcblx0Y29uc29sZS5sb2cobWVldHVwcyk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcblx0XHRcdFx0dGl0bGU6IG1lZXR1cC50aXRsZSxcclxuXHRcdFx0XHRhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuXHRcdFx0XHRpbWFnZTogbWVldHVwLmltYWdlLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBtZWV0dXAuZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0aWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuXHRcdFx0fSkpLFxyXG5cdFx0fSxcclxuXHRcdHJldmFsaWRhdGU6IDEwLCAvL3NlY29uZHMgZm9yIHBhZ2UgdG8gdXBkYXRlXHJcblx0fTtcclxufVxyXG5cclxuLy8gLy9wYWdlIHByZXJlbmRlcmluZyBvbiBzZXJ2ZXJcclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbi8vIFx0Y29uc3QgcmVxID0gY29udGV4dC5yZXFcclxuLy8gXHRjb25zdCByZXMgPSBjb250ZXh0LnJlc1xyXG4vLyBcdC8vZmV0Y2ggZGF0YSBmcm9tIERCIG9yIGFwaVxyXG4vLyBcdHJldHVybiB7XHJcbi8vIFx0XHRwcm9wczoge1xyXG4vLyBcdFx0XHRtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4vLyBcdFx0fSxcclxuLy8gXHR9O1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==