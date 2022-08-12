import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PermissionService } from './service/permission.service';

@NgModule({
  imports: [CommonModule, SharedModule],
})
export class PermissionsModule {}
