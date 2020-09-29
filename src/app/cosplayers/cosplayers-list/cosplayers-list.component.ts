import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Cosplayer } from './../../models/cosplayer.model';

import { CosplayerService } from './../../services/cosplayer.service';

@Component({
  selector: 'app-cosplayers-list',
  templateUrl: './cosplayers-list.component.html',
  styleUrls: ['./cosplayers-list.component.scss'],
})
export class CosplayersListComponent implements OnInit {
  cosplayerList: Cosplayer[];

  constructor(private cosplayerService: CosplayerService) {}

  ngOnInit(): void {
    this.loadCosplayers();
  }

  loadCosplayers() {
    this.cosplayerService.getCosplayers().subscribe((cosplayers) => {
      this.cosplayerList = cosplayers;
    });
  }
}
