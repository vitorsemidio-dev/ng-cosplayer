import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { CosplayerChooseComponent } from './cosplayer-choose.component';
import { CosplayersModule } from './../cosplayers.module';

describe('CosplayerChooseComponent', () => {
  let component: CosplayerChooseComponent;
  let fixture: ComponentFixture<CosplayerChooseComponent>;
  let debugComponent: DebugElement;
  let elementComponent: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CosplayersModule],
      declarations: [CosplayerChooseComponent],
      providers: [],
    }).compileComponents();
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

    const h2: HTMLHeadingElement = elementComponent.querySelector('h2');
    expect(h2.innerText.trim()).toContain(component.cosplayer.name);
  });

  it('should show cosplay name from a cosplayer', () => {
    component.loadCosplay('1');
    fixture.detectChanges();
    const [
      firstCosplayName,
      secondCosplayName,
    ] = component.cosplayer.cosplays.map((cosplay) => cosplay.name);
    const li: HTMLLIElement = elementComponent.querySelector(
      '.cosplay-list li'
    );
    expect(li.innerHTML.trim()).toContain(firstCosplayName, secondCosplayName);
  });

  it('should select a cosplay', () => {
    component.loadCosplay('1');
    fixture.detectChanges();
    const [firstCosplay] = component.cosplayer.cosplays;
    const { name: firstCosplayName } = firstCosplay;

    component.chooseCosplay(firstCosplayName);
    fixture.detectChanges();
    const li: HTMLLIElement = elementComponent.querySelector('li.select');
    expect(li.innerHTML.trim()).toContain(firstCosplayName);
  });

  it('should load Cosplay data without select', () => {
    component.loadCosplay('1');
    fixture.detectChanges();
    const li: HTMLLIElement = elementComponent.querySelector('.select');
    expect(li).toBeNull();
  });

  it('should change cosplay selected', () => {
    component.loadCosplay('1');
    fixture.detectChanges();
    const [firstCosplay, secondCosplay] = component.cosplayer.cosplays;
    const { name: firstCosplayName } = firstCosplay;
    const { name: secondCosplayName } = secondCosplay;

    const li: HTMLLIElement = elementComponent.querySelector('.select');
    expect(li).toBeNull();

    component.chooseCosplay(firstCosplayName);
    fixture.detectChanges();
    const liFirstCosplay: HTMLLIElement = elementComponent.querySelector(
      '.select'
    );
    expect(liFirstCosplay.innerHTML.trim()).toContain(firstCosplayName);

    component.chooseCosplay(secondCosplayName);
    fixture.detectChanges();
    const liSecondCosplay: HTMLLIElement = elementComponent.querySelector(
      '.select'
    );
    expect(liSecondCosplay.innerHTML.trim()).toContain(secondCosplayName);
    expect(liSecondCosplay.innerHTML.trim()).not.toContain(firstCosplayName);
  });

  it('should check the price with currency BRL', () => {
    component.loadCosplay('1');
    fixture.detectChanges();
    const [firstCosplay] = component.cosplayer.cosplays;
    const li: HTMLLIElement = elementComponent.querySelector(
      '.cosplay-list li'
    );
    expect(li.innerHTML.trim()).toContain('R$', firstCosplay.price);
  });

  it('should rent a cosplayer', () => {
    component.loadCosplay('1');
    fixture.detectChanges();

    const [firstCosplay] = component.cosplayer.cosplays;
    component.chooseCosplay(firstCosplay.name);
    fixture.detectChanges();

    component.handleRent();
    expect(component.idCosplayChoose).toBe(firstCosplay.name);
  });
});
