import { Component, OnInit, Renderer2 } from '@angular/core';
import { IUserPayload } from 'src/app/interfaces/user-payload.interface';
import { UserPayload } from '../../classes/UserPayload';
import { ScriptLoaderService } from '../../services/script-loader.service';

@Component({
  selector: 'app-admin-layout',
  template: `<nav-bar [userPayload]="userPayload"></nav-bar>`,
})
export class AdminLayoutComponent implements OnInit {
  userPayload!: UserPayload;

  constructor() {}

  ngOnInit(): void {
    this.getPayload();
  }

  getPayload() {
    const payload: IUserPayload = JSON.parse(
      localStorage.getItem('payload') || '{}'
    );
    if (payload) {
      this.userPayload = new UserPayload(payload);
    }
  }
}
