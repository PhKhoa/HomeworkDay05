import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from './materials/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'BapTapAngular';
  productForm!: FormGroup;

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(Date.now(), [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      //brand: new FormControl('', [Validators.required]),
      imgSrc: new FormControl(
        'https://product.hstatic.net/1000281824/product/img_9919_26d1c4e8cab84d928e701e71d21adb8b_large.jpeg'
      ),
    });
  }

  productList: Product[] = [
    {
      id: Date.now(),
      name: 'Degrey Raglan Line Tee Đen - DRLD',
      price: 100,
      //brand: 'Yeezy',
      imgSrc: 'https://product.hstatic.net/1000281824/product/img_9919_26d1c4e8cab84d928e701e71d21adb8b_large.jpeg',
    },
  ];

  addProduct(newItem: Product) {
    this.productList.push(newItem);
    // console.log(newItem);
  }

  delete(value: number) {
    const index = this.productList.findIndex(item => item.id === value);
    if (index !== -1) {
      this.productList.splice(index, 1);
    }
  }
}
