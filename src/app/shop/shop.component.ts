import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
constructor(private shopService:ShopService){}


  ngOnInit(): void {
  this.getProducts();
  }

  private getProducts() {
    this.shopService.getProducts().subscribe();
  }
}
