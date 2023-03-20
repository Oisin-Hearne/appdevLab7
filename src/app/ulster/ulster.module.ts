import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UlsterPageRoutingModule } from './ulster-routing.module';

import { UlsterPage } from './ulster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UlsterPageRoutingModule
  ],
  declarations: [UlsterPage]
})
export class UlsterPageModule {}
