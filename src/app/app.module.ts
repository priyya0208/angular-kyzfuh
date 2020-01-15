import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule  ],
  declarations: [ AppComponent, ServerComponent, WarningAlertComponent, SuccessAlertComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
