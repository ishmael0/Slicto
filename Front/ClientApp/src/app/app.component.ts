import { Component } from '@angular/core';
import { BaseComponent } from './base-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {
  title = 'ClientApp';

  changeStyle(event: any, w: boolean) {
    console.log(event.target.classList)
  }

  toggleMobileCategory() {
    var body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('mobile-nav-shown')) {
      body.classList.remove('mobile-nav-shown')
    }
    else {
      body.classList.add('mobile-nav-shown')
    }
  }




  loginModal = false;
}
