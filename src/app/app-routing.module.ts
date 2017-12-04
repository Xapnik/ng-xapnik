import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddedToSlackComponent } from './added-to-slack/added-to-slack.component';
import { SlackInviteComponent } from './slack-invite/slack-invite.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'added-to-slack', component: AddedToSlackComponent },
  { path: 'slack-invite', component: SlackInviteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
