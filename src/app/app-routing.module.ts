import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) },
  { path: 'auth', loadChildren: () => import('src/app/pages/auth/auth.module').then( m => m.AuthModule) },
  { path: 'contas', loadChildren: () => import('src/app/pages/contas/contas/contas.module').then( m => m.ContasModule) },
  {path: 'lista', loadChildren: () => import('./pages/contas/lista/lista.module').then( m => m.ListaPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
