import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-fetcher',
  templateUrl: './api-fetcher.component.html',
  styleUrls: ['./api-fetcher.component.css'],
})
export class ApiFetcherComponent {
  constructor(private apiService: ApiService) {}
  dog: any = '';
  loading: boolean = false;

  clickFetch() {
    this.loading = true;
    this.apiService.get().subscribe((res) => {
      this.loading = false;
      this.dog = res;
    });
  }
}
