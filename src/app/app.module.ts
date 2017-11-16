import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import {LoginPageComponent} from './pages/login.page.component';
import {DashboardComponent} from "./components/Dashboard/dashboard.component";

import {AuthenticationService} from "./services/auth.service";
import {DivisionService} from "./services/division.service";
import {LoginService} from "./services/login.service";
import {GenderService} from "./services/gender.service";
import {CountryService} from "./services/country.service";
import {PositionService} from "./services/position.service";
import {DepartmentService} from "./services/department.service";

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        SuiModule,
        AppRoutingModule
    ],
    providers: [
        AuthenticationService,
        DivisionService,
        LoginService,
        GenderService,
        CountryService,
        PositionService,
        DepartmentService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
