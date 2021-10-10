import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'add-cliente', loadChildren: './add-cliente/add-cliente.module#AddClientePageModule' },
  { path: 'mostrar-cliente', loadChildren: './mostrar-cliente/mostrar-cliente.module#MostrarClientePageModule' },
  { path: 'clientes', loadChildren: './clientes/clientes.module#ClientesPageModule' },
  { path: 'add-cliente/:id/:nome/:telefone/:email', loadChildren: './add-cliente/add-cliente.module#AddClientePageModule' },
  { path: 'mostrar-cliente/:id/:nome/:telefone/:email', loadChildren: './mostrar-cliente/mostrar-cliente.module#MostrarClientePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
