import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MunsterPage } from './munster.page';

const routes: Routes = [
  {
    path: '',
    component: MunsterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MunsterPageRoutingModule {}
