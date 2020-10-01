import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CosplayersRoutingModule } from './cosplayers-routing.module';
import { CosplayerChooseComponent } from './cosplayer-choose/cosplayer-choose.component';
import { CosplayersListComponent } from './cosplayers-list/cosplayers-list.component';
import { CosplayerDetailComponent } from './cosplayer-detail/cosplayer-detail.component';

@NgModule({
  declarations: [
    CosplayersListComponent,
    CosplayerDetailComponent,
    CosplayerChooseComponent,
  ],
  imports: [CommonModule, ModalModule.forChild(), CosplayersRoutingModule],
})
export class CosplayersModule {}
