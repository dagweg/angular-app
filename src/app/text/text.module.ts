import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';

@NgModule({
  declarations: [HeadingComponent],
  imports: [CommonModule],
  exports: [HeadingComponent],
})
export class TextModule {}
