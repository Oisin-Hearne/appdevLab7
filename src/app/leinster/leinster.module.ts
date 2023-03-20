import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeinsterPageRoutingModule } from './leinster-routing.module';

import { LeinsterPage } from './leinster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeinsterPageRoutingModule
  ],
  declarations: [LeinsterPage]
})
export class LeinsterPageModule {}
