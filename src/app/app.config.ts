import localePt from '@angular/common/locales/pt';
import { ApplicationConfig, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
registerLocaleData(localePt);

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';

import { provideAnimations } from '@angular/platform-browser/animations';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr';
import { provideDialogConfig } from '@ngneat/dialog';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    { provide: LOCALE_ID, useValue: 'pt-br' },
    provideAnimations(),
    provideToastr({
      timeOut: 3000,
      progressBar: true
    }),
    provideAnimationsAsync(),
    provideDialogConfig({
      enableClose: true,
      backdrop: true,
      }),
      importProvidersFrom(NgxLoadingModule.forRoot({
        animationType: ngxLoadingAnimationTypes.circleSwish,
        backdropBackgroundColour: "rgba(0,0,0,0.1)",
        backdropBorderRadius: "4px",
        primaryColour: "#312e81",
        secondaryColour: "#ffffff",
        tertiaryColour: "#ffffff",
      }))
  ]
};


