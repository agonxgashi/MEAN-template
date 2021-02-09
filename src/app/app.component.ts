import { Component } from '@angular/core';

@Component({
  selector: 'mean-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  note = '🎉 Client app is running! 🎉';

  public get currentDate() : number {
    return new Date().getFullYear();
  }

}
