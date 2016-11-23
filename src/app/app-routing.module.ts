import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { CanDeactivateGuard } from './auth-guard/can-deactivate-guard.service';
import { AuthGuard }          from './auth-guard/auth-guard.service';

import { TranslateService } from 'ng2-translate';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
      },
      { path: 'home', 
        loadChildren: './home/home.module#HomeModule'
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    TranslateService
  ]
})
export class AppRoutingModule {}