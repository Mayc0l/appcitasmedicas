import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocitasComponent } from './registrocitas.component';

describe('RegistrocitasComponent', () => {
  let component: RegistrocitasComponent;
  let fixture: ComponentFixture<RegistrocitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrocitasComponent]
    });
    fixture = TestBed.createComponent(RegistrocitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
