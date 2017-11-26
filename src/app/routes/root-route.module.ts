import { LoginComponent } from './../login/login.component';
import { MaterialModule } from './../material.module';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { APP_MAIN_ROUTE } from './root.route';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  imports: [RouterModule.forRoot(APP_MAIN_ROUTE), MaterialModule],
  exports: [RouterModule],
  declarations : [DashboardComponent,LoginComponent]
})
export class RootRoutingModule { }