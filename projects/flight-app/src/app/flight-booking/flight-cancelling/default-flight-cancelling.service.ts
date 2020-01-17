import { FlightCancellingService } from './flight-cancelling.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DefaultFlightCancellingService implements FlightCancellingService {

    show(flightId: number): void {
        alert('not implemented yet!');
    }
   
}
