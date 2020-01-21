import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   serverElements = [{type: 'server', name: 'testServer', content: 'This is just a server'}];



}
