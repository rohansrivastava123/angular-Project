import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetatilPageComponent } from './listing-detatil-page.component';

describe('ListingDetatilPageComponent', () => {
  let component: ListingDetatilPageComponent;
  let fixture: ComponentFixture<ListingDetatilPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDetatilPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetatilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
