(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");



class AppComponent {
    constructor() {
        this.title = 'MEDILOC';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[2, "position", "relative", "left", "0", "top", "0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_components_map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"]], styles: ["h1[_ngcontent-%COMP%] {\r\nwidth: 363px;\r\nheight: 55px;\r\nleft: 28px;\r\ntop: 28px;\r\n\r\nfont-family: Iceland;\r\nfont-style: normal;\r\nfont-weight: normal;\r\nfont-size: 72px;\r\nline-height: 70px;\r\ntext-align: center;\r\n\r\ncolor: #E50027;\r\n\r\ntext-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaLFVBQVU7QUFDVixTQUFTOztBQUVULG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsa0JBQWtCOztBQUVsQixjQUFjOztBQUVkLDRDQUE0QztBQUM1QyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG53aWR0aDogMzYzcHg7XHJcbmhlaWdodDogNTVweDtcclxubGVmdDogMjhweDtcclxudG9wOiAyOHB4O1xyXG5cclxuZm9udC1mYW1pbHk6IEljZWxhbmQ7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuZm9udC1zaXplOiA3MnB4O1xyXG5saW5lLWhlaWdodDogNzBweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuY29sb3I6ICNFNTAwMjc7XHJcblxyXG50ZXh0LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_center_creator_center_creator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/center-creator/center-creator.component */ "./src/app/components/center-creator/center-creator.component.ts");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-accordion.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/menubar/menubar.component */ "./src/app/components/menubar/menubar.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_run_run_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/run/run.component */ "./src/app/components/run/run.component.ts");
/* harmony import */ var _components_run_pop_up_run_pop_up_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/run-pop-up/run-pop-up.component */ "./src/app/components/run-pop-up/run-pop-up.component.ts");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
/* harmony import */ var _components_village_input_village_input_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/village-input/village-input.component */ "./src/app/components/village-input/village-input.component.ts");
/* harmony import */ var _components_single_input_single_input_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/single-input/single-input.component */ "./src/app/components/single-input/single-input.component.ts");
/* harmony import */ var _services_google_maps_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/google-maps.service */ "./src/app/services/google-maps.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");





 //accordion and accordion tab







 //api















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_google_maps_service__WEBPACK_IMPORTED_MODULE_19__["GoogleMapsService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__["DynamicDialogModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__["GoogleMapsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_center_creator_center_creator_component__WEBPACK_IMPORTED_MODULE_4__["CenterCreatorComponent"],
        _components_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_12__["MenubarComponent"],
        _components_map_map_component__WEBPACK_IMPORTED_MODULE_13__["MapComponent"],
        _components_run_run_component__WEBPACK_IMPORTED_MODULE_14__["RunComponent"],
        _components_run_pop_up_run_pop_up_component__WEBPACK_IMPORTED_MODULE_15__["RunPopUpComponent"],
        _components_village_input_village_input_component__WEBPACK_IMPORTED_MODULE_17__["VillageInputComponent"],
        _components_single_input_single_input_component__WEBPACK_IMPORTED_MODULE_18__["SingleInputComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        primeng_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__["DynamicDialogModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__["GoogleMapsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_center_creator_center_creator_component__WEBPACK_IMPORTED_MODULE_4__["CenterCreatorComponent"],
                    _components_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_12__["MenubarComponent"],
                    _components_map_map_component__WEBPACK_IMPORTED_MODULE_13__["MapComponent"],
                    _components_run_run_component__WEBPACK_IMPORTED_MODULE_14__["RunComponent"],
                    _components_run_pop_up_run_pop_up_component__WEBPACK_IMPORTED_MODULE_15__["RunPopUpComponent"],
                    _components_village_input_village_input_component__WEBPACK_IMPORTED_MODULE_17__["VillageInputComponent"],
                    _components_single_input_single_input_component__WEBPACK_IMPORTED_MODULE_18__["SingleInputComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    primeng_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                    primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__["DynamicDialogModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__["GoogleMapsModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                providers: [_services_google_maps_service__WEBPACK_IMPORTED_MODULE_19__["GoogleMapsService"]],
                entryComponents: [
                    _components_center_creator_center_creator_component__WEBPACK_IMPORTED_MODULE_4__["CenterCreatorComponent"],
                    _components_run_pop_up_run_pop_up_component__WEBPACK_IMPORTED_MODULE_15__["RunPopUpComponent"]
                ]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_components_map_map_component__WEBPACK_IMPORTED_MODULE_13__["MapComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_l"], primeng_accordion__WEBPACK_IMPORTED_MODULE_5__["Accordion"], primeng_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionTab"], primeng_api__WEBPACK_IMPORTED_MODULE_22__["Header"], primeng_api__WEBPACK_IMPORTED_MODULE_22__["Footer"], primeng_api__WEBPACK_IMPORTED_MODULE_22__["PrimeTemplate"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["Button"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__["GoogleMap"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__["MapCircle"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__["MapGroundOverlay"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__["MapInfoWindow"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__["MapMarker"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__["MapPolygon"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__["MapPolyline"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__["MapRectangle"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
    _components_center_creator_center_creator_component__WEBPACK_IMPORTED_MODULE_4__["CenterCreatorComponent"],
    _components_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_12__["MenubarComponent"],
    _components_map_map_component__WEBPACK_IMPORTED_MODULE_13__["MapComponent"],
    _components_run_run_component__WEBPACK_IMPORTED_MODULE_14__["RunComponent"],
    _components_run_pop_up_run_pop_up_component__WEBPACK_IMPORTED_MODULE_15__["RunPopUpComponent"],
    _components_village_input_village_input_component__WEBPACK_IMPORTED_MODULE_17__["VillageInputComponent"],
    _components_single_input_single_input_component__WEBPACK_IMPORTED_MODULE_18__["SingleInputComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/components/center-creator/center-creator.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/center-creator/center-creator.component.ts ***!
  \***********************************************************************/
/*! exports provided: CenterCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterCreatorComponent", function() { return CenterCreatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");



class CenterCreatorComponent {
    constructor(primengConfig) {
        this.primengConfig = primengConfig;
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
CenterCreatorComponent.ɵfac = function CenterCreatorComponent_Factory(t) { return new (t || CenterCreatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeNGConfig"])); };
CenterCreatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CenterCreatorComponent, selectors: [["app-center-creator"]], decls: 7, vars: 0, consts: [[1, "p-d-flex", "p-flex-column"], [1, "p-mb-2"]], template: function CenterCreatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2VudGVyLWNyZWF0b3IvY2VudGVyLWNyZWF0b3IuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CenterCreatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-center-creator',
                templateUrl: './center-creator.component.html',
                styleUrls: ['./center-creator.component.css']
            }]
    }], function () { return [{ type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeNGConfig"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var _single_input_single_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../single-input/single-input.component */ "./src/app/components/single-input/single-input.component.ts");
/* harmony import */ var _services_google_maps_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/google-maps.service */ "./src/app/services/google-maps.service.ts");






const _c0 = ["map"];
/**
 * @author: Brian Linaldi
 */
class MapComponent {
    constructor(dialogService, googleMaps) {
        this.dialogService = dialogService;
        this.googleMaps = googleMaps;
        this.infowindow = new google.maps.InfoWindow();
        this.villages = [];
        this.popup = false;
    }
    ngOnInit() {
        const mapProperties = {
            center: new google.maps.LatLng(35.2271, -80.8431),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
        this.googleMaps.setMap(this.map);
        google.maps.event.addListener(this.map, 'click', (event) => {
            this.placeMarker(event);
        });
    }
    placeMarker(event) {
        let elat = event.latLng.lat();
        let elng = event.latLng.lng();
        // console.log(elat, elng);
        let ref = this.dialogService.open(_single_input_single_input_component__WEBPACK_IMPORTED_MODULE_2__["SingleInputComponent"], {
            header: 'Create Centers',
            width: '60%'
        }).onClose.subscribe((pop) => {
            // console.log("REEE");
            const marker = this.googleMaps.generateMarker(event.latLng);
            marker.addListener('click', () => {
                this.infowindow.setContent(`population: ${pop}`);
                this.infowindow.open(this.map, marker);
            });
            this.villages.push({
                marker: marker,
                population: pop
            });
        });
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_google_maps_service__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])], decls: 3, vars: 1, consts: [[2, "width", "100%", "height", "500px"], ["map", ""], [3, "villages"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-run", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("villages", ctx.villages);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css'],
                providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]]
            }]
    }], function () { return [{ type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }, { type: _services_google_maps_service__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsService"] }]; }, { mapElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['map', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/menubar/menubar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/menubar/menubar.component.ts ***!
  \*********************************************************/
/*! exports provided: MenubarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenubarComponent", function() { return MenubarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var _center_creator_center_creator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../center-creator/center-creator.component */ "./src/app/components/center-creator/center-creator.component.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");







class MenubarComponent {
    constructor(primengConfig, dialogService) {
        this.primengConfig = primengConfig;
        this.dialogService = dialogService;
    }
    openCenterCreator() {
        const ref = this.dialogService.open(_center_creator_center_creator_component__WEBPACK_IMPORTED_MODULE_2__["CenterCreatorComponent"], {
            header: 'Enter',
            width: '70%'
        });
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
MenubarComponent.ɵfac = function MenubarComponent_Factory(t) { return new (t || MenubarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeNGConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
MenubarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenubarComponent, selectors: [["app-menubar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])], decls: 8, vars: 0, consts: [[1, "p-grid"], [1, "p-d-flex", "p-flex-column", "p-flex-md-row", "p-mt-2"], [1, "p-mb-2", "p-mr-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Center Creator", 1, "p-button-rounded", "p-button-danger", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Area Generator", 1, "p-button-rounded", "p-button-danger"]], template: function MenubarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenubarComponent_Template_button_click_3_listener() { return ctx.openCenterCreator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"]], styles: [".test[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51YmFyL21lbnViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudWJhci9tZW51YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenubarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menubar',
                templateUrl: './menubar.component.html',
                styleUrls: ['./menubar.component.css'],
                providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]]
            }]
    }], function () { return [{ type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeNGConfig"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/run-pop-up/run-pop-up.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/run-pop-up/run-pop-up.component.ts ***!
  \***************************************************************/
/*! exports provided: RunPopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunPopUpComponent", function() { return RunPopUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var src_app_services_google_maps_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/google-maps.service */ "./src/app/services/google-maps.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");








class RunPopUpComponent {
    constructor(client, ref, config, googleMaps) {
        this.client = client;
        this.ref = ref;
        this.config = config;
        this.googleMaps = googleMaps;
    }
    ngOnInit() {
        this.villages = this.config.data.villages;
    }
    run() {
        const latitudes = [];
        const longitudes = [];
        const populations = [];
        this.villages.forEach((village) => {
            longitudes.push(village.marker.getPosition().lng());
            latitudes.push(village.marker.getPosition().lat());
            populations.push(village.population);
        });
        this.client.run2(longitudes, latitudes, populations, parseInt(this.centerNum), parseInt(this.manpower)).subscribe(data => {
            data.forEach(d => {
                // console.log(d)
                const latLng = new google.maps.LatLng(d.y, d.x);
                const marker = this.googleMaps.generateMarker(latLng);
                marker.setIcon("assets/img/pin_1.png");
            });
        });
        this.ref.close();
    }
}
RunPopUpComponent.ɵfac = function RunPopUpComponent_Factory(t) { return new (t || RunPopUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_google_maps_service__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsService"])); };
RunPopUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RunPopUpComponent, selectors: [["app-run-pop-up"]], decls: 11, vars: 2, consts: [[1, "p-d-flex", "p-flex-column"], [1, "p-mb-2"], ["type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["pButton", "", "type", "button", "label", "Find Centers", 1, "p-button-rounded", "p-button-danger", 3, "click"]], template: function RunPopUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Enter Number of Centers to Allocate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RunPopUpComponent_Template_input_ngModelChange_4_listener($event) { return ctx.centerNum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Enter Total Manpower to Spare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RunPopUpComponent_Template_input_ngModelChange_8_listener($event) { return ctx.manpower = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RunPopUpComponent_Template_button_click_10_listener() { return ctx.run(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.centerNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.manpower);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcnVuLXBvcC11cC9ydW4tcG9wLXVwLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RunPopUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-run-pop-up',
                templateUrl: './run-pop-up.component.html',
                styleUrls: ['./run-pop-up.component.css']
            }]
    }], function () { return [{ type: _services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogRef"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"] }, { type: src_app_services_google_maps_service__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/run/run.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/run/run.component.ts ***!
  \*************************************************/
/*! exports provided: RunComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunComponent", function() { return RunComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var _run_pop_up_run_pop_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../run-pop-up/run-pop-up.component */ "./src/app/components/run-pop-up/run-pop-up.component.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");







class RunComponent {
    constructor(primengConfig, dialogService) {
        this.primengConfig = primengConfig;
        this.dialogService = dialogService;
    }
    openRunPopup() {
        // console.log(this.villages);
        const ref = this.dialogService.open(_run_pop_up_run_pop_up_component__WEBPACK_IMPORTED_MODULE_2__["RunPopUpComponent"], {
            data: {
                villages: this.villages
            },
            header: 'Create Centers',
            width: '60%'
        });
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
RunComponent.ɵfac = function RunComponent_Factory(t) { return new (t || RunComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeNGConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
RunComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RunComponent, selectors: [["app-run"]], inputs: { villages: "villages" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])], decls: 4, vars: 0, consts: [[1, "p-grid"], [1, "p-d-flex", "p-flex-column", "p-flex-md-row", "p-mt-2"], [1, "p-mb-2", "p-mr-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Run", 1, "p-button-rounded", "p-button-danger", 3, "click"]], template: function RunComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RunComponent_Template_button_click_3_listener() { return ctx.openRunPopup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"]], styles: ["button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 85%;\r\n    left: 30px;\r\n    padding: 15px 50px;\r\n    font-size: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ydW4vcnVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcnVuL3J1bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogODUlO1xyXG4gICAgbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RunComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-run',
                templateUrl: './run.component.html',
                styleUrls: ['./run.component.css'],
                providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]]
            }]
    }], function () { return [{ type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeNGConfig"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }]; }, { villages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/single-input/single-input.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/single-input/single-input.component.ts ***!
  \*******************************************************************/
/*! exports provided: SingleInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleInputComponent", function() { return SingleInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");






class SingleInputComponent {
    constructor(ref) {
        this.ref = ref;
    }
    ngOnInit() {
    }
    set() {
        this.ref.close(parseInt(this.population));
    }
}
SingleInputComponent.ɵfac = function SingleInputComponent_Factory(t) { return new (t || SingleInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DynamicDialogRef"])); };
SingleInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleInputComponent, selectors: [["app-single-input"]], decls: 6, vars: 1, consts: [[1, "p-d-flex", "p-flex-column"], [1, "p-mb-2"], ["type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["pButton", "", "pRipple", "", "type", "button", "label", "Area Generator", 1, "p-button-rounded", "p-button-danger", 3, "click"]], template: function SingleInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Population:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SingleInputComponent_Template_input_ngModelChange_4_listener($event) { return ctx.population = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleInputComponent_Template_button_click_5_listener() { return ctx.set(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.population);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2luZ2xlLWlucHV0L3NpbmdsZS1pbnB1dC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-input',
                templateUrl: './single-input.component.html',
                styleUrls: ['./single-input.component.css']
            }]
    }], function () { return [{ type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DynamicDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/village-input/village-input.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/village-input/village-input.component.ts ***!
  \*********************************************************************/
/*! exports provided: VillageInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillageInputComponent", function() { return VillageInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1, a2) { return { "position": a0, "left": a1, "right": a2 }; };
class VillageInputComponent {
    // originDisplay: OriginDisplay;
    constructor() { }
    ngOnInit() {
        // this.originDisplay = this.inputOriginDisplay;
    }
}
VillageInputComponent.ɵfac = function VillageInputComponent_Factory(t) { return new (t || VillageInputComponent)(); };
VillageInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VillageInputComponent, selectors: [["app-village-input"]], inputs: { originDisplay: "originDisplay" }, decls: 2, vars: 5, consts: [[3, "ngStyle"]], template: function VillageInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c0, ctx.originDisplay.position, ctx.originDisplay.left, ctx.originDisplay.right));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlsbGFnZS1pbnB1dC92aWxsYWdlLWlucHV0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VillageInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-village-input',
                templateUrl: './village-input.component.html',
                styleUrls: ['./village-input.component.css']
            }]
    }], function () { return []; }, { originDisplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ClientService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://mediloc.herokuapp.com";
    }
    // addVillage(count:number, latitude: number, longitude:number): Observable<any> {
    //   return this.http.post<any>('http://127.0.0.1:5000/village', {
    //     'count': count,
    //     'latitude': latitude,
    //     'longitude': longitude,
    //     'color_id': 0 
    //   });
    // }
    // getVillages(): Observable<any> {
    //   return this.http.get<any>('http://127.0.0.1:5000/village');
    // }
    // run(centerNum: number, worker_num:number): Observable<any> {
    //   return this.http.post<any>('http://127.0.0.1:5000/run', {
    //     "center_num": centerNum,
    //     "worker_num": worker_num
    //   })
    // }
    // get_centers(): Observable<any> {
    //   return this.http.get<any>('http://127.0.0.1:5000/get_center');
    // }
    run2(longitudes, latitudes, populations, center_num, worker_num) {
        const object = {
            'longitudes': longitudes,
            'latitudes': latitudes,
            'populations': populations,
            'center_num': center_num,
            'worker_num': worker_num
        };
        // console.log(object);
        // console.log(this.baseUrl+"/run2");
        return this.http.post(this.baseUrl + "/run2", object);
    }
}
ClientService.ɵfac = function ClientService_Factory(t) { return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientService, factory: ClientService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/google-maps.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/google-maps.service.ts ***!
  \*************************************************/
/*! exports provided: GoogleMapsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsService", function() { return GoogleMapsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _maps_marker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps-marker.service */ "./src/app/services/maps-marker.service.ts");



class GoogleMapsService {
    constructor(mapsMarker) {
        this.mapsMarker = mapsMarker;
    }
    setMap(map) {
        this.map = map;
    }
    getMap() {
        return this.map;
    }
    generateMarker(latLng) {
        var marker = new google.maps.Marker({
            position: latLng,
            map: this.map
        });
        return marker;
    }
}
GoogleMapsService.ɵfac = function GoogleMapsService_Factory(t) { return new (t || GoogleMapsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_maps_marker_service__WEBPACK_IMPORTED_MODULE_1__["MapsMarkerService"])); };
GoogleMapsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GoogleMapsService, factory: GoogleMapsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleMapsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _maps_marker_service__WEBPACK_IMPORTED_MODULE_1__["MapsMarkerService"] }]; }, { mapElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['map', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/services/maps-marker.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/maps-marker.service.ts ***!
  \*************************************************/
/*! exports provided: MapsMarkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsMarkerService", function() { return MapsMarkerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MapsMarkerService {
    constructor() { }
}
MapsMarkerService.ɵfac = function MapsMarkerService_Factory(t) { return new (t || MapsMarkerService)(); };
MapsMarkerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapsMarkerService, factory: MapsMarkerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapsMarkerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\GarudaHacks2\GarudaHacks\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map