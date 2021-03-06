import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, title: 'Home Title'
  },
  {
    path: 'about', component: AboutComponent, title: 'About Title'
  },
  {
    path: 'contact', component: ContactComponent, title: 'Contact Title'
  },
  {
    path: 'profile', component: ProfileComponent, title: 'Profile Title'
  },
  {
    path: '', redirectTo: "/home", pathMatch: 'full'
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
