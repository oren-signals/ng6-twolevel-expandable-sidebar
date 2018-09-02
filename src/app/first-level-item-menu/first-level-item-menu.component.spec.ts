import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLevelItemMenuComponent } from './first-level-item-menu.component';

describe('FirstLevelItemMenuComponent', () => {
  let component: FirstLevelItemMenuComponent;
  let fixture: ComponentFixture<FirstLevelItemMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLevelItemMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLevelItemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
