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
var employee_service_1 = require("./employee.service");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeService) {
        this.employeService = employeService;
        this.selectedEmployeeCountRadionButton = "All";
        this.employees = [];
        this.statusMessage = "Data loading, please wait...";
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.employeService.
        this.employeService.getEmployees()
            .subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) {
            _this.statusMessage = "problem with the service , please try again..";
            console.error(error);
        });
    };
    EmployeeListComponent.prototype.getEmployees = function () {
        var dataModel1 = {
            Code: "008", Name: "sunchi", Gender: "Female", AnualSalary: 50000, DateOfBirth: '04/25/1988'
        };
        var dataModel2 = {
            Code: "009", Name: "owasim", Gender: "Male", AnualSalary: 40000, DateOfBirth: '04/25/1988'
        };
        this.employees.push(dataModel1);
        this.employees.push(dataModel2);
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.Code;
    };
    EmployeeListComponent.prototype.totalEmployeeCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.totalMaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.Gender === "Male"; }).length;
    };
    EmployeeListComponent.prototype.totalFemaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.Gender === "Female"; }).length;
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChage = function (selectdRadioButton) {
        this.selectedEmployeeCountRadionButton = selectdRadioButton;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'employee-List',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css'],
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map