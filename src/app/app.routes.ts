import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PainelComponent } from './painel/painel.component';

export const routes: Routes = [
  // Define your routes here
  // Example:
  { path: '', redirectTo: '/painel', pathMatch: 'full' },
  { path: 'painel', component: PainelComponent },
  { path: 'cadastro', component: CadastroComponent },
];
