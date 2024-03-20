import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App100wordsComponent } from './app-100words/app-100words.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    App100wordsComponent,
    HomeRoutingModule
  ]
})
export class HomeModule { }
