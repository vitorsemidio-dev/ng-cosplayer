import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() username: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  handleLogout() {
    this.username = '';
    this.authService.logout();
    this.authService.redirectTo('/');
  }
}
