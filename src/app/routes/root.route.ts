import { LoginComponent } from './../login/login.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { Routes } from "@angular/router";

export const APP_MAIN_ROUTE : Routes = [
    {path : '', redirectTo : '/login', pathMatch : 'full'},
    {path : 'dashboard', component : DashboardComponent},
    {path : 'login', component : LoginComponent}
];