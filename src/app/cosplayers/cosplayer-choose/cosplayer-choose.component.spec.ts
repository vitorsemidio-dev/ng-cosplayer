import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayerChooseComponent } from './cosplayer-choose.component';

describe('CosplayerChooseComponent', () => {
  let component: CosplayerChooseComponent;
  let fixture: ComponentFixture<CosplayerChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosplayerChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplayerChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
