import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { appConfig } from './app/app.config';
// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((error) => console.log(error));
