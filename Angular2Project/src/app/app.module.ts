import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';
import {TestModule } from './test.module';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitle } from './employee/employeeTitel.pipe';
import { EmployeeCount } from './employee/employeeCount.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';
import { EmployeeComponent } from './employee/employee.component';
//import { EmployeeService} from './employee/employee.service'

import { enableProdMode } from '@angular/core';


const appRoutes: Routes =[
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/:code', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: '**', component: PageNotFoundComponent }

];


enableProdMode();
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, TestModule,RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeListComponent
        , EmployeeTitle, EmployeeCount, HomeComponent, PageNotFoundComponent],
   
    bootstrap: [AppComponent],
 //providers : [EmployeeService]
})
export class AppModule { }
