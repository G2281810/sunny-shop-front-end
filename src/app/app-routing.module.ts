import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './common/layouts/admin-layout/admin-layout.component';

const routes: Routes = [
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
