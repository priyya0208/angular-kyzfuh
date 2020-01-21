import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule  ],
  declarations: [ AppComponent, ServerComponent, WarningAlertComponent, SuccessAlertComponent, CockpitComponent, ServerElementComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
