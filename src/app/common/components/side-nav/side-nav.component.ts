import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/menus/interfaces/menus.interfaces';
import { IUserMenu } from '../../interfaces/user-menu';
import { LINKS } from './links';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  readonly links? = LINKS;
  readonly menu: IUserMenu[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    const menu: IMenu[] = JSON.parse(localStorage.getItem('menu') || '{}');
    menu.forEach((item) => {
      const _item: IUserMenu = {
        id: item.id,
        parent_id: item?.parent_id,
        name: item?.name,
        icon: item?.icon,
        type: item?.type,
        url: item?.url,
      };
      if (item.type == 'menu') {
        this.menu.push(_item);
      }
      if (item.type == 'dropmenu') {
        const child = menu.filter((_m) => _m.parent_id == item.id);
        _item.children = child.map((_m) => ({
          id: _m.id,
          parent_id: _m.parent_id,
          name: _m.name,
          icon: _m.icon,
          type: _m.type,
          url: _m.url,
        }));
        this.menu.push(_item);
      }
    });
  }
}
