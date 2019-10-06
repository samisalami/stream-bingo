import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AdminComponent} from "./app-bingo/admin/admin.component";
import {AdminGuard} from "./app-guards/admin-guard";
import {UserService} from "./app-services/user.service";
import {AppRoutingModule} from "./app-routing/app-routing.module";

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [UserService, AdminGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
