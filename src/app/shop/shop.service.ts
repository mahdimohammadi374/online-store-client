import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IPagination } from '../shared/Models/IPagination';
import { IProduct } from '../shared/Models/IProduct';
import { IBrand } from '../shared/Models/IBrand';
import { IType } from '../shared/Models/IType';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<IPagination<IProduct>>(
      `${this.baseUrl}/Product/get-all-products`
    );
  }

  getProductBrands(includeAll:boolean=true) {
    return this.http
      .get<IBrand[]>(`${this.baseUrl}/ProductBrand/get-all-product-brands`)
      .pipe(
        map((brands) => {
          if(includeAll){
             brands = [
            ...brands,
            {
              id: 0,
              title: 'همه',
              created: null,
              createdBY: '',
              description: '',
              isActive: null,
              isDeleted: null,
              lastModified: null,
              lastModifiedBy: '',
              products: null,
              summary: null,
            },
          ];
          }
         
          return brands
        })
      );
  }
  getProductTypes(includeAll:boolean=true) {
    return this.http.get<IType[]>(
      `${this.baseUrl}/ProductType/get-all-product-types`
    )
    .pipe(
      map((types) => {
        if(includeAll){
             types = [
          ...types,
          {
            id: 0,
            title: 'همه',
            created: null,
            createdBY: '',
            description: '',
            isActive: null,
            isDeleted: null,
            lastModified: null,
            lastModifiedBy: '',
            products: null,
            summary: null,
          },
        ];
        }
     
        return types
      })
    );
  }
}
