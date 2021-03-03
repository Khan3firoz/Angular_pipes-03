import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  timeStamp= Date.now()
  name: string = 'Akhlaque ahmad, firOz KHan ,AshfAque AhmAD.'

}
