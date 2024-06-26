import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListingPageComponent } from './my-listing-page.component';

describe('MyListingPageComponent', () => {
  let component: MyListingPageComponent;
  let fixture: ComponentFixture<MyListingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
