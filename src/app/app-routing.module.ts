import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, title: 'Home Title'
  },
  {
    path: 'about', component: AboutComponent, title: 'About Title'
  },
  {
    path: 'contact', component: ContactComponent, title: 'Contact Title'
  },
  {
    path: '**', component: PageNotFoundComponent, title: 'Not Found Title'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
