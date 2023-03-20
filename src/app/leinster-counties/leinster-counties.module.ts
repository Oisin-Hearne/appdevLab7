import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeinsterCountiesPageRoutingModule } from './leinster-counties-routing.module';

import { LeinsterCountiesPage } from './leinster-counties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeinsterCountiesPageRoutingModule
  ],
  declarations: [LeinsterCountiesPage]
})
export class LeinsterCountiesPageModule {}
