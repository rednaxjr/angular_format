 import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from "@angular/common/http";
import { AuthGuard } from './services/auth.guard';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(
    
      withInterceptorsFromDi(),
    ),
  ]
};
