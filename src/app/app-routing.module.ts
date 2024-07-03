import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopModule } from './shop/shop.module';

const routes: Routes = [
  {
    path:"products" ,title:"shop", loadChildren:()=> import('./shop/shop.module').then(x=>x.ShopModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }