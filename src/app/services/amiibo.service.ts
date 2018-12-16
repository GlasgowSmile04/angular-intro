import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

import { AmiiboInterface } from '../interfaces/amiibo-interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  constructor(private api: ApiService) { }

  getAmiibos() {
    return this.api.get('/amiibo');
  }

  getAmiibo(id: string) {
    return this.api.get(`/amiibo/?tail=${id}`);
  }

  getFilteredAmiibos(category: string, value: string) {
    return this.api.get(`/amiibo/?${category}=${value}`);
  }
}
