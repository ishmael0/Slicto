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
}
