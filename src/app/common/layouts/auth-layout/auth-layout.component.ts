import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  template: ` <router-outlet></router-outlet> `,
  styles: [],
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {
    const html = document.getElementsByTagName('html');
    html[0].style.height = '';
    const body = document.getElementsByTagName('body');
    body[0].style.height = '';
  }
}
