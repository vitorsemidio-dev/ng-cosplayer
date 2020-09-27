import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Cosplayer } from './../../models/cosplayer.model';

import { CosplayerService } from './../../services/cosplayer.service';

@Component({
  selector: 'app-cosplayers-list',
  templateUrl: './cosplayers-list.component.html',
  styleUrls: ['./cosplayers-list.component.scss'],
})
export class CosplayersListComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  cosplayerList: Cosplayer[];

  constructor(private cosplayerService: CosplayerService) {}

  ngOnInit(): void {
    this.loadCosplayers();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  loadCosplayers() {
    this.sub = this.cosplayerService.getCosplayers().subscribe(cosplayers => {
      this.cosplayerList = cosplayers;
    });
  }
}
