import { NgModule } from '@angular/core';
import { buildPath, buildPathFromConfig, TemplateModule } from '../../../../../../Santel/ClientApp/src/app/template/template.module';
import { RouterModule, Routes } from '@angular/router';
import { BaseModel, BaseModelStringId, BaseModelWithTitle, ComponentTypes, EntityConfiguration, getNameOf, IdTitle, isUndefinedOrWhiteSpaces, PropertyConfiguration, Status, ValueTitle, WebSiteConfiguration } from '../../../../../../Santel/ClientApp/src/app/services/utils';
import { WebSiteService } from '../../../../../../Santel/ClientApp/src/app/services/website.service';
import { Validators, FormGroup } from '@angular/forms';
import { ActiveStatus, defaultPropertyConfiguration, defaultPropertyWithTitleConfiguration, defaultStatuses, DeletedStatus, FullStatuses, InactiveStatus, PublishedStatus } from '../../../../../../Santel/ClientApp/src/app/services/properties';
import { AngularEditorModule } from '@kolkov/angular-editor';

import "reflect-metadata";
import { CityComponent, BrandComponent, CategoryComponent, KeyWordComponent, ProvinceComponent, ProductComponent, CustomerComponent, InvoiceComponent, LabelComponent, OptionComponent } from './components';



export class Category extends BaseModelWithTitle {
  ParentCategoryId!: number;
  ParentCategory!: Category;
  Description = "";
  Priority = 0;
}

export class Brand extends BaseModelWithTitle {
  Images: Image[] = [];
  Description = "";
  Summary = "";
}

//export class Color extends BaseModelWithTitle {
//  Value = "";
//}
//export class Size extends BaseModelWithTitle {
//}
//export class Pattern extends BaseModelWithTitle {
//}
//export class Model extends BaseModelWithTitle {
//}
export class Province extends BaseModelWithTitle {
}
export class City extends BaseModelWithTitle {
  ProvinceId!: number;
}

export class Keyword extends BaseModelWithTitle {
  //Products: Product[] = [];
  //ProductKeyWords!: ProductKeyword[];
}

export class Product extends BaseModelWithTitle {
  CategoryId!: number;
  EnglishTitle = "";
  Category!: Category;
  Summary = "";
  Description = "";
  Images: Image[] = [];
  Types: ProductType[] = [];
  KeyWords: Keyword[] = [];
  Labels: Label[] = [];
  RelatedFrom: Product[] = [];
  //ProductKeyWords: ProductKeyword[] = [];
  //Labels: Label[] = [];
  //ProductLabels: ProductLabel[] = [];
}

export class Invoice extends BaseModel {
  CustomerId!: number;
  Customer?: Customer;
  Address!: Address;
  OtherCostsOffs: OtherCostsOffsHelper[] = [];
  Price: number = 0;
  IsPaid: boolean = false;
  Description = "";
  ProductTypesForInvoice: ProductTypeForInvoice[] = [];
}

export class ProductTypeForBasket {
  ProductTypeId!: number;
  Count!: number;
}
export class OtherCostsOffsHelper {
  Title: string = '';
  Value: number = 0;
}
export class ProductTypeForInvoice extends ProductTypeForBasket {
  Price!: number;
  Off!: number;
  Total = 0;
}

export class ProductType extends BaseModel {
  ProductId!: number;
  Product!: Product;
  Title = "";
  Color!: number;
  ColorId!: number;
  SizeId!: number;
  ModelId!: number;
  Decription = "";
  Price!: number;
  Off!: number;
  SupplyCount!: number;
  SoldCount!: number;
  MaxAllowedBuy!: number;
  OptionTypes: OptionType[] = [];
}

export class Basket extends BaseModel {
  CustomerId!: number;
  Customer!: Customer;
  ProductTypesForBasket: ProductTypeForBasket[] = [];
}

export class Label extends BaseModelWithTitle {
  Color!: string;
  Products: Product[] = [];
  ProductLabels: ProductLabel[] = [];
}

export class ProductLabel {
  Title = "";
  ProductId!: number;
  Product!: Product;
  LabelId!: number;
  Label!: Label;
  Priority!: number;
}


export class ProductKeyword {
  ProductId!: number;
  Product!: Product;
  KeywordId!: number;
  Keyword!: Keyword;
}

export class ProductProduct {
  ProductId!: number;
  Product!: Product;
  RelatedProductId!: number;
  RelatedProduct!: Product;
}

export class Image {
  Path = "";
  Description = "";
}

export class Customer extends BaseModel {
  FirstName = "";
  LastName = "";
  PhoneNumber = "";
  Password = "";
  PhoneNumberConfirm: boolean = false;
  Addresses: Address[] = [];
}

export class Address extends BaseModelStringId {
  Order = 0;
  PostalCode = "";
  ProvinceId!: number;
  CityId!: number;
  FullAddress = "";
  Latitude = "";
  Longitude = "";
}
export const AllOptionTypes: IdTitle<number>[] = [
  { Id: 1, Title: "Color" },
  { Id: 2, Title: "Number" },
  { Id: 3, Title: "String" }
];

export class Option extends BaseModelWithTitle {
  Types: any[] = [];
  Type: number = 0;
  EnglishTitle = "";
  Description: string = "";
  OptionTypes: OptionType[] = [];
}
export class OptionType extends BaseModelWithTitle {
  OptionId!: number;
  Value!: any;
}
//new EntityConfiguration<Color>("Color", Color, ColorComponent, '??????', defaultStatuses, [
//  ...defaultPropertyWithTitleConfiguration,
//  new PropertyConfiguration<Color>(c => c.Value, '??????', { Type: 'color', InPicker: true, InTable: true, Validators: [] }),
//], { componentType: ComponentTypes.table, icon: 'palette' }),

//new EntityConfiguration<Model>("Model", Model, ModelComponent, '??????', defaultStatuses, [
//  ...defaultPropertyWithTitleConfiguration,
//], { componentType: ComponentTypes.table, icon: 'city-variant-outline' }),

//new EntityConfiguration<Size>("Size", Size, SizeComponent, '????????', defaultStatuses, [
//  ...defaultPropertyWithTitleConfiguration,
//], { componentType: ComponentTypes.table, icon: 'city-variant-outline' }),

//new EntityConfiguration<Pattern>("Pattern", Pattern, PatternComponent, '??????', defaultStatuses, [
//  ...defaultPropertyWithTitleConfiguration,
//], { componentType: ComponentTypes.table, icon: 'city-variant-outline' }),




export const config: WebSiteConfiguration = new WebSiteConfiguration('DB', '???????????? ???? ???????? ', 'slicto.com', [




  new EntityConfiguration<Category>("Category", Category, CategoryComponent, '???????? ????????', defaultStatuses, [
    ...defaultPropertyWithTitleConfiguration,
    new PropertyConfiguration<Category>(c => c.ParentCategoryId, '???????? ???????? ????????', { Type: 'fromList', TypeHelper: 'Category', InPicker: false, InTable: false, Validators: [] }),
    new PropertyConfiguration<Category>(c => c.Priority, '????????????', { Type: 'fromList', TypeHelper: 'Category', InPicker: false, InTable: false, Validators: [] }),
  ], { componentType: ComponentTypes.tree, icon: 'view-list', treeParentKey: "ParentCategoryId" }),

  new EntityConfiguration<Brand>("Brand", Brand, BrandComponent, '????????', defaultStatuses, [
    ...defaultPropertyWithTitleConfiguration,
    new PropertyConfiguration<Brand>(c => c.Description, '??????????????', { Type: 'string', InPicker: false, InTable: false, Validators: [] }),
    new PropertyConfiguration<Brand>(c => c.Summary, '??????????', { Type: 'string', InPicker: true, InTable: true, Validators: [] }),
    new PropertyConfiguration<Brand>(c => c.Images, '????????????', { Type: 'list', InPicker: false, InTable: false, InSearch: false, Validators: [] }),
  ], { componentType: ComponentTypes.table, icon: 'material-design' }),

  new EntityConfiguration<Option>("Option", Option, OptionComponent, '?????????? ????', defaultStatuses, [
    ...defaultPropertyWithTitleConfiguration,
    new PropertyConfiguration<Option>(c => c.Description, '??????????????', { Type: 'string', InPicker: true, InTable: true, Validators: [Validators.required] }),
    new PropertyConfiguration<Option>(c => c.EnglishTitle, '???????? ??????????????', { Type: 'string', InPicker: true, InTable: true, Validators: [Validators.required] }),
    new PropertyConfiguration<Option>(c => c.OptionTypes, '?????????? ????', { Type: 'list', InPicker: false, InTable: false, Validators: [] }),
    new PropertyConfiguration<Option>(c => c.Type, '?????? ??????????', { canEdit: false, Type: 'fromList', TypeHelper: 'Types', InPicker: true, InTable: true, Validators: [Validators.required] }),
  ], { componentType: ComponentTypes.table, icon: 'palette', neededPreDefinedValues: { Types: AllOptionTypes } }),



  new EntityConfiguration<Keyword>("Keyword", Keyword, KeyWordComponent, '????????????????', defaultStatuses, [
    ...defaultPropertyWithTitleConfiguration,
  ], { componentType: ComponentTypes.lazytable, icon: 'city-variant-outline' }),

  new EntityConfiguration<Label>("Label", Label, LabelComponent, '???????? ????', defaultStatuses, [
    ...defaultPropertyWithTitleConfiguration,
    new PropertyConfiguration<Label>(c => c.Color, '??????', { Type: 'color', InPicker: true, InTable: true, Validators: [Validators.required] }),
    new PropertyConfiguration<Label>(c => c.Products, '??????????????', { Type: 'list', InPicker: false, InTable: false, Validators: [] }),
    //new PropertyConfiguration<Label>(c => c.ProductLabels, '??????????????', { Type: 'list', InPicker: false, InTable: false, Validators: [] }),
  ], { componentType: ComponentTypes.table, icon: 'tag-multiple-outline', needToLoadAgainOnOpen: true }),



  new EntityConfiguration<Product>("Product", Product, ProductComponent, '??????????????', defaultStatuses, [
    ...defaultPropertyWithTitleConfiguration,

    new PropertyConfiguration<Product>(c => c.CategoryId, '???????? ????????', { Type: 'fromList', TypeHelper: 'categories', value: null, Validators: [Validators.required], InTable: true, InPicker: true }),
    new PropertyConfiguration<Product>(c => c.Images, '????????????  ', { value: [], Validators: [], InTable: false }),
    new PropertyConfiguration<Product>(c => c.EnglishTitle, '?????? ?????????????? ', { Type: 'string', Validators: [], InTable: false }),
    new PropertyConfiguration<Product>(c => c.Summary, '?????????? ', { Type: 'string', Validators: [], InTable: false }),
    new PropertyConfiguration<Product>(c => c.Description, '??????  ', { Type: 'string', Validators: [], InTable: false }),
    new PropertyConfiguration<Product>(c => c.Labels, '???????? ????  ', { Type: 'custom', value: [], Validators: [], InTable: false }),
    new PropertyConfiguration<Product>(c => c.Types, '??????????  ', { Type: 'custom', value: [], Validators: [], InTable: false }),
    new PropertyConfiguration<Product>(c => c.KeyWords, ' ???????? ???????? ????', { Type: 'custom', value: [], Validators: [], InTable: false }),
    new PropertyConfiguration<Product>(c => c.RelatedFrom, ' ?????????????? ??????????', { Type: 'custom', value: [], Validators: [], InTable: false }),
  ], { componentType: ComponentTypes.lazytable, icon: 'city-variant-outline', needToLoadAgainOnOpen: true, neededData: [Category, Option] }),




  new EntityConfiguration<Customer>("Customer", Customer, CustomerComponent, '??????????????', defaultStatuses, [
    ...defaultPropertyConfiguration,
    new PropertyConfiguration<Customer>(c => c.FirstName, '??????  ', { InPicker: true, Type: 'string', value: '', Validators: [Validators.required] }),
    new PropertyConfiguration<Customer>(c => c.LastName, '?????? ????????????????  ', { InPicker: true, Type: 'string', value: '', Validators: [Validators.required] }),
    new PropertyConfiguration<Customer>(c => c.Addresses, '????????  ', { Type: 'list', value: [], Validators: [], InTable: false }),
    new PropertyConfiguration<Customer>(c => c.Password, '?????? ????????  ', { Type: 'string', value: '', Validators: [Validators.required], InTable: false }),
    new PropertyConfiguration<Customer>(c => c.PhoneNumber, '?????????? ????????  ', { InPicker: true, Type: 'string', value: '', Validators: [Validators.required] }),
    new PropertyConfiguration<Customer>(c => c.PhoneNumberConfirm, '?????????? ?????????? ????????  ', { Type: 'bool', value: false, Validators: [Validators.required] }),

  ], {
    componentType: ComponentTypes.lazytable, icon: 'city-variant-outline', neededData: [Province, City], getTitle: (item: FormGroup) => { return item.controls['FirstName']?.value + " " + item.controls['LastName']?.value; }
  }),



  new EntityConfiguration<Invoice>("Invoice", Invoice, InvoiceComponent, '????????????????',
    [
      { Value: 1, Color: 'green', Icon: 'check', Title: '???????????? ????????' },
      InactiveStatus, DeletedStatus,
      { Value: 10, Color: 'green', Icon: 'check', Title: '???????????? ?????? - ?????????? ??????' },
      { Value: 11, Color: 'green', Icon: 'check', Title: '???????????? ?????? - ?????????? ?????????? - ?????????? ???????? ??????????' },
    ]
    , [
      ...defaultPropertyConfiguration,
      new PropertyConfiguration<Invoice>(c => c.CustomerId, '   ?????????? ??????????', { Type: 'number', value: 0, Validators: [Validators.required], canEdit: false, InTable: true, InPicker: true }),
      new PropertyConfiguration<Invoice>(c => c.Description, '??????????????', { Type: 'string', value: '', Validators: [], InTable: false, InPicker: false }),
      new PropertyConfiguration<Invoice>(c => c.OtherCostsOffs, '??????????????/?????????? ????', { Type: 'list', value: [], Validators: [], InTable: true }),
      new PropertyConfiguration<Invoice>(c => c.Price, '???????? ????????????', { Type: 'number', value: 0, Validators: [], InTable: true }),
      new PropertyConfiguration<Invoice>(c => c.ProductTypesForInvoice, '?????????? ??????????????', { Type: 'list', value: [], Validators: [], InTable: true }),
      new PropertyConfiguration<Invoice>(c => c.Customer, '??????????', { Type: 'object', value: {}, Validators: [], InTable: false, InForm: true, InExport: false, InSearch: false }),
      new PropertyConfiguration<Invoice>(c => c.Address, '????????', { Type: 'object', value: {}, Validators: [], InTable: false, InForm: true, InExport: false, InSearch: false }),
    ], {
    componentType: ComponentTypes.lazytable, icon: 'city-variant-outline', getTitle: (item: FormGroup) => { return (item.controls['Id'].value ? item.controls['Id'].value.toString() : "___"); }
  }),




  new EntityConfiguration<Province>("Province", Province, ProvinceComponent, '??????????', defaultStatuses, [
    ...defaultPropertyWithTitleConfiguration,
  ], { componentType: ComponentTypes.table, icon: 'city-variant-outline' }),

  new EntityConfiguration<City>("City", City, CityComponent, '??????????????', defaultStatuses, [
    ...defaultPropertyWithTitleConfiguration,
    new PropertyConfiguration<City>(c => c.ProvinceId, '??????????', { Type: 'list', TypeHelper: 'provinces', InPicker: true, Validators: [] }),
  ], { componentType: ComponentTypes.table, icon: 'city-variant-outline', neededData: [Province] }),

], {});

@NgModule({
  declarations: [
    CityComponent, BrandComponent, CategoryComponent, KeyWordComponent, ProvinceComponent, LabelComponent,
    ProductComponent, CustomerComponent, InvoiceComponent, OptionComponent,
  ],
  imports: [
    TemplateModule,
    //CKEditorModule,
    RouterModule.forChild(buildPathFromConfig(config)),
    AngularEditorModule
  ]
})
export class BackModule {
  constructor(wss: WebSiteService) {
    wss.websites.push(config);
    wss.selectedWebsite = config;
  }
}



