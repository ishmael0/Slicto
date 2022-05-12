import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformtionComponent } from './user-informtion.component';

describe('UserInformtionComponent', () => {
  let component: UserInformtionComponent;
  let fixture: ComponentFixture<UserInformtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInformtionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
