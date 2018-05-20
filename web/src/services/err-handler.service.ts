import { ErrorHandler, Injectable} from '@angular/core';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  handleError(error: Error) {
     console.error('ng global error -', error.name, error.message, error.stack);
  }
}