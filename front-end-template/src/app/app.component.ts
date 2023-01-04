import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-end-template';

  loading = false;

  constructor(protected loadingService: LoadingService) {
    setTimeout(() => {
      this.loadingService.onLoadingChanged.subscribe(
        (isLoading) => (this.loading = isLoading)
      );
    }, 0);
  }
}
