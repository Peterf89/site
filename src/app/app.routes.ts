import { Routes } from '@angular/router';
import { RivalsComponent } from './pages/rivals/rivals.component';
import { HomeComponent } from './pages/home/home.component';
import { CompetitionTiersComponent } from './pages/competition-tiers/competition-tiers.component';
import { FaqComponent } from './pages/faq/faq.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'faq', component: FaqComponent },  
  { path: 'pro/competition-tiers', component: CompetitionTiersComponent },
  { path: 'rivals', component: RivalsComponent }
];
