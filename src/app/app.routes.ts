import { Routes } from '@angular/router';
import { PublicDashboardComponent } from './dashboard/public-dashboard/public-dashboard.component';
import { LoginComponent } from './Authentication/login/login.component';

export const routes: Routes = [
{
    path:"",
    component:PublicDashboardComponent
},
{
    path:'login',
    component:LoginComponent
}
];
