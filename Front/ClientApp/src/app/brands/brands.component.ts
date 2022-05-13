import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component';
import { Brand } from '../cache.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent extends BaseComponent {
  override async ngOnInit() {
    if (this.cs.brands.length > 0) {
      this.activeBrand = this.cs.brands[0];
    }
  }

  activeBrand!: Brand;
}
