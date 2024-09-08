import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading:  boolean  = false;
  private loadingDNA: boolean = false;
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



  showDNALoader() {
    this.loadingDNA = true;
  }
  hideDNALoader() {
    this.loadingDNA = false;
  }
  getDNALoading(): boolean {
    return this.loadingDNA;
  }


}