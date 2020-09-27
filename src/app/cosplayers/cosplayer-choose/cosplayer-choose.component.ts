import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cosplayer } from './../../models/cosplayer.model';
import { CosplayerService } from './../../services/cosplayer.service';

@Component({
  selector: 'app-cosplayer-choose',
  templateUrl: './cosplayer-choose.component.html',
  styleUrls: ['./cosplayer-choose.component.scss']
})
export class CosplayerChooseComponent implements OnInit {
  cosplayer: Cosplayer;

  constructor(
    private activatedRouter: ActivatedRoute,
    private cosplayerService: CosplayerService,
  ) { }

  ngOnInit(): void {
    this.subRouterParams();
  }

  private subRouterParams() {
    this.activatedRouter.params.subscribe(params => {
      const { idCosplay } = params;
      this.loadCosplay(idCosplay);
    });
  }

  loadCosplay(idCosplay: string) {
    this.cosplayerService.getCosplayerById(idCosplay).subscribe(cosplayerInfo => {
      this.cosplayer = cosplayerInfo;
    });
  }

}
