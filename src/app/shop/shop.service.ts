import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IPagination } from '../shared/Models/IPagination';
import { IProduct } from '../shared/Models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
private baseUrl=environment.baseUrl;
  constructor(private http: HttpClient) { }


  getProducts(){
    return this.http.get<IPagination<IProduct>>(`${this.baseUrl}/Product/get-all-products`)
  }
}
