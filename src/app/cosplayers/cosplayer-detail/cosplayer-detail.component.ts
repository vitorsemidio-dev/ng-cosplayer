import { Component, Input, OnInit } from '@angular/core';

import { Cosplayer } from './../../models/cosplayer.model';

@Component({
  selector: 'app-cosplayer-detail',
  templateUrl: './cosplayer-detail.component.html',
  styleUrls: ['./cosplayer-detail.component.scss']
})
export class CosplayerDetailComponent implements OnInit {
  @Input() cosplayer: Cosplayer;

  constructor() { }

  ngOnInit(): void {
  }

}
