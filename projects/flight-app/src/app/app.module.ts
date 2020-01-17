import { FlightCancellingModule } from "./flight-booking/flight-cancelling/flight-cancelling.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FlightApiModule } from "@flight-workspace/flight-api";

import { AppComponent } from "./app.component";
import { APP_EXTRA_OPTIONS, APP_ROUTES } from "./app.routes";
import { BasketComponent } from "./basket/basket.component";
import { FlightBookingModule } from "./flight-booking/flight-booking.module";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SharedModule } from "./shared/shared.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LoggerModule, LoggerConfig, LoggerService } from "@my/logger-lib";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,

    FlightBookingModule,

    BrowserAnimationsModule,
    FlightCancellingModule,

    LoggerModule.forRoot({
      enableDebug: true
    }),

    FlightApiModule.forRoot(),
    SharedModule.forRoot(),
    RouterModule.forRoot([...APP_ROUTES], { ...APP_EXTRA_OPTIONS }),
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent
  ],
  providers: [
    // { provide: LoggerConfig, useValue: {enableDebug: false }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(logger: LoggerService) {
    // logger.debug('Manfred was here!');
    // logger.log('You have been haaaacked!');
  }

}
