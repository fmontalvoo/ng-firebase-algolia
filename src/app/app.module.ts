import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment.dev';
import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/list/list.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
