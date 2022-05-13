import { Injectable } from '@angular/core';
import { navitems } from './nav-items';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  navitem = navitems;
  constructor() { }

  getNavItems(){
    return this.navitem;
  }

}