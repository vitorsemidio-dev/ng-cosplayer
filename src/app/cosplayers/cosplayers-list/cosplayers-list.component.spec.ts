import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayersListComponent } from './cosplayers-list.component';
import { CosplayersModule } from './../cosplayers.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CosplayersListComponent', () => {
  let component: CosplayersListComponent;
  let fixture: ComponentFixture<CosplayersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CosplayersModule],
      declarations: [CosplayersListComponent],
    }).compileComponents();
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

  it('should have a list of cosplayer in the DOM after ngOnInit', () => {
    expect(
      fixture.nativeElement.querySelector('div app-cosplayer-detail')
    ).toBeTruthy();
  });

  xit('should choose a cosplay', () => {
    fixture.detectChanges();
    const de: DebugElement = fixture.debugElement;
    const linkCosplayer = de.query(By.css('#cosplayer-1'));
    const cosplayerNotChoose = de.query(By.css('app-cosplayer-choose'));
    expect(cosplayerNotChoose).toBeNull();
    expect(linkCosplayer).toBeTruthy();
    linkCosplayer.triggerEventHandler('click', {});
    fixture.detectChanges();
    const cosplayerChoose = de.query(By.css('app-cosplayer-choose'));
    expect(cosplayerChoose).toBeTruthy();
  });
});
