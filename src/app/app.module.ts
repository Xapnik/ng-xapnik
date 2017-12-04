import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatGridListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { FaqComponent } from './faq/faq.component';
import { DemoComponent } from './demo/demo.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { AddedToSlackComponent } from './added-to-slack/added-to-slack.component';
import { SlackInviteComponent } from './slack-invite/slack-invite.component';
import { MessageAlertComponent } from './message-alert/message-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    HomeBannerComponent,
    FaqComponent,
    DemoComponent,
    HomeFooterComponent,
    AddedToSlackComponent,
    SlackInviteComponent,
    MessageAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
