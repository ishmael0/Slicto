import { Injectable } from '@angular/core';

export class TreeCategory {
  Id!: number;
  Title!: string;
  Show: boolean = false;
  Children!: TreeCategory[];
}
export class Category {
  Id!: number;
  ParentId: number | null = null;
  Title!: string;
}

export class Product {
  Id!: number;
  CategoryId!: number ;
  BrandId!: number ;
  Title!: string;
  Description!: string;
  PriceWithDiscount!: number;
  Price!: number;
  Image!: string[];
}
export class Brand {
  Id!: number;
  Title!: string;
  Description!: string;
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  toTreeNode(node: Category): TreeCategory {
    let x: TreeCategory = { Children: [], Id: node.Id, Show: false, Title: node.Title }
    x.Children = this.rawCategories.filter(c => c.ParentId == node.Id).map(c => this.toTreeNode(c));
    return x;
  }

  constructor() {
    this.categories = this.rawCategories.filter(c => c.ParentId == null).map(c => this.toTreeNode(c))
  }
  brands: Brand[] = [
    { Id: 1, Title: 'اپل', Description: 'hi' },
    { Id: 1, Title: 'سامسونگ', Description: 'hi2' }
  ]
  rawCategories: Category[] = [
    { Title: 'لوازم جانبی موبایل', Id: 1, ParentId: null },
    { Title: 'آیفون', Id: 30, ParentId: 1 },
    { Title: 'تاچ', Id: 50, ParentId: 30 }
  ]
  categories: TreeCategory[] = [
  ]



  testP: Product = {
    Id: 1,
    Title: 'کابل شارژر آیفون(اصل)',
    Description: '                کابل شارژر آیفون در 4 رنگ آبی-سفید-مشکی-قرمز با امکان شارژ تبلت (با شدت‌جریان 2.0 آمپر و بالاتر)، امکان شارژ کردن سریع‌تر موبایل...',
    PriceWithDiscount: 29000,
    Price: 30000,
    Image: ['assets/img/AndroidPIT-samsung-galaxy-s10-plus.jpg'],
    BrandId: 1,
    CategoryId: 50
  }
}
