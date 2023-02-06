import {Injectable} from '@angular/core';
import {Operation} from "../operation/operation";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private readonly API_CORRECT = 'http://localhost:3000/correct-operations';
  private readonly API_WRONG = 'http://localhost:3000/wrong-operations';

  constructor(private http: HttpClient) { }

  getNewOperation(): Operation {
    const val1 = Math.floor(Math.random() * 10);
    const val2 = Math.floor(Math.random() * 10);

    return {
      label: val1 + ' X ' + val2,
      result: val1 * val2
    };
  }

  listCorrectOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.API_CORRECT)
  }
  listWrongOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.API_WRONG)
  }
  addCorrectOperation(operation: Operation): Observable<Operation> {
    return this.http.post<Operation>(this.API_CORRECT, operation);
  }
  addWrongOperation(operation: Operation): Observable<Operation> {
    return this.http.post<Operation>(this.API_WRONG, operation);
  }
}
