import { Injectable } from "@angular/core";
import { Flight, FlightService } from "@flight-workspace/flight-api";
import { BehaviorSubject } from "rxjs";


@Injectable({ providedIn: 'root' })
export class FlightBookingFacade {

    // flights: Flight[];
    
    private flightsSubject = new BehaviorSubject<Flight[]>([]);
    public flights$ = this.flightsSubject.asObservable();

    // flightsSubject.next([...])
    // flightsSubject.subscribe((flights) => ...) // Observable
    // {{ flights$ | async }}


    constructor(private flightService: FlightService) {
    }

    load(from: string, to: string, urgent: boolean): void {
        this.flightService.find(from, to, urgent).subscribe(
            flights => { this.flightsSubject.next(flights); },
            err => console.error('err', err)
        );
    }

}