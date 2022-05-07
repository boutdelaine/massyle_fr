import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems = [
    {
      path :'#portfolio',
      name : 'Portfolio'
    },
    {
      path :'#about',
      name : 'About'
    },
    {
      path :'#contact',
      name : 'Contact'
    },
    {
      path :'/blog',
      name : 'Blog'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
