import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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



  categories: any[] = [
    {
      Title: 'لوازم جانبی موبایل', Id: 1, Children: [
        {
          Title: 'آیفون', Id: 30, Children: [
            { Title: 'تاچ', Id: 50 }
          ]
        }
      ]
    }

  ]
}
