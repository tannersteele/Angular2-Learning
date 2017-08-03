import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
    messageShowing = true;
    logMessages = [];

    handleDisplay() {
        console.log("Working");
        this.logMessages.push(this.logMessages.length+1);
        
        this.messageShowing = !this.messageShowing;
    }

  constructor() { }

  ngOnInit() {
  }

}
