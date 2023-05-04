import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aminas';

  constructor() {
    console.log(this.title); // This should be console.log(this.tile)
  }
}
