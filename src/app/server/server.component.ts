import { Component, OnInit  } from '@angular/core';

@Component({
  selector : 'app-server',
  templateUrl : 'server.component.html'
})

export class ServerComponent  implements OnInit {

  constructor() {
    setTimeout(() => {this.allowNewServer = true }, 2000)
   }
  serverId:number = 10;
  serverStatus: string = "Offline";
  serverEventClicked = "No server Clicked";
  allowNewServer = false;
  serverName="testServer";
  getServerStatus() {
    return this.serverStatus;
  }
  onServerClicked() {
    return this.serverEventClicked = "Server Clicked";
  }
  onUpdateServerName(event: Event) {
    return this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit() {
  }
}