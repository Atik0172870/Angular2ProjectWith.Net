import {Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeeCount.component.css']

})
export class EmployeeCount {
    selectedRadioButtonValue: string="All"

    @Output()
    countRadioButtonSelectionChangedEvent: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number = 10;

    @Input()
    male: number = 4;

    @Input()
    female: number = 3;

    onRadionButtonSelectionChange() {
        this.countRadioButtonSelectionChangedEvent.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue)
    }
}
