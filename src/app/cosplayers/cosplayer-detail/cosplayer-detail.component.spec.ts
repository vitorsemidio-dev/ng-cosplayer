import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayerDetailComponent } from './cosplayer-detail.component';

describe('CosplayerDetailComponent', () => {
  let component: CosplayerDetailComponent;
  let fixture: ComponentFixture<CosplayerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosplayerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplayerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
