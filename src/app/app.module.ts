import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppchildComponent } from './appchild/appchild.component';
import { ChildComponent } from './child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ExponentialStrengthPipe,
    AppchildComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
