import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COntactUsComponent } from './contact-us.component';

describe('COntactUsComponent', () => {
  let component: COntactUsComponent;
  let fixture: ComponentFixture<COntactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COntactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COntactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
