import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminComponent} from './app-bingo/admin/admin.component';
import {AdminGuard} from './app-guards/admin-guard';
import {UserService} from './app-services/user.service';

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule
    ],
    providers: [AdminGuard, UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
