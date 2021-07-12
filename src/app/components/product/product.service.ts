import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl= "http://localhost:3001/products"

  constructor(private snackbar : MatSnackBar,
    private http : HttpClient) { } 

  showMessage( msg:string):void{
  this.snackbar.open(msg, "X",{
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition:'top'
  })
  }
 create(product:product):Observable<product>{
  return this.http.post<product>(this.baseUrl,product)
 }
  
read(): Observable<product[]>{
  return this.http.get<product[]>(this.baseUrl)
}

readById(id: string):Observable<product> {
  const url = `${this.baseUrl}/${id}`
  return this.http.get<product>(url)
}

update(product:product): Observable<product>{
  const url = `${this.baseUrl}/${product.id}`
  return this.http.put<product>(url, product)
}

  }


