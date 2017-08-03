import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created!";
  serverName = 'HelloWorld';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2', 'Testserver 3'];
  clicks = [];
  clickCount = 0;

  buttonShowing = false;

  username = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

   }

   getAllowNewServerState()
   {
     return this.allowNewServer;
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onButtonClicked(event: any) {
    this.username = "";
  }

  handleButton()
  {
    this.clickCount++;
    this.buttonShowing = !this.buttonShowing;

    this.clicks.push(this.clickCount);

    console.log(this.clicks.length);
  }

  getUsernameState() {
    return(this.username == "");
  }

  getTestColor(n) {
    return (n > 4 ? 'blue' : false);
  }

}
