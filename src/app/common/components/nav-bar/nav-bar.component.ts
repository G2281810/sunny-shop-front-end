import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserPayload } from '../../classes/UserPayload';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @Input() userPayload!: UserPayload;
  readonly api_url: string = environment.API_URL;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
