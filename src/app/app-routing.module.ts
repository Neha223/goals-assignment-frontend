import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './data/data.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'records', component: DataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
