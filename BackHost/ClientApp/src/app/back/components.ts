import { Component, OnInit, ChangeDetectionStrategy, Injector } from '@angular/core';
import { BaseComponent } from '../../../../../../Santel/ClientApp/src/app/template/base/base.component';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { getNameOf, HTTPTypes, numberToText, RequestPlus, toTreeHelper, ValueTitle } from '../../../../../../Santel/ClientApp/src/app/services/utils';
import { Brand, Category, City, Color, Keyword, Product, Province } from './back.module';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent extends BaseComponent<Category> {
}

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandComponent extends BaseComponent<Brand> {
}


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorComponent extends BaseComponent<Color> {
}

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProvinceComponent extends BaseComponent<Province> {

}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityComponent extends BaseComponent<City> {
  override async fill() {
    this.listCache.provinces = this.dataManager.getLoadedData(Province);
  }
}


@Component({
  selector: 'app-key-word',
  templateUrl: './key-word.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyWordComponent extends BaseComponent<Keyword> {
 
}

@Component({
  selector: 'product-word',
  templateUrl: './product.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent extends BaseComponent<Product> {
  override async fill() {
    var categories = this.dataManager.getLoadedData(Category);
    this.listCache.categoriesAsTree = toTreeHelper(categories, 'Id', 'ParentCategoryId', null );
    this.listCache.colors = this.dataManager.getLoadedData(Color);
   }
}



