
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AminHomeComponent } from './amin-home/amin-home.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FactureComponent } from './facture/facture.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
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

import { AppComponent } from './app.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { EnvoyerComponent } from './envoyer/envoyer.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';


const routes: Routes = [
  {path:'modal-basic',component:ModalBasicComponent},
  {path:'envoyer',component:EnvoyerComponent},
  {path:'contact',component:ContactComponent},
  {path:'captcha',component:CaptchaComponent},
  {path:'settings',component:SettingsComponent},
  {path:'info1',component:Info1Component},
  {path:'maps',component:MapsComponent},
  
  {path:'notifications',component:NotificationsComponent},
  { path: '', component: HomeComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'login', component: LoginComponent },
  {path:'welcome',component:WelcomeComponent},
  {path:'logamin',component:LogaminComponent},
 
  {
    path: 'amin-home', component: AminHomeComponent, children: [
      { path: 'factures', component: FactureComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'abonnements', component: AbonnementComponent },
      { path: 'reclamations', component: ReclamationComponent },

]},
{path:'adminlogamin', component:AdminlogaminComponent},
{
  path:'adminamin-home',component:AdminaminHomeComponent, children:[
    {path:'adminfactures',component:AdminfacturesComponent},
  ]},
{path:'admin-settings',component:AdminSettingsComponent},
{path:'adminnotifications',component:AdminnotificationsComponent},


];


@NgModule({

  declarations: [AppComponent],
  imports: [AppRoutingModule],
  providers: [],
 
})
export class AppRoutingModule {
 
 }
 