import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RootComponentComponent } from './root-component/root-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RootComponentComponent
  ],
  imports: [  /*Stroes all 3rd party modules*/
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent] /*this property tells from where to begin the application OR determines the root element. Explicitly mention here if u have multiple root components*/
})
export class AppModule { }
