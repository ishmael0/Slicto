import { Component, OnInit, ChangeDetectionStrategy, Injector } from '@angular/core';
import { BaseComponent } from '../../../../../../Santel/ClientApp/src/app/template/base/base.component';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { getNameOf, HTTPTypes, JM, MakeId, numberToText, NZNotificationTypes, RequestPlus, toTreeHelper, ValueTitle } from '../../../../../../Santel/ClientApp/src/app/services/utils';
import { Address, AllOptionTypes, Brand, Category, City, Customer, Image, Invoice, Keyword, Label, Option, OptionType, Product, ProductType, Province } from './back.module';
import { AngularEditorConfig } from '@kolkov/angular-editor';


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
  selector: 'app-option',
  templateUrl: './option.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionComponent extends BaseComponent<Option> {
  override validationCheck() {
    let x = super.validationCheck();
    if (!x) return false;
    if ((this.selectedForm().form.controls['OptionTypes'].value as OptionType[]).some(c => !c.Value || !c.Title || c.Title == "")) {
      this.http.createNotification(NZNotificationTypes.error, "??????", "?????? ?? ?????????? ??????????  ???????????????? ???????? ????????");
      return false;
    }
    return true;
  }
  //add(item: FormGroup) {
  //  let x: OptionType[] = item.controls['OptionTypes'].value;
  //  x = x ? x : [];
  //  //if (item.controls['Type'].value == AllOptionTypes.find(d => d.Title == "Number")) {
  //  //}

  //  this.selectedForm().form.controls['OptionTypes'].setValue(x);
  //  this.makeItDirty(this.selectedForm().form);
  //}
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
    var x: any[] = item.controls['ProductTypesForInvoice'].value;
    return x.reduce((p, c) => { return p + c.Value ? c.Value : 0; }, 0)
  }
  ProductTypesForInvoiceChanged(item: FormGroup, subitem: any) {
    subitem.Total = (subitem.Price - subitem.Off) * subitem.Count;
    this.makeItDirty(item)
  }
}
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent extends BaseComponent<Label> {
  productModal = false;
  addProduct(e: Product) {
    let x: Product[] = this.selectedForm().form.controls['Products'].value;
    x = x ? x : [];
    x.push(e);
    this.selectedForm().form.controls['Products'].setValue(x);
    this.makeItDirty(this.selectedForm().form);
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
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent extends BaseComponent<Product> {
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  //supload: (file: File) => {},


  labelsModal = false;
  imageModal = false;
  productModal = false;
  keywordModal = false;
  docId = 0;

  addKeyword(e: Keyword) {
    let x: Keyword[] = this.selectedForm().form.controls['KeyWords'].value;
    x = x ? x : [];
    if (!x.some(c => c.Id == e.Id))
      x.push(e);
    this.selectedForm().form.controls['KeyWords'].setValue(x);
    this.makeItDirty(this.selectedForm().form);
  }
  addProduct(e: Product) {
    let id: number = this.selectedForm().form.controls['Id'].value;
    if (e.Id == id) return;
    let x: Product[] = this.selectedForm().form.controls['RelatedFrom'].value;
    x = x ? x : [];
    if (!x.some(c => c.Id == e.Id))
      x.push(e);
    this.selectedForm().form.controls['RelatedFrom'].setValue(x);
    this.makeItDirty(this.selectedForm().form);
  }
  addLabel(e: Label) {
    this.keywordModal = false;
    let x: Label[] = this.selectedForm().form.controls['Labels'].value;
    x = x ? x : [];
    if (!x.some(c => c.Id == e.Id))
      x.push(e);
    this.selectedForm().form.controls['Labels'].setValue(x);
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
      this.http.createNotification(NZNotificationTypes.error, "??????", "?????? ?????????? ?????????? ???????????????? ???????? ????????");
      return false;
    }
    return true;
  }
  setSelected(item: FormGroup, pt: ProductType, id: number, value: any) {
    let x = pt.OptionTypes.find(c => c.OptionId == id);
    if (x) {
      x.OptionId = value;
    }
    else {
      pt.OptionTypes.push({ Id: value, OptionId: id, Value: 0, Title: '', Create: '', Status: 0 });
    }
    this.makeItDirty(item)
  }
  getSelected(pt: ProductType, id: number) {
    let x = pt.OptionTypes.find(c => c.OptionId == id)
    if (x) return x.Id;
    return null;
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
    this.listCache.options = this.dataManager.getLoadedData(Option);
    //this.listCache.colors = this.dataManager.getLoadedData(Color);
    //this.listCache.models = this.dataManager.getLoadedData(Model);
    //this.listCache.sizes = this.dataManager.getLoadedData(Size);
    //this.listCache.patterns = this.dataManager.getLoadedData(Pattern);
  }
}



//@Component({
//  selector: 'app-model',
//  templateUrl: './model.component.html',
//  styles: [
//  ],
//  changeDetection: ChangeDetectionStrategy.OnPush
//})
//export class ModelComponent extends BaseComponent<Model> {
//}
//@Component({
//  selector: 'app-pattern',
//  templateUrl: './pattern.component.html',
//  styles: [
//  ],
//  changeDetection: ChangeDetectionStrategy.OnPush
//})
//export class PatternComponent extends BaseComponent<Pattern> { }
//@Component({
//  selector: 'app-size',
//  templateUrl: './size.component.html',
//  styles: [
//  ],
//  changeDetection: ChangeDetectionStrategy.OnPush
//})
//export class SizeComponent extends BaseComponent<Size> {
//}
//@Component({
//  selector: 'app-color',
//  templateUrl: './color.component.html',
//  styles: [
//  ],
//  changeDetection: ChangeDetectionStrategy.OnPush
//})
//export class ColorComponent extends BaseComponent<Color> { }
