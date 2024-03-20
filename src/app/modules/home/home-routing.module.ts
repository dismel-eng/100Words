import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App100wordsComponent } from './app-100words/app-100words.component';

const routes: Routes = [
  { path: '', component: App100wordsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
