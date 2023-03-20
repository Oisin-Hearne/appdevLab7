import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MunsterPageRoutingModule } from './munster-routing.module';

import { MunsterPage } from './munster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MunsterPageRoutingModule
  ],
  declarations: [MunsterPage]
})
export class MunsterPageModule {}
