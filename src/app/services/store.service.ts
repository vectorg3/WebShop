import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/PRODUCT';
import { IOrder } from '../models/ORDER';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private url: string = 'https://flowerShop-v2n3.onrender.com';

  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}/products`)
  }

}
