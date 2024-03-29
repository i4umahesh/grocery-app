import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class LoginStateService {

  private mobileSource$ = new BehaviorSubject<any>('');

  eNumbers$ = this.mobileSource$.asObservable()
  constructor() {}
  
  getMobileNumber(mNumber: any) { 
    this.mobileSource$.next(mNumber);
  }

}
