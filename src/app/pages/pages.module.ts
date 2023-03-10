import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ComponentsModule } from '../components/components.module';
import { MainComponent } from './main/main.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    MainComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ], 
  exports:[
    HomeComponent,
    UserComponent
  ]
})
export class PagesModule { }
