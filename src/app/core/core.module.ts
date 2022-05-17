import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { SidenavItemComponent } from './components/sidenav/sidenav-item/sidenav-item.component';

@NgModule({
  declarations: [AuthLayoutComponent, MainLayoutComponent, SidenavComponent, SidenavItemComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
  ],
})
export class CoreModule {}
