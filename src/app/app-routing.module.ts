import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AmiibosComponent } from './amiibos/amiibos.component';
import { AmiiboDetailComponent } from './amiibo-detail/amiibo-detail.component';
import { ContactComponent } from './contact/contact.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroNotFoundComponent } from './hero-not-found/hero-not-found.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'heroes/:power', component: HeroesComponent },
  { path: 'heroes/**', component: HeroNotFoundComponent },
  { path: 'hero-not-found/:no-hero', component: HeroNotFoundComponent},
  { path: 'amiibos', component: AmiibosComponent },
  { path: 'amiibo/:id', component: AmiiboDetailComponent },
  { path: 'amiibos/:catagpry/:value', component: AmiibosComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

