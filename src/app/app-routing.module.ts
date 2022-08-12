import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './common/guards/login.guard';
import { AdminLayoutComponent } from './common/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './common/layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    canLoad: [LoginGuard],
    component: AuthLayoutComponent,
    loadChildren: async () => (await import('./auth/auth.module')).AuthModule,
  },

  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    loadChildren: async () =>
      (await import('./dashboard/dashboard.module')).DashboardModule,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
