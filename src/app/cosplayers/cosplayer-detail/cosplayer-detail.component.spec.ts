import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayerDetailComponent } from './cosplayer-detail.component';
import { Cosplayer } from './../../models/cosplayer.model';

describe('CosplayerDetailComponent', () => {
  let component: CosplayerDetailComponent;
  let fixture: ComponentFixture<CosplayerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CosplayerDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplayerDetailComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test data from @input cosplayer', () => {
    const cosplayer: Cosplayer = {
      id: '1',
      name: 'Cosplayer',
      cosplays: [{ name: 'Cosplay', price: 100.0, imageUrl: 'fake-url' }],
    };

    component.cosplayer = cosplayer;
    fixture.detectChanges();

    expect(component.cosplayer).toBe(cosplayer);
  });
});
