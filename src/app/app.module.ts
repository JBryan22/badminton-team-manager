import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamMemberDetailsComponent } from './team-member-details/team-member-details.component';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { TeamAssociationPipe } from './teamassociation.pipe';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    TeamDetailsComponent,
    TeamMemberDetailsComponent,
    TeamAssociationPipe,
    AdminComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
