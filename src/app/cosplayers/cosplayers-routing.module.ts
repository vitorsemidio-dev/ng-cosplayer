import { CosplayerChooseComponent } from './cosplayer-choose/cosplayer-choose.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CosplayersListComponent } from './cosplayers-list/cosplayers-list.component';

const routes: Routes = [
  { path: '', component: CosplayersListComponent, children: [
    { path: ':idCosplay', component: CosplayerChooseComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CosplayersRoutingModule { }
