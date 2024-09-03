import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';

import { StationPageComponent } from './station-page.component';

describe('StationPageComponent', () => {
  let component: StationPageComponent;
  let fixture: ComponentFixture<StationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
