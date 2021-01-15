import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  games = [
    {
      name: 'Football',
      path: '../assets/images/football2.jpg',
    },
    {
      name: 'Volleyball',
      path: '../assets/images/volleyball.jpg',
    },
    {
      name: 'Cricket',
      path: '../assets/images/football2.jpg',
    },
  ];

  ngOnInit(): void {}
}
