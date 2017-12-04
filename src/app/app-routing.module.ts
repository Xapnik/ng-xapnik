import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddedToSlackComponent } from './added-to-slack/added-to-slack.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'added-to-slack', component: AddedToSlackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
