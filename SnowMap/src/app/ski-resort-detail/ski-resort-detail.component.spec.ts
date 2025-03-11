import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiResortDetailComponent } from './ski-resort-detail.component';

describe('SkiResortDetailComponent', () => {
  let component: SkiResortDetailComponent;
  let fixture: ComponentFixture<SkiResortDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkiResortDetailComponent]
    });
    fixture = TestBed.createComponent(SkiResortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
