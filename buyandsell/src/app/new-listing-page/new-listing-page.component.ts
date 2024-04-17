import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css'],
})
export class NewListingPageComponent implements OnInit {
  name: string = '';
  desc: string = '';
  price: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit(): void {
    alert('added');
    setTimeout(() => {
      this.router.navigateByUrl('/mylistings');
    }, 1000);
  }
}
