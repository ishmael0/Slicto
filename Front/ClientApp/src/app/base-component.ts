import { Injectable, OnInit, Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CacheService } from './cache.service';

@Directive()
export class BaseComponent implements OnInit {

  constructor(public cs: CacheService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  async ngOnInit() {

  }
  getParam(p: string): string {
    return this.route.snapshot.paramMap.get(p)!;
  }
}
