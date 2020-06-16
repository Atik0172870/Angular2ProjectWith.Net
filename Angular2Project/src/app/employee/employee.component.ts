import { Component ,OnInit} from "@angular/core";
import { IEmployee } from './Employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service'
import 'rxjs/add/operator/retry'
import 'rxjs/add/operator/retryWhen'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/scan'
import { ISubscription } from 'rxjs/Subscription'


@Component({
    selector: 'my/employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css'] 
})
export class EmployeeComponent implements OnInit {
    employee: IEmployee;
    subscription: ISubscription;
    statusMessage: string="data loading...";
    constructor(private employeeService: EmployeeService
        , private activeRoute: ActivatedRoute, private router: Router) {
       
    }
    onCancelButtonClick() {
        this.statusMessage='Request canceled'
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        let empCode = this.activeRoute.snapshot.params['code']
        this.subscription= this.employeeService.getEmployeeByCode(empCode)
            .retryWhen((error) => {
                return error.scan((retryCount) => {
                    retryCount += 1;
                    if (retryCount < 6) {
                        this.statusMessage = 'retry...attemt # ' + retryCount;
                        return retryCount;
                    }
                    else {
                        throw (error)
                    }
                }, 0).delay(1000)
            })

            .subscribe(
            (employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = "employee with the specific code = " + empCode + " not found"
                } else {
                    this.employee = employeeData
                }
                
            }, (error) => {
                this.statusMessage = "Problem with the service , please try again later !"
                console.log(error)
            }
        )
    }
    backButtonClick(): void {
        this.router.navigate(['/employees']);
    }
      

    taggleDetails(): void {
        
    }
}