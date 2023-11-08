import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsctructorComponent } from './insctructor.component';

describe('InsctructorComponent', () => {
  let component: InsctructorComponent;
  let fixture: ComponentFixture<InsctructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsctructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsctructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
