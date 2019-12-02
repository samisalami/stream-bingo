import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './app-bingo/admin/admin.component';
import {AdminGuard} from './app-guards/admin-guard';
import {AppComponent} from './app.component';

const routes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
    { path: 'card/:id', component: AppComponent },
    { path: '**', component: AppComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
