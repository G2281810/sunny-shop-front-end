import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';

@Component({
  selector: 'app-admin-layout',
  template: `<nav-bar></nav-bar>`,
})
export class AdminLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
