import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayerDetailComponent } from './cosplayer-detail.component';

import { Cosplayer } from './../../models/cosplayer.model';

describe('[CosplayerDetailComponent] - Render cosplayer data', () => {
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
      avatarUrl: 'fake-avatar-url',
      cosplays: [{ name: 'Cosplay', price: 100.0, imageUrl: 'fake-url' }],
    };
    const fisrtCosplay = cosplayer.cosplays[0];

    component.cosplayer = cosplayer;
    expect(component.cosplayer).toBe(cosplayer);

    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('a strong').innerText.trim(),
    ).toEqual(cosplayer.name);
    expect(
      fixture.nativeElement.querySelector('li strong').innerText.trim(),
    ).toEqual(fisrtCosplay.name);
    expect(
      fixture.nativeElement.querySelector('li span').innerText.trim(),
    ).toEqual(fisrtCosplay.price.toString());
  });
});
