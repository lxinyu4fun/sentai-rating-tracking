import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app_root/app_root';
import { config } from './app/app_root/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
