import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { take } from 'rxjs/operators';

import { FakeDbService } from './../db/fake-db.service';

@Injectable({
  providedIn: 'root'
})
export class CosplayerService {

  constructor(
    private apiService: FakeDbService,
  ) { }

  getCosplayers() {
    const cosplayers = this.apiService.getCosplayers();
    return of(cosplayers).pipe(take(1));
  }

  getCosplayerById(idCosplay: string) {
    const cosplay = this.apiService.getCosplayerById(idCosplay);
    return of(cosplay).pipe(take(1));
  }
}
