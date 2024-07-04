import { Component, Input } from '@angular/core';
import { IProduct } from '../../Models/IProduct';

@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrl: './card-shop.component.scss'
})
export class CardShopComponent {
@Input() Product:IProduct;
}
