import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  logSuccess(message: string) {
    console.log('%c🚀 Success:', 'color: green; font-weight: bold;', message);
  }

  logWarning(message: string) {
    console.log('%c⚠️ Warning:', 'color: orange; font-weight: bold;', message);
  }

  logError(message: string) {
    console.log('%c❌ Error:', 'color: red; font-weight: bold;', message);
  }
}
