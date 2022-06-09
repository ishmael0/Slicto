import { Component, OnInit, ChangeDetectionStrategy, Injector } from '@angular/core';
import { BaseComponent } from '../../../../../../Santel/ClientApp/src/app/template/base/base.component';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { getNameOf, HTTPTypes, JM, MakeId, numberToText, NZNotificationTypes, RequestPlus, toTreeHelper, ValueTitle } from '../../../../../../Santel/ClientApp/src/app/services/utils';
import { Address, Brand, Category, City, Color, Customer, Image, Invoice, Keyword, Model, Product, Province, Size } from './back.module';
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
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerComponent extends BaseComponent<Customer> {

  override async beforSet() {
    await super.beforSet();
    let x: Address[] = this.selectedForm().form.controls['Addresses'].value;
    if (!x) x = [];
    for (var i = 0; i < x.length; i++) {
      if (!x[i].Id)
        x[i].Id = MakeId(8);
    }
    this.selectedForm().form.controls['Addresses'].setValue(x);
  }
  override async fill() {
    await super.fill();
    let provinces: Province[] = this.dataManager.getLoadedData(Province);
    let cities: City[] = this.dataManager.getLoadedData(City);
    this.listCache.provinces = provinces.map(c => ({
      label: c.Title, children:
        cities.filter(d => d.ProvinceId == c.Id).map(d => ({ label: d.Title, value: d.Id, isLeaf: true }))
    }));
    this.listCache.cities = cities.map(c => ({ value: c.Id, label: provinces.find(d => d.Id == c.ProvinceId)?.Title + "/" + c.Title }))
  }
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
  selector: 'app-model',
  templateUrl: './model.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelComponent extends BaseComponent<Model> {
}

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SizeComponent extends BaseComponent<Size> {
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
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceComponent extends BaseComponent<Invoice> {
  customerModal = false;
  addCustomer(e: any) {
    this.selectedForm().form.controls['CustomerId'].setValue(e.Id);
    this.selectedForm().form.controls['Customer'].setValue(e);
    this.customerModal = false;
    this.makeItDirty(this.selectedForm().form);
  }
  sumOfOther(item: FormGroup) {
    var x: any[] = item.controls['OtherCostsOffs'].value;
    return x.reduce((p, c) => { return p + c.Value ? c.Value : 0; }, 0)
  };
  sumAll(item: FormGroup) {
    return 0;
  }

}


@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyWordComponent extends BaseComponent<Keyword> {

}

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent extends BaseComponent<Product> {
  imageModal = false;
  keywordModal = false;
  docId = 0;
  addKeyword(e: any) {
    this.keywordModal = false;
    let x: Image[] = this.selectedForm().form.controls['KeyWords'].value;
    x = x ? x : [];
    x.push(e);
    this.selectedForm().form.controls['KeyWords'].setValue(x);
    this.makeItDirty(this.selectedForm().form);
  }
  addDoc(e: string) {
    this.imageModal = false;
    let x: Image[] = this.selectedForm().form.controls['Images'].value;
    x.push({ Path: e, Description: '' });
    this.selectedForm().form.controls['Images'].setValue(x);
    this.makeItDirty(this.selectedForm().form);
  }
  override validationCheck() {
    let x = super.validationCheck();
    if (!x) return false;
    if ((this.selectedForm().form.controls['Types'].value as any[]).some(c => !c.Title || c.Title == "")) {
      this.http.createNotification(NZNotificationTypes.error, "خطا", "نام انواع محصول نمیتواند خالی باشد");
      return false;
    }
    return true;
  }
  override async onGet(m: string[], d: JM<Product>) {
    super.onGet(m, d)
    this.dataManager.ViewRecords.forEach(c => {
      c.CategoryTitle = this.listCache.categories.find((d: any) => d.Id == c.CategoryId)?.Title;
    })
  }
  override async fill() {
    this.listCache.categories = this.dataManager.getLoadedData(Category);
    this.listCache.categoriesAsTree = toTreeHelper(this.listCache.categories, 'Id', 'ParentCategoryId', null);
    this.listCache.colors = this.dataManager.getLoadedData(Color);
    this.listCache.models = this.dataManager.getLoadedData(Model);
    this.listCache.sizes = this.dataManager.getLoadedData(Size);
  }
}



