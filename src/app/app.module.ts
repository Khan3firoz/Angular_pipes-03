import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
