import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CosplayersRoutingModule } from './cosplayers-routing.module';
import { CosplayersListComponent } from './cosplayers-list/cosplayers-list.component';
import { CosplayerDetailComponent } from './cosplayer-detail/cosplayer-detail.component';


@NgModule({
  declarations: [CosplayersListComponent, CosplayerDetailComponent],
  imports: [
    CommonModule,
    CosplayersRoutingModule
  ]
})
export class CosplayersModule { }