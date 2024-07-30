import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TextModule } from "../text/text.module";

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, TextModule],
  exports: [ContactComponent],
})
export class ContactModule {}
