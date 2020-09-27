import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { CosplayerChooseComponent } from './cosplayer-choose.component';

describe('CosplayerChooseComponent', () => {
  let component: CosplayerChooseComponent;
  let fixture: ComponentFixture<CosplayerChooseComponent>;
  let debugComponent: DebugElement;
  let elementComponent: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [ CosplayerChooseComponent ],
      providers: [
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplayerChooseComponent);
    debugComponent = fixture.debugElement;
    elementComponent = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load info from Cosplay', () => {
    expect(component.cosplayer).toBeUndefined();
    component.loadCosplay('1');
    expect(component.cosplayer).toBeTruthy();
  });

  it('should render cosplayer name on DOM', () => {
    component.loadCosplay('1');
    fixture.detectChanges();
    expect(component.cosplayer).toBeTruthy();

    const p: HTMLParagraphElement = elementComponent.querySelector('p');
    expect(p.innerText.trim()).toContain(component.cosplayer.name);
  });
});
