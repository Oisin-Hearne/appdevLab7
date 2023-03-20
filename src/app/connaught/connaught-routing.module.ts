import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnaughtPage } from './connaught.page';

const routes: Routes = [
  {
    path: '',
    component: ConnaughtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnaughtPageRoutingModule {}
