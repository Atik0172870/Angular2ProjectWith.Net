import { Component, OnInit } from '@angular/core';
import { IEmployee } from './Employee'
import { EmployeeService } from './employee.service'

@Component({
    selector: 'employee-List',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
  
})
export class EmployeeListComponent implements OnInit {

    selectedEmployeeCountRadionButton: string="All"
    employees: IEmployee[]=[];

   statusMessage: string = "Data loading, please wait...";
    constructor(private employeService: EmployeeService) {
    }
    ngOnInit(): void {
       // this.employeService.
        this.employeService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData,
                (error) => {
                    this.statusMessage ="problem with the service , please try again.."
                    console.error(error)
                });

    }

    getEmployees(): void
    {
        let dataModel1: IEmployee = {
            Code: "008", Name: "sunchi", Gender: "Female", AnualSalary: 50000, DateOfBirth: '04/25/1988'
        }
        let dataModel2: IEmployee = {
            Code: "009", Name: "owasim", Gender: "Male", AnualSalary: 40000, DateOfBirth: '04/25/1988'
        }
        this.employees.push(dataModel1)
        this.employees.push(dataModel2)
    }
    trackByEmpCode(index: number, employee: any): string {
        return employee.Code;
    }

    totalEmployeeCount(): number {
        return this.employees.length;
    }

    totalMaleEmployeeCount(): number {
        return this.employees.filter(e => e.Gender === "Male").length;
    }
    totalFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.Gender === "Female").length; 
    }

    onEmployeeCountRadioButtonChage(selectdRadioButton: string): void {
        this.selectedEmployeeCountRadionButton = selectdRadioButton;
    }
}