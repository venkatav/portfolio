import {Injectable} from 'angular2/core';

@Injectable()
export class SnackbarService {
  showSnackbar(message: string, actionHandler?: () => void, actionText?: string): void {
      document.querySelector('#menu-snackbar').MaterialSnackbar.showSnackbar({
        message,
        actionHandler,
        actionText
      });
  }
}