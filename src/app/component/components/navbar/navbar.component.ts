import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navitems:any;

  constructor(private navservice: NavbarService) { }

  ngOnInit(): void {
    this.navitems = this.getNavItem().navitem;
  }
  getNavItem(){
    return this.navservice.getNavItems();
  }
}