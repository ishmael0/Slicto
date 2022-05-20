import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component';
import { Brand, Category, Product } from '../cache.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BaseComponent {
  bread: Category[] = [];
  product!: Product;
  brand!: Brand;
  override async ngOnInit() {
    let id = +this.getParam('id');
    this.product = this.cs.testP;
    var cat = this.cs.rawCategories.find(c => c.Id == this.product.CategoryId);
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
    this.brand = this.cs.brands.find(c => c.Id == this.product.BrandId)!;

  }

}
