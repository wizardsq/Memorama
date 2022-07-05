import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemoramaComponent} from './components/memorama/memorama.component';

// @ts-ignore
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
