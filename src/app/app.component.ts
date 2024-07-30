import { Component, NgModule } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { TextModule } from './text/text.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoreModule, SharedModule, TextModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'angular-app';
}
