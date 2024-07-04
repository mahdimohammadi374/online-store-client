import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IPagination } from '../shared/Models/IPagination';
import { IProduct } from '../shared/Models/IProduct';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  data:IPagination<IProduct>;
constructor(private shopService:ShopService){}


  ngOnInit(): void {
  this.getProducts();
  }

  private getProducts() {
    this.shopService.getProducts().subscribe({
      next:(response)=>{
        this.data=response;
      }
    });
  }
}
