"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employee_service_1 = require("./employee.service");
require("rxjs/add/operator/retry");
require("rxjs/add/operator/retryWhen");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/scan");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService, activeRoute, router) {
        this.employeeService = employeeService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.statusMessage = "data loading...";
    }
    EmployeeComponent.prototype.onCancelButtonClick = function () {
        this.statusMessage = 'Request canceled';
        this.subscription.unsubscribe();
    };
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var empCode = this.activeRoute.snapshot.params['code'];
        this.subscription = this.employeeService.getEmployeeByCode(empCode)
            .retryWhen(function (error) {
            return error.scan(function (retryCount) {
                retryCount += 1;
                if (retryCount < 6) {
                    _this.statusMessage = 'retry...attemt # ' + retryCount;
                    return retryCount;
                }
                else {
                    throw (error);
                }
            }, 0).delay(1000);
        })
            .subscribe(function (employeeData) {
            if (employeeData == null) {
                _this.statusMessage = "employee with the specific code = " + empCode + " not found";
            }
            else {
                _this.employee = employeeData;
            }
        }, function (error) {
            _this.statusMessage = "Problem with the service , please try again later !";
            console.log(error);
        });
    };
    EmployeeComponent.prototype.backButtonClick = function () {
        this.router.navigate(['/employees']);
    };
    EmployeeComponent.prototype.taggleDetails = function () {
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'my/employee',
            templateUrl: 'app/employee/employee.component.html',
            styleUrls: ['app/employee/employee.component.css']
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService,
            router_1.ActivatedRoute, router_1.Router])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map