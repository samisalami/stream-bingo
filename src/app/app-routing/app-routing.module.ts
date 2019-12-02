import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from '../app.component';
import {AdminComponent} from '../app-bingo/admin/admin.component';
import {AdminGuard} from '../app-guards/admin-guard';

const routes: Routes = [
  { path: 'card/:id', component: AppComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
