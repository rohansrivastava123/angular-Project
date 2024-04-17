import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetatilPageComponent } from './listing-detatil-page/listing-detatil-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'lisitngs', pathMatch: 'full' },
  {
    path: 'listings',
    component: ListingsPageComponent,
    pathMatch: 'full',
  },
  { path: 'listings/:id', component: ListingDetatilPageComponent },
  { path: 'contact/:id', component: ContactPageComponent },
  { path: 'editlisting/:id', component: EditListingPageComponent },
  { path: 'mylistings', component: MyListingPageComponent },
  { path: 'newlisting', component: NewListingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
