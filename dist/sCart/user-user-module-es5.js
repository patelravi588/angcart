(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/user/itrform/itrform.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/itrform/itrform.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <button class=\"btn btn-success\">tr</button>\n    <h1 class=\"form-heading\">{{ stepItems[activeStepIndex].label }}</h1>\n    <ng-container *ngFor=\"let form of masterForm; let i = index; trackBy: trackByFn\">\n        <form action=\"\" class=\"form-inline\" [formGroup]=\"masterForm[i]\" *ngIf=\"i === activeStepIndex || masterForm.length === 1\">\n            <div class=\"\">\n                <div class=\"fields-container\">\n                    <div *ngFor=\"let field of formFields[i]; trackBy: trackByFn\" [ngSwitch]=\"currentFormContent[i][field].type\">\n                        <div class=\"full-width\">\n                            <label class=\"field-label text-bold\" [for]=\"field\">{{ field }}</label>\n                            <ng-container *ngSwitchCase=\"'textarea'\">\n                                <textarea [id]=\"field\" [formControlName]=\"field\" [placeholder]=\"currentFormContent[i][field].placeholder\"></textarea>\n                            </ng-container>\n                            <ng-container *ngSwitchDefault>\n                                <input [type]=\"currentFormContent[i][field].type\" [formControlName]=\"field\" [id]=\"field\" [placeholder]=\"currentFormContent[i][field].placeholder\"/>\n                            </ng-container>\n                        </div>\n                    </div>\n                </div>\n                \n                \n    \n                <div class=\"preview-container\" *ngIf=\"activeStepIndex === stepItems.length - 1\">\n                    <ul>\n                        <li class=\"form-details-list\" *ngFor=\"let field of masterFormFields; trackBy: trackByFn\">\n                            <span class=\"text-bold\">{{ field }}</span>\n                            <span>{{ formData[field] || 'N/A' }}</span>\n                        </li>\n                    </ul>\n                </div>\n    \n                <div class=\"button-container\">\n                    <button type=\"button\" [disabled]=\"!activeStepIndex\" (click)=\"goToStep('prev')\">Previous</button>\n                    <button *ngIf=\"activeStepIndex === stepItems.length - 1\" type=\"button\" (click)=\"onFormSubmit()\">Submit</button>\n                    <button type=\"button\" [disabled]=\"activeStepIndex === stepItems.length - 1 || masterForm[i].invalid\" (click)=\"goToStep('next')\">Next</button>\n                </div>\n            </div>\n        </form>\n    </ng-container>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container bg-white border-5 register-container\">\n        <div class=\"py-5 text-center\">\n          <h2 style=\"border-bottom: 1px solid black\" class=\"text-main\">RTI Register Form</h2>\n          <!-- <p class=\"lead\">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> -->\n        </div>\n      \n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h4 class=\"mb-3 text-main\"> Fill your Personal Record</h4>\n            <form class=\"needs-validation\" novalidate>\n              <div class=\"row\">\n                <div class=\"col-md-6 mb-3\">\n                  <label for=\"firstName\">First name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required>\n                  <div class=\"invalid-feedback\">\n                    Valid first name is required.\n                  </div>\n                </div>\n                <div class=\"col-md-6 mb-3\">\n                  <label for=\"lastName\">Last name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required>\n                  <div class=\"invalid-feedback\">\n                    Valid last name is required.\n                  </div>\n                </div>\n              </div>\n      \n              <div class=\"mb-3\">\n                <label for=\"username\">Full Name</label>\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" required>\n                  <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                    Your username is required.\n                  </div>\n                </div>\n              </div>\n      \n              <div class=\"mb-3\">\n                <label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>\n                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">\n                <div class=\"invalid-feedback\">\n                  Please enter a valid email address for shipping updates.\n                </div>\n              </div>\n      \n              <div class=\"mb-3\">\n                <label for=\"address\">Address</label>\n                <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required>\n                <div class=\"invalid-feedback\">\n                  Please enter your shipping address.\n                </div>\n              </div>\n      \n              <div class=\"mb-3\">\n                <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\n                <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\">\n              </div>\n      \n              <div class=\"row\">\n                \n                <div class=\"col-md-4 mb-3\">\n                  <label for=\"state\">State</label>\n                  <select class=\"custom-select d-block w-100\" id=\"state\" required>\n                    <option value=\"\">Choose...</option>\n                    <option>California</option>\n                  </select>\n                  <div class=\"invalid-feedback\">\n                    Please provide a valid state.\n                  </div>\n                </div>\n                <div class=\"col-md-3 mb-3\">\n                  <label for=\"zip\">Pin Code</label>\n                  <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required>\n                  <div class=\"invalid-feedback\">\n                    Zip code required.\n                  </div>\n                </div>\n              </div>\n              <hr class=\"mb-4\">\n\n              <h4 class=\"mb-3\">Your RTI Query</h4>\n              <div class=\"row\">\n                <div class=\"col-md-12 mb-6\">\n                    <label for=\"firstName\">Query/Questions</label>\n                    <textarea id=\"w3review\"  class=\"form-control\" name=\"w3review\" rows=\"12\" cols=\"80\" required>\n                        \n                    </textarea>\n                </div>\n               </div>\n\n               <hr class=\"mb-4\">\n               <h4 class=\"mb-3\">Pricing</h4>\n               <table class=\"table-bordered\" style=\"width:100%\">\n                    <thead class=\"thead-dark\">\n                      <tr>\n                        <!-- <th scope=\"col\">#</th>\n                        <th scope=\"col\">First</th>\n                        <th scope=\"col\">Last</th>\n                        <th scope=\"col\">Handle</th>\n                        <th scope=\"col\">Hex</th> -->\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <th scope=\"row\">Postal Charges</th>\n                        <td>\n                            <div class=\"floatRight hidden-phone\"><p class=\"inline shippingcharge\"> ₹ 49</p></div>\n                        </td>\n                        <td><div class=\"tablerow clickzero\"><img src=\"../../../assets/yes.png\" width=\"25\" class=\"planimg inline\"></div></td>\n                        <td><div class=\"tablerow clickzero\"><img src=\"../../../assets/yes.png\" width=\"25\" class=\"planimg inline\"></div></td>\n                        <td><div class=\"tablerow clickzero\"><img src=\"../../../assets/yes.png\" width=\"25\" class=\"planimg inline\"></div></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Processing Charges</th>\n                        <td><div class=\"floatRight hidden-phone\"><p class=\"inline shippingcharge\"> ₹ 150</p></div></td>\n                        <td><div class=\"tablerow clickzero\"><img src=\"../../../assets/yes.png\" width=\"25\" class=\"planimg inline\"></div></td>\n                        <td><div class=\"tablerow clickzero\"><img src=\"../../../assets/yes.png\" width=\"25\" class=\"planimg inline\"></div></td>\n                        <td><div class=\"tablerow clickzero\"><img src=\"../../../assets/yes.png\" width=\"25\" class=\"planimg inline\"></div></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">RTI Drafting Charges</th>\n                        <td><div class=\"floatRight hidden-phone\"><p class=\"inline shippingcharge\"> ₹ 100</p></div></td>\n                        <td><div class=\"tablerow clickzero\"><img src=\"../../../assets/no.png\" width=\"25\" class=\"planimg inline\"></div></td>\n                        <td><div class=\"tablerow clickzero\"><img src=\"../../../assets/yes.png\" width=\"25\" class=\"planimg inline\"></div></td>\n                        <td><div class=\"tablerow clickzero\"><img src=\"../../../assets/yes.png\" width=\"25\" class=\"planimg inline\"></div></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Consultation by RTI Lawyer/Expert on Email/Phone</th>\n                        <td><div class=\"floatRight hidden-phone\"><p class=\"inline shippingcharge\"> ₹ 200</p></div></td>\n                        <td><div class=\"tablerow clickzero\"><img src=\"../../../assets/no.png\" width=\"25\" class=\"planimg inline\"></div></td>\n                        <td><div class=\"tablerow clickzero\"><img src=\"../../../assets/no.png\" width=\"25\" class=\"planimg inline\"></div></td>\n                        <td><div class=\"tablerow clickzero\"><img src=\"../../../assets/yes.png\" width=\"25\" class=\"planimg inline\"></div></td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\" colspan=\"2\">Choose your Option</th>\n                            <td><div class=\"floatRight hidden-phone\"><input type=\"checkbox\"> ₹ 199</div></td>\n                            <td><div class=\"floatRight hidden-phone\"><input type=\"checkbox\"> ₹ 299</div></td>\n                            <td><div class=\"floatRight hidden-phone\"><input type=\"checkbox\"> ₹ 499</div></td>\n                        </tr>\n                    </tbody>\n                  </table>\n                  <div class=\"btn-group\" style=\"margin-left:87%;margin-top:3%\" role=\"group\" aria-label=\"Basic example\">\n                        <p><span><button type=\"button\" class=\"btn btn-secondary\">Total:</button></span></p>\n                        \n                    </div>\n                  \n                  \n                <hr class=\"mb-4\">\n              <h4 class=\"mb-3\">Payment</h4>\n              <div class=\"d-block my-3\">\n                <div class=\"custom-control custom-radio\">\n                  <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\n                  <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n                </div>\n                <div class=\"custom-control custom-radio\">\n                  <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n                  <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n                </div>\n                <div class=\"custom-control custom-radio\">\n                  <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n                  <label class=\"custom-control-label\" for=\"paypal\">PayPal</label>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6 mb-3\">\n                  <label for=\"cc-name\">Name on card</label>\n                  <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>\n                  <small class=\"text-muted\">Full name as displayed on card</small>\n                  <div class=\"invalid-feedback\">\n                    Name on card is required\n                  </div>\n                </div>\n                <div class=\"col-md-6 mb-3\">\n                  <label for=\"cc-number\">Credit card number</label>\n                  <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>\n                  <div class=\"invalid-feedback\">\n                    Credit card number is required\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-3 mb-3\">\n                  <label for=\"cc-expiration\">Expiration</label>\n                  <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\n                  <div class=\"invalid-feedback\">\n                    Expiration date required\n                  </div>\n                </div>\n                <div class=\"col-md-3 mb-3\">\n                  <label for=\"cc-cvv\">CVV</label>\n                  <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\n                  <div class=\"invalid-feedback\">\n                    Security code required\n                  </div>\n                </div>\n              </div>\n              \n              <hr class=\"mb-4\">\n              <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Continue to checkout</button>\n            </form>\n          </div>\n\n        </div>\n        </div>\n        <div class=\"footer\">\n          <app-footer></app-footer>\n        </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/userview/userview.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/userview/userview.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"conatiner\">\n    <div class=\"sidebar\">\n        <div class=\"filters\"> Filter</div>\n        <div class=\"filtertype\">\n            <div class=\"filter\">\n                <p>Color</p>\n                <div class=\"filter-option\"> \n                    <div *ngFor=\"let color of colours\">\n                        <input type=\"checkbox\">{{ color }}\n                    </div>\n                </div>\n            </div>\n            <div class=\"filter\"> \n                <p>Brand</p>\n                <div class=\"filter-option\">\n                    <div *ngFor=\"let brand of brands\">\n                        <input type=\"checkbox\">{{ brand }}\n                    </div>\n                </div>\n            </div>\n            <div class=\"filter\"> \n                <p>Price</p>\n                <div class=\"filter-container\">\n                    <div>\n                        <select name=\"cars\" id=\"cars\">Price\n                            <option value=\"Min\">Min</option>\n                            <option value=\"2000\">200$</option>\n                            <option value=\"4000\">500$</option>\n                            <option value=\"6000\">800$</option>\n                            <option value=\"10000\">1500$</option>\n                        </select>\n                    </div>\n                    <div>\n                        <select name=\"cars\" id=\"cars\">Max\n                            <option value=\"Max\">Max</option>\n                            <option value=\"10000\">1500$</option>\n                            <option value=\"6000\">800$</option>\n                            <option value=\"4000\">500$</option>\n                            <option value=\"2000\">200$</option>\n                        </select>\n                    </div>\n                </div>\n                \n            </div>\n            <div class=\"filter\">\n                <p>Discount</p>\n                <div class=\"filter-container\">\n                    <div>\n                        <select name=\"cars\" id=\"cars\">Discount\n                            <option value=\"Min\">Min</option>\n                            <option value=\"2000\">2000</option>\n                            <option value=\"4000\">4000</option>\n                            <option value=\"6000\">6000</option>\n                            <option value=\"10000\">10000</option>\n                        </select>\n                    </div>\n                    <div>\n                        <select name=\"cars\" id=\"cars\">Max\n                            <option value=\"Max\">Max</option>\n                            <option value=\"10000\">10000</option>\n                            <option value=\"6000\">6000</option>\n                            <option value=\"4000\">4000</option>\n                            <option value=\"2000\">2000</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"product-container\">\n        <div class=\"product\" *ngFor=\"let product of productList; let i = index\">\n            <img src='{{product.image}}'>\n            <div class=\"product-detail\">\n                <div>\n                    <p>{{ product.title }}</p>\n                    <p>{{ product.brand}}</p>\n                    <p>{{ product.price.final_price }}$</p>\n                </div>\n                <div>\n                    <p>Color: <span>{{ product.colour.title }}</span></p>\n                    <button>+</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/component/constants/multi-step-form.ts":
/*!********************************************************!*\
  !*** ./src/app/component/constants/multi-step-form.ts ***!
  \********************************************************/
/*! exports provided: STEP_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_ITEMS", function() { return STEP_ITEMS; });
var COUNTRY_LIST = [
    { name: 'United States of America', code: 'us' },
    { name: 'United Kingdoms', code: 'gb' },
    { name: 'India', code: 'in' }
];
var DATA_STEP_1 = {
    firstName: { type: 'text', validations: {}, errors: {}, placeholder: 'First Name' },
    lastName: { type: 'text', validations: {}, errors: {}, placeholder: 'Last Name' },
    dateOfBirth: {
        type: 'date',
        validations: {},
        errors: {},
        placeholder: 'Date of Birth'
    }
};
var DATA_STEP_2 = {
    address: { type: 'textarea', validations: {}, errors: {}, placeholder: 'Full Address' },
    country: {
        type: 'select',
        options: COUNTRY_LIST,
        validations: {},
        errors: {},
        placeholder: 'Country'
    }
};
var DATA_STEP_3 = {
    phone: {
        type: 'phone',
        validations: {
            pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/
        },
        errors: {
            pattern: 'Please enter a valid phone number'
        },
        placeholder: 'Contact Number'
    },
    otp: {
        type: 'number',
        validations: {
            required: true,
            minLength: 4
        },
        errors: {
            required: 'This field can not be left blank',
            minlength: 'Minimum length should be 4 characters'
        },
        placeholder: 'One Time Password'
    }
};
var STEP_ITEMS = [
    { label: 'Step 1', data: DATA_STEP_1 },
    { label: 'Step 2', data: DATA_STEP_2 },
    { label: 'Step 3', data: DATA_STEP_3 },
    { label: 'Review & Submit', data: {} }
];



/***/ }),

/***/ "./src/app/user/itrform/itrform.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/user/itrform/itrform.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".field-label {\n  font-size: 0.875em;\n}\n\n.validation-error {\n  color: #cc3c3c;\n  font-size: 0.75em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnV2ZXJtYS9EZXNrdG9wL2l0ci9hbmdjYXJ0L3NyYy9hcHAvdXNlci9pdHJmb3JtL2l0cmZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvaXRyZm9ybS9pdHJmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9pdHJmb3JtL2l0cmZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmllbGQtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgfVxuICBcbiAgLnZhbGlkYXRpb24tZXJyb3Ige1xuICAgIGNvbG9yOiAjY2MzYzNjO1xuICAgIGZvbnQtc2l6ZTogMC43NTBlbTtcbiAgfVxuICAiLCIuZmllbGQtbGFiZWwge1xuICBmb250LXNpemU6IDAuODc1ZW07XG59XG5cbi52YWxpZGF0aW9uLWVycm9yIHtcbiAgY29sb3I6ICNjYzNjM2M7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/itrform/itrform.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/itrform/itrform.component.ts ***!
  \***************************************************/
/*! exports provided: ItrformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItrformComponent", function() { return ItrformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _component_constants_multi_step_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/constants/multi-step-form */ "./src/app/component/constants/multi-step-form.ts");




var ItrformComponent = /** @class */ (function () {
    function ItrformComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ItrformComponent.prototype.ngOnInit = function () {
        // TODO: add interfaces and enums wherever appropriate
        var _this = this;
        this.activeStepIndex = 0;
        this.masterForm = [];
        this.currentFormContent = [];
        this.formFields = [];
        this.formContent = _component_constants_multi_step_form__WEBPACK_IMPORTED_MODULE_3__["STEP_ITEMS"];
        this.stepItems = this.formContent;
        // NOTE: this can be cofigured to create a single form when needed
        this.stepItems.forEach(function (data, i) {
            // holds name, validators, placeholder of all steps
            _this.currentFormContent.push(_this.stepItems[i]['data']);
            // holds string values for each field of all steps
            _this.formFields.push(Object.keys(_this.currentFormContent[i]));
            // holds all form groups
            _this.masterForm.push(_this.buildForm(_this.currentFormContent[i]));
        });
    };
    // build separate FormGroups for each form
    ItrformComponent.prototype.buildForm = function (currentFormContent) {
        var _this = this;
        var formDetails = Object.keys(currentFormContent).reduce(function (obj, key) {
            obj[key] = ['', _this.getValidators(currentFormContent[key])];
            return obj;
        }, {});
        return this._formBuilder.group(formDetails);
    };
    // get validator(s) for each field, if any
    ItrformComponent.prototype.getValidators = function (formField) {
        var fieldValidators = Object.keys(formField.validations).map(function (validator) {
            if (validator === 'required') {
                return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"][validator];
            }
            else {
                return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"][validator](formField.validations[validator]);
            }
        });
        return fieldValidators;
    };
    // get validation error messages per error, per field
    ItrformComponent.prototype.getValidationMessage = function (formIndex, formFieldName) {
        var formErrors = this.masterForm[formIndex].get(formFieldName).errors;
        var errorMessages = this.currentFormContent[formIndex][formFieldName]
            .errors;
        var validationError = errorMessages[Object.keys(formErrors)[0]];
        return validationError;
    };
    ItrformComponent.prototype.goToStep = function (step) {
        this.activeStepIndex =
            step === 'prev' ? this.activeStepIndex - 1 : this.activeStepIndex + 1;
        this.setFormPreview();
    };
    ItrformComponent.prototype.setFormPreview = function () {
        this.formData = this.masterForm.reduce(function (masterForm, currentForm) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, masterForm, currentForm.value)); }, {});
        this.masterFormFields = Object.keys(this.formData);
    };
    ItrformComponent.prototype.onFormSubmit = function () {
        // emit aggregate form data to parent component, where we POST
        this.formSubmit.emit(this.formData);
    };
    ItrformComponent.prototype.trackByFn = function (index) {
        return index;
    };
    ItrformComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ItrformComponent.prototype, "formSubmit", void 0);
    ItrformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-itrform',
            template: __webpack_require__(/*! raw-loader!./itrform.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/itrform/itrform.component.html"),
            styles: [__webpack_require__(/*! ./itrform.component.scss */ "./src/app/user/itrform/itrform.component.scss")]
        })
    ], ItrformComponent);
    return ItrformComponent;
}());



/***/ }),

/***/ "./src/app/user/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-container {\n  padding: 0 5% 5% 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnV2ZXJtYS9EZXNrdG9wL2l0ci9hbmdjYXJ0L3NyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAwIDUlIDUlIDUlO1xufSIsIi5yZWdpc3Rlci1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDUlIDUlIDUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _component_constants_multi_step_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/constants/multi-step-form */ "./src/app/component/constants/multi-step-form.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // TODO: add interfaces and enums wherever appropriate
        var _this = this;
        this.activeStepIndex = 0;
        this.masterForm = [];
        this.currentFormContent = [];
        this.formFields = [];
        this.formContent = _component_constants_multi_step_form__WEBPACK_IMPORTED_MODULE_3__["STEP_ITEMS"];
        this.stepItems = this.formContent;
        // NOTE: this can be cofigured to create a single form when needed
        this.stepItems.forEach(function (data, i) {
            // holds name, validators, placeholder of all steps
            _this.currentFormContent.push(_this.stepItems[i]['data']);
            // holds string values for each field of all steps
            _this.formFields.push(Object.keys(_this.currentFormContent[i]));
            // holds all form groups
            _this.masterForm.push(_this.buildForm(_this.currentFormContent[i]));
        });
    };
    // build separate FormGroups for each form
    RegisterComponent.prototype.buildForm = function (currentFormContent) {
        var _this = this;
        var formDetails = Object.keys(currentFormContent).reduce(function (obj, key) {
            obj[key] = ['', _this.getValidators(currentFormContent[key])];
            return obj;
        }, {});
        return this._formBuilder.group(formDetails);
    };
    // get validator(s) for each field, if any
    RegisterComponent.prototype.getValidators = function (formField) {
        var fieldValidators = Object.keys(formField.validations).map(function (validator) {
            if (validator === 'required') {
                return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"][validator];
            }
            else {
                return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"][validator](formField.validations[validator]);
            }
        });
        return fieldValidators;
    };
    // get validation error messages per error, per field
    RegisterComponent.prototype.getValidationMessage = function (formIndex, formFieldName) {
        var formErrors = this.masterForm[formIndex].get(formFieldName).errors;
        var errorMessages = this.currentFormContent[formIndex][formFieldName]
            .errors;
        var validationError = errorMessages[Object.keys(formErrors)[0]];
        return validationError;
    };
    RegisterComponent.prototype.goToStep = function (step) {
        this.activeStepIndex =
            step === 'prev' ? this.activeStepIndex - 1 : this.activeStepIndex + 1;
        this.setFormPreview();
    };
    RegisterComponent.prototype.setFormPreview = function () {
        this.formData = this.masterForm.reduce(function (masterForm, currentForm) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, masterForm, currentForm.value)); }, {});
        this.masterFormFields = Object.keys(this.formData);
    };
    RegisterComponent.prototype.onFormSubmit = function () {
        // emit aggregate form data to parent component, where we POST
        this.formSubmit.emit(this.formData);
    };
    RegisterComponent.prototype.trackByFn = function (index) {
        return index;
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], RegisterComponent.prototype, "formSubmit", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/user/register/register.component.scss")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userview_userview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userview/userview.component */ "./src/app/user/userview/userview.component.ts");
/* harmony import */ var _itrform_itrform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itrform/itrform.component */ "./src/app/user/itrform/itrform.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user/register/register.component.ts");






var routes = [
    { path: "",
        children: [
            { path: "userView", component: _userview_userview_component__WEBPACK_IMPORTED_MODULE_3__["UserviewComponent"] },
            { path: "itrform", component: _itrform_itrform_component__WEBPACK_IMPORTED_MODULE_4__["ItrformComponent"] },
            { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] }
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _userview_userview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userview/userview.component */ "./src/app/user/userview/userview.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/component.module */ "./src/app/component/component.module.ts");
/* harmony import */ var _itrform_itrform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./itrform/itrform.component */ "./src/app/user/itrform/itrform.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user/register/register.component.ts");









var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_userview_userview_component__WEBPACK_IMPORTED_MODULE_3__["UserviewComponent"], _itrform_itrform_component__WEBPACK_IMPORTED_MODULE_7__["ItrformComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]],
            imports: [
                _component_component_module__WEBPACK_IMPORTED_MODULE_6__["ComponentModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            exports: [_userview_userview_component__WEBPACK_IMPORTED_MODULE_3__["UserviewComponent"], _itrform_itrform_component__WEBPACK_IMPORTED_MODULE_7__["ItrformComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]],
            entryComponents: [_userview_userview_component__WEBPACK_IMPORTED_MODULE_3__["UserviewComponent"]],
            providers: []
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/userview/userview.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user/userview/userview.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".conatiner {\n  width: 100%;\n  display: flex;\n}\n\n.sidebar {\n  width: 20%;\n  border: 1px solid gray;\n}\n\n.sidebar .filters {\n  padding: 1%;\n  border: 1px solid gray;\n}\n\n.filtertype .filter {\n  margin: 1%;\n  padding: 4%;\n  border: 1px solid gray;\n}\n\n.product-container {\n  width: 100%;\n  margin-top: 10px;\n  border-bottom: 1px solid gray;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.product {\n  width: 100px;\n  padding-left: 5%;\n  margin-left: 20px;\n}\n\n.product img {\n  width: 100%;\n  height: 100px;\n  border: 1px solid gray;\n  border-radius: 5%;\n}\n\n.product p {\n  margin-top: 2%;\n  text-align: start;\n  font-size: 10px;\n}\n\n.product-detail {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.filter-option {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n.filter-container {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.filter-container p {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnV2ZXJtYS9EZXNrdG9wL2l0ci9hbmdjYXJ0L3NyYy9hcHAvdXNlci91c2Vydmlldy91c2Vydmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci91c2Vydmlldy91c2Vydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLFdBQUE7RUFDQSxhQUFBO0FDQ0g7O0FEQ0E7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7QUNFSjs7QURESTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtBQ0dSOztBREFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREpJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDTVI7O0FESkk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTVI7O0FESEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ01KOztBREpBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ09KOztBRExBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDUUo7O0FEUEk7RUFDSSxjQUFBO0FDU1IiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXJ2aWV3L3VzZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmF0aW5lciB7XG4gICB3aWR0aDogMTAwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG59XG4uc2lkZWJhciB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICYgLmZpbHRlcnMge1xuICAgICAgICBwYWRkaW5nOjElO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIH0gICAgXG59XG4uZmlsdGVydHlwZSAuZmlsdGVyIHtcbiAgICBtYXJnaW46IDElO1xuICAgIHBhZGRpbmc6NCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbn1cbi5wcm9kdWN0LWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucHJvZHVjdCB7IFxuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICYgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgfVxuICAgICYgcHtcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxufVxuLnByb2R1Y3QtZGV0YWlsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZpbHRlci1vcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcbiAgICAmIHAge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG4iLCIuY29uYXRpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDIwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbn1cbi5zaWRlYmFyIC5maWx0ZXJzIHtcbiAgcGFkZGluZzogMSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5maWx0ZXJ0eXBlIC5maWx0ZXIge1xuICBtYXJnaW46IDElO1xuICBwYWRkaW5nOiA0JTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbn1cblxuLnByb2R1Y3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wcm9kdWN0IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5wcm9kdWN0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn1cbi5wcm9kdWN0IHAge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnByb2R1Y3QtZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZmlsdGVyLW9wdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZpbHRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5maWx0ZXItY29udGFpbmVyIHAge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/userview/userview.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/userview/userview.component.ts ***!
  \*****************************************************/
/*! exports provided: UserviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserviewComponent", function() { return UserviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserviewComponent = /** @class */ (function () {
    function UserviewComponent(router) {
        this.router = router;
        this.currentUser = "";
        this.colours = ["Green", "Blue", "Gold", "Black", "Copper", "Brown", "Bronze", "Maroon"];
        this.brands = ["pe", "znopy", "twin", "holysin", "foxzy", "finery", "scarpia", "adreno"];
        this.searchText = "";
        this.test = "ddf";
        this.products = [
            {
                "id": "SHOEWPCWKQJFGDBQ",
                "colour": {
                    "color": "#00AF33",
                    "title": "Green"
                },
                "brand": "peter england pe",
                "discount": 0,
                "rating": 3.8,
                "image": "https://rukminim1.flixcart.com/image/312/312/j752nww0/shoe/h/5/e/1055-8-provogue-royal-blue-original-imaexgcfmfghaf8f.jpeg?q=70",
                "price": {
                    "final_price": 2399
                },
                "title": "Provogue Running Shoes For Men"
            },
            {
                "id": "SHOEZURHKVX24H8P",
                "colour": {
                    "color": "#33A1DE",
                    "title": "Blue"
                },
                "brand": "znopy",
                "discount": 10,
                "rating": 4.3,
                "image": "https://rukminim1.flixcart.com/image/312/312/jao8uq80/shoe/3/r/q/sm323-9-sparx-white-original-imaezvxwmp6qz6tg.jpeg?q=70",
                "price": {
                    "final_price": 749
                },
                "title": "Sparx SD0323G Canvas Shoes For Men"
            },
            {
                "id": "SHOERHTCZRH8YGMW",
                "colour": {
                    "color": "#FFD700",
                    "title": "Gold"
                },
                "brand": "gowell",
                "discount": 50,
                "rating": 4,
                "image": "https://rukminim1.flixcart.com/image/312/312/shoe/2/p/r/ar4697-414-8-lotto-414-original-imaes9ebjqy4g8cn.jpeg?q=70",
                "price": {
                    "mrp": 2299,
                    "final_price": 1149
                },
                "title": "Lotto Running Shoes For Men"
            },
            {
                "id": "SHOF23SGG6KG5KXK",
                "colour": {
                    "color": "#292421",
                    "title": "Black"
                },
                "brand": "twin",
                "discount": 54,
                "rating": 4.2,
                "image": "https://rukminim1.flixcart.com/image/312/312/jepzrm80/shoe/7/f/h/nm005-8-provogue-black-original-imaf3chbxgtdkhfv.jpeg?q=70",
                "price": {
                    "mrp": 1699,
                    "final_price": 769
                },
                "title": "Provogue FCS-005 Canvas Shoes For Men"
            },
            {
                "id": "SHOEQDTHFC8CAYWY",
                "colour": {
                    "color": "#B87333",
                    "title": "Copper"
                },
                "brand": "holysin",
                "discount": 50,
                "rating": 4.4,
                "image": "https://rukminim1.flixcart.com/image/312/312/shoe/y/w/y/vn0002gprvn1-9-vans-black-formula-one-checkerboard-original-imaes6y8fsbbqqfc.jpeg?q=70",
                "price": {
                    "mrp": 2999,
                    "final_price": 1499
                },
                "title": "Vans CLASSIC SLIP-ON Loafers For Men"
            },
            {
                "id": "SHOFFBZ8BY5RKRAN",
                "colour": {
                    "color": "#5C3317",
                    "title": "Brown"
                },
                "brand": "foxzy",
                "discount": 45,
                "rating": 4.4,
                "image": "https://rukminim1.flixcart.com/image/312/312/jerf7gw0/shoe/a/u/z/run-dashride-xtreme-ss18-8-reebok-navy-neon-gren-original-imaf3dd3zaysmgag.jpeg?q=70",
                "price": {
                    "mrp": 3999,
                    "final_price": 2199
                },
                "title": "REEBOK RUN DASHRIDE XTREME Running Shoes For Men"
            },
            {
                "id": "SHOF2YU6JEHCSHJH",
                "colour": {
                    "color": "#5C3317",
                    "title": "Brown"
                },
                "brand": "finery",
                "discount": 0,
                "rating": 3.4,
                "image": "https://rukminim1.flixcart.com/image/312/312/jd0jtzk0/shoe/6/z/d/af-103-10-andrew-scott-brown-original-imaf2ywnvj7s6n5y.jpeg?q=70",
                "price": {
                    "final_price": 499
                },
                "title": "Andrew Scott High Grade PU Loafers For Men"
            },
            {
                "id": "SHOEXP7YXBFDNPDB",
                "colour": {
                    "color": "#8C7853",
                    "title": "Bronze"
                },
                "brand": "scarpia",
                "discount": 65,
                "rating": 3.9,
                "image": "https://rukminim1.flixcart.com/image/312/312/j7z2wsw0/shoe/y/g/x/ca4050-9-kraasa-beige-original-imaexqtch3fwwjt5.jpeg?q=70",
                "price": {
                    "mrp": 1299,
                    "final_price": 499
                },
                "title": "Kraasa The Rock Boots For Men"
            },
            {
                "id": "SHOF2WTUQMH6MJDB",
                "colour": {
                    "color": "#B87333",
                    "title": "Copper"
                },
                "brand": "adreno",
                "discount": 30,
                "rating": 3.8,
                "image": "https://rukminim1.flixcart.com/image/312/312/je5zlow0/shoe/h/u/y/c-s-1aor-6-glizt-orange-original-imaf2xfdey8fg6uh.jpeg?q=70",
                "price": {
                    "mrp": 999,
                    "final_price": 699
                },
                "title": "Glizt Running Shoes For Men"
            },
            {
                "id": "SHOEVQTQYJZRSXCP",
                "colour": {
                    "color": "#800000",
                    "title": "Maroon"
                },
                "brand": "black macy",
                "discount": 55,
                "rating": 4,
                "image": "https://rukminim1.flixcart.com/image/312/312/j5mrxjk0/shoe/6/s/y/vertigo-8-lotto-10-original-imaewa2sjfnjh6up.jpeg?q=70",
                "price": {
                    "mrp": 2499,
                    "final_price": 1119
                },
                "title": "Lotto VERTIGO Running Shoes For Men"
            },
            {
                "id": "SHOF23SGQNPFFSNC",
                "colour": {
                    "color": "#900020",
                    "title": "Burgundy"
                },
                "brand": "marathon",
                "discount": 54,
                "rating": 4.2,
                "image": "https://rukminim1.flixcart.com/image/312/312/jepzrm80/shoe/k/r/5/nm005-8-provogue-aqua-original-imaf3chbsddrrj9x.jpeg?q=70",
                "price": {
                    "mrp": 1699,
                    "final_price": 769
                },
                "title": "Provogue FCS-005 Canvas Shoes For Men"
            },
            {
                "id": "SHOF3FDYS9CKEGRX",
                "colour": {
                    "color": "#FFD700",
                    "title": "Gold"
                },
                "brand": "trv",
                "discount": 54,
                "rating": 4,
                "image": "https://rukminim1.flixcart.com/image/312/312/jebpd3k0/shoe/x/t/d/multicolor-combo-2-678-698-7-shoefly-multicolor-original-imaf3ffcguxggfed.jpeg?q=70",
                "price": {
                    "mrp": 998,
                    "final_price": 509
                },
                "title": "Axter Multicolor Combo-(2)-678-698 Casuals For Men"
            },
            {
                "id": "SHOEXYCZYZQN9ZPD",
                "colour": {
                    "color": "#292421",
                    "title": "Black"
                },
                "brand": "fine arch",
                "discount": 46,
                "rating": 3.8,
                "image": "https://rukminim1.flixcart.com/image/312/312/j7usl8w0/shoe/z/p/d/5002-7-footstair-blue-white-original-imaexxv8f3zwg2zj.jpeg?q=70",
                "price": {
                    "mrp": 498,
                    "final_price": 299
                },
                "title": "FOOTSTAIR Loafers For Men"
            },
            {
                "id": "SHOFFBZ7YGFNRGHQ",
                "colour": {
                    "color": "#5C3317",
                    "title": "Brown"
                },
                "brand": "kaption",
                "discount": 45,
                "rating": 4.1,
                "image": "https://rukminim1.flixcart.com/image/312/312/jerf7gw0/shoe/m/n/h/smooth-flyer-xtreme-ss18-8-reebok-black-cool-shadow-green-original-imaf3dd2hbrhz7rn.jpeg?q=70",
                "price": {
                    "mrp": 3999,
                    "final_price": 2199
                },
                "title": "REEBOK SMOOTH FLYER XTREME Running Shoes For Men"
            }
        ];
    }
    UserviewComponent.prototype.ngOnInit = function () {
        this.currentUser = sessionStorage.getItem('userName');
        if (!this.currentUser) {
            this.router.navigate(["/login"]);
        }
        this.getProductDetail();
    };
    UserviewComponent.prototype.getProductDetail = function () {
        this.productList = this.products;
    };
    UserviewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    UserviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userview',
            template: __webpack_require__(/*! raw-loader!./userview.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/userview/userview.component.html"),
            styles: [__webpack_require__(/*! ./userview.component.scss */ "./src/app/user/userview/userview.component.scss")]
        })
    ], UserviewComponent);
    return UserviewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module-es5.js.map