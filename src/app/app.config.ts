import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { handlerDataInterceptor } from './core/interceptors/handler-data.interceptor';
import { loaderInterceptor } from './core/interceptors/loader.interceptor';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  provideClientHydration(),
  provideHttpClient(withInterceptors([loaderInterceptor, handlerDataInterceptor])),
  {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('1043965372742-i63904mpo3ri0nu9erd49p61jissrqd1.apps.googleusercontent.com')
        }
      ],
      onError: (err: any) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }]
};
