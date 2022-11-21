import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParametersPageComponent } from './parameters-page/parameters-page.component';
import { ProtectedPageComponent } from './protected-page/protected-page.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';

const routes: Routes = [
  {path: 'primeira-pagina', component: FirstPageComponent},
  {path: 'segunda-pagina', component: SegundaPaginaComponent},
  {path: 'pagina-protegida', component: ProtectedPageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'primeira-pagina', pathMatch: 'full'},
  {path: 'pagina-com-parametros/:id', component:ParametersPageComponent},
  { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
