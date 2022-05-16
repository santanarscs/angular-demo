import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

@NgModule({
  declarations: [PatientsListComponent],
  imports: [CommonModule, PatientsRoutingModule, AppMaterialModule],
})
export class PatientsModule {}
