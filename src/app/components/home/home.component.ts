import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts = [
    {
      title:'Featured post',
      dec:'This is a wider card with supporting text below as a natural lead-in to additional content.',
      date:'Nov 12',
      img:'https://imvishalchodvadiya.github.io/demo-app-angular/assets/images/main.jpg',
      subTitle:'World'
    },
    {
      title:'Featured post',
      dec:'This is a wider card with supporting text below as a natural lead-in to additional content.',
      date:'Nov 12',
      img:'https://imvishalchodvadiya.github.io/demo-app-angular/assets/images/main-1.jpg',
      subTitle:'World'
    },
    {
      title:'Featured post',
      dec:'This is a wider card with supporting text below as a natural lead-in to additional content.',
      date:'Nov 12',
      img:'https://imvishalchodvadiya.github.io/demo-app-angular/assets/images/main-2.jpg',
      subTitle:'World'
    },
    {
      title:'Featured post',
      dec:'This is a wider card with supporting text below as a natural lead-in to additional content.',
      date:'Nov 12',
      img:'https://imvishalchodvadiya.github.io/demo-app-angular/assets/images/main-3.jpg',
      subTitle:'World'
    }
  ]
}
