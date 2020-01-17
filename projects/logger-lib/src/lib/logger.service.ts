import { Injectable, Optional } from '@angular/core';
import { LoggerConfig } from './logger.config';

@Injectable({
  providedIn: 'root' 
})
export class LoggerService {

  constructor(@Optional() private config: LoggerConfig) {
  }

  debug(message: string): void {
    if (!this.config.enableDebug) return;
    console.debug(message);
  }

  log(message: string): void {
    console.log(message);
  }

}
