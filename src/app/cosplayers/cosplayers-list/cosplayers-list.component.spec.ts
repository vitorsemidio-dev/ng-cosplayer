import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayersListComponent } from './cosplayers-list.component';
import { CosplayersModule } from './../cosplayers.module';

describe('CosplayersListComponent', () => {
  let component: CosplayersListComponent;
  let fixture: ComponentFixture<CosplayersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CosplayersModule,
      ],
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

  it('should have a list of cosplayer greater than 0 after ngOnInit', () => {
    component.ngOnInit();
    expect(component.cosplayerList).not.toBeUndefined();
    expect(component.cosplayerList.length).toBeGreaterThan(0);
  });
});
