import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {path: 'register',component:RegisterComponent},
  {path:'tables',component:TablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
