import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddedToSlackComponent } from './added-to-slack/added-to-slack.component';
import { SlackInviteComponent } from './slack-invite/slack-invite.component';
import { GroupComponent } from './group/group.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'added-to-slack', component: AddedToSlackComponent },
  { path: 'slack-invite', component: SlackInviteComponent },
  { path: 'group/:groupName', component: GroupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
