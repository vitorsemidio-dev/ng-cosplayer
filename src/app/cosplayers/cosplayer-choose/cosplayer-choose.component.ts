import { AlertModalComponent } from './../../alert-modal/alert-modal.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';

import { Cosplayer } from './../../models/cosplayer.model';
import { CosplayerService } from './../../services/cosplayer.service';

@Component({
  selector: 'app-cosplayer-choose',
  templateUrl: './cosplayer-choose.component.html',
  styleUrls: ['./cosplayer-choose.component.scss'],
})
export class CosplayerChooseComponent implements OnInit {
  cosplayer: Cosplayer;
  idCosplayChoose: string;

  constructor(
    private activatedRouter: ActivatedRoute,
    private cosplayerService: CosplayerService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.subRouterParams();
  }

  private subRouterParams() {
    this.activatedRouter.params.subscribe((params) => {
      this.resetCosplayChoose();
      const { idCosplay } = params;
      this.loadCosplay(idCosplay);
    });
  }

  chooseCosplay(idCosplayChoose: string) {
    this.idCosplayChoose = idCosplayChoose;
  }

  loadCosplay(idCosplay: string) {
    this.cosplayerService
      .getCosplayerById(idCosplay)
      .subscribe((cosplayerInfo) => {
        this.cosplayer = cosplayerInfo;
      });
  }

  private resetCosplayChoose() {
    this.idCosplayChoose = '';
  }

  handleRent() {
    // TODO
    this.modalService.show(AlertModalComponent, {
      initialState: {
        cosplayer: this.cosplayer,
        idCosplayChoose: this.idCosplayChoose,
      },
    });
  }
}
