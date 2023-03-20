import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeinsterCountiesPage } from './leinster-counties.page';

const routes: Routes = [
  {
    path: '',
    component: LeinsterCountiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeinsterCountiesPageRoutingModule {}
