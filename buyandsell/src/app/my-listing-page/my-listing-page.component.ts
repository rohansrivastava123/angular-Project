import { Component, OnInit } from '@angular/core';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';
@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.css'],
})
export class MyListingPageComponent implements OnInit {
  listings: Listing[] = [];
  constructor() {}

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }
  deleteListingClick(listingId: string): void {
    alert(`deleting your listing id ${listingId}`);
  }
}
