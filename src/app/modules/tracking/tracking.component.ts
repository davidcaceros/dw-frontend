import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css'],
})
export class TrackingComponent implements OnInit {
  private baseUrl = `${environment.URLBase}`;
  packageStatus = '';
  packageData: any;
  trackingCode: string = '';
  showError: boolean = false;

  constructor(private Router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  searchPackage() {
    const url = `${this.baseUrl}/tracking/${this.trackingCode}`;
    this.http.get(url).subscribe(
      (data: any) => {
        this.packageData = data;
        this.packageStatus = data.estado;
        this.showError = false;
      },
      () => {
        this.showError = true;
      }
    );
  }

  goToLogin() {
    this.Router.navigate(['/punto-de-venta/login']);
  }
}
