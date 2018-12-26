import { Component } from '@angular/core';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'client';
 navmenus = [
  {
   text: '前端',
   icon: 'mail',
   link: 'www.baidu.com'
  },
  {
   text: 'Node.js',
   icon: 'mail',
   link: 'www.baidu.com'
  }
 ];
}
