import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading:  boolean  = false;

  constructor() { }

  showLoader() {
    this.loading = true;
  }
  hideLoader() {
    this.loading = false;
  }
  getLoading(): boolean {
    return this.loading;
  }

}