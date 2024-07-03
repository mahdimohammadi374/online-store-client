import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";

// components
import { AppComponent } from "./app.component";

// modules
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import {provideHttpClient } from "@angular/common/http";

@NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      SharedModule,
      CoreModule,
    ],
    providers: [provideHttpClient()],
    bootstrap: [AppComponent]
  })
  export class AppModule { }