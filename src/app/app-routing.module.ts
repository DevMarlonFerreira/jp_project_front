import { inject, NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { map } from "rxjs/operators";
import { AuthGuard } from "./auth.guard";

// import { AuthService } from "./core/services/auth.service";

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('../app/features/signup/signup.module').then(
        (m) => m.SignupModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app/features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
      canActivate: [AuthGuard],
    // canActivate: [
    //   () => inject(AuthService).isLoggedIn,
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
