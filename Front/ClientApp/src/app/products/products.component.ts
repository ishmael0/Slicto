import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component';
import { Category } from '../cache.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent {
  order = 1;
  bread: Category[] = [];
  override async ngOnInit() {
    console.log(this.getParam('id'));
    let id = +this.getParam('id');
    var cat = this.cs.rawCategories.find(c => c.Id == id);
    this.bread = [];
    if (cat) {
      this.bread.unshift(cat);
      if (cat.ParentId) {
        var pcat = this.cs.rawCategories.find(c => c.Id == cat!.ParentId);
        if (pcat) {
          this.bread.unshift(pcat);
          if (pcat.ParentId) {
            var ppcat = this.cs.rawCategories.find(c => c.Id == pcat!.ParentId);
            if (ppcat) {
              this.bread.unshift(ppcat);
            }
          }
        }
      }
    }
  }
  orderBy(i: number) {
    this.order = i;
  }
  products: any[] = [
    {
      Id: 1,
      Title: 'کابل شارژر آیفون(اصل)',
      Description: '                کابل شارژر آیفون در 4 رنگ آبی-سفید-مشکی-قرمز با امکان شارژ تبلت (با شدت‌جریان 2.0 آمپر و بالاتر)، امکان شارژ کردن سریع‌تر موبایل...',
      PriceWithDiscount:29000,
      Price: 30000,
      Image:'assets/img/AndroidPIT-samsung-galaxy-s10-plus.jpg'
    }
  ];
}
