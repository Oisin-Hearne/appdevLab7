import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UlsterPage } from './ulster.page';

const routes: Routes = [
  {
    path: '',
    component: UlsterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UlsterPageRoutingModule {}
