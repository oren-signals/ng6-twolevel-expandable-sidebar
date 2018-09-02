import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLevelItemMenuComponent } from './second-level-item-menu.component';

describe('SecondLevelItemMenuComponent', () => {
  let component: SecondLevelItemMenuComponent;
  let fixture: ComponentFixture<SecondLevelItemMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondLevelItemMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLevelItemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
