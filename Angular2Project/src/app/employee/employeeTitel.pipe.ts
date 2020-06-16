
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name:'employeeTitle'
})
export class EmployeeTitle implements PipeTransform {
    transform(value: string, gender: string): string {

        if (gender.toLowerCase() == "gender") {
            return "Mr." + ' ' + value
        }
        else {
            return "Miss." + ' ' + value
        }
            
    }
}