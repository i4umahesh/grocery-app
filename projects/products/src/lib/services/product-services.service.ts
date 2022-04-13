import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProductServicesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getJson(): Observable<any> {
    return this.httpClient.get<any>("../../../../../files/products.json")
  }
}
