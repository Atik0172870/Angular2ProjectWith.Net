import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import { IEmployee } from './Employee'
@Injectable()
export class EmployeeService {
    constructor(private _http: Http) {

    }

    getEmployees(): Observable<IEmployee[]> {

        return this._http.get('http://localhost:50195/api/Employee')
            .map((resoponse: Response) => <IEmployee[]>resoponse.json())
            .catch(this.handleError);

       

        //return [
        //    { code: "001", name: "atik", gender: "male", salary: 50000, birthDate: '04/25/1988' },
        //    { code: "002", name: "limu", gender: "female", salary: 20000, birthDate: '04/25/1988' },
        //    { code: "003", name: "kona", gender: "male", salary: 20000, birthDate: '04/25/1988' },
        //    { code: "004", name: "mahi", gender: "male", salary: 30000, birthDate: '04/25/1988' },
        //    { code: "005", name: "jesi", gender: "female", salary: 15000, birthDate: '04/25/1988' },
        //    { code: "006", name: "mou", gender: "female", salary: 50000, birthDate: '04/25/1988' },
        //    { code: "007", name: "raman", gender: "male", salary: 35000, birthDate: '04/25/1988' },
        //];
    }
    getEmployeeByCode(empCode: string): Observable<IEmployee> {
        return this._http.get('http://localhost:50195/api/Employee/' + empCode)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError)
    }

    handleError(error: Response) {
        //console.error(error);
        return Observable.throw(error)
    }
}