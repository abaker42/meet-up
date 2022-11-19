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
    _this = undefined;



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
  // const [loadedMeets, setLoadedMeets] = useState([]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 3
  }, _this);
}; //page prerendering during build with getStaticProps


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0ZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsSUFBTUEsYUFBYSxHQUFHLENBQ3JCO0FBQ0NDLElBQUUsRUFBRSxJQURMO0FBRUNDLE1BQUksRUFBRSx5QkFGUDtBQUdDQyxPQUFLLEVBQ0osdUlBSkY7QUFLQ0MsU0FBTyxFQUFFLHNDQUxWO0FBTUNDLGFBQVcsRUFBRTtBQU5kLENBRHFCLEVBU3JCO0FBQ0NKLElBQUUsRUFBRSxJQURMO0FBRUNDLE1BQUksRUFBRSx5QkFGUDtBQUdDQyxPQUFLLEVBQ0osd0ZBSkY7QUFLQ0MsU0FBTyxFQUFFLG1DQUxWO0FBTUNDLGFBQVcsRUFBRTtBQU5kLENBVHFCLEVBaUJyQjtBQUNDSixJQUFFLEVBQUUsSUFETDtBQUVDQyxNQUFJLEVBQUUsd0JBRlA7QUFHQ0MsT0FBSyxFQUNKLHVFQUpGO0FBS0NDLFNBQU8sRUFBRSx5Q0FMVjtBQU1DQyxhQUFXLEVBQUU7QUFOZCxDQWpCcUIsRUF5QnJCO0FBQ0NKLElBQUUsRUFBRSxJQURMO0FBRUNDLE1BQUksRUFBRSwrQkFGUDtBQUdDQyxPQUFLLEVBQ0osMkZBSkY7QUFLQ0MsU0FBTyxFQUFFLGdDQUxWO0FBTUNDLGFBQVcsRUFBRTtBQU5kLENBekJxQixDQUF0Qjs7QUFtQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCO0FBRUEsc0JBQ0M7QUFBQSwyQkFDQyxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBS0EsQ0FSRCxDLENBVUE7OztLQVZNRixRO0FBOEJOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWVBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZlMzhmMGE4NjAxZjZkNDA0OWE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xyXG5pbXBvcnQgaGFuZGxlciBmcm9tICcuL2FwaS9tZWV0dXBzJztcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcblx0e1xyXG5cdFx0aWQ6ICdtMScsXHJcblx0XHR0aXRlOiAnRmlyc3QgQW5udWFsIENvbmZlcmVuY2UnLFxyXG5cdFx0aW1hZ2U6XHJcblx0XHRcdCdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbml0ZWRfTmF0aW9uc19DbGltYXRlX0NoYW5nZV9jb25mZXJlbmNlIy9tZWRpYS9GaWxlOkNPUDIxX3BhcnRpY2lwYW50c18tXzMwX05vdl8yMDE1XygyMzQzMDI3MzcxNSkuanBnJyxcclxuXHRcdGFkZHJlc3M6ICczNDIgVU4gSGFsbCByZCwgTWFnaWMgQ2l0eSwgVU4gMTExMTEnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdUaGUgRmlyc3QgQW5udWFsIENvbmZlcmVuY2Ugb2YgUGVvcGxlJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnbTInLFxyXG5cdFx0dGl0ZTogJ05hdGlvbmFsIFBldCBDb25mZXJlbmNlJyxcclxuXHRcdGltYWdlOlxyXG5cdFx0XHQnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9hL2E4L1RoZV9oZWRnZWhvZ19uYW1lZF8lMjJTdW5hbyUyMi5qcGcnLFxyXG5cdFx0YWRkcmVzczogJzQ1MzIgQ29tcGFuaW9uIHN0LCBIYWxvLCBOSiAyMzI3NycsXHJcblx0XHRkZXNjcmlwdGlvbjogJ0FsbCBwZXRzIHdlbGNvbWUgZG9tZXN0aWMgYW5kIGV4b3RpYyEnLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdtMycsXHJcblx0XHR0aXRlOiAnVGhlIEJpZyBUZWNoIEdhdGhlcmluZycsXHJcblx0XHRpbWFnZTpcclxuXHRcdFx0J2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0JpZ19UZWNoIy9tZWRpYS9GaWxlOkFBQU1NX0JpZ19UZWNoLnN2ZycsXHJcblx0XHRhZGRyZXNzOiAnMTAxMTAgSGFyZCBEcml2ZSBibHZkLCBUZXN0b3IsIENBIDkwMTAxJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnVGhlIGJpZ2dlc3QgdGVjaCBnYXRoZXJpbmcgb2YgdGhlIGRlY2FkZS4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdtNCcsXHJcblx0XHR0aXRlOiAnTmF0aW9uYWwgRm9vZCBMb3ZlciBDb21taXR0ZWUnLFxyXG5cdFx0aW1hZ2U6XHJcblx0XHRcdCdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Gb29kIy9tZWRpYS9GaWxlOkdvb2RfRm9vZF9EaXNwbGF5Xy1fTkNJX1Zpc3VhbHNfT25saW5lLmpwZycsXHJcblx0XHRhZGRyZXNzOiAnNTU0IE1MSyBibHZkLCBDYW5kaWQsIFBBIDQzMjU1JyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnVGhlIEdyZWF0IEZlYXN0IScsXHJcblx0fSxcclxuXTtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XHJcblx0Ly8gY29uc3QgW2xvYWRlZE1lZXRzLCBzZXRMb2FkZWRNZWV0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbi8vcGFnZSBwcmVyZW5kZXJpbmcgZHVyaW5nIGJ1aWxkIHdpdGggZ2V0U3RhdGljUHJvcHNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5cdC8vIGZldGNoIGRhdGEgZnJvbSBhcGkgb3IgZGF0YWJhc2VcclxuXHRkZWJ1Z2dlcjtcclxuXHRjb25zdCBtZWV0dXBzID0gYXdhaXQgaGFuZGxlcigpO1xyXG5cdGNvbnNvbGUubG9nKG1lZXR1cHMpO1xyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRtZWV0dXBzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG5cdFx0XHRcdHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcblx0XHRcdFx0YWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcblx0XHRcdFx0aW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogbWVldHVwLmRlc2NyaXB0aW9uLFxyXG5cdFx0XHRcdGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcblx0XHRcdH0pKSxcclxuXHRcdH0sXHJcblx0XHRyZXZhbGlkYXRlOiAxMCwgLy9zZWNvbmRzIGZvciBwYWdlIHRvIHVwZGF0ZVxyXG5cdH07XHJcbn1cclxuXHJcbi8vIC8vcGFnZSBwcmVyZW5kZXJpbmcgb24gc2VydmVyXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyBcdGNvbnN0IHJlcSA9IGNvbnRleHQucmVxXHJcbi8vIFx0Y29uc3QgcmVzID0gY29udGV4dC5yZXNcclxuLy8gXHQvL2ZldGNoIGRhdGEgZnJvbSBEQiBvciBhcGlcclxuLy8gXHRyZXR1cm4ge1xyXG4vLyBcdFx0cHJvcHM6IHtcclxuLy8gXHRcdFx0bWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gXHRcdH0sXHJcbi8vIFx0fTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=