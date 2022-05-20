import { NgModule } from '@angular/core';
import { buildPath, buildPathFromConfig, TemplateModule } from '../../../../../../Santel/ClientApp/src/app/template/template.module';
import { RouterModule, Routes } from '@angular/router';
import { BaseModel, BaseModelWithTitle, ComponentTypes, EntityConfiguration, getNameOf, isUndefinedOrWhiteSpaces, PropertyConfiguration, Status, ValueTitle, WebSiteConfiguration } from '../../../../../../Santel/ClientApp/src/app/services/utils';
import { WebSiteService } from '../../../../../../Santel/ClientApp/src/app/services/website.service';
import { Validators, FormGroup } from '@angular/forms';
import { ActiveStatus, defaultPropertyConfiguration, defaultPropertyWithTitleConfiguration, defaultStatuses, DeletedStatus, FullStatuses, PublishedStatus } from '../../../../../../Santel/ClientApp/src/app/services/properties';

import "reflect-metadata";
import { CityComponent, BrandComponent, CategoryComponent, ColorComponent, KeyWordComponent, ProvinceComponent, ProductComponent } from './components';



export class Category extends BaseModelWithTitle {
  ParentCategoryId!: number;
  ParentCategory!: Category;
  Description="";
  Priority=0;
}

export class Brand extends BaseModelWithTitle {
  Images: Images[]=[];
  Description="";
  Summary="";
}

export class Color extends BaseModelWithTitle {
  Value="";
}
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
  Category!: Category;
  Summary="";
  Description="";
  Images: Images[] = [];
  Types: ProductType[] = [];
  KeyWords: Keyword[] = [];
  ProductKeyWords: ProductKeyword[] = [];
  Labels: Label[] = [];
  ProductLabels: ProductLabel[] = [];
}

export class Invoice extends BaseModelWithTitle {
  CustomerId!: number;
  Customer!: Customer;
  Address!: Address;
  PostPrice!: number;
  Price!: number;
  IsPaid!: boolean;
  Description="";
  ProductTypesForInvoice: ProductTypeForInvoice[] = [];
}

export class ProductTypeForBasket {
  ProductTypeId!: number;
  Count!: number;
}

export class ProductTypeForInvoice extends ProductTypeForBasket {
  Price!: number;
  Off!: number;
}

export class ProductType extends BaseModel {
  ProductId!: number;
  Product!: Product;
  Title="";
  Color!: Color;
  ColorId!: number;
  Decription="";
  Price!: number;
  Off!: number;
  SupplyCount!: number;
  SoldCount!: number;
  MaxAllowedBuy!: number;
}

export class Basket extends BaseModel {
  CustomerId!: number;
  Customer!: Customer;
  ProductTypesForBasket: ProductTypeForBasket[] = [];
}

export class Label extends BaseModelWithTitle {
  Color!: Color;
  ColorId!: number;
  Products: Product[] = [];
  ProductLabels: ProductLabel[] = [];
}

export class ProductLabel {
  Title="";
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

export class Images {
  Path="";
  Description="";
}

export class Customer extends BaseModel {
  FirstName="";
  LastName="";
  PhoneNumber="";
  Password="";
  PhoneNumberConfirm!: boolean;
  Addresses: Address[] = [];
}

export class Address extends BaseModelWithTitle {
  PostalCode="";
  Province="";
  City="";
  FullAddress="";
  Latitude="";
  Longitude="";
}






export const config: WebSiteConfiguration = new WebSiteConfiguration('DB', 'مدیریت وب سایت ', 'slicto.com', [




  new EntityConfiguration<Category>("Category", Category, CategoryComponent, 'دسته بندی', defaultStatuses, [
    ...defaultPropertyWithTitleConfiguration,
    new PropertyConfiguration<Category>(c => c.ParentCategoryId, 'دسته بندی والد', { Type: 'list', TypeHelper: 'Category', InPicker: false, InTable: false, Validators: [] }),
    new PropertyConfiguration<Category>(c => c.Priority, 'اولویت', { Type: 'list', TypeHelper: 'Category', InPicker: false, InTable: false, Validators: [] }),
  ], { componentType: ComponentTypes.tree, icon: 'city-variant-outline', treeParentKey: "ParentCategoryId" }),

  new EntityConfiguration<Brand>("Brand", Brand, BrandComponent, 'برند', defaultStatuses, [
    ...defaultPropertyWithTitleConfiguration,
    new PropertyConfiguration<Brand>(c => c.Description, 'توضیحات', { Type: 'string', InPicker: false, InTable: false, Validators: [] }),
    new PropertyConfiguration<Brand>(c => c.Summary, 'خلاصه', { Type: 'string', InPicker: true, InTable: true, Validators: [] }),
    new PropertyConfiguration<Brand>(c => c.Images, 'تصاویر', { Type: 'list', InPicker: false, InTable: false, InSearch: false, Validators: [] }),
  ], { componentType: ComponentTypes.table, icon: 'city-variant-outline' }),


  new EntityConfiguration<Color>("Color", Color, ColorComponent, 'رنگ', defaultStatuses, [
    ...defaultPropertyWithTitleConfiguration,
    new PropertyConfiguration<Color>(c => c.Value, 'رنگ', { Type: 'color', InPicker: true, InTable: true, Validators: [] }),
  ], { componentType: ComponentTypes.table, icon: 'city-variant-outline' }),


  new EntityConfiguration<Keyword>("Keyword", Keyword, KeyWordComponent, 'کلیدواژه', defaultStatuses, [
    ...defaultPropertyWithTitleConfiguration,
  ], { componentType: ComponentTypes.lazytable, icon: 'city-variant-outline' }),



  new EntityConfiguration<Product>("Product", Product, ProductComponent, 'محصولات', defaultStatuses, [
    ...defaultPropertyWithTitleConfiguration,

    new PropertyConfiguration<Product>(c => c.CategoryId, 'دسته بندی', { Type: 'list', TypeHelper:'categories', value: null, Validators: [Validators.required], InTable: true, InPicker: true }),
    new PropertyConfiguration<Product>(c=>c.Images, 'تصاویر  ', { value: [], Validators: [], InTable: true }),
    new PropertyConfiguration<Product>(c=>c.Summary, 'خلاصه ', { Type: 'string', Validators: [], InTable: false }),
    new PropertyConfiguration<Product>(c=>c.Description, 'شرح  ', { Type: 'string', Validators: [], InTable: false }),
    new PropertyConfiguration<Product>(c=>c.ProductLabels, 'لیبل ها  ', { Type: 'custom', value: [], Validators: [], InTable: false }),
    new PropertyConfiguration<Product>(c=>c.Types, 'انواع  ', { Type: 'custom', value: [], Validators: [], InTable: false }),
    new PropertyConfiguration<Product>(c=>c.ProductKeyWords, ' کلید واژه ها', { Type: 'custom', value: [], Validators: [], InTable: false }),



  ], { componentType: ComponentTypes.lazytable, icon: 'city-variant-outline', needToLoadAgainOnOpen: true, neededData: [Category, Color] }),











  new EntityConfiguration<Province>("Province", Province, ProvinceComponent, 'استان', defaultStatuses, [
    ...defaultPropertyWithTitleConfiguration,
  ], { componentType: ComponentTypes.table, icon: 'city-variant-outline' }),

  new EntityConfiguration<City>("City", City, CityComponent, 'شهرستان', defaultStatuses, [
    ...defaultPropertyWithTitleConfiguration,
    new PropertyConfiguration<City>(c => c.ProvinceId, 'استان', { Type: 'list', TypeHelper: 'provinces', InPicker: true, Validators: [] }),
  ], { componentType: ComponentTypes.table, icon: 'city-variant-outline', neededData: [Province] }),

], {});

@NgModule({
  declarations: [
    CityComponent, BrandComponent, CategoryComponent, ColorComponent, KeyWordComponent, ProvinceComponent, ProductComponent
  ],
  imports: [
    TemplateModule,
    //CKEditorModule,
    RouterModule.forChild(buildPathFromConfig(config))
  ]
})
export class BackModule {
  constructor(wss: WebSiteService) {
    wss.websites.push(config);
    wss.selectedWebsite = config;
  }
}



