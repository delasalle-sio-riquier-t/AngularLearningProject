import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LearningComponentComponent } from './learning-component/learning-component.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LearningComponentComponent,
    AppareilComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
