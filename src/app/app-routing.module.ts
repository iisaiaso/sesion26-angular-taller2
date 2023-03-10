import { DetalleComponent } from './pages/detalle/detalle.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from './guard/permissions.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'user', component: UserComponent },
      { path: 'detalle/:id', component: DetalleComponent },
      { path: '**', pathMatch: 'full', redirectTo: '' }

    ], canActivate: [PermissionsGuard]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
