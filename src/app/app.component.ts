import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-app-2';

  status: boolean = false;

  clickEvent(){
    this.status = !this.status;       
  }

  onActivate(event: any) {
    // window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            // behavior: 'smooth' 
     });
 
     //or document.body.scrollTop = 0;
     //or document.querySelector('body').scrollTo(0,0)
 }
}
