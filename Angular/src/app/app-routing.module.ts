import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ImageGridComponent } from './image-grid/image-grid.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
