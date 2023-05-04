import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AminHomeComponent } from './amin-home/amin-home.component';

import { NgxCaptchaModule } from 'ngx-captcha';
import { CaptchaComponent } from './captcha/captcha.component';
import { EnvoyerComponent } from './envoyer/envoyer.component';
import { FactureComponent } from './facture/facture.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogaminComponent } from './logamin/logamin.component';
import { SettingsComponent } from './settings/settings.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { Info1Component } from './info1/info1.component';
import { AdminaminHomeComponent } from './adminamin-home/adminamin-home.component';
import { AdminlogaminComponent } from './adminlogamin/adminlogamin.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminnotificationsComponent } from './adminnotifications/adminnotifications.component';
import { AdminfacturesComponent } from './adminfactures/adminfactures.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,

    InscriptionComponent,
    HomeComponent,
    LoginComponent,
    AminHomeComponent,
    CaptchaComponent,
    EnvoyerComponent,
    FactureComponent,
    DashboardComponent,
    AbonnementComponent,
    ReclamationComponent,
    ModalBasicComponent,
    WelcomeComponent,
    LogaminComponent,
    SettingsComponent,
    MapsComponent,
    NotificationsComponent,
    Info1Component,
    AdminaminHomeComponent,
    AdminlogaminComponent,
    AdminSettingsComponent,
    AdminnotificationsComponent,
    AdminfacturesComponent,
    ContactComponent,

   
  
  ],
  imports: [
  
    AppRoutingModule,
    NgxCaptchaModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
