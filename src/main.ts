import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app_root/app.config';
import { AppComponent } from './app/app_root/app_root';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
