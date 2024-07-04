import { Component, HostListener, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IPagination } from '../shared/Models/IPagination';
import { IProduct } from '../shared/Models/IProduct';
import { IBrand } from '../shared/Models/IBrand';
import { IType } from '../shared/Models/IType';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  data:IPagination<IProduct>;
  brands:IBrand[] =[];
  types:IType[]=[];
showFiller=true;
constructor(private shopService:ShopService){}


  ngOnInit(): void {
  this.getProducts();
  this.getBrands();
  this.getTypes();
  }
@HostListener("window:resize")
public onWindowResize(){
  window.innerWidth < 960 ? this.showFiller=false : this.showFiller=true
}






  // PRIVATE HELPER METHODS
  private getBrands() {
    this.shopService.getProductBrands().subscribe({
      next:(response)=>{
        this.brands=response;
      }
    });
  }

  private getTypes() {
    this.shopService.getProductTypes().subscribe({
      next:(response)=>{
        this.types=response;
      }
    });
  }

  private getProducts() {
    this.shopService.getProducts().subscribe({
      next:(response)=>{
        this.data=response;
      }
    });
  }
}
