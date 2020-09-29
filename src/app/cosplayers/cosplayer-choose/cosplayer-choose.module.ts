import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CosplayerChooseRoutingModule } from './cosplayer-choose-routing.module';
import { CosplayerChooseComponent } from './cosplayer-choose.component';

@NgModule({
  declarations: [CosplayerChooseComponent],
  imports: [CommonModule, CosplayerChooseRoutingModule],
})
export class CosplayerChooseModule {}
