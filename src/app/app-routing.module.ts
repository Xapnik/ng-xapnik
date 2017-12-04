import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'welcome', component: HomeFooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
