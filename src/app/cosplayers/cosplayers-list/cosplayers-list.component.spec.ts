import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayersListComponent } from './cosplayers-list.component';

describe('CosplayersListComponent', () => {
  let component: CosplayersListComponent;
  let fixture: ComponentFixture<CosplayersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosplayersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplayersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});