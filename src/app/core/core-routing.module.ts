import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../features/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [ AuthGuard ],
  },
  {
    path: 'login',
    loadChildren: () => import('../features/login/login.module').then(m => m.LoginModule),
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
