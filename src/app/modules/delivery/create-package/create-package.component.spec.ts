import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePackageComponent } from './create-package.component';

describe('CreatePackageComponent', () => {
  let component: CreatePackageComponent;
  let fixture: ComponentFixture<CreatePackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePackageComponent]
    });
    fixture = TestBed.createComponent(CreatePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
