import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private route:Router, private http:HttpClient) { }

  getAllUsers():Observable<any>{
    ////return this.http.get('http://localhost:8012/apiproject/api/getallusers');
    return this.http.get('http://localhost:5555/project');
  }

  getAllShoppattern():Observable<any>{
    return this.http.get('http://localhost:5555/project');
  }

  getAllWishlist():Observable<any>{
    return this.http.get('http://localhost:5555/project');
  }

  getAllmyOrders():Observable<any>{
    return this.http.get('http://localhost:5555/project');
  }

  getAddressBookData():Observable<any>{
    return this.http.get('http://localhost:5555/project');
  }
}
